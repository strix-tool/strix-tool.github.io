// Swedish (sv-SE) translation.
//   - `ui`        : all site-chrome / marketing strings (mirrors `t` in site.js).
//   - `categories`: display labels for the app-category chips (keys stay English).
//   - `security`  : the /security (Verify) page prose.
//   - `apps`      : per-locale overrides for each app's content.
// Brand, product, third-party names, code, commands, paths, flags, acronyms and
// standards are kept verbatim per the source.

export const ui = {
  metaDescription:
    'Integritets- och säkerhetsverktyg med öppen källkod som körs offline, för Windows och Linux. Ingen telemetri, inga konton, MIT-licensierade. Borttagning av metadata, säker radering, blockering av annonser och spårare, en utgående brandvägg per app, systemövervakning och mer.',
  homeSeoTitle: 'Strix Advanced Tools — Integritets- och säkerhetsverktyg med öppen källkod',
  homeSeoDescription:
    'Nio integritets- och säkerhetsverktyg med öppen källkod som körs offline, för Windows och Linux: metadataborttagare och AES-256-arkiverare, säker diskraderare, annons- och spårarblockerare via hosts-filen, utgående brandvägg per app, systemövervakare, hårdvaruinformation, säkerhetsvakt samt spanings- och OSINT-verktyg. Ingen telemetri. MIT-licensierade. Gratis för alltid.',
  downloadsSeoTitle: 'Ladda ner Strix Advanced Tools — Windows och Linux',
  downloadsSeoDescription:
    'Ladda ner sviten Strix Advanced Tools för Windows och Linux. Direkta installationsprogram och .deb-paket från GitHub Releases, vart och ett med en SHA-256-kontrollsumma. Gratis och öppen källkod.',
  keywordsGlobal: 'säkerhetsverktyg med öppen källkod, integritetsverktyg, windows, linux, metadataborttagare, exif-borttagare, säker diskradering, nist 800-88, annonsblockerare via hosts-fil, spårarblockerare, telemetriblockerare, dns sinkhole, brandvägg per app, utgående brandvägg, egress-övervakare, kill switch, little snitch-alternativ, systemövervakningswidget, hårdvaruinformation, säkerhetsövervakare, osint, spaning, offline, ingen telemetri, MIT-licens',
  tagline: 'Integritets- och säkerhetsverktyg med öppen källkod för Windows och Linux.',
  heroBadge: 'Öppen källkod · MIT · Windows och Linux',
  heroTitle: 'Lita inte på säkerhetsverktyg. Läs dem.',
  heroSubtitle:
    'Strix Advanced Tools är en svit med integritets- och säkerhetsverktyg med öppen källkod för Windows och Linux. Vart och ett körs helt offline, levereras utan telemetri och är ditt att granska, bygga och lita på — gratis för alltid, MIT-licensierat.',
  browse: 'Utforska verktygen',
  getStarted: 'Ladda ner',
  viewOnGithub: 'Stjärnmärk på GitHub',
  nav: { apps: 'Verktyg', downloads: 'Nedladdningar', github: 'GitHub', security: 'Säkerhet', contribute: 'Bidra', donate: 'Donera', about: 'Om oss', alternatives: 'Alternativ' },
  allApps: 'Verktygen',
  allAppsLead: 'Nio fokuserade verktyg. Vart och ett gör en sak bra, offline.',
  features: 'Vad det gör',
  screenshots: 'En titt inuti',
  faqTitle: 'Vanliga frågor',
  download: 'Ladda ner',
  downloadCta: 'Hämta',
  otherDownloads: 'Alla plattformar och kontrollsummor',
  source: 'Källkod',
  docs: 'Dokumentation',
  readme: 'Läs dokumentationen',
  install: 'Installation',
  installWindows: 'Windows',
  installLinux: 'Linux (Ubuntu / Debian)',
  security: 'Säkerhet',
  securityNote:
    'Offline som standard, inget skal, ingen dynamisk kod, minsta möjliga behörighet — och varje rad är MIT-licensierad och öppen för granskning.',
  category: 'Kategori',
  backHome: 'Alla verktyg',
  verified: 'Kontrollsummor (SHA-256) publiceras med varje release så att du kan verifiera din nedladdning.',
  unsigned:
    'Byggena är inte kodsignerade ännu, så Windows SmartScreen kan varna vid första körningen — välj “Mer information → Kör ändå”, eller verifiera kontrollsumman först. Inaktivera aldrig ditt antivirusprogram.',
  whyTitle: 'Byggt på fyra löften',
  whyLead: 'Inte en slogan — varje löfte är något du kan verifiera i källkoden innan du litar på det.',
  why: [
    { k: 'offline', title: 'Offline från grunden', text: 'Inga nätverksanrop, ingen telemetri, inga konton. Dina data lämnar aldrig maskinen de bor på.', proof: 'kör grep på källkoden: noll utgående sockets i skrivbordsverktygen' },
    { k: 'hardened', title: 'Härdat och testat', text: 'Inga skalanrop, ingen dynamisk kod, minsta möjliga behörighet — och de säkerhetskritiska kodvägarna täcks av riktiga regressionstester.', proof: 't.ex. vägrar diskraderaren röra systemdisken i 18 enhetstester' },
    { k: 'cross', title: 'Windows och Linux', text: 'Riktiga installationsguider på Windows och inbyggda paket på Linux för skrivbordsverktygen; spanings-/OSINT-verktygen för Kali levereras som Linux-skript.', proof: 'releaser med kontrollsummor och GitHub build-provenance-attestering' },
    { k: 'open', title: 'Genuint öppet', text: 'MIT-licensierat, utan förbehåll. Läs det, bygg det själv, granska det eller skicka en pull request.', proof: 'varje repo är offentligt på GitHub — inget är dolt' },
  ],
  downloadsTitle: 'Nedladdningar',
  downloadsLead:
    'Hämta den senaste releasen för din plattform. Varje nedladdning är en direkt fil från GitHub Releases, levererad med en SHA-256-kontrollsumma.',
  homeFaq: [
    ['Är Strix Advanced Tools verkligen gratis och öppen källkod?', 'Ja. Varje verktyg är MIT-licensierat och gratis för alltid — du kan läsa källkoden, bygga det själv och bidra. Inga betalnivåer, konton, prenumerationer eller annonser, nu eller någonsin.'],
    ['Vem gör Strix, och varför ska jag lita på det?', 'Strix Advanced Tools är ett oberoende projekt med öppen källkod — inte ett företag som säljer dina data. Du behöver inte lita blint: varje verktyg är ett offentligt GitHub-repository under MIT-licensen, så du (eller vem som helst) kan läsa varje rad, bygga det själv från källkoden och bekräfta att det gör exakt vad det utlovar. Förtroende ska verifieras, inte efterfrågas. Varje repo levereras dessutom med en SECURITY.md som innehåller hotmodellen och en privat väg för sårbarhetsrapportering.'],
    ['Vilket Strix-verktyg är alternativet med öppen källkod till appen jag redan använder?', 'Talon är en utgående brandvägg per app — ett alternativ med öppen källkod till Little Snitch och GlassWire. Sinkhole är en annons- och spårarblockerare via hosts-filen — ett lokalt alternativ för en enskild maskin till Pi-hole. MetaVault tar bort metadata och skapar AES-256-arkiv — ett alternativ till ExifTool-GUI:er, MAT2 och EXIF-borttagare online. Disk Cleaner raderar diskar säkert — ett alternativ till DBAN och CCleaners raderingsfunktion. Pulse är en systemövervakningswidget (alternativ till Rainmeter/HWiNFO-gadgets), Inspector rapporterar hårdvara (alternativ till CPU-Z/Speccy) och Sentinel är en säkerhetsvakt. Vart och ett körs offline utan telemetri.'],
    ['Skickar dessa verktyg mina data någonstans?', 'Nej. Varje skrivbordsverktyg körs helt och hållet på din maskin, gör inga egna nätverksanrop och levereras utan telemetri — dina data lämnar aldrig din enhet. De enda verktyg som rör nätverket är de vars hela uppgift är nätverket (spanings-/OSINT-verktygen), och även de använder endast nyckellösa offentliga API:er, styrda av samtycke och begränsade av tidsgränser.'],
    ['Behöver jag vara tekniskt kunnig för att använda dem?', 'Inte för skrivbordsapparna — MetaVault, Pulse, Inspector, Sentinel, Sinkhole och Talon har alla ett rent grafiskt gränssnitt med förnuftiga standardinställningar och bekräftelser innan något destruktivt sker. Spaningsverktygen (Vantage, Archer) är kommandoradsbaserade, för personer som är bekväma i en terminal.'],
    ['Vilket verktyg behöver jag?', 'Använd sökningen och filtren ovanför verktygsrutnätet för att avgränsa efter plattform (Windows / Linux) och kategori (Integritet, Säkerhet, System, OSINT…), eller tryck ⌘K / Ctrl-K var som helst för att hoppa direkt till ett verktyg. Varje verktygssida förklarar exakt vad det gör — och vad det medvetet inte gör.'],
    ['Hur verifierar jag att en nedladdning är äkta?', 'Varje GitHub-release publicerar en SHA-256-kontrollsumma (SHA256SUMS) bredvid filerna. Ladda ner den, jämför hashen för din fil, så vet du att binären är exakt det som publicerades — ingen manipulation. Det betyder mer än någon kodsignatur.'],
    ['Vilka plattformar stöds?', 'Windows och Linux (Ubuntu / Debian). Skrivbordsverktygen levereras med ett installationsprogram för Windows och ett Linux-paket; spanings-/OSINT-verktygen Vantage och Archer finns endast för Linux/Kali.'],
    ['Finns det en macOS- eller mobilversion?', 'Inte officiellt ännu — de plattformar som stöds är Windows och Linux (Ubuntu / Debian), och det finns inga iOS- eller Android-versioner. Eftersom de Python-baserade verktygen (MetaVault, Pulse, Sentinel, Sinkhole, Talon) har öppen källkod och är plattformsoberoende kan de mycket väl köras på macOS från källkoden, men det stöds inte och är otestat. Ett inbyggt macOS-bygge finns på färdplanen, inte som en färdig produkt.'],
    ['Varför visar Windows en varning om ”okänd utgivare”?', 'Installationsprogrammen är inte kodsignerade ännu, så SmartScreen visar en fråga vid första körningen. Välj ”Mer information → Kör ändå”, eller verifiera SHA-256-kontrollsumman som publiceras med varje release. Inaktivera aldrig ditt antivirusprogram för att köra dem — det ska du aldrig behöva göra.'],
    ['Är spanings-/OSINT-verktygen lagliga att använda?', 'Endast mot system du äger eller uttryckligen har tillstånd att testa — ett avsiktligt sårbart övningslabb, en CTF-utmaning eller ett uppdrag med skriftligt tillstånd. Både Vantage och Archer visar en engångsgrind för samtycke och är strikt passiva / endast för auktoriserad användning. Skanning eller profilering utan tillstånd kan vara olagligt.'],
    ['Kan jag rapportera en bugg eller bidra?', 'Absolut — varje verktyg är ett separat offentligt repo på GitHub med en SECURITY.md, mallar för ärenden och en bidragsguide. Säkerhetsproblem har en privat väg för rapportering; funktioner och rättningar välkomnas som pull requests.'],
  ],
  faqSearchPlaceholder: 'Sök bland frågorna…',
  toolsFilterAll: 'Alla',
  toolsSearchPlaceholder: 'Sök verktyg efter namn, syfte eller nyckelord…',
  toolsNoMatch: 'Inga verktyg matchar — prova att rensa filtren.',
  footerTagline: 'Integritets- och säkerhetsverktyg med öppen källkod.',
  footerNote: 'Gjort för människor som bryr sig om integritet.',
  footerCols: { product: 'Verktyg', resources: 'Resurser', about: 'Projekt' },
  langLabel: 'Språk',
  stats: { tools: 'verktyg', platforms: 'plattformar', telemetry: 'telemetri', license: 'licens' },
  faqNoMatch: 'Ingen fråga matchar — prova andra ord.',
  // Downloads page section headings
  dl: { allTools: 'Varje verktyg — Windows och Linux', verify: 'Verifiera din nedladdning' },
  // App-page fixed labels ({name} is replaced with the tool name)
  app: {
    price: 'Pris',
    priceVal: 'Gratis — öppen källkod (MIT)',
    platforms: 'Plattformar',
    category: 'Kategori',
    builtWith: 'Byggt med',
    altTo: 'Alternativ med öppen källkod till',
    telemetry: 'Telemetri',
    telemetryVal: 'Ingen — helt offline',
    updated: 'Uppdaterad',
    notDo: 'Vad {name} medvetet inte gör',
    poweredBy: 'Drivs av öppen källkod',
    fullAck: 'Fullständiga tack och länkar →',
    related: 'Relaterade Strix-verktyg',
    winInstall: 'Ladda ner installationsguiden och kör den — genvägar i Startmenyn och ett avinstallationsprogram skapas åt dig.',
    dangerFallback: 'Detta verktyg förstör data permanent och kan inte ångras. Läs säkerhetsguiden före användning.',
    copy: 'Kopiera',
    copied: 'Kopierat ✓',
    glance: 'i korthet',
  },
};

export const categories = {
  Privacy: 'Integritet',
  System: 'System',
  Security: 'Säkerhet',
  Diagnostics: 'Diagnostik',
  Recon: 'Spaning',
  OSINT: 'OSINT',
};

export const security = {
  h1: 'Verifiera oss — lita inte bara på oss.',
  lead:
    'Strix Advanced Tools är gratis, öppen källkod (MIT) och byggda för att köras helt offline. Våra Windows-byggen är ännu inte kodsignerade med ett betalt certifikat — vi är ett litet, oberoende projekt utan budget, och vi säger hellre det rakt ut än döljer det. Eftersom varje verktyg har öppen källkod behöver du inte ta vårt ord på något. Så här kontrollerar du det själv.',
  boldNotSigned: 'ännu inte kodsignerade med ett betalt certifikat',
  updatedLabel: 'Senast uppdaterad',
  why: [
    { t: 'Källkoden är offentlig', d: 'Varje verktyg är ett offentligt GitHub-repository under MIT-licensen. Läs varje rad, bygg om det själv och bekräfta att det gör exakt vad det utlovar.' },
    { t: 'Byggena är attesterade', d: 'Varje release bär en GitHub build-provenance-attestering (SLSA Build L2) — kryptografiskt bevis på att filen byggdes från denna källkod, på GitHubs servrar, oförändrad sedan dess.' },
    { t: 'Inget rapporterar hem', d: 'Skrivbordsverktygen gör noll nätverksanrop. Dra ur nätverkskabeln och de fungerar ändå; övervaka din utgående trafik så ser du ingen.' },
  ],
  verify: {
    h2: 'Verifiera din nedladdning',
    sub: 'Verifiering är valfritt — om du laddade ner från en GitHub-release är du redan trygg. Men om du vill vara säker levereras varje release med en SHA256SUMS-fil, och så här kontrollerar du mot den. Byt ut exempelfilnamnet mot verktyget du laddade ner.',
    anyOs: 'Valfritt OS',
    winStt: 'Kontrollera kontrollsumman',
    winIntro: 'I mappen där du sparade nedladdningen, kör PowerShell:',
    winExp: 'Jämför den utskrivna hashen med motsvarande rad i SHA256SUMS. Om de är identiska är filen byte för byte det vi publicerade:',
    nixStt: 'Kontrollera kontrollsumman',
    nixIntro: 'Placera nedladdningen och dess SHA256SUMS i samma mapp, sedan:',
    nixExp: 'Ett ord som svar per fil — du vill ha OK:',
    provStt: 'Verifiera byggets ursprung',
    provIntro: 'Starkare än en kontrollsumma: bevisa att binären byggdes från vår offentliga källkod i vår offentliga CI. Kräver GitHub CLI 2.49+:',
    provExp: 'En grön rad om lyckat resultat som namnger exakt det källkodsrepository som producerade filen:',
    note: 'Kontrollsummor publiceras i varje GitHub-release och speglas över HTTPS — exempel SHA256SUMS. Ursprungsattesteringen lagras på GitHub, inte av oss, så varken vi eller en komprometterad nedladdningsspegel kan förfalska den.',
  },
  data: {
    h2: 'Vilka data lämnar din maskin',
    sub: 'Kortversionen: för skrivbordsverktygen, inga. Här är det i sin helhet — och varje rad är något du kan bekräfta med en paketfångst.',
    thCategory: 'Kategori',
    thWhat: 'Vad det är',
    thWhere: 'Vart det går',
    rows: [
      ['Filerna du bearbetar', 'Metadata, diskinnehåll, arkiv — läses och skrivs på plats på din maskin.', 'Laddas aldrig upp. Inget skickas någonstans.'],
      ['Dina systemuppgifter', 'Värdnamn, användarnamn, serienummer, IP-adresser, hårdvara — visas endast inuti appen.', 'Visas lokalt; överförs aldrig.'],
      ['Inställningar och rapporter', 'Inställningar, loggar, HTML-/PDF-rapporter.', 'Sparas på disk (%LOCALAPPDATA% / ~/.config); synkas aldrig till en server.'],
      ['Användnings- och kraschanalys', 'Ingen. Det finns inget analys-SDK, ingen telemetri, ingen hemrapportering.', 'Inget samlas in, någonsin.'],
      ['Utgående nätverkstrafik (skrivbordsverktyg)', 'MetaVault, Pulse, Inspector, Sentinel, Sinkhole, Talon.', 'Noll utgående sockets. Koppla från nätverket — de fungerar ändå.'],
      ['Utgående nätverkstrafik (spaningsverktyg)', 'Vantage och Archer — vars hela uppgift är nätverket.', 'Endast nyckellösa offentliga API:er som du uttryckligen utlöser, efter en samtyckesgrind, begränsade av tidsgränser.'],
    ],
  },
  av: {
    h2: 'Varningar från antivirus och SmartScreen',
    intro1: 'Eftersom våra Windows-appar är osignerade och paketerade med PyInstaller kan Windows SmartScreen säga',
    intro2: 'och en handfull av de cirka 70 antivirusmotorerna kan flagga installationsprogrammet.',
    intro3: 'Detta är att vänta för ny, osignerad programvara med öppen källkod — det är en generisk heuristik om hur appen är paketerad, inte en upptäckt av faktisk skadlig kod.',
    unknownPublisher: 'okänd utgivare',
    notCommon: 'sällan nedladdad,',
    list: [
      { b: 'Varför det händer:', r: 'PyInstaller-bootloadern är ett vanligt paketeringsformat (skadlig kod använder det också), en helt ny fil har inget nedladdningsrykte, och osignerade binärer får en ”misstänkt tills bevisad”-bestraffning.' },
      { b: 'Det verkliga beviset', r: 'är kontrollsumman och ursprungsattesteringen ovan, plus källkoden du kan läsa — inte någon leverantörs heuristik.' },
      { b: 'Vad vi gör:', r: 'vi rapporterar falska positiva resultat till leverantörer när de dyker upp, och vi ansöker till SignPath Foundations kostnadsfria kodsigneringsprogram för projekt med öppen källkod, som vi kommer att införa allteftersom ryktet byggs upp.' },
      { b: 'Inaktivera aldrig ditt antivirusprogram.', r: 'Om du är osäker, verifiera kontrollsumman eller kör verktyget från källkoden.' },
    ],
    tiny: 'Vi länkar en live-VirusTotal-skanning per bygge när en release är ute, så att du kan se det aktuella resultatet själv. Vi kommer aldrig att lägga upp en skärmdump av en ”ren skanning” eller påstå ”noll upptäckter” — en live-länk du kan klicka på slår en skärmdump som blir inaktuell vid nästa bygge.',
  },
  read: {
    h2: 'Läs källkoden',
    sub: 'Den starkaste försäkran av alla. Kör grep i valfritt repo efter socket, urllib, requests eller http och se själv vad som rör — och inte rör — nätverket.',
    view: 'Visa källkod ↗',
  },
  threat: {
    h2: 'Hotmodell',
    items: [
      ['Vad Strix skyddar mot', 'Data som läcker genom filmetadata, återställbara data på kasserade diskar, spårar-/telemetri-/annonsdomäner, tysta utgående anslutningar, okända autostarter och enheter, samt verktyg med sluten källkod som du inte kan granska.'],
      ['Vad Strix INTE är', 'Det är inte antivirus/EDR, inte en sandlåda och inte ett försvar mot ett komprometterat OS eller skadlig kod som redan körs som administratör. Skrivbordsverktygen synliggör information och agerar på din order; de bekämpar inte aktiva hot i realtid.'],
      ['Förtroendegräns', 'Ursprung bevisar att en nedladdning kom oförändrad från denna offentliga källkod via GitHub CI. Det bevisar inte att källkoden är ofarlig — det är vad den öppna MIT-koden, som du kan läsa och bygga om, är till för.'],
    ],
  },
  report: {
    h2: 'Hittat en sårbarhet?',
    p: 'Rapportera den privat — öppna inte ett offentligt ärende för en säkerhetsbugg. Varje repository har en SECURITY.md med hotmodellen och en väg för koordinerad sårbarhetsrapportering, och GitHubs privata sårbarhetsrapportering är aktiverad. Vi kommer inte att vidta repressalier, och vi krediterar dig gärna om du vill.',
    btnPolicy: 'Säkerhetspolicy',
    btnRepos: 'Alla repositorier',
  },
};

export const apps = {
  'strix-metavault': {
    tagline: 'Radera dold metadata och lås sedan dina filer med AES-256-kryptering.',
    summary:
      'Varje foto, dokument och PDF du delar bär dolda spår — GPS-koordinater, ditt namn, enheten du använde, redigeringshistorik. Strix MetaVault tar bort allt detta och förseglar sedan valfritt de rensade filerna i ett AES-256-krypterat 7-Zip-arkiv med dolda filnamn och ett slumpmässigt engångslösenord. Helt offline, inga konton, ingen telemetri.',
    features: [
      'Tar bort EXIF, GPS, IPTC och XMP från bilder; författare/företag/historik från Office- och PDF-filer',
      'Valfritt AES-256-arkiv med krypterade filnamn och ett slumpmässigt genererat utdatanamn',
      'Genererar ett starkt engångslösenord som aldrig skrivs till disk eller loggar',
      'Vägrar svaga egna lösenord; skyddad mot symlänkattacker och zip-bomber',
      'Dina original ändras aldrig — allt körs på kopior',
    ],
    definition:
      'Strix MetaVault är en gratis metadataborttagare och filkrypterare med öppen källkod för Windows och Linux som tar bort dold EXIF/GPS- och dokumentmetadata och sedan valfritt låser dina filer i ett AES-256-krypterat arkiv — helt offline, utan konton och utan telemetri.',
    notFor: [
      'Det laddar aldrig upp dina filer — all rensning sker lokalt, till skillnad från metadataborttagare online.',
      'Det uppfinner inte sin egen kryptografi: krypteringen delegeras till den granskade 7-Zip AES-256.',
      'Det är inte en molntjänst och kräver inget konto.',
    ],
    faq: [
      ['Fungerar det utan 7-Zip eller ExifTool?', 'JPEG och PNG rensas med den inbyggda motorn. För alla andra format och för krypterad arkivering, installera 7-Zip och ExifTool (eller lägg dem bredvid appen).'],
      ['Kan jag återställa ett förlorat arkivlösenord?', 'Nej. Lösenordet visas en gång och lagras aldrig. Spara det i en lösenordshanterare omedelbart — krypteringen är verkligen omöjlig att knäcka utan det.'],
    ],
    seoTitle: 'Strix MetaVault — Metadataborttagare och filkrypterare',
    seoDescription: 'Gratis verktyg med öppen källkod för att ta bort EXIF/GPS- och dokumentmetadata och sedan låsa dina filer i ett AES-256-krypterat arkiv. Offline, ingen telemetri. Windows och Linux.',
  },
  'strix-pulse-monitor': {
    tagline: 'En lättöverskådlig övervakare, alltid överst, för hela din maskin.',
    summary:
      'En elegant, ramlös skrivbordswidget som svävar ovanför ditt arbete och visar CPU-, GPU-, RAM- och diskanvändning i realtid tillsammans med nätverkets nedladdning och uppladdning i realtid — uppdaterat varje sekund. Dra den vart som helst, fäst den på plats eller stoppa in den i systemfältet. Ingen egen nätverksåtkomst, ingen telemetri.',
    features: [
      'CPU-, GPU-, RAM- och lagringsbelastning i realtid plus nätverksgenomströmning, en gång per sekund',
      'GPU-avläsningar från NVIDIA, Windows prestandaräknare eller AMD sysfs på Linux',
      'Ramlös glaswidget som du kan dra, fästa eller dölja i systemfältet',
      'Kommer ihåg sin position; inställningar valideras och skrivs atomärt',
    ],
    definition:
      'Strix Pulse Monitor är en gratis systemövervakningswidget för skrivbordet med öppen källkod för Windows och Linux som visar CPU-, GPU-, RAM-, disk- och nätverksanvändning i realtid i en alltid överst-glaspanel — offline, utan telemetri.',
    notFor: [
      'Det rapporterar inte hem till något och samlar inte in någon användningsdata.',
      'Det är en lättöverskådlig övervakare i realtid, inte en prestandatestsvit (se Strix Inspector för prestandatester).',
      'Det kräver inga administratörsrättigheter för att köras.',
    ],
    faq: [
      ['Varför visar GPU-raden N/A?', 'Intel-GPU:er på Linux kräver privilegierade verktyg, så widgeten visar N/A istället för att be om root. NVIDIA och AMD stöds direkt.'],
      ['Kan den starta med min session?', 'Ja — på Windows lägger du till en genväg i Autostart-mappen; på Linux kör du installationsprogrammet med --autostart.'],
    ],
    seoTitle: 'Strix Pulse Monitor — CPU/GPU/RAM- och nätverkswidget',
    seoDescription: 'En elegant, alltid överst-skrivbordswidget som visar CPU-, GPU-, RAM-, disk- och nätverksanvändning i realtid. Öppen källkod, offline, ingen telemetri. Windows och Linux.',
  },
  'strix-sentinel': {
    tagline: 'Vet vad som körs, tittar och lyssnar på din maskin.',
    summary:
      'En lokal, offline vakthund som besvarar fem frågor: vad som startar med din maskin, vilka nya processer som dyker upp, vilken app som använder din mikrofon eller kamera, vem som har loggat in och vilka okända enheter som finns i ditt nätverk. Ett mörkt, fokuserat GUI på Windows; ett skriptbart CLI på Linux. Inget lämnar någonsin din dator.',
    features: [
      'Autostartsgranskning som flaggar allt nytt sedan din godkända baslinje',
      'Realtidsbevakning av nystartade processer, med fullständiga sökvägar till körbara filer',
      'Upptäcker vilken applikation som för närvarande använder din mikrofon eller kamera',
      'Inloggningsgranskning och en vakt för det lokala nätverket som flaggar okända enheters MAC-adresser',
    ],
    definition:
      'Strix Sentinel är en gratis, offline säkerhetsövervakare med öppen källkod för Windows och Linux som granskar vad som startar med din maskin, bevakar nya processer, upptäcker användning av mikrofon/kamera, granskar inloggningar och flaggar okända enheter i ditt nätverk — utan någon egen utgående nätverkstrafik.',
    notFor: [
      'Det är inte ett antivirus eller EDR — det synliggör förändringar som du får bedöma; det sätter aldrig i karantän eller blockerar.',
      'Det skickar aldrig några data från din maskin.',
      'Linux-utgåvan är avsiktligt ett skriptbart CLI (inget GUI).',
    ],
    faq: [
      ['Kräver inloggningsgranskningen administratörsrättigheter?', 'Ja — att läsa säkerhetsloggen kräver administratör på Windows och root på Linux. Alla andra kontroller körs utan privilegier.'],
      ['Finns det ett Linux-GUI?', 'Linux-utgåvan är avsiktligt ett rent kommandoradsverktyg — det körs utan skärm och över SSH, vilket passar en säkerhetsövervakare. Det delar samma testade upptäcktskärna som Windows-GUI:t.'],
    ],
    seoTitle: 'Strix Sentinel — Offline säkerhets- och integritetsövervakare',
    seoDescription: 'Se vad som startar och körs, vilken app som använder din mikrofon/kamera, granska inloggningar och upptäck okända enheter i ditt nätverk. Öppen källkod, offline. Windows-GUI och Linux-CLI.',
  },
  'strix-inspector': {
    tagline: 'En komplett, skrivskyddad bild av din hårdvara — på några sekunder.',
    summary:
      'En exakt, skrivskyddad inventering av din maskin — operativsystem, CPU, minne ända ner till varje DIMM, GPU:er, diskar, moderkort, BIOS och batteri — presenterad som konsoltext, maskinläsbar JSON eller en polerad fristående HTML-instrumentpanel. Den kör även snabba prestandatester för CPU, minne och disk. Inget nätverk, inga förhöjda rättigheter krävs.',
    features: [
      'Fullständig inventering: OS, CPU, minne per DIMM, GPU:er, diskar, kort, BIOS, batteri',
      'Tre utdataformat: konsol, JSON och en mörk/ljus HTML-instrumentpanel',
      'Inbyggda mikroprestandatester för CPU, minne och disk',
      'Körs på Linux via .NET 8 och återanvänder samma härdade SMBIOS-parser som på Windows',
    ],
    definition:
      'Strix Inspector är ett gratis, skrivskyddat verktyg för hårdvaruinformation och prestandatester med öppen källkod för Windows och Linux som inventerar din CPU, RAM per DIMM, GPU, diskar, moderkort och BIOS som konsoltext, JSON eller en fristående HTML-instrumentpanel — utan nätverksåtkomst.',
    notFor: [
      'Det är strikt skrivskyddat — det ändrar aldrig inställningar, överklockar inte och flashar inte firmware.',
      'Det kräver ingen installation av körtidsmiljö på Windows och inga förhöjda rättigheter för att köras.',
      'Det skickar inga data någonstans.',
    ],
    faq: [
      ['Behöver jag installera en körtidsmiljö?', 'På Windows använder det det inbyggda .NET Framework — inget att installera. Linux-bygget levereras som en fristående binär.'],
      ['Varför kräver vissa fält administratör?', 'Diskstorlekar, DIMM-detaljer och BIOS-strängar kommer från privilegierade gränssnitt. Utan förhöjda rättigheter körs verktyget ändå och noterar helt enkelt vad det hoppade över.'],
    ],
    seoTitle: 'Strix Inspector — Verktyg för hårdvaruinformation och prestandatester',
    seoDescription: 'Skrivskyddad hårdvaruinventering (CPU, RAM per DIMM, GPU, diskar, BIOS) plus prestandatester — som konsoltext, JSON eller en HTML-instrumentpanel. Öppen källkod. Windows och Linux.',
  },
  'strix-disk-cleaner': {
    tagline: 'Radera en disk för gott — med en sköld mot att radera fel disk.',
    summary:
      'Radera permanent och verifierbart en hel disk enligt standarderna NIST SP 800-88 och DoD 5220.22-M — med hårdvarusanering där det är möjligt, eller överskrivning i flera pass. En flerskiktad säkerhetssköld gör det omöjligt att välja din systemdisk, och varje destruktiv åtgärd kräver inskriven bekräftelse. Windows levereras med ett fullständigt GUI med ett utskrivbart raderingscertifikat; Linux levereras med en enhetstestad kommandoradsraderare.',
    features: [
      'En flerskiktad sköld: din systemdisk och alla monterade diskar kan aldrig väljas',
      'Hårdvarusanering (blkdiscard, nvme, hdparm) eller överskrivning i flera pass',
      'Inskriven ERASE-bekräftelse med en förnyad kontroll omedelbart innan skrivning',
      'Enhetstestad säkerhetslogik; ett utskrivbart raderingscertifikat på Windows',
    ],
    definition:
      'Strix Disk Cleaner är en gratis, säker diskraderare med öppen källkod för Windows och Linux som permanent raderar en disk enligt standarderna NIST SP 800-88 och DoD 5220.22-M, med en flerskiktad säkerhetssköld som gör det omöjligt att radera din systemdisk.',
    notFor: [
      'Det kan inte välja eller radera din system-/startdisk eller någon monterad volym — avsiktligt.',
      'Det raderar hela diskar, inte enskilda filer.',
      'Det gör inga nätverksanrop och kräver inget konto.',
    ],
    faq: [
      ['Kan jag råka radera min Windows-/Linux-disk?', 'Nej. System- och startdisken upptäcks och döljs; på Linux nekas alla monterade diskar. Du måste dessutom skriva in enhetens sökväg och ordet ERASE.'],
      ['Räcker överskrivning för en SSD?', 'Inte tillförlitligt — slitageutjämning i flashminne kan lämna kvar data. Verktyget upptäcker SSD:er och styr dig mot en hårdvarusanering (blkdiscard / nvme), som är grundlig.'],
    ],
    seoTitle: 'Strix Disk Cleaner — Säker diskraderare (NIST/DoD)',
    seoDescription: 'Radera en disk permanent enligt NIST SP 800-88 / DoD 5220.22-M med en flerskiktad sköld som aldrig kan radera din systemdisk. Öppen källkod. Windows-GUI och Linux-CLI.',
  },
  'strix-vantage': {
    tagline: 'Ett kommando kör en fullständig, WAF-säker spaningspipeline på ditt labb.',
    summary:
      'Vantage kedjar samman ett tjugofemtal branschstandardverktyg för Kali — uppräkning av subdomäner, livskontroll, port- och TLS-skanningar, crawling, fuzzing och sårbarhetskontroller — till ett enda kommando med terminalstatus i realtid och en prydlig rapport. Det är byggt för att skärpa dina färdigheter inom webbsäkerhet mot ett lokalt avsiktligt sårbart labb (eller vilket mål som helst som du äger eller har tillstånd att testa), med en IDS/WAF-säker, långsam och försiktig design och ett valfritt terminalgränssnitt.',
    features: [
      'Kedjar samman cirka 25 verktyg (nmap, nuclei, httpx, ffuf, katana, sqlmap, …) till en spaningspipeline',
      'IDS/WAF-säker från grunden: lägre hastighet + jitter, inte snabbare hamrande (profilerna stealth/thorough)',
      'Begränsar aktiv skanning till ditt primära mål; ett lätt fingeravtryck på allt annat',
      'Terminalstatus i realtid + en formaterad rapport; valfritt Textual-TUI med en historikläsare',
      'Härdat: inget skal (endast argv), och autoinstallation är frivillig med en varning om leveranskedjan',
    ],
    definition:
      'Strix Vantage är en gratis pipeline för spaningsautomation med öppen källkod för Linux som kedjar samman cirka 25 Kali-verktyg (nmap, nuclei, httpx, ffuf med flera) till ett WAF-säkert kommando för auktoriserad penetrationstestövning mot ditt eget avsiktligt sårbara labb.',
    notFor: [
      'Det är endast för auktoriserade mål — en engångsgrind för samtycke upprätthåller detta innan någon aktiv skanning.',
      'Det orkestrerar uppströmsverktyg; det buntar inte med eller ändrar dem.',
      'Det finns endast för Linux/Kali (inget bygge för Windows eller macOS).',
    ],
    dangerText: 'Vantage skickar aktiv skanningstrafik (portskanningar, fuzzing, sårbarhetssonder). Använd det ENDAST mot system du äger eller uttryckligen har tillstånd att testa — t.ex. ditt eget lokala avsiktligt sårbara labb. Otillåten skanning är olaglig på de flesta platser.',
    faq: [
      ['Är detta lagligt att använda?', 'Endast mot system du äger eller uttryckligen har tillstånd att testa — som en avsiktligt sårbar övningsapp eller ett cybersäkerhetslabb som du kontrollerar. Aktiv skanning av system du inte äger är olaglig i de flesta jurisdiktioner; du ansvarar för din användning.'],
      ['Kräver det Kali eller root?', 'Det är avsett för Kali Linux och dess standardverktygskedja; sudo aktiverar SYN-skanningar och den (frivilliga) autoinstalleraren. Det körs på andra Linux-distributioner när verktygen redan är installerade.'],
    ],
    creditsNote: 'Vantage orkestrerar dessa verktyg med öppen källkod — det buntar inte med eller ändrar dem. Stort tack till varje uppströmsprojekt.',
    seoTitle: 'Strix Vantage — Spaningsautomation för CTF:er och pentestlabb',
    seoDescription: 'Kedja samman cirka 25 Kali-spaningsverktyg (nmap, nuclei, ffuf, httpx…) till en WAF-säker pipeline för auktoriserad pentestövning på ett lokalt avsiktligt sårbart labb. Öppen källkod.',
  },
  'strix-archer': {
    tagline: 'Passiv OSINT för CTF-utmaningar och auktoriserade labbmål.',
    summary:
      'Strix Archer kombinerar en beroendefri OSINT-motor som endast använder standardbiblioteket med omslag för populära verktyg — den använder Sherlock, maigret, holehe, theHarvester och SpiderFoot när de är installerade och faller tillbaka på sin egen implementering när de inte är det. Den utför domänspaning (DNS-over-HTTPS, RDAP/WHOIS, crt.sh-subdomäner, HTTP + fingeravtryck av säkerhetsheaders), identitetsspaning (hastighetsbegränsad användarnamnsskanning, GitHub-OSINT, Gravatar, intrångssökning) och en säker HIBP k-anonymitetslösenordskontroll. En engångsgrind för samtycke håller det till auktoriserad labbanvändning; allt är passivt och skrivskyddat, med en .txt- och en mörk HTML-rapport.',
    features: [
      'Inbyggd stdlib-motor + omsluter automatiskt Sherlock / maigret / holehe / theHarvester / SpiderFoot när de finns',
      'Domän: DNS-over-HTTPS, RDAP/WHOIS, crt.sh-subdomäner, HTTP + kontroll av saknade säkerhetsheaders',
      'Identitet: hastighetsbegränsad användarnamnsskanning, GitHub-OSINT (e-postadresser läckta i commits), Gravatar, XposedOrNot-intrångssökning',
      'Säker kontroll av lösenordsintrång via HIBP k-anonymitet — lösenordet lämnar aldrig din maskin',
      'Engångsgrind för samtycke, hastighetsbegränsad från grunden; passiv och skrivskyddad; .txt + mörk HTML-rapport',
    ],
    definition:
      'Strix Archer är ett gratis OSINT-verktyg med öppen källkod för Linux — byggt för CTF-utmaningar och auktoriserade labbmål — som utför passiv domän- och identitetsspaning (DNS/RDAP/crt.sh, sökning av användarnamn och e-post, GitHub-OSINT, intrångskontroller) plus en säker HIBP k-anonymitetslösenordskontroll.',
    notFor: [
      'Det är passivt och skrivskyddat — det utnyttjar aldrig eller angriper aktivt ett mål.',
      'Det är endast för auktoriserad användning — en engångsgrind för samtycke kräver ett bekräftande.',
      'Kontrollen av lösenordsintrång skickar aldrig ditt lösenord (HIBP k-anonymitet).',
    ],
    dangerText: 'Strix Archer utför OSINT-insamling och visar en engångsgrind för samtycke. Använd det ENDAST mot CTF-utmaningar / fiktiva karaktärer eller mål som du äger eller har tillstånd att testa. Att profilera verkliga människor utan samtycke kan vara olagligt.',
    faq: [
      ['Är detta lagligt att använda?', 'Endast mot CTF-utmaningar / fiktiva karaktärer eller mål som du äger eller uttryckligen har tillstånd att testa. Att profilera verkliga människor utan samtycke kan utgöra trakasserier och kan vara olagligt — en engångsgrind för samtycke kräver ett bekräftande.'],
      ['Behöver jag installera något?', 'Nej — den inbyggda motorn är rent Python-standardbibliotek. Valfria verktyg (Sherlock, holehe, …) omsluts automatiskt om de finns, och `--setup` installerar dem i isolerade pipx-miljöer så att ditt system-Python förblir orört.'],
    ],
    creditsNote: 'Strix Archer omsluter dessa verktyg med öppen källkod och offentliga tjänster — det buntar inte med eller ändrar dem. Tack till varje uppströmsprojekt och tjänst.',
    seoTitle: 'Strix Archer — OSINT-verktyg för CTF:er och auktoriserade labbmål',
    seoDescription: 'Passiv OSINT för auktoriserade labb-/CTF-mål: domänspaning (DNS/RDAP/crt.sh), sökning av användarnamn och e-post, GitHub-OSINT, intrångskontroller och en säker HIBP-lösenordskontroll. Öppen källkod.',
  },
  'strix-sinkhole': {
    tagline: 'Blockera spårare, telemetri och annonser i din hosts-fil — offline, återställbart, med ett klick.',
    summary:
      'Strix Sinkhole hanterar säkert ditt systems hosts-fil för att nolldirigera kända spårar-, telemetri- och annonsdomäner till 0.0.0.0, så att en uppslagning dör på din egen maskin innan någon begäran lämnar den — ingen server som Pi-hole, inget tillägg per webbläsare, ingen bakgrundsdemon och inga egna nätverksanrop. Allt den skriver lever inuti ett namnrymdsavgränsat block, så dina egna hosts-poster och systemets standardvärden kopieras byte för byte och rörs aldrig. En inbyggd vakt vägrar att nolldirigera kritisk infrastruktur (OS-uppdatering, certifikatåterkallelse/OCSP, tidssynkronisering, localhost) oavsett vad någon blockeringslista säger, så den kan aldrig i tysthet förstöra din maskin. Varje ändring föregås av en tidsstämplad säkerhetskopia och är återställbar med ett klick, med en torrkörnings-diff av exakt vad som kommer att ändras och en tillåtelselista för falska positiva.',
    features: [
      'Nolldirigerar spårar-/telemetri-/annonsdomäner i hela systemet via hosts-filen — offline, ingen server, inget tillägg',
      'Namnrymdsavgränsat hanterat block: dina egna och systemets hosts-poster bevaras byte för byte (verifieras före varje skrivning)',
      'Vakt för kritiska domäner: OS-uppdatering, OCSP/CRL, tidssynkronisering och localhost kan aldrig nolldirigeras av någon lista',
      'Tidsstämplad säkerhetskopia före varje skrivning + återställning med ett klick; förhandsvisning av torrkörnings-diff; tillåtelselista för falska positiva',
      'Utvald frölista medföljer; importera din egen eller välj att aktivera en begränsad HTTPS-uppdatering; mörkt GUI (Windows) + `strixsink`-CLI (Linux)',
    ],
    definition:
      'Strix Sinkhole är en gratis, offline annons- och spårarblockerare via hosts-filen med öppen källkod för Windows och Linux som nolldirigerar spårar-, telemetri- och annonsdomäner i hela systemet — utan någon server som Pi-hole, utan webbläsartillägg och utan DNS-vidarebefordran.',
    notFor: [
      'Det är inte en DNS-server av Pi-hole-typ och vidarebefordrar inga av dina frågor någonstans.',
      'Det är inte ett webbläsartillägg — det redigerar en enkel, granskningsbar hosts-fil som du kan återställa.',
      'Det blockerar på hosts-nivå; det krypterar inte din uppströms-DNS.',
    ],
    faq: [
      ['Hur skiljer sig detta från Pi-hole eller ett webbläsartillägg?', 'Ingen separat server eller Raspberry Pi (Pi-hole), och det är inte ett tillägg per webbläsare som självt kan läsa din surfning — Strix Sinkhole redigerar en hosts-fil i klartext som varje teknisk användare kan granska och återställa. Inget körs i bakgrunden och inget vidarebefordrar dina DNS-frågor någonstans.'],
      ['Kan en dålig blockeringslista förstöra min dator?', 'Nej. En inbyggd vakt vägrar att nolldirigera kritisk infrastruktur (OS-uppdatering, certifikatåterkallelse, tidssynkronisering, localhost) oavsett vad en lista säger, varje ändring säkerhetskopieras först, och ett klick återställer exakt originalet. Observera att det blockerar på hosts-nivå och inte krypterar DNS uppströms.'],
    ],
    creditsNote: 'Strix Sinkhole levereras endast med sin egen lilla utvalda frölista och buntar inte med dessa listor — det låter dig importera dem, var och en under sin egen licens. Tack till ekosystemet av offentliga blockeringslistor.',
    seoTitle: 'Strix Sinkhole — Offline annons- och spårarblockerare via hosts-filen',
    seoDescription: 'Blockera spårare, telemetri och annonser i hela systemet genom att nolldirigera dem i din hosts-fil — helt offline, ingen server, inget webbläsartillägg. Tidsstämplade säkerhetskopior, återställning med ett klick, förstör aldrig kritiska domäner. Öppen källkod, Windows och Linux.',
  },
  'strix-talon': {
    tagline: 'Se varje apps utgående trafik — och strypa dem du inte litar på.',
    summary:
      'Strix Talon är en levande utgående karta per process: vilken applikation som pratar med vilken fjärradress och port, uppdaterad en gång per sekund, med helt nya destinationer flaggade i samma ögonblick de dyker upp. Ovanpå den skrivskyddade synligheten ligger ett valfritt regellager — ”denna app får aldrig röra internet”, ”blockera denna adress”, och en global kill-switch som skär av all utgående trafik utom loopback (behåller valfritt ditt LAN). Avgörande nog levereras Talon utan någon kärndrivrutin: varje regel översätts till OS:ets egen brandvägg — Windows Defender Firewall via netsh, Linux via en privat nftables-tabell — och namnges så att den kan återställas med ett klick utan att någonsin röra dina befintliga regler. Det synliggör även lokala lyssnande sockets, så att du ser inkommande exponering och utgående prat i en och samma vy.',
    features: [
      'Utgående karta per app i realtid: app → fjärr-IP/port/tillstånd, uppdaterad var ~2:e sekund, nya destinationer markerade',
      'Blockera en app (Windows) eller en adress (alla plattformar), plus en global kill-switch (blockera all utgående trafik utom loopback)',
      'Verkställs via ditt OS:s brandvägg (Windows Defender Firewall / nftables) — ingen kärndrivrutin att lita på eller signera',
      'Varje regel är namnrymdsavgränsad och återställbar med ett klick — Talon rör aldrig dina befintliga brandväggsregler; loopback blockeras aldrig',
      'Ser även inkommande exponering (lyssnande 0.0.0.0 vs 127.0.0.1); modernt PySide6-GUI på Windows + ett `talon`-CLI på Linux',
    ],
    definition:
      'Strix Talon är en gratis utgående brandvägg per app och egress-övervakare med öppen källkod för Windows och Linux som visar vilken applikation som pratar med vilken fjärradress i realtid och låter dig blockera valfri app eller adress — eller all utgående trafik — verkställt via ditt OS:s egen brandvägg, utan någon kärndrivrutin.',
    notFor: [
      'Det levereras utan kärndrivrutin — det styr ditt inbyggda OS:s brandvägg (Windows Defender Firewall / nftables).',
      'Det visar inte live-popup:er för att tillåta/neka anslutningar i v1.',
      'Blockering per app finns endast på Windows; på Linux blockerar det efter destinationsadress.',
    ],
    faq: [
      ['Hur skiljer sig detta från Little Snitch eller GlassWire?', 'Talon har öppen källkod, noll telemetri och körs på Windows OCH Linux (Little Snitch finns endast för macOS och är betald; GlassWire har sluten källkod). Avgörande nog delegerar det verkställigheten till ditt inbyggda OS:s brandvägg istället för att leverera en kärndrivrutin, och varje regel är en enkel, granskningsbar brandväggspost som du kan inspektera och återställa.'],
      ['Kan det låsa ute mig från min egen maskin?', 'Nej. Loopback är alltid undantaget, kill-switchen håller localhost (och valfritt ditt LAN) nåbart, varje regel är namnrymdsavgränsad som StrixTalon-* / lever i en privat nftables-tabell, och ett klick (eller `sudo talon revert`) tar bort allt Talon lade till utan att röra dina andra brandväggsregler. Observera: live-popup:er för att ”tillåta/neka denna nya anslutning” ingår inte i v1; blockering per app finns endast på Windows (Linux blockerar efter adress).'],
    ],
    creditsNote: 'Strix Talon kartlägger sockets med psutil, bygger sitt gränssnitt med PySide6 och verkställer via ditt OS:s brandvägg — det delar ingen kod med Little Snitch / GlassWire / OpenSnitch; de krediteras endast som inspiration.',
    seoTitle: 'Strix Talon — Utgående brandvägg per app (Windows och Linux)',
    seoDescription: 'Se varje apps utgående trafik och blockera det du inte litar på — en utgående brandvägg per app med öppen källkod + anslutningsövervakare för Windows och Linux. Verkställs via ditt OS:s brandvägg (ingen kärndrivrutin), med en global kill-switch. Ingen telemetri, MIT.',
  },
};

export const contribute = {
  h1: 'Bygg ett verktyg. Gör det till en del av Strix.',
  lead:
    'Strix är en svit, inte en instängd trädgård. Om du har byggt ett integritets- eller säkerhetsverktyg med öppen källkod som lever efter samma regler — offline som standard, noll telemetri, genuint granskningsbart — kan du föreslå det. När det väl klarar samma säkerhetsgranskning och härdningsomgång som varje Strix-verktyg genomgår, levereras det under Strix-paraplyet: ett eget repository, en sida på den här webbplatsen på 13 språk och attesterade releaser med kontrollsummor.',
  badge: 'Öppet för verktyg från gemenskapen',
  ctaTop: 'Skicka in ditt verktyg',
  updatedLabel: 'Senast uppdaterad',
  steps: {
    h2: 'Så fungerar det',
    sub: 'Fyra steg från ditt repository till ett färdigt Strix-verktyg — och du behåller upphovsmannaskapet och upphovsrätten hela vägen.',
    list: [
      { n: '01', t: 'Bygg ditt verktyg', d: 'Skriv det på valfritt språk, för Windows och/eller Linux, under en MIT-kompatibel licens. Uppfyll kriterierna nedan: offline, ingen telemetri, en uppgift väl utförd.' },
      { n: '02', t: 'Öppna en inlämning', d: 'Skapa ett inlämningsärende på GitHub med en länk till ditt repo, vad det gör, vilka plattformar det riktar sig till och hur det rör nätverket — om alls. Du behöver inget konto hos oss; bara GitHub.' },
      { n: '03', t: 'Säkerhetsgranskning och härdning', d: 'Vi kör samma grind som varje Strix-verktyg klarade: statisk analys, en granskning av beroenden och leveranskedjan, en motståndarinriktad kodgranskning och en härdningsomgång. Du får resultaten och vi arbetar igenom dem tillsammans.' },
      { n: '04', t: 'Det levereras som Strix', d: 'Vid godkännande får ditt verktyg ett eget repository under Strix-organisationen, en lokaliserad landningssida på den här webbplatsen och releaser med SHA-256-kontrollsummor och en attestering av byggets ursprung.' },
    ],
  },
  criteria: {
    h2: 'Vad ett Strix-verktyg måste vara',
    sub: 'Dessa är icke förhandlingsbara — de är löftena som hela sviten är byggd på. Om ditt verktyg redan lever efter dem kommer det att känna sig som hemma här.',
    list: [
      { t: 'Öppen källkod', d: 'Offentlig källkod under MIT-licensen (eller en MIT-kompatibel tillåtande licens). Inget dolt, inget obfuskerat.' },
      { t: 'Offline som standard', d: 'Inga egna nätverksanrop för ett skrivbordsverktyg. Om nätverket är verktygets hela syfte (recon/OSINT) måste det vara nyckellöst, styrt av samtycke och tydligt avgränsat.' },
      { t: 'Noll telemetri', d: 'Inga analys-SDK:er, ingen hemrapportering, inga konton. Användarens data lämnar aldrig deras maskin.' },
      { t: 'En uppgift, väl utförd', d: 'Ett fokuserat verktyg med förnuftiga standardinställningar, en tydlig avgränsning och ett uttryckligt besked om vad det medvetet inte gör.' },
      { t: 'Dokumenterat och testbart', d: 'En README, en SECURITY.md med en hotmodell och regressionstester för allt som är säkerhetskritiskt.' },
      { t: 'Minsta möjliga behörighet', d: 'Inga skalanrop, ingen dynamisk kodkörning, subprocess-anrop endast via argv, verktygsupplösning med absoluta sökvägar och förhöjda rättigheter endast där det verkligen krävs.' },
    ],
  },
  review: {
    h2: 'Säkerhetsgranskningen som varje inlämning genomgår',
    sub: 'Samma grind som de befintliga verktygen klarade före lanseringen. Inget levereras förrän det klarar den.',
    list: [
      { t: 'Statisk analys (SAST)', d: 'semgrep, bandit, PSScriptAnalyzer, Roslyn-analysatorer och språkanpassade linters över hela kodbasen.' },
      { t: 'Granskning av beroenden och leveranskedjan', d: 'Låsta versioner, en SBOM, pip-audit / Dependabot och en kontroll av att varje tredjepartsberoende är motiverat.' },
      { t: 'Motståndarinriktad kodgranskning', d: 'En mänsklig genomgång som jagar injektion, path traversal, SSRF, rättighetseskalering och all försvagning av en säkerhetskontroll.' },
      { t: 'Härdning', d: 'Vi täpper till luckorna tillsammans: minsta möjliga behörighet, inget skal, indatavalidering, fail-closed-standardvärden och djupförsvar på de farliga kodvägarna.' },
      { t: 'Ursprung för varje release', d: 'CI bygger varje release, skriver en SHA-256 SHA256SUMS och bifogar en SLSA build-provenance-attestering, så att varje nedladdning kan verifieras.' },
    ],
  },
  keep: {
    h2: 'Vad du behåller — och vad du får',
    sub: 'Att bidra till Strix betyder inte att du skriver bort ditt arbete.',
    list: [
      { t: 'Ditt upphovsmannaskap och din upphovsrätt', d: 'Du förblir upphovsperson. MIT-upphovsrätten är din; Strix distribuerar och samunderhåller den tillsammans med dig.' },
      { t: 'En verklig publik', d: 'En lokaliserad landningssida på 13 språk, SEO/GEO-uppkoppling och en plats i verktygsrutnätet och nedladdningarna.' },
      { t: 'En betrodd release-pipeline', d: 'Kontrollsummor, attestering, en så småningom kodsigneringsväg (SignPath Foundation) och en process för säkerhetsrapportering — uppsatt åt dig.' },
      { t: 'Samunderhåll', d: 'Ärenden, PR:er och säkerhetsrapporter flödar genom samma process som resten av sviten. Du står inte ensam.' },
    ],
  },
  cta: {
    h2: 'Redo att skicka in?',
    p: 'Öppna ett inlämningsärende med din repository-länk och en kort beskrivning. Vi tar upp det, kör granskningen och arbetar med dig därifrån. Inte redo än? Läs den fullständiga bidragsguiden först.',
    btnSubmit: 'Skicka in ditt verktyg',
    btnGuide: 'Läs bidragsguiden',
    note: 'För att skicka in krävs bara ett GitHub-konto. Ingen avgift, inget bidragsavtal som tar dina rättigheter och ingen förpliktelse — du kan dra tillbaka när som helst före release.',
  },
  faq: [
    ['Förlorar jag äganderätten till mitt verktyg?', 'Nej. Du behåller upphovsmannaskapet och MIT-upphovsrätten. Strix samunderhåller och distribuerar det tillsammans med dig, och du kan dra tillbaka det före release.'],
    ['Vilka språk eller ramverk är tillåtna?', 'Alla. Den befintliga sviten spänner över Python, C#, PowerShell och mer — det som spelar roll är licensen, reglerna om offline/ingen telemetri och att klara säkerhetsgranskningen, inte teknikstacken.'],
    ['Vad händer om mitt verktyg behöver nätverket?', 'Det är okej endast om nätverket är dess faktiska syfte (som recon/OSINT-verktygen). Det måste då vara nyckellöst, styrt av uttryckligt samtycke, tydligt avgränsat och endast för auktoriserad användning — aldrig tyst trafik eller bakgrundstrafik.'],
    ['Hur lång tid tar granskningen?', 'Det beror på verktygets storlek och hur många fynd som dyker upp. Små, redan härdade verktyg går snabbt; allt som rör destruktiva operationer eller förhöjda rättigheter får extra granskning.'],
    ['Vad händer om det inte klarar sig?', 'Du får alla fynd och kan åtgärda dem och skicka in på nytt. En granskning som hittar problem är processen i arbete — samma sak hände med verktygen som redan finns i sviten.'],
  ],
};

export const donate = {
  h1: 'Stöd Strix — privat.',
  lead:
    'Strix är gratis, MIT-licensierat och bär noll telemetri — och kommer alltid att göra det. Inga annonser, inga konton, inget säljs. Om verktygen sparar dig tid eller håller dig säkrare kan du bidra med Monero (XMR): privat från grunden, precis som allt annat här. Varenda slant går till hosting, ett kodsigneringscertifikat och utvecklingstid.',
  badge: 'Integritetsrespekterande donationer',
  updatedLabel: 'Senast uppdaterad',
  card: {
    label: 'Monero (XMR)-adress',
    scanHint: 'Skanna QR-koden med din plånbok, eller kopiera adressen nedan.',
    copy: 'Kopiera adress',
    copied: 'Kopierat ✓',
    openWallet: 'Öppna i plånbok',
    qrPending: 'En QR-kod visas här så snart donationsadressen är konfigurerad.',
    notConfigured: 'Donationsadressen är inte inställd ännu — kom tillbaka snart.',
  },
  why: {
    h2: 'Varför Monero?',
    sub: 'För att ett integritetsprojekt inte borde be dig att ge upp din integritet för att stödja det.',
    list: [
      { t: 'Privat som standard', d: 'Monero döljer avsändaren, mottagaren och beloppet. Det finns ingen offentlig liggare som kopplar en donation till dig — passande för en svit byggd på att inte spåra dig.' },
      { t: 'Ingen mellanhand, inga konton', d: 'Ingen betalningsförmedlare, ingen registrering och inget tredjepartsskript på den här sidan. Adressen är allt du behöver.' },
      { t: 'Inget spåras här', d: 'Den här sidan laddar ingen analys och gör inga nätverksanrop. Vi kan inte se vem som besökte den eller vem som gav.' },
    ],
  },
  funds: {
    h2: 'Vart det går',
    sub: 'Ett litet, oberoende projekt utan budget. Varje bidrag används öppet:',
    list: [
      { t: 'Hosting och infrastruktur', d: 'Att hålla webbplatsen, releaserna och kontrollsummorna online och snabba.' },
      { t: 'Kodsigneringscertifikat', d: 'Ett OV/EV-certifikat så att installationsprogram slutar utlösa SmartScreen — den enskilt mest efterfrågade förbättringen.' },
      { t: 'Utvecklingstid', d: 'Nya verktyg, Linux-portningar, säkerhetshärdning och att hålla allt gratis och fritt från telemetri.' },
    ],
  },
  otherWays: {
    h2: 'Andra sätt att hjälpa till',
    sub: 'Kan du inte donera? Det här hjälper lika mycket — och kostar ingenting.',
    list: [
      { t: 'Stjärnmärk repona på GitHub', d: 'Synlighet och rykte hjälper verkligen nya användare att hitta och lita på verktygen.' },
      { t: 'Bidra med ett verktyg', d: 'Bygg något som passar sviten och skicka in det för säkerhetsgranskning.' },
      { t: 'Rapportera buggar och falska positiva', d: 'Öppna ärenden, rapportera antivirus-falska positiva till leverantörer och hjälp andra i diskussioner.' },
    ],
  },
  note: 'Donationer är frivilliga gåvor, inte köp — det finns ingen återbetalning, ingen faktura och inget kvitto för skatteavdrag. Ge bara det du bekvämt kan avvara. Tack för att du håller oberoende, integritetsfokuserad programvara vid liv.',
};

export const about = {
  h1: 'Om Strix',
  lead:
    'Vi är en liten, oberoende grupp på fyra vänner — datavetenskapsstudenter baserade i Tyskland — som tröttnat på “integritetsverktyg” man inte faktiskt kan granska. Strix är vad som kom ur det: en svit med integritets- och säkerhetsverktyg som körs helt offline, levereras utan telemetri och är dina att läsa, bygga och lita på. MIT-licensierade, gratis för alltid, inget företag bakom och inget att sälja.',
  badge: 'Oberoende · öppen källkod',
  updatedLabel: 'Senast uppdaterad',
  values: {
    h2: 'Vad vi tror på',
    list: [
      { t: 'Verifiera, lita inte bara', d: 'Varje verktyg är offentlig, MIT-licensierad källkod med en hotmodell. Ta inte vårt ord på det — läs det, bygg det och kontrollera det själv.' },
      { t: 'Integritetsverktyg får inte spionera på dig', d: 'Ingen telemetri, inga konton, ingen analys — inte ens på den här webbplatsen. Dina data lämnar aldrig din maskin.' },
      { t: 'Offline som standard', d: 'Skrivbordsverktygen gör inga egna nätverksanrop. Dra ur kabeln så fungerar de ändå.' },
      { t: 'Gratis, för alltid', d: 'Inga betalnivåer, inga prenumerationer, inga annonser. Om vi någonsin tar emot donationer eller bidrag kommer det aldrig att ändra dessa löften.' },
    ],
  },
  story: {
    h2: 'Varför vi bygger det',
    p1: 'Vi ville att verktygen vi själva kör skulle vara ärliga: inga svarta lådor, inget “lita på oss”, ingen tyst datainsamling. Det mesta av det vi behövde fanns antingen inte som öppen källkod, var inte plattformsoberoende, eller bad oss ge upp vår integritet för att skydda den. Så vi började bygga — ett litet, fokuserat, granskningsbart verktyg i taget.',
    p2: 'Strix är ett sidoprojekt vi bryr oss om, underhållet på vår fritid. Det kommer alltid att vara öppet, och det kommer alltid att vara ärligt om vad det är — inklusive där det brister (installationsprogrammen är inte kodsignerade ännu, och det säger vi rakt ut på Verifiera-sidan).',
  },
  cta: {
    h2: 'Engagera dig',
    p: 'Strix är öppet för alla. Läs källkoden, rapportera en bugg, föreslå ett verktyg, eller skicka in ditt eget för säkerhetsgranskning. Om det hjälper dig är en stjärna på GitHub en genuin hjälp för andra att hitta det.',
    btnGithub: 'Visa på GitHub',
    btnContribute: 'Bidra med ett verktyg',
  },
};

export const alternatives = {
  h1: 'Alternativ med öppen källkod',
  lead:
    'Använder du redan ett integritetsverktyg med sluten källkod eller ett betalt sådant? Chansen är stor att Strix har en ersättning med öppen källkod, offline och utan telemetri — gratis för alltid, MIT-licensierad och din att granska. Här är vad som motsvarar vad.',
  badge: 'Gratis och öppna ersättningar',
  updatedLabel: 'Senast uppdaterad',
  altToLabel: 'Alternativ med öppen källkod till',
  viewTool: 'Visa verktyg →',
  ctaLead: 'Hittar du ingen matchning?',
  ctaText: 'Utforska hela verktygssviten, eller föreslå ett verktyg vi borde bygga.',
  ctaAll: 'Alla verktyg',
  ctaSuggest: 'Föreslå ett verktyg',
};

export default { ui, categories, security, apps, contribute, donate, about, alternatives };
