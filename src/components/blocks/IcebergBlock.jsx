import { useState } from "react";

export function IcebergBlock({ block }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="iceberg-block">
      <div className="iceberg-top">
        <p className="iceberg-zone-label">{block.aboveLabel}</p>
        <div className="iceberg-chips">
          {block.above.map((item) => (
            <span key={item} className="iceberg-chip">{item}</span>
          ))}
        </div>
      </div>

      <div className="iceberg-wave" aria-hidden="true">
        <svg viewBox="0 0 600 24" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,12 C60,2 120,22 180,12 C240,2 300,22 360,12 C420,2 480,22 540,12 C570,6 585,14 600,12 L600,24 L0,24 Z" fill="#4a8eae" opacity="0.35"/>
          <path d="M0,16 C60,6 120,26 180,16 C240,6 300,26 360,16 C420,6 480,26 540,16 C570,10 585,18 600,16 L600,24 L0,24 Z" fill="#3a7a9e" opacity="0.25"/>
        </svg>
      </div>

      <div className="iceberg-bottom">
        <p className="iceberg-zone-label iceberg-zone-label--below">{block.belowLabel}</p>
        <div className="iceberg-causes">
          {block.below.map((cause, i) => (
            <div key={cause.label} className={`iceberg-cause${open === i ? " is-open" : ""}`}>
              <button
                type="button"
                className="iceberg-cause-btn"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="iceberg-cause-dot" style={{ background: cause.color }} aria-hidden="true" />
                <span className="iceberg-cause-name">{cause.label}</span>
                <svg
                  className="iceberg-chevron"
                  width="14" height="14"
                  viewBox="0 0 24 24"
                  fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              {open === i && (
                <div className="iceberg-cause-items">
                  {cause.items.map((item) => (
                    <span key={item} className="iceberg-cause-item">{item}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
