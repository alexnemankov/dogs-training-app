import { startTransition, useDeferredValue, useEffect, useMemo, useState } from "react";
import { courseData } from "./data/courseData.js";

const STORAGE_KEYS = {
  language: "dog-course-react-language",
  filter: "dog-course-react-filter",
  activeLessonId: "dog-course-react-active-lesson",
  completed: "dog-course-react-completed",
  saved: "dog-course-react-saved"
};

const UI_TEXT = {
  en: {
    brandKicker: "React curriculum workspace",
    brandTitle: "Dog Course Planner",
    brandSubtitle:
      "A React foundation for a multilingual dog education app with full module coverage and room for future lesson media.",
    introBadge: "Future-ready frontend",
    introTitle: "All original modules are back on a React structure.",
    introCopy:
      "The legacy planner is now a Vite and React app with 114 lessons, 6 modules, and language-specific lesson data for EN, PL, and RU.",
    searchLabel: "Search lessons",
    searchPlaceholder: "Search by lesson title, summary, or module",
    filterLabel: "Filter",
    mapTitle: "Course map",
    mapSubtitle: "Explore the full curriculum by module and lesson status",
    currentLesson: "Current lesson",
    overviewTitle: "Lesson overview",
    outcomesTitle: "Learning outcomes",
    materialsTitle: "Suggested materials",
    resourcesTitle: "Content blocks",
    resourcesCopy: "Each lesson is prepared for lecture assets, summaries, and future media.",
    roadmapTitle: "Module roadmap",
    roadmapCopy: "Navigate all lessons in the current module from one place.",
    platformTitle: "Development notes",
    platformCopy: "The app is now ready for richer content, routing, API integration, and a future CMS.",
    complete: "Mark complete",
    completed: "Completed",
    save: "Save lesson",
    saved: "Saved",
    seededLessons: "Lessons",
    modules: "Modules",
    savedStat: "Saved",
    completedStat: "Completed",
    duration: "Duration",
    level: "Level",
    module: "Module",
    searchEmpty: "No lessons match this search and filter combination.",
    devNote: "The course data now carries separate language content per lesson, so you can keep expanding EN, PL, and RU directly in one structure.",
    minutesShort: "min",
    formatLabels: {
      reading: "Reading",
      video: "Video",
      workshop: "Workshop"
    },
    filters: {
      all: "All",
      continue: "Continue",
      saved: "Saved",
      reading: "Reading",
      video: "Video",
      workshop: "Workshop"
    },
    languageLabel: "Language"
  },
  pl: {
    brandKicker: "Reactowy workspace programu",
    brandTitle: "Dog Course Planner",
    brandSubtitle:
      "Reactowa baza dla wielojezycznej aplikacji edukacyjnej o psach z pelnym zakresem modulow i miejscami na media lekcji.",
    introBadge: "Frontend gotowy na rozwoj",
    introTitle: "Wszystkie oryginalne moduly wrocily na strukturze React.",
    introCopy:
      "Stary planer zostal przebudowany na aplikacje Vite i React z 114 lekcjami, 6 modulami oraz osobnymi danymi dla EN, PL i RU.",
    searchLabel: "Szukaj lekcji",
    searchPlaceholder: "Szukaj po tytule, opisie lub module",
    filterLabel: "Filtr",
    mapTitle: "Mapa kursu",
    mapSubtitle: "Przegladaj caly program wedlug modulow i statusu lekcji",
    currentLesson: "Biezaca lekcja",
    overviewTitle: "Przeglad lekcji",
    outcomesTitle: "Efekty nauki",
    materialsTitle: "Sugerowane materialy",
    resourcesTitle: "Bloki tresci",
    resourcesCopy: "Kazda lekcja ma przygotowane miejsce na materialy, podsumowania i przyszle media.",
    roadmapTitle: "Plan modulu",
    roadmapCopy: "Przechodz przez wszystkie lekcje aktualnego modulu z jednego miejsca.",
    platformTitle: "Notatki rozwojowe",
    platformCopy: "Aplikacja jest gotowa na bogatsza tresc, routing, integracje API i przyszly CMS.",
    complete: "Oznacz jako ukonczone",
    completed: "Ukonczone",
    save: "Zapisz lekcje",
    saved: "Zapisane",
    seededLessons: "Lekcje",
    modules: "Moduly",
    savedStat: "Zapisane",
    completedStat: "Ukonczone",
    duration: "Czas",
    level: "Poziom",
    module: "Modul",
    searchEmpty: "Brak lekcji pasujacych do wyszukiwania i filtra.",
    devNote: "Dane kursu maja teraz osobna tresc dla kazdej lekcji w EN, PL i RU, wiec mozesz dalej rozwijac wszystkie wersje w jednej strukturze.",
    minutesShort: "min",
    formatLabels: {
      reading: "Czytanie",
      video: "Wideo",
      workshop: "Warsztat"
    },
    filters: {
      all: "Wszystkie",
      continue: "Kontynuuj",
      saved: "Zapisane",
      reading: "Czytanie",
      video: "Wideo",
      workshop: "Warsztat"
    },
    languageLabel: "Jezyk"
  },
  ru: {
    brandKicker: "React-платформа курса",
    brandTitle: "Dog Course Planner",
    brandSubtitle:
      "React-основа для многоязычного образовательного приложения о собаках с полным набором модулей и слотами под медиа занятий.",
    introBadge: "Фронтенд для развития",
    introTitle: "Все исходные модули возвращены на React-структуру.",
    introCopy:
      "Старый планировщик перестроен в приложение на Vite и React со 114 занятиями, 6 модулями и отдельными языковыми данными для EN, PL и RU.",
    searchLabel: "Поиск по занятиям",
    searchPlaceholder: "Ищите по названию, описанию или модулю",
    filterLabel: "Фильтр",
    mapTitle: "Карта курса",
    mapSubtitle: "Весь учебный план по модулям и статусам занятий",
    currentLesson: "Текущее занятие",
    overviewTitle: "Обзор занятия",
    outcomesTitle: "Результаты обучения",
    materialsTitle: "Рекомендуемые материалы",
    resourcesTitle: "Контентные блоки",
    resourcesCopy: "Каждое занятие уже подготовлено под материалы, сводки и будущие медиа.",
    roadmapTitle: "План модуля",
    roadmapCopy: "Переключайтесь между всеми занятиями текущего модуля из одного блока.",
    platformTitle: "Заметки по развитию",
    platformCopy: "Приложение готово к более насыщенному контенту, роутингу, API и будущей CMS.",
    complete: "Отметить как пройденное",
    completed: "Пройдено",
    save: "Сохранить занятие",
    saved: "Сохранено",
    seededLessons: "Занятия",
    modules: "Модули",
    savedStat: "Сохранено",
    completedStat: "Пройдено",
    duration: "Длительность",
    level: "Уровень",
    module: "Модуль",
    searchEmpty: "Нет занятий, подходящих под текущий поиск и фильтр.",
    devNote: "Данные курса теперь содержат отдельный контент для каждого занятия на EN, PL и RU, поэтому все языки можно расширять в одной структуре.",
    minutesShort: "мин",
    formatLabels: {
      reading: "Чтение",
      video: "Видео",
      workshop: "Практика"
    },
    filters: {
      all: "Все",
      continue: "Продолжить",
      saved: "Сохранённые",
      reading: "Чтение",
      video: "Видео",
      workshop: "Практика"
    },
    languageLabel: "Язык"
  }
};

const LANGUAGES = ["en", "pl", "ru"];
const FILTERS = ["all", "continue", "saved", "reading", "video", "workshop"];

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

function getFormatLabel(format, dict) {
  return dict.formatLabels[format] ?? format;
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

export default function App() {
  const [language, setLanguage] = useState(() => readStorage(STORAGE_KEYS.language, "ru"));
  const [filter, setFilter] = useState(() => readStorage(STORAGE_KEYS.filter, "all"));
  const [query, setQuery] = useState("");
  const [completed, setCompleted] = useState(() => new Set(readStorageArray(STORAGE_KEYS.completed)));
  const [saved, setSaved] = useState(() => new Set(readStorageArray(STORAGE_KEYS.saved)));
  const [activeLessonId, setActiveLessonId] = useState(() => {
    const fromHash = typeof window !== "undefined" ? window.location.hash.slice(1) : "";
    return fromHash || readStorage(STORAGE_KEYS.activeLessonId, "");
  });

  const deferredQuery = useDeferredValue(query);
  const dict = UI_TEXT[language];
  const lessons = useMemo(() => flattenLessons(), []);

  const visibleLessons = useMemo(() => {
    const normalized = deferredQuery.trim().toLowerCase();

    return lessons.filter((lesson) => {
      const content = getLessonContent(lesson, language);
      const moduleContent = getLocalizedValue(lesson.moduleTranslations, language);
      const haystack = [content.title, content.summary, moduleContent.label, moduleContent.summary]
        .join(" ")
        .toLowerCase();

      const matchesSearch = !normalized || haystack.includes(normalized);
      const matchesFilter =
        filter === "all"
          ? true
          : filter === "continue"
            ? !completed.has(lesson.id)
            : filter === "saved"
              ? saved.has(lesson.id)
              : lesson.format === filter;

      return matchesSearch && matchesFilter;
    });
  }, [completed, deferredQuery, filter, language, lessons, saved]);

  const activeLesson =
    visibleLessons.find((lesson) => lesson.id === activeLessonId) ??
    lessons.find((lesson) => lesson.id === activeLessonId) ??
    visibleLessons[0] ??
    lessons[0];

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
    window.localStorage.setItem(STORAGE_KEYS.saved, JSON.stringify([...saved]));
  }, [saved]);

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

  const stats = {
    lessons: lessons.length,
    modules: courseData.modules.length,
    completed: completed.size,
    saved: saved.size
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="page-shell">
        <header className="topbar">
          <div className="brand-lockup">
            <p className="brand-kicker">{dict.brandKicker}</p>
            <div>
              <h1 className="brand-title">{dict.brandTitle}</h1>
              <p className="brand-subtitle">{dict.brandSubtitle}</p>
            </div>
          </div>
          <div className="language-area">
            <span className="field-label">{dict.languageLabel}</span>
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
        </header>

        <div className="app-layout">
          <aside className="sidebar">
            <section className="panel intro-panel">
              <div className="intro-badge">{dict.introBadge}</div>
              <h2 className="intro-title">{dict.introTitle}</h2>
              <p className="intro-copy">{dict.introCopy}</p>
              <div className="stats-grid">
                <StatCard label={dict.seededLessons} value={stats.lessons} />
                <StatCard label={dict.modules} value={stats.modules} />
                <StatCard label={dict.completedStat} value={stats.completed} />
                <StatCard label={dict.savedStat} value={stats.saved} />
              </div>
            </section>

            <section className="panel controls-panel">
              <label className="field-group">
                <span className="field-label">{dict.searchLabel}</span>
                <input
                  className="search-input"
                  type="search"
                  value={query}
                  onChange={(event) => startTransition(() => setQuery(event.target.value))}
                  placeholder={dict.searchPlaceholder}
                />
              </label>
              <div className="filter-row">
                <p className="field-label">{dict.filterLabel}</p>
                <div className="chip-group">
                  {FILTERS.map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`chip${filter === item ? " is-active" : ""}`}
                      onClick={() => startTransition(() => setFilter(item))}
                    >
                      {dict.filters[item]}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            <section className="panel map-panel">
              <div className="section-heading compact-heading">
                <div>
                  <h2>{dict.mapTitle}</h2>
                  <p>{dict.mapSubtitle}</p>
                </div>
              </div>

              {visibleLessons.length === 0 ? (
                <div className="empty-state">{dict.searchEmpty}</div>
              ) : (
                <div className="module-list">
                  {courseData.modules.map((module) => {
                    const moduleLessons = visibleLessons.filter((lesson) => lesson.moduleId === module.id);
                    if (moduleLessons.length === 0) {
                      return null;
                    }

                    return (
                      <article
                        key={module.id}
                        className="module-card"
                        style={{ borderLeft: `3px solid ${module.accent}` }}
                      >
                        <div className="module-card-header">
                          <div>
                            <p className="module-kicker">
                              {dict.module} {module.order}
                            </p>
                            <h3 className="module-title">{getLocalizedValue(module.translations, language).label}</h3>
                            <p className="module-meta">{getLocalizedValue(module.translations, language).summary}</p>
                          </div>
                          <div className="module-progress">
                            {moduleLessons.filter((lesson) => completed.has(lesson.id)).length}/{moduleLessons.length}
                          </div>
                        </div>
                        <div className="lesson-list">
                          {moduleLessons.map((lesson) => {
                            const content = getLessonContent(lesson, language);
                            return (
                              <button
                                key={lesson.id}
                                type="button"
                                className={`lesson-link${lesson.id === activeLesson?.id ? " is-active" : ""}${completed.has(lesson.id) ? " is-complete" : ""}`}
                                onClick={() => setActiveLessonId(lesson.id)}
                              >
                                <span className="lesson-order">{String(lesson.globalOrder).padStart(2, "0")}</span>
                                <span>
                                  <span className="lesson-name">{content.title}</span>
                                  <span className="lesson-meta">
                                    {getFormatLabel(lesson.format, dict)} · {lesson.duration} {dict.minutesShort}
                                  </span>
                                </span>
                                <span className="lesson-state" />
                              </button>
                            );
                          })}
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </section>
          </aside>

          <main id="main-content" className="main-content" tabIndex={-1}>
            {activeLesson ? (
              <>
                <LessonHero
                  dict={dict}
                  language={language}
                  lesson={activeLesson}
                  completed={completed}
                  saved={saved}
                  onToggleComplete={(lessonId) => toggleSetValue(lessonId, setCompleted)}
                  onToggleSaved={(lessonId) => toggleSetValue(lessonId, setSaved)}
                />

                <div className="content-grid compact-grid">
                  <section className="panel lesson-panel">
                    <LessonBody dict={dict} language={language} lesson={activeLesson} />
                  </section>

                  <aside className="rail">
                    <section className="panel panel-compact">
                      <h2 className="panel-title">{dict.resourcesTitle}</h2>
                      <p className="panel-copy">{dict.resourcesCopy}</p>
                      <div className="resource-list">
                        {activeLesson.resources.map((resource, index) => {
                          const content = getLocalizedValue(resource.translations, language);
                          return (
                            <article key={index} className="resource-item">
                              <strong>{content.title}</strong>
                              <p>{content.description}</p>
                            </article>
                          );
                        })}
                      </div>
                    </section>

                    <section className="panel panel-compact">
                      <h2 className="panel-title">{dict.roadmapTitle}</h2>
                      <p className="panel-copy">{dict.roadmapCopy}</p>
                      <div className="roadmap-list">
                        {courseData.modules
                          .find((module) => module.id === activeLesson.moduleId)
                          ?.lessons.map((lesson, index) => {
                            const current = lessons.find((item) => item.id === lesson.id) ?? lesson;
                            const content = getLessonContent(current, language);
                            return (
                              <button
                                key={current.id}
                                type="button"
                                className={`roadmap-item${current.id === activeLesson.id ? " is-active" : ""}${completed.has(current.id) ? " is-complete" : ""}`}
                                onClick={() => setActiveLessonId(current.id)}
                              >
                                <span className="roadmap-order">{String(index + 1).padStart(2, "0")}</span>
                                <span>
                                  <strong>{content.title}</strong>
                                  <span className="roadmap-copy">
                                    {getFormatLabel(current.format, dict)} · {current.duration} {dict.minutesShort}
                                  </span>
                                </span>
                                <span className="roadmap-mark" />
                              </button>
                            );
                          })}
                      </div>
                    </section>

                    <section className="panel panel-compact">
                      <h2 className="panel-title">{dict.platformTitle}</h2>
                      <p className="panel-copy">{dict.platformCopy}</p>
                      <div className="dev-note">{dict.devNote}</div>
                    </section>
                  </aside>
                </div>
              </>
            ) : (
              <div className="empty-state">{dict.searchEmpty}</div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}

function LessonHero({ dict, language, lesson, completed, saved, onToggleComplete, onToggleSaved }) {
  const content = getLessonContent(lesson, language);
  const cover = getLocalizedValue(lesson.cover, language);

  return (
    <section className="hero-card compact-hero">
      <div className="hero-grid compact-hero-grid">
        <div>
          <p className="hero-kicker">{dict.currentLesson}</p>
          <h2 className="hero-title">{content.title}</h2>
          <p className="hero-summary">{content.summary}</p>
          <div className="tag-row">
            <span className="tag">{getLocalizedValue(lesson.moduleTranslations, language).label}</span>
            <span className="tag">{getFormatLabel(lesson.format, dict)}</span>
            <span className="tag">{lesson.level}</span>
          </div>
          <div className="meta-row">
            <span className="meta-pill">
              {dict.duration}: {lesson.duration} {dict.minutesShort}
            </span>
            <span className="meta-pill">
              {dict.level}: {lesson.level}
            </span>
          </div>
          <div className="action-row">
            <button type="button" className="action-button primary" onClick={() => onToggleComplete(lesson.id)}>
              {completed.has(lesson.id) ? dict.completed : dict.complete}
            </button>
            <button type="button" className="action-button secondary" onClick={() => onToggleSaved(lesson.id)}>
              {saved.has(lesson.id) ? dict.saved : dict.save}
            </button>
          </div>
        </div>
        <article className="visual-card compact-visual">
          <p className="visual-eyebrow">{cover.eyebrow}</p>
          <h3 className="visual-title">{cover.title}</h3>
          <p className="visual-copy">{cover.description}</p>
        </article>
      </div>
    </section>
  );
}

function LessonBody({ dict, language, lesson }) {
  const content = getLessonContent(lesson, language);
  const cover = getLocalizedValue(lesson.cover, language);

  return (
    <>
      <div className="lesson-overview compact-overview">
        <article className="lesson-copy">
          <h2>{dict.overviewTitle}</h2>
          <p>{content.summary}</p>
        </article>
        <aside className="cover-placeholder compact-cover">
          <div className="cover-grid">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={index} />
            ))}
          </div>
          <p className="visual-eyebrow">{cover.eyebrow}</p>
          <h3>{cover.title}</h3>
          <p>{cover.description}</p>
        </aside>
      </div>

      <div className="lesson-columns">
        <section className="subsection">
          <h3>{dict.outcomesTitle}</h3>
          <ul>
            {content.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="subsection">
          <h3>{dict.materialsTitle}</h3>
          <ul>
            {content.materials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

function StatCard({ label, value }) {
  return (
    <article className="stat-card">
      <p className="stat-label">{label}</p>
      <p className="stat-value">{value}</p>
    </article>
  );
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

