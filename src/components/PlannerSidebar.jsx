import { startTransition, useEffect, useRef } from "react";
import { getLessonContent } from "../lib/plannerUtils.js";

export function PlannerSidebar({
  activeLessonId,
  completed,
  dict,
  filter,
  filters,
  language,
  languages,
  lessons,
  progressValue,
  query,
  todayIndex,
  visibleLessons,
  onFilterChange,
  onLanguageChange,
  onLessonSelect,
  onToggleComplete,
  onQueryChange
}) {
  const activeRowRef = useRef(null);
  useEffect(() => {
    activeRowRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [activeLessonId]);

  return (
    <aside className="sidebar">
      <section className="sidebar-block brand-block">
        <div>
          <h1 className="sidebar-title">{dict.appTitle}</h1>
          <p className="sidebar-subtitle">{dict.appSubtitle.replace("114", String(lessons.length))}</p>
        </div>
        <div className="language-inline">
          <span>{dict.language}</span>
          <div className="language-switch">
            {languages.map((item) => (
              <button
                key={item}
                type="button"
                className={`lang-button${language === item ? " is-active" : ""}`}
                onClick={() => startTransition(() => onLanguageChange(item))}
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
        <div
          className="progress-track"
          role="progressbar"
          aria-valuenow={Math.round(progressValue)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={dict.progress}
        >
          <div className="progress-fill" style={{ width: `${progressValue}%` }} />
        </div>
      </section>

      <section className="sidebar-block search-block">
        <input
          className="search-input"
          type="search"
          value={query}
          onChange={(event) => startTransition(() => onQueryChange(event.target.value))}
          placeholder={dict.searchPlaceholder}
          aria-label={dict.searchPlaceholder}
        />
      </section>

      <section className="sidebar-block filter-block">
        <div className="pill-row">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              className={`filter-pill${filter === item ? " is-active" : ""}`}
              onClick={() => startTransition(() => onFilterChange(item))}
            >
              {dict.filters[item]}
            </button>
          ))}
        </div>
      </section>

      <section className="sidebar-block lesson-list-block">
        {visibleLessons.length === 0 ? (
          <div className="empty-sidebar">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="empty-icon"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <p>{dict.empty}</p>
            {(filter !== "all" || query) && (
              <button
                type="button"
                className="empty-reset"
                onClick={() => { startTransition(() => { onFilterChange("all"); onQueryChange(""); }); }}
              >
                {dict.clearFilter ?? "Clear filter"}
              </button>
            )}
          </div>
        ) : (
          visibleLessons.map((lesson, index) => {
            const content = getLessonContent(lesson, language);
            const lessonIndex = lessons.findIndex((item) => item.id === lesson.id);
            const isToday = lessonIndex === todayIndex;
            const isDone = completed.has(lesson.id);

            return (
              <div
                key={lesson.id}
                ref={lesson.id === activeLessonId ? activeRowRef : null}
                className={`lesson-nav-row${lesson.id === activeLessonId ? " is-active" : ""}${isDone ? " is-done" : ""}${isToday ? " is-today" : ""}`}
              >
                <button
                  type="button"
                  className="lesson-nav-item"
                  onClick={() => onLessonSelect(lesson.id)}
                >
                  <span className="lesson-nav-order">{String(index + 1).padStart(2, "0")}</span>
                  <span className="lesson-nav-copy">
                    <span className="lesson-nav-title">{content.title}</span>
                  </span>
                </button>
                <button
                  type="button"
                  className={`lesson-nav-toggle${isDone ? " is-done" : ""}`}
                  aria-pressed={isDone}
                  aria-label={isDone ? dict.completed : dict.complete}
                  onClick={() => onToggleComplete(lesson.id)}
                />
              </div>
            );
          })
        )}
      </section>
    </aside>
  );
}
