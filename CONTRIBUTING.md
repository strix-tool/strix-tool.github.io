# Contributing to the Strix Advanced Tools website

Thanks for helping! This repo is the project's website — a static
[Astro](https://astro.build) site: fully offline, no analytics, no tracking.

## Ways to help

- **Fix content or a typo** — edit the relevant file under `src/` and open a pull request.
- **Improve a translation** — the 13 language files live in `src/data/i18n/`. Keep the
  keys identical to `en.js` and translate only the values; leave brand names, code
  tokens and URLs verbatim.
- **Report a bug** — open an issue (broken link, layout glitch, wrong information).
- **Submit a tool** for the suite — see [CONTRIBUTING-TOOLS.md](CONTRIBUTING-TOOLS.md).

## Local development

    npm install
    npm run dev      # http://localhost:4321
    npm run build    # production build into dist/

Please keep the site **dependency-light and analytics-free** — those are core promises
of the project. By contributing you agree your contribution is licensed under the MIT
license.
