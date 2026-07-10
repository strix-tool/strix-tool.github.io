// Zentrale, verbindliche Datenquelle für jede App (Englisch, reich an SEO-Inhalten).
export const ORG = 'strix-tool';
export const repoUrl = (slug) => `https://github.com/${ORG}/${slug}`;
export const releasesUrl = (slug) => `${repoUrl(slug)}/releases`;

export const apps = [
  {
    slug: 'strix-metavault',
    name: 'Strix MetaVault',
    seoTitle: 'Strix MetaVault — Metadata Remover & File Encrypter',
    seoDescription: 'Free open-source tool to strip EXIF/GPS and document metadata, then lock your files in an AES-256 encrypted archive. Offline, no telemetry. Windows & Linux.',
    iconId: 'vault',
    accent: '#8b7bff',
    accent2: '#5b8cff',
    tech: 'Python',
    platforms: ['Windows', 'Linux'],
    category: 'Privacy',
    keywords: 'metadata remover, exif remover, remove gps from photos, encrypt files, aes-256, 7-zip, anonymize documents, strip pdf metadata',
    tagline: 'Erase hidden metadata, then lock your files in AES-256 encryption.',
    summary:
      'Every photo, document and PDF you share carries hidden traces — GPS coordinates, your name, the device you used, edit history. Strix MetaVault removes all of it, then optionally seals the cleaned files inside an AES-256 encrypted 7-Zip archive with hidden file names and a one-time random password. Fully offline, no accounts, no telemetry.',
    features: [
      'Strips EXIF, GPS, IPTC and XMP from images; author/company/history from Office and PDF files',
      'Optional AES-256 archive with encrypted file names and a randomized output name',
      'Generates a strong one-time password that is never written to disk or logs',
      'Refuses weak custom passwords; protected against symlink attacks and zip bombs',
      'Your originals are never modified — everything runs on copies',
    ],
    faq: [
      ['Does it work without 7-Zip or ExifTool?', 'JPEG and PNG are cleaned with the built-in engine. For every other format and for encrypted archiving, install 7-Zip and ExifTool (or drop them next to the app).'],
      ['Can I recover a lost archive password?', 'No. The password is shown once and never stored. Save it in a password manager immediately — the encryption is genuinely unbreakable without it.'],
    ],
    screenshots: [
      { src: '/shots/metavault-1.png', alt: 'Strix MetaVault dark theme main window' },
      { src: '/shots/metavault-2.png', alt: 'One-time password dialog' },
    ],
  },
  {
    slug: 'strix-pulse-monitor',
    name: 'Strix Pulse Monitor',
    seoTitle: 'Strix Pulse Monitor — CPU/GPU/RAM & Network Widget',
    seoDescription: 'A sleek, always-on-top desktop widget showing live CPU, GPU, RAM, disk and network usage. Open-source, offline, no telemetry. Windows & Linux.',
    iconId: 'pulse',
    accent: '#2dd4bf',
    accent2: '#38bdf8',
    tech: 'Python · PySide6',
    platforms: ['Windows', 'Linux'],
    category: 'System',
    keywords: 'system monitor, desktop widget, cpu gpu ram monitor, network speed monitor, rainmeter alternative, always on top widget',
    tagline: 'A glanceable, always-on-top monitor for your whole machine.',
    summary:
      'A sleek, frameless desktop widget that floats above your work and shows live CPU, GPU, RAM and disk usage alongside real-time network download and upload — refreshed every second. Drag it anywhere, pin it in place, or tuck it into the tray. No network access of its own, no telemetry.',
    features: [
      'Live CPU, GPU, RAM and storage load plus network throughput, once per second',
      'GPU readings from NVIDIA, Windows performance counters, or AMD sysfs on Linux',
      'Frameless glass widget you can drag, pin, or hide to the system tray',
      'Remembers its position; settings are validated and written atomically',
    ],
    faq: [
      ['Why does the GPU row show N/A?', 'Intel GPUs on Linux need privileged tooling, so the widget shows N/A rather than asking for root. NVIDIA and AMD are supported out of the box.'],
      ['Can it start with my session?', 'Yes — on Windows add a shortcut to the Startup folder; on Linux run the installer with --autostart.'],
    ],
    screenshots: [{ mockup: true }],
  },
  {
    slug: 'strix-sentinel',
    name: 'Strix Sentinel',
    seoTitle: 'Strix Sentinel — Offline Security & Privacy Monitor',
    seoDescription: 'See what starts and runs, which app uses your mic/camera, audit logins, and spot unknown devices on your network. Open-source, offline. Windows GUI & Linux CLI.',
    iconId: 'sentinel',
    accent: '#4f7bff',
    accent2: '#8b7bff',
    tech: 'Python',
    platforms: ['Windows', 'Linux'],
    category: 'Security',
    keywords: 'security monitor, startup audit, process monitor, microphone camera detector, login audit, network intrusion detection, arp scan',
    tagline: 'Know what runs, watches and listens on your machine.',
    summary:
      'A local, offline watchdog that answers five questions: what starts with your machine, which new processes appear, which app is using your microphone or camera, who has logged in, and which unfamiliar devices are on your network. A dark, focused GUI on Windows; a scriptable CLI on Linux. Nothing ever leaves your computer.',
    features: [
      'Startup audit that flags anything new since your approved baseline',
      'Real-time watch for newly launched processes, with full executable paths',
      'Detects which application is currently using your microphone or camera',
      'Login audit and a local-network guard that flags unknown device MACs',
    ],
    faq: [
      ['Does the login audit need admin rights?', 'Yes — reading the security log needs Administrator on Windows and root on Linux. Every other check runs unprivileged.'],
      ['Is there a Linux GUI?', 'The Linux edition is a clean command-line tool by design — it runs headless and over SSH, which suits a security monitor. It shares the same tested detection core as the Windows GUI.'],
    ],
    screenshots: [{ mockup: true }],
  },
  {
    slug: 'strix-inspector',
    name: 'Strix Inspector',
    seoTitle: 'Strix Inspector — Hardware Info & Benchmark Tool',
    seoDescription: 'Read-only hardware inventory (CPU, per-DIMM RAM, GPU, disks, BIOS) plus benchmarks — as console text, JSON, or an HTML dashboard. Open-source. Windows & Linux.',
    iconId: 'inspector',
    accent: '#f5a623',
    accent2: '#ff7a59',
    tech: 'C# · .NET',
    platforms: ['Windows', 'Linux'],
    category: 'Diagnostics',
    keywords: 'hardware info, system information tool, cpu gpu ram disk report, benchmark tool, smbios reader, hwinfo alternative',
    tagline: 'A complete, read-only picture of your hardware — in seconds.',
    summary:
      'A precise, read-only inventory of your machine — operating system, CPU, memory down to each DIMM, GPUs, disks, motherboard, BIOS and battery — presented as console text, machine-readable JSON, or a polished self-contained HTML dashboard. It also runs quick CPU, memory and disk benchmarks. No network, no elevation required.',
    features: [
      'Full inventory: OS, CPU, per-DIMM memory, GPUs, disks, board, BIOS, battery',
      'Three outputs: console, JSON, and a dark/light HTML dashboard',
      'Built-in CPU, memory and disk micro-benchmarks',
      'Runs on Linux via .NET 8, reusing the same hardened SMBIOS parser as Windows',
    ],
    faq: [
      ['Do I need to install a runtime?', 'On Windows it uses the built-in .NET Framework — nothing to install. The Linux build ships as a self-contained binary.'],
      ['Why do some fields need admin?', 'Disk sizes, DIMM details and BIOS strings come from privileged interfaces. Without elevation the tool still runs and simply notes what it skipped.'],
    ],
    screenshots: [{ mockup: true }],
  },
  {
    slug: 'strix-disk-cleaner',
    name: 'Strix Disk Cleaner',
    seoTitle: 'Strix Disk Cleaner — Secure Disk Eraser (NIST/DoD)',
    seoDescription: 'Permanently wipe a drive to NIST SP 800-88 / DoD 5220.22-M with a multi-layer shield that can never erase your system disk. Open-source. Windows GUI & Linux CLI.',
    iconId: 'wipe',
    accent: '#ff5c72',
    accent2: '#ff8a3d',
    tech: 'PowerShell · Python',
    platforms: ['Windows', 'Linux'],
    category: 'Security',
    danger: true,
    keywords: 'secure erase, wipe disk, nist 800-88, dod 5220.22-m, data destruction, ssd secure erase, nvme sanitize, blkdiscard',
    tagline: 'Erase a drive for good — with a shield against erasing the wrong one.',
    summary:
      'Permanently and verifiably erase an entire drive to NIST SP 800-88 and DoD 5220.22-M standards — using hardware sanitize where possible, or multi-pass overwrite. A multi-layer safety shield makes it impossible to select your system disk, and every destructive action demands typed confirmation. Windows ships a full GUI with a printable destruction certificate; Linux ships a unit-tested command-line eraser.',
    features: [
      'A multi-layer shield: your system and any mounted disk can never be selected',
      'Hardware sanitize (blkdiscard, nvme, hdparm) or multi-pass overwrite',
      'Typed ERASE confirmation with a re-check immediately before writing',
      'Unit-tested safety logic; a printable destruction certificate on Windows',
    ],
    faq: [
      ['Can I accidentally wipe my Windows/Linux drive?', 'No. The system and boot disk are detected and hidden; on Linux any mounted disk is refused. You also have to type the device path and the word ERASE.'],
      ['Is overwrite enough for an SSD?', 'Not reliably — flash wear-levelling can leave data behind. The tool detects SSDs and steers you to a hardware sanitize (blkdiscard / nvme), which is thorough.'],
    ],
    screenshots: [{ mockup: true }],
  },
  {
    slug: 'strix-vantage',
    name: 'Strix Vantage',
    seoTitle: 'Strix Vantage — Recon Automation for CTFs & Pentest Labs',
    seoDescription: 'Chain ~25 Kali recon tools (nmap, nuclei, ffuf, httpx…) into one WAF-safe pipeline for authorized pentest practice on a local intentionally-vulnerable lab. Open-source.',
    iconId: 'radar',
    accent: '#3ddc84',
    accent2: '#22d3ee',
    tech: 'Python',
    platforms: ['Linux'],
    linuxOnly: true,
    category: 'Recon',
    danger: true,
    dangerText: 'Vantage sends active scan traffic (port scans, fuzzing, vulnerability probes). Use it ONLY against systems you own or are explicitly authorized to test — e.g. your own local intentionally-vulnerable lab. Unauthorized scanning is illegal in most places.',
    keywords: 'recon automation, pentest pipeline, ctf practice, vulnerable lab practice, kali linux, subdomain enumeration, nuclei, nmap, web recon, bug bounty, ffuf, httpx',
    tagline: 'One command runs a full, WAF-safe recon pipeline on your lab.',
    summary:
      'Vantage chains around 25 industry-standard Kali tools — subdomain enumeration, liveness, port and TLS scans, crawling, fuzzing, and vulnerability checks — into a single command with live terminal status and a tidy report. It is built for sharpening your web-security skills against a local intentionally-vulnerable lab (or any target you own or are authorized to test), with an IDS/WAF-safe, low-and-slow design and an optional terminal UI.',
    features: [
      'Chains ~25 tools (nmap, nuclei, httpx, ffuf, katana, sqlmap, …) into one recon pipeline',
      'IDS/WAF-safe by design: lower rate + jitter, not faster hammering (stealth/thorough profiles)',
      'Scopes active scanning to your primary target; a light fingerprint on everything else',
      'Live terminal status + a formatted report; optional Textual TUI with a history browser',
      'Hardened: no shell (argv-only), and auto-install is opt-in with a supply-chain warning',
    ],
    faq: [
      ['Is this legal to use?', 'Only against systems you own or are explicitly authorized to test — like an intentionally-vulnerable practice app or a cybersecurity lab you control. Active scanning of systems you do not own is illegal in most jurisdictions; you are responsible for your use.'],
      ['Does it need Kali or root?', 'It targets Kali Linux and its standard toolchain; sudo enables SYN scans and the (opt-in) auto-installer. It runs on other Linux distros when the tools are already installed.'],
    ],
    credits: {
      href: 'https://github.com/strix-tool/strix-vantage/blob/main/ACKNOWLEDGEMENTS.md',
      tools: ['nmap', 'nuclei', 'httpx', 'subfinder', 'ffuf', 'katana', 'sqlmap', 'wafw00f', 'amass', 'gobuster', 'nikto', 'dalfox'],
      note: 'Vantage orchestrates these open-source tools — it does not bundle or modify them. Huge thanks to every upstream project.',
    },
    screenshots: [{ mockup: true }],
  },
  {
    slug: 'strix-archer',
    name: 'Strix Archer',
    seoTitle: 'Strix Archer — OSINT Tool for CTFs & Authorized Lab Targets',
    seoDescription: 'Passive OSINT for authorized lab/CTF targets: domain recon (DNS/RDAP/crt.sh), username & email lookup, GitHub OSINT, breach checks and a safe HIBP password check. Open-source.',
    iconId: 'target',
    accent: '#fbbf24',
    accent2: '#f43f5e',
    tech: 'Python',
    platforms: ['Linux'],
    linuxOnly: true,
    category: 'OSINT',
    danger: true,
    dangerText: 'Strix Archer performs OSINT collection and shows a one-time consent gate. Use it ONLY against CTF challenges / fictional characters or targets you own or are authorized to test. Profiling real people without consent can be illegal.',
    keywords: 'osint tool, ctf osint, ctf recon, username lookup, sherlock alternative, email breach check, github osint, crt.sh, rdap whois, hibp password check, maigret, holehe',
    tagline: 'Passive OSINT for CTF challenges & authorized lab targets.',
    summary:
      'Strix Archer pairs a dependency-free, standard-library-only OSINT engine with wrappers for popular tools — using Sherlock, maigret, holehe, theHarvester and SpiderFoot when installed, and falling back to its own implementation when not. It does domain recon (DNS-over-HTTPS, RDAP/WHOIS, crt.sh subdomains, HTTP + security-header fingerprint), identity recon (rate-limited username scan, GitHub OSINT, Gravatar, breach lookup), and a safe HIBP k-anonymity password check. A one-time consent gate keeps it to authorized lab use; everything is passive and read-only, with a .txt and dark HTML report.',
    features: [
      'Built-in stdlib engine + auto-wraps Sherlock / maigret / holehe / theHarvester / SpiderFoot when present',
      'Domain: DNS-over-HTTPS, RDAP/WHOIS, crt.sh subdomains, HTTP + missing-security-header check',
      'Identity: rate-limited username scan, GitHub OSINT (commit-leaked emails), Gravatar, XposedOrNot breach lookup',
      'Safe password breach check via HIBP k-anonymity — the password never leaves your machine',
      'One-time consent gate, rate-limited by design; passive & read-only; .txt + dark HTML report',
    ],
    faq: [
      ['Is this legal to use?', 'Only against CTF challenges / fictional characters or targets you own or are explicitly authorized to test. Profiling real people without consent can be harassment and may be illegal — a one-time consent gate enforces acknowledgement.'],
      ['Do I need to install anything?', 'No — the built-in engine is pure Python standard library. Optional tools (Sherlock, holehe, …) are auto-wrapped if present, and `--setup` installs them into isolated pipx environments so your system Python is untouched.'],
    ],
    credits: {
      href: 'https://github.com/strix-tool/strix-archer/blob/main/ACKNOWLEDGEMENTS.md',
      tools: ['Sherlock', 'maigret', 'holehe', 'SpiderFoot', 'theHarvester', 'crt.sh', 'RDAP', 'GitHub API', 'Gravatar', 'XposedOrNot', 'HIBP'],
      note: 'Strix Archer wraps these open-source tools and public services — it does not bundle or modify them. Thank you to every upstream project and service.',
    },
    screenshots: [{ mockup: true }],
  },
  {
    slug: 'strix-sinkhole',
    name: 'Strix Sinkhole',
    seoTitle: 'Strix Sinkhole — Offline Hosts-File Ad & Tracker Blocker',
    seoDescription: 'Block trackers, telemetry and ads system-wide by null-routing them in your hosts file — fully offline, no server, no browser extension. Timestamped backups, one-click revert, never breaks critical domains. Open-source, Windows & Linux.',
    iconId: 'sinkhole',
    accent: '#38bdf8',
    accent2: '#6366f1',
    tech: 'Python',
    platforms: ['Windows', 'Linux'],
    category: 'Privacy',
    keywords: 'hosts file ad blocker, dns sinkhole without pi-hole, block windows telemetry hosts, offline tracker blocker, no browser extension, stevenblack hosts manager gui, adblock hosts file, telemetry blocker, tracker blocker, privacy tool',
    tagline: 'Block trackers, telemetry and ads in your hosts file — offline, reversible, one click.',
    summary:
      'Strix Sinkhole safely manages your system hosts file to null-route known tracker, telemetry and ad domains to 0.0.0.0, so a lookup dies on your own machine before any request leaves it — no server like Pi-hole, no per-browser extension, no background daemon, and no network calls of its own. Everything it writes lives inside a namespaced block, so your own hosts entries and system defaults are copied byte-for-byte and never touched. A built-in guard refuses to blackhole critical infrastructure (OS update, certificate revocation/OCSP, time sync, localhost) no matter what any blocklist says, so it can never silently break your machine. Every change is preceded by a timestamped backup and is reversible in one click, with a dry-run diff of exactly what will change and an allowlist for false positives.',
    features: [
      'Null-routes tracker / telemetry / ad domains system-wide via the hosts file — offline, no server, no extension',
      'Namespaced managed block: your own & system hosts entries are preserved byte-for-byte (verified before every write)',
      'Critical-domain guard: OS update, OCSP/CRL, time sync and localhost can never be blackholed by any list',
      'Timestamped backup before every write + one-click restore; dry-run diff preview; allowlist for false positives',
      'Curated seed list bundled; import your own or opt-in to a bounded HTTPS update; dark GUI (Windows) + `strixsink` CLI (Linux)',
    ],
    faq: [
      ['How is this different from Pi-hole or a browser extension?', 'No separate server or Raspberry Pi (Pi-hole), and it is not a per-browser extension that can itself read your browsing — Strix Sinkhole edits a plain-text hosts file every technical user can audit and revert. Nothing runs in the background and nothing forwards your DNS queries anywhere.'],
      ['Can a bad blocklist break my computer?', 'No. A built-in guard refuses to blackhole critical infrastructure (OS update, certificate revocation, time sync, localhost) regardless of what a list says, every change is backed up first, and one click restores the exact original. Note it blocks at the hosts level and does not encrypt DNS upstream.'],
    ],
    credits: {
      href: 'https://github.com/strix-tool/strix-sinkhole/blob/main/ACKNOWLEDGEMENTS.md',
      tools: ['StevenBlack/hosts', 'AdAway', "Peter Lowe's list", 'Dan Pollock', 'Disconnect.me', 'EasyPrivacy'],
      note: 'Strix Sinkhole ships only its own small curated seed and does not bundle these lists — it lets you import them, each under its own license. Thank you to the public blocklist ecosystem.',
    },
    screenshots: [{ mockup: true }],
  },
  {
    slug: 'strix-talon',
    name: 'Strix Talon',
    seoTitle: 'Strix Talon — Per-App Outbound Firewall (Windows & Linux)',
    seoDescription: "See every app's outbound traffic and block what you don't trust — an open-source per-app egress firewall + connection monitor for Windows & Linux. Enforced through your OS firewall (no kernel driver), with a global kill-switch. No telemetry, MIT.",
    iconId: 'talon',
    accent: '#2dd4bf',
    accent2: '#0891b2',
    tech: 'Python',
    platforms: ['Windows', 'Linux'],
    category: 'Security',
    keywords: 'outbound firewall, per-app firewall windows, egress monitor, kill switch, open source little snitch alternative, glasswire alternative open source, opensnitch for windows, connection monitor, block app internet, network monitor, no telemetry',
    tagline: "See every app's outbound traffic — and choke off the ones you don't trust.",
    summary:
      "Strix Talon is a live, per-process egress map: which application is talking to which remote address and port, refreshed once a second, with brand-new destinations flagged the moment they appear. On top of the read-only visibility sits an optional rules layer — “this app may never touch the internet”, “block this address”, and a global kill-switch that cuts all outbound traffic except loopback (optionally keeping your LAN). Crucially, Talon ships no kernel driver: every rule is translated into the OS's own firewall — Windows Defender Firewall via netsh, Linux via a private nftables table — and named so it can be reverted in one click without ever touching your existing rules. It also surfaces local listening sockets, so you see inbound exposure and outbound chatter in one view.",
    features: [
      'Live per-app outbound map: app → remote IP/port/state, refreshed every ~2s, new destinations highlighted',
      'Block an app (Windows) or an address (all platforms), plus a global kill-switch (block all egress except loopback)',
      'Enforced through your OS firewall (Windows Defender Firewall / nftables) — no kernel driver to trust or sign',
      "Every rule is namespaced and one-click revertible — Talon never touches your existing firewall rules; loopback is never blocked",
      'Sees inbound exposure too (listening 0.0.0.0 vs 127.0.0.1); modern PySide6 GUI on Windows + a `talon` CLI on Linux',
    ],
    faq: [
      ['How is this different from Little Snitch or GlassWire?', 'Talon is open-source, zero-telemetry, and runs on Windows AND Linux (Little Snitch is macOS-only and paid; GlassWire is closed-source). Crucially it delegates enforcement to your built-in OS firewall instead of shipping a kernel driver, and every rule is a plain, auditable firewall entry you can inspect and revert.'],
      ['Can it lock me out of my own machine?', 'No. Loopback is always exempt, the kill-switch keeps localhost (and optionally your LAN) reachable, every rule is namespaced as StrixTalon-* / lives in a private nftables table, and one click (or `sudo talon revert`) removes everything Talon added without touching your other firewall rules. Note: live "allow/deny this new connection" pop-ups are out of scope for v1; per-app blocking is Windows-only (Linux blocks by address).'],
    ],
    credits: {
      href: 'https://github.com/strix-tool/strix-talon/blob/main/ACKNOWLEDGEMENTS.md',
      tools: ['psutil', 'PySide6 / Qt', 'Windows Defender Firewall', 'nftables', 'OpenSnitch (inspiration)', 'Portmaster (inspiration)'],
      note: 'Strix Talon maps sockets with psutil, builds its UI with PySide6, and enforces via your OS firewall — it shares no code with Little Snitch / GlassWire / OpenSnitch; they are credited only as inspiration.',
    },
    screenshots: [{ mockup: true }],
  },
];

// --------------------------------------------------------------------------- //
//  GEO- / AI-Suche-Anreicherung — eigenständige, zitierbare, überprüfbare Fakten.
//  `definition`   : ein Satz, den ein LLM wörtlich für „Was ist X“ zitieren kann.
//  `alternativeTo`: Formulierung mit hoher Suchintention nach dem Muster „open-source alternative to …“.
//  `notFor`       : explizite Umfangsgrenzen („was es bewusst NICHT tut“).
//  `updated`      : stabiles Release-Datum, verwendet für dateModified / sitemap lastmod.
// --------------------------------------------------------------------------- //
export const APP_UPDATED = '2026-07-08';

const geoFacts = {
  'strix-metavault': {
    definition:
      'Strix MetaVault is a free, open-source metadata remover and file encrypter for Windows and Linux that strips hidden EXIF/GPS and document metadata, then optionally locks your files inside an AES-256 encrypted archive — fully offline, with no accounts and no telemetry.',
    alternativeTo: ['ExifTool GUIs', 'MAT2', 'online EXIF/metadata removers'],
    notFor: [
      'It never uploads your files — all cleaning happens locally, unlike online metadata removers.',
      'It does not roll its own crypto: encryption is delegated to vetted 7-Zip AES-256.',
      'It is not a cloud service and needs no account.',
    ],
  },
  'strix-pulse-monitor': {
    definition:
      'Strix Pulse Monitor is a free, open-source desktop system-monitor widget for Windows and Linux that shows live CPU, GPU, RAM, disk and network usage in an always-on-top glass panel — offline, with no telemetry.',
    alternativeTo: ['Rainmeter (system skins)', 'HWMonitor gadget', 'closed-source desktop widgets'],
    notFor: [
      'It phones home to nothing and collects no usage data.',
      'It is a live glanceable monitor, not a benchmark suite (see Strix Inspector for benchmarks).',
      'It needs no administrator rights to run.',
    ],
  },
  'strix-sentinel': {
    definition:
      'Strix Sentinel is a free, open-source, offline security monitor for Windows and Linux that audits what starts with your machine, watches new processes, detects microphone/camera use, audits logins and flags unknown devices on your network — with no network egress of its own.',
    alternativeTo: ['Sysinternals Autoruns + Process Monitor (combined)', 'closed-source endpoint monitors'],
    notFor: [
      'It is not an antivirus or EDR — it surfaces changes for you to judge; it never quarantines or blocks.',
      'It never sends any data off your machine.',
      'The Linux edition is a scriptable CLI by design (no GUI).',
    ],
  },
  'strix-inspector': {
    definition:
      'Strix Inspector is a free, open-source, read-only hardware information and benchmark tool for Windows and Linux that inventories your CPU, per-DIMM RAM, GPU, disks, motherboard and BIOS as console text, JSON or a self-contained HTML dashboard — with no network access.',
    alternativeTo: ['HWiNFO', 'CPU-Z', 'Speccy'],
    notFor: [
      'It is strictly read-only — it never changes settings, overclocks, or flashes firmware.',
      'It needs no runtime install on Windows and no elevation to run.',
      'It sends no data anywhere.',
    ],
  },
  'strix-disk-cleaner': {
    definition:
      'Strix Disk Cleaner is a free, open-source secure disk eraser for Windows and Linux that permanently wipes a drive to NIST SP 800-88 and DoD 5220.22-M standards, with a multi-layer safety shield that makes it impossible to erase your system disk.',
    alternativeTo: ['DBAN', 'Eraser', 'dd / shred'],
    notFor: [
      'It cannot select or erase your system/boot disk or any mounted volume — by design.',
      'It erases whole drives, not individual files.',
      'It makes no network calls and needs no account.',
    ],
  },
  'strix-vantage': {
    definition:
      'Strix Vantage is a free, open-source recon-automation pipeline for Linux that chains ~25 Kali tools (nmap, nuclei, httpx, ffuf and more) into one WAF-safe command for authorized penetration-testing practice against your own intentionally-vulnerable lab.',
    alternativeTo: ['reconftw', 'manual Kali tool-chaining', 'ad-hoc recon scripts'],
    notFor: [
      'It is for authorized targets only — a one-time consent gate enforces this before any active scan.',
      'It orchestrates upstream tools; it does not bundle or modify them.',
      'It is Linux/Kali only (no Windows or macOS build).',
    ],
  },
  'strix-archer': {
    definition:
      'Strix Archer is a free, open-source OSINT tool for Linux — built for CTF challenges and authorized lab targets — that performs passive domain and identity recon (DNS/RDAP/crt.sh, username and email lookup, GitHub OSINT, breach checks) plus a safe HIBP k-anonymity password check.',
    alternativeTo: ['Sherlock', 'maigret', 'SpiderFoot', 'theHarvester'],
    notFor: [
      'It is passive and read-only — it never exploits or actively attacks a target.',
      'It is for authorized use only — a one-time consent gate enforces acknowledgement.',
      'The password breach check never sends your password (HIBP k-anonymity).',
    ],
  },
  'strix-sinkhole': {
    definition:
      'Strix Sinkhole is a free, open-source, offline hosts-file ad and tracker blocker for Windows and Linux that null-routes tracker, telemetry and ad domains system-wide — with no server like Pi-hole, no browser extension, and no DNS forwarding.',
    alternativeTo: ['Pi-hole', 'browser ad-blocker extensions', 'editing StevenBlack/hosts by hand'],
    notFor: [
      'It is not a Pi-hole-style DNS server and forwards none of your queries anywhere.',
      'It is not a browser extension — it edits a plain, auditable hosts file you can revert.',
      'It blocks at the hosts level; it does not encrypt your upstream DNS.',
    ],
  },
  'strix-talon': {
    definition:
      "Strix Talon is a free, open-source per-app outbound firewall and egress monitor for Windows and Linux that shows which application talks to which remote address in real time and lets you block any app or address — or all egress — enforced through your OS's own firewall, with no kernel driver.",
    alternativeTo: ['Little Snitch (macOS, paid)', 'GlassWire (closed-source)', 'OpenSnitch (Linux)'],
    notFor: [
      'It ships no kernel driver — it drives your built-in OS firewall (Windows Defender Firewall / nftables).',
      'It does not show live allow/deny connection pop-ups in v1.',
      'Per-app blocking is Windows-only; on Linux it blocks by destination address.',
    ],
  },
};

for (const a of apps) {
  Object.assign(a, geoFacts[a.slug] || {});
  if (!a.updated) a.updated = APP_UPDATED;
}

export const getApp = (slug) => apps.find((a) => a.slug === slug);
