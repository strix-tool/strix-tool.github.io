// German (de-DE) translation. Mirrors the canonical English strings in en.js /
// site.js / apps.js. Brand, product, third-party names, code tokens, commands,
// filenames, flags and technical acronyms are kept verbatim by design.

export const ui = {
  metaDescription:
    'Quelloffene, offline nutzbare Datenschutz- und Sicherheitswerkzeuge für Windows und Linux. Keine Telemetrie, keine Konten, MIT-lizenziert. Metadaten entfernen, sicheres Löschen, Werbe- und Tracker-Blockierung, eine App-basierte Ausgangs-Firewall, Systemüberwachung und mehr.',
  homeSeoTitle: 'Strix Advanced Tools — Quelloffene Datenschutz- und Sicherheitswerkzeuge',
  homeSeoDescription:
    'Neun quelloffene, offline nutzbare Datenschutz- und Sicherheitswerkzeuge für Windows und Linux: Metadaten-Entferner und AES-256-Archivierer, sicherer Datenträger-Löscher, Werbe- und Tracker-Blocker per hosts-Datei, App-basierte Ausgangs-Firewall, Systemmonitor, Hardware-Informationen, Sicherheits-Wächter sowie Recon- und OSINT-Werkzeuge. Keine Telemetrie. MIT-lizenziert. Für immer kostenlos.',
  downloadsSeoTitle: 'Strix Advanced Tools herunterladen — Windows und Linux',
  downloadsSeoDescription:
    'Laden Sie die Strix-Advanced-Tools-Suite für Windows und Linux herunter. Direkte Installer und .deb-Pakete aus den GitHub Releases, jeweils mit einer SHA-256-Prüfsumme. Kostenlos und quelloffen.',
  keywordsGlobal: 'quelloffene Sicherheitswerkzeuge, Datenschutz-Tools, Windows, Linux, Metadaten-Entferner, EXIF-Entferner, Festplatte sicher löschen, NIST 800-88, hosts-Datei Werbeblocker, Tracker-Blocker, Telemetrie-Blocker, DNS-Sinkhole, App-basierte Firewall, Ausgangs-Firewall, Egress-Monitor, Kill-Switch, Little-Snitch-Alternative, Systemmonitor-Widget, Hardware-Informationen, Sicherheitsmonitor, OSINT, Recon, offline, keine Telemetrie, MIT-Lizenz',
  tagline: 'Quelloffene Datenschutz- und Sicherheitswerkzeuge für Windows und Linux.',
  heroBadge: 'Quelloffen · MIT · Windows und Linux',
  heroTitle: 'Vertrauen Sie Sicherheitswerkzeugen nicht. Lesen Sie sie.',
  heroSubtitle:
    'Strix Advanced Tools ist eine quelloffene Sammlung von Datenschutz- und Sicherheitswerkzeugen für Windows und Linux. Jedes läuft vollständig offline, enthält keinerlei Telemetrie und steht Ihnen offen zum Prüfen, Selbst-Kompilieren und Vertrauen — für immer kostenlos, MIT-lizenziert.',
  browse: 'Werkzeuge erkunden',
  getStarted: 'Herunterladen',
  viewOnGithub: 'Auf GitHub mit Stern versehen',
  nav: { apps: 'Werkzeuge', downloads: 'Downloads', github: 'GitHub', security: 'Sicherheit', contribute: 'Beitragen', donate: 'Spenden', about: 'Über uns', alternatives: 'Alternativen' },
  allApps: 'Die Werkzeuge',
  allAppsLead: 'Neun fokussierte Werkzeuge. Jedes erledigt eine Sache gut — offline.',
  features: 'Was es kann',
  screenshots: 'Ein Blick ins Innere',
  faqTitle: 'Häufige Fragen',
  download: 'Herunterladen',
  downloadCta: 'Holen',
  otherDownloads: 'Alle Plattformen und Prüfsummen',
  source: 'Quellcode',
  docs: 'Dokumentation',
  readme: 'Dokumentation lesen',
  install: 'Installation',
  installWindows: 'Windows',
  installLinux: 'Linux (Ubuntu / Debian)',
  security: 'Sicherheit',
  securityNote:
    'Standardmäßig offline, keine Shell, kein dynamischer Code, minimale Rechte — und jede Zeile ist MIT-lizenziert und offen für Prüfungen.',
  category: 'Kategorie',
  backHome: 'Alle Werkzeuge',
  verified: 'Zu jeder Veröffentlichung werden Prüfsummen (SHA-256) bereitgestellt, damit Sie Ihren Download überprüfen können.',
  unsigned:
    'Die Builds sind noch nicht code-signiert, daher warnt Windows SmartScreen möglicherweise beim ersten Start — wählen Sie „Weitere Informationen → Trotzdem ausführen“ oder überprüfen Sie zuerst die Prüfsumme. Deaktivieren Sie niemals Ihr Antivirenprogramm.',
  whyTitle: 'Auf vier Versprechen gebaut',
  whyLead: 'Kein Slogan — jedes Versprechen lässt sich im Quellcode überprüfen, bevor Sie ihm vertrauen.',
  why: [
    { k: 'offline', title: 'Offline von Grund auf', text: 'Keine Netzwerkaufrufe, keine Telemetrie, keine Konten. Ihre Daten verlassen niemals das Gerät, auf dem sie liegen.', proof: 'Durchsuchen Sie den Quellcode (grep): null ausgehende Sockets in den Desktop-Werkzeugen' },
    { k: 'hardened', title: 'Gehärtet und getestet', text: 'Keine Shell-Aufrufe, kein dynamischer Code, minimale Rechte — und die sicherheitskritischen Pfade sind durch echte Regressionstests abgedeckt.', proof: 'z. B. verweigert der Datenträger-Löscher den Systemdatenträger in 18 Unit-Tests' },
    { k: 'cross', title: 'Windows und Linux', text: 'Vollwertige Setup-Assistenten unter Windows und native Pakete unter Linux für die Desktop-Werkzeuge; die Kali-Recon-/OSINT-Werkzeuge werden als Linux-Skripte ausgeliefert.', proof: 'Veröffentlichungen mit Prüfsummen und GitHub-Build-Provenance-Attestierung' },
    { k: 'open', title: 'Wirklich offen', text: 'MIT-lizenziert, ohne versteckte Bedingungen. Lesen Sie ihn, kompilieren Sie ihn selbst, prüfen Sie ihn oder senden Sie einen Pull Request.', proof: 'Jedes Repository ist öffentlich auf GitHub — nichts wird verborgen' },
  ],
  downloadsTitle: 'Downloads',
  downloadsLead:
    'Holen Sie sich die neueste Version für Ihre Plattform. Jeder Download ist eine direkte Datei aus den GitHub Releases, ausgeliefert mit einer SHA-256-Prüfsumme.',
  homeFaq: [
    ['Sind die Strix Advanced Tools wirklich kostenlos und quelloffen?', 'Ja. Jedes Werkzeug ist MIT-lizenziert und für immer kostenlos — Sie können den Quellcode lesen, ihn selbst kompilieren und beitragen. Keine kostenpflichtigen Stufen, keine Konten, keine Abonnements und keine Werbung, weder jetzt noch jemals.'],
    ['Wer steckt hinter Strix, und warum sollte ich ihm vertrauen?', 'Strix Advanced Tools ist ein unabhängiges Open-Source-Projekt — kein Unternehmen, das Ihre Daten verkauft. Sie müssen Vertrauen nicht als Glaubenssache hinnehmen: Jedes Werkzeug ist ein öffentliches GitHub-Repository unter der MIT-Lizenz, sodass Sie (oder jeder andere) jede Zeile lesen, es selbst aus dem Quellcode kompilieren und bestätigen können, dass es genau das tut, was es verspricht. Vertrauen soll überprüft, nicht eingefordert werden. Jedes Repository enthält außerdem eine SECURITY.md mit dem Bedrohungsmodell und einem privaten Meldeweg.'],
    ['Welches Strix-Werkzeug ist die quelloffene Alternative zu der App, die ich bereits nutze?', 'Talon ist eine App-basierte Ausgangs-Firewall — eine quelloffene Alternative zu Little Snitch und GlassWire. Sinkhole ist ein Werbe- und Tracker-Blocker per hosts-Datei — eine lokale Alternative für einzelne Rechner statt Pi-hole. MetaVault entfernt Metadaten und erstellt AES-256-Archive — eine Alternative zu ExifTool-Oberflächen, MAT2 und Online-EXIF-Entfernern. Disk Cleaner löscht Datenträger sicher — eine Alternative zu DBAN und der Wipe-Funktion von CCleaner. Pulse ist ein Systemmonitor-Widget (Alternative zu Rainmeter-/HWiNFO-Gadgets), Inspector liest Hardware-Informationen aus (Alternative zu CPU-Z/Speccy), und Sentinel ist ein Sicherheits-Wächter. Jedes läuft offline und ohne jegliche Telemetrie.'],
    ['Senden diese Werkzeuge meine Daten irgendwohin?', 'Nein. Jedes Desktop-Werkzeug läuft vollständig auf Ihrem Rechner, führt keine eigenen Netzwerkaufrufe aus und enthält keinerlei Telemetrie — Ihre Daten verlassen niemals Ihr Gerät. Die einzigen Werkzeuge, die überhaupt auf das Netzwerk zugreifen, sind jene, deren gesamte Aufgabe das Netzwerk ist (die Recon-/OSINT-Werkzeuge), und selbst diese nutzen ausschließlich schlüssellose öffentliche APIs, abgesichert durch eine Einwilligung und begrenzt durch Zeitlimits.'],
    ['Muss ich technisch versiert sein, um sie zu nutzen?', 'Für die Desktop-Apps nicht — MetaVault, Pulse, Inspector, Sentinel, Sinkhole und Talon haben alle eine aufgeräumte grafische Oberfläche mit sinnvollen Voreinstellungen und Bestätigungen vor jeder zerstörerischen Aktion. Die Recon-Werkzeuge (Vantage, Archer) sind Kommandozeilenprogramme, für Menschen, die sich im Terminal wohlfühlen.'],
    ['Welches Werkzeug brauche ich?', 'Nutzen Sie die Suche und die Filter über dem Werkzeugraster, um nach Plattform (Windows / Linux) und Kategorie (Datenschutz, Sicherheit, System, OSINT …) einzugrenzen, oder drücken Sie überall ⌘K / Strg-K, um direkt zu einem Werkzeug zu springen. Jede Werkzeugseite erklärt genau, was es tut — und was es bewusst nicht tut.'],
    ['Wie überprüfe ich, ob ein Download echt ist?', 'Jede GitHub-Veröffentlichung stellt neben den Dateien eine SHA-256-Prüfsumme (SHA256SUMS) bereit. Laden Sie sie herunter, vergleichen Sie den Hash Ihrer Datei, und Sie wissen, dass die Binärdatei genau dem entspricht, was veröffentlicht wurde — ohne Manipulation. Das zählt mehr als jede Code-Signatur.'],
    ['Welche Plattformen werden unterstützt?', 'Windows und Linux (Ubuntu / Debian). Die Desktop-Werkzeuge werden mit einem Windows-Installer und einem Linux-Paket ausgeliefert; die Recon-/OSINT-Werkzeuge Vantage und Archer sind ausschließlich für Linux/Kali.'],
    ['Gibt es eine macOS- oder Mobilversion?', 'Offiziell noch nicht — unterstützt werden Windows und Linux (Ubuntu / Debian), und es gibt keine iOS- oder Android-Versionen. Da die Python-basierten Werkzeuge (MetaVault, Pulse, Sentinel, Sinkhole, Talon) quelloffen und plattformübergreifend sind, laufen sie aus dem Quellcode möglicherweise auch unter macOS, doch das wird nicht unterstützt und ist nicht getestet. Ein nativer macOS-Build steht auf der Roadmap, ist aber kein fertiges Produkt.'],
    ['Warum zeigt Windows eine Warnung „unbekannter Herausgeber“ an?', 'Die Installer sind noch nicht code-signiert, daher zeigt SmartScreen beim ersten Start eine Meldung an. Wählen Sie „Weitere Informationen → Trotzdem ausführen“ oder überprüfen Sie die zu jeder Veröffentlichung bereitgestellte SHA-256-Prüfsumme. Deaktivieren Sie niemals Ihr Antivirenprogramm, um sie auszuführen — das sollte nie nötig sein.'],
    ['Ist die Nutzung der Recon-/OSINT-Werkzeuge legal?', 'Nur gegen Systeme, die Ihnen gehören oder für deren Prüfung Sie ausdrücklich autorisiert sind — ein absichtlich verwundbares Übungslabor, eine CTF-Challenge oder ein Auftrag mit schriftlicher Genehmigung. Sowohl Vantage als auch Archer zeigen eine einmalige Einwilligungsabfrage und sind streng passiv / nur für autorisierte Nutzung. Scannen oder Profiling ohne Autorisierung kann illegal sein.'],
    ['Kann ich einen Fehler melden oder beitragen?', 'Auf jeden Fall — jedes Werkzeug ist ein eigenes öffentliches Repository auf GitHub mit einer SECURITY.md, Issue-Vorlagen und einem Leitfaden für Beiträge. Sicherheitsprobleme haben einen privaten Meldeweg; Funktionen und Fehlerbehebungen sind als Pull Requests willkommen.'],
  ],
  faqSearchPlaceholder: 'Fragen durchsuchen …',
  toolsFilterAll: 'Alle',
  toolsSearchPlaceholder: 'Werkzeuge nach Name, Zweck oder Stichwort durchsuchen …',
  toolsNoMatch: 'Keine passenden Werkzeuge — versuchen Sie, die Filter zurückzusetzen.',
  footerTagline: 'Quelloffene Datenschutz- und Sicherheitswerkzeuge.',
  footerNote: 'Gemacht für Menschen, denen Datenschutz wichtig ist.',
  footerCols: { product: 'Werkzeuge', resources: 'Ressourcen', about: 'Projekt' },
  langLabel: 'Sprache',
  stats: { tools: 'Werkzeuge', platforms: 'Plattformen', telemetry: 'Telemetrie', license: 'Lizenz' },
  faqNoMatch: 'Keine passende Frage — versuchen Sie es mit anderen Worten.',
  dl: { allTools: 'Jedes Werkzeug — Windows und Linux', verify: 'Überprüfen Sie Ihren Download' },
  app: {
    price: 'Preis',
    priceVal: 'Kostenlos — quelloffen (MIT)',
    platforms: 'Plattformen',
    category: 'Kategorie',
    builtWith: 'Entwickelt mit',
    altTo: 'Quelloffene Alternative zu',
    telemetry: 'Telemetrie',
    telemetryVal: 'Keine — vollständig offline',
    updated: 'Aktualisiert',
    notDo: 'Was {name} bewusst nicht tut',
    poweredBy: 'Angetrieben von Open Source',
    fullAck: 'Vollständige Danksagungen und Links →',
    related: 'Verwandte Strix-Werkzeuge',
    winInstall: 'Laden Sie den Setup-Assistenten herunter und führen Sie ihn aus — Startmenü-Verknüpfungen und ein Deinstallationsprogramm werden für Sie angelegt.',
    dangerFallback: 'Dieses Werkzeug zerstört Daten dauerhaft und lässt sich nicht rückgängig machen. Lesen Sie vor der Nutzung den Sicherheitsleitfaden.',
    copy: 'Kopieren',
    copied: 'Kopiert ✓',
    glance: 'auf einen Blick',
  },
};

export const categories = {
  Privacy: 'Datenschutz',
  System: 'System',
  Security: 'Sicherheit',
  Diagnostics: 'Diagnose',
  Recon: 'Recon',
  OSINT: 'OSINT',
};

export const security = {
  h1: 'Überprüfen Sie uns — vertrauen Sie uns nicht einfach.',
  lead:
    'Die Strix Advanced Tools sind kostenlos, quelloffen (MIT) und darauf ausgelegt, vollständig offline zu laufen. Unsere Windows-Builds sind noch nicht mit einem kostenpflichtigen Zertifikat code-signiert — wir sind ein kleines, unabhängiges Projekt ohne Budget, und wir sagen das lieber offen, als es zu verbergen. Da jedes Werkzeug quelloffen ist, müssen Sie uns nichts einfach glauben. So können Sie es selbst überprüfen.',
  boldNotSigned: 'noch nicht mit einem kostenpflichtigen Zertifikat code-signiert',
  updatedLabel: 'Zuletzt aktualisiert',
  why: [
    { t: 'Der Quellcode ist öffentlich', d: 'Jedes Werkzeug ist ein öffentliches GitHub-Repository unter der MIT-Lizenz. Lesen Sie jede Zeile, kompilieren Sie es selbst und bestätigen Sie, dass es genau das tut, was es verspricht.' },
    { t: 'Die Builds sind attestiert', d: 'Jede Veröffentlichung trägt eine GitHub-Build-Provenance-Attestierung (SLSA Build L2) — ein kryptografischer Nachweis, dass die Datei aus diesem Quellcode auf den Servern von GitHub erstellt und seither nicht verändert wurde.' },
    { t: 'Nichts funkt nach Hause', d: 'Die Desktop-Werkzeuge führen keinerlei Netzwerkaufrufe aus. Ziehen Sie Ihr Netzwerkkabel ab, und sie funktionieren weiterhin; beobachten Sie Ihren ausgehenden Datenverkehr, und Sie sehen keinen.' },
  ],
  verify: {
    h2: 'Überprüfen Sie Ihren Download',
    sub: 'Die Überprüfung ist optional — wenn Sie aus einer GitHub-Veröffentlichung heruntergeladen haben, ist bereits alles in Ordnung. Falls Sie aber sichergehen möchten: Jede Veröffentlichung enthält eine SHA256SUMS-Datei, und so gleichen Sie damit ab. Ersetzen Sie den Beispieldateinamen durch das Werkzeug, das Sie heruntergeladen haben.',
    anyOs: 'Beliebiges Betriebssystem',
    winStt: 'Prüfsumme kontrollieren',
    winIntro: 'Führen Sie im Ordner, in dem Sie den Download gespeichert haben, PowerShell aus:',
    winExp: 'Vergleichen Sie den ausgegebenen Hash mit der passenden Zeile in SHA256SUMS. Sind sie identisch, entspricht die Datei Byte für Byte dem, was wir veröffentlicht haben:',
    nixStt: 'Prüfsumme kontrollieren',
    nixIntro: 'Legen Sie den Download und die zugehörige SHA256SUMS in denselben Ordner, dann:',
    nixExp: 'Eine Ein-Wort-Antwort pro Datei — Sie möchten OK sehen:',
    provStt: 'Build-Provenance überprüfen',
    provIntro: 'Stärker als eine Prüfsumme: Weisen Sie nach, dass die Binärdatei aus unserem öffentlichen Quellcode in unserer öffentlichen CI erstellt wurde. Erfordert die GitHub CLI 2.49+:',
    provExp: 'Eine grüne Erfolgsmeldung, die genau das Quell-Repository nennt, aus dem die Datei stammt:',
    note: 'Prüfsummen werden in jedem GitHub Release veröffentlicht und über HTTPS gespiegelt — Beispiel: SHA256SUMS. Die Provenance-Attestierung wird bei GitHub gespeichert, nicht bei uns, sodass weder wir noch ein kompromittierter Download-Spiegel sie fälschen können.',
  },
  data: {
    h2: 'Welche Daten Ihren Rechner verlassen',
    sub: 'Die Kurzfassung: bei den Desktop-Werkzeugen keine. Hier die vollständige Übersicht — und jede Zeile lässt sich mit einem Paketmitschnitt bestätigen.',
    thCategory: 'Kategorie',
    thWhat: 'Worum es sich handelt',
    thWhere: 'Wohin es geht',
    rows: [
      ['Die Dateien, die Sie verarbeiten', 'Metadaten, Datenträgerinhalte, Archive — direkt auf Ihrem Rechner gelesen und geschrieben.', 'Niemals hochgeladen. Es wird nichts irgendwohin gesendet.'],
      ['Ihre Systemdetails', 'Hostname, Benutzername, Seriennummern, IPs, Hardware — nur innerhalb der App angezeigt.', 'Lokal angezeigt; niemals übertragen.'],
      ['Einstellungen und Berichte', 'Präferenzen, Protokolle, HTML-/PDF-Berichte.', 'Auf dem Datenträger gespeichert (%LOCALAPPDATA% / ~/.config); niemals mit einem Server synchronisiert.'],
      ['Nutzungs- und Absturzanalyse', 'Keine. Es gibt kein Analyse-SDK, keine Telemetrie, kein Nach-Hause-Funken.', 'Es wird niemals etwas erfasst.'],
      ['Netzwerkausgang (Desktop-Werkzeuge)', 'MetaVault, Pulse, Inspector, Sentinel, Sinkhole, Talon.', 'Null ausgehende Sockets. Trennen Sie die Netzwerkverbindung — sie funktionieren weiterhin.'],
      ['Netzwerkausgang (Recon-Werkzeuge)', 'Vantage und Archer — deren gesamte Aufgabe das Netzwerk ist.', 'Nur schlüssellose öffentliche APIs, die Sie ausdrücklich auslösen, nach einer Einwilligungsabfrage und begrenzt durch Zeitlimits.'],
    ],
  },
  av: {
    h2: 'Antiviren- und SmartScreen-Warnungen',
    intro1: 'Da unsere Windows-Apps unsigniert und mit PyInstaller gepackt sind, meldet Windows SmartScreen möglicherweise',
    intro2: 'und eine Handvoll der rund 70 Antiviren-Engines schlägt beim Installer möglicherweise an.',
    intro3: 'Das ist bei neuer, unsignierter Open-Source-Software zu erwarten — es handelt sich um eine allgemeine Heuristik dazu, wie die App gepackt ist, nicht um die Erkennung tatsächlicher Schadsoftware.',
    unknownPublisher: 'unbekannter Herausgeber',
    notCommon: 'nicht häufig heruntergeladen,',
    list: [
      { b: 'Warum es passiert:', r: 'Der PyInstaller-Bootloader ist ein verbreitetes Verpackungsformat (auch Schadsoftware nutzt es), eine brandneue Datei hat keine Download-Reputation, und unsignierte Binärdateien erhalten einen „verdächtig, bis das Gegenteil bewiesen ist“-Malus.' },
      { b: 'Der eigentliche Beweis', r: 'sind die Prüfsumme und die Provenance-Attestierung oben sowie der Quellcode, den Sie lesen können — nicht die Heuristik irgendeines Anbieters.' },
      { b: 'Was wir tun:', r: 'Wir melden Fehlalarme an die Anbieter, sobald sie auftreten, und wir bewerben uns für das kostenlose Code-Signing-Programm der SignPath Foundation für Open-Source-Projekte, das wir einführen, sobald sich Reputation aufbaut.' },
      { b: 'Bitte deaktivieren Sie niemals Ihr Antivirenprogramm.', r: 'Wenn Sie unsicher sind, überprüfen Sie die Prüfsumme oder führen Sie das Werkzeug aus dem Quellcode aus.' },
    ],
    tiny: 'Sobald eine Version veröffentlicht ist, verlinken wir pro Build einen aktuellen VirusTotal-Scan, damit Sie das aktuelle Ergebnis selbst sehen können. Wir werden niemals einen „sauberer Scan“-Screenshot posten oder „null Erkennungen“ behaupten — ein anklickbarer Live-Link schlägt einen Screenshot, der beim nächsten Build veraltet ist.',
  },
  read: {
    h2: 'Lesen Sie den Quellcode',
    sub: 'Die stärkste Zusicherung überhaupt. Durchsuchen Sie ein beliebiges Repository (grep) nach socket, urllib, requests oder http und sehen Sie selbst, was auf das Netzwerk zugreift — und was nicht.',
    view: 'Quellcode ansehen ↗',
  },
  threat: {
    h2: 'Bedrohungsmodell',
    items: [
      ['Wovor Strix schützt', 'Daten, die über Datei-Metadaten abfließen, wiederherstellbare Daten auf ausgemusterten Datenträgern, Tracker-/Telemetrie-/Werbedomains, stille ausgehende Verbindungen, unbekannte Autostarts und Geräte sowie Closed-Source-Werkzeuge, die Sie nicht prüfen können.'],
      ['Was Strix NICHT ist', 'Es ist kein Antivirus/EDR, keine Sandbox und kein Schutz gegen ein kompromittiertes Betriebssystem oder Schadsoftware, die bereits mit Administratorrechten läuft. Die Desktop-Werkzeuge machen Informationen sichtbar und handeln auf Ihren Befehl; sie bekämpfen keine aktiven Bedrohungen in Echtzeit.'],
      ['Vertrauensgrenze', 'Provenance beweist, dass ein Download unverändert aus diesem öffentlichen Quellcode über GitHub CI stammt. Sie beweist nicht, dass der Quellcode harmlos ist — dafür ist der offene MIT-Code da, den Sie lesen und neu kompilieren können.'],
    ],
  },
  report: {
    h2: 'Eine Schwachstelle gefunden?',
    p: 'Melden Sie sie privat — bitte öffnen Sie für einen Sicherheitsfehler kein öffentliches Issue. Jedes Repository hat eine SECURITY.md mit dem Bedrohungsmodell und einem Weg zur koordinierten Offenlegung, und die private Schwachstellenmeldung von GitHub ist aktiviert. Wir üben keine Vergeltung und nennen Sie auf Wunsch namentlich.',
    btnPolicy: 'Sicherheitsrichtlinie',
    btnRepos: 'Alle Repositories',
  },
};

export const apps = {
  'strix-metavault': {
    tagline: 'Verborgene Metadaten löschen und Ihre Dateien anschließend mit AES-256-Verschlüsselung einschließen.',
    summary:
      'Jedes Foto, Dokument und PDF, das Sie teilen, trägt verborgene Spuren — GPS-Koordinaten, Ihren Namen, das verwendete Gerät, den Bearbeitungsverlauf. Strix MetaVault entfernt all das und versiegelt die bereinigten Dateien auf Wunsch in einem AES-256-verschlüsselten 7-Zip-Archiv mit verborgenen Dateinamen und einem einmaligen Zufallspasswort. Vollständig offline, keine Konten, keine Telemetrie.',
    features: [
      'Entfernt EXIF, GPS, IPTC und XMP aus Bildern; Autor/Firma/Verlauf aus Office- und PDF-Dateien',
      'Optionales AES-256-Archiv mit verschlüsselten Dateinamen und einem zufällig gewählten Ausgabenamen',
      'Erzeugt ein starkes Einmalpasswort, das niemals auf den Datenträger oder in Protokolle geschrieben wird',
      'Verweigert schwache eigene Passwörter; geschützt gegen Symlink-Angriffe und Zip-Bomben',
      'Ihre Originale werden niemals verändert — alles läuft auf Kopien',
    ],
    definition:
      'Strix MetaVault ist ein kostenloser, quelloffener Metadaten-Entferner und Datei-Verschlüssler für Windows und Linux, der verborgene EXIF/GPS- und Dokument-Metadaten entfernt und Ihre Dateien anschließend optional in einem AES-256-verschlüsselten Archiv einschließt — vollständig offline, ohne Konten und ohne Telemetrie.',
    notFor: [
      'Es lädt Ihre Dateien niemals hoch — anders als Online-Metadaten-Entferner geschieht die gesamte Bereinigung lokal.',
      'Es entwickelt keine eigene Kryptografie: Die Verschlüsselung wird an das bewährte 7-Zip-AES-256 übergeben.',
      'Es ist kein Cloud-Dienst und benötigt kein Konto.',
    ],
    faq: [
      ['Funktioniert es ohne 7-Zip oder ExifTool?', 'JPEG und PNG werden mit der integrierten Engine bereinigt. Für alle anderen Formate und für die verschlüsselte Archivierung installieren Sie 7-Zip und ExifTool (oder legen Sie sie neben die App).'],
      ['Kann ich ein verlorenes Archivpasswort wiederherstellen?', 'Nein. Das Passwort wird einmal angezeigt und niemals gespeichert. Sichern Sie es sofort in einem Passwortmanager — ohne es ist die Verschlüsselung tatsächlich unknackbar.'],
    ],
    seoTitle: 'Strix MetaVault — Metadaten-Entferner und Datei-Verschlüssler',
    seoDescription: 'Kostenloses, quelloffenes Werkzeug, um EXIF/GPS- und Dokument-Metadaten zu entfernen und Ihre Dateien anschließend in einem AES-256-verschlüsselten Archiv einzuschließen. Offline, keine Telemetrie. Windows und Linux.',
  },
  'strix-pulse-monitor': {
    tagline: 'Ein auf einen Blick erfassbarer, stets im Vordergrund liegender Monitor für Ihren gesamten Rechner.',
    summary:
      'Ein schlankes, rahmenloses Desktop-Widget, das über Ihrer Arbeit schwebt und die Auslastung von CPU, GPU, RAM und Datenträger sowie Download und Upload im Netzwerk in Echtzeit anzeigt — jede Sekunde aktualisiert. Ziehen Sie es beliebig hin, heften Sie es fest oder verstauen Sie es im Infobereich. Kein eigener Netzwerkzugriff, keine Telemetrie.',
    features: [
      'Auslastung von CPU, GPU, RAM und Speicher sowie Netzwerkdurchsatz in Echtzeit, einmal pro Sekunde',
      'GPU-Werte von NVIDIA, aus den Windows-Leistungsindikatoren oder aus AMD-sysfs unter Linux',
      'Rahmenloses Glas-Widget, das Sie ziehen, anheften oder in den Infobereich ausblenden können',
      'Merkt sich seine Position; Einstellungen werden validiert und atomar geschrieben',
    ],
    definition:
      'Strix Pulse Monitor ist ein kostenloses, quelloffenes Desktop-Systemmonitor-Widget für Windows und Linux, das die Auslastung von CPU, GPU, RAM, Datenträger und Netzwerk in Echtzeit in einem stets im Vordergrund liegenden Glas-Panel anzeigt — offline, ohne Telemetrie.',
    notFor: [
      'Es funkt an niemanden nach Hause und erfasst keine Nutzungsdaten.',
      'Es ist ein auf einen Blick erfassbarer Echtzeit-Monitor, keine Benchmark-Suite (für Benchmarks siehe Strix Inspector).',
      'Es benötigt keine Administratorrechte, um zu laufen.',
    ],
    faq: [
      ['Warum zeigt die GPU-Zeile N/A an?', 'Intel-GPUs unter Linux benötigen privilegierte Werkzeuge, daher zeigt das Widget N/A an, statt nach Root-Rechten zu fragen. NVIDIA und AMD werden von Haus aus unterstützt.'],
      ['Kann es mit meiner Sitzung starten?', 'Ja — unter Windows legen Sie eine Verknüpfung im Autostart-Ordner an; unter Linux führen Sie den Installer mit --autostart aus.'],
    ],
    seoTitle: 'Strix Pulse Monitor — CPU-/GPU-/RAM- und Netzwerk-Widget',
    seoDescription: 'Ein schlankes, stets im Vordergrund liegendes Desktop-Widget, das die Auslastung von CPU, GPU, RAM, Datenträger und Netzwerk in Echtzeit anzeigt. Quelloffen, offline, keine Telemetrie. Windows und Linux.',
  },
  'strix-sentinel': {
    tagline: 'Wissen Sie, was auf Ihrem Rechner läuft, zusieht und mithört.',
    summary:
      'Ein lokaler, offline arbeitender Wächter, der fünf Fragen beantwortet: was mit Ihrem Rechner startet, welche neuen Prozesse auftauchen, welche App Ihr Mikrofon oder Ihre Kamera nutzt, wer sich angemeldet hat und welche unbekannten Geräte in Ihrem Netzwerk sind. Eine dunkle, fokussierte GUI unter Windows; eine skriptfähige CLI unter Linux. Nichts verlässt jemals Ihren Computer.',
    features: [
      'Autostart-Prüfung, die alles Neue seit Ihrer freigegebenen Ausgangsbasis kennzeichnet',
      'Echtzeit-Überwachung neu gestarteter Prozesse, mit vollständigen Pfaden zur ausführbaren Datei',
      'Erkennt, welche Anwendung gerade Ihr Mikrofon oder Ihre Kamera nutzt',
      'Anmeldeprüfung und ein lokaler Netzwerkwächter, der unbekannte Geräte-MACs kennzeichnet',
    ],
    definition:
      'Strix Sentinel ist ein kostenloser, quelloffener Offline-Sicherheitsmonitor für Windows und Linux, der prüft, was mit Ihrem Rechner startet, neue Prozesse überwacht, die Nutzung von Mikrofon/Kamera erkennt, Anmeldungen prüft und unbekannte Geräte in Ihrem Netzwerk kennzeichnet — ohne eigenen ausgehenden Netzwerkverkehr.',
    notFor: [
      'Es ist kein Antivirus und kein EDR — es macht Änderungen sichtbar, damit Sie sie beurteilen; es stellt niemals etwas unter Quarantäne und blockiert nichts.',
      'Es sendet niemals Daten von Ihrem Rechner fort.',
      'Die Linux-Edition ist bewusst eine skriptfähige CLI (keine GUI).',
    ],
    faq: [
      ['Benötigt die Anmeldeprüfung Administratorrechte?', 'Ja — das Lesen des Sicherheitsprotokolls erfordert unter Windows Administrator- und unter Linux Root-Rechte. Jede andere Prüfung läuft ohne besondere Rechte.'],
      ['Gibt es eine Linux-GUI?', 'Die Linux-Edition ist bewusst ein sauberes Kommandozeilenwerkzeug — sie läuft headless und über SSH, was zu einem Sicherheitsmonitor passt. Sie nutzt denselben getesteten Erkennungskern wie die Windows-GUI.'],
    ],
    seoTitle: 'Strix Sentinel — Offline-Sicherheits- und Datenschutzmonitor',
    seoDescription: 'Sehen Sie, was startet und läuft, welche App Ihr Mikrofon/Ihre Kamera nutzt, prüfen Sie Anmeldungen und erkennen Sie unbekannte Geräte in Ihrem Netzwerk. Quelloffen, offline. Windows-GUI und Linux-CLI.',
  },
  'strix-inspector': {
    tagline: 'Ein vollständiges, schreibgeschütztes Bild Ihrer Hardware — in Sekunden.',
    summary:
      'Eine präzise, schreibgeschützte Inventur Ihres Rechners — Betriebssystem, CPU, Arbeitsspeicher bis hinunter zu jedem DIMM, GPUs, Datenträger, Mainboard, BIOS und Akku — dargestellt als Konsolentext, maschinenlesbares JSON oder als gepflegtes, in sich geschlossenes HTML-Dashboard. Zudem führt es schnelle CPU-, Speicher- und Datenträger-Benchmarks aus. Kein Netzwerk, keine erhöhten Rechte erforderlich.',
    features: [
      'Vollständige Inventur: OS, CPU, Speicher pro DIMM, GPUs, Datenträger, Mainboard, BIOS, Akku',
      'Drei Ausgabeformen: Konsole, JSON und ein HTML-Dashboard in Hell/Dunkel',
      'Integrierte Mikro-Benchmarks für CPU, Speicher und Datenträger',
      'Läuft unter Linux über .NET 8 und nutzt denselben gehärteten SMBIOS-Parser wie unter Windows',
    ],
    definition:
      'Strix Inspector ist ein kostenloses, quelloffenes, schreibgeschütztes Hardware-Informations- und Benchmark-Werkzeug für Windows und Linux, das Ihre CPU, den RAM pro DIMM, die GPU, Datenträger, das Mainboard und das BIOS als Konsolentext, JSON oder als in sich geschlossenes HTML-Dashboard inventarisiert — ohne Netzwerkzugriff.',
    notFor: [
      'Es ist strikt schreibgeschützt — es ändert niemals Einstellungen, übertaktet nicht und flasht keine Firmware.',
      'Es benötigt unter Windows keine Runtime-Installation und keine erhöhten Rechte, um zu laufen.',
      'Es sendet keine Daten irgendwohin.',
    ],
    faq: [
      ['Muss ich eine Runtime installieren?', 'Unter Windows nutzt es das integrierte .NET Framework — nichts zu installieren. Der Linux-Build wird als in sich geschlossene Binärdatei ausgeliefert.'],
      ['Warum benötigen manche Felder Administratorrechte?', 'Datenträgergrößen, DIMM-Details und BIOS-Zeichenfolgen stammen aus privilegierten Schnittstellen. Ohne erhöhte Rechte läuft das Werkzeug dennoch und vermerkt einfach, was es übersprungen hat.'],
    ],
    seoTitle: 'Strix Inspector — Hardware-Informationen und Benchmark-Werkzeug',
    seoDescription: 'Schreibgeschützte Hardware-Inventur (CPU, RAM pro DIMM, GPU, Datenträger, BIOS) samt Benchmarks — als Konsolentext, JSON oder HTML-Dashboard. Quelloffen. Windows und Linux.',
  },
  'strix-disk-cleaner': {
    tagline: 'Löschen Sie einen Datenträger endgültig — mit einem Schutz davor, den falschen zu löschen.',
    summary:
      'Löschen Sie einen ganzen Datenträger dauerhaft und überprüfbar nach den Standards NIST SP 800-88 und DoD 5220.22-M — mit Hardware-Sanitize, wo möglich, oder mehrfachem Überschreiben. Ein mehrschichtiger Sicherheitsschutz macht es unmöglich, Ihren Systemdatenträger auszuwählen, und jede zerstörerische Aktion verlangt eine getippte Bestätigung. Windows liefert eine vollwertige GUI mit einem druckbaren Vernichtungszertifikat; Linux liefert einen Unit-getesteten Kommandozeilen-Löscher.',
    features: [
      'Ein mehrschichtiger Schutz: Ihr Systemdatenträger und jeder eingehängte Datenträger können niemals ausgewählt werden',
      'Hardware-Sanitize (blkdiscard, nvme, hdparm) oder mehrfaches Überschreiben',
      'Getippte ERASE-Bestätigung mit einer erneuten Prüfung unmittelbar vor dem Schreiben',
      'Unit-getestete Sicherheitslogik; ein druckbares Vernichtungszertifikat unter Windows',
    ],
    definition:
      'Strix Disk Cleaner ist ein kostenloser, quelloffener sicherer Datenträger-Löscher für Windows und Linux, der einen Datenträger dauerhaft nach den Standards NIST SP 800-88 und DoD 5220.22-M löscht, mit einem mehrschichtigen Sicherheitsschutz, der es unmöglich macht, Ihren Systemdatenträger zu löschen.',
    notFor: [
      'Es kann Ihren System-/Startdatenträger oder ein eingehängtes Volume nicht auswählen oder löschen — von Grund auf so gebaut.',
      'Es löscht ganze Datenträger, keine einzelnen Dateien.',
      'Es führt keine Netzwerkaufrufe aus und benötigt kein Konto.',
    ],
    faq: [
      ['Kann ich versehentlich meinen Windows-/Linux-Datenträger löschen?', 'Nein. Der System- und Startdatenträger werden erkannt und ausgeblendet; unter Linux wird jeder eingehängte Datenträger verweigert. Zudem müssen Sie den Gerätepfad und das Wort ERASE eintippen.'],
      ['Reicht Überschreiben für eine SSD?', 'Nicht zuverlässig — die Wear-Leveling-Technik von Flash-Speicher kann Daten zurücklassen. Das Werkzeug erkennt SSDs und leitet Sie zu einem Hardware-Sanitize (blkdiscard / nvme), das gründlich ist.'],
    ],
    seoTitle: 'Strix Disk Cleaner — Sicherer Datenträger-Löscher (NIST/DoD)',
    seoDescription: 'Löschen Sie einen Datenträger dauerhaft nach NIST SP 800-88 / DoD 5220.22-M — mit einem mehrschichtigen Schutz, der Ihren Systemdatenträger niemals löschen kann. Quelloffen. Windows-GUI und Linux-CLI.',
  },
  'strix-vantage': {
    tagline: 'Ein Befehl führt eine vollständige, WAF-sichere Recon-Pipeline in Ihrem Labor aus.',
    summary:
      'Vantage verkettet rund 25 branchenübliche Kali-Werkzeuge — Subdomain-Enumeration, Erreichbarkeit, Port- und TLS-Scans, Crawling, Fuzzing und Schwachstellenprüfungen — zu einem einzigen Befehl mit Live-Status im Terminal und einem aufgeräumten Bericht. Es ist dafür gemacht, Ihre Web-Sicherheitsfähigkeiten an einem lokalen, absichtlich verwundbaren Labor zu schärfen (oder an jedem Ziel, das Ihnen gehört oder für dessen Prüfung Sie autorisiert sind), mit einem IDS-/WAF-sicheren, langsam-und-behutsamen Design und einer optionalen Terminal-Oberfläche.',
    features: [
      'Verkettet rund 25 Werkzeuge (nmap, nuclei, httpx, ffuf, katana, sqlmap, …) zu einer Recon-Pipeline',
      'IDS-/WAF-sicher von Grund auf: geringere Rate + Jitter statt schnellerem Hämmern (Profile „stealth“/„thorough“)',
      'Begrenzt das aktive Scannen auf Ihr Hauptziel; für alles Übrige nur ein leichter Fingerabdruck',
      'Live-Status im Terminal + ein formatierter Bericht; optionale Textual-TUI mit einem Verlaufsbrowser',
      'Gehärtet: keine Shell (nur argv), und die automatische Installation ist optional mit einer Supply-Chain-Warnung',
    ],
    definition:
      'Strix Vantage ist eine kostenlose, quelloffene Recon-Automatisierungs-Pipeline für Linux, die rund 25 Kali-Werkzeuge (nmap, nuclei, httpx, ffuf und mehr) zu einem WAF-sicheren Befehl für autorisiertes Penetrationstest-Training gegen Ihr eigenes, absichtlich verwundbares Labor verkettet.',
    notFor: [
      'Es ist ausschließlich für autorisierte Ziele — eine einmalige Einwilligungsabfrage setzt dies vor jedem aktiven Scan durch.',
      'Es orchestriert vorgelagerte Werkzeuge; es bündelt oder verändert sie nicht.',
      'Es ist ausschließlich für Linux/Kali (kein Windows- oder macOS-Build).',
    ],
    faq: [
      ['Ist die Nutzung legal?', 'Nur gegen Systeme, die Ihnen gehören oder für deren Prüfung Sie ausdrücklich autorisiert sind — etwa eine absichtlich verwundbare Übungs-App oder ein Sicherheitslabor, das Sie kontrollieren. Das aktive Scannen von Systemen, die Ihnen nicht gehören, ist in den meisten Rechtsordnungen illegal; Sie sind für Ihre Nutzung verantwortlich.'],
      ['Benötigt es Kali oder Root-Rechte?', 'Es ist auf Kali Linux und dessen Standard-Toolchain ausgerichtet; sudo aktiviert SYN-Scans und den (optionalen) Auto-Installer. Auf anderen Linux-Distributionen läuft es, wenn die Werkzeuge bereits installiert sind.'],
    ],
    seoTitle: 'Strix Vantage — Recon-Automatisierung für CTFs und Pentest-Labore',
    seoDescription: 'Verketten Sie rund 25 Kali-Recon-Werkzeuge (nmap, nuclei, ffuf, httpx …) zu einer WAF-sicheren Pipeline für autorisiertes Pentest-Training an einem lokalen, absichtlich verwundbaren Labor. Quelloffen.',
    dangerText: 'Vantage sendet aktiven Scan-Verkehr (Portscans, Fuzzing, Schwachstellen-Sondierungen). Nutzen Sie es NUR gegen Systeme, die Ihnen gehören oder für deren Prüfung Sie ausdrücklich autorisiert sind — z. B. Ihr eigenes lokales, absichtlich verwundbares Labor. Unautorisiertes Scannen ist an den meisten Orten illegal.',
    creditsNote: 'Vantage orchestriert diese quelloffenen Werkzeuge — es bündelt oder verändert sie nicht. Herzlichen Dank an jedes vorgelagerte Projekt.',
  },
  'strix-archer': {
    tagline: 'Passives OSINT für CTF-Challenges und autorisierte Laborziele.',
    summary:
      'Strix Archer verbindet eine abhängigkeitsfreie OSINT-Engine, die ausschließlich die Standardbibliothek nutzt, mit Wrappern für beliebte Werkzeuge — es verwendet Sherlock, maigret, holehe, theHarvester und SpiderFoot, sofern installiert, und greift andernfalls auf die eigene Implementierung zurück. Es leistet Domain-Recon (DNS-over-HTTPS, RDAP/WHOIS, crt.sh-Subdomains, HTTP + Fingerabdruck der Sicherheits-Header), Identitäts-Recon (ratenbegrenzter Benutzernamen-Scan, GitHub-OSINT, Gravatar, Leak-Suche) und eine sichere HIBP-Passwortprüfung per k-Anonymität. Eine einmalige Einwilligungsabfrage beschränkt es auf autorisierte Labornutzung; alles ist passiv und schreibgeschützt, mit einem .txt- und einem dunklen HTML-Bericht.',
    features: [
      'Integrierte stdlib-Engine + bindet Sherlock / maigret / holehe / theHarvester / SpiderFoot automatisch ein, sofern vorhanden',
      'Domain: DNS-over-HTTPS, RDAP/WHOIS, crt.sh-Subdomains, HTTP + Prüfung auf fehlende Sicherheits-Header',
      'Identität: ratenbegrenzter Benutzernamen-Scan, GitHub-OSINT (in Commits geleakte E-Mail-Adressen), Gravatar, XposedOrNot-Leak-Suche',
      'Sichere Passwort-Leak-Prüfung per HIBP-k-Anonymität — das Passwort verlässt niemals Ihren Rechner',
      'Einmalige Einwilligungsabfrage, von Grund auf ratenbegrenzt; passiv und schreibgeschützt; .txt- + dunkler HTML-Bericht',
    ],
    definition:
      'Strix Archer ist ein kostenloses, quelloffenes OSINT-Werkzeug für Linux — gemacht für CTF-Challenges und autorisierte Laborziele —, das passives Domain- und Identitäts-Recon (DNS/RDAP/crt.sh, Benutzernamen- und E-Mail-Suche, GitHub-OSINT, Leak-Prüfungen) sowie eine sichere HIBP-Passwortprüfung per k-Anonymität durchführt.',
    notFor: [
      'Es ist passiv und schreibgeschützt — es nutzt niemals Schwachstellen aus und greift ein Ziel nicht aktiv an.',
      'Es ist ausschließlich für autorisierte Nutzung — eine einmalige Einwilligungsabfrage erzwingt eine Bestätigung.',
      'Die Passwort-Leak-Prüfung sendet Ihr Passwort niemals (HIBP-k-Anonymität).',
    ],
    faq: [
      ['Ist die Nutzung legal?', 'Nur gegen CTF-Challenges / fiktive Personen oder Ziele, die Ihnen gehören oder für deren Prüfung Sie ausdrücklich autorisiert sind. Das Profiling realer Personen ohne Einwilligung kann Belästigung darstellen und illegal sein — eine einmalige Einwilligungsabfrage erzwingt eine Bestätigung.'],
      ['Muss ich etwas installieren?', 'Nein — die integrierte Engine besteht rein aus der Python-Standardbibliothek. Optionale Werkzeuge (Sherlock, holehe, …) werden automatisch eingebunden, sofern vorhanden, und `--setup` installiert sie in isolierte pipx-Umgebungen, sodass Ihr System-Python unberührt bleibt.'],
    ],
    seoTitle: 'Strix Archer — OSINT-Werkzeug für CTFs und autorisierte Laborziele',
    seoDescription: 'Passives OSINT für autorisierte Labor-/CTF-Ziele: Domain-Recon (DNS/RDAP/crt.sh), Benutzernamen- und E-Mail-Suche, GitHub-OSINT, Leak-Prüfungen und eine sichere HIBP-Passwortprüfung. Quelloffen.',
    dangerText: 'Strix Archer führt OSINT-Sammlung durch und zeigt eine einmalige Einwilligungsabfrage. Nutzen Sie es NUR gegen CTF-Challenges / fiktive Personen oder Ziele, die Ihnen gehören oder für deren Prüfung Sie autorisiert sind. Das Profiling realer Personen ohne Einwilligung kann illegal sein.',
    creditsNote: 'Strix Archer bindet diese quelloffenen Werkzeuge und öffentlichen Dienste ein — es bündelt oder verändert sie nicht. Dank an jedes vorgelagerte Projekt und jeden Dienst.',
  },
  'strix-sinkhole': {
    tagline: 'Blockieren Sie Tracker, Telemetrie und Werbung in Ihrer hosts-Datei — offline, umkehrbar, ein Klick.',
    summary:
      'Strix Sinkhole verwaltet Ihre System-hosts-Datei auf sichere Weise, um bekannte Tracker-, Telemetrie- und Werbedomains auf 0.0.0.0 ins Leere zu routen, sodass eine Auflösung bereits auf Ihrem eigenen Rechner stirbt, bevor irgendeine Anfrage ihn verlässt — kein Server wie Pi-hole, keine Erweiterung pro Browser, kein Hintergrund-Daemon und keine eigenen Netzwerkaufrufe. Alles, was es schreibt, liegt innerhalb eines mit Namensraum versehenen Blocks, sodass Ihre eigenen hosts-Einträge und die Systemvorgaben Byte für Byte kopiert und niemals angetastet werden. Ein integrierter Wächter weigert sich, kritische Infrastruktur (OS-Updates, Zertifikatssperrung/OCSP, Zeitsynchronisierung, localhost) ins Leere zu routen, ganz gleich, was eine Blockliste behauptet, sodass er Ihren Rechner niemals stillschweigend lahmlegen kann. Jeder Änderung geht ein zeitgestempeltes Backup voraus, und sie ist mit einem Klick umkehrbar, mit einer Testlauf-Diff, die genau zeigt, was sich ändert, und einer Positivliste für Fehlalarme.',
    features: [
      'Routet Tracker-/Telemetrie-/Werbedomains systemweit über die hosts-Datei ins Leere — offline, kein Server, keine Erweiterung',
      'Mit Namensraum versehener verwalteter Block: Ihre eigenen und die System-hosts-Einträge bleiben Byte für Byte erhalten (vor jedem Schreiben überprüft)',
      'Wächter für kritische Domains: OS-Updates, OCSP/CRL, Zeitsynchronisierung und localhost können von keiner Liste ins Leere geroutet werden',
      'Zeitgestempeltes Backup vor jedem Schreiben + Wiederherstellung per Klick; Testlauf-Diff-Vorschau; Positivliste für Fehlalarme',
      'Kuratierte Startliste enthalten; importieren Sie eigene Listen oder aktivieren Sie ein begrenztes HTTPS-Update; dunkle GUI (Windows) + `strixsink`-CLI (Linux)',
    ],
    definition:
      'Strix Sinkhole ist ein kostenloser, quelloffener, offline arbeitender Werbe- und Tracker-Blocker per hosts-Datei für Windows und Linux, der Tracker-, Telemetrie- und Werbedomains systemweit ins Leere routet — ohne Server wie Pi-hole, ohne Browsererweiterung und ohne DNS-Weiterleitung.',
    notFor: [
      'Es ist kein DNS-Server nach Art von Pi-hole und leitet keine Ihrer Anfragen irgendwohin weiter.',
      'Es ist keine Browsererweiterung — es bearbeitet eine einfache, prüfbare hosts-Datei, die Sie zurücksetzen können.',
      'Es blockiert auf hosts-Ebene; es verschlüsselt Ihr vorgelagertes DNS nicht.',
    ],
    faq: [
      ['Worin unterscheidet sich das von Pi-hole oder einer Browsererweiterung?', 'Kein separater Server und kein Raspberry Pi (Pi-hole), und es ist keine Erweiterung pro Browser, die selbst Ihr Surfverhalten mitlesen kann — Strix Sinkhole bearbeitet eine Klartext-hosts-Datei, die jeder technisch versierte Nutzer prüfen und zurücksetzen kann. Nichts läuft im Hintergrund, und nichts leitet Ihre DNS-Anfragen irgendwohin weiter.'],
      ['Kann eine schlechte Blockliste meinen Computer lahmlegen?', 'Nein. Ein integrierter Wächter weigert sich, kritische Infrastruktur (OS-Updates, Zertifikatssperrung, Zeitsynchronisierung, localhost) ins Leere zu routen, ganz gleich, was eine Liste behauptet, jede Änderung wird zuerst gesichert, und ein Klick stellt exakt das Original wieder her. Beachten Sie: Es blockiert auf hosts-Ebene und verschlüsselt das vorgelagerte DNS nicht.'],
    ],
    seoTitle: 'Strix Sinkhole — Offline-Werbe- und Tracker-Blocker per hosts-Datei',
    seoDescription: 'Blockieren Sie Tracker, Telemetrie und Werbung systemweit, indem Sie sie in Ihrer hosts-Datei ins Leere routen — vollständig offline, kein Server, keine Browsererweiterung. Zeitgestempelte Backups, Zurücksetzen per Klick, bricht niemals kritische Domains. Quelloffen, Windows und Linux.',
    creditsNote: 'Strix Sinkhole liefert nur seine eigene kleine kuratierte Startliste und bündelt diese Listen nicht — es ermöglicht Ihnen, sie zu importieren, jede unter ihrer eigenen Lizenz. Dank an das öffentliche Blocklisten-Ökosystem.',
  },
  'strix-talon': {
    tagline: 'Sehen Sie den ausgehenden Datenverkehr jeder App — und würgen Sie die ab, denen Sie nicht vertrauen.',
    summary:
      'Strix Talon ist eine Echtzeit-Egress-Karte pro Prozess: welche Anwendung mit welcher entfernten Adresse und welchem Port spricht, einmal pro Sekunde aktualisiert, wobei brandneue Ziele gekennzeichnet werden, sobald sie auftauchen. Über der schreibgeschützten Sichtbarkeit liegt eine optionale Regelschicht — „diese App darf niemals ins Internet“, „diese Adresse blockieren“ und ein globaler Kill-Switch, der allen ausgehenden Verkehr außer Loopback kappt (Ihr LAN bleibt optional erreichbar). Entscheidend: Talon liefert keinen Kernel-Treiber: Jede Regel wird in die OS-eigene Firewall übersetzt — Windows Defender Firewall über netsh, unter Linux über eine private nftables-Tabelle — und so benannt, dass sie sich mit einem Klick zurücksetzen lässt, ohne Ihre bestehenden Regeln je anzutasten. Zudem macht es lokale lauschende Sockets sichtbar, sodass Sie eingehende Angriffsfläche und ausgehendes Geplauder in einer Ansicht sehen.',
    features: [
      'Echtzeit-Ausgangskarte pro App: App → entfernte IP/Port/Status, alle ~2 s aktualisiert, neue Ziele hervorgehoben',
      'Blockieren Sie eine App (Windows) oder eine Adresse (alle Plattformen), plus ein globaler Kill-Switch (alle ausgehenden Verbindungen außer Loopback blockieren)',
      'Durchgesetzt über Ihre OS-Firewall (Windows Defender Firewall / nftables) — kein Kernel-Treiber, dem man vertrauen oder den man signieren muss',
      'Jede Regel ist mit einem Namensraum versehen und per Klick umkehrbar — Talon rührt Ihre bestehenden Firewall-Regeln nie an; Loopback wird niemals blockiert',
      'Sieht auch die eingehende Angriffsfläche (lauschend auf 0.0.0.0 vs. 127.0.0.1); moderne PySide6-GUI unter Windows + eine `talon`-CLI unter Linux',
    ],
    definition:
      'Strix Talon ist eine kostenlose, quelloffene, App-basierte Ausgangs-Firewall und ein Egress-Monitor für Windows und Linux, die in Echtzeit anzeigt, welche Anwendung mit welcher entfernten Adresse spricht, und mit der Sie jede App oder Adresse — oder allen ausgehenden Verkehr — blockieren können, durchgesetzt über die OS-eigene Firewall, ohne Kernel-Treiber.',
    notFor: [
      'Es liefert keinen Kernel-Treiber — es steuert Ihre eingebaute OS-Firewall (Windows Defender Firewall / nftables).',
      'Es zeigt in v1 keine Live-Pop-ups zum Erlauben/Verweigern von Verbindungen.',
      'Das Blockieren pro App gibt es nur unter Windows; unter Linux blockiert es nach Zieladresse.',
    ],
    faq: [
      ['Worin unterscheidet sich das von Little Snitch oder GlassWire?', 'Talon ist quelloffen, telemetriefrei und läuft unter Windows UND Linux (Little Snitch gibt es nur für macOS und kostenpflichtig; GlassWire ist Closed Source). Entscheidend: Es überträgt die Durchsetzung an Ihre eingebaute OS-Firewall, statt einen Kernel-Treiber mitzuliefern, und jede Regel ist ein einfacher, prüfbarer Firewall-Eintrag, den Sie einsehen und zurücksetzen können.'],
      ['Kann es mich von meinem eigenen Rechner aussperren?', 'Nein. Loopback ist immer ausgenommen, der Kill-Switch hält localhost (und optional Ihr LAN) erreichbar, jede Regel ist als StrixTalon-* mit einem Namensraum versehen / liegt in einer privaten nftables-Tabelle, und ein Klick (oder `sudo talon revert`) entfernt alles, was Talon hinzugefügt hat, ohne Ihre übrigen Firewall-Regeln anzutasten. Hinweis: Live-Pop-ups zum „Erlauben/Verweigern dieser neuen Verbindung“ sind in v1 nicht vorgesehen; das Blockieren pro App gibt es nur unter Windows (Linux blockiert nach Adresse).'],
    ],
    seoTitle: 'Strix Talon — App-basierte Ausgangs-Firewall (Windows und Linux)',
    seoDescription: 'Sehen Sie den ausgehenden Datenverkehr jeder App und blockieren Sie, was Sie nicht vertrauen — eine quelloffene, App-basierte Egress-Firewall + Verbindungsmonitor für Windows und Linux. Durchgesetzt über Ihre OS-Firewall (kein Kernel-Treiber), mit einem globalen Kill-Switch. Keine Telemetrie, MIT.',
    creditsNote: 'Strix Talon erfasst Sockets mit psutil, baut seine Oberfläche mit PySide6 und setzt über Ihre OS-Firewall durch — es teilt keinen Code mit Little Snitch / GlassWire / OpenSnitch; sie werden nur als Inspiration genannt.',
  },
};

export const contribute = {
  h1: 'Bauen Sie ein Werkzeug. Machen Sie es zu einem Teil von Strix.',
  lead:
    'Strix ist eine Suite, kein geschlossener Garten. Wenn Sie ein quelloffenes Datenschutz- oder Sicherheitswerkzeug gebaut haben, das nach denselben Regeln lebt — standardmäßig offline, ohne jede Telemetrie, wirklich prüfbar —, können Sie es vorschlagen. Sobald es dieselbe Sicherheitsprüfung und Härtung durchläuft wie jedes Strix-Werkzeug, erscheint es unter dem Dach von Strix: mit einem eigenen Repository, einer Seite auf dieser Website in 13 Sprachen und mit Veröffentlichungen, die Prüfsummen und eine Attestierung tragen.',
  badge: 'Offen für Werkzeuge der Community',
  ctaTop: 'Werkzeug einreichen',
  updatedLabel: 'Zuletzt aktualisiert',
  steps: {
    h2: 'So funktioniert es',
    sub: 'Vier Schritte von Ihrem Repository zu einem veröffentlichten Strix-Werkzeug — und Sie behalten die ganze Zeit über die Urheberschaft und das Copyright.',
    list: [
      { n: '01', t: 'Bauen Sie Ihr Werkzeug', d: 'Schreiben Sie es in einer beliebigen Sprache, für Windows und/oder Linux, unter einer MIT-kompatiblen Lizenz. Erfüllen Sie die folgenden Kriterien: offline, keine Telemetrie, eine Aufgabe, die gut erledigt wird.' },
      { n: '02', t: 'Reichen Sie es ein', d: 'Öffnen Sie auf GitHub ein Einreichungs-Issue mit einem Link zu Ihrem Repository, einer Beschreibung, was es tut, den Zielplattformen und der Frage, wie es — falls überhaupt — auf das Netzwerk zugreift. Sie benötigen kein Konto bei uns; nur GitHub.' },
      { n: '03', t: 'Sicherheitsprüfung und Härtung', d: 'Wir durchlaufen dieselbe Prüfung, die jedes Strix-Werkzeug bestanden hat: statische Analyse, eine Prüfung der Abhängigkeiten und der Lieferkette, eine gegnerische Code-Prüfung und einen Härtungsdurchlauf. Sie erhalten die Ergebnisse, und wir arbeiten sie gemeinsam ab.' },
      { n: '04', t: 'Es erscheint als Strix', d: 'Nach der Annahme erhält Ihr Werkzeug ein eigenes Repository innerhalb der Strix-Organisation, eine lokalisierte Landingpage auf dieser Website sowie Veröffentlichungen mit SHA-256-Prüfsummen und einer Build-Provenance-Attestierung.' },
    ],
  },
  criteria: {
    h2: 'Was ein Strix-Werkzeug sein muss',
    sub: 'Diese Punkte sind nicht verhandelbar — sie sind die Versprechen, auf denen die gesamte Suite aufbaut. Wenn Ihr Werkzeug bereits nach ihnen lebt, wird es sich sofort zu Hause fühlen.',
    list: [
      { t: 'Quelloffen', d: 'Öffentlicher Quellcode unter der MIT-Lizenz (oder einer MIT-kompatiblen, freizügigen Lizenz). Nichts Verborgenes, nichts Verschleiertes.' },
      { t: 'Standardmäßig offline', d: 'Bei einem Desktop-Werkzeug keine eigenen Netzwerkaufrufe. Ist das Netzwerk die eigentliche Aufgabe des Werkzeugs (recon/OSINT), muss es schlüssellos sein, durch eine Einwilligung abgesichert und klar im Umfang begrenzt.' },
      { t: 'Keine Telemetrie', d: 'Keine Analyse-SDKs, kein Nach-Hause-Funken, keine Konten. Die Daten der Nutzer verlassen niemals deren Rechner.' },
      { t: 'Eine Aufgabe, gut erledigt', d: 'Ein fokussiertes Werkzeug mit sinnvollen Voreinstellungen, einem klaren Umfang und einer ausdrücklichen Angabe dessen, was es bewusst nicht tut.' },
      { t: 'Dokumentiert und testbar', d: 'Ein README, eine SECURITY.md mit einem Bedrohungsmodell und Regressionstests für alles Sicherheitskritische.' },
      { t: 'Minimale Rechte', d: 'Keine Shell-Aufrufe, keine dynamische Codeausführung, Subprozess-Aufrufe ausschließlich per argv, Auflösung von Werkzeugen über absolute Pfade und erhöhte Rechte nur dort, wo sie wirklich erforderlich sind.' },
    ],
  },
  review: {
    h2: 'Die Sicherheitsprüfung, die jede Einreichung durchläuft',
    sub: 'Dieselbe Prüfung, die auch die bestehenden Werkzeuge vor ihrer Veröffentlichung bestanden haben. Nichts wird ausgeliefert, bevor es sie besteht.',
    list: [
      { t: 'Statische Analyse (SAST)', d: 'semgrep, bandit, PSScriptAnalyzer, Roslyn-Analyzer und der jeweiligen Sprache angemessene Linter über die gesamte Codebasis.' },
      { t: 'Prüfung der Abhängigkeiten und der Lieferkette', d: 'Festgeschriebene Versionen, ein SBOM, pip-audit / Dependabot sowie eine Prüfung, dass jede Drittanbieter-Abhängigkeit gerechtfertigt ist.' },
      { t: 'Gegnerische Code-Prüfung', d: 'Ein manueller Durchgang auf der Jagd nach Injection, Path Traversal, SSRF, Rechteausweitung und jeder Schwächung einer Sicherheitskontrolle.' },
      { t: 'Härtung', d: 'Wir schließen die Lücken gemeinsam: minimale Rechte, keine Shell, Eingabevalidierung, im Zweifel sperrende Voreinstellungen und mehrschichtige Verteidigung auf den gefährlichen Pfaden.' },
      { t: 'Provenance bei jeder Veröffentlichung', d: 'Die CI erstellt jede Veröffentlichung, schreibt eine SHA256SUMS-Datei mit SHA-256-Prüfsummen und hängt eine SLSA-Build-Provenance-Attestierung an, sodass jeder Download überprüfbar ist.' },
    ],
  },
  keep: {
    h2: 'Was Sie behalten — und was Sie bekommen',
    sub: 'Ein Beitrag zu Strix bedeutet nicht, dass Sie Ihre Arbeit abtreten.',
    list: [
      { t: 'Ihre Urheberschaft und Ihr Copyright', d: 'Sie bleiben der Autor. Das MIT-Copyright gehört Ihnen; Strix verteilt es und pflegt es gemeinsam mit Ihnen.' },
      { t: 'Ein echtes Publikum', d: 'Eine lokalisierte Landingpage in 13 Sprachen, eine SEO-/GEO-Anbindung und ein Platz im Werkzeugraster und in den Downloads.' },
      { t: 'Eine vertrauenswürdige Release-Pipeline', d: 'Prüfsummen, Attestierung, ein künftiger Weg zur Code-Signierung (SignPath Foundation) und ein Prozess zur Offenlegung von Sicherheitslücken — für Sie eingerichtet.' },
      { t: 'Gemeinsame Pflege', d: 'Issues, Pull Requests und Sicherheitsmeldungen durchlaufen denselben Prozess wie der Rest der Suite. Sie sind nicht auf sich allein gestellt.' },
    ],
  },
  cta: {
    h2: 'Bereit zum Einreichen?',
    p: 'Öffnen Sie ein Einreichungs-Issue mit dem Link zu Ihrem Repository und einer kurzen Beschreibung. Wir nehmen es auf, führen die Prüfung durch und arbeiten von da an mit Ihnen zusammen. Noch nicht bereit? Lesen Sie zuerst den vollständigen Leitfaden für Beiträge.',
    btnSubmit: 'Werkzeug einreichen',
    btnGuide: 'Leitfaden für Beiträge lesen',
    note: 'Für die Einreichung genügt ein GitHub-Konto. Es fällt keine Gebühr an, es gibt keine Beitragsvereinbarung, die Ihnen Ihre Rechte nimmt, und keine Verpflichtung — Sie können sich jederzeit vor der Veröffentlichung zurückziehen.',
  },
  faq: [
    ['Verliere ich das Eigentum an meinem Werkzeug?', 'Nein. Sie behalten die Urheberschaft und das MIT-Copyright. Strix pflegt und verteilt es gemeinsam mit Ihnen, und Sie können sich vor der Veröffentlichung zurückziehen.'],
    ['Welche Sprachen oder Frameworks sind erlaubt?', 'Beliebige. Die bestehende Suite umfasst Python, C#, PowerShell und mehr — entscheidend sind die Lizenz, die Regeln zu Offline-Betrieb und Telemetriefreiheit sowie das Bestehen der Sicherheitsprüfung, nicht der Technologie-Stack.'],
    ['Was, wenn mein Werkzeug das Netzwerk benötigt?', 'Das ist nur dann in Ordnung, wenn das Netzwerk seine eigentliche Aufgabe ist (wie bei den recon/OSINT-Werkzeugen). Es muss dann schlüssellos sein, durch eine ausdrückliche Einwilligung abgesichert, klar im Umfang begrenzt und ausschließlich für autorisierte Nutzung bestimmt — niemals stiller oder Hintergrund-Datenverkehr.'],
    ['Wie lange dauert die Prüfung?', 'Das hängt von der Größe des Werkzeugs ab und davon, wie viele Ergebnisse zutage treten. Kleine, bereits gehärtete Werkzeuge kommen schnell voran; alles, was zerstörerische Operationen oder erhöhte Rechte berührt, wird besonders gründlich geprüft.'],
    ['Was passiert, wenn es nicht besteht?', 'Sie erhalten die vollständigen Ergebnisse und können sie beheben und erneut einreichen. Eine Prüfung, die Probleme findet, zeigt, dass der Prozess funktioniert — genau das ist auch bei den Werkzeugen passiert, die bereits Teil der Suite sind.'],
  ],
};

export const donate = {
  h1: 'Unterstützen Sie Strix — ganz privat.',
  lead:
    'Strix ist kostenlos, MIT-lizenziert und enthält keinerlei Telemetrie — und das wird immer so bleiben. Keine Werbung, keine Konten, nichts wird verkauft. Wenn Ihnen die Werkzeuge Zeit sparen oder Sie sicherer machen, können Sie mit Monero (XMR) etwas beisteuern: privat von Grund auf, genau wie alles hier. Jeder Beitrag fließt in das Hosting, ein Code-Signing-Zertifikat und Entwicklungszeit.',
  badge: 'Datenschutzfreundliche Spenden',
  updatedLabel: 'Zuletzt aktualisiert',
  card: {
    label: 'Monero (XMR)-Adresse',
    scanHint: 'Scannen Sie den QR-Code mit Ihrer Wallet oder kopieren Sie die Adresse unten.',
    copy: 'Adresse kopieren',
    copied: 'Kopiert ✓',
    openWallet: 'In Wallet öffnen',
    qrPending: 'Sobald die Spendenadresse eingerichtet ist, erscheint hier ein QR-Code.',
    notConfigured: 'Die Spendenadresse ist noch nicht hinterlegt — schauen Sie bald wieder vorbei.',
  },
  why: {
    h2: 'Warum Monero?',
    sub: 'Weil ein Datenschutzprojekt nicht verlangen sollte, dass Sie Ihre Privatsphäre aufgeben, um es zu unterstützen.',
    list: [
      { t: 'Privat von Haus aus', d: 'Monero verbirgt Absender, Empfänger und Betrag. Es gibt kein öffentliches Kassenbuch, das eine Spende zu Ihnen zurückverfolgt — passend für eine Suite, die darauf baut, Sie nicht zu verfolgen.' },
      { t: 'Kein Mittelsmann, keine Konten', d: 'Kein Zahlungsdienstleister, keine Anmeldung und kein Drittanbieter-Skript auf dieser Seite. Die Adresse ist alles, was Sie brauchen.' },
      { t: 'Hier wird nichts verfolgt', d: 'Diese Seite lädt keine Analyse und führt keine Netzwerkaufrufe aus. Wir können nicht sehen, wer sie besucht oder wer gespendet hat.' },
    ],
  },
  funds: {
    h2: 'Wohin es fließt',
    sub: 'Ein kleines, unabhängiges Projekt ohne Budget. Jeder Beitrag wird transparent verwendet:',
    list: [
      { t: 'Hosting & Infrastruktur', d: 'Die Website, die Veröffentlichungen und die Prüfsummen online und schnell zu halten.' },
      { t: 'Code-Signing-Zertifikat', d: 'Ein OV/EV-Zertifikat, damit die Installer SmartScreen nicht mehr auslösen — die mit Abstand am häufigsten gewünschte Verbesserung.' },
      { t: 'Entwicklungszeit', d: 'Neue Werkzeuge, Linux-Portierungen, Sicherheitshärtung und die Zusage, alles kostenlos und telemetriefrei zu halten.' },
    ],
  },
  otherWays: {
    h2: 'Weitere Möglichkeiten zu helfen',
    sub: 'Sie können nicht spenden? Diese Wege helfen genauso — und kosten nichts.',
    list: [
      { t: 'Die Repositories auf GitHub mit einem Stern versehen', d: 'Sichtbarkeit und Reputation helfen neuen Nutzern wirklich, die Werkzeuge zu finden und ihnen zu vertrauen.' },
      { t: 'Ein Werkzeug beitragen', d: 'Bauen Sie etwas, das zur Suite passt, und reichen Sie es zur Sicherheitsprüfung ein.' },
      { t: 'Fehler & Fehlalarme melden', d: 'Öffnen Sie Issues, melden Sie Antiviren-Fehlalarme an die Anbieter und helfen Sie anderen in den Diskussionen.' },
    ],
  },
  note: 'Spenden sind freiwillige Geschenke, keine Käufe — es gibt keine Rückerstattung, keine Rechnung und keine Spendenquittung. Bitte geben Sie nur, was Sie problemlos entbehren können. Danke, dass Sie unabhängige, datenschutzorientierte Software am Leben halten.',
};

export const about = {
  h1: 'Über Strix',
  lead:
    'Wir sind eine kleine, unabhängige Gruppe von vier Freunden — Informatikstudenten in Deutschland —, die genug hatten von „Datenschutz“-Werkzeugen, die man gar nicht wirklich prüfen kann. Strix ist daraus entstanden: eine Sammlung von Datenschutz- und Sicherheitswerkzeugen, die vollständig offline laufen, keinerlei Telemetrie enthalten und Ihnen gehören — zum Lesen, Selbst-Kompilieren und Vertrauen. MIT-lizenziert, für immer kostenlos, kein Unternehmen dahinter und nichts zu verkaufen.',
  badge: 'Unabhängig · quelloffen',
  updatedLabel: 'Zuletzt aktualisiert',
  values: {
    h2: 'Woran wir glauben',
    list: [
      { t: 'Überprüfen, nicht einfach vertrauen', d: 'Jedes Werkzeug ist öffentlicher, MIT-lizenzierter Quellcode mit einem Bedrohungsmodell. Glauben Sie uns nicht einfach — lesen Sie ihn, kompilieren Sie ihn und prüfen Sie ihn selbst.' },
      { t: 'Datenschutzwerkzeuge dürfen Sie nicht ausspähen', d: 'Keine Telemetrie, keine Konten, keine Analyse — nicht einmal auf dieser Website. Ihre Daten verlassen niemals Ihren Rechner.' },
      { t: 'Offline von Grund auf', d: 'Die Desktop-Werkzeuge führen keine eigenen Netzwerkaufrufe aus. Ziehen Sie das Kabel ab, und sie funktionieren weiterhin.' },
      { t: 'Kostenlos, für immer', d: 'Keine kostenpflichtigen Stufen, keine Abonnements, keine Werbung. Sollten wir jemals Spenden oder Fördermittel annehmen, wird das an diesen Versprechen niemals etwas ändern.' },
    ],
  },
  story: {
    h2: 'Warum wir es entwickeln',
    p1: 'Wir wollten, dass die Werkzeuge, die wir selbst nutzen, ehrlich sind: keine Blackboxes, kein „Vertrauen Sie uns“, kein heimliches Sammeln von Daten. Das meiste, was wir brauchten, gab es entweder nicht als Open Source, war nicht plattformübergreifend oder verlangte, dass wir unsere Privatsphäre aufgeben, um sie zu schützen. Also begannen wir zu bauen — ein kleines, fokussiertes, prüfbares Werkzeug nach dem anderen.',
    p2: 'Strix ist ein Herzensprojekt neben dem Studium, das wir in unserer Freizeit pflegen. Es wird immer offen bleiben, und es wird immer ehrlich sagen, was es ist — auch dort, wo es noch Schwächen hat (die Installer sind noch nicht code-signiert, und wir sagen das auf der Überprüfungsseite ganz offen).',
  },
  cta: {
    h2: 'Mitmachen',
    p: 'Strix steht allen offen. Lesen Sie den Quellcode, melden Sie einen Fehler, schlagen Sie ein Werkzeug vor oder reichen Sie Ihr eigenes zur Sicherheitsprüfung ein. Wenn es Ihnen hilft, hilft ein Stern auf GitHub anderen wirklich, es zu finden.',
    btnGithub: 'Auf GitHub ansehen',
    btnContribute: 'Ein Werkzeug beitragen',
  },
};

export const alternatives = {
  h1: 'Quelloffene Alternativen',
  lead:
    'Sie nutzen bereits ein Closed-Source- oder kostenpflichtiges Datenschutzwerkzeug? Gut möglich, dass Strix einen quelloffenen, offline nutzbaren Ersatz ganz ohne Telemetrie bietet — für immer kostenlos, MIT-lizenziert und offen für Ihre Prüfung. Hier sehen Sie, welches Werkzeug was ersetzt.',
  badge: 'Kostenlose, quelloffene Ersatzlösungen',
  updatedLabel: 'Zuletzt aktualisiert',
  altToLabel: 'Quelloffene Alternative zu',
  viewTool: 'Werkzeug ansehen →',
  ctaLead: 'Keine Entsprechung gefunden?',
  ctaText: 'Durchstöbern Sie die gesamte Werkzeugsammlung oder schlagen Sie ein Werkzeug vor, das wir entwickeln sollten.',
  ctaAll: 'Alle Werkzeuge',
  ctaSuggest: 'Ein Werkzeug vorschlagen',
};

export default { ui, categories, security, apps, contribute, donate, about, alternatives };
