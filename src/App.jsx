import { startTransition, useDeferredValue, useEffect, useMemo, useState } from "react";
import { courseData } from "./data/courseData.js";

const STORAGE_KEYS = {
  language: "dog-course-react-language",
  filter: "dog-course-react-filter",
  activeLessonId: "dog-course-react-active-lesson",
  completed: "dog-course-react-completed"
};

const UI_TEXT = {
  en: {
    appTitle: "Dog Ethology & Behavior",
    appSubtitle: "Curriculum plan · 114 lessons",
    progress: "Progress",
    searchPlaceholder: "Search topics...",
    filters: {
      all: "All",
      today: "Today",
      upcoming: "Upcoming",
      done: "Done"
    },
    todayButton: "Today",
    currentLesson: "Lesson",
    from: "of",
    todayBadge: "Today",
    keyTopics: "Key lesson topics",
    complete: "Mark as completed",
    completed: "Completed",
    next: "Next",
    empty: "No lessons match the current search and filter.",
    language: "Language"
  },
  pl: {
    appTitle: "Kynologia i Behawiorystyka",
    appSubtitle: "Plan nauki · 114 lekcji",
    progress: "Postęp",
    searchPlaceholder: "Szukaj tematów...",
    filters: {
      all: "Wszystkie",
      today: "Dziś",
      upcoming: "Dalej",
      done: "Ukończone"
    },
    todayButton: "Dziś",
    currentLesson: "Lekcja",
    from: "z",
    todayBadge: "Dziś",
    keyTopics: "Kluczowe tematy lekcji",
    complete: "Oznacz jako ukończone",
    completed: "Ukończone",
    next: "Następna",
    empty: "Brak lekcji pasujących do bieżącego wyszukiwania i filtra.",
    language: "Język"
  },
  ru: {
    appTitle: "Кинология и Бихевиористика",
    appSubtitle: "Учебный план · 114 занятий",
    progress: "Прогресс",
    searchPlaceholder: "Поиск по темам...",
    filters: {
      all: "Все",
      today: "Сегодня",
      upcoming: "Впереди",
      done: "Пройдено"
    },
    todayButton: "Сегодня",
    currentLesson: "Занятие",
    from: "из",
    todayBadge: "Сегодня",
    keyTopics: "Ключевые темы занятия",
    complete: "Отметить как пройденное",
    completed: "Пройдено",
    next: "Далее",
    empty: "Нет занятий, подходящих под текущий поиск и фильтр.",
    language: "Язык"
  }
};

const LANGUAGES = ["en", "pl", "ru"];
const FILTERS = ["all", "today", "upcoming", "done"];

function readStorage(key, fallback) {
  if (typeof window === "undefined") {
    return fallback;
  }
  return window.localStorage.getItem(key) ?? fallback;
}

function readStorageArray(key) {
  if (typeof window === "undefined") {
    return [];
  }
  try {
    return JSON.parse(window.localStorage.getItem(key) ?? "[]");
  } catch {
    return [];
  }
}

function getLocalizedValue(source, language) {
  if (!source) {
    return "";
  }
  if (typeof source === "string") {
    return source;
  }
  return source[language] ?? source.ru ?? source.en ?? source.pl ?? "";
}

function getLessonContent(lesson, language) {
  return lesson.translations[language] ?? lesson.translations.ru;
}

function flattenLessons() {
  return courseData.modules.flatMap((module) =>
    module.lessons.map((lesson, index) => ({
      ...lesson,
      moduleId: module.id,
      moduleOrder: module.order,
      moduleAccent: module.accent,
      moduleTranslations: module.translations,
      moduleLessonIndex: index,
      globalOrder:
        courseData.modules
          .filter((candidate) => candidate.order < module.order)
          .reduce((sum, candidate) => sum + candidate.lessons.length, 0) +
        index +
        1
    }))
  );
}

function getTodayIndex(totalLessons) {
  const today = new Date();
  const start = new Date(2026, 3, 2);
  const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24));
  const normalized = Number.isFinite(diff) ? diff : 0;
  return Math.max(0, Math.min(totalLessons - 1, normalized));
}

function getLessonDate(index) {
  const start = new Date(2026, 3, 2);
  const date = new Date(start);
  date.setDate(start.getDate() + index);
  return date;
}

function formatDate(date, language) {
  const localeMap = {
    en: "en-US",
    pl: "pl-PL",
    ru: "ru-RU"
  };

  return new Intl.DateTimeFormat(localeMap[language] ?? "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date);
}

function truncate(value, maxLength) {
  if (!value || value.length <= maxLength) {
    return value;
  }
  return `${value.slice(0, maxLength - 1).trimEnd()}...`;
}

function toggleSetValue(value, setter) {
  setter((previous) => {
    const next = new Set(previous);
    if (next.has(value)) {
      next.delete(value);
    } else {
      next.add(value);
    }
    return next;
  });
}

export default function App() {
  const [language, setLanguage] = useState(() => readStorage(STORAGE_KEYS.language, "ru"));
  const [filter, setFilter] = useState(() => readStorage(STORAGE_KEYS.filter, "all"));
  const [query, setQuery] = useState("");
  const [completed, setCompleted] = useState(() => new Set(readStorageArray(STORAGE_KEYS.completed)));
  const [activeLessonId, setActiveLessonId] = useState(() => {
    const fromHash = typeof window !== "undefined" ? window.location.hash.slice(1) : "";
    return fromHash || readStorage(STORAGE_KEYS.activeLessonId, "");
  });

  const deferredQuery = useDeferredValue(query);
  const dict = UI_TEXT[language];
  const lessons = useMemo(() => flattenLessons(), []);
  const todayIndex = useMemo(() => getTodayIndex(lessons.length), [lessons.length]);

  const visibleLessons = useMemo(() => {
    const normalized = deferredQuery.trim().toLowerCase();

    return lessons.filter((lesson, index) => {
      const content = getLessonContent(lesson, language);
      const moduleContent = getLocalizedValue(lesson.moduleTranslations, language);
      const haystack = [
        content.title,
        content.summary,
        ...content.outcomes,
        moduleContent.label,
        moduleContent.summary
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = !normalized || haystack.includes(normalized);
      const matchesFilter =
        filter === "all"
          ? true
          : filter === "today"
            ? index === todayIndex
            : filter === "upcoming"
              ? !completed.has(lesson.id) && index >= todayIndex
              : completed.has(lesson.id);

      return matchesSearch && matchesFilter;
    });
  }, [completed, deferredQuery, filter, language, lessons, todayIndex]);

  const activeLesson =
    visibleLessons.find((lesson) => lesson.id === activeLessonId) ??
    lessons.find((lesson) => lesson.id === activeLessonId) ??
    visibleLessons[0] ??
    lessons[0];

  const activeIndex = activeLesson ? lessons.findIndex((lesson) => lesson.id === activeLesson.id) : -1;
  const activeContent = activeLesson ? getLessonContent(activeLesson, language) : null;
  const activeModule = activeLesson ? getLocalizedValue(activeLesson.moduleTranslations, language) : null;
  const activeDate = activeIndex >= 0 ? getLessonDate(activeIndex) : null;
  const previousLesson = activeIndex > 0 ? lessons[activeIndex - 1] : null;
  const nextLesson = activeIndex >= 0 && activeIndex < lessons.length - 1 ? lessons[activeIndex + 1] : null;
  const progressValue = lessons.length ? (completed.size / lessons.length) * 100 : 0;

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(STORAGE_KEYS.language, language);
  }, [language]);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEYS.filter, filter);
  }, [filter]);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEYS.completed, JSON.stringify([...completed]));
  }, [completed]);

  useEffect(() => {
    if (activeLesson) {
      setActiveLessonId(activeLesson.id);
    }
  }, [activeLesson]);

  useEffect(() => {
    if (!activeLessonId) {
      return;
    }
    window.localStorage.setItem(STORAGE_KEYS.activeLessonId, activeLessonId);
    window.history.replaceState(null, "", `#${activeLessonId}`);
  }, [activeLessonId]);

  return (
    <div className="planner-shell">
      <aside className="sidebar">
        <section className="sidebar-block brand-block">
          <div>
            <h1 className="sidebar-title">{dict.appTitle}</h1>
            <p className="sidebar-subtitle">{dict.appSubtitle}</p>
          </div>
          <div className="language-inline">
            <span>{dict.language}</span>
            <div className="language-switch">
              {LANGUAGES.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`lang-button${language === item ? " is-active" : ""}`}
                  onClick={() => startTransition(() => setLanguage(item))}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="sidebar-block progress-block">
          <div className="progress-row">
            <span>{dict.progress}</span>
            <strong>
              {completed.size} / {lessons.length}
            </strong>
          </div>
          <div className="progress-track" aria-hidden="true">
            <div className="progress-fill" style={{ width: `${progressValue}%` }} />
          </div>
        </section>

        <section className="sidebar-block search-block">
          <input
            className="search-input"
            type="search"
            value={query}
            onChange={(event) => startTransition(() => setQuery(event.target.value))}
            placeholder={dict.searchPlaceholder}
            aria-label={dict.searchPlaceholder}
          />
        </section>

        <section className="sidebar-block filter-block">
          <div className="pill-row">
            {FILTERS.map((item) => (
              <button
                key={item}
                type="button"
                className={`filter-pill${filter === item ? " is-active" : ""}`}
                onClick={() => startTransition(() => setFilter(item))}
              >
                {dict.filters[item]}
              </button>
            ))}
          </div>
        </section>

        <section className="sidebar-block lesson-list-block">
          {visibleLessons.length === 0 ? (
            <div className="empty-sidebar">{dict.empty}</div>
          ) : (
            visibleLessons.map((lesson, index) => {
              const content = getLessonContent(lesson, language);
              const lessonIndex = lessons.findIndex((item) => item.id === lesson.id);
              const isToday = lessonIndex === todayIndex;
              const isDone = completed.has(lesson.id);

              return (
                <button
                  key={lesson.id}
                  type="button"
                  className={`lesson-nav-item${lesson.id === activeLesson?.id ? " is-active" : ""}${isDone ? " is-done" : ""}${isToday ? " is-today" : ""}`}
                  onClick={() => setActiveLessonId(lesson.id)}
                >
                  <span className="lesson-nav-order">{String(index + 1).padStart(2, "0")}</span>
                  <span className="lesson-nav-copy">
                    <span className="lesson-nav-title">{content.title}</span>
                  </span>
                  <span className="lesson-nav-check" aria-hidden="true" />
                </button>
              );
            })
          )}
        </section>
      </aside>

      <main className="main">
        {activeLesson && activeContent && activeModule && activeDate ? (
          <>
            <div className="main-toolbar">
              <p className="main-date">{formatDate(activeDate, language)}</p>
              <button
                type="button"
                className="today-button"
                onClick={() => setActiveLessonId(lessons[todayIndex]?.id ?? activeLesson.id)}
              >
                {"<-"} {dict.todayButton}
              </button>
            </div>

            <div className="lesson-eyebrow-row">
              <span className="lesson-counter">
                {dict.currentLesson} {activeIndex + 1} {dict.from} {lessons.length}
              </span>
              {activeIndex === todayIndex ? <span className="today-pill">{dict.todayBadge}</span> : null}
            </div>

            <h2 className="lesson-title">{activeContent.title}</h2>
            <p className="lesson-date-line">{formatDate(activeDate, language)}</p>
            <div className="lesson-tag">{activeModule.label}</div>

            <section className="summary-box">
              <p>{activeContent.summary}</p>
            </section>

            <section className="topics-section">
              <p className="section-label">{dict.keyTopics}</p>
              <ul className="topics-list">
                {activeContent.outcomes.slice(0, 4).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <button
              type="button"
              className={`complete-button${completed.has(activeLesson.id) ? " is-done" : ""}`}
              onClick={() => toggleSetValue(activeLesson.id, setCompleted)}
            >
              {completed.has(activeLesson.id) ? dict.completed : dict.complete}
            </button>

            <div className="nav-divider" />

            <div className="lesson-navigation">
              <button
                type="button"
                className="nav-arrow"
                onClick={() => previousLesson && setActiveLessonId(previousLesson.id)}
                disabled={!previousLesson}
              >
                {"<-"}
              </button>
              <button
                type="button"
                className="nav-next"
                onClick={() => nextLesson && setActiveLessonId(nextLesson.id)}
                disabled={!nextLesson}
              >
                {nextLesson
                  ? `${dict.next}: ${truncate(getLessonContent(nextLesson, language).title, 26)} ->`
                  : `${dict.next} ->`}
              </button>
            </div>
          </>
        ) : (
          <div className="empty-sidebar">{dict.empty}</div>
        )}
      </main>
    </div>
  );
}
