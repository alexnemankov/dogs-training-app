import { useEffect, useState } from "react";
import { lessonTopicMaterials } from "../data/courseData.js";

function buildFallbackTopics(content) {
  return content.outcomes.map((title) => ({
    title,
    blocks: [
      {
        type: "text",
        heading: "Topic note",
        paragraphs: [content.summary]
      }
    ]
  }));
}

function renderBlock(block, index) {
  if (block.type === "text") {
    return (
      <section key={index} className="material-block material-text">
        {block.heading ? <h4>{block.heading}</h4> : null}
        {block.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
    );
  }

  if (block.type === "image") {
    return (
      <figure key={index} className="material-block material-image">
        <img src={block.src} alt={block.alt} loading="lazy" />
        {block.caption ? <figcaption>{block.caption}</figcaption> : null}
      </figure>
    );
  }

  if (block.type === "links") {
    return (
      <section key={index} className="material-block material-links">
        {block.heading ? <h4>{block.heading}</h4> : null}
        <ul>
          {block.items.map((item) => (
            <li key={item.href + item.label}>
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (block.type === "embed") {
    return (
      <section key={index} className="material-block material-embed">
        {block.heading ? <h4>{block.heading}</h4> : null}
        <div className="embed-frame">
          <iframe
            src={block.embedUrl}
            title={block.heading ?? "Embedded video"}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        {block.caption ? <p>{block.caption}</p> : null}
      </section>
    );
  }

  if (block.type === "embedPlaceholder") {
    return (
      <section key={index} className="material-block material-embed material-placeholder">
        {block.heading ? <h4>{block.heading}</h4> : null}
        <div className="embed-frame embed-placeholder-box">
          <span>Embed video area</span>
        </div>
        {block.note ? <p>{block.note}</p> : null}
      </section>
    );
  }

  return null;
}

export function LessonTopicPanel({ dict, lessonId, content, language }) {
  const topics =
    lessonTopicMaterials[lessonId]?.[language] ??
    lessonTopicMaterials[lessonId]?.ru ??
    buildFallbackTopics(content);

  const [activeTopicIndex, setActiveTopicIndex] = useState(0);

  useEffect(() => {
    setActiveTopicIndex(0);
  }, [lessonId, language]);

  const activeTopic = topics[activeTopicIndex] ?? topics[0];

  return (
    <section className="lesson-topics-layout">
      <div className="topics-column">
        <p className="section-label">{dict.keyTopics}</p>
        <div className="topic-tabs" role="tablist" aria-label={dict.keyTopics}>
          {topics.map((topic, index) => (
            <button
              key={topic.title}
              type="button"
              role="tab"
              aria-selected={index === activeTopicIndex}
              className={`topic-tab${index === activeTopicIndex ? " is-active" : ""}`}
              onClick={() => setActiveTopicIndex(index)}
            >
              <span className="topic-tab-dot" aria-hidden="true" />
              <span>{topic.title}</span>
            </button>
          ))}
        </div>
      </div>

      <aside className="topic-materials-panel" role="tabpanel">
        <div className="topic-panel-header">
          <p className="section-label">{dict.themeMaterials ?? "Theme materials"}</p>
          <h3>{activeTopic.title}</h3>
        </div>

        <div className="topic-materials-flow">
          {activeTopic.blocks.map((block, index) => renderBlock(block, index))}
        </div>
      </aside>
    </section>
  );
}
