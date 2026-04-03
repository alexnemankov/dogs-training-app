import { useState } from "react";

const SORC_COLORS = {
  S: "#c97b22",
  O: "#3a7d9e",
  R: "#4a8a5c",
  C: "#7a52a8"
};

const KEYS = ["S", "O", "R", "C"];

export function SorcBuilderBlock({ block }) {
  const [revealed, setRevealed] = useState(new Set());

  function toggle(key) {
    setRevealed((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }

  function reset() {
    setRevealed(new Set());
  }

  const allRevealed = KEYS.every((k) => revealed.has(k));

  return (
    <div className="sorc-builder">
      {block.title && <p className="sorc-builder-title">{block.title}</p>}

      <div className="sorc-fields">
        {KEYS.map((key) => {
          const isOpen = revealed.has(key);
          return (
            <div key={key} className={`sorc-field${isOpen ? " is-revealed" : ""}`}>
              <div className="sorc-label">
                <span className="sorc-badge" style={{ background: SORC_COLORS[key] }}>{key}</span>
                <span className="sorc-label-text">{block.labels[key]}</span>
              </div>
              <button
                type="button"
                className="sorc-reveal-btn"
                style={{ "--sorc-color": SORC_COLORS[key] }}
                onClick={() => toggle(key)}
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <span className="sorc-answer">{block.placeholders[key]}</span>
                ) : (
                  <span className="sorc-reveal-hint">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                    {block.revealLabel ?? "Show example answer"}
                  </span>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {revealed.size > 0 && (
        <button
          type="button"
          className="sorc-reset"
          onClick={reset}
        >
          {block.resetLabel ?? "Hide all"}
        </button>
      )}
    </div>
  );
}
