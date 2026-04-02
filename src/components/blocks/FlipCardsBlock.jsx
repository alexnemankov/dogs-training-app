import { useState } from "react";

export function FlipCardsBlock({ block }) {
  const [flipped, setFlipped] = useState(new Set());

  function toggle(i) {
    setFlipped((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  return (
    <div className="flip-cards-block">
      {block.title && <p className="flip-cards-title">{block.title}</p>}
      <div className="flip-cards-grid">
        {block.items.map((item, i) => {
          const isFlipped = flipped.has(i);
          return (
            <button
              key={i}
              type="button"
              className={`flip-card${isFlipped ? " is-flipped" : ""}${item.isInterpretation ? " flip-card--bad" : " flip-card--good"}`}
              onClick={() => toggle(i)}
              aria-pressed={isFlipped}
              aria-label={isFlipped ? undefined : block.tapHint}
            >
              <div className="flip-card-inner">
                <div className="flip-card-face flip-card-front">
                  <span>{item.front}</span>
                  <span className="flip-card-hint" aria-hidden="true">{block.tapHint}</span>
                </div>
                <div className="flip-card-face flip-card-back">
                  <span className="flip-card-verdict">
                    {item.isInterpretation ? block.interpretationLabel : block.observationLabel}
                  </span>
                  {item.explanation && (
                    <span className="flip-card-note">{item.explanation}</span>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
      {flipped.size === block.items.length && (
        <p className="flip-cards-done">{block.doneMessage}</p>
      )}
    </div>
  );
}
