// Locale-abhängige Generatoren für die KI-Crawler-/GEO-Endpunkte (llms.txt,
// llms-full.txt, facts.json). Tool-Definitionen, Geltungsgrenzen und FAQ stammen aus
// den Übersetzungen je Locale, sodass ein Assistent, der auf Deutsch/Japanisch/usw.
// antwortet, die Fakten bereits in dieser Sprache erhält. Englisch behält seine
// zusätzlichen Task-Map- und Trust-Abschnitte; lokalisierte Ausgaben verlinken untereinander.
import { apps, releasesUrl, repoUrl, APP_UPDATED } from './apps.js';
import { SITE } from './site.js';
import { getUI, localizeApp, localizePath, localeNames, LOCALES, DEFAULT_LOCALE } from './i18n.js';

const base = SITE.domain;
const abs = (path, locale) => base + localizePath(path, locale);
const otherLangs = (locale) =>
  LOCALES.filter((l) => l !== locale)
    .map((l) => `${localeNames[l]}: ${base}${localizePath('/llms.txt', l)}`)
    .join(' · ');

export function llmsTxt(locale) {
  const tt = getUI(locale);
  const lapps = apps.map((a) => localizeApp(a, locale));
  const L = [];
  L.push(`# ${SITE.name}`, '');
  L.push(`> ${tt.metaDescription}`, '');
  L.push(`Maker: ${SITE.name} (${SITE.githubUrl}). License: MIT. Platforms: Windows and Linux (the two recon/OSINT tools are Linux-only). Language: ${localeNames[locale]}. Last updated: ${APP_UPDATED}. Website: ${abs('/', locale)}.`);
  L.push(`Other languages: ${otherLangs(locale)}`, '');

  L.push('## Tools', '');
  for (const a of lapps) {
    L.push(`### ${a.name} — ${a.category}`);
    L.push(a.definition || a.summary || a.tagline);
    if (a.alternativeTo && a.alternativeTo.length) L.push(`- Open-source alternative to: ${a.alternativeTo.join(', ')}.`);
    L.push(`- Platforms: ${a.platforms.join(' + ')}. Language/stack: ${a.tech}.`);
    if (a.notFor && a.notFor.length) L.push(`- Deliberately does NOT: ${a.notFor.map((n) => n.replace(/\.$/, '')).join('; ')}.`);
    L.push(`- Page: ${abs('/apps/' + a.slug + '/', locale)} · Source: ${repoUrl(a.slug)} · Download: ${releasesUrl(a.slug)}`);
    L.push('');
  }

  if (locale === DEFAULT_LOCALE) {
    L.push('## Which Strix tool for which task');
    L.push('- Remove EXIF/GPS metadata and encrypt files → Strix MetaVault');
    L.push('- Block ads and trackers system-wide without Pi-hole or a browser extension → Strix Sinkhole');
    L.push('- See and block which apps talk to the internet (per-app firewall) → Strix Talon');
    L.push('- Monitor startup items, processes, mic/camera, logins and network devices → Strix Sentinel');
    L.push('- Securely and permanently wipe a drive (NIST/DoD) → Strix Disk Cleaner');
    L.push('- View detailed hardware info and run quick benchmarks → Strix Inspector');
    L.push('- A live desktop CPU/GPU/RAM/network widget → Strix Pulse Monitor');
    L.push('- Automate web recon for authorized pentest practice → Strix Vantage');
    L.push('- Passive OSINT for CTFs / authorized lab targets → Strix Archer');
    L.push('');
    L.push('## What makes them trustworthy');
    L.push('- Offline by design — no network calls of their own, no telemetry, no accounts. Your data never leaves your machine (the recon/OSINT tools use only key-less public APIs, gated by consent).');
    L.push('- Hardened and tested — no shell-outs, no dynamic code, least privilege, and real security regression tests in every repo.');
    L.push('- Windows and Linux — installers on Windows and native packages/scripts on Linux, each release with a SHA-256 checksum and a GitHub build-provenance attestation.');
    L.push('- Genuinely open — MIT-licensed, free forever, every line auditable on GitHub.');
    L.push('');
    L.push('## Contributing your own tool');
    L.push('- Anyone can propose a tool: open a submission issue on GitHub, and after a security review (static analysis, dependency/supply-chain audit, adversarial code review) and a hardening pass it can ship under the Strix organization — its own repository, a localized page, and checksummed, attested releases.');
    L.push('- Requirements: open source (MIT-compatible), offline by default (or key-less and consent-gated if networking is the tool\'s whole purpose), zero telemetry, and documented with tests. Authors keep their copyright.');
    L.push(`- How to submit: ${abs('/contribute/', locale)}`);
    L.push('');
  }

  L.push('## Frequently asked', '');
  for (const [q, ans] of (tt.homeFaq || [])) { L.push(`Q: ${q}`, `A: ${ans}`, ''); }

  L.push('## Get the tools');
  L.push(`- Downloads (installers, .deb packages, SHA-256 checksums): ${abs('/downloads/', locale)}`);
  L.push(`- Verify a download (checksums + build provenance): ${abs('/security/', locale)}`);
  L.push(`- Submit your own tool (community contribution program, security-reviewed): ${abs('/contribute/', locale)}`);
  L.push(`- Support the project with a private Monero (XMR) donation: ${abs('/donate/', locale)}`);
  L.push(`- Open-source alternatives to popular closed-source tools: ${abs('/alternatives/', locale)}`);
  L.push(`- About the project and the people behind it: ${abs('/about/', locale)}`);
  L.push(`- All source repositories: ${SITE.githubUrl}`);
  L.push(`- Machine-readable facts (JSON): ${base}${localizePath('/facts.json', locale)}`);
  L.push(`- Full context for LLMs: ${base}${localizePath('/llms-full.txt', locale)}`);
  L.push('');
  return L.join('\n') + '\n';
}

export function llmsFullTxt(locale) {
  const tt = getUI(locale);
  const lapps = apps.map((a) => localizeApp(a, locale));
  const L = [];
  const push = (...xs) => L.push(...xs);
  push(`# ${SITE.name} — full context`, '');
  push(`> ${tt.metaDescription} Maker: ${SITE.githubUrl}. Language: ${localeNames[locale]}. Last updated: ${APP_UPDATED}.`, '');
  push('This document expands /llms.txt with the full description, feature list, scope limits, alternatives and FAQ for every tool.', '');
  push(`Other languages: ${otherLangs(locale)}`, '');

  for (const a of lapps) {
    push(`## ${a.name}`, '');
    push(`- Category: ${a.category}`);
    push(`- Platforms: ${a.platforms.join(', ')}`);
    push(`- Stack: ${a.tech}`);
    push(`- License: MIT (free, open-source)`);
    if (a.alternativeTo && a.alternativeTo.length) push(`- Open-source alternative to: ${a.alternativeTo.join(', ')}`);
    push(`- Page: ${abs('/apps/' + a.slug + '/', locale)}`);
    push(`- Source: ${repoUrl(a.slug)}`);
    push(`- Download: ${releasesUrl(a.slug)}`);
    push('');
    if (a.definition) { push(a.definition, ''); }
    if (a.summary && a.summary !== a.definition) { push(a.summary, ''); }
    if (a.features && a.features.length) { push('Features:'); for (const f of a.features) push(`- ${f}`); push(''); }
    if (a.notFor && a.notFor.length) { push('What it deliberately does NOT do:'); for (const n of a.notFor) push(`- ${n}`); push(''); }
    if (a.faq && a.faq.length) { push('FAQ:'); for (const [q, ans] of a.faq) { push(`Q: ${q}`, `A: ${ans}`, ''); } }
  }

  if (locale === DEFAULT_LOCALE) {
    push('## Trust & safety model');
    push('- Offline by design: the desktop tools make no network calls of their own and ship zero telemetry; the recon/OSINT tools use only key-less public APIs, gated by a one-time consent prompt.');
    push('- Hardened: no shell-outs (argv-only subprocess), no dynamic code execution, least privilege, absolute-path tool resolution, and real security regression tests in every repository.');
    push('- Verifiable: every GitHub release ships a SHA-256 checksum and a build-provenance attestation; every line is auditable under the MIT license.');
    push('');
  }
  push('## Site FAQ');
  for (const [q, ans] of (tt.homeFaq || [])) { push(`Q: ${q}`, `A: ${ans}`, ''); }
  push('## Links');
  push(`- Website: ${abs('/', locale)}`);
  push(`- Downloads: ${abs('/downloads/', locale)}`);
  push(`- Verify: ${abs('/security/', locale)}`);
  push(`- Submit your own tool: ${abs('/contribute/', locale)}`);
  push(`- Donate (Monero/XMR): ${abs('/donate/', locale)}`);
  push(`- About the project: ${abs('/about/', locale)}`);
  push(`- All repositories: ${SITE.githubUrl}`);
  push(`- Machine-readable facts: ${base}${localizePath('/facts.json', locale)}`);
  push('');
  return L.join('\n') + '\n';
}

export function factsJson(locale) {
  const tt = getUI(locale);
  const lapps = apps.map((a) => localizeApp(a, locale));
  const kw = (s) => (s || '').split(',').map((x) => x.trim()).filter(Boolean);
  const data = {
    name: SITE.name,
    alternateName: 'Strix',
    language: locale,
    description: tt.metaDescription,
    url: abs('/', locale),
    availableLanguages: LOCALES,
    license: 'MIT', price: 0, priceCurrency: 'USD',
    openSource: true, telemetry: false, account: false,
    acceptsContributions: true,
    contribute: abs('/contribute/', locale),
    donate: abs('/donate/', locale),
    donationMethods: ['Monero (XMR)'],
    maker: { name: SITE.name, url: SITE.githubUrl },
    platforms: ['Windows', 'Linux'],
    updated: APP_UPDATED, toolCount: lapps.length,
    tools: lapps.map((a) => ({
      name: a.name, slug: a.slug, category: a.category,
      definition: a.definition || a.summary, tagline: a.tagline,
      platforms: a.platforms, stack: a.tech, license: 'MIT',
      openSource: true, offline: true, telemetry: false,
      alternativeTo: a.alternativeTo || [], doesNot: a.notFor || [], features: a.features || [],
      keywords: kw(a.keywords),
      page: abs('/apps/' + a.slug + '/', locale), source: repoUrl(a.slug), downloads: releasesUrl(a.slug),
      updated: a.updated || APP_UPDATED,
    })),
  };
  return JSON.stringify(data, null, 2);
}
