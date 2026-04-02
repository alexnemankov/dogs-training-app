import { IcebergBlock } from "./blocks/IcebergBlock.jsx";
import { FlipCardsBlock } from "./blocks/FlipCardsBlock.jsx";
import { SorcBuilderBlock } from "./blocks/SorcBuilderBlock.jsx";

function buildFallbackArticle(content) {
  return [
    {
      type: "section",
      title: null,
      paragraphs: [content.summary]
    },
    {
      type: "bulletList",
      title: "Key lesson topics",
      items: content.outcomes
    }
  ];
}

function renderBlock(block, index) {
  if (block.type === "section") {
    return (
      <section key={index} className="article-block article-section">
        {block.title ? <h3 className="article-heading">{block.title}</h3> : null}
        {block.paragraphs?.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
    );
  }

  if (block.type === "callout") {
    return (
      <section key={index} className={`article-block article-callout tone-${block.tone ?? "accent"}`}>
        {block.label ? <p className="article-callout-label">{block.label}</p> : null}
        {block.paragraphs?.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
    );
  }

  if (block.type === "cards") {
    return (
      <section key={index} className="article-block">
        {block.title ? <h3 className="article-heading">{block.title}</h3> : null}
        {block.intro ? <p className="article-intro">{block.intro}</p> : null}
        <div className={`article-cards columns-${block.columns ?? 1}`}>
          {block.items.map((item) => (
            <article key={item.title} className="article-card">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "comparison") {
    return (
      <section key={index} className="article-block">
        {block.title ? <h3 className="article-heading">{block.title}</h3> : null}
        <div className="comparison-grid">
          {block.columns.map((column) => (
            <article key={column.title} className="comparison-card">
              <p className="comparison-label">{column.title}</p>
              <ul className="comparison-list">
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        {block.paragraphs?.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
    );
  }

  if (block.type === "numberedList") {
    return (
      <section key={index} className="article-block">
        {block.title ? <h3 className="article-heading">{block.title}</h3> : null}
        {block.intro ? <p className="article-intro">{block.intro}</p> : null}
        <ol className="numbered-points">
          {block.items.map((item, itemIndex) => (
            <li key={item.title}>
              <span className="numbered-badge">{itemIndex + 1}</span>
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    );
  }

  if (block.type === "principles") {
    return (
      <section key={index} className="article-block">
        {block.title ? <h3 className="article-heading">{block.title}</h3> : null}
        <div className="principles-grid">
          {block.items.map((item, itemIndex) => (
            <article key={item.title} className="principle-card">
              <span className="principle-icon">{item.icon ?? String(itemIndex + 1).padStart(2, "0")}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "trackList") {
    return (
      <section key={index} className="article-block">
        {block.title ? <h3 className="article-heading">{block.title}</h3> : null}
        <div className="track-list">
          {block.items.map((item) => (
            <article key={item.title} className="track-item">
              <span className="track-dot" style={{ backgroundColor: item.color }} aria-hidden="true" />
              <div className="track-copy">
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
              <span className="track-meta">{item.meta}</span>
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "checkList") {
    return (
      <section key={index} className="article-block">
        {block.title ? <h3 className="article-heading">{block.title}</h3> : null}
        <div className="check-list">
          {block.items.map((item) => (
            <article key={item.title} className="check-item">
              <span className="check-icon" aria-hidden="true">
                ✓
              </span>
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "glossary") {
    return (
      <section key={index} className="article-block">
        {block.title ? <h3 className="article-heading">{block.title}</h3> : null}
        <div className="glossary-list">
          {block.items.map((item) => (
            <article key={item.term} className="glossary-item">
              <h4>{item.term}</h4>
              <p>{item.definition}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "bulletList") {
    return (
      <section key={index} className="article-block">
        {block.title ? <h3 className="article-heading">{block.title}</h3> : null}
        <ul className="article-bullets">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    );
  }

  if (block.type === "quote") {
    return (
      <blockquote key={index} className="article-block article-quote">
        <p>{block.quote}</p>
        {block.caption ? <footer>{block.caption}</footer> : null}
      </blockquote>
    );
  }

  if (block.type === "links") {
    return (
      <section key={index} className="article-block">
        {block.title ? <h3 className="article-heading">{block.title}</h3> : null}
        <ul className="article-links">
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

  if (block.type === "image") {
    return (
      <figure key={index} className="article-block article-image">
        <img src={block.src} alt={block.alt} loading="lazy" />
        {block.caption ? <figcaption>{block.caption}</figcaption> : null}
      </figure>
    );
  }

  if (block.type === "embed") {
    return (
      <section key={index} className="article-block">
        {block.title ? <h3 className="article-heading">{block.title}</h3> : null}
        <div className="article-embed">
          <iframe
            src={block.embedUrl}
            title={block.title ?? "Embedded video"}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        {block.caption ? <p>{block.caption}</p> : null}
      </section>
    );
  }

  if (block.type === "iceberg") {
    return (
      <div key={index} className="article-block">
        <IcebergBlock block={block} />
      </div>
    );
  }

  if (block.type === "flipCards") {
    return (
      <div key={index} className="article-block">
        <FlipCardsBlock block={block} />
      </div>
    );
  }

  if (block.type === "sorcBuilder") {
    return (
      <div key={index} className="article-block">
        <SorcBuilderBlock block={block} />
      </div>
    );
  }

  return null;
}

export function LessonArticle({ content }) {
  const article = content.article?.length ? content.article : buildFallbackArticle(content);

  return <div className="lesson-article">{article.map((block, index) => renderBlock(block, index))}</div>;
}
