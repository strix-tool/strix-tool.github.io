// Kern der Internationalisierung. Englisch ist die maßgebliche Quelle (data/site.js `t`,
// data/apps.js, data/i18n/en.js); jede weitere Locale liefert Overrides und greift
// für alles, was sie nicht übersetzt, auf Englisch zurück — sodass eine unvollständige
// Locale die Seite nie beschädigt.
import { t } from './site.js';
import * as en from './i18n/en.js';
import * as de from './i18n/de.js';
import * as fr from './i18n/fr.js';
import * as es from './i18n/es.js';
import * as it from './i18n/it.js';
import * as ptBR from './i18n/pt-BR.js';
import * as pl from './i18n/pl.js';
import * as uk from './i18n/uk.js';
import * as ru from './i18n/ru.js';
import * as sv from './i18n/sv.js';
import * as zhCN from './i18n/zh-CN.js';
import * as ja from './i18n/ja.js';
import * as ko from './i18n/ko.js';

export const DEFAULT_LOCALE = 'en';
export const LOCALES = ['en', 'de', 'fr', 'es', 'it', 'pt-BR', 'pl', 'uk', 'ru', 'sv', 'zh-CN', 'ja', 'ko'];
export const NON_DEFAULT_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);
export const localeNames = {
  en: 'English', de: 'Deutsch', fr: 'Français', es: 'Español', it: 'Italiano',
  'pt-BR': 'Português (BR)', pl: 'Polski', uk: 'Українська', ru: 'Русский', sv: 'Svenska',
  'zh-CN': '简体中文', ja: '日本語', ko: '한국어',
};
export const localeShort = {
  en: 'EN', de: 'DE', fr: 'FR', es: 'ES', it: 'IT', 'pt-BR': 'PT', pl: 'PL', uk: 'UK',
  ru: 'RU', sv: 'SV', 'zh-CN': 'ZH', ja: 'JA', ko: 'KO',
};
export const localeOg = {
  en: 'en_US', de: 'de_DE', fr: 'fr_FR', es: 'es_ES', it: 'it_IT', 'pt-BR': 'pt_BR',
  pl: 'pl_PL', uk: 'uk_UA', ru: 'ru_RU', sv: 'sv_SE', 'zh-CN': 'zh_CN', ja: 'ja_JP', ko: 'ko_KR',
};
export const localeHreflang = {
  en: 'en', de: 'de', fr: 'fr', es: 'es', it: 'it', 'pt-BR': 'pt-BR', pl: 'pl', uk: 'uk',
  ru: 'ru', sv: 'sv', 'zh-CN': 'zh-CN', ja: 'ja', ko: 'ko',
};

const MODS = { en, de, fr, es, it, 'pt-BR': ptBR, pl, uk, ru, sv, 'zh-CN': zhCN, ja, ko };

export const isLocale = (s) => LOCALES.includes(s);

// Kanonischer (englischer) Pfad -> lokalisierter Pfad. Englisch verbleibt im Root.
export function localizePath(path, locale) {
  if (!locale || locale === DEFAULT_LOCALE) return path;
  if (path === '/' || path === '') return `/${locale}/`;
  return `/${locale}${path}`;
}

// Ein Override-Objekt per Deep-Merge über eine Basis legen und dabei leere/fehlende Overrides ignorieren.
// Arrays werden, sofern angegeben, vollständig ersetzt (nie teilweise zusammengeführt).
function merge(base, over) {
  if (over === undefined || over === null) return base;
  if (Array.isArray(base) || Array.isArray(over)) return over ?? base;
  if (typeof base !== 'object' || typeof over !== 'object') {
    return over === '' || over === undefined || over === null ? base : over;
  }
  const out = { ...base };
  for (const k of Object.keys(over)) {
    out[k] = k in base ? merge(base[k], over[k]) : over[k];
  }
  return out;
}

// UI-/Marketing-Strings für eine Locale (mit Englisch aufgefüllt).
export function getUI(locale) {
  const mod = MODS[locale];
  return mod && mod.ui ? merge(t, mod.ui) : t;
}

// Strings der Seite /security für eine Locale.
export function getSecurity(locale) {
  const base = en.security;
  const mod = MODS[locale];
  return mod && mod.security ? merge(base, mod.security) : base;
}

// Strings der Seite /contribute für eine Locale.
export function getContribute(locale) {
  const base = en.contribute;
  const mod = MODS[locale];
  return mod && mod.contribute ? merge(base, mod.contribute) : base;
}

// Strings der Seite /donate für eine Locale.
export function getDonate(locale) {
  const base = en.donate;
  const mod = MODS[locale];
  return mod && mod.donate ? merge(base, mod.donate) : base;
}

// Strings der Seite /about für eine Locale.
export function getAbout(locale) {
  const base = en.about;
  const mod = MODS[locale];
  return mod && mod.about ? merge(base, mod.about) : base;
}

// Strings der Seite /alternatives für eine Locale.
export function getAlternatives(locale) {
  const base = en.alternatives;
  const mod = MODS[locale];
  return mod && mod.alternatives ? merge(base, mod.alternatives) : base;
}

// Anzeigelabel für einen App-Kategorie-Chip (der kanonische Schlüssel bleibt zum Filtern englisch).
export function categoryLabel(cat, locale) {
  const mod = MODS[locale];
  return (mod && mod.categories && mod.categories[cat]) || en.categories[cat] || cat;
}

// Die übersetzten Inhalte einer Locale über ein App-Objekt legen.
export function localizeApp(app, locale) {
  const mod = MODS[locale];
  const ov = mod && mod.apps && mod.apps[app.slug];
  if (!ov) return app;
  const { creditsNote, ...rest } = ov;
  const merged = { ...app, ...rest };
  if (creditsNote && app.credits) merged.credits = { ...app.credits, note: creditsNote };
  return merged;
}
