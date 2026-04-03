# Dog Ethology & Behavior — Course Planner

An interactive single-page application for studying a structured 114-lesson curriculum on dog ethology, behavior science, and training methodology. Designed to work as a daily lesson planner: one lesson per day, progress tracking, full-text search, and rich interactive article content.

Available in **English**, **Polish**, and **Russian** — all three languages are fully supported throughout the UI and all lesson content.

---

## What It Does

- **Daily lesson schedule** — lessons are mapped to calendar dates starting from a configured course start date. The app always knows which lesson is "today."
- **Progress tracking** — mark lessons as completed; progress is saved across sessions.
- **Full-text search** — searches across lesson titles, summaries, outcomes, and article body text in the active language.
- **Filter by status** — view all lessons, today's only, upcoming incomplete lessons, or completed ones.
- **Rich article content** — lessons render structured articles with text sections, callout boxes, image figures, glossaries, comparison tables, numbered lists, and three custom interactive blocks.
- **Interactive learning tools** — Behavior Iceberg (accordion), Flip Cards (3D quiz), and S-O-R-C Builder (analysis form).
- **Direct linking** — the active lesson is reflected in the URL hash, so any lesson can be linked directly.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Build tool | Vite 8 |
| Styling | Plain CSS with custom properties |
| Icons | Phosphor Icons (`@phosphor-icons/react`, duotone weight) |
| State persistence | `localStorage` |
| i18n | Custom — all strings in data files, no library |

No UI framework, no CSS framework, no routing library, no state management library.

---

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

```bash
npm run build    # Production build → dist/
npm run preview  # Preview the production build locally
```

---

## Course Structure

**114 lessons** across 7 modules:

| Module | Lessons | Description |
|--------|---------|-------------|
| Behavior | 43 | Ethology, communication, stress, observation, problem behavior analysis |
| Training | 29 | Learning theory, reinforcement, cues, skill plans, structured practice |
| Physiology | 18 | Neurobiology, pain, health systems, sensory processing |
| Life | 14 | Daily welfare, enrichment, living with dogs |
| Puppies | 5 | Early development, socialization windows, puppy-specific needs |
| Search | 5 | Detection and search work |

---

## Project Structure

```
src/
├── App.jsx                     # Root component — all application state
├── main.jsx                    # Entry point
├── styles.css                  # All styles (~1 200 lines, CSS custom properties)
│
├── components/
│   ├── PlannerSidebar.jsx      # Left sidebar (brand, progress, search, filters, list)
│   ├── LessonContent.jsx       # Main content panel (header, article, navigation)
│   ├── LessonArticle.jsx       # Article block renderer
│   ├── LessonTopicPanel.jsx    # Lesson outcomes display
│   └── blocks/
│       ├── IcebergBlock.jsx    # Interactive behavior iceberg (accordion)
│       ├── FlipCardsBlock.jsx  # 3D flip card quiz
│       └── SorcBuilderBlock.jsx # S-O-R-C analysis form
│
├── data/
│   ├── courseData.js           # Module config, UI text, course metadata
│   └── lessons/
│       ├── index.js            # Aggregates all lesson modules
│       └── behavior-001.js     # Individual lesson files (114 total)
│       └── ...
│
├── assets/img/                 # Lesson image assets (imported in lesson data files)
│
└── lib/
    └── plannerUtils.js         # Pure utility functions
```

---

## Adding a Lesson

Each lesson is a named ES module in `src/data/lessons/`. Minimal structure:

```js
export default {
  id: "behavior-003",
  translations: {
    en: {
      title: "Lesson Title",
      summary: "One-paragraph summary.",
      outcomes: ["What the student will learn"],
      article: [
        { type: "section", title: "Introduction", paragraphs: ["Text..."] },
        { type: "callout", tone: "accent", label: "Key point", paragraphs: ["..."] }
      ]
    },
    pl: { /* same structure in Polish */ },
    ru: { /* same structure in Russian */ }
  }
};
```

Then register the lesson ID in the appropriate module's `lessonIds` array in `src/data/courseData.js`.

### Article Block Types

| Type | Description |
|------|-------------|
| `section` | Heading + paragraphs |
| `callout` | Accent or success callout box |
| `cards` | 1 or 2 column card grid |
| `comparison` | Two-column comparison |
| `numberedList` | Numbered items with amber badges |
| `principles` | Icon + title + text grid (uses Phosphor icon names) |
| `checkList` | Checklist with check icons |
| `glossary` | Term / definition pairs |
| `bulletList` | Simple bullet list |
| `quote` | Pull quote with attribution |
| `image` | Image with caption (import asset at top of file) |
| `embed` | iframe embed |
| `iceberg` | Interactive accordion iceberg |
| `flipCards` | 3D flip card quiz |
| `sorcBuilder` | S-O-R-C behavior analysis tool |

### Using Phosphor Icons in `principles` blocks

Set `icon` to the Phosphor component name (PascalCase):

```js
{ type: "principles", items: [
  { icon: "Ear", title: "Floppy ears", text: "..." },
  { icon: "Spiral", title: "Curly tail", text: "..." }
]}
```

Available names: any export from `@phosphor-icons/react` — see [phosphoricons.com](https://phosphoricons.com).

### Using images

Import the image at the top of the lesson data file:

```js
import wolfImg from '../../assets/img/lesson2/wolf.jpg';

export default {
  translations: {
    en: {
      article: [
        { type: "image", src: wolfImg, alt: "Alt text", caption: "Caption." }
      ]
    }
  }
}
```

---

## Language Support

The app is fully trilingual. Language is stored in `localStorage` and applied via the `lang` attribute on `<html>`, which triggers CSS font overrides for Russian (Prata replaces Fraunces for Cyrillic).

To add a new language:
1. Add the language code to `plannerLanguages` in `courseData.js`
2. Add a UI text object to `plannerUiText`
3. Add translations to all lesson files

---

## Design

The visual design uses a warm paper aesthetic — off-white linen backgrounds, amber accents, ink-brown text — to feel like a quality printed textbook rather than a web dashboard.

Full design documentation is in [design-documentation.md](./design-documentation.md), covering design tokens, typography, layout architecture, component reference, block types, animation specs, and responsive breakpoints.
