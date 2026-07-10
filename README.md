# Strix Advanced Tools — website

The open-source marketing/docs site for the [Strix Advanced Tools](https://github.com/strix-tool)
suite. Built with **Astro** (static, fast, SEO-friendly), English, with a dark/light theme.

## Features

- **SEO** — per-page `<title>`/description, canonical URLs, Open Graph + Twitter cards,
  JSON-LD (`Organization`, `WebSite`, `ItemList`, per-app `SoftwareApplication` +
  `BreadcrumbList` + `FAQPage`), a generated `sitemap.xml`, and `robots.txt`.
- **Per-app pages** — features, screenshots (real or SVG mockups), install instructions
  (Windows wizard + Linux `.deb`), direct download buttons, and links to source + SECURITY.md.
- **Direct downloads** — buttons hit GitHub Releases' `releases/latest/download/<file>`
  URLs, so a click streams the file straight to the user (no GitHub page in between).
- **Theme** — dark/light with a no-flash inline script; respects `prefers-color-scheme`.
- **Privacy-friendly** — no external fonts or trackers; everything is self-hosted.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # -> dist/
npm run preview
```

## Deploy

- **GitHub Pages** — `.github/workflows/deploy.yml` builds and deploys on push to `main`
  (enable Pages → "GitHub Actions"). `public/.nojekyll` is included so the `_astro/`
  asset folder is served.
- Any static host (Cloudflare Pages, Netlify) works too — serve `dist/`.

## Configure before launch

- Set your real domain in `astro.config.mjs` (`site`) and `src/data/site.js` (`SITE.domain`)
  — these drive canonical URLs, the sitemap and Open Graph tags.
- For social previews on platforms that don't render SVG, replace `public/og.svg` with a
  1200×630 `public/og.png` and update the `og:image` path in `src/layouts/Base.astro`.

## Add or edit an app

Edit **`src/data/apps.js`** — add an object with `slug`, `name`, `tagline`, `summary`,
`features`, `faq`, `platforms`, `tech`, `category`, `accent`/`accent2`, `iconId`. The home
grid, per-app page, downloads page, and the sitemap update automatically. Drop real
screenshots into `public/shots/` and reference them in the app's `screenshots` array to
replace the SVG mockups.
