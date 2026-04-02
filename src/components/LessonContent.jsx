import { getLessonContent, truncate } from "../lib/plannerUtils.js";
import { LessonArticle } from "./LessonArticle.jsx";

export function LessonContent({
  activeDateLabel,
  activeIndex,
  activeLesson,
  activeModule,
  completed,
  dict,
  emptyText,
  language,
  lessonsCount,
  nextLesson,
  previousLesson,
  todayIndex,
  onJumpToToday,
  onLessonSelect,
  onToggleComplete
}) {
  if (!activeLesson || !activeModule || !activeDateLabel) {
    return (
      <main className="main">
        <div className="empty-sidebar">{emptyText}</div>
      </main>
    );
  }

  const activeContent = getLessonContent(activeLesson, language);

  return (
    <main className="main">
      <div className="main-toolbar">
        <p className="main-date">{activeDateLabel}</p>
        <button type="button" className="today-button" onClick={onJumpToToday}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/></svg>
          {dict.todayButton}
        </button>
      </div>

      <div className="lesson-eyebrow-row">
        <span className="lesson-counter">
          {dict.currentLesson} {activeIndex + 1} {dict.from} {lessonsCount}
        </span>
        {activeIndex === todayIndex ? <span className="today-pill">{dict.todayBadge}</span> : null}
      </div>

      <h2 className="lesson-title">{activeContent.title}</h2>
      <div className="lesson-tag">{activeModule.label}</div>

      <section className="summary-box">
        <p>{activeContent.summary}</p>
      </section>

      <LessonArticle content={activeContent} />

      <button
        type="button"
        className={`complete-button${completed.has(activeLesson.id) ? " is-done" : ""}`}
        onClick={() => onToggleComplete(activeLesson.id)}
      >
        {completed.has(activeLesson.id) ? dict.completed : dict.complete}
      </button>

      <div className="nav-divider" />

      <div className="lesson-navigation">
        <button
          type="button"
          className="nav-arrow"
          aria-label={dict.previous ?? "Previous lesson"}
          onClick={() => previousLesson && onLessonSelect(previousLesson.id)}
          disabled={!previousLesson}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/></svg>
        </button>
        <button
          type="button"
          className="nav-next"
          onClick={() => nextLesson && onLessonSelect(nextLesson.id)}
          disabled={!nextLesson}
        >
          {nextLesson
            ? `${dict.next}: ${truncate(getLessonContent(nextLesson, language).title, 26)}`
            : dict.next}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </main>
  );
}
