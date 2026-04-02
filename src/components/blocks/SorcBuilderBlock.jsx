import { useState } from "react";

const SORC_COLORS = {
  S: "#c97b22",
  O: "#3a7d9e",
  R: "#4a8a5c",
  C: "#7a52a8"
};

export function SorcBuilderBlock({ block }) {
  const keys = ["S", "O", "R", "C"];
  const [values, setValues] = useState({ S: "", O: "", R: "", C: "" });

  function update(key, val) {
    setValues((prev) => ({ ...prev, [key]: val }));
  }

  const allFilled = keys.every((k) => values[k].trim());
  const anyFilled = keys.some((k) => values[k].trim());

  return (
    <div className="sorc-builder">
      {block.title && <p className="sorc-builder-title">{block.title}</p>}
      <div className="sorc-fields">
        {keys.map((key) => (
          <div key={key} className="sorc-field">
            <label className="sorc-label">
              <span className="sorc-badge" style={{ background: SORC_COLORS[key] }}>{key}</span>
              <span className="sorc-label-text">{block.labels[key]}</span>
            </label>
            <textarea
              className="sorc-textarea"
              value={values[key]}
              onChange={(e) => update(key, e.target.value)}
              placeholder={block.placeholders[key]}
              rows={2}
              style={{ "--sorc-color": SORC_COLORS[key] }}
            />
          </div>
        ))}
      </div>

      {allFilled && (
        <div className="sorc-result">
          <p className="sorc-result-label">{block.resultLabel}</p>
          <p className="sorc-result-chain">
            {keys.map((key, i) => (
              <span key={key}>
                <strong style={{ color: SORC_COLORS[key] }}>{key}:</strong>{" "}
                {values[key]}
                {i < keys.length - 1 && <span className="sorc-arrow"> → </span>}
              </span>
            ))}
          </p>
        </div>
      )}

      <button
        type="button"
        className="sorc-reset"
        onClick={() => setValues({ S: "", O: "", R: "", C: "" })}
        disabled={!anyFilled}
      >
        {block.resetLabel}
      </button>
    </div>
  );
}
