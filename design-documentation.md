# Design Documentation — Dog Ethology & Behavior Course Planner

## Overview

A single-page application for studying a structured 114-lesson dog ethology and behavior curriculum. The app functions as a daily lesson planner: it maps each lesson to a calendar date, tracks progress, and renders rich interactive article content. The UI targets adult learners and supports three languages simultaneously (EN, PL, RU) without a page reload.

---

## Design Principles

### 1. Warm Paper Aesthetic
The entire color system is built around warm off-white paper tones — linen backgrounds, ink-brown text, amber accents. The goal is to feel like a quality printed textbook rather than a software dashboard. No pure whites, no cool grays.

### 2. Minimal Chrome, Maximum Content
The sidebar is the only persistent UI shell. Everything else is the lesson content. No top navigation bars, no modals, no floating action buttons. Interactions that the user needs most often (language, progress, filters, search) live permanently in the sidebar column.

### 3. Content-Driven Layout
Article blocks are self-contained rendering units — the layout adapts to whatever block type is present. The same data file can contain a plain paragraph, an interactive iceberg, and a flip-card quiz sitting next to each other. No page templates, no hardcoded layouts per lesson.

### 4. Progressive Interactivity
Static blocks (section, callout, quote, glossary) require no interaction. Interactive blocks (Iceberg, FlipCards, SorcBuilder) layer engagement on top of the reading experience — they are educational tools, not gamification.

### 5. Trilingual by Default
Every piece of user-visible text — UI labels, lesson content, outcomes, article blocks — is fully translated into EN, PL, and RU. Language selection persists in `localStorage`. The Russian locale also switches the heading font (Prata replaces Fraunces) to ensure Cyrillic renders with the same typographic quality.

### 6. Accessibility as Baseline
- All interactive elements have `:focus-visible` ring in amber
- Minimum touch target 44×44px on all buttons
- `aria-expanded`, `aria-pressed`, `aria-label` on all custom interactive blocks
- `prefers-reduced-motion` respected — all transitions and animations disabled
- SVG icons are `aria-hidden="true"`, labels on icon-only buttons

---

## Design Tokens

All tokens are defined as CSS custom properties on `:root` in `src/styles.css`.

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#f7f1e7` | App background (linen) |
| `--paper` | `#fbf7ef` | Main content panel background |
| `--ink` | `#23160c` | Primary text — headings, strong copy |
| `--text` | `#6f6659` | Body text, paragraph copy |
| `--muted` | `#706659` | Secondary labels, metadata |
| `--line` | `rgba(136,112,79,0.14)` | Subtle dividers and card borders |
| `--line-strong` | `rgba(136,112,79,0.22)` | Button borders, stronger dividers |
| `--accent` | `#d0862f` | Amber — primary brand color, CTAs, highlights |
| `--accent-soft` | `#f3e5cd` | Icon badge backgrounds, soft tinted areas |
| `--success-bg` | `#dcecd8` | "Completed" button background |
| `--success-border` | `#4a8b5a` | "Completed" button border and icon color |
| `--chip` | `#fff9f0` | Pill/chip backgrounds, card surfaces |
| `--sidebar-width` | `298px` | Fixed sidebar column width |

---

## Typography

| Role | Family | Notes |
|------|--------|-------|
| Headings (EN/PL) | **Fraunces** — serif | Weight 450–500, letter-spacing −0.02 to −0.04em |
| Headings (RU) | **Prata** — serif | Replaces Fraunces for Cyrillic; same weight class |
| Body, UI | **Manrope** — sans-serif | All paragraphs, labels, buttons, inputs |

**Scale (most-used sizes):**
- `0.72–0.78rem` — micro labels, tags, metadata
- `0.84–0.93rem` — card text, callout body, secondary copy
- `0.98rem` — card headings (`h4`)
- `1.28rem` — article section headings (`h3`, `.article-heading`)
- `2.4rem` — lesson title (`.lesson-title`)

**Line-height:** Body text uses `1.72`. Headings use `1.12–1.4`.

---

## Layout Architecture

```
┌─ .planner-shell (CSS Grid: 298px | 1fr) ───────────────────┐
│                                                             │
│  ┌─ .sidebar ──────────────┐  ┌─ .main ─────────────────┐  │
│  │  Brand + Language       │  │  Toolbar + date          │  │
│  │  Progress bar           │  │  Eyebrow (counter/today) │  │
│  │  Search input           │  │  Lesson title            │  │
│  │  Filter pills           │  │  Module tag              │  │
│  │  Lesson list (scroll)   │  │  Summary box             │  │
│  └─────────────────────────┘  │  Article blocks          │  │
│                               │  Complete button         │  │
│                               │  Lesson navigation       │  │
│                               └─────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

- **Sidebar** is `position: sticky; height: 100vh` — never scrolls.
- **Main** is a normal block that scrolls naturally.
- At `≤1080px` the layout collapses to single column (sidebar on top, main below).
- At `≤640px` inline padding reduces to 18px on both panels.

---

## Component Reference

### `App` (`src/App.jsx`)

Root component. Owns all application state.

**State:**
| Key | Type | Persisted | Description |
|-----|------|-----------|-------------|
| `language` | `"en" \| "pl" \| "ru"` | ✓ localStorage | Active UI and content language |
| `filter` | `"all" \| "today" \| "upcoming" \| "done"` | ✓ localStorage | Sidebar lesson list filter |
| `query` | `string` | — | Live search query (deferred with `useDeferredValue`) |
| `completed` | `Set<string>` | ✓ localStorage (JSON array) | IDs of completed lessons |
| `activeLessonId` | `string` | ✓ localStorage + URL hash | Currently displayed lesson |

**Derived:**
- `lessons` — flat array from `flattenLessons(courseData)`, memoized
- `todayIndex` — computed from `courseData.startDate` and current date
- `visibleLessons` — filtered + searched subset of `lessons`

---

### `PlannerSidebar` (`src/components/PlannerSidebar.jsx`)

Left column. Receives all state and callbacks via props (no internal state except `useRef` for scroll-to-active).

**Sections (top to bottom):**
1. **Brand block** — app title, subtitle with lesson count, language switcher
2. **Progress block** — `x / 114` counter + animated progress bar
3. **Search block** — controlled text input, query passed up immediately
4. **Filter block** — pill row (`all`, `today`, `upcoming`, `done`)
5. **Lesson list** — virtualized by CSS overflow; active lesson auto-scrolls into view

Each lesson row uses `.lesson-nav-row` (grid wrapper) + `.lesson-nav-item` (button). Active row has a 3px left amber border. Completed rows animate with `lessonCompletePulse`.

---

### `LessonContent` (`src/components/LessonContent.jsx`)

Main content panel. Stateless — all data comes from props.

**Structure:**
1. Toolbar (date + "Today" jump button)
2. Eyebrow row (lesson counter + "Today" pill if applicable)
3. `<h2>` lesson title
4. Module tag (`.lesson-tag` — light blue pill)
5. Summary box (`.summary-box`)
6. `<LessonArticle>` block renderer
7. Complete button (44px tall, green, transitions on hover)
8. Navigation divider + prev/next lesson buttons

---

### `LessonArticle` (`src/components/LessonArticle.jsx`)

Pure renderer. Takes `content` (the localized lesson object) and maps `content.article[]` → React elements using `renderBlock()`.

If `content.article` is empty or missing, a fallback article is built from `summary` + `outcomes`.

Also contains the `PrincipleIcon` helper that resolves Phosphor icon names from the data string (e.g. `"Ear"` → `<Ear />`) and falls back to a span for plain text or emoji.

---

### `LessonTopicPanel` (`src/components/LessonTopicPanel.jsx`)

Displays the lesson's `outcomes` array as a structured key-topics section.

---

## Article Block Types

All blocks are defined in lesson data files as `{ type, ...props }` objects. The renderer in `LessonArticle.jsx` switches on `type`.

### Static Blocks

| Type | Description | Key Props |
|------|-------------|-----------|
| `section` | Text section with optional heading | `title`, `paragraphs[]` |
| `callout` | Highlighted callout box | `tone` (`accent`/`success`), `label`, `paragraphs[]` |
| `cards` | Grid of content cards | `columns` (1/2), `items[{title, text}]` |
| `comparison` | Two-column comparison table | `columns[{title, items[]}]`, `paragraphs[]` |
| `numberedList` | Ordered list with amber number badges | `title`, `intro`, `items[{title, text}]` |
| `principles` | Icon grid — Phosphor icons + title + text | `title`, `items[{icon, title, text}]` |
| `checkList` | Checklist with Phosphor CheckCircle icons | `title`, `items[{title, text}]` |
| `trackList` | Track items with colored dot + metadata | `title`, `items[{title, text, color, meta}]` |
| `glossary` | Term/definition pairs | `title`, `items[{term, definition}]` |
| `bulletList` | Simple unordered list | `title`, `items[]` |
| `quote` | Pull quote with attribution | `quote`, `caption` |
| `links` | External link list | `title`, `items[{href, label}]` |
| `image` | Image with caption | `src` (imported asset), `alt`, `caption` |
| `embed` | iframe embed (video etc.) | `title`, `embedUrl`, `caption` |

### Interactive Blocks

#### `iceberg` — Behavior Iceberg
**Component:** `IcebergBlock`

Two-zone visual: warm linen top ("above water" — visible behaviors) and dark blue bottom ("below water" — hidden causes). Each cause in the bottom zone is an accordion button. Only one cause is expanded at a time.

```js
{
  type: "iceberg",
  aboveLabel, belowLabel,
  above: ["Barking", "Jumping up", ...],
  below: [
    { label: "Physiology", color: "#c97b22", items: ["Pain", "Hunger", ...] },
    ...
  ]
}
```

#### `flipCards` — Flip Card Quiz
**Component:** `FlipCardsBlock`

Grid of 3D flip cards. Each card has a front face (statement) and a back face (verdict + explanation). Cards are toggled independently. When all cards are flipped, a completion message appears.

Cards are styled with `.flip-card--bad` (myth/interpretation — red tint) or `.flip-card--good` (fact/observation — green tint) based on `item.isInterpretation`.

Grid uses `grid-template-areas: "face"` so both faces share the same grid cell — content height drives card height, no overflow.

```js
{
  type: "flipCards",
  title, tapHint, interpretationLabel, observationLabel, doneMessage,
  items: [{ front, isInterpretation, explanation }, ...]
}
```

#### `sorcBuilder` — S-O-R-C Analysis Tool
**Component:** `SorcBuilderBlock`

Interactive form with four color-coded textarea fields (S/O/R/C — Stimulus, Organism, Response, Consequence). When all four fields are filled, a result chain is rendered. A reset button clears all fields.

```js
{
  type: "sorcBuilder",
  title, labels: {S,O,R,C}, placeholders: {S,O,R,C},
  resultLabel, resetLabel
}
```

---

## Data Architecture

### Course Data (`src/data/courseData.js`)

```
courseData = {
  startDate: "YYYY-MM-DD",   // Day 0 maps to lesson index 0
  modules: [
    {
      id: string,
      translations: { en: {label, summary}, pl: {...}, ru: {...} },
      lessonIds: string[]
    }
  ]
}
```

`lessonsById` (from `src/data/lessons/index.js`) is a flat map of all lesson objects, keyed by ID. The `flattenLessons()` utility joins module metadata onto each lesson, producing the flat `lessons[]` array used throughout the app.

### Lesson Data (`src/data/lessons/<id>.js`)

Each lesson is a named ES module export:

```js
export default {
  id: "behavior-001",
  translations: {
    en: {
      title: string,
      summary: string,
      outcomes: string[],
      article: Block[]         // optional — missing = fallback renderer
    },
    pl: { ... },
    ru: { ... }
  }
}
```

Lessons that include images use ES module imports at the top of the data file — Vite resolves and hashes these assets at build time:

```js
import wolfImg from '../../assets/img/lesson2/wolf.jpg';

export default {
  translations: {
    en: {
      article: [
        { type: "image", src: wolfImg, alt: "...", caption: "..." }
      ]
    }
  }
}
```

### Modules (7 total — 114 lessons)

| Module ID | Lessons | Topic |
|-----------|---------|-------|
| `behavior` | 43 | Ethology, communication, stress, problem analysis |
| `training` | 29 | Learning theory, reinforcement, cues, structured practice |
| `physiology` | 18 | Neurobiology, pain, health systems, body processes |
| `life` | 14 | Daily life, welfare, enrichment |
| `puppies` | 5 | Early development, socialization |
| `search` | 5 | Search and detection work |

---

## State Persistence

All persistent state uses `localStorage` via `readStorage` / `readStorageArray` helpers in `plannerUtils.js`.

| Key | Type | Default |
|-----|------|---------|
| `dog-course-react-language` | `string` | `"ru"` |
| `dog-course-react-filter` | `string` | `"all"` |
| `dog-course-react-active-lesson` | `string` | `""` |
| `dog-course-react-completed` | `JSON string[]` | `[]` |

Active lesson is also read from `window.location.hash` on first load, enabling direct linking to a lesson via URL.

---

## Icon System

**Library:** `@phosphor-icons/react`  
**Weight:** `duotone` throughout for visual consistency  
**Sizes:**
- Navigation SVG icons: 14–16px (inline `<svg>`)
- Principle card icons: 18px inside 32×32px rounded-square badge
- Check list icons: 20px inline

**Mapping in lesson data:** The `icon` field in `principles` block items uses the Phosphor component name as a string (e.g. `"Ear"`, `"Spiral"`, `"Palette"`, `"Bone"`, `"Confetti"`). The `PrincipleIcon` component resolves this dynamically via `PhosphorIcons[name]`. Unknown strings or emoji fall back to a `<span>` with the raw value.

---

## Animation & Motion

| Element | Animation | Duration |
|---------|-----------|----------|
| Flip card rotation | `rotateY(180deg)` CSS 3D | `380ms cubic-bezier(0.4, 0, 0.2, 1)` |
| Progress bar fill | `width` transition | `220ms ease` |
| Lesson nav row hover | `background-color`, `border-color` | `180ms ease` |
| Lesson complete pulse | `@keyframes lessonCompletePulse` | `600ms` |
| Checkbox pop | `@keyframes checkboxPop` | scale 0.8 → 1.14 → 1.08 |
| All buttons/cards hover | `background-color`, `border-color`, `box-shadow` | `150ms ease` |

All animations and transitions are suppressed when `prefers-reduced-motion: reduce` is active.

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| `> 1080px` | Two-column layout (sidebar + main) |
| `≤ 1080px` | Single column; sidebar stacks above main; lesson list capped at 360px height |
| `≤ 640px` | Reduced inline padding (18px); lesson title shrinks to 2rem; 2-column grids collapse to 1 column |

---

## File Structure

```
src/
├── App.jsx                        # Root — state, routing, derived data
├── main.jsx                       # ReactDOM entry
├── styles.css                     # All styles (single file, ~1 200 lines)
│
├── components/
│   ├── LessonContent.jsx          # Main panel layout
│   ├── LessonArticle.jsx          # Article block renderer + PrincipleIcon
│   ├── LessonTopicPanel.jsx       # Outcomes/key topics display
│   ├── PlannerSidebar.jsx         # Left sidebar
│   └── blocks/
│       ├── IcebergBlock.jsx       # Interactive behavior iceberg
│       ├── FlipCardsBlock.jsx     # Interactive flip cards
│       └── SorcBuilderBlock.jsx   # S-O-R-C analysis tool
│
├── data/
│   ├── courseData.js              # Module metadata, UI strings, course config
│   └── lessons/
│       ├── index.js               # Aggregates all lesson exports into lessonsById map
│       ├── behavior-001.js        # Lesson data files (114 total)
│       └── ...
│
├── assets/
│   └── img/
│       └── lesson2/               # Lesson-specific image assets
│           ├── wolf.jpg
│           ├── skull.jpg
│           └── cheese-expert.jpg
│
└── lib/
    └── plannerUtils.js            # Pure utility functions (no side effects)
```
