// Italian (it-IT) translation. Mirrors the structure of en.js / site.js.
//   - `ui`        : all site-chrome / marketing strings (re-exported as `t`).
//   - `categories`: display labels for the app-category chips (canonical keys stay English).
//   - `security`  : the /security (Verify) page prose.
//   - `apps`      : per-locale overrides for each app's content.

export const ui = {
  metaDescription:
    'Strumenti di privacy e sicurezza open source e offline per Windows e Linux. Nessuna telemetria, nessun account, con licenza MIT. Rimozione dei metadati, cancellazione sicura, blocco di pubblicità e tracker, firewall in uscita per applicazione, monitoraggio del sistema e altro ancora.',
  homeSeoTitle: 'Strix Advanced Tools — Strumenti di privacy e sicurezza open source',
  homeSeoDescription:
    'Nove strumenti di privacy e sicurezza open source e offline per Windows e Linux: rimozione dei metadati e archiviazione AES-256, cancellazione sicura dei dischi, blocco di pubblicità e tracker tramite file hosts, firewall in uscita per applicazione, monitor di sistema, informazioni sull’hardware, sentinella di sicurezza, oltre a strumenti di ricognizione e OSINT. Nessuna telemetria. Con licenza MIT. Gratuiti per sempre.',
  downloadsSeoTitle: 'Scarica Strix Advanced Tools — Windows e Linux',
  downloadsSeoDescription:
    'Scarica la suite Strix Advanced Tools per Windows e Linux. Installer diretti e pacchetti .deb da GitHub Releases, ciascuno con un checksum SHA-256. Gratuiti e open source.',
  keywordsGlobal:
    'strumenti di sicurezza open source, strumenti di privacy, windows, linux, rimozione metadati, rimozione exif, cancellazione sicura del disco, nist 800-88, ad blocker tramite file hosts, blocco tracker, blocco telemetria, dns sinkhole, firewall per applicazione, firewall in uscita, monitor del traffico in uscita, kill switch, alternativa a little snitch, widget monitor di sistema, informazioni hardware, monitor di sicurezza, osint, ricognizione, offline, nessuna telemetria, licenza MIT',
  tagline: 'Strumenti di privacy e sicurezza open source per Windows e Linux.',
  heroBadge: 'Open source · MIT · Windows e Linux',
  heroTitle: 'Non fidarti degli strumenti di sicurezza. Leggili.',
  heroSubtitle:
    'Strix Advanced Tools è una suite open source di utilità per la privacy e la sicurezza per Windows e Linux. Ognuna funziona completamente offline, non include alcuna telemetria ed è tua: da verificare, compilare e approvare — gratuita per sempre, con licenza MIT.',
  browse: 'Esplora gli strumenti',
  getStarted: 'Scarica',
  viewOnGithub: 'Metti una stella su GitHub',
  nav: { apps: 'Strumenti', downloads: 'Download', github: 'GitHub', security: 'Sicurezza', contribute: 'Contribuisci', donate: 'Dona', about: 'Chi siamo', alternatives: 'Alternative' },
  allApps: 'Gli strumenti',
  allAppsLead: 'Nove utilità mirate. Ciascuna fa una cosa sola, e la fa bene, offline.',
  features: 'Cosa fa',
  screenshots: 'Uno sguardo all’interno',
  faqTitle: 'Domande frequenti',
  download: 'Scarica',
  downloadCta: 'Ottieni',
  otherDownloads: 'Tutte le piattaforme e i checksum',
  source: 'Codice sorgente',
  docs: 'Documentazione',
  readme: 'Leggi la documentazione',
  install: 'Installazione',
  installWindows: 'Windows',
  installLinux: 'Linux (Ubuntu / Debian)',
  security: 'Sicurezza',
  securityNote:
    'Offline per impostazione predefinita, senza interprete di comandi, senza codice dinamico, privilegio minimo — e ogni riga è con licenza MIT e aperta alla verifica.',
  category: 'Categoria',
  backHome: 'Tutti gli strumenti',
  verified: 'I checksum (SHA-256) vengono pubblicati a ogni versione, così puoi verificare il tuo download.',
  unsigned:
    'I binari non sono ancora firmati digitalmente, quindi Windows SmartScreen potrebbe avvisarti al primo avvio — scegli «Ulteriori informazioni → Esegui comunque», oppure verifica prima il checksum. Non disattivare mai il tuo antivirus.',
  whyTitle: 'Costruito su quattro promesse',
  whyLead: 'Non è uno slogan — ogni promessa è verificabile nel codice sorgente prima di concederle la tua fiducia.',
  why: [
    { k: 'offline', title: 'Offline per progettazione', text: 'Nessuna chiamata di rete, nessuna telemetria, nessun account. I tuoi dati non lasciano mai la macchina su cui risiedono.', proof: 'un grep del codice sorgente: zero socket in uscita negli strumenti desktop' },
    { k: 'hardened', title: 'Rafforzato e testato', text: 'Nessuna chiamata a un interprete di comandi, nessun codice dinamico, privilegio minimo — e i percorsi critici per la sicurezza sono coperti da veri test di regressione.', proof: 'ad esempio, il cancellatore di dischi rifiuta il disco di sistema in 18 test unitari' },
    { k: 'cross', title: 'Windows e Linux', text: 'Veri programmi di installazione guidata su Windows e pacchetti nativi su Linux per gli strumenti desktop; gli strumenti di ricognizione/OSINT di Kali sono forniti come script Linux.', proof: 'versioni con checksum e attestazione di provenienza della build GitHub' },
    { k: 'open', title: 'Davvero aperto', text: 'Con licenza MIT, senza condizioni nascoste. Leggilo, compilalo tu stesso, verificalo o invia una pull request.', proof: 'ogni repository è pubblico su GitHub — nulla di nascosto' },
  ],
  downloadsTitle: 'Download',
  downloadsLead:
    'Scarica l’ultima versione per la tua piattaforma. Ogni download è un file diretto da GitHub Releases, fornito con un checksum SHA-256.',
  homeFaq: [
    ['Strix Advanced Tools sono davvero gratuiti e open source?', 'Sì. Ogni strumento è con licenza MIT e gratuito per sempre — puoi leggere il codice sorgente, compilarlo tu stesso e contribuire. Nessun piano a pagamento, nessun account, nessun abbonamento e nessuna pubblicità, né ora né mai.'],
    ['Chi realizza Strix e perché dovrei fidarmi?', 'Strix Advanced Tools è un progetto open source indipendente — non un’azienda che vende i tuoi dati. Non devi concedere la tua fiducia ciecamente: ogni strumento è un repository GitHub pubblico con licenza MIT, così tu (o chiunque) puoi leggere ogni riga, compilarlo tu stesso dal codice sorgente e confermare che fa esattamente ciò che dichiara. La fiducia va verificata, non richiesta. Ogni repository include inoltre un file SECURITY.md che descrive il modello di minaccia e un canale di divulgazione privato.'],
    ['Quale strumento Strix è l’alternativa open source all’app che già uso?', 'Talon è un firewall in uscita per applicazione — un’alternativa open source a Little Snitch e GlassWire. Sinkhole è un blocco di pubblicità e tracker tramite file hosts — un’alternativa locale, su una singola macchina, a Pi-hole. MetaVault rimuove i metadati e crea archivi AES-256 — un’alternativa alle interfacce grafiche di ExifTool, a MAT2 e agli strumenti di rimozione EXIF online. Disk Cleaner cancella i dischi in modo sicuro — un’alternativa a DBAN e alla cancellazione di CCleaner. Pulse è un widget monitor di sistema (alternativa ai gadget Rainmeter/HWiNFO), Inspector fornisce informazioni sull’hardware (alternativa a CPU-Z/Speccy) e Sentinel è una sentinella di sicurezza. Ciascuno funziona offline senza alcuna telemetria.'],
    ['Questi strumenti inviano i miei dati da qualche parte?', 'No. Ogni strumento desktop funziona interamente sulla tua macchina, non effettua alcuna chiamata di rete propria e non include alcuna telemetria — i tuoi dati non lasciano mai il tuo dispositivo. Gli unici strumenti che utilizzano la rete sono quelli la cui funzione stessa è la rete (gli strumenti di ricognizione/OSINT), e anche quelli usano solo API pubbliche senza chiave, subordinate al consenso e limitate da timeout.'],
    ['Servono competenze tecniche per usarli?', 'Non per le applicazioni desktop — MetaVault, Pulse, Inspector, Sentinel, Sinkhole e Talon dispongono tutti di un’interfaccia grafica pulita, con impostazioni predefinite sensate e conferme prima di qualsiasi azione distruttiva. Gli strumenti di ricognizione (Vantage, Archer) funzionano da riga di comando, per chi si trova a proprio agio in un terminale.'],
    ['Di quale strumento ho bisogno?', 'Usa la ricerca e i filtri sopra la griglia degli strumenti per restringere per piattaforma (Windows / Linux) e per categoria (Privacy, Sicurezza, Sistema, OSINT…), oppure premi ⌘K / Ctrl-K ovunque per andare direttamente a uno strumento. Ogni pagina di uno strumento spiega esattamente cosa fa — e cosa deliberatamente non fa.'],
    ['Come verifico che un download sia autentico?', 'Ogni versione GitHub pubblica un checksum SHA-256 (SHA256SUMS) accanto ai file. Scaricalo, confronta l’hash del tuo file e saprai che il binario è esattamente ciò che è stato pubblicato — senza alcuna manomissione. Questo conta più di qualsiasi firma del codice.'],
    ['Quali piattaforme sono supportate?', 'Windows e Linux (Ubuntu / Debian). Gli strumenti desktop sono forniti con un installer Windows e un pacchetto Linux; gli strumenti di ricognizione/OSINT Vantage e Archer sono riservati a Linux/Kali.'],
    ['Esiste una versione macOS o mobile?', 'Non ancora ufficialmente — le piattaforme supportate sono Windows e Linux (Ubuntu / Debian), e non esiste alcuna versione iOS o Android. Poiché gli strumenti basati su Python (MetaVault, Pulse, Sentinel, Sinkhole, Talon) sono open source e multipiattaforma, potrebbero benissimo funzionare su macOS partendo dal codice sorgente, ma ciò non è né supportato né testato. Una versione macOS nativa è nella roadmap, non è un prodotto già disponibile.'],
    ['Perché Windows mostra un avviso di «editore sconosciuto»?', 'Gli installer non sono ancora firmati digitalmente, quindi SmartScreen mostra un avviso al primo avvio. Scegli «Ulteriori informazioni → Esegui comunque», oppure verifica il checksum SHA-256 pubblicato con ogni versione. Non disattivare mai il tuo antivirus per eseguirli — non dovresti mai doverlo fare.'],
    ['L’uso degli strumenti di ricognizione / OSINT è legale?', 'Solo contro sistemi che possiedi o che sei esplicitamente autorizzato a testare — un laboratorio di addestramento intenzionalmente vulnerabile, una sfida CTF o un incarico con autorizzazione scritta. Sia Vantage sia Archer mostrano una conferma di consenso una tantum e sono strettamente passivi / a uso esclusivamente autorizzato. Eseguire scansioni o profilazioni senza autorizzazione può essere illegale.'],
    ['Posso segnalare un bug o contribuire?', 'Assolutamente — ogni strumento è un repository pubblico separato su GitHub con un file SECURITY.md, modelli per le segnalazioni e una guida per contribuire. I problemi di sicurezza dispongono di un canale di divulgazione privato; nuove funzionalità e correzioni sono benvenute sotto forma di pull request.'],
  ],
  faqSearchPlaceholder: 'Cerca tra le domande…',
  toolsFilterAll: 'Tutti',
  toolsSearchPlaceholder: 'Cerca strumenti per nome, funzione o parola chiave…',
  toolsNoMatch: 'Nessuno strumento corrisponde — prova a reimpostare i filtri.',
  footerTagline: 'Strumenti di privacy e sicurezza open source.',
  footerNote: 'Realizzato per chi tiene alla propria privacy.',
  footerCols: { product: 'Strumenti', resources: 'Risorse', about: 'Progetto' },
  langLabel: 'Lingua',
  stats: { tools: 'strumenti', platforms: 'piattaforme', telemetry: 'telemetria', license: 'licenza' },
  faqNoMatch: 'Nessuna domanda corrisponde — prova con parole diverse.',
  // Downloads page section headings
  dl: { allTools: 'Tutti gli strumenti — Windows e Linux', verify: 'Verifica il tuo download' },
  // App-page fixed labels ({name} is replaced with the tool name)
  app: {
    price: 'Prezzo',
    priceVal: 'Gratuito — open source (MIT)',
    platforms: 'Piattaforme',
    category: 'Categoria',
    builtWith: 'Realizzato con',
    altTo: 'Alternativa open source a',
    telemetry: 'Telemetria',
    telemetryVal: 'Nessuna — completamente offline',
    updated: 'Aggiornato',
    notDo: 'Cosa {name} deliberatamente non fa',
    poweredBy: 'Basato sull’open source',
    fullAck: 'Ringraziamenti completi e link →',
    related: 'Strumenti Strix correlati',
    winInstall: 'Scarica il programma di installazione guidata ed eseguilo — vengono creati per te i collegamenti nel menu Start e un programma di disinstallazione.',
    dangerFallback: 'Questo strumento distrugge definitivamente i dati e l’operazione è irreversibile. Leggi la guida alla sicurezza prima dell’uso.',
    copy: 'Copia',
    copied: 'Copiato ✓',
    glance: 'in sintesi',
  },
};

export const categories = {
  Privacy: 'Privacy',
  System: 'Sistema',
  Security: 'Sicurezza',
  Diagnostics: 'Diagnostica',
  Recon: 'Ricognizione',
  OSINT: 'OSINT',
};

export const security = {
  h1: 'Verificaci — non limitarti a fidarti.',
  lead:
    'Strix Advanced Tools sono gratuiti, open source (MIT) e concepiti per funzionare completamente offline. I nostri binari Windows non sono ancora firmati digitalmente con un certificato a pagamento — siamo un piccolo progetto indipendente e senza budget, e preferiamo dirlo chiaramente piuttosto che nasconderlo. Poiché ogni strumento è open source, non devi crederci sulla parola per nulla. Ecco come verificarlo tu stesso.',
  boldNotSigned: 'non sono ancora firmati digitalmente con un certificato a pagamento',
  updatedLabel: 'Ultimo aggiornamento',
  why: [
    { t: 'Il codice sorgente è pubblico', d: 'Ogni strumento è un repository GitHub pubblico con licenza MIT. Leggi ogni riga, ricompilalo tu stesso e conferma che fa esattamente ciò che dichiara.' },
    { t: 'I binari sono attestati', d: 'Ogni versione include un’attestazione di provenienza della build GitHub (SLSA Build L2) — una prova crittografica che il file è stato compilato da questo codice sorgente, sui server di GitHub, e non è stato modificato da allora.' },
    { t: 'Nulla comunica di nascosto', d: 'Gli strumenti desktop non effettuano alcuna chiamata di rete. Scollega il cavo di rete e continueranno a funzionare; monitora il tuo traffico in uscita e non ne vedrai alcuno.' },
  ],
  verify: {
    h2: 'Verifica il tuo download',
    sub: 'La verifica è facoltativa — se hai scaricato da una versione GitHub, va già tutto bene. Ma se vuoi esserne certo, ogni versione include un file SHA256SUMS, ed ecco come confrontarlo. Sostituisci il nome file d’esempio con lo strumento che hai scaricato.',
    anyOs: 'Qualsiasi sistema operativo',
    winStt: 'Verifica il checksum',
    winIntro: 'Nella cartella in cui hai salvato il download, esegui PowerShell:',
    winExp: 'Confronta l’hash visualizzato con la riga corrispondente in SHA256SUMS. Se sono identici, il file è, byte per byte, quello che abbiamo pubblicato:',
    nixStt: 'Verifica il checksum',
    nixIntro: 'Metti il download e il suo file SHA256SUMS nella stessa cartella, poi:',
    nixExp: 'Una risposta di una sola parola per ogni file — vuoi ottenere OK:',
    provStt: 'Verifica la provenienza della build',
    provIntro: 'Più efficace di un checksum: dimostra che il binario è stato compilato dal nostro codice sorgente pubblico, nella nostra CI pubblica. Richiede GitHub CLI 2.49+:',
    provExp: 'Una riga verde di successo che indica l’esatto repository sorgente che ha prodotto il file:',
    note: 'I checksum vengono pubblicati in ogni GitHub Release e replicati via HTTPS — esempio SHA256SUMS. L’attestazione di provenienza è archiviata su GitHub, non da noi: quindi né noi né un mirror di download compromesso possiamo falsificarla.',
  },
  data: {
    h2: 'Quali dati lasciano la tua macchina',
    sub: 'In breve: per gli strumenti desktop, nessuno. Ecco il dettaglio completo — e ogni riga può essere confermata con una cattura dei pacchetti.',
    thCategory: 'Categoria',
    thWhat: 'Di cosa si tratta',
    thWhere: 'Dove va a finire',
    rows: [
      ['I file che elabori', 'Metadati, contenuto dei dischi, archivi — letti e scritti sul posto, sulla tua macchina.', 'Mai caricati. Nulla viene inviato da nessuna parte.'],
      ['I dettagli del tuo sistema', 'Nome host, nome utente, numeri di serie, indirizzi IP, hardware — mostrati solo all’interno dell’applicazione.', 'Visualizzati localmente; mai trasmessi.'],
      ['Impostazioni e report', 'Preferenze, log, report HTML/PDF.', 'Salvati su disco (%LOCALAPPDATA% / ~/.config); mai sincronizzati con un server.'],
      ['Statistiche di utilizzo e di crash', 'Nessuna. Non c’è alcun SDK di analisi, nessuna telemetria, nessuna comunicazione nascosta.', 'Non viene mai raccolto nulla.'],
      ['Traffico di rete in uscita (strumenti desktop)', 'MetaVault, Pulse, Inspector, Sentinel, Sinkhole, Talon.', 'Zero socket in uscita. Disconnetti la rete — continuano a funzionare.'],
      ['Traffico di rete in uscita (strumenti di ricognizione)', 'Vantage e Archer — la cui funzione stessa è la rete.', 'Solo API pubbliche senza chiave che avvii esplicitamente, dopo una conferma di consenso, limitate da timeout.'],
    ],
  },
  av: {
    h2: 'Avvisi dell’antivirus e di SmartScreen',
    intro1: 'Poiché le nostre applicazioni Windows non sono firmate e sono impacchettate con PyInstaller, Windows SmartScreen potrebbe indicare',
    intro2: 'e una manciata dei circa 70 motori antivirus potrebbe segnalare l’installer.',
    intro3: 'È un comportamento previsto per un software recente, non firmato e open source — si tratta di un’euristica generica legata al modo in cui l’applicazione è impacchettata, non del rilevamento di un vero malware.',
    unknownPublisher: 'editore sconosciuto',
    notCommon: 'poco scaricato,',
    list: [
      { b: 'Perché accade:', r: 'il bootloader di PyInstaller è un formato di impacchettamento comune (lo usano anche i malware), un file nuovissimo non ha alcuna reputazione di download e i binari non firmati subiscono una penalità di tipo «sospetto fino a prova contraria».' },
      { b: 'La vera prova', r: 'sono il checksum e l’attestazione di provenienza qui sopra, oltre al codice sorgente che puoi leggere — non l’euristica di un qualsiasi fornitore.' },
      { b: 'Cosa facciamo:', r: 'segnaliamo i falsi positivi ai fornitori man mano che compaiono e ci stiamo candidando al programma gratuito di firma del codice della SignPath Foundation destinato ai progetti open source, che adotteremo man mano che la reputazione crescerà.' },
      { b: 'Non disattivare mai il tuo antivirus.', r: 'In caso di dubbio, verifica il checksum oppure esegui lo strumento dal codice sorgente.' },
    ],
    tiny: 'Forniamo un link a una scansione VirusTotal in tempo reale per ogni build non appena esce una versione, così puoi constatare il risultato attuale di persona. Non pubblicheremo mai lo screenshot di una «scansione pulita» né dichiareremo «zero rilevamenti» — un link in tempo reale su cui puoi cliccare vale più di uno screenshot che diventa obsoleto alla build successiva.',
  },
  read: {
    h2: 'Leggi il codice sorgente',
    sub: 'La garanzia più forte di tutte. Esegui un grep in qualsiasi repository su socket, urllib, requests o http e constata di persona cosa utilizza — e cosa non utilizza — la rete.',
    view: 'Vedi il codice sorgente ↗',
  },
  threat: {
    h2: 'Modello di minaccia',
    items: [
      ['Da cosa Strix ti protegge', 'La fuga di dati attraverso i metadati dei file, i dati recuperabili su dischi dismessi, i domini di tracker/telemetria/pubblicità, le connessioni in uscita silenziose, i programmi ad avvio automatico e i dispositivi sconosciuti, oltre agli strumenti closed source che non puoi ispezionare.'],
      ['Cosa Strix NON è', 'Non è un antivirus/EDR, non è una sandbox e non è una difesa contro un sistema operativo compromesso o un malware già in esecuzione con privilegi di amministratore. Gli strumenti desktop fanno emergere informazioni e agiscono su tuo comando; non combattono le minacce attive in tempo reale.'],
      ['Perimetro di fiducia', 'La provenienza dimostra che un download proviene, senza modifiche, da questo codice sorgente pubblico tramite la CI di GitHub. Non dimostra che il codice sorgente sia innocuo — a questo serve il codice MIT aperto, che puoi leggere e ricompilare.'],
    ],
  },
  report: {
    h2: 'Hai trovato una vulnerabilità?',
    p: 'Segnalala in privato — non aprire una segnalazione pubblica per un problema di sicurezza. Ogni repository dispone di un file SECURITY.md che descrive il modello di minaccia e un canale di divulgazione coordinata, e la segnalazione privata delle vulnerabilità di GitHub è attiva. Non adotteremo alcuna ritorsione e ti daremo credito, se lo desideri.',
    btnPolicy: 'Politica di sicurezza',
    btnRepos: 'Tutti i repository',
  },
};

export const apps = {
  'strix-metavault': {
    tagline: 'Cancella i metadati nascosti, poi blocca i tuoi file con la crittografia AES-256.',
    summary:
      'Ogni foto, documento e PDF che condividi contiene tracce nascoste — coordinate GPS, il tuo nome, il dispositivo utilizzato, la cronologia delle modifiche. Strix MetaVault rimuove tutto questo, poi sigilla facoltativamente i file ripuliti in un archivio 7-Zip cifrato con AES-256, con nomi dei file nascosti e una password casuale monouso. Completamente offline, senza account, senza telemetria.',
    features: [
      'Rimuove i dati EXIF, GPS, IPTC e XMP dalle immagini; autore/azienda/cronologia dai file Office e PDF',
      'Archivio AES-256 facoltativo, con nomi dei file cifrati e nome di output casuale',
      'Genera una password monouso robusta, mai scritta su disco né nei log',
      'Rifiuta le password personalizzate deboli; protetto dagli attacchi tramite link simbolici e dalle zip bomb',
      'I tuoi file originali non vengono mai modificati — tutto avviene su copie',
    ],
    definition:
      'Strix MetaVault è uno strumento gratuito e open source di rimozione dei metadati e cifratura dei file per Windows e Linux, che elimina i metadati nascosti EXIF/GPS e dei documenti, poi blocca facoltativamente i tuoi file in un archivio cifrato con AES-256 — completamente offline, senza account e senza telemetria.',
    notFor: [
      'Non carica mai i tuoi file — tutta la pulizia avviene localmente, a differenza degli strumenti di rimozione dei metadati online.',
      'Non implementa una propria crittografia: la cifratura è delegata al collaudato 7-Zip AES-256.',
      'Non è un servizio cloud e non richiede alcun account.',
    ],
    faq: [
      ['Funziona senza 7-Zip o ExifTool?', 'I file JPEG e PNG vengono ripuliti dal motore integrato. Per tutti gli altri formati e per l’archiviazione cifrata, installa 7-Zip ed ExifTool (oppure posizionali accanto all’applicazione).'],
      ['Posso recuperare una password di un archivio smarrita?', 'No. La password viene mostrata una sola volta e non viene mai memorizzata. Salvala immediatamente in un gestore di password — senza di essa la cifratura è davvero inviolabile.'],
    ],
    seoTitle: 'Strix MetaVault — Rimozione dei metadati e cifratura dei file',
    seoDescription: 'Strumento gratuito e open source per rimuovere i metadati EXIF/GPS e dei documenti, poi bloccare i tuoi file in un archivio cifrato con AES-256. Offline, senza telemetria. Windows e Linux.',
  },
  'strix-pulse-monitor': {
    tagline: 'Un monitor immediato, sempre in primo piano, per tutta la tua macchina.',
    summary:
      'Un elegante widget da desktop senza cornice che fluttua sopra il tuo lavoro e mostra in tempo reale l’utilizzo di CPU, GPU, RAM e disco, insieme alla velocità di download e upload della rete in tempo reale — aggiornato ogni secondo. Trascinalo dove vuoi, fissalo al suo posto o riducilo nell’area di notifica. Nessun accesso di rete proprio, nessuna telemetria.',
    features: [
      'Carico di CPU, GPU, RAM e archiviazione in tempo reale, oltre alla velocità di rete, una volta al secondo',
      'Letture della GPU da NVIDIA, dai contatori delle prestazioni di Windows o dal sysfs AMD su Linux',
      'Widget «vetro» senza cornice che puoi trascinare, fissare o nascondere nell’area di notifica',
      'Ricorda la sua posizione; le impostazioni vengono convalidate e scritte in modo atomico',
    ],
    definition:
      'Strix Pulse Monitor è un widget da desktop gratuito e open source per il monitoraggio del sistema, per Windows e Linux, che mostra in tempo reale l’utilizzo di CPU, GPU, RAM, disco e rete in un pannello «vetro» sempre in primo piano — offline, senza telemetria.',
    notFor: [
      'Non comunica con alcun server e non raccoglie dati di utilizzo.',
      'È un monitor immediato in tempo reale, non una suite di benchmark (vedi Strix Inspector per i benchmark).',
      'Non richiede privilegi di amministratore per funzionare.',
    ],
    faq: [
      ['Perché la riga della GPU mostra N/A?', 'Le GPU Intel su Linux richiedono strumenti con privilegi, quindi il widget mostra N/A invece di chiedere i privilegi di root. NVIDIA e AMD sono supportate da subito.'],
      ['Può avviarsi con la mia sessione?', 'Sì — su Windows aggiungi un collegamento alla cartella Esecuzione automatica; su Linux avvia l’installer con --autostart.'],
    ],
    seoTitle: 'Strix Pulse Monitor — Widget CPU/GPU/RAM e rete',
    seoDescription: 'Un elegante widget da desktop, sempre in primo piano, che mostra in tempo reale l’utilizzo di CPU, GPU, RAM, disco e rete. Open source, offline, senza telemetria. Windows e Linux.',
  },
  'strix-sentinel': {
    tagline: 'Scopri cosa viene eseguito, osserva e ascolta sulla tua macchina.',
    summary:
      'Una sentinella locale e offline che risponde a cinque domande: cosa si avvia con la tua macchina, quali nuovi processi compaiono, quale applicazione utilizza il tuo microfono o la tua fotocamera, chi ha effettuato l’accesso e quali dispositivi sconosciuti si trovano sulla tua rete. Un’interfaccia grafica scura ed essenziale su Windows; una CLI scriptabile su Linux. Nulla lascia mai il tuo computer.',
    features: [
      'Controllo dell’avvio che segnala qualsiasi elemento nuovo rispetto alla tua configurazione di riferimento approvata',
      'Monitoraggio in tempo reale dei processi appena avviati, con i percorsi completi degli eseguibili',
      'Rileva quale applicazione sta attualmente utilizzando il tuo microfono o la tua fotocamera',
      'Controllo degli accessi e sorveglianza della rete locale che segnala gli indirizzi MAC dei dispositivi sconosciuti',
    ],
    definition:
      'Strix Sentinel è un monitor di sicurezza gratuito, open source e offline per Windows e Linux, che verifica cosa si avvia con la tua macchina, monitora i nuovi processi, rileva l’uso del microfono/della fotocamera, controlla gli accessi e segnala i dispositivi sconosciuti sulla tua rete — senza alcun traffico di rete in uscita proprio.',
    notFor: [
      'Non è un antivirus né un EDR — fa emergere i cambiamenti affinché tu li valuti; non mette mai in quarantena e non blocca mai.',
      'Non invia mai alcun dato fuori dalla tua macchina.',
      'L’edizione Linux è una CLI scriptabile per progettazione (senza interfaccia grafica).',
    ],
    faq: [
      ['Il controllo degli accessi richiede privilegi di amministratore?', 'Sì — la lettura del registro di sicurezza richiede i privilegi di amministratore su Windows e di root su Linux. Tutti gli altri controlli vengono eseguiti senza privilegi.'],
      ['Esiste un’interfaccia grafica per Linux?', 'L’edizione Linux è uno strumento da riga di comando essenziale per progettazione — funziona senza display e tramite SSH, il che è adatto a un monitor di sicurezza. Condivide lo stesso collaudato motore di rilevamento dell’interfaccia grafica di Windows.'],
    ],
    seoTitle: 'Strix Sentinel — Monitor di sicurezza e privacy offline',
    seoDescription: 'Scopri cosa si avvia e viene eseguito, quale app usa il tuo microfono/la tua fotocamera, controlla gli accessi e individua i dispositivi sconosciuti sulla tua rete. Open source, offline. Interfaccia grafica Windows e CLI Linux.',
  },
  'strix-inspector': {
    tagline: 'Un quadro completo e in sola lettura del tuo hardware — in pochi secondi.',
    summary:
      'Un inventario preciso e in sola lettura della tua macchina — sistema operativo, CPU, memoria fino a ogni singolo modulo DIMM, GPU, dischi, scheda madre, BIOS e batteria — presentato come testo su console, JSON leggibile dalla macchina o un curato dashboard HTML autonomo. Esegue inoltre rapidi benchmark di CPU, memoria e disco. Nessuna rete, nessuna elevazione dei privilegi richiesta.',
    features: [
      'Inventario completo: OS, CPU, memoria per singolo DIMM, GPU, dischi, scheda madre, BIOS, batteria',
      'Tre formati di output: console, JSON e un dashboard HTML chiaro/scuro',
      'Micro-benchmark integrati di CPU, memoria e disco',
      'Funziona su Linux tramite .NET 8, riutilizzando lo stesso parser SMBIOS rafforzato di Windows',
    ],
    definition:
      'Strix Inspector è uno strumento gratuito, open source e in sola lettura per informazioni sull’hardware e benchmark, per Windows e Linux, che cataloga la tua CPU, la RAM per singolo DIMM, la GPU, i dischi, la scheda madre e il BIOS come testo su console, JSON o un dashboard HTML autonomo — senza alcun accesso di rete.',
    notFor: [
      'È rigorosamente in sola lettura — non modifica mai le impostazioni, non esegue overclock e non aggiorna alcun firmware.',
      'Non richiede l’installazione di alcun runtime su Windows né alcuna elevazione dei privilegi per essere eseguito.',
      'Non invia alcun dato da nessuna parte.',
    ],
    faq: [
      ['Devo installare un runtime?', 'Su Windows utilizza il .NET Framework integrato — non c’è nulla da installare. La versione Linux è fornita come binario autonomo.'],
      ['Perché alcuni campi richiedono i privilegi di amministratore?', 'Le dimensioni dei dischi, i dettagli dei moduli DIMM e le stringhe del BIOS provengono da interfacce con privilegi. Senza elevazione lo strumento funziona comunque e si limita a indicare ciò che ha ignorato.'],
    ],
    seoTitle: 'Strix Inspector — Strumento di informazioni hardware e benchmark',
    seoDescription: 'Inventario hardware in sola lettura (CPU, RAM per singolo DIMM, GPU, dischi, BIOS) e benchmark — come testo su console, JSON o un dashboard HTML. Open source. Windows e Linux.',
  },
  'strix-disk-cleaner': {
    tagline: 'Cancella un disco per sempre — con una protezione contro la cancellazione di quello sbagliato.',
    summary:
      'Cancella in modo definitivo e verificabile un intero disco secondo gli standard NIST SP 800-88 e DoD 5220.22-M — ricorrendo al «sanitize» hardware quando possibile, oppure alla sovrascrittura a più passaggi. Una protezione di sicurezza a più livelli rende impossibile selezionare il disco di sistema, e ogni azione distruttiva richiede una conferma digitata. Windows è fornito con un’interfaccia grafica completa e un certificato di distruzione stampabile; Linux è fornito con un cancellatore da riga di comando coperto da test unitari.',
    features: [
      'Una protezione a più livelli: il tuo disco di sistema e qualsiasi disco montato non possono mai essere selezionati',
      '«Sanitize» hardware (blkdiscard, nvme, hdparm) o sovrascrittura a più passaggi',
      'Conferma tramite digitazione della parola ERASE, con una nuova verifica immediatamente prima della scrittura',
      'Logica di sicurezza coperta da test unitari; un certificato di distruzione stampabile su Windows',
    ],
    definition:
      'Strix Disk Cleaner è un cancellatore di dischi sicuro, gratuito e open source, per Windows e Linux, che cancella definitivamente un disco secondo gli standard NIST SP 800-88 e DoD 5220.22-M, con una protezione di sicurezza a più livelli che rende impossibile cancellare il disco di sistema.',
    notFor: [
      'Non può selezionare né cancellare il disco di sistema/di avvio o qualsiasi volume montato — per progettazione.',
      'Cancella interi dischi, non singoli file.',
      'Non effettua alcuna chiamata di rete e non richiede alcun account.',
    ],
    faq: [
      ['Posso cancellare accidentalmente il mio disco Windows/Linux?', 'No. Il disco di sistema e quello di avvio vengono rilevati e nascosti; su Linux qualsiasi disco montato viene rifiutato. Devi inoltre digitare il percorso del dispositivo e la parola ERASE.'],
      ['La sovrascrittura è sufficiente per un SSD?', 'Non in modo affidabile — il wear-levelling della memoria flash può lasciare dati residui. Lo strumento rileva gli SSD e ti indirizza verso un «sanitize» hardware (blkdiscard / nvme), che è completo.'],
    ],
    seoTitle: 'Strix Disk Cleaner — Cancellatore di dischi sicuro (NIST/DoD)',
    seoDescription: 'Cancella definitivamente un disco secondo gli standard NIST SP 800-88 / DoD 5220.22-M, con una protezione a più livelli che non può mai cancellare il disco di sistema. Open source. Interfaccia grafica Windows e CLI Linux.',
  },
  'strix-vantage': {
    tagline: 'Un solo comando esegue un’intera pipeline di ricognizione, sicura per i WAF, sul tuo laboratorio.',
    dangerText: 'Vantage invia traffico di scansione attiva (scansioni delle porte, fuzzing, sonde di vulnerabilità). Usalo SOLO contro sistemi che possiedi o che sei esplicitamente autorizzato a testare — ad esempio il tuo laboratorio locale intenzionalmente vulnerabile. La scansione non autorizzata è illegale nella maggior parte dei paesi.',
    summary:
      'Vantage concatena circa 25 strumenti Kali standard del settore — enumerazione dei sottodomini, verifica di disponibilità, scansioni di porte e TLS, crawling, fuzzing e controlli di vulnerabilità — in un unico comando, con stato in tempo reale nel terminale e un report ordinato. È concepito per affinare le tue competenze di sicurezza web su un laboratorio locale intenzionalmente vulnerabile (o qualsiasi bersaglio che possiedi o che sei autorizzato a testare), con un design «low-and-slow» sicuro per IDS/WAF e un’interfaccia da terminale opzionale.',
    features: [
      'Concatena circa 25 strumenti (nmap, nuclei, httpx, ffuf, katana, sqlmap, …) in un’unica pipeline di ricognizione',
      'Sicuro per IDS/WAF per progettazione: frequenza ridotta + jitter, anziché un martellamento più veloce (profili furtivo/approfondito)',
      'Limita la scansione attiva al tuo bersaglio principale; un rilevamento leggero su tutto il resto',
      'Stato in tempo reale nel terminale + un report formattato; interfaccia TUI Textual opzionale, con un navigatore della cronologia',
      'Rafforzato: senza interprete di comandi (solo argv) e l’installazione automatica è facoltativa, con un avviso sulla catena di approvvigionamento',
    ],
    definition:
      'Strix Vantage è una pipeline di automazione della ricognizione gratuita e open source per Linux, che concatena circa 25 strumenti Kali (nmap, nuclei, httpx, ffuf e altri) in un unico comando sicuro per i WAF, destinato all’addestramento autorizzato ai test di penetrazione sul tuo laboratorio intenzionalmente vulnerabile.',
    notFor: [
      'È riservato esclusivamente ai bersagli autorizzati — una conferma di consenso una tantum lo impone prima di qualsiasi scansione attiva.',
      'Orchestra strumenti a monte; non li impacchetta né li modifica.',
      'È riservato a Linux/Kali (nessuna versione Windows o macOS).',
    ],
    faq: [
      ['Il suo utilizzo è legale?', 'Solo contro sistemi che possiedi o che sei esplicitamente autorizzato a testare — come un’applicazione di addestramento intenzionalmente vulnerabile o un laboratorio di cybersicurezza che controlli. La scansione attiva di sistemi che non ti appartengono è illegale nella maggior parte delle giurisdizioni; sei responsabile del tuo utilizzo.'],
      ['Richiede Kali o i privilegi di root?', 'È pensato per Kali Linux e la sua catena di strumenti standard; sudo abilita le scansioni SYN e l’installer automatico (facoltativo). Funziona su altre distribuzioni Linux quando gli strumenti sono già installati.'],
    ],
    creditsNote: 'Vantage orchestra questi strumenti open source — non li impacchetta né li modifica. Un enorme ringraziamento a ogni progetto a monte.',
    seoTitle: 'Strix Vantage — Automazione della ricognizione per CTF e laboratori di pentest',
    seoDescription: 'Concatena circa 25 strumenti di ricognizione Kali (nmap, nuclei, ffuf, httpx…) in un’unica pipeline sicura per i WAF, destinata all’addestramento autorizzato al pentest su un laboratorio locale intenzionalmente vulnerabile. Open source.',
  },
  'strix-archer': {
    tagline: 'OSINT passivo per sfide CTF e bersagli di laboratorio autorizzati.',
    dangerText: 'Strix Archer esegue la raccolta OSINT e mostra una conferma di consenso una tantum. Usalo SOLO contro sfide CTF / personaggi fittizi o bersagli che possiedi o che sei autorizzato a testare. Profilare persone reali senza il loro consenso può essere illegale.',
    summary:
      'Strix Archer combina un motore OSINT senza dipendenze, basato unicamente sulla libreria standard, con wrapper per strumenti popolari — utilizzando Sherlock, maigret, holehe, theHarvester e SpiderFoot quando sono installati, e ripiegando sulla propria implementazione in caso contrario. Esegue la ricognizione dei domini (DNS-over-HTTPS, RDAP/WHOIS, sottodomini crt.sh, HTTP + rilevamento delle intestazioni di sicurezza), la ricognizione dell’identità (ricerca di nomi utente a frequenza limitata, OSINT GitHub, Gravatar, ricerca di violazioni) e un controllo sicuro delle password basato sul k-anonimato di HIBP. Una conferma di consenso una tantum lo limita a un uso di laboratorio autorizzato; tutto è passivo e in sola lettura, con un report .txt e un report HTML scuro.',
    features: [
      'Motore integrato basato sulla libreria standard + incapsulamento automatico di Sherlock / maigret / holehe / theHarvester / SpiderFoot quando presenti',
      'Dominio: DNS-over-HTTPS, RDAP/WHOIS, sottodomini crt.sh, HTTP + verifica delle intestazioni di sicurezza mancanti',
      'Identità: ricerca di nomi utente a frequenza limitata, OSINT GitHub (e-mail trapelate nei commit), Gravatar, ricerca di violazioni XposedOrNot',
      'Verifica sicura della compromissione di una password tramite il k-anonimato di HIBP — la password non lascia mai la tua macchina',
      'Conferma di consenso una tantum, a frequenza limitata per progettazione; passivo e in sola lettura; report .txt + report HTML scuro',
    ],
    definition:
      'Strix Archer è uno strumento OSINT gratuito e open source per Linux — concepito per le sfide CTF e i bersagli di laboratorio autorizzati — che esegue la ricognizione passiva di dominio e identità (DNS/RDAP/crt.sh, ricerca di nomi utente ed e-mail, OSINT GitHub, verifiche di violazioni), oltre a un controllo sicuro delle password basato sul k-anonimato di HIBP.',
    notFor: [
      'È passivo e in sola lettura — non sfrutta mai vulnerabilità né attacca attivamente un bersaglio.',
      'È riservato esclusivamente a un uso autorizzato — una conferma di consenso una tantum ne impone la presa d’atto.',
      'La verifica della compromissione delle password non invia mai la tua password (k-anonimato di HIBP).',
    ],
    faq: [
      ['Il suo utilizzo è legale?', 'Solo contro sfide CTF / personaggi fittizi o bersagli che possiedi o che sei esplicitamente autorizzato a testare. Profilare persone reali senza il loro consenso può costituire molestia ed essere illegale — una conferma di consenso una tantum ne impone la presa d’atto.'],
      ['Devo installare qualcosa?', 'No — il motore integrato si basa unicamente sulla libreria standard di Python. Gli strumenti opzionali (Sherlock, holehe, …) vengono incapsulati automaticamente se presenti, e `--setup` li installa in ambienti pipx isolati, così il Python del tuo sistema rimane intatto.'],
    ],
    creditsNote: 'Strix Archer incapsula questi strumenti open source e servizi pubblici — non li impacchetta né li modifica. Grazie a ogni progetto e servizio a monte.',
    seoTitle: 'Strix Archer — Strumento OSINT per CTF e bersagli di laboratorio autorizzati',
    seoDescription: 'OSINT passivo per bersagli di laboratorio/CTF autorizzati: ricognizione di dominio (DNS/RDAP/crt.sh), ricerca di nomi utente ed e-mail, OSINT GitHub, verifiche di violazioni e un controllo sicuro delle password HIBP. Open source.',
  },
  'strix-sinkhole': {
    tagline: 'Blocca tracker, telemetria e pubblicità nel tuo file hosts — offline, reversibile, con un clic.',
    summary:
      'Strix Sinkhole gestisce in modo sicuro il file hosts del tuo sistema per reindirizzare a 0.0.0.0 i domini noti di tracker, telemetria e pubblicità: così una risoluzione muore sulla tua stessa macchina prima che qualsiasi richiesta la lasci — senza un server come Pi-hole, senza estensioni per browser, senza demoni in background e senza chiamate di rete proprie. Tutto ciò che scrive risiede all’interno di un blocco con spazio dei nomi dedicato: quindi le tue voci del file hosts e le impostazioni predefinite del sistema vengono copiate byte per byte e mai modificate. Una protezione integrata rifiuta di reindirizzare nel vuoto le infrastrutture critiche (aggiornamento dell’OS, revoca dei certificati/OCSP, sincronizzazione dell’ora, localhost), qualunque cosa dica una blocklist, così non può mai compromettere silenziosamente la tua macchina. Ogni modifica è preceduta da un backup con marca temporale ed è reversibile con un clic, con un’anteprima delle differenze in modalità simulazione che indica esattamente cosa cambierà, e una lista di autorizzazioni per i falsi positivi.',
    features: [
      'Reindirizza nel vuoto i domini di tracker / telemetria / pubblicità a livello di sistema tramite il file hosts — offline, senza server, senza estensioni',
      'Blocco gestito con spazio dei nomi dedicato: le tue voci del file hosts e quelle del sistema sono preservate byte per byte (verificate prima di ogni scrittura)',
      'Protezione dei domini critici: aggiornamento dell’OS, OCSP/CRL, sincronizzazione dell’ora e localhost non possono mai essere reindirizzati nel vuoto da alcuna lista',
      'Backup con marca temporale prima di ogni scrittura + ripristino con un clic; anteprima delle differenze in modalità simulazione; lista di autorizzazioni per i falsi positivi',
      'Lista iniziale curata inclusa; importa la tua oppure attiva un aggiornamento HTTPS controllato; interfaccia grafica scura (Windows) + CLI `strixsink` (Linux)',
    ],
    definition:
      'Strix Sinkhole è un blocco di pubblicità e tracker gratuito, open source e offline, tramite file hosts, per Windows e Linux, che reindirizza nel vuoto i domini di tracker, telemetria e pubblicità a livello di sistema — senza un server come Pi-hole, senza estensioni per browser e senza inoltro DNS.',
    notFor: [
      'Non è un server DNS in stile Pi-hole e non inoltra alcuna delle tue richieste da nessuna parte.',
      'Non è un’estensione per browser — modifica un file hosts in testo semplice, verificabile e reversibile.',
      'Blocca a livello del file hosts; non cifra il tuo DNS a monte.',
    ],
    faq: [
      ['In cosa si differenzia da Pi-hole o da un’estensione per browser?', 'Nessun server separato né Raspberry Pi (Pi-hole), e non è un’estensione per browser che possa leggere di per sé la tua navigazione — Strix Sinkhole modifica un file hosts in testo semplice che qualsiasi utente tecnico può verificare e ripristinare. Nulla viene eseguito in background e nulla inoltra le tue richieste DNS da nessuna parte.'],
      ['Una blocklist errata può compromettere il mio computer?', 'No. Una protezione integrata rifiuta di reindirizzare nel vuoto le infrastrutture critiche (aggiornamento dell’OS, revoca dei certificati, sincronizzazione dell’ora, localhost), indipendentemente da ciò che dice una lista, ogni modifica viene prima sottoposta a backup e un clic ripristina l’originale esatto. Da notare che blocca a livello del file hosts e non cifra il DNS a monte.'],
    ],
    creditsNote: 'Strix Sinkhole fornisce solo la propria piccola lista iniziale curata e non impacchetta queste liste — ti permette di importarle, ciascuna con la propria licenza. Grazie all’ecosistema pubblico delle blocklist.',
    seoTitle: 'Strix Sinkhole — Blocco di pubblicità e tracker offline tramite file hosts',
    seoDescription: 'Blocca tracker, telemetria e pubblicità a livello di sistema reindirizzandoli nel vuoto nel tuo file hosts — completamente offline, senza server, senza estensioni per browser. Backup con marca temporale, ripristino con un clic, non compromette mai i domini critici. Open source, Windows e Linux.',
  },
  'strix-talon': {
    tagline: 'Osserva il traffico in uscita di ogni applicazione — e blocca quelle di cui non ti fidi.',
    summary:
      'Strix Talon è una mappa in tempo reale del traffico in uscita, processo per processo: quale applicazione comunica con quale indirizzo e porta remoti, aggiornata una volta al secondo, con le destinazioni nuovissime segnalate nel momento in cui compaiono. Sopra questa visibilità in sola lettura si colloca un livello di regole opzionale — «questa applicazione non deve mai accedere a Internet», «blocca questo indirizzo» e un kill-switch globale che interrompe tutto il traffico in uscita tranne il loopback (mantenendo eventualmente la tua rete locale). Fatto essenziale, Talon non include alcun driver del kernel: ogni regola viene tradotta nel firewall proprio del sistema operativo — Windows Defender Firewall tramite netsh, Linux tramite una tabella nftables privata — e denominata in modo da poter essere annullata con un clic, senza mai toccare le tue regole esistenti. Fa inoltre emergere i socket locali in ascolto, così vedi l’esposizione in entrata e il traffico in uscita in un’unica vista.',
    features: [
      'Mappa del traffico in uscita in tempo reale per applicazione: app → IP/porta/stato remoti, aggiornata circa ogni 2 s, nuove destinazioni evidenziate',
      'Blocca un’applicazione (Windows) o un indirizzo (tutte le piattaforme), oltre a un kill-switch globale (blocca tutto il traffico in uscita tranne il loopback)',
      'Applicato tramite il firewall del tuo sistema operativo (Windows Defender Firewall / nftables) — nessun driver del kernel da approvare o firmare',
      'Ogni regola ha un proprio spazio dei nomi ed è annullabile con un clic — Talon non tocca mai le tue regole di firewall esistenti; il loopback non viene mai bloccato',
      'Vede anche l’esposizione in entrata (in ascolto su 0.0.0.0 vs 127.0.0.1); moderna interfaccia grafica PySide6 su Windows + una CLI `talon` su Linux',
    ],
    definition:
      'Strix Talon è un firewall in uscita per applicazione e un monitor del traffico in uscita, gratuito e open source, per Windows e Linux, che mostra in tempo reale quale applicazione comunica con quale indirizzo remoto e ti permette di bloccare qualsiasi applicazione o indirizzo — o tutto il traffico in uscita — il tutto applicato tramite il firewall proprio del tuo sistema operativo, senza alcun driver del kernel.',
    notFor: [
      'Non include alcun driver del kernel — pilota il firewall integrato del tuo sistema operativo (Windows Defender Firewall / nftables).',
      'Non mostra finestre pop-up di autorizzazione/rifiuto delle connessioni in tempo reale nella v1.',
      'Il blocco per applicazione è riservato a Windows; su Linux blocca in base all’indirizzo di destinazione.',
    ],
    faq: [
      ['In cosa si differenzia da Little Snitch o GlassWire?', 'Talon è open source, senza alcuna telemetria, e funziona sia su Windows CHE su Linux (Little Snitch è riservato a macOS ed è a pagamento; GlassWire è closed source). Fatto essenziale, delega l’applicazione delle regole al firewall integrato del tuo sistema operativo invece di includere un driver del kernel, e ogni regola è una semplice voce di firewall verificabile che puoi ispezionare e annullare.'],
      ['Può impedirmi l’accesso alla mia stessa macchina?', 'No. Il loopback è sempre escluso, il kill-switch mantiene raggiungibile localhost (ed eventualmente la tua rete locale), ogni regola ha lo spazio dei nomi StrixTalon-* / risiede in una tabella nftables privata, e un clic (o `sudo talon revert`) rimuove tutto ciò che Talon ha aggiunto senza toccare le tue altre regole di firewall. Da notare: le finestre pop-up in tempo reale «autorizza/rifiuta questa nuova connessione» sono fuori dal perimetro della v1; il blocco per applicazione è riservato a Windows (su Linux il blocco avviene in base all’indirizzo).'],
    ],
    creditsNote: 'Strix Talon mappa i socket con psutil, costruisce la sua interfaccia con PySide6 e applica le regole tramite il firewall del tuo sistema operativo — non condivide alcun codice con Little Snitch / GlassWire / OpenSnitch; questi sono citati solo come fonte di ispirazione.',
    seoTitle: 'Strix Talon — Firewall in uscita per applicazione (Windows e Linux)',
    seoDescription: 'Osserva il traffico in uscita di ogni applicazione e blocca ciò di cui non ti fidi — un firewall in uscita per applicazione e un monitor delle connessioni open source per Windows e Linux. Applicato tramite il firewall del tuo sistema operativo (senza driver del kernel), con un kill-switch globale. Senza telemetria, MIT.',
  },
};

export const contribute = {
  h1: 'Crea uno strumento. Rendilo parte di Strix.',
  lead:
    'Strix è una suite, non un giardino recintato. Se hai creato uno strumento open source per la privacy o la sicurezza che vive secondo le stesse regole — offline per impostazione predefinita, zero telemetria, davvero verificabile — puoi proporlo. Una volta superata la stessa revisione di sicurezza e lo stesso processo di rafforzamento a cui è sottoposto ogni strumento Strix, viene pubblicato sotto l’ombrello di Strix: un proprio repository, una pagina su questo sito in 13 lingue e versioni con checksum e attestazione.',
  badge: 'Aperto agli strumenti della community',
  ctaTop: 'Proponi il tuo strumento',
  updatedLabel: 'Ultimo aggiornamento',
  steps: {
    h2: 'Come funziona',
    sub: 'Quattro passi dal tuo repository a uno strumento Strix pubblicato — e mantieni la paternità e il copyright per tutto il percorso.',
    list: [
      { n: '01', t: 'Crea il tuo strumento', d: 'Scrivilo in qualsiasi linguaggio, per Windows e/o Linux, con una licenza compatibile con la MIT. Rispetta i criteri qui sotto: offline, senza telemetria, un solo compito svolto bene.' },
      { n: '02', t: 'Apri una proposta', d: 'Apri una issue di proposta su GitHub con un link al tuo repository, cosa fa, le piattaforme a cui si rivolge e come interagisce con la rete — se lo fa. Non serve alcun account presso di noi; basta GitHub.' },
      { n: '03', t: 'Revisione di sicurezza e rafforzamento', d: 'Applichiamo lo stesso vaglio superato da ogni strumento Strix: analisi statica, un audit delle dipendenze e della catena di approvvigionamento, una revisione avversariale del codice e un processo di rafforzamento. Ricevi i risultati e li affrontiamo insieme.' },
      { n: '04', t: 'Viene pubblicato come Strix', d: 'All’accettazione, il tuo strumento ottiene un proprio repository sotto l’organizzazione Strix, una landing page localizzata su questo sito e versioni con checksum SHA-256 e un’attestazione di provenienza della build.' },
    ],
  },
  criteria: {
    h2: 'Cosa deve essere uno strumento Strix',
    sub: 'Questi requisiti non sono negoziabili — sono le promesse su cui è costruita l’intera suite. Se il tuo strumento vive già secondo queste regole, si troverà perfettamente a suo agio.',
    list: [
      { t: 'Open source', d: 'Codice sorgente pubblico con licenza MIT (o una licenza permissiva compatibile con la MIT). Nulla di nascosto, nulla di offuscato.' },
      { t: 'Offline per impostazione predefinita', d: 'Nessuna chiamata di rete propria per uno strumento desktop. Se la funzione stessa dello strumento è la rete (recon/OSINT), deve essere senza chiavi, subordinato al consenso e con un perimetro chiaramente definito.' },
      { t: 'Zero telemetria', d: 'Nessun SDK di analisi, nessuna comunicazione nascosta, nessun account. I dati dell’utente non lasciano mai la sua macchina.' },
      { t: 'Un solo compito, svolto bene', d: 'Un’utilità mirata con impostazioni predefinite sensate, un perimetro chiaro e una dichiarazione esplicita di ciò che deliberatamente non fa.' },
      { t: 'Documentato e testabile', d: 'Un README, un SECURITY.md con un modello di minaccia e test di regressione per tutto ciò che è critico per la sicurezza.' },
      { t: 'Privilegio minimo', d: 'Nessuna chiamata a un interprete di comandi, nessuna esecuzione di codice dinamico, chiamate ai sottoprocessi solo tramite argv, risoluzione degli strumenti tramite percorso assoluto ed elevazione dei privilegi solo dove è davvero necessaria.' },
    ],
  },
  review: {
    h2: 'La revisione di sicurezza a cui è sottoposta ogni proposta',
    sub: 'Lo stesso vaglio superato dagli strumenti esistenti prima del lancio. Nulla viene pubblicato finché non lo supera.',
    list: [
      { t: 'Analisi statica (SAST)', d: 'semgrep, bandit, PSScriptAnalyzer, gli analizzatori Roslyn e i linter appropriati per ciascun linguaggio, sull’intero codice sorgente.' },
      { t: 'Audit delle dipendenze e della catena di approvvigionamento', d: 'Versioni bloccate, un SBOM, pip-audit / Dependabot e una verifica che ogni dipendenza di terze parti sia giustificata.' },
      { t: 'Revisione avversariale del codice', d: 'Una revisione umana a caccia di injection, path traversal, SSRF, escalation dei privilegi e qualsiasi indebolimento di un controllo di sicurezza.' },
      { t: 'Rafforzamento', d: 'Colmiamo insieme le lacune: privilegio minimo, nessun interprete di comandi, validazione degli input, impostazioni predefinite fail-closed e difesa in profondità sui percorsi pericolosi.' },
      { t: 'Provenienza su ogni versione', d: 'La CI compila ogni versione, scrive un SHA256SUMS SHA-256 e allega un’attestazione di provenienza della build SLSA, così ogni download è verificabile.' },
    ],
  },
  keep: {
    h2: 'Cosa mantieni — e cosa ottieni',
    sub: 'Contribuire a Strix non significa cedere il tuo lavoro.',
    list: [
      { t: 'La tua paternità e il tuo copyright', d: 'Rimani l’autore. Il copyright MIT è tuo; Strix lo distribuisce e lo co-mantiene insieme a te.' },
      { t: 'Un pubblico reale', d: 'Una landing page localizzata in 13 lingue, il cablaggio SEO/GEO e un posto nella griglia degli strumenti e nei download.' },
      { t: 'Una pipeline di rilascio affidabile', d: 'Checksum, attestazione, un percorso di firma del codice a tendere (SignPath Foundation) e un processo di divulgazione delle vulnerabilità — predisposti per te.' },
      { t: 'Co-manutenzione', d: 'Issue, PR e segnalazioni di sicurezza seguono lo stesso processo del resto della suite. Non sei da solo.' },
    ],
  },
  cta: {
    h2: 'Pronto a proporre il tuo strumento?',
    p: 'Apri una issue di proposta con il link al tuo repository e una breve descrizione. La prenderemo in carico, eseguiremo la revisione e lavoreremo con te da lì in avanti. Non ancora pronto? Leggi prima la guida completa per contribuire.',
    btnSubmit: 'Proponi il tuo strumento',
    btnGuide: 'Leggi la guida per contribuire',
    note: 'Per proporre uno strumento serve solo un account GitHub. Non c’è alcun costo, nessun accordo per i contributori che ti tolga i tuoi diritti e nessun obbligo — puoi ritirarti in qualsiasi momento prima del rilascio.',
  },
  faq: [
    ['Perdo la proprietà del mio strumento?', 'No. Mantieni la paternità e il copyright MIT. Strix lo co-mantiene e lo distribuisce insieme a te, e puoi ritirarti prima del rilascio.'],
    ['Quali linguaggi o framework sono ammessi?', 'Qualsiasi. La suite esistente spazia tra Python, C#, PowerShell e altro — ciò che conta è la licenza, le regole offline/senza telemetria e il superamento della revisione di sicurezza, non la tecnologia utilizzata.'],
    ['E se il mio strumento ha bisogno della rete?', 'Va bene solo se la rete è la sua vera funzione (come per gli strumenti recon/OSINT). In tal caso deve essere senza chiavi, subordinato a un consenso esplicito, con un perimetro chiaramente definito e riservato a un uso autorizzato — mai traffico silenzioso o in background.'],
    ['Quanto tempo richiede la revisione?', 'Dipende dalle dimensioni dello strumento e da quanti problemi emergono. Gli strumenti piccoli e già rafforzati procedono rapidamente; tutto ciò che tocca operazioni distruttive o l’elevazione dei privilegi riceve un esame supplementare.'],
    ['Cosa succede se non la supera?', 'Ricevi i risultati completi e puoi risolverli e riproporre lo strumento. Una revisione che trova problemi è il processo che funziona — è successo lo stesso agli strumenti già presenti nella suite.'],
  ],
};

export const donate = {
  h1: 'Sostieni Strix — in modo riservato.',
  lead:
    'Strix è gratuito, con licenza MIT e privo di qualsiasi telemetria — e lo sarà sempre. Nessuna pubblicità, nessun account, nulla in vendita. Se questi strumenti ti fanno risparmiare tempo o ti rendono più sicuro, puoi dare il tuo contributo con Monero (XMR): riservato per progettazione, esattamente come tutto il resto qui. Ogni centesimo va all’hosting, a un certificato di firma del codice e al tempo di sviluppo.',
  badge: 'Donazioni rispettose della privacy',
  updatedLabel: 'Ultimo aggiornamento',
  card: {
    label: 'Indirizzo Monero (XMR)',
    scanHint: 'Scansiona il QR con il tuo wallet oppure copia l’indirizzo qui sotto.',
    copy: 'Copia l’indirizzo',
    copied: 'Copiato ✓',
    openWallet: 'Apri nel wallet',
    qrPending: 'Un codice QR comparirà qui una volta configurato l’indirizzo per le donazioni.',
    notConfigured: 'L’indirizzo per le donazioni non è ancora stato impostato — torna a controllare presto.',
  },
  why: {
    h2: 'Perché Monero?',
    sub: 'Perché un progetto per la privacy non dovrebbe chiederti di rinunciare alla tua privacy per sostenerlo.',
    list: [
      { t: 'Riservato per impostazione predefinita', d: 'Monero nasconde il mittente, il destinatario e l’importo. Non esiste alcun registro pubblico che ricolleghi una donazione a te — perfetto per una suite costruita sul principio di non tracciarti.' },
      { t: 'Nessun intermediario, nessun account', d: 'Nessun gestore di pagamenti, nessuna registrazione e nessuno script di terze parti su questa pagina. L’indirizzo è tutto ciò che ti serve.' },
      { t: 'Qui non si traccia nulla', d: 'Questa pagina non carica alcun sistema di analisi e non effettua alcuna chiamata di rete. Non possiamo sapere chi l’ha visitata, né chi ha donato.' },
    ],
  },
  funds: {
    h2: 'Dove vanno i fondi',
    sub: 'Un progetto piccolo, indipendente e senza budget. Ogni contributo viene speso in modo trasparente:',
    list: [
      { t: 'Hosting e infrastruttura', d: 'Mantenere online e veloci il sito, le versioni e i checksum.' },
      { t: 'Certificato di firma del codice', d: 'Un certificato OV/EV affinché gli installer smettano di far scattare SmartScreen — il miglioramento più richiesto in assoluto.' },
      { t: 'Tempo di sviluppo', d: 'Nuovi strumenti, versioni per Linux, rafforzamento della sicurezza e mantenere tutto gratuito e privo di telemetria.' },
    ],
  },
  otherWays: {
    h2: 'Altri modi per dare una mano',
    sub: 'Non puoi donare? Anche questi aiutano allo stesso modo — e non costano nulla.',
    list: [
      { t: 'Metti una stella ai repository su GitHub', d: 'Visibilità e reputazione aiutano davvero i nuovi utenti a trovare gli strumenti e a fidarsene.' },
      { t: 'Contribuisci con uno strumento', d: 'Crea qualcosa che si integri nella suite e proponilo per la revisione di sicurezza.' },
      { t: 'Segnala bug e falsi positivi', d: 'Apri delle segnalazioni, comunica i falsi positivi dell’antivirus ai fornitori e aiuta gli altri nelle discussioni.' },
    ],
  },
  note: 'Le donazioni sono doni volontari, non acquisti — non prevedono rimborso, fattura né ricevuta fiscale. Ti preghiamo di dare solo ciò di cui puoi fare a meno senza problemi. Grazie per mantenere in vita un software indipendente, che mette la privacy al primo posto.',
};

export const about = {
  h1: 'Informazioni su Strix',
  lead:
    'Siamo un piccolo gruppo indipendente di quattro amici — studenti di informatica in Germania — stanchi degli strumenti per la «privacy» che in realtà non puoi ispezionare. Strix è nato proprio da qui: una suite di utilità per la privacy e la sicurezza che funzionano completamente offline, non includono alcuna telemetria e sono tue — da leggere, compilare e di cui fidarti. Con licenza MIT, gratuita per sempre, nessuna azienda alle spalle e niente da vendere.',
  badge: 'Indipendente · open source',
  updatedLabel: 'Ultimo aggiornamento',
  values: {
    h2: 'In cosa crediamo',
    list: [
      { t: 'Verifica, non limitarti a fidarti', d: 'Ogni strumento è codice sorgente pubblico, con licenza MIT e un modello di minaccia. Non crederci sulla parola — leggilo, compilalo e verificalo tu stesso.' },
      { t: 'Gli strumenti per la privacy non devono spiarti', d: 'Zero telemetria, nessun account, nessuna analisi — nemmeno su questo sito web. I tuoi dati non lasciano mai la tua macchina.' },
      { t: 'Offline per impostazione predefinita', d: 'Gli strumenti desktop non effettuano chiamate di rete proprie. Scollega il cavo e continuano a funzionare.' },
      { t: 'Gratuito, per sempre', d: 'Nessun piano a pagamento, nessun abbonamento, nessuna pubblicità. Se un giorno accetteremo donazioni o finanziamenti, questo non cambierà mai queste promesse.' },
    ],
  },
  story: {
    h2: 'Perché lo sviluppiamo',
    p1: 'Volevamo che gli strumenti che usiamo noi stessi fossero onesti: niente scatole nere, nessun «fidati di noi», nessuna raccolta di dati di nascosto. La maggior parte di ciò che ci serviva o non esisteva come open source, o non era multipiattaforma, oppure ci chiedeva di rinunciare alla nostra privacy per proteggerla. Così ci siamo messi a costruire — uno strumento piccolo, mirato e verificabile alla volta.',
    p2: 'Strix è un progetto collaterale a cui teniamo, portato avanti nel nostro tempo libero. Sarà sempre aperto e sarà sempre onesto su ciò che è — compreso ciò in cui è ancora carente (gli installer non sono ancora firmati digitalmente, e lo diciamo chiaramente nella pagina di verifica).',
  },
  cta: {
    h2: 'Partecipa',
    p: 'Strix è aperto a tutti. Leggi il codice sorgente, segnala un bug, proponi uno strumento o invia il tuo per una revisione di sicurezza. Se ti è utile, una stella su GitHub aiuta davvero gli altri a scoprirlo.',
    btnGithub: 'Vedi su GitHub',
    btnContribute: 'Contribuisci con uno strumento',
  },
};

export const alternatives = {
  h1: 'Alternative open source',
  lead:
    'Usi già uno strumento per la privacy closed source o a pagamento? È molto probabile che Strix offra un sostituto open source, offline e senza alcuna telemetria — gratuito per sempre, con licenza MIT e che puoi verificare. Ecco cosa sostituisce cosa.',
  badge: 'Sostituti gratuiti e aperti',
  updatedLabel: 'Ultimo aggiornamento',
  altToLabel: 'Alternativa open source a',
  viewTool: 'Vedi lo strumento →',
  ctaLead: 'Non trovi una corrispondenza?',
  ctaText: 'Esplora l’intera suite di strumenti oppure proponi uno strumento che dovremmo realizzare.',
  ctaAll: 'Tutti gli strumenti',
  ctaSuggest: 'Proponi uno strumento',
};

export default { ui, categories, security, apps, contribute, donate, about, alternatives };
