import { defineConfig } from 'astro/config';

// `site` vor dem Deployment auf die endgültige Domain (oder die GitHub-Pages-URL) setzen —
// steuert kanonische URLs, hreflang, sitemap und Open-Graph-Tags.
export default defineConfig({
  site: 'https://strix-tool.github.io',
  // Beim Deployment auf eine Projektseite (https://user.github.io/strix-website) setzen:
  // base: '/strix-website',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
