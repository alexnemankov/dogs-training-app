import { lessonsById } from "./lessons/index.js";

export const plannerLanguages = ["en","pl","ru"];

export const plannerFilters = ["all","today","upcoming","done"];

export const plannerUiText = {
  "en": {
    "appTitle": "Dog Ethology & Behavior",
    "appSubtitle": "Curriculum plan · 114 lessons",
    "progress": "Progress",
    "searchPlaceholder": "Search topics...",
    "filters": {
      "all": "All",
      "today": "Today",
      "upcoming": "Upcoming",
      "done": "Done"
    },
    "todayButton": "Today",
    "currentLesson": "Lesson",
    "from": "of",
    "todayBadge": "Today",
    "keyTopics": "Key lesson topics",
    "complete": "Mark as completed",
    "completed": "Completed",
    "next": "Next",
    "empty": "No lessons match the current search and filter.",
    "clearFilter": "Clear filter",
    "language": "Language"
  },
  "pl": {
    "appTitle": "Kynologia i Behawiorystyka",
    "appSubtitle": "Plan nauki · 114 lekcji",
    "progress": "Postep",
    "searchPlaceholder": "Szukaj tematow...",
    "filters": {
      "all": "Wszystkie",
      "today": "Dzis",
      "upcoming": "Dalej",
      "done": "Ukonczone"
    },
    "todayButton": "Dzis",
    "currentLesson": "Lekcja",
    "from": "z",
    "todayBadge": "Dzis",
    "keyTopics": "Kluczowe tematy lekcji",
    "complete": "Oznacz jako ukonczone",
    "completed": "Ukonczone",
    "next": "Nastepna",
    "empty": "Brak lekcji pasujacych do biezacego wyszukiwania i filtra.",
    "clearFilter": "Wyczysc filtr",
    "language": "Jezyk"
  },
  "ru": {
    "appTitle": "Кинология и Бихевиористика",
    "appSubtitle": "Учебный план · 114 занятий",
    "progress": "Прогресс",
    "searchPlaceholder": "Поиск по темам...",
    "filters": {
      "all": "Все",
      "today": "Сегодня",
      "upcoming": "Впереди",
      "done": "Пройдено"
    },
    "todayButton": "Сегодня",
    "currentLesson": "Занятие",
    "from": "из",
    "todayBadge": "Сегодня",
    "keyTopics": "Ключевые темы занятия",
    "complete": "Отметить как пройденное",
    "completed": "Пройдено",
    "next": "Далее",
    "empty": "Нет занятий, подходящих под текущий поиск и фильтр.",
    "clearFilter": "Сбросить фильтр",
    "language": "Язык"
  }
};

const modulesMeta = [
  {
    "id": "behavior",
    "translations": {
      "en": {
        "label": "Behavior",
        "summary": "Behavior science, observation, communication, stress, and problem analysis."
      },
      "pl": {
        "label": "Zachowanie",
        "summary": "Nauka o zachowaniu, obserwacja, komunikacja, stres i analiza problemow."
      },
      "ru": {
        "label": "Поведение",
        "summary": "Поведение"
      }
    },
    "lessonIds": [
      "behavior-001",
      "behavior-002",
      "behavior-003",
      "behavior-004",
      "behavior-005",
      "behavior-006",
      "behavior-007",
      "behavior-008",
      "behavior-009",
      "behavior-010",
      "behavior-011",
      "behavior-012",
      "behavior-013",
      "behavior-014",
      "behavior-015",
      "behavior-016",
      "behavior-017",
      "behavior-018",
      "behavior-019",
      "behavior-020",
      "behavior-021",
      "behavior-022",
      "behavior-023",
      "behavior-024",
      "behavior-025",
      "behavior-026",
      "behavior-027",
      "behavior-028",
      "behavior-029",
      "behavior-030",
      "behavior-031",
      "behavior-032",
      "behavior-033",
      "behavior-034",
      "behavior-035",
      "behavior-036",
      "behavior-037",
      "behavior-038",
      "behavior-039",
      "behavior-040",
      "behavior-041",
      "behavior-042",
      "behavior-043"
    ]
  },
  {
    "id": "training",
    "translations": {
      "en": {
        "label": "Training",
        "summary": "Learning theory, reinforcement, cues, skill plans, and structured practice."
      },
      "pl": {
        "label": "Trening",
        "summary": "Teoria uczenia, wzmocnienia, sygnaly, plany treningowe i uporzadkowana praktyka."
      },
      "ru": {
        "label": "Обучение",
        "summary": "Обучение"
      }
    },
    "lessonIds": [
      "training-001",
      "training-002",
      "training-003",
      "training-004",
      "training-005",
      "training-006",
      "training-007",
      "training-008",
      "training-009",
      "training-010",
      "training-011",
      "training-012",
      "training-013",
      "training-014",
      "training-015",
      "training-016",
      "training-017",
      "training-018",
      "training-019",
      "training-020",
      "training-021",
      "training-022",
      "training-023",
      "training-024",
      "training-025",
      "training-026",
      "training-027",
      "training-028",
      "training-029"
    ]
  },
  {
    "id": "physiology",
    "translations": {
      "en": {
        "label": "Physiology",
        "summary": "Neurobiology, pain, stress physiology, health systems, and body processes."
      },
      "pl": {
        "label": "Fizjologia",
        "summary": "Neurobiologia, bol, fizjologia stresu, uklady zdrowia i procesy organizmu."
      },
      "ru": {
        "label": "Физиология",
        "summary": "Физиология"
      }
    },
    "lessonIds": [
      "physiology-001",
      "physiology-002",
      "physiology-003",
      "physiology-004",
      "physiology-005",
      "physiology-006",
      "physiology-007",
      "physiology-008",
      "physiology-009",
      "physiology-010",
      "physiology-011",
      "physiology-012",
      "physiology-013",
      "physiology-014",
      "physiology-015",
      "physiology-016",
      "physiology-017",
      "physiology-018"
    ]
  },
  {
    "id": "life",
    "translations": {
      "en": {
        "label": "Life with dogs",
        "summary": "Daily welfare, home life, routines, equipment, and quality of life."
      },
      "pl": {
        "label": "Zycie z psem",
        "summary": "Codzienny dobrostan, dom, rytualy, sprzet i jakosc zycia."
      },
      "ru": {
        "label": "Жизнь с собакой",
        "summary": "Жизнь с собакой"
      }
    },
    "lessonIds": [
      "life-001",
      "life-002",
      "life-003",
      "life-004",
      "life-005",
      "life-006",
      "life-007",
      "life-008",
      "life-009",
      "life-010",
      "life-011",
      "life-012",
      "life-013",
      "life-014"
    ]
  },
  {
    "id": "search",
    "translations": {
      "en": {
        "label": "Search work",
        "summary": "Scent work, motivation, field search, indication, and progressive search skills."
      },
      "pl": {
        "label": "Praca wechowa",
        "summary": "Praca wechowa, motywacja, przeszukiwanie terenu, sygnalizacja i progresja umiejetnosci."
      },
      "ru": {
        "label": "Поиск",
        "summary": "Поиск"
      }
    },
    "lessonIds": [
      "search-001",
      "search-002",
      "search-003",
      "search-004",
      "search-005"
    ]
  },
  {
    "id": "puppies",
    "translations": {
      "en": {
        "label": "Puppies and age",
        "summary": "Developmental stages, age periods, socialization, and the growing dog."
      },
      "pl": {
        "label": "Szczenie i wiek",
        "summary": "Etapy rozwoju, okresy wiekowe, socjalizacja i dorastajacy pies."
      },
      "ru": {
        "label": "Щенки и возраст",
        "summary": "Щенки и возраст"
      }
    },
    "lessonIds": [
      "puppies-001",
      "puppies-002",
      "puppies-003",
      "puppies-004",
      "puppies-005"
    ]
  }
];

export const courseData = {
  startDate: "2026-04-02",
  modules: modulesMeta.map((module) => ({
    id: module.id,
    translations: module.translations,
    lessons: module.lessonIds.map((lessonId) => lessonsById[lessonId])
  }))
};
