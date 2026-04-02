import { startTransition } from "react";
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
  onQueryChange
}) {
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
        <div className="progress-track" aria-hidden="true">
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
                className={`lesson-nav-item${lesson.id === activeLessonId ? " is-active" : ""}${isDone ? " is-done" : ""}${isToday ? " is-today" : ""}`}
                onClick={() => onLessonSelect(lesson.id)}
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
  );
}
