export function readStorage(key, fallback) {
  if (typeof window === "undefined") {
    return fallback;
  }
  return window.localStorage.getItem(key) ?? fallback;
}

export function readStorageArray(key) {
  if (typeof window === "undefined") {
    return [];
  }
  try {
    return JSON.parse(window.localStorage.getItem(key) ?? "[]");
  } catch {
    return [];
  }
}

export function getLocalizedValue(source, language) {
  if (!source) {
    return "";
  }
  if (typeof source === "string") {
    return source;
  }
  return source[language] ?? source.ru ?? source.en ?? source.pl ?? "";
}

export function getLessonContent(lesson, language) {
  return lesson.translations[language] ?? lesson.translations.ru;
}

export function extractLessonSearchText(content) {
  const values = [];

  const visit = (value) => {
    if (!value) {
      return;
    }

    if (typeof value === "string") {
      values.push(value);
      return;
    }

    if (Array.isArray(value)) {
      value.forEach(visit);
      return;
    }

    if (typeof value === "object") {
      Object.values(value).forEach(visit);
    }
  };

  visit(content.article);
  return values.join(" ");
}

export function flattenLessons(courseData) {
  return courseData.modules.flatMap((module) =>
    module.lessons.map((lesson) => ({
      ...lesson,
      moduleId: module.id,
      moduleTranslations: module.translations
    }))
  );
}

export function getTodayIndex(totalLessons, startDate) {
  const today = new Date();
  const start = new Date(startDate);
  const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24));
  const normalized = Number.isFinite(diff) ? diff : 0;
  return Math.max(0, Math.min(totalLessons - 1, normalized));
}

export function getLessonDate(index, startDate) {
  const start = new Date(startDate);
  const date = new Date(start);
  date.setDate(start.getDate() + index);
  return date;
}

export function formatDate(date, language) {
  const localeMap = {
    en: "en-US",
    pl: "pl-PL",
    ru: "ru-RU"
  };

  return new Intl.DateTimeFormat(localeMap[language] ?? "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date);
}

export function truncate(value, maxLength) {
  if (!value || value.length <= maxLength) {
    return value;
  }
  return `${value.slice(0, maxLength - 3).trimEnd()}...`;
}

export function toggleSetValue(value, setter) {
  setter((previous) => {
    const next = new Set(previous);
    if (next.has(value)) {
      next.delete(value);
    } else {
      next.add(value);
    }
    return next;
  });
}
