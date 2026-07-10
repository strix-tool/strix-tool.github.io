// Locale-abhängige Seiten-Metadaten- und JSON-LD-Builder, gemeinsam genutzt von den englischen
// Routen (src/pages/*) und den lokalisierten Routen (src/pages/[lang]/*), damit beide synchron bleiben.
import fs from 'node:fs';
import { SITE } from './site.js';
import { apps, releasesUrl, repoUrl } from './apps.js';
import { getUI, getSecurity, getContribute, getDonate, getAbout, getAlternatives, localizeApp, localizePath, localeHreflang } from './i18n.js';

const abs = (path, locale) => SITE.domain + localizePath(path, locale);
const shot = (slug) =>
  fs.existsSync(`public/screens/${slug}.png`)
    ? SITE.domain + '/screens/' + slug + '.png'
    : SITE.domain + '/og.png';

export function homeMeta(locale) {
  const tt = getUI(locale);
  const lapps = apps.map((a) => localizeApp(a, locale));
  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    alternateName: 'Strix',
    url: abs('/', locale),
    inLanguage: localeHreflang[locale],
    description: tt.metaDescription,
    keywords: tt.keywordsGlobal,
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.domain + '/' },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: abs('/', locale) + '?q={search_term_string}' },
      'query-input': 'required name=search_term_string',
    },
  };
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: SITE.name + ' — tools',
    numberOfItems: lapps.length,
    itemListElement: lapps.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: a.name,
        applicationCategory: 'SecurityApplication',
        applicationSubCategory: a.category,
        operatingSystem: a.platforms.join(', '),
        description: a.summary || a.tagline,
        softwareVersion: SITE.version,
        keywords: a.keywords,
        screenshot: shot(a.slug),
        image: shot(a.slug),
        isAccessibleForFree: true,
        license: 'https://opensource.org/licenses/MIT',
        author: { '@type': 'Organization', name: SITE.name, url: SITE.githubUrl },
        publisher: { '@type': 'Organization', name: SITE.name, url: SITE.githubUrl },
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        downloadUrl: releasesUrl(a.slug),
        url: abs('/apps/' + a.slug + '/', locale),
      },
    })),
  };
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: localeHreflang[locale],
    mainEntity: tt.homeFaq.map(([q, a]) => ({
      '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
  return {
    title: tt.homeSeoTitle, description: tt.homeSeoDescription, keywords: tt.keywordsGlobal,
    path: '/', jsonLd: [websiteLd, itemList, faqLd],
  };
}

export function downloadsMeta(locale) {
  const tt = getUI(locale);
  const lapps = apps.map((a) => localizeApp(a, locale));
  const breadcrumbLd = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: abs('/', locale) },
      { '@type': 'ListItem', position: 2, name: tt.nav.downloads, item: abs('/downloads/', locale) },
    ],
  };
  const itemList = {
    '@context': 'https://schema.org', '@type': 'ItemList',
    name: SITE.name + ' — downloads', numberOfItems: lapps.length,
    itemListElement: lapps.map((a, i) => ({
      '@type': 'ListItem', position: i + 1,
      item: {
        '@type': 'SoftwareApplication', name: a.name,
        applicationCategory: 'SecurityApplication', applicationSubCategory: a.category,
        operatingSystem: a.platforms.join(', '), description: a.definition || a.summary || a.tagline,
        softwareVersion: SITE.version, isAccessibleForFree: true,
        license: 'https://opensource.org/licenses/MIT',
        author: { '@type': 'Organization', '@id': SITE.domain + '/#org', name: SITE.name },
        publisher: { '@id': SITE.domain + '/#org' },
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        downloadUrl: releasesUrl(a.slug), url: abs('/apps/' + a.slug + '/', locale),
      },
    })),
  };
  return {
    title: tt.downloadsSeoTitle, description: tt.downloadsSeoDescription, keywords: tt.keywordsGlobal,
    path: '/downloads/', jsonLd: [breadcrumbLd, itemList],
  };
}

export function securityMeta(locale) {
  const tt = getUI(locale);
  const s = getSecurity(locale);
  const desc = (s.lead || '').split('. ')[0].replace(/\.$/, '') + '.';
  const breadcrumbLd = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: abs('/', locale) },
      { '@type': 'ListItem', position: 2, name: tt.nav.security, item: abs('/security/', locale) },
    ],
  };
  const pageLd = {
    '@context': 'https://schema.org', '@type': 'TechArticle',
    headline: s.h1, description: desc, inLanguage: localeHreflang[locale],
    dateModified: '2026-07-08',
    author: { '@type': 'Organization', '@id': SITE.domain + '/#org', name: SITE.name },
    publisher: { '@id': SITE.domain + '/#org' },
    mainEntityOfPage: abs('/security/', locale),
    about: ['software supply chain security', 'SHA-256 checksum verification', 'SLSA build provenance', 'code signing', 'open-source software trust'],
  };
  return {
    title: `${tt.nav.security} — ${SITE.name}`, description: desc,
    keywords: 'verify strix download, sha-256 checksum, github artifact attestation, slsa provenance, unsigned installer, pyinstaller antivirus false positive, no telemetry, open source security',
    path: '/security/', jsonLd: [breadcrumbLd, pageLd],
  };
}

export function contributeMeta(locale) {
  const tt = getUI(locale);
  const c = getContribute(locale);
  const desc = (c.lead || '').split('. ')[0].replace(/\.$/, '') + '.';
  const breadcrumbLd = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: abs('/', locale) },
      { '@type': 'ListItem', position: 2, name: tt.nav.contribute, item: abs('/contribute/', locale) },
    ],
  };
  const pageLd = {
    '@context': 'https://schema.org', '@type': 'TechArticle',
    headline: c.h1, description: desc, inLanguage: localeHreflang[locale],
    dateModified: '2026-07-08',
    author: { '@type': 'Organization', '@id': SITE.domain + '/#org', name: SITE.name },
    publisher: { '@id': SITE.domain + '/#org' },
    mainEntityOfPage: abs('/contribute/', locale),
    about: ['open-source contribution', 'security review', 'software supply chain security', 'code hardening', 'community-maintained software'],
  };
  const howToLd = {
    '@context': 'https://schema.org', '@type': 'HowTo',
    name: 'How to submit a tool to Strix Advanced Tools',
    description: desc, inLanguage: localeHreflang[locale],
    step: (c.steps?.list || []).map((s, i) => ({
      '@type': 'HowToStep', position: i + 1, name: s.t, text: s.d,
    })),
  };
  const faqLd = c.faq && {
    '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: localeHreflang[locale],
    mainEntity: c.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };
  return {
    title: `${tt.nav.contribute} — ${SITE.name}`, description: desc,
    keywords: 'contribute security tool, submit open source tool, add tool to strix, open source security review, tool hardening, sast, sbom, slsa provenance, mit license, community tools',
    path: '/contribute/', jsonLd: [breadcrumbLd, pageLd, howToLd, ...(faqLd ? [faqLd] : [])],
  };
}

export function donateMeta(locale) {
  const tt = getUI(locale);
  const dn = getDonate(locale);
  const desc = (dn.lead || '').split('. ')[0].replace(/\.$/, '') + '.';
  const breadcrumbLd = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: abs('/', locale) },
      { '@type': 'ListItem', position: 2, name: tt.nav.donate, item: abs('/donate/', locale) },
    ],
  };
  const pageLd = {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: dn.h1, description: desc, inLanguage: localeHreflang[locale],
    dateModified: '2026-07-08',
    isPartOf: { '@id': SITE.domain + '/#website' },
    about: ['Monero donation', 'cryptocurrency donation', 'open-source funding', 'privacy-preserving payment'],
    publisher: { '@type': 'Organization', '@id': SITE.domain + '/#org', name: SITE.name },
    mainEntityOfPage: abs('/donate/', locale),
  };
  return {
    title: `${tt.nav.donate} — ${SITE.name}`, description: desc,
    keywords: 'donate strix, monero donation, xmr address, support open source security tools, privacy-preserving donation, no processor, anonymous donation',
    path: '/donate/', jsonLd: [breadcrumbLd, pageLd],
  };
}

export function aboutMeta(locale) {
  const tt = getUI(locale);
  const a = getAbout(locale);
  const desc = (a.lead || '').split('. ')[0].replace(/\.$/, '') + '.';
  const breadcrumbLd = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: abs('/', locale) },
      { '@type': 'ListItem', position: 2, name: tt.nav.about, item: abs('/about/', locale) },
    ],
  };
  const pageLd = {
    '@context': 'https://schema.org', '@type': 'AboutPage',
    name: a.h1, description: desc, inLanguage: localeHreflang[locale],
    dateModified: '2026-07-08', mainEntityOfPage: abs('/about/', locale),
    about: {
      '@type': 'Organization', '@id': SITE.domain + '/#org', name: SITE.name,
      url: SITE.domain + '/', sameAs: [SITE.githubUrl],
      description: 'An independent, open-source team building offline, zero-telemetry privacy & security tools.',
    },
  };
  return {
    title: `${tt.nav.about} — ${SITE.name}`, description: desc,
    keywords: 'about strix advanced tools, open source privacy team, independent security tools, who makes strix, no telemetry, MIT',
    path: '/about/', jsonLd: [breadcrumbLd, pageLd],
  };
}

export function alternativesMeta(locale) {
  const tt = getUI(locale);
  const alt = getAlternatives(locale);
  const lapps = apps.map((a) => localizeApp(a, locale)).filter((a) => a.alternativeTo && a.alternativeTo.length);
  const desc = (alt.lead || '').split('. ')[0].replace(/\.$/, '') + '.';
  const breadcrumbLd = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: abs('/', locale) },
      { '@type': 'ListItem', position: 2, name: tt.nav.alternatives, item: abs('/alternatives/', locale) },
    ],
  };
  const itemList = {
    '@context': 'https://schema.org', '@type': 'ItemList',
    name: SITE.name + ' — open-source alternatives', numberOfItems: lapps.length,
    itemListElement: lapps.map((a, i) => ({
      '@type': 'ListItem', position: i + 1,
      item: {
        '@type': 'SoftwareApplication', name: a.name,
        applicationCategory: 'SecurityApplication', operatingSystem: a.platforms.join(', '),
        description: `Open-source alternative to ${a.alternativeTo.join(', ')}. ${a.tagline}`,
        isAccessibleForFree: true, license: 'https://opensource.org/licenses/MIT',
        url: abs('/apps/' + a.slug + '/', locale),
      },
    })),
  };
  // High-intent FAQ: one "is there an open-source alternative to X?" per mapped tool.
  const faqLd = {
    '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: localeHreflang[locale],
    mainEntity: lapps.flatMap((a) => a.alternativeTo.map((x) => ({
      '@type': 'Question',
      name: `Is there an open-source alternative to ${x}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Yes — ${a.name} is a free, MIT-licensed, offline alternative to ${x}. ${a.tagline} It ships zero telemetry and runs on ${a.platforms.join(' and ')}.`,
      },
    }))),
  };
  return {
    title: `Open-source alternatives — ${SITE.name}`, description: desc,
    keywords: 'open source alternative, little snitch alternative, glasswire alternative, pi-hole alternative, dban alternative, exiftool gui alternative, cpu-z alternative, free privacy tools, no telemetry',
    path: '/alternatives/', jsonLd: [breadcrumbLd, itemList, faqLd],
  };
}

export function appMeta(app0, locale) {
  const app = localizeApp(app0, locale);
  const url = abs('/apps/' + app.slug + '/', locale);
  const isSecurity = app.category === 'Security' || app.category === 'Recon';
  let ogImage = null, ogW = '1200', ogH = '630', ogType = 'image/svg+xml';
  try {
    const pp = `public/screens/${app.slug}.png`;
    if (fs.existsSync(pp)) {
      const b = fs.readFileSync(pp);
      ogW = String(b.readUInt32BE(16)); ogH = String(b.readUInt32BE(20));
      ogImage = `${SITE.domain}/screens/${app.slug}.png`; ogType = 'image/png';
    }
  } catch (e) { ogImage = null; }
  const shots = ogImage ? [ogImage] : [];
  const softwareLd = {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: app.name,
    applicationCategory: isSecurity ? 'SecurityApplication' : 'UtilitiesApplication',
    applicationSubCategory: app.category, operatingSystem: app.platforms.join(', '),
    softwareVersion: SITE.version, datePublished: SITE.published, dateModified: app.updated,
    description: app.definition || app.summary, abstract: app.tagline, featureList: app.features,
    keywords: app.keywords, inLanguage: localeHreflang[locale],
    softwareRequirements: app.platforms.includes('Windows') ? 'Windows 10/11 or Linux' : 'Linux (Ubuntu/Debian)',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
    downloadUrl: releasesUrl(app.slug), installUrl: url, releaseNotes: `${repoUrl(app.slug)}/releases`,
    sameAs: [repoUrl(app.slug)], url,
    ...(shots.length ? { screenshot: shots, image: shots } : {}),
    license: 'https://opensource.org/licenses/MIT', isAccessibleForFree: true,
    author: { '@type': 'Organization', '@id': SITE.domain + '/#org', name: SITE.name },
    publisher: { '@id': SITE.domain + '/#org' },
  };
  const breadcrumbLd = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: abs('/', locale) },
      { '@type': 'ListItem', position: 2, name: app.name, item: url },
    ],
  };
  const faqLd = app.faq && {
    '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: localeHreflang[locale],
    mainEntity: app.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };
  const howToLd = {
    '@context': 'https://schema.org', '@type': 'HowTo', name: `How to install and run ${app.name}`,
    description: `Install ${app.name} on ${app.platforms.join(' or ')} — free, open-source, no account required.`,
    totalTime: 'PT2M',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Download', url: releasesUrl(app.slug), text: `Download ${app.name} from its GitHub Releases page and verify the SHA-256 checksum.` },
      { '@type': 'HowToStep', position: 2, name: 'Install', text: app.linuxOnly ? `On Linux, clone the repository (git clone) and run the tool.` : `On Windows, run the setup wizard; on Linux, install the .deb package with apt.` },
      { '@type': 'HowToStep', position: 3, name: 'Run', text: `Launch ${app.name}. It runs fully offline — no account or internet connection is required.` },
    ],
  };
  return {
    title: app.seoTitle || app.name, description: app.seoDescription || app.summary, keywords: app.keywords,
    path: `/apps/${app.slug}/`, jsonLd: [softwareLd, breadcrumbLd, howToLd, ...(faqLd ? [faqLd] : [])],
    ogImage, ogType, ogW, ogH, ogAlt: `${app.name} — screenshot of the app running`,
  };
}
