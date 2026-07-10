// Websiteweite Metadaten und UI-Texte (Englisch).
export const SITE = {
  name: 'Strix Advanced Tools',
  short: 'Strix',
  org: 'strix-tool',
  githubUrl: 'https://github.com/strix-tool',
  domain: 'https://strix-tool.github.io',
  author: 'Strix Advanced Tools',
  version: '1.0.0',
  published: '2026-01-01',
  twitter: '',   // optionaler @handle für twitter:site / creator
};

export const homePath = () => '/';
export const appPath = (slug) => `/apps/${slug}/`;
export const downloadsPath = () => '/downloads/';
export const securityPath = () => '/security/';
export const contributePath = () => '/contribute/';
export const donatePath = () => '/donate/';
export const aboutPath = () => '/about/';
export const alternativesPath = () => '/alternatives/';

// Monero (XMR) donation config. Privacy-first: no processor, no third-party script.
// Replace `xmr` with the project's real primary Monero address before publishing,
// then regenerate the QR asset at public/xmr-qr.svg (see src/components/Donate.astro).
export const DONATE = {
  xmr: 'REPLACE_WITH_YOUR_MONERO_ADDRESS',
  qr: '/xmr-qr.svg',
};
export const isDonateConfigured = () =>
  !!DONATE.xmr && !DONATE.xmr.startsWith('REPLACE_') && DONATE.xmr.length > 40;

export const t = {
  metaDescription:
    'Open-source, offline privacy & security tools for Windows and Linux. No telemetry, no accounts, MIT-licensed. Metadata removal, secure erase, ad & tracker blocking, a per-app outbound firewall, system monitoring and more.',
  homeSeoTitle: 'Strix Advanced Tools — Open-Source Privacy & Security Tools',
  homeSeoDescription:
    'Nine open-source, offline privacy & security tools for Windows & Linux: metadata remover & AES-256 archiver, secure disk eraser, hosts-file ad & tracker blocker, per-app outbound firewall, system monitor, hardware info, security watchdog, plus recon & OSINT tools. No telemetry. MIT-licensed. Free forever.',
  downloadsSeoTitle: 'Download Strix Advanced Tools — Windows & Linux',
  downloadsSeoDescription:
    'Download the Strix Advanced Tools suite for Windows and Linux. Direct installers and .deb packages from GitHub Releases, each with a SHA-256 checksum. Free & open-source.',
  keywordsGlobal: 'open source security tools, privacy tools, windows, linux, metadata remover, exif remover, secure erase disk, nist 800-88, hosts file ad blocker, tracker blocker, telemetry blocker, dns sinkhole, per-app firewall, outbound firewall, egress monitor, kill switch, little snitch alternative, system monitor widget, hardware info, security monitor, osint, recon, offline, no telemetry, MIT license',
  tagline: 'Open-source privacy & security tools for Windows and Linux.',
  heroBadge: 'Open source · MIT · Windows & Linux',
  heroTitle: "Don't trust security tools. Read them.",
  heroSubtitle:
    'Strix Advanced Tools is an open-source suite of privacy & security utilities for Windows and Linux. Every one runs fully offline, ships zero telemetry, and is yours to audit, build, and trust — free forever, MIT-licensed.',
  browse: 'Explore the tools',
  getStarted: 'Download',
  viewOnGithub: 'Star on GitHub',
  nav: { apps: 'Tools', downloads: 'Downloads', github: 'GitHub', security: 'Security', contribute: 'Contribute', donate: 'Donate', about: 'About', alternatives: 'Alternatives' },
  allApps: 'The tools',
  allAppsLead: 'Nine focused utilities. Each does one thing well, offline.',
  features: 'What it does',
  screenshots: 'A look inside',
  faqTitle: 'Frequently asked',
  download: 'Download',
  downloadCta: 'Get',
  otherDownloads: 'All platforms & checksums',
  source: 'Source code',
  docs: 'Documentation',
  readme: 'Read the docs',
  install: 'Installation',
  installWindows: 'Windows',
  installLinux: 'Linux (Ubuntu / Debian)',
  security: 'Security',
  securityNote:
    'Offline by default, no shell, no dynamic code, least privilege — and every line is MIT-licensed and open to audit.',
  contributeNote:
    'Build your own open-source tool and get it into Strix after a security review and hardening pass.',
  donateNote:
    'Support the project privately with Monero — no processor, no accounts, no tracking.',
  aboutNote:
    'Who builds Strix and why — an independent, open-source team with nothing to sell.',
  alternativesNote:
    'Open-source, offline replacements for the closed-source privacy tools you already know.',
  category: 'Category',
  backHome: 'All tools',
  verified: 'Checksums (SHA-256) are published with every release so you can verify your download.',
  unsigned:
    'Builds are not code-signed yet, so Windows SmartScreen may warn on first run — choose “More info → Run anyway”, or verify the checksum first. Never disable your antivirus.',
  whyTitle: 'Built on four promises',
  whyLead: 'Not a slogan — each promise is something you can verify in the source before you trust it.',
  why: [
    { k: 'offline', title: 'Offline by design', text: 'No network calls, no telemetry, no accounts. Your data never leaves the machine it lives on.', proof: 'grep the source: zero outbound sockets in the desktop tools' },
    { k: 'hardened', title: 'Hardened & tested', text: 'No shell-outs, no dynamic code, least privilege — and the safety-critical paths are covered by real regression tests.', proof: 'e.g. the disk eraser refuses the system disk in 18 unit tests' },
    { k: 'cross', title: 'Windows and Linux', text: 'Proper setup wizards on Windows and native packages on Linux for the desktop tools; the Kali recon/OSINT tools ship as Linux scripts.', proof: 'checksummed releases with GitHub build-provenance attestation' },
    { k: 'open', title: 'Genuinely open', text: 'MIT-licensed, no strings attached. Read it, build it yourself, audit it, or send a pull request.', proof: 'every repo is public on GitHub — nothing hidden' },
  ],
  downloadsTitle: 'Downloads',
  downloadsLead:
    'Grab the latest release for your platform. Every download is a direct file from GitHub Releases, shipped with a SHA-256 checksum.',
  homeFaq: [
    ['Are Strix Advanced Tools really free and open-source?', 'Yes. Every tool is MIT-licensed and free forever — you can read the source, build it yourself, and contribute. No paid tiers, accounts, subscriptions, or ads, now or ever.'],
    ['Who makes Strix, and why should I trust it?', 'Strix Advanced Tools is an independent open-source project — not a company selling your data. You do not have to take trust on faith: every tool is a public GitHub repository under the MIT license, so you (or anyone) can read every line, build it yourself from source, and confirm it does exactly what it claims. Trust is meant to be verified, not requested. Each repo also ships a SECURITY.md with the threat model and a private disclosure path.'],
    ['Which Strix tool is the open-source alternative to the app I already use?', 'Talon is a per-app outbound firewall — an open-source alternative to Little Snitch and GlassWire. Sinkhole is a hosts-file ad & tracker blocker — a local, single-machine alternative to Pi-hole. MetaVault removes metadata and builds AES-256 archives — an alternative to ExifTool GUIs, MAT2 and online EXIF removers. Disk Cleaner securely erases drives — an alternative to DBAN and CCleaner’s wipe. Pulse is a system-monitor widget (alternative to Rainmeter/HWiNFO gadgets), Inspector reports hardware (alternative to CPU-Z/Speccy), and Sentinel is a security watchdog. Every one runs offline with zero telemetry.'],
    ['Do these tools send my data anywhere?', 'No. Every desktop tool runs entirely on your machine, makes no network calls of its own, and ships zero telemetry — your data never leaves your device. The only tools that touch the network are the ones whose whole job is the network (the recon/OSINT tools), and even those use only key-less public APIs, gated by consent and bounded by timeouts.'],
    ['Do I need to be technical to use them?', 'Not for the desktop apps — MetaVault, Pulse, Inspector, Sentinel, Sinkhole and Talon all have a clean graphical UI with sensible defaults and confirmations before anything destructive. The recon tools (Vantage, Archer) are command-line, for people comfortable in a terminal.'],
    ['Which tool do I need?', 'Use the search and filters above the tool grid to narrow by platform (Windows / Linux) and category (Privacy, Security, System, OSINT…), or press ⌘K / Ctrl-K anywhere to jump straight to a tool. Each tool page explains exactly what it does — and what it deliberately does not do.'],
    ['How do I verify a download is genuine?', 'Every GitHub release publishes a SHA-256 checksum (SHA256SUMS) next to the files. Download it, compare the hash of your file, and you know the binary is exactly what was published — no tampering. That matters more than any code signature.'],
    ['Which platforms are supported?', 'Windows and Linux (Ubuntu / Debian). The desktop tools ship a Windows installer and a Linux package; the Vantage and Archer recon/OSINT tools are Linux/Kali only.'],
    ['Is there a macOS or mobile version?', 'Not officially yet — the supported targets are Windows and Linux (Ubuntu / Debian), and there are no iOS or Android versions. Because the Python-based tools (MetaVault, Pulse, Sentinel, Sinkhole, Talon) are open-source and cross-platform, they may well run on macOS from source, but that is unsupported and untested. A native macOS build is on the roadmap, not a shipped product.'],
    ['Why does Windows show an "unknown publisher" warning?', 'The installers are not code-signed yet, so SmartScreen shows a prompt on first run. Choose "More info → Run anyway", or verify the SHA-256 checksum published with each release. Never disable your antivirus to run them — you should never have to.'],
    ['Are the recon / OSINT tools legal to use?', 'Only against systems you own or are explicitly authorized to test — an intentionally-vulnerable practice lab, a CTF challenge, or an engagement with written permission. Both Vantage and Archer show a one-time consent gate and are strictly passive / authorized-use-only. Scanning or profiling without authorization can be illegal.'],
    ['Can I report a bug or contribute?', 'Absolutely — every tool is a separate public repo on GitHub with a SECURITY.md, issue templates and a contributing guide. Security issues have a private disclosure path; features and fixes are welcome as pull requests.'],
  ],
  faqSearchPlaceholder: 'Search the questions…',
  toolsFilterAll: 'All',
  toolsSearchPlaceholder: 'Search tools by name, purpose or keyword…',
  toolsNoMatch: 'No tools match — try clearing the filters.',
  footerTagline: 'Open-source privacy & security tools.',
  footerNote: 'Made for people who care about privacy.',
  footerCols: { product: 'Tools', resources: 'Resources', about: 'Project' },
  langLabel: 'Language',
  stats: { tools: 'tools', platforms: 'platforms', telemetry: 'telemetry', license: 'license' },
  faqNoMatch: 'No question matches — try different words.',
  // Abschnittsüberschriften der Downloads-Seite
  dl: { allTools: 'Every tool — Windows & Linux', verify: 'Verify your download' },
  // Feste Beschriftungen der App-Seite ({name} wird durch den Tool-Namen ersetzt)
  app: {
    price: 'Price',
    priceVal: 'Free — open-source (MIT)',
    platforms: 'Platforms',
    category: 'Category',
    builtWith: 'Built with',
    altTo: 'Open-source alternative to',
    telemetry: 'Telemetry',
    telemetryVal: 'None — fully offline',
    updated: 'Updated',
    notDo: 'What {name} deliberately does not do',
    poweredBy: 'Powered by open source',
    fullAck: 'Full acknowledgements & links →',
    related: 'Related Strix tools',
    winInstall: 'Download the setup wizard and run it — Start-Menu shortcuts and an uninstaller are created for you.',
    dangerFallback: 'This tool permanently destroys data and cannot be undone. Read the security guide before use.',
    copy: 'Copy',
    copied: 'Copied ✓',
    glance: 'at a glance',
  },
};
