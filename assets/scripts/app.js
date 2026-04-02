import { courseData, uiText } from "./data.js";

const storageKeys = {
  lang: "dog-course-v2-lang",
  filter: "dog-course-v2-filter",
  activeLesson: "dog-course-v2-active-lesson",
  completed: "dog-course-v2-completed",
  bookmarked: "dog-course-v2-bookmarked"
};

const state = {
  lang: readValue(storageKeys.lang, "en"),
  filter: readValue(storageKeys.filter, "all"),
  query: "",
  activeLessonId: readValue(storageKeys.activeLesson, null),
  completed: new Set(readJson(storageKeys.completed)),
  bookmarked: new Set(readJson(storageKeys.bookmarked))
};

const allLessons = [];
courseData.modules.forEach((module) => {
  module.lessons.forEach((lesson, lessonIndex) => {
    allLessons.push({
      ...lesson,
      moduleId: module.id,
      moduleOrder: module.order,
      moduleAccent: module.accent,
      moduleTitle: module.title,
      moduleSummary: module.summary,
      lessonIndex,
      globalOrder: allLessons.length + 1
    });
  });
});

const elements = {
  brandKicker: document.getElementById("brand-kicker"),
  brandTitle: document.getElementById("brand-title"),
  brandSubtitle: document.getElementById("brand-subtitle"),
  languageSwitch: document.getElementById("language-switch"),
  introPanel: document.getElementById("intro-panel"),
  searchLabel: document.getElementById("search-label"),
  searchInput: document.getElementById("search-input"),
  filterLabel: document.getElementById("filter-label"),
  filterGroup: document.getElementById("filter-group"),
  mapTitle: document.getElementById("map-title"),
  mapSubtitle: document.getElementById("map-subtitle"),
  moduleList: document.getElementById("module-list"),
  heroCard: document.getElementById("hero-card"),
  lessonPanel: document.getElementById("lesson-panel"),
  resourcePanel: document.getElementById("resource-panel"),
  roadmapPanel: document.getElementById("roadmap-panel"),
  platformPanel: document.getElementById("platform-panel")
};

elements.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim().toLowerCase();
  ensureActiveLessonIsVisible();
  render();
});

window.addEventListener("hashchange", syncLessonFromHash);

initialize();

function initialize() {
  syncLessonFromHash();

  if (!state.activeLessonId || !allLessons.some((lesson) => lesson.id === state.activeLessonId)) {
    state.activeLessonId = allLessons[0]?.id ?? null;
  }

  ensureActiveLessonIsVisible();
  render();
}

function render() {
  const dict = uiText[state.lang];
  const visibleLessons = getVisibleLessons();
  const activeLesson = getActiveLesson(visibleLessons);

  document.documentElement.lang = state.lang;

  elements.brandKicker.textContent = dict.brandKicker;
  elements.brandTitle.textContent = dict.brandTitle;
  elements.brandSubtitle.textContent = dict.brandSubtitle;
  elements.searchLabel.textContent = dict.searchLabel;
  elements.searchInput.placeholder = dict.searchPlaceholder;
  elements.filterLabel.textContent = dict.filterLabel;
  elements.mapTitle.textContent = dict.mapTitle;
  elements.mapSubtitle.textContent = dict.mapSubtitle;

  renderLanguageSwitch();
  renderIntroPanel();
  renderFilters();
  renderModuleList(visibleLessons, activeLesson?.id ?? null);
  renderHeroCard(activeLesson);
  renderLessonPanel(activeLesson);
  renderResourcePanel(activeLesson);
  renderRoadmapPanel(activeLesson);
  renderPlatformPanel();
}

function renderLanguageSwitch() {
  elements.languageSwitch.innerHTML = "";

  ["en", "pl"].forEach((lang) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `lang-button${state.lang === lang ? " is-active" : ""}`;
    button.textContent = lang.toUpperCase();
    button.setAttribute("aria-pressed", String(state.lang === lang));
    button.addEventListener("click", () => {
      state.lang = lang;
      localStorage.setItem(storageKeys.lang, lang);
      render();
    });
    elements.languageSwitch.appendChild(button);
  });
}

function renderIntroPanel() {
  const dict = uiText[state.lang];

  elements.introPanel.innerHTML = `
    <div class="intro-badge">${dict.introBadge}</div>
    <h2 class="intro-title">${dict.introTitle}</h2>
    <p class="intro-copy">${dict.introCopy}</p>
    <div class="stats-grid">
      ${renderStatCard(dict.stats.seededLessons, String(courseData.stats.seededLessons))}
      ${renderStatCard(dict.stats.modules, String(courseData.modules.length))}
      ${renderStatCard(dict.stats.completed, String(state.completed.size))}
      ${renderStatCard(dict.stats.saved, String(state.bookmarked.size))}
    </div>
  `;
}

function renderFilters() {
  const dict = uiText[state.lang];
  const filters = ["all", "continue", "bookmarked", "video", "reading", "workshop"];

  elements.filterGroup.innerHTML = filters
    .map(
      (filterKey) =>
        `<button type="button" class="chip${state.filter === filterKey ? " is-active" : ""}" data-filter="${filterKey}" aria-pressed="${String(state.filter === filterKey)}">${dict.filters[filterKey]}</button>`
    )
    .join("");

  elements.filterGroup.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      localStorage.setItem(storageKeys.filter, state.filter);
      ensureActiveLessonIsVisible();
      render();
    });
  });
}

function renderModuleList(visibleLessons, activeLessonId) {
  const dict = uiText[state.lang];
  const visibleIds = new Set(visibleLessons.map((lesson) => lesson.id));

  if (visibleLessons.length === 0) {
    elements.moduleList.innerHTML = `<div class="empty-state">${dict.noResults}</div>`;
    return;
  }

  elements.moduleList.innerHTML = courseData.modules
    .map((module) => {
      const moduleLessons = module.lessons
        .map((lesson) => allLessons.find((candidate) => candidate.id === lesson.id))
        .filter(Boolean)
        .filter((lesson) => visibleIds.has(lesson.id));

      if (moduleLessons.length === 0) {
        return "";
      }

      const completedInModule = moduleLessons.filter((lesson) => state.completed.has(lesson.id)).length;

      return `
        <article class="module-card" style="border-left: 4px solid ${module.accent}">
          <div class="module-card-header">
            <div>
              <p class="module-kicker">${dict.moduleLabel} ${module.order}</p>
              <h3 class="module-title">${translate(module.title)}</h3>
              <p class="module-meta">${translate(module.summary)}</p>
            </div>
            <div class="module-progress">${completedInModule}/${moduleLessons.length}<br>${dict.moduleProgressLabel}</div>
          </div>
          <div class="lesson-list">
            ${moduleLessons.map((lesson) => renderLessonLink(lesson, activeLessonId)).join("")}
          </div>
        </article>
      `;
    })
    .join("");

  elements.moduleList.querySelectorAll("[data-lesson-id]").forEach((button) => {
    button.addEventListener("click", () => {
      selectLesson(button.dataset.lessonId);
    });
  });
}

function renderLessonLink(lesson, activeLessonId) {
  const dict = uiText[state.lang];
  const content = translate(lesson.translations);
  const isComplete = state.completed.has(lesson.id);

  return `
    <button type="button" class="lesson-link${lesson.id === activeLessonId ? " is-active" : ""}${isComplete ? " is-complete" : ""}" data-lesson-id="${lesson.id}">
      <span class="lesson-order">${String(lesson.globalOrder).padStart(2, "0")}</span>
      <span>
        <p class="lesson-name">${content.title}</p>
        <p class="lesson-meta">${capitalize(lesson.format)} · ${lesson.duration} min · ${isComplete ? dict.lessonCardCompleted : dict.lessonCardPending}</p>
      </span>
      <span class="lesson-state" aria-hidden="true"></span>
    </button>
  `;
}

function renderHeroCard(activeLesson) {
  const dict = uiText[state.lang];

  if (!activeLesson) {
    elements.heroCard.innerHTML = `<div class="empty-state">${dict.noResults}</div>`;
    return;
  }

  const content = translate(activeLesson.translations);
  const cover = translate(activeLesson.cover);
  const isComplete = state.completed.has(activeLesson.id);
  const isSaved = state.bookmarked.has(activeLesson.id);

  elements.heroCard.innerHTML = `
    <div class="hero-grid">
      <div>
        <p class="hero-kicker">${dict.heroKicker}</p>
        <h2 class="hero-title">${content.title}</h2>
        <p class="hero-summary">${content.summary}</p>
        <div class="tag-row">
          <span class="tag">${translate(activeLesson.moduleTitle)}</span>
          <span class="tag">${capitalize(activeLesson.format)}</span>
          <span class="tag">${activeLesson.level}</span>
        </div>
        <div class="meta-row">
          <span class="meta-pill">${dict.durationLabel}: ${activeLesson.duration} min</span>
          <span class="meta-pill">${dict.levelLabel}: ${activeLesson.level}</span>
          <span class="meta-pill">${dict.moduleLabel}: ${translate(activeLesson.moduleTitle)}</span>
        </div>
        <div class="action-row">
          <button type="button" class="action-button primary" data-action="complete">${isComplete ? dict.primaryActionDone : dict.primaryAction}</button>
          <button type="button" class="action-button secondary" data-action="bookmark">${isSaved ? dict.secondaryActionSaved : dict.secondaryAction}</button>
        </div>
      </div>
      <div class="visual-card">
        <p class="visual-eyebrow">${dict.heroVisualEyebrow}</p>
        <h3 class="visual-title">${dict.heroVisualTitle}</h3>
        <p class="visual-copy">${cover.description}</p>
      </div>
    </div>
  `;

  elements.heroCard.querySelector('[data-action="complete"]').addEventListener("click", () => {
    toggleSetMembership(state.completed, activeLesson.id, storageKeys.completed);
    render();
  });

  elements.heroCard.querySelector('[data-action="bookmark"]').addEventListener("click", () => {
    toggleSetMembership(state.bookmarked, activeLesson.id, storageKeys.bookmarked);
    render();
  });
}

function renderLessonPanel(activeLesson) {
  const dict = uiText[state.lang];

  if (!activeLesson) {
    elements.lessonPanel.innerHTML = `<div class="empty-state">${dict.noResults}</div>`;
    return;
  }

  const content = translate(activeLesson.translations);
  const cover = translate(activeLesson.cover);

  elements.lessonPanel.innerHTML = `
    <div class="lesson-overview">
      <article class="lesson-copy">
        <h2>${dict.lessonOverviewTitle}</h2>
        <p>${content.summary}</p>
      </article>
      <aside class="cover-placeholder">
        <div class="cover-grid">
          <span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span>
        </div>
        <p class="visual-eyebrow">${cover.eyebrow}</p>
        <h3>${cover.title}</h3>
        <p>${cover.description}</p>
      </aside>
    </div>

    <div class="lesson-columns">
      <section class="subsection">
        <h3>${dict.outcomesTitle}</h3>
        <ul>${content.outcomes.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
      <section class="subsection">
        <h3>${dict.materialsTitle}</h3>
        <ul>${content.materials.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
    </div>
  `;
}

function renderResourcePanel(activeLesson) {
  const dict = uiText[state.lang];

  if (!activeLesson) {
    elements.resourcePanel.innerHTML = "";
    return;
  }

  elements.resourcePanel.innerHTML = `
    <h2 class="panel-title">${dict.resourcesTitle}</h2>
    <p class="panel-copy">${dict.platformCopy}</p>
    <div class="resource-list">
      ${activeLesson.resources
        .map((resource) => {
          const status =
            resource.status === "ready" ? dict.resourceStatusReady : dict.resourceStatusPlanned;
          return `
            <article class="resource-item">
              <strong>${translate(resource.title)}</strong>
              <p>${translate(resource.description)}</p>
              <p><strong>${status}</strong></p>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderRoadmapPanel(activeLesson) {
  const dict = uiText[state.lang];

  if (!activeLesson) {
    elements.roadmapPanel.innerHTML = "";
    return;
  }

  const module = courseData.modules.find((candidate) => candidate.id === activeLesson.moduleId);

  elements.roadmapPanel.innerHTML = `
    <h2 class="panel-title">${dict.roadmapTitle}</h2>
    <p class="panel-copy">${dict.roadmapCopy}</p>
    <div class="roadmap-list">
      ${module.lessons
        .map((lesson) => {
          const fullLesson = allLessons.find((candidate) => candidate.id === lesson.id);
          return `
            <div class="roadmap-item${fullLesson.id === activeLesson.id ? " is-active" : ""}${state.completed.has(fullLesson.id) ? " is-complete" : ""}">
              <span class="roadmap-order">${String(fullLesson.lessonIndex + 1).padStart(2, "0")}</span>
              <p>
                <strong>${translate(fullLesson.translations).title}</strong>
                ${capitalize(fullLesson.format)} · ${fullLesson.duration} min
              </p>
              <span class="roadmap-mark" aria-hidden="true"></span>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderPlatformPanel() {
  const dict = uiText[state.lang];

  elements.platformPanel.innerHTML = `
    <h2 class="panel-title">${dict.platformTitle}</h2>
    <p class="panel-copy">${dict.platformCopy}</p>
    <div class="stack-list">
      ${courseData.platformNotes
        .map(
          (note) => `
            <article class="stack-item">
              <strong>${translate(note.title)}</strong>
              <p>${translate(note.description)}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function getVisibleLessons() {
  return allLessons.filter((lesson) => {
    const searchIndex = [
      lesson.translations.en.title,
      lesson.translations.en.summary,
      lesson.translations.pl.title,
      lesson.translations.pl.summary,
      lesson.moduleTitle.en,
      lesson.moduleTitle.pl
    ]
      .join(" ")
      .toLowerCase();

    const matchesQuery = !state.query || searchIndex.includes(state.query);
    const matchesFilter = matchesLessonFilter(lesson);

    return matchesQuery && matchesFilter;
  });
}

function matchesLessonFilter(lesson) {
  switch (state.filter) {
    case "continue":
      return !state.completed.has(lesson.id);
    case "bookmarked":
      return state.bookmarked.has(lesson.id);
    case "video":
    case "reading":
    case "workshop":
      return lesson.format === state.filter;
    default:
      return true;
  }
}

function getActiveLesson(visibleLessons) {
  if (visibleLessons.length === 0) {
    return null;
  }

  return visibleLessons.find((lesson) => lesson.id === state.activeLessonId) ?? visibleLessons[0];
}

function ensureActiveLessonIsVisible() {
  const visibleLessons = getVisibleLessons();

  if (visibleLessons.length === 0) {
    return;
  }

  if (!visibleLessons.some((lesson) => lesson.id === state.activeLessonId)) {
    state.activeLessonId = visibleLessons[0].id;
    persistActiveLesson();
  }
}

function selectLesson(lessonId) {
  state.activeLessonId = lessonId;
  persistActiveLesson();
  render();
  document.getElementById("main-content")?.focus({ preventScroll: true });
}

function persistActiveLesson() {
  localStorage.setItem(storageKeys.activeLesson, state.activeLessonId);
  history.replaceState(null, "", `#${state.activeLessonId}`);
}

function syncLessonFromHash() {
  const hash = window.location.hash.replace("#", "").trim();

  if (hash && allLessons.some((lesson) => lesson.id === hash)) {
    state.activeLessonId = hash;
    localStorage.setItem(storageKeys.activeLesson, hash);
  }
}

function toggleSetMembership(set, value, key) {
  if (set.has(value)) {
    set.delete(value);
  } else {
    set.add(value);
  }

  localStorage.setItem(key, JSON.stringify([...set]));
}

function renderStatCard(label, value) {
  return `
    <article class="stat-card">
      <p class="stat-label">${label}</p>
      <p class="stat-value">${value}</p>
    </article>
  `;
}

function translate(entry) {
  return entry[state.lang] ?? entry.en;
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function readValue(key, fallback) {
  return localStorage.getItem(key) ?? fallback;
}

function readJson(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}
