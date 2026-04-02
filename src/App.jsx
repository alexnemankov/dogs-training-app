import { useDeferredValue, useEffect, useMemo, useState } from "react";
import {
  courseData,
  plannerFilters,
  plannerLanguages,
  plannerUiText
} from "./data/courseData.js";
import { LessonContent } from "./components/LessonContent.jsx";
import { PlannerSidebar } from "./components/PlannerSidebar.jsx";
import {
  flattenLessons,
  extractLessonSearchText,
  formatDate,
  getLessonDate,
  getLessonContent,
  getLocalizedValue,
  getTodayIndex,
  readStorage,
  readStorageArray,
  toggleSetValue
} from "./lib/plannerUtils.js";

const STORAGE_KEYS = {
  language: "dog-course-react-language",
  filter: "dog-course-react-filter",
  activeLessonId: "dog-course-react-active-lesson",
  completed: "dog-course-react-completed"
};

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
  const dict = plannerUiText[language];
  const lessons = useMemo(() => flattenLessons(courseData), []);
  const todayIndex = useMemo(
    () => getTodayIndex(lessons.length, courseData.startDate),
    [lessons.length]
  );

  const visibleLessons = useMemo(() => {
    const normalizedQuery = deferredQuery.trim().toLowerCase();

    return lessons.filter((lesson, index) => {
      const content = getLessonContent(lesson, language);
      const moduleContent = getLocalizedValue(lesson.moduleTranslations, language);
      const haystack = [
        content.title,
        content.summary,
        ...content.outcomes,
        extractLessonSearchText(content),
        moduleContent.label,
        moduleContent.summary
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = !normalizedQuery || haystack.includes(normalizedQuery);
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
  const activeModule = activeLesson ? getLocalizedValue(activeLesson.moduleTranslations, language) : null;
  const activeDate = activeIndex >= 0 ? getLessonDate(activeIndex, courseData.startDate) : null;
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
      <PlannerSidebar
        activeLessonId={activeLesson?.id ?? ""}
        completed={completed}
        dict={dict}
        filter={filter}
        filters={plannerFilters}
        language={language}
        languages={plannerLanguages}
        lessons={lessons}
        progressValue={progressValue}
        query={query}
        todayIndex={todayIndex}
        visibleLessons={visibleLessons}
        onFilterChange={setFilter}
        onLanguageChange={setLanguage}
        onLessonSelect={setActiveLessonId}
        onToggleComplete={(lessonId) => toggleSetValue(lessonId, setCompleted)}
        onQueryChange={setQuery}
      />

      <LessonContent
        activeDateLabel={activeDate ? formatDate(activeDate, language) : ""}
        activeIndex={activeIndex}
        activeLesson={activeLesson}
        activeModule={activeModule}
        completed={completed}
        dict={dict}
        emptyText={dict.empty}
        language={language}
        lessonsCount={lessons.length}
        nextLesson={nextLesson}
        previousLesson={previousLesson}
        todayIndex={todayIndex}
        onJumpToToday={() => setActiveLessonId(lessons[todayIndex]?.id ?? activeLesson?.id ?? "")}
        onLessonSelect={setActiveLessonId}
        onToggleComplete={(lessonId) => toggleSetValue(lessonId, setCompleted)}
      />
    </div>
  );
}
