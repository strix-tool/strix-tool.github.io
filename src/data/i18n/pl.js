// Polish (pl-PL) translation. Mirrors the structure of en.js / site.js.
//   - `ui`        : all site-chrome / marketing strings (re-exported as `t`).
//   - `categories`: display labels for the app-category chips (canonical keys stay English).
//   - `security`  : the /security (Verify) page prose.
//   - `apps`      : per-locale overrides for each app's content.

export const ui = {
  metaDescription:
    'Otwartoźródłowe, działające offline narzędzia do ochrony prywatności i bezpieczeństwa dla systemów Windows i Linux. Bez telemetrii, bez kont, na licencji MIT. Usuwanie metadanych, bezpieczne wymazywanie, blokowanie reklam i trackerów, zapora ruchu wychodzącego dla poszczególnych aplikacji, monitorowanie systemu i wiele więcej.',
  homeSeoTitle: 'Strix Advanced Tools — otwartoźródłowe narzędzia do ochrony prywatności i bezpieczeństwa',
  homeSeoDescription:
    'Dziewięć otwartoźródłowych, działających offline narzędzi do ochrony prywatności i bezpieczeństwa dla systemów Windows i Linux: narzędzie do usuwania metadanych i archiwizator AES-256, bezpieczny wymazywacz dysków, bloker reklam i trackerów oparty na pliku hosts, zapora ruchu wychodzącego dla poszczególnych aplikacji, monitor systemu, informacje o sprzęcie, strażnik bezpieczeństwa oraz narzędzia do rozpoznania i OSINT. Bez telemetrii. Na licencji MIT. Darmowe na zawsze.',
  downloadsSeoTitle: 'Pobierz Strix Advanced Tools — Windows i Linux',
  downloadsSeoDescription:
    'Pobierz pakiet Strix Advanced Tools dla systemów Windows i Linux. Bezpośrednie instalatory i pakiety .deb z GitHub Releases, każdy z sumą kontrolną SHA-256. Darmowe i otwartoźródłowe.',
  keywordsGlobal:
    'otwartoźródłowe narzędzia bezpieczeństwa, narzędzia do ochrony prywatności, windows, linux, narzędzie do usuwania metadanych, narzędzie do usuwania danych exif, bezpieczne wymazywanie dysku, nist 800-88, bloker reklam oparty na pliku hosts, bloker trackerów, bloker telemetrii, dns sinkhole, zapora dla poszczególnych aplikacji, zapora ruchu wychodzącego, monitor ruchu wychodzącego, wyłącznik awaryjny, alternatywa dla little snitch, widżet monitorowania systemu, informacje o sprzęcie, monitor bezpieczeństwa, osint, rozpoznanie, offline, bez telemetrii, licencja MIT',
  tagline: 'Otwartoźródłowe narzędzia do ochrony prywatności i bezpieczeństwa dla systemów Windows i Linux.',
  heroBadge: 'Open source · MIT · Windows i Linux',
  heroTitle: 'Nie ufaj narzędziom bezpieczeństwa. Przeczytaj je.',
  heroSubtitle:
    'Strix Advanced Tools to otwartoźródłowy pakiet narzędzi do ochrony prywatności i bezpieczeństwa dla systemów Windows i Linux. Każde z nich działa w pełni offline, nie zawiera żadnej telemetrii i należy do Ciebie — możesz je audytować, kompilować i obdarzyć zaufaniem — darmowe na zawsze, na licencji MIT.',
  browse: 'Poznaj narzędzia',
  getStarted: 'Pobierz',
  viewOnGithub: 'Dodaj gwiazdkę na GitHub',
  nav: { apps: 'Narzędzia', downloads: 'Pobieranie', github: 'GitHub', security: 'Bezpieczeństwo', contribute: 'Współtwórz', donate: 'Wesprzyj', about: 'O nas', alternatives: 'Alternatywy' },
  allApps: 'Narzędzia',
  allAppsLead: 'Dziewięć wyspecjalizowanych narzędzi. Każde robi jedną rzecz dobrze, offline.',
  features: 'Co robi',
  screenshots: 'Spojrzenie do środka',
  faqTitle: 'Najczęściej zadawane pytania',
  download: 'Pobierz',
  downloadCta: 'Pobierz',
  otherDownloads: 'Wszystkie platformy i sumy kontrolne',
  source: 'Kod źródłowy',
  docs: 'Dokumentacja',
  readme: 'Przeczytaj dokumentację',
  install: 'Instalacja',
  installWindows: 'Windows',
  installLinux: 'Linux (Ubuntu / Debian)',
  security: 'Bezpieczeństwo',
  securityNote:
    'Domyślnie offline, bez powłoki systemowej, bez dynamicznego kodu, zasada najmniejszych uprawnień — a każda linia jest na licencji MIT i otwarta na audyt.',
  category: 'Kategoria',
  backHome: 'Wszystkie narzędzia',
  verified: 'Sumy kontrolne (SHA-256) są publikowane z każdym wydaniem, dzięki czemu możesz zweryfikować pobrany plik.',
  unsigned:
    'Pliki wykonywalne nie są jeszcze podpisane cyfrowo, więc Windows SmartScreen może wyświetlić ostrzeżenie przy pierwszym uruchomieniu — wybierz „Więcej informacji → Uruchom mimo to” lub najpierw zweryfikuj sumę kontrolną. Nigdy nie wyłączaj programu antywirusowego.',
  whyTitle: 'Zbudowane na czterech obietnicach',
  whyLead: 'To nie slogan — każdą obietnicę możesz zweryfikować w kodzie źródłowym, zanim jej zaufasz.',
  why: [
    { k: 'offline', title: 'Offline z założenia', text: 'Żadnych połączeń sieciowych, żadnej telemetrii, żadnych kont. Twoje dane nigdy nie opuszczają maszyny, na której się znajdują.', proof: 'grep na kodzie źródłowym: zero gniazd wychodzących w narzędziach desktopowych' },
    { k: 'hardened', title: 'Utwardzone i przetestowane', text: 'Bez wywołań powłoki, bez dynamicznego kodu, zasada najmniejszych uprawnień — a ścieżki krytyczne dla bezpieczeństwa są objęte prawdziwymi testami regresji.', proof: 'np. wymazywacz dysków odmawia dysku systemowego w 18 testach jednostkowych' },
    { k: 'cross', title: 'Windows i Linux', text: 'Pełnoprawne kreatory instalacji w systemie Windows i natywne pakiety w systemie Linux dla narzędzi desktopowych; narzędzia do rozpoznania/OSINT z Kali dostarczane są jako skrypty dla systemu Linux.', proof: 'wydania z sumami kontrolnymi i atestacją pochodzenia kompilacji GitHub' },
    { k: 'open', title: 'Naprawdę otwarte', text: 'Na licencji MIT, bez żadnych ukrytych warunków. Przeczytaj je, skompiluj samodzielnie, przeprowadź audyt lub wyślij pull request.', proof: 'każde repozytorium jest publiczne na GitHub — nic nie jest ukryte' },
  ],
  downloadsTitle: 'Pobieranie',
  downloadsLead:
    'Pobierz najnowsze wydanie dla swojej platformy. Każde pobranie to bezpośredni plik z GitHub Releases, dostarczany z sumą kontrolną SHA-256.',
  homeFaq: [
    ['Czy narzędzia Strix Advanced Tools są naprawdę darmowe i otwartoźródłowe?', 'Tak. Każde narzędzie jest na licencji MIT i darmowe na zawsze — możesz przeczytać kod źródłowy, skompilować je samodzielnie i wnieść swój wkład. Żadnych płatnych planów, kont, subskrypcji ani reklam, ani teraz, ani nigdy.'],
    ['Kto tworzy Strix i dlaczego mam mu zaufać?', 'Strix Advanced Tools to niezależny projekt open source — a nie firma sprzedająca Twoje dane. Nie musisz ufać na słowo: każde narzędzie to publiczne repozytorium GitHub na licencji MIT, więc Ty (lub ktokolwiek inny) możesz przeczytać każdą linię, skompilować je samodzielnie z kodu źródłowego i potwierdzić, że robi dokładnie to, co deklaruje. Zaufanie ma być weryfikowane, a nie wymagane. Każde repozytorium zawiera również plik SECURITY.md opisujący model zagrożeń oraz prywatny kanał zgłaszania.'],
    ['Które narzędzie Strix jest otwartoźródłową alternatywą dla aplikacji, której już używam?', 'Talon to zapora ruchu wychodzącego dla poszczególnych aplikacji — otwartoźródłowa alternatywa dla Little Snitch i GlassWire. Sinkhole to bloker reklam i trackerów oparty na pliku hosts — lokalna alternatywa dla Pi-hole, działająca na pojedynczej maszynie. MetaVault usuwa metadane i tworzy archiwa AES-256 — alternatywa dla graficznych interfejsów ExifTool, MAT2 i internetowych narzędzi do usuwania danych EXIF. Disk Cleaner bezpiecznie wymazuje dyski — alternatywa dla DBAN i wymazywania w CCleaner. Pulse to widżet monitorowania systemu (alternatywa dla gadżetów Rainmeter/HWiNFO), Inspector podaje informacje o sprzęcie (alternatywa dla CPU-Z/Speccy), a Sentinel to strażnik bezpieczeństwa. Każde z nich działa offline, bez żadnej telemetrii.'],
    ['Czy te narzędzia wysyłają gdzieś moje dane?', 'Nie. Każde narzędzie desktopowe działa w całości na Twojej maszynie, samo z siebie nie wykonuje żadnych połączeń sieciowych i nie zawiera żadnej telemetrii — Twoje dane nigdy nie opuszczają Twojego urządzenia. Jedyne narzędzia, które korzystają z sieci, to te, których całym zadaniem jest sieć (narzędzia do rozpoznania/OSINT), a nawet one używają wyłącznie publicznych API niewymagających kluczy, obwarowanych zgodą i ograniczonych limitami czasu.'],
    ['Czy trzeba mieć wiedzę techniczną, aby z nich korzystać?', 'Nie w przypadku aplikacji desktopowych — MetaVault, Pulse, Inspector, Sentinel, Sinkhole i Talon mają przejrzysty interfejs graficzny z rozsądnymi ustawieniami domyślnymi i potwierdzeniami przed każdą destrukcyjną operacją. Narzędzia do rozpoznania (Vantage, Archer) działają w wierszu poleceń, dla osób swobodnie czujących się w terminalu.'],
    ['Którego narzędzia potrzebuję?', 'Skorzystaj z wyszukiwarki i filtrów nad siatką narzędzi, aby zawęzić wybór według platformy (Windows / Linux) i kategorii (Prywatność, Bezpieczeństwo, System, OSINT…), albo naciśnij ⌘K / Ctrl-K w dowolnym miejscu, aby przejść bezpośrednio do narzędzia. Każda strona narzędzia wyjaśnia dokładnie, co ono robi — i czego celowo nie robi.'],
    ['Jak zweryfikować, że pobrany plik jest oryginalny?', 'Każde wydanie na GitHub publikuje sumę kontrolną SHA-256 (SHA256SUMS) obok plików. Pobierz ją, porównaj skrót swojego pliku i będziesz mieć pewność, że plik binarny jest dokładnie tym, co zostało opublikowane — bez żadnych manipulacji. To ma większe znaczenie niż jakikolwiek podpis kodu.'],
    ['Jakie platformy są obsługiwane?', 'Windows i Linux (Ubuntu / Debian). Narzędzia desktopowe dostarczane są z instalatorem dla systemu Windows i pakietem dla systemu Linux; narzędzia do rozpoznania/OSINT Vantage i Archer są przeznaczone wyłącznie dla Linux/Kali.'],
    ['Czy istnieje wersja na macOS lub urządzenia mobilne?', 'Jeszcze nie oficjalnie — obsługiwane platformy to Windows i Linux (Ubuntu / Debian), a wersje na iOS ani Android nie istnieją. Ponieważ narzędzia oparte na Pythonie (MetaVault, Pulse, Sentinel, Sinkhole, Talon) są otwartoźródłowe i wieloplatformowe, mogą one z powodzeniem działać na macOS z kodu źródłowego, ale nie jest to wspierane ani testowane. Natywna wersja na macOS znajduje się w planach, nie jest to gotowy produkt.'],
    ['Dlaczego system Windows wyświetla ostrzeżenie o „nieznanym wydawcy”?', 'Instalatory nie są jeszcze podpisane cyfrowo, więc SmartScreen wyświetla monit przy pierwszym uruchomieniu. Wybierz „Więcej informacji → Uruchom mimo to” lub zweryfikuj sumę kontrolną SHA-256 publikowaną z każdym wydaniem. Nigdy nie wyłączaj programu antywirusowego, aby je uruchomić — nigdy nie powinno być takiej potrzeby.'],
    ['Czy korzystanie z narzędzi do rozpoznania / OSINT jest legalne?', 'Wyłącznie wobec systemów, które są Twoją własnością lub do których testowania masz wyraźne upoważnienie — celowo podatnego laboratorium treningowego, wyzwania CTF lub zlecenia z pisemnym pozwoleniem. Zarówno Vantage, jak i Archer wyświetlają jednorazowe potwierdzenie zgody i są ściśle pasywne / przeznaczone wyłącznie do autoryzowanego użytku. Skanowanie lub profilowanie bez upoważnienia może być nielegalne.'],
    ['Czy mogę zgłosić błąd lub wnieść swój wkład?', 'Oczywiście — każde narzędzie to osobne publiczne repozytorium na GitHub z plikiem SECURITY.md, szablonami zgłoszeń i przewodnikiem dla współtwórców. Kwestie bezpieczeństwa mają prywatny kanał zgłaszania; nowe funkcje i poprawki są mile widziane w formie pull requestów.'],
  ],
  faqSearchPlaceholder: 'Przeszukaj pytania…',
  toolsFilterAll: 'Wszystkie',
  toolsSearchPlaceholder: 'Szukaj narzędzi według nazwy, przeznaczenia lub słowa kluczowego…',
  toolsNoMatch: 'Żadne narzędzie nie pasuje — spróbuj wyczyścić filtry.',
  footerTagline: 'Otwartoźródłowe narzędzia do ochrony prywatności i bezpieczeństwa.',
  footerNote: 'Stworzone dla osób, którym zależy na prywatności.',
  footerCols: { product: 'Narzędzia', resources: 'Zasoby', about: 'Projekt' },
  langLabel: 'Język',
  stats: { tools: 'narzędzia', platforms: 'platformy', telemetry: 'telemetria', license: 'licencja' },
  faqNoMatch: 'Żadne pytanie nie pasuje — spróbuj innych słów.',
  // Downloads page section headings
  dl: { allTools: 'Wszystkie narzędzia — Windows i Linux', verify: 'Zweryfikuj pobrany plik' },
  // App-page fixed labels ({name} is replaced with the tool name)
  app: {
    price: 'Cena',
    priceVal: 'Darmowe — open source (MIT)',
    platforms: 'Platformy',
    category: 'Kategoria',
    builtWith: 'Zbudowane przy użyciu',
    altTo: 'Otwartoźródłowa alternatywa dla',
    telemetry: 'Telemetria',
    telemetryVal: 'Brak — w pełni offline',
    updated: 'Zaktualizowano',
    notDo: 'Czego {name} celowo nie robi',
    poweredBy: 'Napędzane przez open source',
    fullAck: 'Pełne podziękowania i odnośniki →',
    related: 'Powiązane narzędzia Strix',
    winInstall: 'Pobierz kreator instalacji i uruchom go — skróty w menu Start oraz program do odinstalowania zostaną utworzone za Ciebie.',
    dangerFallback: 'To narzędzie trwale niszczy dane, a operacji nie da się cofnąć. Przed użyciem przeczytaj przewodnik bezpieczeństwa.',
    copy: 'Kopiuj',
    copied: 'Skopiowano ✓',
    glance: 'w skrócie',
  },
};

export const categories = {
  Privacy: 'Prywatność',
  System: 'System',
  Security: 'Bezpieczeństwo',
  Diagnostics: 'Diagnostyka',
  Recon: 'Rozpoznanie',
  OSINT: 'OSINT',
};

export const security = {
  h1: 'Zweryfikuj nas — nie tylko nam zaufaj.',
  lead:
    'Narzędzia Strix Advanced Tools są darmowe, otwartoźródłowe (MIT) i zaprojektowane tak, aby działać w pełni offline. Nasze kompilacje dla systemu Windows nie są jeszcze podpisane cyfrowo płatnym certyfikatem — jesteśmy małym, niezależnym projektem bez budżetu i wolimy powiedzieć to wprost, niż to ukrywać. Ponieważ każde narzędzie jest open source, nie musisz wierzyć nam na słowo w żadnej sprawie. Oto jak sprawdzić to samodzielnie.',
  boldNotSigned: 'nie są jeszcze podpisane cyfrowo płatnym certyfikatem',
  updatedLabel: 'Ostatnia aktualizacja',
  why: [
    { t: 'Kod źródłowy jest publiczny', d: 'Każde narzędzie to publiczne repozytorium GitHub na licencji MIT. Przeczytaj każdą linię, skompiluj je samodzielnie i potwierdź, że robi dokładnie to, co deklaruje.' },
    { t: 'Kompilacje są poświadczone', d: 'Każde wydanie zawiera atestację pochodzenia kompilacji GitHub (SLSA Build L2) — kryptograficzny dowód, że plik został skompilowany z tego kodu źródłowego, na serwerach GitHub, i od tego czasu nie był modyfikowany.' },
    { t: 'Nic nie łączy się z zewnętrznymi serwerami', d: 'Narzędzia desktopowe nie wykonują żadnych połączeń sieciowych. Odłącz kabel sieciowy, a nadal będą działać; obserwuj ruch wychodzący, a nie zobaczysz żadnego.' },
  ],
  verify: {
    h2: 'Zweryfikuj pobrany plik',
    sub: 'Weryfikacja jest opcjonalna — jeśli pobrałeś plik z wydania na GitHub, wszystko jest już w porządku. Ale jeśli chcesz mieć pewność, każde wydanie zawiera plik SHA256SUMS i oto jak go z nim skonfrontować. Zastąp przykładową nazwę pliku nazwą narzędzia, które pobrałeś.',
    anyOs: 'Dowolny system operacyjny',
    winStt: 'Sprawdź sumę kontrolną',
    winIntro: 'W folderze, w którym zapisałeś pobrany plik, uruchom PowerShell:',
    winExp: 'Porównaj wyświetlony skrót z odpowiadającą mu linią w pliku SHA256SUMS. Jeśli są identyczne, plik jest bajt w bajt tym, co opublikowaliśmy:',
    nixStt: 'Sprawdź sumę kontrolną',
    nixIntro: 'Umieść pobrany plik i jego plik SHA256SUMS w tym samym folderze, a następnie:',
    nixExp: 'Jednowyrazowa odpowiedź dla każdego pliku — oczekujesz OK:',
    provStt: 'Zweryfikuj pochodzenie kompilacji',
    provIntro: 'Silniejsze niż suma kontrolna: udowodnij, że plik binarny został skompilowany z naszego publicznego kodu źródłowego w naszym publicznym CI. Wymaga GitHub CLI 2.49+:',
    provExp: 'Zielona linia powodzenia wskazująca dokładne repozytorium źródłowe, które wytworzyło plik:',
    note: 'Sumy kontrolne są publikowane w każdym wydaniu GitHub Release i powielane przez HTTPS — przykładowy plik SHA256SUMS. Atestacja pochodzenia jest przechowywana na GitHub, a nie przez nas, więc ani my, ani przejęte lustro pobierania nie możemy jej sfałszować.',
  },
  data: {
    h2: 'Jakie dane opuszczają Twoją maszynę',
    sub: 'Krótka wersja: w przypadku narzędzi desktopowych — żadne. Oto pełna wersja — a każdy wiersz możesz potwierdzić przechwyceniem pakietów.',
    thCategory: 'Kategoria',
    thWhat: 'Co to jest',
    thWhere: 'Dokąd trafia',
    rows: [
      ['Pliki, które przetwarzasz', 'Metadane, zawartość dysków, archiwa — odczytywane i zapisywane na miejscu, na Twojej maszynie.', 'Nigdy nie są wysyłane. Nic nie jest nigdzie przesyłane.'],
      ['Szczegóły Twojego systemu', 'Nazwa hosta, nazwa użytkownika, numery seryjne, adresy IP, sprzęt — wyświetlane wyłącznie w aplikacji.', 'Wyświetlane lokalnie; nigdy nie przesyłane.'],
      ['Ustawienia i raporty', 'Preferencje, dzienniki, raporty HTML/PDF.', 'Zapisywane na dysku (%LOCALAPPDATA% / ~/.config); nigdy nie synchronizowane z serwerem.'],
      ['Statystyki użycia i awarii', 'Żadne. Nie ma żadnego SDK analitycznego, żadnej telemetrii, żadnego łączenia z zewnętrznymi serwerami.', 'Nic nie jest nigdy zbierane.'],
      ['Ruch wychodzący (narzędzia desktopowe)', 'MetaVault, Pulse, Inspector, Sentinel, Sinkhole, Talon.', 'Zero gniazd wychodzących. Odłącz sieć — nadal działają.'],
      ['Ruch wychodzący (narzędzia do rozpoznania)', 'Vantage i Archer — których całym zadaniem jest sieć.', 'Wyłącznie publiczne API niewymagające kluczy, które uruchamiasz jawnie, po potwierdzeniu zgody, ograniczone limitami czasu.'],
    ],
  },
  av: {
    h2: 'Ostrzeżenia programu antywirusowego i SmartScreen',
    intro1: 'Ponieważ nasze aplikacje dla systemu Windows są niepodpisane i spakowane za pomocą PyInstaller, Windows SmartScreen może wyświetlić komunikat',
    intro2: 'a garstka z około 70 silników antywirusowych może oznaczyć instalator.',
    intro3: 'To normalne w przypadku nowego, niepodpisanego oprogramowania open source — jest to ogólna heurystyka dotycząca sposobu spakowania aplikacji, a nie wykrycie prawdziwego złośliwego oprogramowania.',
    unknownPublisher: 'nieznany wydawca',
    notCommon: 'rzadko pobierany,',
    list: [
      { b: 'Dlaczego tak się dzieje:', r: 'bootloader PyInstaller to popularny format pakowania (używa go również złośliwe oprogramowanie), zupełnie nowy plik nie ma reputacji pobierania, a niepodpisane pliki binarne otrzymują karę „podejrzany, dopóki nie udowodni się inaczej”.' },
      { b: 'Prawdziwym dowodem', r: 'jest suma kontrolna i atestacja pochodzenia powyżej, a także kod źródłowy, który możesz przeczytać — a nie heurystyka jakiegokolwiek dostawcy.' },
      { b: 'Co robimy:', r: 'zgłaszamy dostawcom fałszywe alarmy w miarę ich pojawiania się, a także ubiegamy się o udział w darmowym programie podpisywania kodu Fundacji SignPath dla projektów open source, który wdrożymy w miarę budowania reputacji.' },
      { b: 'Prosimy, nigdy nie wyłączaj programu antywirusowego.', r: 'Jeśli masz wątpliwości, zweryfikuj sumę kontrolną lub uruchom narzędzie z kodu źródłowego.' },
    ],
    tiny: 'Dla każdej kompilacji udostępniamy odnośnik do bieżącego skanowania VirusTotal, gdy tylko ukaże się wydanie, abyś mógł samodzielnie zobaczyć aktualny wynik. Nigdy nie opublikujemy zrzutu ekranu z „czystym skanem” ani nie będziemy twierdzić o „zerowej liczbie wykryć” — działający odnośnik, w który możesz kliknąć, jest lepszy niż zrzut ekranu, który dezaktualizuje się przy następnej kompilacji.',
  },
  read: {
    h2: 'Przeczytaj kod źródłowy',
    sub: 'Najsilniejsza gwarancja ze wszystkich. Wykonaj grep w dowolnym repozytorium na socket, urllib, requests lub http i przekonaj się sam, co korzysta — a co nie — z sieci.',
    view: 'Zobacz kod źródłowy ↗',
  },
  threat: {
    h2: 'Model zagrożeń',
    items: [
      ['Przed czym chroni Strix', 'Wyciekiem danych przez metadane plików, danymi możliwymi do odzyskania z wyrzuconych dysków, domenami trackerów/telemetrii/reklam, cichymi połączeniami wychodzącymi, nieznanymi programami autostartu i urządzeniami oraz narzędziami o zamkniętym kodzie, których nie możesz zbadać.'],
      ['Czym Strix NIE jest', 'Nie jest programem antywirusowym/EDR, piaskownicą ani obroną przed przejętym systemem operacyjnym lub złośliwym oprogramowaniem działającym już z uprawnieniami administratora. Narzędzia desktopowe ujawniają informacje i działają na Twoje polecenie; nie zwalczają aktywnych zagrożeń w czasie rzeczywistym.'],
      ['Granica zaufania', 'Pochodzenie dowodzi, że pobrany plik pochodzi bez zmian z tego publicznego kodu źródłowego, za pośrednictwem CI GitHub. Nie dowodzi, że kod źródłowy jest nieszkodliwy — od tego jest otwarty kod na licencji MIT, który możesz przeczytać i skompilować ponownie.'],
    ],
  },
  report: {
    h2: 'Znalazłeś lukę w zabezpieczeniach?',
    p: 'Zgłoś ją prywatnie — prosimy, nie otwieraj publicznego zgłoszenia w sprawie błędu bezpieczeństwa. Każde repozytorium zawiera plik SECURITY.md z modelem zagrożeń i ścieżką skoordynowanego ujawniania, a prywatne zgłaszanie luk w zabezpieczeniach GitHub jest włączone. Nie zastosujemy żadnych represji i, jeśli zechcesz, wymienimy Cię z podziękowaniami.',
    btnPolicy: 'Polityka bezpieczeństwa',
    btnRepos: 'Wszystkie repozytoria',
  },
};

export const apps = {
  'strix-metavault': {
    tagline: 'Usuń ukryte metadane, a następnie zamknij swoje pliki w szyfrowaniu AES-256.',
    summary:
      'Każde zdjęcie, dokument i PDF, które udostępniasz, niesie ze sobą ukryte ślady — współrzędne GPS, Twoje imię i nazwisko, użyte urządzenie, historię edycji. Strix MetaVault usuwa to wszystko, a następnie opcjonalnie zamyka oczyszczone pliki w zaszyfrowanym archiwum 7-Zip AES-256 z ukrytymi nazwami plików i jednorazowym losowym hasłem. W pełni offline, bez kont, bez telemetrii.',
    features: [
      'Usuwa dane EXIF, GPS, IPTC i XMP z obrazów; autora/firmę/historię z plików Office i PDF',
      'Opcjonalne archiwum AES-256 z zaszyfrowanymi nazwami plików i losową nazwą wynikową',
      'Generuje silne jednorazowe hasło, które nigdy nie jest zapisywane na dysku ani w dziennikach',
      'Odrzuca słabe hasła własne; zabezpieczone przed atakami przez dowiązania symboliczne i bombami zip',
      'Twoje oryginały nigdy nie są modyfikowane — wszystko odbywa się na kopiach',
    ],
    definition:
      'Strix MetaVault to darmowe, otwartoźródłowe narzędzie do usuwania metadanych i szyfrowania plików dla systemów Windows i Linux, które usuwa ukryte metadane EXIF/GPS i dokumentów, a następnie opcjonalnie zamyka Twoje pliki w zaszyfrowanym archiwum AES-256 — w pełni offline, bez kont i bez telemetrii.',
    notFor: [
      'Nigdy nie wysyła Twoich plików — całe oczyszczanie odbywa się lokalnie, w przeciwieństwie do internetowych narzędzi do usuwania metadanych.',
      'Nie implementuje własnej kryptografii: szyfrowanie jest delegowane do sprawdzonego 7-Zip AES-256.',
      'Nie jest usługą chmurową i nie wymaga konta.',
    ],
    faq: [
      ['Czy działa bez 7-Zip lub ExifTool?', 'Pliki JPEG i PNG są oczyszczane za pomocą wbudowanego silnika. W przypadku każdego innego formatu oraz do szyfrowanej archiwizacji zainstaluj 7-Zip i ExifTool (lub umieść je obok aplikacji).'],
      ['Czy mogę odzyskać utracone hasło do archiwum?', 'Nie. Hasło jest wyświetlane jednokrotnie i nigdy nie jest przechowywane. Zapisz je natychmiast w menedżerze haseł — bez niego szyfrowanie jest naprawdę nie do złamania.'],
    ],
    seoTitle: 'Strix MetaVault — narzędzie do usuwania metadanych i szyfrowania plików',
    seoDescription: 'Darmowe otwartoźródłowe narzędzie do usuwania metadanych EXIF/GPS i dokumentów, a następnie zamknięcia plików w zaszyfrowanym archiwum AES-256. Offline, bez telemetrii. Windows i Linux.',
  },
  'strix-pulse-monitor': {
    tagline: 'Zawsze na wierzchu, czytelny na pierwszy rzut oka monitor całej Twojej maszyny.',
    summary:
      'Elegancki, pozbawiony ramek widżet pulpitu, który unosi się nad Twoją pracą i pokazuje na żywo użycie CPU, GPU, RAM i dysku obok pobierania i wysyłania danych w sieci w czasie rzeczywistym — odświeżany co sekundę. Przeciągnij go w dowolne miejsce, przypnij lub schowaj do zasobnika systemowego. Bez własnego dostępu do sieci, bez telemetrii.',
    features: [
      'Bieżące obciążenie CPU, GPU, RAM i pamięci masowej oraz przepustowość sieci, raz na sekundę',
      'Odczyty GPU z NVIDIA, liczników wydajności systemu Windows lub sysfs AMD w systemie Linux',
      'Pozbawiony ramek, szklany widżet, który możesz przeciągać, przypinać lub ukrywać w zasobniku systemowym',
      'Zapamiętuje swoją pozycję; ustawienia są walidowane i zapisywane atomowo',
    ],
    definition:
      'Strix Pulse Monitor to darmowy, otwartoźródłowy widżet monitorowania systemu dla systemów Windows i Linux, który pokazuje na żywo użycie CPU, GPU, RAM, dysku i sieci w szklanym panelu zawsze na wierzchu — offline, bez telemetrii.',
    notFor: [
      'Nie łączy się z żadnym zewnętrznym serwerem i nie zbiera żadnych danych o użytkowaniu.',
      'Jest monitorem na żywo, czytelnym na pierwszy rzut oka, a nie pakietem testów wydajności (testy wydajności znajdziesz w Strix Inspector).',
      'Do działania nie wymaga uprawnień administratora.',
    ],
    faq: [
      ['Dlaczego wiersz GPU pokazuje N/A?', 'Układy GPU Intel w systemie Linux wymagają narzędzi z uprawnieniami, więc widżet pokazuje N/A, zamiast prosić o uprawnienia root. NVIDIA i AMD są obsługiwane od razu.'],
      ['Czy może uruchamiać się wraz z moją sesją?', 'Tak — w systemie Windows dodaj skrót do folderu Autostart; w systemie Linux uruchom instalator z opcją --autostart.'],
    ],
    seoTitle: 'Strix Pulse Monitor — widżet CPU/GPU/RAM i sieci',
    seoDescription: 'Elegancki widżet pulpitu, zawsze na wierzchu, pokazujący na żywo użycie CPU, GPU, RAM, dysku i sieci. Otwartoźródłowy, offline, bez telemetrii. Windows i Linux.',
  },
  'strix-sentinel': {
    tagline: 'Wiedz, co działa, obserwuje i nasłuchuje na Twojej maszynie.',
    summary:
      'Lokalny, działający offline strażnik, który odpowiada na pięć pytań: co uruchamia się wraz z Twoją maszyną, jakie nowe procesy się pojawiają, która aplikacja używa Twojego mikrofonu lub kamery, kto się zalogował i jakie nieznane urządzenia znajdują się w Twojej sieci. Ciemny, skoncentrowany interfejs graficzny w systemie Windows; skryptowalny interfejs wiersza poleceń w systemie Linux. Nic nigdy nie opuszcza Twojego komputera.',
    features: [
      'Audyt autostartu, który oznacza wszystko, co nowe od czasu Twojego zatwierdzonego punktu odniesienia',
      'Monitorowanie w czasie rzeczywistym nowo uruchomionych procesów, wraz z pełnymi ścieżkami plików wykonywalnych',
      'Wykrywa, która aplikacja aktualnie używa Twojego mikrofonu lub kamery',
      'Audyt logowań oraz strażnik sieci lokalnej, który oznacza adresy MAC nieznanych urządzeń',
    ],
    definition:
      'Strix Sentinel to darmowy, otwartoźródłowy, działający offline monitor bezpieczeństwa dla systemów Windows i Linux, który audytuje to, co uruchamia się wraz z Twoją maszyną, obserwuje nowe procesy, wykrywa użycie mikrofonu/kamery, audytuje logowania i oznacza nieznane urządzenia w Twojej sieci — bez własnego ruchu wychodzącego.',
    notFor: [
      'Nie jest programem antywirusowym ani EDR — ujawnia zmiany, które Ty oceniasz; nigdy nie poddaje kwarantannie ani nie blokuje.',
      'Nigdy nie wysyła żadnych danych poza Twoją maszynę.',
      'Edycja dla systemu Linux jest z założenia skryptowalnym interfejsem wiersza poleceń (bez interfejsu graficznego).',
    ],
    faq: [
      ['Czy audyt logowań wymaga uprawnień administratora?', 'Tak — odczyt dziennika zabezpieczeń wymaga uprawnień administratora w systemie Windows i uprawnień root w systemie Linux. Wszystkie pozostałe kontrole działają bez uprawnień.'],
      ['Czy istnieje interfejs graficzny dla systemu Linux?', 'Edycja dla systemu Linux jest z założenia przejrzystym narzędziem wiersza poleceń — działa bez interfejsu graficznego i przez SSH, co pasuje do monitora bezpieczeństwa. Korzysta z tego samego przetestowanego rdzenia wykrywania co interfejs graficzny w systemie Windows.'],
    ],
    seoTitle: 'Strix Sentinel — działający offline monitor bezpieczeństwa i prywatności',
    seoDescription: 'Zobacz, co się uruchamia i działa, która aplikacja używa Twojego mikrofonu/kamery, audytuj logowania i wykrywaj nieznane urządzenia w Twojej sieci. Otwartoźródłowy, offline. Interfejs graficzny dla Windows i wiersz poleceń dla Linux.',
  },
  'strix-inspector': {
    tagline: 'Kompletny, tylko do odczytu obraz Twojego sprzętu — w kilka sekund.',
    summary:
      'Precyzyjny, tylko do odczytu inwentarz Twojej maszyny — system operacyjny, CPU, pamięć aż do każdej kości DIMM, układy GPU, dyski, płyta główna, BIOS i bateria — przedstawiony jako tekst konsolowy, czytelny maszynowo JSON lub dopracowany, samodzielny pulpit HTML. Wykonuje również szybkie testy wydajności CPU, pamięci i dysku. Bez sieci, bez konieczności podnoszenia uprawnień.',
    features: [
      'Pełny inwentarz: OS, CPU, pamięć na poziomie każdej kości DIMM, układy GPU, dyski, płyta główna, BIOS, bateria',
      'Trzy formaty wyjściowe: konsola, JSON i pulpit HTML w wersji ciemnej/jasnej',
      'Wbudowane mikrotesty wydajności CPU, pamięci i dysku',
      'Działa w systemie Linux dzięki .NET 8, wykorzystując ten sam utwardzony parser SMBIOS co w systemie Windows',
    ],
    definition:
      'Strix Inspector to darmowe, otwartoźródłowe, działające tylko do odczytu narzędzie do informacji o sprzęcie i testów wydajności dla systemów Windows i Linux, które inwentaryzuje Twój CPU, pamięć RAM na poziomie każdej kości DIMM, GPU, dyski, płytę główną i BIOS jako tekst konsolowy, JSON lub samodzielny pulpit HTML — bez dostępu do sieci.',
    notFor: [
      'Działa wyłącznie w trybie tylko do odczytu — nigdy nie zmienia ustawień, nie podkręca ani nie wgrywa nowego oprogramowania układowego (firmware).',
      'W systemie Windows nie wymaga instalacji środowiska uruchomieniowego ani podniesienia uprawnień do działania.',
      'Nie wysyła żadnych danych nigdzie.',
    ],
    faq: [
      ['Czy muszę instalować środowisko uruchomieniowe?', 'W systemie Windows korzysta z wbudowanego .NET Framework — nie ma nic do instalowania. Kompilacja dla systemu Linux dostarczana jest jako samodzielny plik binarny.'],
      ['Dlaczego niektóre pola wymagają uprawnień administratora?', 'Rozmiary dysków, szczegóły kości DIMM i ciągi znaków BIOS pochodzą z uprzywilejowanych interfejsów. Bez podniesienia uprawnień narzędzie i tak działa i po prostu odnotowuje, co pominęło.'],
    ],
    seoTitle: 'Strix Inspector — narzędzie do informacji o sprzęcie i testów wydajności',
    seoDescription: 'Inwentarz sprzętu tylko do odczytu (CPU, pamięć RAM na poziomie każdej kości DIMM, GPU, dyski, BIOS) oraz testy wydajności — jako tekst konsolowy, JSON lub pulpit HTML. Otwartoźródłowy. Windows i Linux.',
  },
  'strix-disk-cleaner': {
    tagline: 'Wymaż dysk na dobre — z zabezpieczeniem przed wymazaniem niewłaściwego.',
    summary:
      'Trwale i w sposób weryfikowalny wymaż cały dysk zgodnie z normami NIST SP 800-88 i DoD 5220.22-M — używając sprzętowej sanityzacji tam, gdzie to możliwe, lub wielokrotnego nadpisywania. Wielowarstwowe zabezpieczenie uniemożliwia wybranie dysku systemowego, a każda destrukcyjna operacja wymaga potwierdzenia wpisanego z klawiatury. Windows dostarczany jest z pełnym interfejsem graficznym i możliwym do wydrukowania certyfikatem zniszczenia; Linux dostarczany jest z wymazywaczem wiersza poleceń objętym testami jednostkowymi.',
    features: [
      'Wielowarstwowe zabezpieczenie: Twojego dysku systemowego ani żadnego zamontowanego dysku nigdy nie da się wybrać',
      'Sprzętowa sanityzacja (blkdiscard, nvme, hdparm) lub wielokrotne nadpisywanie',
      'Potwierdzenie przez wpisanie słowa ERASE z ponowną weryfikacją tuż przed zapisem',
      'Logika zabezpieczeń objęta testami jednostkowymi; możliwy do wydrukowania certyfikat zniszczenia w systemie Windows',
    ],
    definition:
      'Strix Disk Cleaner to darmowy, otwartoźródłowy, bezpieczny wymazywacz dysków dla systemów Windows i Linux, który trwale wymazuje dysk zgodnie z normami NIST SP 800-88 i DoD 5220.22-M, z wielowarstwowym zabezpieczeniem, które uniemożliwia wymazanie dysku systemowego.',
    notFor: [
      'Nie może wybrać ani wymazać Twojego dysku systemowego/rozruchowego ani żadnego zamontowanego woluminu — z założenia.',
      'Wymazuje całe dyski, a nie pojedyncze pliki.',
      'Nie wykonuje żadnych połączeń sieciowych i nie wymaga konta.',
    ],
    faq: [
      ['Czy mogę przypadkowo wymazać mój dysk z systemem Windows/Linux?', 'Nie. Dysk systemowy i rozruchowy są wykrywane i ukrywane; w systemie Linux każdy zamontowany dysk zostaje odrzucony. Musisz też wpisać ścieżkę urządzenia i słowo ERASE.'],
      ['Czy nadpisywanie wystarczy w przypadku dysku SSD?', 'Nie w sposób niezawodny — poziomowanie zużycia pamięci flash może pozostawić dane. Narzędzie wykrywa dyski SSD i kieruje Cię do sprzętowej sanityzacji (blkdiscard / nvme), która jest dokładna.'],
    ],
    seoTitle: 'Strix Disk Cleaner — bezpieczny wymazywacz dysków (NIST/DoD)',
    seoDescription: 'Trwale wymaż dysk zgodnie z normami NIST SP 800-88 / DoD 5220.22-M dzięki wielowarstwowemu zabezpieczeniu, które nigdy nie wymaże dysku systemowego. Otwartoźródłowy. Interfejs graficzny dla Windows i wiersz poleceń dla Linux.',
  },
  'strix-vantage': {
    tagline: 'Jedno polecenie uruchamia pełny, bezpieczny dla WAF potok rozpoznania na Twoim laboratorium.',
    dangerText: 'Vantage wysyła ruch aktywnego skanowania (skanowanie portów, fuzzing, sondy podatności). Używaj go WYŁĄCZNIE wobec systemów, które są Twoją własnością lub do których testowania masz wyraźne upoważnienie — np. wobec własnego, lokalnego, celowo podatnego laboratorium. Nieautoryzowane skanowanie jest w większości miejsc nielegalne.',
    summary:
      'Vantage łączy około 25 standardowych w branży narzędzi Kali — enumerację subdomen, testy dostępności, skanowanie portów i TLS, indeksowanie, fuzzing oraz kontrole podatności — w jedno polecenie z bieżącym statusem w terminalu i schludnym raportem. Zostało zbudowane z myślą o doskonaleniu Twoich umiejętności w zakresie bezpieczeństwa aplikacji internetowych na lokalnym, celowo podatnym laboratorium (lub dowolnym celu, który jest Twoją własnością lub do którego testowania masz upoważnienie), z bezpiecznym dla IDS/WAF podejściem „low-and-slow” i opcjonalnym interfejsem terminalowym.',
    features: [
      'Łączy około 25 narzędzi (nmap, nuclei, httpx, ffuf, katana, sqlmap, …) w jeden potok rozpoznania',
      'Bezpieczne dla IDS/WAF z założenia: niższe tempo + jitter, zamiast szybszego bombardowania (profile ukryty/dokładny)',
      'Ogranicza aktywne skanowanie do Twojego głównego celu; lekki fingerprint wobec całej reszty',
      'Bieżący status w terminalu + sformatowany raport; opcjonalny interfejs TUI Textual z przeglądarką historii',
      'Utwardzone: bez powłoki (wyłącznie argv), a automatyczna instalacja jest opcjonalna, z ostrzeżeniem o łańcuchu dostaw',
    ],
    definition:
      'Strix Vantage to darmowy, otwartoźródłowy potok automatyzacji rozpoznania dla systemu Linux, który łączy około 25 narzędzi Kali (nmap, nuclei, httpx, ffuf i inne) w jedno bezpieczne dla WAF polecenie, przeznaczone do autoryzowanego treningu testów penetracyjnych na Twoim własnym, celowo podatnym laboratorium.',
    notFor: [
      'Jest przeznaczone wyłącznie dla autoryzowanych celów — jednorazowe potwierdzenie zgody wymusza to przed każdym aktywnym skanowaniem.',
      'Orkiestruje narzędzia zewnętrzne; nie dołącza ich ani nie modyfikuje.',
      'Jest przeznaczone wyłącznie dla Linux/Kali (bez wersji dla Windows ani macOS).',
    ],
    faq: [
      ['Czy korzystanie z tego jest legalne?', 'Wyłącznie wobec systemów, które są Twoją własnością lub do których testowania masz wyraźne upoważnienie — takich jak celowo podatna aplikacja treningowa lub laboratorium cyberbezpieczeństwa, które kontrolujesz. Aktywne skanowanie systemów, które nie są Twoją własnością, jest nielegalne w większości jurysdykcji; odpowiadasz za sposób, w jaki z niego korzystasz.'],
      ['Czy wymaga Kali lub uprawnień root?', 'Jest przeznaczone dla Kali Linux i jego standardowego zestawu narzędzi; sudo włącza skanowanie SYN i (opcjonalny) automatyczny instalator. Działa na innych dystrybucjach Linux, gdy narzędzia są już zainstalowane.'],
    ],
    creditsNote: 'Vantage orkiestruje te otwartoźródłowe narzędzia — nie dołącza ich ani nie modyfikuje. Ogromne podziękowania dla każdego projektu zewnętrznego.',
    seoTitle: 'Strix Vantage — automatyzacja rozpoznania dla CTF i laboratoriów pentestingowych',
    seoDescription: 'Połącz około 25 narzędzi do rozpoznania z Kali (nmap, nuclei, ffuf, httpx…) w jeden bezpieczny dla WAF potok, przeznaczony do autoryzowanego treningu pentestingu na lokalnym, celowo podatnym laboratorium. Otwartoźródłowy.',
  },
  'strix-archer': {
    tagline: 'Pasywny OSINT dla wyzwań CTF i autoryzowanych celów laboratoryjnych.',
    dangerText: 'Strix Archer prowadzi zbieranie OSINT i wyświetla jednorazowe potwierdzenie zgody. Używaj go WYŁĄCZNIE wobec wyzwań CTF / fikcyjnych postaci lub celów, które są Twoją własnością lub do których testowania masz upoważnienie. Profilowanie prawdziwych osób bez ich zgody może być nielegalne.',
    summary:
      'Strix Archer łączy pozbawiony zależności silnik OSINT oparty wyłącznie na bibliotece standardowej z nakładkami na popularne narzędzia — korzystając z Sherlock, maigret, holehe, theHarvester i SpiderFoot, gdy są zainstalowane, i przechodząc na własną implementację, gdy ich nie ma. Prowadzi rozpoznanie domen (DNS-over-HTTPS, RDAP/WHOIS, subdomeny crt.sh, fingerprint HTTP + nagłówków bezpieczeństwa), rozpoznanie tożsamości (skanowanie nazw użytkowników z ograniczeniem tempa, OSINT GitHub, Gravatar, wyszukiwanie w wyciekach) oraz bezpieczną kontrolę hasła opartą na k-anonimowości HIBP. Jednorazowe potwierdzenie zgody ogranicza je do autoryzowanego użytku laboratoryjnego; wszystko jest pasywne i tylko do odczytu, z raportem .txt oraz ciemnym raportem HTML.',
    features: [
      'Wbudowany silnik oparty na bibliotece standardowej + automatyczne nakładki na Sherlock / maigret / holehe / theHarvester / SpiderFoot, gdy są dostępne',
      'Domena: DNS-over-HTTPS, RDAP/WHOIS, subdomeny crt.sh, HTTP + kontrola brakujących nagłówków bezpieczeństwa',
      'Tożsamość: skanowanie nazw użytkowników z ograniczeniem tempa, OSINT GitHub (adresy e-mail wyciekłe w commitach), Gravatar, wyszukiwanie w wyciekach XposedOrNot',
      'Bezpieczna kontrola hasła pod kątem wycieków dzięki k-anonimowości HIBP — hasło nigdy nie opuszcza Twojej maszyny',
      'Jednorazowe potwierdzenie zgody, z ograniczeniem tempa z założenia; pasywne i tylko do odczytu; raport .txt + ciemny raport HTML',
    ],
    definition:
      'Strix Archer to darmowe, otwartoźródłowe narzędzie OSINT dla systemu Linux — stworzone z myślą o wyzwaniach CTF i autoryzowanych celach laboratoryjnych — które prowadzi pasywne rozpoznanie domen i tożsamości (DNS/RDAP/crt.sh, wyszukiwanie nazw użytkowników i adresów e-mail, OSINT GitHub, kontrole wycieków) oraz bezpieczną kontrolę hasła opartą na k-anonimowości HIBP.',
    notFor: [
      'Jest pasywne i tylko do odczytu — nigdy nie wykorzystuje luk ani aktywnie nie atakuje celu.',
      'Jest przeznaczone wyłącznie do autoryzowanego użytku — jednorazowe potwierdzenie zgody wymusza jej potwierdzenie.',
      'Kontrola hasła pod kątem wycieków nigdy nie wysyła Twojego hasła (k-anonimowość HIBP).',
    ],
    faq: [
      ['Czy korzystanie z tego jest legalne?', 'Wyłącznie wobec wyzwań CTF / fikcyjnych postaci lub celów, które są Twoją własnością lub do których testowania masz wyraźne upoważnienie. Profilowanie prawdziwych osób bez ich zgody może stanowić nękanie i być nielegalne — jednorazowe potwierdzenie zgody wymusza jej potwierdzenie.'],
      ['Czy muszę cokolwiek instalować?', 'Nie — wbudowany silnik to czysta biblioteka standardowa Pythona. Opcjonalne narzędzia (Sherlock, holehe, …) są automatycznie obsługiwane, jeśli są dostępne, a `--setup` instaluje je w izolowanych środowiskach pipx, dzięki czemu Python w Twoim systemie pozostaje nienaruszony.'],
    ],
    creditsNote: 'Strix Archer wykorzystuje te otwartoźródłowe narzędzia i usługi publiczne — nie dołącza ich ani nie modyfikuje. Dziękujemy każdemu zewnętrznemu projektowi i usłudze.',
    seoTitle: 'Strix Archer — narzędzie OSINT dla CTF i autoryzowanych celów laboratoryjnych',
    seoDescription: 'Pasywny OSINT dla autoryzowanych celów laboratoryjnych/CTF: rozpoznanie domen (DNS/RDAP/crt.sh), wyszukiwanie nazw użytkowników i adresów e-mail, OSINT GitHub, kontrole wycieków i bezpieczna kontrola hasła HIBP. Otwartoźródłowy.',
  },
  'strix-sinkhole': {
    tagline: 'Blokuj trackery, telemetrię i reklamy w pliku hosts — offline, odwracalnie, jednym kliknięciem.',
    summary:
      'Strix Sinkhole bezpiecznie zarządza systemowym plikiem hosts, kierując znane domeny trackerów, telemetrii i reklam do 0.0.0.0, dzięki czemu zapytanie ginie na Twojej własnej maszynie, zanim jakiekolwiek żądanie ją opuści — bez serwera takiego jak Pi-hole, bez rozszerzenia dla każdej przeglądarki, bez działającego w tle demona i bez własnych połączeń sieciowych. Wszystko, co zapisuje, znajduje się wewnątrz dedykowanego bloku z przestrzenią nazw, więc Twoje własne wpisy w pliku hosts i ustawienia domyślne systemu są kopiowane bajt w bajt i nigdy nie są ruszane. Wbudowane zabezpieczenie odmawia kierowania w próżnię infrastruktury krytycznej (aktualizacje OS, unieważnianie certyfikatów/OCSP, synchronizacja czasu, localhost) niezależnie od tego, co mówi jakakolwiek lista blokująca, więc nigdy nie może po cichu uszkodzić Twojej maszyny. Każdą zmianę poprzedza kopia zapasowa ze znacznikiem czasu, a jest ona odwracalna jednym kliknięciem, z podglądem różnic w trybie próbnym pokazującym dokładnie, co się zmieni, oraz listą dozwolonych dla fałszywych alarmów.',
    features: [
      'Kieruje w próżnię domeny trackerów / telemetrii / reklam w całym systemie za pośrednictwem pliku hosts — offline, bez serwera, bez rozszerzenia',
      'Zarządzany blok z przestrzenią nazw: Twoje własne i systemowe wpisy w pliku hosts są zachowywane bajt w bajt (weryfikowane przed każdym zapisem)',
      'Zabezpieczenie domen krytycznych: aktualizacje OS, OCSP/CRL, synchronizacja czasu i localhost nigdy nie mogą zostać skierowane w próżnię przez żadną listę',
      'Kopia zapasowa ze znacznikiem czasu przed każdym zapisem + przywracanie jednym kliknięciem; podgląd różnic w trybie próbnym; lista dozwolonych dla fałszywych alarmów',
      'Dołączona wyselekcjonowana lista startowa; zaimportuj własną lub włącz ograniczoną aktualizację przez HTTPS; ciemny interfejs graficzny (Windows) + wiersz poleceń `strixsink` (Linux)',
    ],
    definition:
      'Strix Sinkhole to darmowy, otwartoźródłowy, działający offline bloker reklam i trackerów oparty na pliku hosts dla systemów Windows i Linux, który kieruje w próżnię domeny trackerów, telemetrii i reklam w całym systemie — bez serwera takiego jak Pi-hole, bez rozszerzenia przeglądarki i bez przekierowywania DNS.',
    notFor: [
      'Nie jest serwerem DNS w stylu Pi-hole i nie przekierowuje żadnego z Twoich zapytań nigdzie.',
      'Nie jest rozszerzeniem przeglądarki — edytuje zwykły, możliwy do audytu plik hosts, który możesz przywrócić.',
      'Blokuje na poziomie pliku hosts; nie szyfruje Twojego nadrzędnego DNS.',
    ],
    faq: [
      ['Czym różni się to od Pi-hole lub rozszerzenia przeglądarki?', 'Żadnego osobnego serwera ani Raspberry Pi (Pi-hole) i nie jest to rozszerzenie dla każdej przeglądarki, które samo mogłoby odczytywać Twoją aktywność w sieci — Strix Sinkhole edytuje tekstowy plik hosts, który każdy techniczny użytkownik może zaudytować i przywrócić. Nic nie działa w tle i nic nie przekierowuje Twoich zapytań DNS nigdzie.'],
      ['Czy zła lista blokująca może uszkodzić mój komputer?', 'Nie. Wbudowane zabezpieczenie odmawia kierowania w próżnię infrastruktury krytycznej (aktualizacje OS, unieważnianie certyfikatów, synchronizacja czasu, localhost) niezależnie od tego, co mówi lista, każda zmiana jest najpierw archiwizowana, a jedno kliknięcie przywraca dokładny oryginał. Pamiętaj, że blokuje na poziomie pliku hosts i nie szyfruje nadrzędnego DNS.'],
    ],
    creditsNote: 'Strix Sinkhole dostarcza wyłącznie własną, małą wyselekcjonowaną listę startową i nie dołącza tych list — pozwala Ci je zaimportować, każdą na jej własnej licencji. Dziękujemy publicznemu ekosystemowi list blokujących.',
    seoTitle: 'Strix Sinkhole — działający offline bloker reklam i trackerów oparty na pliku hosts',
    seoDescription: 'Blokuj trackery, telemetrię i reklamy w całym systemie, kierując je w próżnię w pliku hosts — w pełni offline, bez serwera, bez rozszerzenia przeglądarki. Kopie zapasowe ze znacznikiem czasu, przywracanie jednym kliknięciem, nigdy nie uszkadza domen krytycznych. Otwartoźródłowy, Windows i Linux.',
  },
  'strix-talon': {
    tagline: 'Zobacz ruch wychodzący każdej aplikacji — i odetnij te, którym nie ufasz.',
    summary:
      'Strix Talon to bieżąca mapa ruchu wychodzącego dla poszczególnych procesów: która aplikacja komunikuje się z jakim zdalnym adresem i portem, odświeżana raz na sekundę, z zupełnie nowymi miejscami docelowymi oznaczanymi w chwili ich pojawienia się. Na tej widoczności tylko do odczytu opiera się opcjonalna warstwa reguł — „ta aplikacja nigdy nie może łączyć się z internetem”, „blokuj ten adres” oraz globalny wyłącznik awaryjny, który odcina cały ruch wychodzący z wyjątkiem loopbacku (opcjonalnie zachowując Twoją sieć lokalną). Co istotne, Talon nie zawiera żadnego sterownika jądra: każda reguła jest tłumaczona na własną zaporę systemu operacyjnego — Zaporę Windows Defender za pośrednictwem netsh, Linux za pośrednictwem prywatnej tabeli nftables — i nazwana tak, by można ją było cofnąć jednym kliknięciem, bez ruszania Twoich istniejących reguł. Ujawnia również lokalne nasłuchujące gniazda, dzięki czemu widzisz ekspozycję przychodzącą i gadatliwość wychodzącą w jednym widoku.',
    features: [
      'Bieżąca mapa ruchu wychodzącego dla poszczególnych aplikacji: aplikacja → zdalny adres IP/port/stan, odświeżana co około 2 s, nowe miejsca docelowe wyróżnione',
      'Zablokuj aplikację (Windows) lub adres (wszystkie platformy) oraz globalny wyłącznik awaryjny (zablokuj cały ruch wychodzący z wyjątkiem loopbacku)',
      'Egzekwowane za pośrednictwem zapory Twojego systemu operacyjnego (Zapora Windows Defender / nftables) — bez sterownika jądra, któremu trzeba by zaufać lub go podpisać',
      'Każda reguła ma własną przestrzeń nazw i jest odwracalna jednym kliknięciem — Talon nigdy nie rusza Twoich istniejących reguł zapory; loopback nigdy nie jest blokowany',
      'Widzi także ekspozycję przychodzącą (nasłuch na 0.0.0.0 vs 127.0.0.1); nowoczesny interfejs graficzny PySide6 w systemie Windows + wiersz poleceń `talon` w systemie Linux',
    ],
    definition:
      'Strix Talon to darmowa, otwartoźródłowa zapora ruchu wychodzącego dla poszczególnych aplikacji oraz monitor ruchu wychodzącego dla systemów Windows i Linux, która pokazuje w czasie rzeczywistym, która aplikacja komunikuje się z jakim zdalnym adresem, i pozwala zablokować dowolną aplikację lub adres — albo cały ruch wychodzący — egzekwowane za pośrednictwem własnej zapory Twojego systemu operacyjnego, bez sterownika jądra.',
    notFor: [
      'Nie zawiera żadnego sterownika jądra — steruje wbudowaną zaporą Twojego systemu operacyjnego (Zapora Windows Defender / nftables).',
      'W wersji v1 nie wyświetla wyskakujących okienek zezwól/odmów dla połączeń na żywo.',
      'Blokowanie dla poszczególnych aplikacji jest dostępne wyłącznie w systemie Windows; w systemie Linux blokuje według adresu docelowego.',
    ],
    faq: [
      ['Czym różni się to od Little Snitch lub GlassWire?', 'Talon jest otwartoźródłowy, bez żadnej telemetrii i działa w systemie Windows ORAZ Linux (Little Snitch jest przeznaczony wyłącznie dla macOS i płatny; GlassWire ma zamknięty kod). Co istotne, deleguje egzekwowanie do wbudowanej zapory Twojego systemu operacyjnego, zamiast dostarczać sterownik jądra, a każda reguła to zwykły, możliwy do audytu wpis zapory, który możesz sprawdzić i cofnąć.'],
      ['Czy może zablokować mi dostęp do mojej własnej maszyny?', 'Nie. Loopback jest zawsze wyłączony z blokad, wyłącznik awaryjny utrzymuje dostępność localhost (i opcjonalnie Twojej sieci lokalnej), każda reguła ma przestrzeń nazw StrixTalon-* / znajduje się w prywatnej tabeli nftables, a jedno kliknięcie (lub `sudo talon revert`) usuwa wszystko, co Talon dodał, bez ruszania Twoich pozostałych reguł zapory. Uwaga: wyskakujące okienka „zezwól/odmów temu nowemu połączeniu” na żywo są poza zakresem wersji v1; blokowanie dla poszczególnych aplikacji jest dostępne wyłącznie w systemie Windows (Linux blokuje według adresu).'],
    ],
    creditsNote: 'Strix Talon mapuje gniazda za pomocą psutil, buduje swój interfejs za pomocą PySide6 i egzekwuje reguły za pośrednictwem zapory Twojego systemu operacyjnego — nie dzieli żadnego kodu z Little Snitch / GlassWire / OpenSnitch; są one wymienione wyłącznie jako inspiracja.',
    seoTitle: 'Strix Talon — zapora ruchu wychodzącego dla poszczególnych aplikacji (Windows i Linux)',
    seoDescription: 'Zobacz ruch wychodzący każdej aplikacji i blokuj to, czemu nie ufasz — otwartoźródłowa zapora ruchu wychodzącego dla poszczególnych aplikacji + monitor połączeń dla systemów Windows i Linux. Egzekwowana za pośrednictwem zapory Twojego systemu operacyjnego (bez sterownika jądra), z globalnym wyłącznikiem awaryjnym. Bez telemetrii, MIT.',
  },
};

export const contribute = {
  h1: 'Zbuduj narzędzie. Uczyń je częścią Strix.',
  lead:
    'Strix to pakiet, a nie zamknięty ogród. Jeśli zbudowałeś otwartoźródłowe narzędzie do ochrony prywatności lub bezpieczeństwa, które żyje według tych samych reguł — domyślnie offline, zero telemetrii, naprawdę audytowalne — możesz je zaproponować. Gdy przejdzie tę samą recenzję bezpieczeństwa i to samo utwardzanie, przez które przechodzi każde narzędzie Strix, zostaje wydane pod szyldem Strix: z własnym repozytorium, stroną na tej witrynie w 13 językach oraz wydaniami z sumami kontrolnymi i atestacją.',
  badge: 'Otwarte na narzędzia społeczności',
  ctaTop: 'Zgłoś swoje narzędzie',
  updatedLabel: 'Ostatnia aktualizacja',
  steps: {
    h2: 'Jak to działa',
    sub: 'Cztery kroki od Twojego repozytorium do wydanego narzędzia Strix — a autorstwo i prawa autorskie zachowujesz przez całą drogę.',
    list: [
      { n: '01', t: 'Zbuduj swoje narzędzie', d: 'Napisz je w dowolnym języku, dla systemu Windows i/lub Linux, na licencji zgodnej z MIT. Spełnij poniższe kryteria: offline, bez telemetrii, jedno zadanie wykonane dobrze.' },
      { n: '02', t: 'Otwórz zgłoszenie', d: 'Załóż zgłoszenie (issue) na GitHub z odnośnikiem do swojego repozytorium, opisem tego, co robi, docelowymi platformami oraz tym, jak korzysta z sieci — jeśli w ogóle. Nie potrzebujesz konta u nas; wystarczy GitHub.' },
      { n: '03', t: 'Recenzja bezpieczeństwa i utwardzanie', d: 'Stosujemy tę samą bramkę, którą przeszło każde narzędzie Strix: analizę statyczną, audyt zależności i łańcucha dostaw, przeciwstawną recenzję kodu oraz utwardzanie. Otrzymujesz wyniki, a my wspólnie je przepracowujemy.' },
      { n: '04', t: 'Zostaje wydane jako Strix', d: 'Po akceptacji Twoje narzędzie otrzymuje własne repozytorium w organizacji Strix, zlokalizowaną stronę docelową na tej witrynie oraz wydania z sumami kontrolnymi SHA-256 i atestacją pochodzenia kompilacji.' },
    ],
  },
  criteria: {
    h2: 'Czym musi być narzędzie Strix',
    sub: 'Te wymagania nie podlegają negocjacjom — to obietnice, na których zbudowany jest cały pakiet. Jeśli Twoje narzędzie już według nich żyje, poczuje się jak u siebie.',
    list: [
      { t: 'Otwartoźródłowe', d: 'Publiczny kod źródłowy na licencji MIT (lub permisywnej licencji zgodnej z MIT). Nic ukrytego, nic zaciemnionego.' },
      { t: 'Domyślnie offline', d: 'Żadnych własnych połączeń sieciowych w przypadku narzędzia desktopowego. Jeśli całym zadaniem narzędzia jest sieć (recon/OSINT), musi ono działać bez kluczy, być obwarowane zgodą i mieć jasno określony zakres.' },
      { t: 'Zero telemetrii', d: 'Żadnych SDK analitycznych, żadnego łączenia z zewnętrznymi serwerami, żadnych kont. Dane użytkownika nigdy nie opuszczają jego maszyny.' },
      { t: 'Jedno zadanie, wykonane dobrze', d: 'Wyspecjalizowane narzędzie z rozsądnymi ustawieniami domyślnymi, jasnym zakresem i wyraźnym określeniem tego, czego celowo nie robi.' },
      { t: 'Udokumentowane i testowalne', d: 'Plik README, plik SECURITY.md z modelem zagrożeń oraz testy regresji dla wszystkiego, co jest krytyczne dla bezpieczeństwa.' },
      { t: 'Zasada najmniejszych uprawnień', d: 'Bez wywołań powłoki, bez dynamicznego wykonywania kodu, wywołania podprocesów wyłącznie przez argv, rozwiązywanie ścieżek narzędzi przez ścieżkę bezwzględną oraz podnoszenie uprawnień tylko tam, gdzie jest to naprawdę konieczne.' },
    ],
  },
  review: {
    h2: 'Recenzja bezpieczeństwa, przez którą przechodzi każde zgłoszenie',
    sub: 'Ta sama bramka, którą istniejące narzędzia przeszły przed premierą. Nic nie zostaje wydane, dopóki jej nie przejdzie.',
    list: [
      { t: 'Analiza statyczna (SAST)', d: 'semgrep, bandit, PSScriptAnalyzer, analizatory Roslyn oraz lintery odpowiednie dla danego języka w całym kodzie źródłowym.' },
      { t: 'Audyt zależności i łańcucha dostaw', d: 'Przypięte wersje, SBOM, pip-audit / Dependabot oraz sprawdzenie, że każda zależność od podmiotów trzecich jest uzasadniona.' },
      { t: 'Przeciwstawna recenzja kodu', d: 'Recenzja wykonywana przez człowieka, polująca na wstrzyknięcia, path traversal, SSRF, eskalację uprawnień i wszelkie osłabienie mechanizmu bezpieczeństwa.' },
      { t: 'Utwardzanie', d: 'Wspólnie zamykamy luki: zasada najmniejszych uprawnień, bez powłoki, walidacja danych wejściowych, domyślne ustawienia fail-closed i obrona w głąb na niebezpiecznych ścieżkach.' },
      { t: 'Pochodzenie przy każdym wydaniu', d: 'CI kompiluje każde wydanie, zapisuje plik SHA256SUMS z sumami SHA-256 i dołącza atestację pochodzenia kompilacji SLSA, dzięki czemu każde pobranie jest weryfikowalne.' },
    ],
  },
  keep: {
    h2: 'Co zachowujesz — i co zyskujesz',
    sub: 'Wniesienie wkładu do Strix nie oznacza zrzeczenia się swojej pracy.',
    list: [
      { t: 'Swoje autorstwo i prawa autorskie', d: 'Pozostajesz autorem. Prawa autorskie MIT należą do Ciebie; Strix dystrybuuje narzędzie i współutrzymuje je razem z Tobą.' },
      { t: 'Prawdziwych odbiorców', d: 'Zlokalizowaną stronę docelową w 13 językach, integrację SEO/GEO oraz miejsce w siatce narzędzi i sekcji pobierania.' },
      { t: 'Zaufany potok wydawniczy', d: 'Sumy kontrolne, atestację, docelową ścieżkę podpisywania kodu (SignPath Foundation) oraz proces ujawniania kwestii bezpieczeństwa — przygotowane za Ciebie.' },
      { t: 'Współutrzymanie', d: 'Zgłoszenia, pull requesty i raporty bezpieczeństwa przechodzą przez ten sam proces co reszta pakietu. Nie jesteś zdany na siebie.' },
    ],
  },
  cta: {
    h2: 'Gotowy, aby zgłosić?',
    p: 'Otwórz zgłoszenie z odnośnikiem do swojego repozytorium i krótkim opisem. Zajmiemy się nim, przeprowadzimy recenzję i od tego momentu będziemy z Tobą współpracować. Jeszcze nie gotowy? Przeczytaj najpierw pełny przewodnik dla współtwórców.',
    btnSubmit: 'Zgłoś swoje narzędzie',
    btnGuide: 'Przeczytaj przewodnik dla współtwórców',
    note: 'Do zgłoszenia potrzebne jest tylko konto GitHub. Nie ma żadnej opłaty, żadnej umowy dla współtwórców odbierającej Ci prawa ani żadnego zobowiązania — możesz się wycofać w dowolnym momencie przed wydaniem.',
  },
  faq: [
    ['Czy tracę własność swojego narzędzia?', 'Nie. Zachowujesz autorstwo i prawa autorskie MIT. Strix współutrzymuje je i dystrybuuje razem z Tobą, a Ty możesz się wycofać przed wydaniem.'],
    ['Jakie języki lub frameworki są dozwolone?', 'Dowolne. Istniejący pakiet obejmuje Python, C#, PowerShell i inne — liczy się licencja, reguły offline/bez telemetrii oraz przejście recenzji bezpieczeństwa, a nie użyta technologia.'],
    ['Co, jeśli moje narzędzie potrzebuje sieci?', 'To w porządku, ale tylko wtedy, gdy sieć jest jego faktycznym przeznaczeniem (jak w przypadku narzędzi recon/OSINT). Musi ono wówczas działać bez kluczy, być obwarowane wyraźną zgodą, mieć jasno określony zakres i być przeznaczone wyłącznie do autoryzowanego użytku — nigdy cichy ruch ani ruch w tle.'],
    ['Ile trwa recenzja?', 'To zależy od wielkości narzędzia i od tego, ile problemów się ujawni. Małe, już utwardzone narzędzia przechodzą szybko; wszystko, co dotyka destrukcyjnych operacji lub podnoszenia uprawnień, otrzymuje dodatkowy nadzór.'],
    ['Co się stanie, jeśli nie przejdzie?', 'Otrzymujesz pełne wyniki, możesz je usunąć i zgłosić narzędzie ponownie. Recenzja, która znajduje problemy, to dowód, że proces działa — to samo spotkało narzędzia już obecne w pakiecie.'],
  ],
};

export const donate = {
  h1: 'Wesprzyj Strix — prywatnie.',
  lead:
    'Strix jest darmowy, na licencji MIT i nie zawiera żadnej telemetrii — i zawsze tak będzie. Bez reklam, bez kont, nic na sprzedaż. Jeśli te narzędzia oszczędzają Ci czas lub zapewniają większe bezpieczeństwo, możesz dorzucić się w Monero (XMR): prywatnym z założenia, dokładnie tak jak wszystko tutaj. Każdy grosz idzie na hosting, certyfikat podpisywania kodu i czas na rozwój.',
  badge: 'Darowizny szanujące prywatność',
  updatedLabel: 'Ostatnia aktualizacja',
  card: {
    label: 'Adres Monero (XMR)',
    scanHint: 'Zeskanuj kod QR swoim portfelem lub skopiuj adres poniżej.',
    copy: 'Kopiuj adres',
    copied: 'Skopiowano ✓',
    openWallet: 'Otwórz w portfelu',
    qrPending: 'Kod QR pojawi się tutaj, gdy tylko adres do darowizn zostanie skonfigurowany.',
    notConfigured: 'Adres do darowizn nie został jeszcze ustawiony — zajrzyj wkrótce ponownie.',
  },
  why: {
    h2: 'Dlaczego Monero?',
    sub: 'Ponieważ projekt dbający o prywatność nie powinien wymagać, byś zrezygnował z własnej prywatności, aby go wesprzeć.',
    list: [
      { t: 'Prywatne domyślnie', d: 'Monero ukrywa nadawcę, odbiorcę i kwotę. Nie istnieje żaden publiczny rejestr wiążący darowiznę z Tobą — co pasuje do pakietu zbudowanego na zasadzie nieśledzenia Cię.' },
      { t: 'Bez pośredników, bez kont', d: 'Żadnego operatora płatności, żadnej rejestracji i żadnego skryptu podmiotów trzecich na tej stronie. Adres to wszystko, czego potrzebujesz.' },
      { t: 'Tutaj nic nie jest śledzone', d: 'Ta strona nie ładuje żadnej analityki i nie wykonuje żadnych połączeń sieciowych. Nie możemy zobaczyć, kto ją odwiedził ani kto przekazał darowiznę.' },
    ],
  },
  funds: {
    h2: 'Na co idą środki',
    sub: 'Mały, niezależny projekt bez budżetu. Każdy wkład jest wydawany w sposób jawny:',
    list: [
      { t: 'Hosting i infrastruktura', d: 'Utrzymanie strony, wydań i sum kontrolnych online oraz zapewnienie ich szybkości.' },
      { t: 'Certyfikat podpisywania kodu', d: 'Certyfikat OV/EV, aby instalatory przestały wyzwalać SmartScreen — najczęściej zgłaszane ulepszenie ze wszystkich.' },
      { t: 'Czas na rozwój', d: 'Nowe narzędzia, wersje na Linux, utwardzanie zabezpieczeń oraz utrzymywanie wszystkiego jako darmowe i wolne od telemetrii.' },
    ],
  },
  otherWays: {
    h2: 'Inne sposoby, by pomóc',
    sub: 'Nie możesz przekazać darowizny? To pomaga tak samo — i nic nie kosztuje.',
    list: [
      { t: 'Dodaj gwiazdkę repozytoriom na GitHub', d: 'Widoczność i reputacja naprawdę pomagają nowym użytkownikom znaleźć narzędzia i im zaufać.' },
      { t: 'Wnieś swoje narzędzie', d: 'Zbuduj coś, co pasuje do pakietu, i zgłoś to do recenzji bezpieczeństwa.' },
      { t: 'Zgłaszaj błędy i fałszywe alarmy', d: 'Zakładaj zgłoszenia, przekazuj dostawcom fałszywe alarmy programów antywirusowych i pomagaj innym w dyskusjach.' },
    ],
  },
  note: 'Darowizny są dobrowolnymi darami, a nie zakupami — nie ma zwrotów, faktur ani paragonów do celów podatkowych. Prosimy, przekazuj tylko to, z czego możesz bez trudu zrezygnować. Dziękujemy za utrzymywanie przy życiu niezależnego oprogramowania stawiającego prywatność na pierwszym miejscu.',
};

export const about = {
  h1: 'O Strix',
  lead:
    'Jesteśmy małą, niezależną grupą czworga przyjaciół — studentów informatyki z Niemiec — którzy mieli dość narzędzi „prywatności”, których tak naprawdę nie da się sprawdzić. Strix jest tego owocem: pakiet narzędzi do ochrony prywatności i bezpieczeństwa, które działają w pełni offline, nie zawierają żadnej telemetrii i należą do Ciebie — możesz je czytać, kompilować i im ufać. Na licencji MIT, darmowe na zawsze, bez żadnej firmy za nimi i bez niczego na sprzedaż.',
  badge: 'Niezależne · open source',
  updatedLabel: 'Ostatnia aktualizacja',
  values: {
    h2: 'W co wierzymy',
    list: [
      { t: 'Weryfikuj, nie tylko ufaj', d: 'Każde narzędzie to publiczny, otwartoźródłowy kod na licencji MIT z modelem zagrożeń. Nie wierz nam na słowo — przeczytaj je, skompiluj i sprawdź samodzielnie.' },
      { t: 'Narzędzia do ochrony prywatności nie mogą Cię szpiegować', d: 'Zero telemetrii, żadnych kont, żadnej analityki — nawet na tej stronie. Twoje dane nigdy nie opuszczają Twojej maszyny.' },
      { t: 'Offline z założenia', d: 'Narzędzia desktopowe same z siebie nie wykonują żadnych połączeń sieciowych. Odłącz kabel, a nadal będą działać.' },
      { t: 'Darmowe, na zawsze', d: 'Żadnych płatnych planów, subskrypcji ani reklam. Jeśli kiedykolwiek przyjmiemy darowizny lub granty, nigdy nie zmieni to tych obietnic.' },
    ],
  },
  story: {
    h2: 'Dlaczego to tworzymy',
    p1: 'Chcieliśmy, aby narzędzia, których sami używamy, były uczciwe: bez czarnych skrzynek, bez „zaufaj nam”, bez cichego zbierania danych. Większość tego, czego potrzebowaliśmy, albo nie istniała jako open source, albo nie była wieloplatformowa, albo kazała nam zrezygnować z prywatności, by ją chronić. Więc zaczęliśmy budować — po jednym małym, skoncentrowanym, możliwym do audytu narzędziu naraz.',
    p2: 'Strix to poboczny projekt, na którym nam zależy, rozwijany w wolnym czasie. Zawsze będzie otwarty i zawsze będzie szczerze mówił, czym jest — w tym o swoich brakach (instalatory nie są jeszcze podpisane cyfrowo, i mówimy o tym wprost na stronie Weryfikacji).',
  },
  cta: {
    h2: 'Włącz się',
    p: 'Strix jest otwarty dla każdego. Przeczytaj kod źródłowy, zgłoś błąd, zaproponuj narzędzie lub wyślij własne do przeglądu bezpieczeństwa. Jeśli Ci pomaga, gwiazdka na GitHub naprawdę pomaga innym je znaleźć.',
    btnGithub: 'Zobacz na GitHub',
    btnContribute: 'Dodaj narzędzie',
  },
};

export const alternatives = {
  h1: 'Alternatywy open source',
  lead:
    'Używasz już zamkniętego lub płatnego narzędzia do ochrony prywatności? Jest spora szansa, że Strix ma zamiennik o otwartym kodzie, działający offline i bez żadnej telemetrii — darmowy na zawsze, na licencji MIT i gotowy do audytu. Oto, co czym można zastąpić.',
  badge: 'Darmowe i otwarte zamienniki',
  updatedLabel: 'Ostatnia aktualizacja',
  altToLabel: 'Alternatywa open source dla',
  viewTool: 'Zobacz narzędzie →',
  ctaLead: 'Nie możesz znaleźć odpowiednika?',
  ctaText: 'Przejrzyj pełny zestaw narzędzi lub zaproponuj narzędzie, które powinniśmy stworzyć.',
  ctaAll: 'Wszystkie narzędzia',
  ctaSuggest: 'Zaproponuj narzędzie',
};

export default { ui, categories, security, apps, contribute, donate, about, alternatives };
