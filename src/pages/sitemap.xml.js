import fs from 'node:fs';
import { apps, APP_UPDATED } from '../data/apps.js';
import { LOCALES, localizePath, localeHreflang } from '../data/i18n.js';

const SITE = 'https://strix-tool.github.io';
const LASTMOD = APP_UPDATED;   // stabiles Release-Datum, nicht das (wechselnde) Build-Datum
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function GET() {
  const shotOf = (slug) =>
    fs.existsSync(`public/screens/${slug}.png`) ? `/screens/${slug}.png` : '/og.png';
  const pages = [
    { loc: '/', priority: '1.0', changefreq: 'weekly', img: '/og.png', title: 'Strix Advanced Tools' },
    { loc: '/downloads/', priority: '0.9', changefreq: 'weekly', img: '/og.png', title: 'Downloads' },
    { loc: '/security/', priority: '0.7', changefreq: 'monthly', img: '/og.png', title: 'Security & Trust' },
    { loc: '/alternatives/', priority: '0.7', changefreq: 'monthly', img: '/og.png', title: 'Open-Source Alternatives' },
    { loc: '/contribute/', priority: '0.7', changefreq: 'monthly', img: '/og.png', title: 'Contribute a Tool' },
    { loc: '/about/', priority: '0.5', changefreq: 'monthly', img: '/og.png', title: 'About the Project' },
    { loc: '/donate/', priority: '0.5', changefreq: 'monthly', img: '/og.png', title: 'Support the Project' },
    ...apps.map((a) => ({
      loc: `/apps/${a.slug}/`, priority: '0.8', changefreq: 'monthly',
      img: shotOf(a.slug), title: a.name, caption: a.tagline,
    })),
  ];
  // Ein <url> pro Seite (englisches Canonical) mit xhtml:link-Alternates für
  // jede Locale, plus x-default — Googles empfohlenes mehrsprachiges Muster.
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ` +
    `xmlns:xhtml="http://www.w3.org/1999/xhtml" ` +
    `xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n` +
    pages.map((u) => {
      const alts =
        LOCALES.map((loc) =>
          `    <xhtml:link rel="alternate" hreflang="${localeHreflang[loc]}" href="${SITE}${localizePath(u.loc, loc)}"/>`
        ).join('\n') +
        `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${u.loc}"/>`;
      return (
        `  <url>\n` +
        `    <loc>${SITE}${u.loc}</loc>\n` +
        `    <lastmod>${LASTMOD}</lastmod>\n` +
        `    <changefreq>${u.changefreq}</changefreq>\n` +
        `    <priority>${u.priority}</priority>\n` +
        alts + `\n` +
        (u.img
          ? `    <image:image><image:loc>${SITE}${u.img}</image:loc>` +
            `<image:title>${esc(u.title)}</image:title>` +
            (u.caption ? `<image:caption>${esc(u.caption)}</image:caption>` : '') +
            `</image:image>\n`
          : '') +
        `  </url>`
      );
    }).join('\n') +
    `\n</urlset>\n`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
