import { getLessonContent, truncate } from "../lib/plannerUtils.js";

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
          {"<-"} {dict.todayButton}
        </button>
      </div>

      <div className="lesson-eyebrow-row">
        <span className="lesson-counter">
          {dict.currentLesson} {activeIndex + 1} {dict.from} {lessonsCount}
        </span>
        {activeIndex === todayIndex ? <span className="today-pill">{dict.todayBadge}</span> : null}
      </div>

      <h2 className="lesson-title">{activeContent.title}</h2>
      <p className="lesson-date-line">{activeDateLabel}</p>
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
        onClick={() => onToggleComplete(activeLesson.id)}
      >
        {completed.has(activeLesson.id) ? dict.completed : dict.complete}
      </button>

      <div className="nav-divider" />

      <div className="lesson-navigation">
        <button
          type="button"
          className="nav-arrow"
          onClick={() => previousLesson && onLessonSelect(previousLesson.id)}
          disabled={!previousLesson}
        >
          {"<-"}
        </button>
        <button
          type="button"
          className="nav-next"
          onClick={() => nextLesson && onLessonSelect(nextLesson.id)}
          disabled={!nextLesson}
        >
          {nextLesson
            ? `${dict.next}: ${truncate(getLessonContent(nextLesson, language).title, 26)} ->`
            : `${dict.next} ->`}
        </button>
      </div>
    </main>
  );
}
