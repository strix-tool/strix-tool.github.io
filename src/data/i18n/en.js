// Englische Übersetzungsquelle (die kanonischen Strings, die jede andere Locale spiegelt).
//   - `ui`        : alle Site-Chrome- / Marketing-Strings (re-exportiert als `t`).
//   - `categories`: Anzeigebeschriftungen für die App-Kategorie-Chips (die kanonischen Schlüssel bleiben englisch).
//   - `security`  : der Fließtext der /security-Seite (Verify).
// App-Inhalte (tagline/summary/features/definition/notFor/faq/seo*) liegen in
// data/apps.js und werden pro Locale in der `apps`-Map jeder Locale-Datei überschrieben.
import { t } from '../site.js';

export const ui = t;

export const categories = {
  Privacy: 'Privacy',
  System: 'System',
  Security: 'Security',
  Diagnostics: 'Diagnostics',
  Recon: 'Recon',
  OSINT: 'OSINT',
};

export const security = {
  h1: "Verify us — don't just trust us.",
  lead:
    "Strix Advanced Tools are free, open-source (MIT), and built to run fully offline. Our Windows builds are not yet code-signed with a paid certificate — we're a small, independent, zero-budget project, and we'd rather say that plainly than hide it. Because every tool is open source, you don't have to take our word for anything. Here's how to check it yourself.",
  boldNotSigned: 'not yet code-signed with a paid certificate',
  updatedLabel: 'Last updated',
  why: [
    { t: 'The source is public', d: 'Every tool is a public GitHub repository under the MIT license. Read every line, rebuild it yourself, and confirm it does exactly what it claims.' },
    { t: 'The builds are attested', d: "Each release carries a GitHub build-provenance attestation (SLSA Build L2) — cryptographic proof the file was built from this source, on GitHub's servers, untouched since." },
    { t: 'Nothing phones home', d: "The desktop tools make zero network calls. Pull your network cable and they still work; watch your outbound traffic and you'll see none." },
  ],
  verify: {
    h2: 'Verify your download',
    sub: "Verification is optional — if you downloaded from a GitHub release you're already fine. But if you want to be sure, every release ships a SHA256SUMS file, and here's how to check against it. Replace the example filename with the tool you downloaded.",
    anyOs: 'Any OS',
    winStt: 'Check the checksum',
    winIntro: 'In the folder where you saved the download, run PowerShell:',
    winExp: "Compare the printed hash to the matching line in SHA256SUMS. If they're identical, the file is byte-for-byte what we published:",
    nixStt: 'Check the checksum',
    nixIntro: 'Put the download and its SHA256SUMS in the same folder, then:',
    nixExp: 'A one-word answer per file — you want OK:',
    provStt: 'Verify build provenance',
    provIntro: 'Stronger than a checksum: prove the binary was built from our public source in our public CI. Needs the GitHub CLI 2.49+:',
    provExp: 'A green success line naming the exact source repository that produced the file:',
    note: 'Checksums are published in each GitHub Release and mirrored over HTTPS — example SHA256SUMS. The provenance attestation is stored on GitHub, not by us, so neither we nor a compromised download mirror can forge it.',
  },
  data: {
    h2: 'What data leaves your machine',
    sub: 'The short version: for the desktop tools, none. Here it is in full — and every row is something you can confirm with a packet capture.',
    thCategory: 'Category',
    thWhat: 'What it is',
    thWhere: 'Where it goes',
    rows: [
      ['The files you process', 'Metadata, disk contents, archives — read and written in place on your machine.', 'Never uploaded. Nothing is sent anywhere.'],
      ['Your system details', 'Hostname, username, serial numbers, IPs, hardware — shown inside the app only.', 'Displayed locally; never transmitted.'],
      ['Settings & reports', 'Preferences, logs, HTML/PDF reports.', 'Saved on disk (%LOCALAPPDATA% / ~/.config); never synced to a server.'],
      ['Usage & crash analytics', 'None. There is no analytics SDK, no telemetry, no phone-home.', 'Nothing is collected, ever.'],
      ['Network egress (desktop tools)', 'MetaVault, Pulse, Inspector, Sentinel, Sinkhole, Talon.', 'Zero outbound sockets. Disconnect the network — they still work.'],
      ['Network egress (recon tools)', 'Vantage & Archer — whose whole job is the network.', 'Only key-less public APIs you explicitly trigger, after a consent gate, bounded by timeouts.'],
    ],
  },
  av: {
    h2: 'Antivirus & SmartScreen warnings',
    intro1: 'Because our Windows apps are unsigned and packaged with PyInstaller, Windows SmartScreen may say',
    intro2: 'and a handful of the ~70 antivirus engines may flag the installer.',
    intro3: "This is expected for new, unsigned, open-source software — it's a generic heuristic about how the app is packaged, not a detection of actual malware.",
    unknownPublisher: 'unknown publisher',
    notCommon: 'not commonly downloaded,',
    list: [
      { b: 'Why it happens:', r: 'the PyInstaller bootloader is a common packaging format (malware uses it too), a brand-new file has no download reputation, and unsigned binaries get a “suspicious until proven” penalty.' },
      { b: 'The real proof', r: "is the checksum and the provenance attestation above, plus the source you can read — not any vendor's heuristic." },
      { b: 'What we do:', r: "we report false positives to vendors as they appear, and we're applying to the SignPath Foundation's free code-signing program for open-source projects, which we'll roll out as reputation builds." },
      { b: 'Please never disable your antivirus.', r: "If you're unsure, verify the checksum, or run the tool from source." },
    ],
    tiny: 'We link a live VirusTotal scan per build once a release is out, so you can see the current result for yourself. We will never post a “clean scan” screenshot or claim “zero detections” — a live link you can click beats a screenshot that goes stale on the next build.',
  },
  read: {
    h2: 'Read the source',
    sub: 'The strongest assurance of all. Grep any repo for socket, urllib, requests or http and see for yourself what does — and doesn\'t — touch the network.',
    view: 'View source ↗',
  },
  threat: {
    h2: 'Threat model',
    items: [
      ['What Strix protects against', 'Data leaking through file metadata, recoverable data on discarded drives, tracker/telemetry/ad domains, silent outbound connections, unknown autostarts and devices, and closed-source tools you cannot inspect.'],
      ['What Strix is NOT', 'It is not antivirus/EDR, not a sandbox, and not a defence against a compromised OS or malware already running as admin. The desktop tools surface information and act on your command; they do not fight active threats in real time.'],
      ['Trust boundary', 'Provenance proves a download came unmodified from this public source via GitHub CI. It does not prove the source is benign — that is what the open MIT code, which you can read and rebuild, is for.'],
    ],
  },
  report: {
    h2: 'Found a vulnerability?',
    p: "Report it privately — please don't open a public issue for a security bug. Each repository has a SECURITY.md with the threat model and a coordinated-disclosure path, and GitHub private vulnerability reporting is enabled. We won't retaliate, and we'll credit you if you'd like.",
    btnPolicy: 'Security policy',
    btnRepos: 'All repositories',
  },
};

export const contribute = {
  h1: 'Build a tool. Make it part of Strix.',
  lead:
    "Strix is a suite, not a walled garden. If you've built an open-source privacy or security tool that lives by the same rules — offline by default, zero telemetry, genuinely auditable — you can propose it. Once it passes the same security review and hardening pass every Strix tool goes through, it ships under the Strix umbrella: its own repository, a page on this site in 13 languages, and checksummed, attested releases.",
  badge: 'Open to community tools',
  ctaTop: 'Submit your tool',
  updatedLabel: 'Last updated',

  steps: {
    h2: 'How it works',
    sub: 'Four steps from your repository to a released Strix tool — and you keep authorship and the copyright the whole way through.',
    list: [
      { n: '01', t: 'Build your tool', d: 'Write it in any language, for Windows and/or Linux, under an MIT-compatible license. Meet the criteria below: offline, no telemetry, one job done well.' },
      { n: '02', t: 'Open a submission', d: 'File a submission issue on GitHub with a link to your repo, what it does, the platforms it targets, and how it touches the network — if at all. No account with us is needed; just GitHub.' },
      { n: '03', t: 'Security review & hardening', d: 'We run the same gate every Strix tool passed: static analysis, a dependency and supply-chain audit, an adversarial code review, and a hardening pass. You get the findings and we work them through together.' },
      { n: '04', t: 'It ships as Strix', d: 'On acceptance your tool gets its own repository under the Strix organization, a localized landing page on this site, and releases with SHA-256 checksums and a build-provenance attestation.' },
    ],
  },

  criteria: {
    h2: 'What a Strix tool must be',
    sub: 'These are non-negotiable — they are the promises the whole suite is built on. If your tool already lives by them, it will feel right at home.',
    list: [
      { t: 'Open source', d: 'Public source under the MIT license (or an MIT-compatible permissive license). Nothing hidden, nothing obfuscated.' },
      { t: 'Offline by default', d: "No network calls of its own for a desktop tool. If networking is the tool's whole purpose (recon/OSINT), it must be key-less, consent-gated and clearly scoped." },
      { t: 'Zero telemetry', d: "No analytics SDKs, no phone-home, no accounts. The user's data never leaves their machine." },
      { t: 'One job, done well', d: 'A focused utility with sensible defaults, a clear scope, and an explicit statement of what it deliberately does not do.' },
      { t: 'Documented & testable', d: 'A README, a SECURITY.md with a threat model, and regression tests for anything safety-critical.' },
      { t: 'Least privilege', d: 'No shell-outs, no dynamic code execution, argv-only subprocess calls, absolute-path tool resolution, and elevation only where genuinely required.' },
    ],
  },

  review: {
    h2: 'The security review every submission goes through',
    sub: 'The same gate the existing tools cleared before launch. Nothing ships until it passes.',
    list: [
      { t: 'Static analysis (SAST)', d: 'semgrep, bandit, PSScriptAnalyzer, Roslyn analyzers and language-appropriate linters across the whole codebase.' },
      { t: 'Dependency & supply-chain audit', d: 'Pinned versions, an SBOM, pip-audit / Dependabot, and a check that every third-party dependency is warranted.' },
      { t: 'Adversarial code review', d: 'A human pass hunting injection, path traversal, SSRF, privilege escalation, and any weakening of a safety control.' },
      { t: 'Hardening', d: 'We close the gaps together: least privilege, no shell, input validation, fail-closed defaults, and defense-in-depth on the dangerous paths.' },
      { t: 'Provenance on every release', d: 'CI builds each release, writes a SHA-256 SHA256SUMS, and attaches a SLSA build-provenance attestation, so every download is verifiable.' },
    ],
  },

  keep: {
    h2: 'What you keep — and what you get',
    sub: "Contributing to Strix doesn't mean signing your work away.",
    list: [
      { t: 'Your authorship & copyright', d: 'You stay the author. The MIT copyright is yours; Strix distributes and co-maintains it with you.' },
      { t: 'A real audience', d: 'A localized landing page in 13 languages, SEO/GEO wiring, and a place in the tool grid and downloads.' },
      { t: 'A trusted release pipeline', d: 'Checksums, attestation, an eventual code-signing path (SignPath Foundation), and a security-disclosure process — set up for you.' },
      { t: 'Co-maintenance', d: 'Issues, PRs and security reports flow through the same process as the rest of the suite. You are not on your own.' },
    ],
  },

  cta: {
    h2: 'Ready to submit?',
    p: "Open a submission issue with your repository link and a short description. We'll pick it up, run the review, and work with you from there. Not ready yet? Read the full contribution guide first.",
    btnSubmit: 'Submit your tool',
    btnGuide: 'Read the contribution guide',
    note: 'Submitting needs only a GitHub account. There is no fee, no contributor agreement that takes your rights, and no obligation — you can withdraw any time before release.',
  },

  faq: [
    ['Do I lose ownership of my tool?', 'No. You keep authorship and the MIT copyright. Strix co-maintains and distributes it with you, and you can withdraw before release.'],
    ['What languages or frameworks are allowed?', 'Any. The existing suite spans Python, C#, PowerShell and more — what matters is the license, the offline/no-telemetry rules, and passing the security review, not the stack.'],
    ['What if my tool needs the network?', "That's fine only if networking is its actual purpose (like the recon/OSINT tools). It must then be key-less, gated behind explicit consent, clearly scoped, and authorized-use-only — never silent or background traffic."],
    ['How long does the review take?', 'It depends on the size of the tool and how many findings surface. Small, already-hardened tools move quickly; anything touching destructive operations or elevation gets extra scrutiny.'],
    ["What happens if it doesn't pass?", 'You get the full findings and can address them and resubmit. A review that finds issues is the process working — the same happened to the tools already in the suite.'],
  ],
};

export const donate = {
  h1: 'Support Strix — privately.',
  lead:
    "Strix is free, MIT-licensed, and carries zero telemetry — and it always will. No ads, no accounts, nothing sold. If the tools save you time or keep you safer, you can chip in with Monero (XMR): private by design, exactly like everything here. Every bit goes to hosting, a code-signing certificate, and development time.",
  badge: 'Privacy-respecting donations',
  updatedLabel: 'Last updated',
  card: {
    label: 'Monero (XMR) address',
    scanHint: 'Scan the QR with your wallet, or copy the address below.',
    copy: 'Copy address',
    copied: 'Copied ✓',
    openWallet: 'Open in wallet',
    qrPending: 'A QR code appears here once the donation address is configured.',
    notConfigured: 'The donation address is not set yet — check back soon.',
  },
  why: {
    h2: 'Why Monero?',
    sub: "Because a privacy project shouldn't ask you to surrender your privacy to support it.",
    list: [
      { t: 'Private by default', d: 'Monero hides the sender, the receiver and the amount. There is no public ledger tying a donation back to you — fitting for a suite built on not tracking you.' },
      { t: 'No middleman, no accounts', d: 'No payment processor, no sign-up, and no third-party script on this page. The address is all you need.' },
      { t: 'Nothing tracked here', d: 'This page loads no analytics and makes no network calls. We cannot see who visited it, or who gave.' },
    ],
  },
  funds: {
    h2: 'Where it goes',
    sub: 'A small, independent, zero-budget project. Every contribution is spent in the open:',
    list: [
      { t: 'Hosting & infrastructure', d: 'Keeping the site, releases and checksums online and fast.' },
      { t: 'Code-signing certificate', d: 'An OV/EV certificate so installers stop tripping SmartScreen — the single most-requested improvement.' },
      { t: 'Development time', d: 'New tools, Linux ports, security hardening, and keeping everything free and telemetry-free.' },
    ],
  },
  otherWays: {
    h2: 'Other ways to help',
    sub: "Can't donate? These help just as much — and cost nothing.",
    list: [
      { t: 'Star the repos on GitHub', d: 'Visibility and reputation genuinely help new users find and trust the tools.' },
      { t: 'Contribute a tool', d: 'Build something that fits the suite and submit it for security review.' },
      { t: 'Report bugs & false positives', d: 'File issues, report antivirus false positives to vendors, and help others in discussions.' },
    ],
  },
  note: 'Donations are voluntary gifts, not purchases — there is no refund, no invoice, and no tax receipt. Please only give what you can comfortably spare. Thank you for keeping independent, privacy-first software alive.',
};

export const about = {
  h1: 'About Strix',
  lead:
    "We're a small, independent group of four friends — computer-science students based in Germany — who got tired of “privacy” tools you can't actually inspect. Strix is what came out of that: a suite of privacy & security utilities that run fully offline, ship zero telemetry, and are yours to read, build and trust. MIT-licensed, free forever, no company behind it and nothing to sell.",
  badge: 'Independent · open-source',
  updatedLabel: 'Last updated',
  values: {
    h2: 'What we believe',
    list: [
      { t: 'Verify, don’t just trust', d: 'Every tool is public, MIT-licensed source with a threat model. Don’t take our word for it — read it, build it, and check it yourself.' },
      { t: 'Privacy tools must not spy on you', d: 'Zero telemetry, no accounts, no analytics — not even on this website. Your data never leaves your machine.' },
      { t: 'Offline by default', d: 'The desktop tools make no network calls of their own. Pull the cable and they still work.' },
      { t: 'Free, forever', d: 'No paid tiers, no subscriptions, no ads. If we ever take donations or grants, it will never change these promises.' },
    ],
  },
  story: {
    h2: 'Why we build it',
    p1: "We wanted the tools we run ourselves to be honest: no black boxes, no “trust us”, no quiet data collection. Most of what we needed either didn't exist as open source, wasn't cross-platform, or asked us to give up our privacy to protect it. So we started building — one small, focused, auditable tool at a time.",
    p2: "Strix is a side project we care about, maintained in our spare time. It will always be open, and it will always be honest about what it is — including where it falls short (the installers aren't code-signed yet, and we say so plainly on the Verify page).",
  },
  cta: {
    h2: 'Get involved',
    p: 'Strix is open to everyone. Read the source, report a bug, suggest a tool, or submit your own for security review. If it helps you, a star on GitHub genuinely helps others find it.',
    btnGithub: 'View on GitHub',
    btnContribute: 'Contribute a tool',
  },
};

export const alternatives = {
  h1: 'Open-source alternatives',
  lead:
    "Already using a closed-source or paid privacy tool? There's a good chance Strix has an open-source, offline, zero-telemetry replacement — free forever, MIT-licensed, and yours to audit. Here's what maps to what.",
  badge: 'Free & open replacements',
  updatedLabel: 'Last updated',
  altToLabel: 'Open-source alternative to',
  viewTool: 'View tool →',
  ctaLead: "Can't find a match?",
  ctaText: 'Browse the full tool suite, or suggest a tool we should build.',
  ctaAll: 'All tools',
  ctaSuggest: 'Suggest a tool',
};

export default { ui, categories, security, contribute, donate, about, alternatives };
