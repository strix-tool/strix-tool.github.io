// French (fr-FR) translation. Mirrors the structure of en.js / site.js.
//   - `ui`        : all site-chrome / marketing strings (re-exported as `t`).
//   - `categories`: display labels for the app-category chips (canonical keys stay English).
//   - `security`  : the /security (Verify) page prose.
//   - `apps`      : per-locale overrides for each app's content.

export const ui = {
  metaDescription:
    'Outils de confidentialité et de sécurité open source et hors ligne pour Windows et Linux. Aucune télémétrie, aucun compte, sous licence MIT. Suppression des métadonnées, effacement sécurisé, blocage des publicités et des traqueurs, pare-feu sortant par application, surveillance du système et bien plus encore.',
  homeSeoTitle: 'Strix Advanced Tools — Outils de confidentialité et de sécurité open source',
  homeSeoDescription:
    'Neuf outils de confidentialité et de sécurité open source et hors ligne pour Windows et Linux : suppresseur de métadonnées et archiveur AES-256, effaceur de disque sécurisé, bloqueur de publicités et de traqueurs par fichier hosts, pare-feu sortant par application, moniteur système, informations matérielles, sentinelle de sécurité, ainsi que des outils de reconnaissance et d’OSINT. Aucune télémétrie. Sous licence MIT. Gratuit à jamais.',
  downloadsSeoTitle: 'Télécharger Strix Advanced Tools — Windows et Linux',
  downloadsSeoDescription:
    'Téléchargez la suite Strix Advanced Tools pour Windows et Linux. Installateurs directs et paquets .deb depuis GitHub Releases, chacun accompagné d’une somme de contrôle SHA-256. Gratuit et open source.',
  keywordsGlobal:
    'outils de sécurité open source, outils de confidentialité, windows, linux, suppresseur de métadonnées, suppresseur exif, effacement sécurisé de disque, nist 800-88, bloqueur de publicités par fichier hosts, bloqueur de traqueurs, bloqueur de télémétrie, dns sinkhole, pare-feu par application, pare-feu sortant, moniteur de trafic sortant, coupe-circuit, alternative à little snitch, widget de surveillance système, informations matérielles, moniteur de sécurité, osint, reconnaissance, hors ligne, sans télémétrie, licence MIT',
  tagline: 'Outils de confidentialité et de sécurité open source pour Windows et Linux.',
  heroBadge: 'Open source · MIT · Windows et Linux',
  heroTitle: 'Ne faites pas confiance aux outils de sécurité. Lisez-les.',
  heroSubtitle:
    'Strix Advanced Tools est une suite open source d’utilitaires de confidentialité et de sécurité pour Windows et Linux. Chacun fonctionne entièrement hors ligne, n’embarque aucune télémétrie et vous appartient : à auditer, à compiler et à approuver — gratuit à jamais, sous licence MIT.',
  browse: 'Explorer les outils',
  getStarted: 'Télécharger',
  viewOnGithub: 'Ajouter une étoile sur GitHub',
  nav: { apps: 'Outils', downloads: 'Téléchargements', github: 'GitHub', security: 'Sécurité', contribute: 'Contribuer', donate: 'Faire un don', about: 'À propos', alternatives: 'Alternatives' },
  allApps: 'Les outils',
  allAppsLead: 'Neuf utilitaires ciblés. Chacun fait une chose, et la fait bien, hors ligne.',
  features: 'Ce qu’il fait',
  screenshots: 'Un aperçu de l’intérieur',
  faqTitle: 'Questions fréquentes',
  download: 'Télécharger',
  downloadCta: 'Obtenir',
  otherDownloads: 'Toutes les plateformes et sommes de contrôle',
  source: 'Code source',
  docs: 'Documentation',
  readme: 'Lire la documentation',
  install: 'Installation',
  installWindows: 'Windows',
  installLinux: 'Linux (Ubuntu / Debian)',
  security: 'Sécurité',
  securityNote:
    'Hors ligne par défaut, sans interpréteur de commandes, sans code dynamique, moindre privilège — et chaque ligne est sous licence MIT et ouverte à l’audit.',
  category: 'Catégorie',
  backHome: 'Tous les outils',
  verified: 'Des sommes de contrôle (SHA-256) sont publiées à chaque version afin que vous puissiez vérifier votre téléchargement.',
  unsigned:
    'Les binaires ne sont pas encore signés numériquement ; Windows SmartScreen peut donc afficher un avertissement au premier lancement — choisissez « Informations complémentaires → Exécuter quand même », ou vérifiez d’abord la somme de contrôle. Ne désactivez jamais votre antivirus.',
  whyTitle: 'Bâti sur quatre promesses',
  whyLead: 'Pas un slogan — chaque promesse est vérifiable dans le code source avant que vous ne lui accordiez votre confiance.',
  why: [
    { k: 'offline', title: 'Hors ligne par conception', text: 'Aucun appel réseau, aucune télémétrie, aucun compte. Vos données ne quittent jamais la machine sur laquelle elles résident.', proof: 'grep sur le code source : zéro socket sortant dans les outils de bureau' },
    { k: 'hardened', title: 'Durci et testé', text: 'Aucun appel à un interpréteur de commandes, aucun code dynamique, moindre privilège — et les chemins critiques pour la sécurité sont couverts par de véritables tests de non-régression.', proof: 'par exemple, l’effaceur de disque refuse le disque système dans 18 tests unitaires' },
    { k: 'cross', title: 'Windows et Linux', text: 'De véritables assistants d’installation sur Windows et des paquets natifs sur Linux pour les outils de bureau ; les outils de reconnaissance/OSINT Kali sont fournis sous forme de scripts Linux.', proof: 'des versions avec sommes de contrôle et attestation de provenance de build GitHub' },
    { k: 'open', title: 'Véritablement ouvert', text: 'Sous licence MIT, sans conditions cachées. Lisez-le, compilez-le vous-même, auditez-le ou proposez une pull request.', proof: 'chaque dépôt est public sur GitHub — rien de caché' },
  ],
  downloadsTitle: 'Téléchargements',
  downloadsLead:
    'Récupérez la dernière version pour votre plateforme. Chaque téléchargement est un fichier direct issu de GitHub Releases, accompagné d’une somme de contrôle SHA-256.',
  homeFaq: [
    ['Les outils Strix Advanced Tools sont-ils vraiment gratuits et open source ?', 'Oui. Chaque outil est sous licence MIT et gratuit à jamais — vous pouvez lire le code source, le compiler vous-même et y contribuer. Aucune formule payante, aucun compte, aucun abonnement ni aucune publicité, ni maintenant ni jamais.'],
    ['Qui conçoit Strix, et pourquoi devrais-je lui faire confiance ?', 'Strix Advanced Tools est un projet open source indépendant — pas une entreprise qui vend vos données. Vous n’avez pas à accorder votre confiance aveuglément : chaque outil est un dépôt GitHub public sous licence MIT, de sorte que vous (ou n’importe qui) pouvez lire chaque ligne, le compiler vous-même à partir du code source et confirmer qu’il fait exactement ce qu’il annonce. La confiance se vérifie, elle ne se demande pas. Chaque dépôt fournit également un fichier SECURITY.md décrivant le modèle de menace et un canal de divulgation privé.'],
    ['Quel outil Strix est l’alternative open source à l’application que j’utilise déjà ?', 'Talon est un pare-feu sortant par application — une alternative open source à Little Snitch et GlassWire. Sinkhole est un bloqueur de publicités et de traqueurs par fichier hosts — une alternative locale, sur une seule machine, à Pi-hole. MetaVault supprime les métadonnées et crée des archives AES-256 — une alternative aux interfaces graphiques d’ExifTool, à MAT2 et aux suppresseurs EXIF en ligne. Disk Cleaner efface les disques de façon sécurisée — une alternative à DBAN et à l’effacement de CCleaner. Pulse est un widget de surveillance système (alternative aux gadgets Rainmeter/HWiNFO), Inspector renseigne sur le matériel (alternative à CPU-Z/Speccy), et Sentinel est une sentinelle de sécurité. Chacun fonctionne hors ligne, sans aucune télémétrie.'],
    ['Ces outils envoient-ils mes données quelque part ?', 'Non. Chaque outil de bureau fonctionne entièrement sur votre machine, n’effectue aucun appel réseau de lui-même et n’embarque aucune télémétrie — vos données ne quittent jamais votre appareil. Les seuls outils qui touchent au réseau sont ceux dont c’est précisément la fonction (les outils de reconnaissance/OSINT), et même ceux-là n’utilisent que des API publiques sans clé, encadrées par un consentement et limitées par des délais d’expiration.'],
    ['Faut-il des compétences techniques pour les utiliser ?', 'Pas pour les applications de bureau — MetaVault, Pulse, Inspector, Sentinel, Sinkhole et Talon disposent tous d’une interface graphique épurée, avec des réglages par défaut judicieux et des confirmations avant toute action destructrice. Les outils de reconnaissance (Vantage, Archer) fonctionnent en ligne de commande, pour les personnes à l’aise dans un terminal.'],
    ['De quel outil ai-je besoin ?', 'Utilisez la recherche et les filtres au-dessus de la grille d’outils pour affiner par plateforme (Windows / Linux) et par catégorie (Confidentialité, Sécurité, Système, OSINT…), ou appuyez sur ⌘K / Ctrl-K n’importe où pour accéder directement à un outil. Chaque page d’outil explique exactement ce qu’il fait — et ce qu’il ne fait délibérément pas.'],
    ['Comment vérifier qu’un téléchargement est authentique ?', 'Chaque version GitHub publie une somme de contrôle SHA-256 (SHA256SUMS) à côté des fichiers. Téléchargez-la, comparez l’empreinte de votre fichier, et vous savez que le binaire correspond exactement à ce qui a été publié — sans altération. Cela compte davantage que n’importe quelle signature de code.'],
    ['Quelles plateformes sont prises en charge ?', 'Windows et Linux (Ubuntu / Debian). Les outils de bureau sont fournis avec un installateur Windows et un paquet Linux ; les outils de reconnaissance/OSINT Vantage et Archer sont réservés à Linux/Kali.'],
    ['Existe-t-il une version macOS ou mobile ?', 'Pas encore officiellement — les cibles prises en charge sont Windows et Linux (Ubuntu / Debian), et il n’existe aucune version iOS ou Android. Comme les outils basés sur Python (MetaVault, Pulse, Sentinel, Sinkhole, Talon) sont open source et multiplateformes, ils peuvent tout à fait fonctionner sur macOS à partir du code source, mais cela n’est ni pris en charge ni testé. Une version macOS native figure sur la feuille de route, ce n’est pas un produit livré.'],
    ['Pourquoi Windows affiche-t-il un avertissement « éditeur inconnu » ?', 'Les installateurs ne sont pas encore signés numériquement ; SmartScreen affiche donc une invite au premier lancement. Choisissez « Informations complémentaires → Exécuter quand même », ou vérifiez la somme de contrôle SHA-256 publiée avec chaque version. Ne désactivez jamais votre antivirus pour les exécuter — vous ne devriez jamais avoir à le faire.'],
    ['L’usage des outils de reconnaissance / OSINT est-il légal ?', 'Uniquement contre des systèmes que vous possédez ou que vous êtes explicitement autorisé à tester — un laboratoire d’entraînement volontairement vulnérable, un défi CTF ou une mission avec autorisation écrite. Vantage et Archer affichent tous deux une confirmation de consentement unique et sont strictement passifs / réservés à un usage autorisé. Scanner ou profiler sans autorisation peut être illégal.'],
    ['Puis-je signaler un bogue ou contribuer ?', 'Absolument — chaque outil est un dépôt public distinct sur GitHub avec un fichier SECURITY.md, des modèles de tickets et un guide de contribution. Les problèmes de sécurité disposent d’un canal de divulgation privé ; les nouvelles fonctionnalités et les correctifs sont les bienvenus sous forme de pull requests.'],
  ],
  faqSearchPlaceholder: 'Rechercher dans les questions…',
  toolsFilterAll: 'Tous',
  toolsSearchPlaceholder: 'Rechercher des outils par nom, fonction ou mot-clé…',
  toolsNoMatch: 'Aucun outil ne correspond — essayez de réinitialiser les filtres.',
  footerTagline: 'Outils de confidentialité et de sécurité open source.',
  footerNote: 'Conçu pour celles et ceux qui tiennent à leur vie privée.',
  footerCols: { product: 'Outils', resources: 'Ressources', about: 'Projet' },
  langLabel: 'Langue',
  stats: { tools: 'outils', platforms: 'plateformes', telemetry: 'télémétrie', license: 'licence' },
  faqNoMatch: 'Aucune question ne correspond — essayez d’autres mots.',
  // Downloads page section headings
  dl: { allTools: 'Tous les outils — Windows et Linux', verify: 'Vérifiez votre téléchargement' },
  // App-page fixed labels ({name} is replaced with the tool name)
  app: {
    price: 'Prix',
    priceVal: 'Gratuit — open source (MIT)',
    platforms: 'Plateformes',
    category: 'Catégorie',
    builtWith: 'Conçu avec',
    altTo: 'Alternative open source à',
    telemetry: 'Télémétrie',
    telemetryVal: 'Aucune — entièrement hors ligne',
    updated: 'Mis à jour',
    notDo: 'Ce que {name} ne fait délibérément pas',
    poweredBy: 'Propulsé par l’open source',
    fullAck: 'Remerciements complets et liens →',
    related: 'Outils Strix associés',
    winInstall: 'Téléchargez l’assistant d’installation et exécutez-le — des raccourcis dans le menu Démarrer et un programme de désinstallation sont créés pour vous.',
    dangerFallback: 'Cet outil détruit définitivement des données et l’opération est irréversible. Lisez le guide de sécurité avant toute utilisation.',
    copy: 'Copier',
    copied: 'Copié ✓',
    glance: 'en un coup d’œil',
  },
};

export const categories = {
  Privacy: 'Confidentialité',
  System: 'Système',
  Security: 'Sécurité',
  Diagnostics: 'Diagnostics',
  Recon: 'Reconnaissance',
  OSINT: 'OSINT',
};

export const security = {
  h1: 'Vérifiez-nous — ne vous contentez pas de nous faire confiance.',
  lead:
    'Les outils Strix Advanced Tools sont gratuits, open source (MIT) et conçus pour fonctionner entièrement hors ligne. Nos binaires Windows ne sont pas encore signés numériquement avec un certificat payant — nous sommes un petit projet indépendant, sans budget, et nous préférons le dire clairement plutôt que de le cacher. Parce que chaque outil est open source, vous n’avez à nous croire sur parole pour rien. Voici comment le vérifier vous-même.',
  boldNotSigned: 'pas encore signés numériquement avec un certificat payant',
  updatedLabel: 'Dernière mise à jour',
  why: [
    { t: 'Le code source est public', d: 'Chaque outil est un dépôt GitHub public sous licence MIT. Lisez chaque ligne, recompilez-le vous-même et confirmez qu’il fait exactement ce qu’il annonce.' },
    { t: 'Les binaires sont attestés', d: 'Chaque version comporte une attestation de provenance de build GitHub (SLSA Build L2) — une preuve cryptographique que le fichier a été compilé à partir de ce code source, sur les serveurs de GitHub, et n’a pas été modifié depuis.' },
    { t: 'Rien ne communique en secret', d: 'Les outils de bureau n’effectuent aucun appel réseau. Débranchez votre câble réseau et ils fonctionnent toujours ; surveillez votre trafic sortant et vous n’en verrez aucun.' },
  ],
  verify: {
    h2: 'Vérifiez votre téléchargement',
    sub: 'La vérification est facultative — si vous avez téléchargé depuis une version GitHub, tout va déjà bien. Mais si vous voulez en être sûr, chaque version fournit un fichier SHA256SUMS, et voici comment le confronter. Remplacez le nom de fichier d’exemple par l’outil que vous avez téléchargé.',
    anyOs: 'Tout système d’exploitation',
    winStt: 'Vérifier la somme de contrôle',
    winIntro: 'Dans le dossier où vous avez enregistré le téléchargement, exécutez PowerShell :',
    winExp: 'Comparez l’empreinte affichée à la ligne correspondante dans SHA256SUMS. Si elles sont identiques, le fichier est, octet par octet, celui que nous avons publié :',
    nixStt: 'Vérifier la somme de contrôle',
    nixIntro: 'Placez le téléchargement et son fichier SHA256SUMS dans le même dossier, puis :',
    nixExp: 'Une réponse d’un seul mot par fichier — vous voulez obtenir OK :',
    provStt: 'Vérifier la provenance du build',
    provIntro: 'Plus fort qu’une somme de contrôle : prouvez que le binaire a été compilé à partir de notre code source public, dans notre CI public. Nécessite GitHub CLI 2.49+ :',
    provExp: 'Une ligne de réussite verte nommant le dépôt source exact qui a produit le fichier :',
    note: 'Les sommes de contrôle sont publiées dans chaque GitHub Release et répliquées via HTTPS — exemple SHA256SUMS. L’attestation de provenance est stockée sur GitHub, pas par nous : ni nous ni un miroir de téléchargement compromis ne pouvons donc la falsifier.',
  },
  data: {
    h2: 'Quelles données quittent votre machine',
    sub: 'La version courte : pour les outils de bureau, aucune. Voici le détail complet — et chaque ligne peut être confirmée par une capture de paquets.',
    thCategory: 'Catégorie',
    thWhat: 'De quoi il s’agit',
    thWhere: 'Où cela va',
    rows: [
      ['Les fichiers que vous traitez', 'Métadonnées, contenu des disques, archives — lus et écrits sur place, sur votre machine.', 'Jamais envoyés. Rien n’est transmis où que ce soit.'],
      ['Les informations de votre système', 'Nom d’hôte, nom d’utilisateur, numéros de série, adresses IP, matériel — affichés uniquement dans l’application.', 'Affichés localement ; jamais transmis.'],
      ['Réglages et rapports', 'Préférences, journaux, rapports HTML/PDF.', 'Enregistrés sur le disque (%LOCALAPPDATA% / ~/.config) ; jamais synchronisés vers un serveur.'],
      ['Statistiques d’usage et de plantage', 'Aucune. Il n’y a aucun SDK d’analyse, aucune télémétrie, aucune communication cachée.', 'Rien n’est jamais collecté.'],
      ['Trafic réseau sortant (outils de bureau)', 'MetaVault, Pulse, Inspector, Sentinel, Sinkhole, Talon.', 'Zéro socket sortant. Déconnectez le réseau — ils fonctionnent toujours.'],
      ['Trafic réseau sortant (outils de reconnaissance)', 'Vantage et Archer — dont c’est précisément la fonction.', 'Uniquement des API publiques sans clé que vous déclenchez explicitement, après une confirmation de consentement, limitées par des délais d’expiration.'],
    ],
  },
  av: {
    h2: 'Avertissements de l’antivirus et de SmartScreen',
    intro1: 'Parce que nos applications Windows ne sont pas signées et sont empaquetées avec PyInstaller, Windows SmartScreen peut indiquer',
    intro2: 'et une poignée des quelque 70 moteurs antivirus peuvent signaler l’installateur.',
    intro3: 'C’est attendu pour un logiciel récent, non signé et open source — il s’agit d’une heuristique générique liée à la manière dont l’application est empaquetée, et non de la détection d’un véritable logiciel malveillant.',
    unknownPublisher: 'éditeur inconnu',
    notCommon: 'peu téléchargé,',
    list: [
      { b: 'Pourquoi cela se produit :', r: 'le bootloader de PyInstaller est un format d’empaquetage courant (les logiciels malveillants l’utilisent aussi), un fichier tout neuf n’a aucune réputation de téléchargement, et les binaires non signés subissent une pénalité « suspect jusqu’à preuve du contraire ».' },
      { b: 'La véritable preuve', r: 'ce sont la somme de contrôle et l’attestation de provenance ci-dessus, ainsi que le code source que vous pouvez lire — et non l’heuristique d’un quelconque éditeur.' },
      { b: 'Ce que nous faisons :', r: 'nous signalons les faux positifs aux éditeurs à mesure qu’ils apparaissent, et nous postulons au programme gratuit de signature de code de la SignPath Foundation destiné aux projets open source, que nous déploierons à mesure que la réputation se construira.' },
      { b: 'Ne désactivez jamais votre antivirus.', r: 'En cas de doute, vérifiez la somme de contrôle ou exécutez l’outil à partir du code source.' },
    ],
    tiny: 'Nous fournissons un lien vers une analyse VirusTotal en direct pour chaque build dès qu’une version sort, afin que vous puissiez constater le résultat actuel par vous-même. Nous ne publierons jamais de capture d’écran d’une « analyse propre » ni ne prétendrons « zéro détection » — un lien en direct sur lequel vous pouvez cliquer vaut mieux qu’une capture d’écran qui devient obsolète au build suivant.',
  },
  read: {
    h2: 'Lisez le code source',
    sub: 'La garantie la plus forte de toutes. Faites un grep dans n’importe quel dépôt sur socket, urllib, requests ou http et constatez par vous-même ce qui touche — et ne touche pas — au réseau.',
    view: 'Voir le code source ↗',
  },
  threat: {
    h2: 'Modèle de menace',
    items: [
      ['Ce contre quoi Strix protège', 'Les fuites de données via les métadonnées de fichiers, les données récupérables sur des disques mis au rebut, les domaines de traqueurs/télémétrie/publicités, les connexions sortantes silencieuses, les programmes au démarrage et les appareils inconnus, ainsi que les outils propriétaires que vous ne pouvez pas inspecter.'],
      ['Ce que Strix n’est PAS', 'Ce n’est ni un antivirus/EDR, ni un bac à sable, ni une défense contre un système d’exploitation compromis ou un logiciel malveillant s’exécutant déjà avec des droits d’administrateur. Les outils de bureau font remonter des informations et agissent sur votre commande ; ils ne combattent pas les menaces actives en temps réel.'],
      ['Périmètre de confiance', 'La provenance prouve qu’un téléchargement provient, sans modification, de ce code source public via le CI de GitHub. Elle ne prouve pas que le code source est inoffensif — c’est le rôle du code MIT ouvert, que vous pouvez lire et recompiler.'],
    ],
  },
  report: {
    h2: 'Vous avez trouvé une vulnérabilité ?',
    p: 'Signalez-la en privé — n’ouvrez pas de ticket public pour une faille de sécurité. Chaque dépôt dispose d’un fichier SECURITY.md décrivant le modèle de menace et un canal de divulgation coordonnée, et le signalement privé de vulnérabilités de GitHub est activé. Nous n’exercerons aucune représaille et nous vous créditerons si vous le souhaitez.',
    btnPolicy: 'Politique de sécurité',
    btnRepos: 'Tous les dépôts',
  },
};

export const apps = {
  'strix-metavault': {
    tagline: 'Effacez les métadonnées cachées, puis verrouillez vos fichiers avec un chiffrement AES-256.',
    summary:
      'Chaque photo, document et PDF que vous partagez contient des traces cachées — coordonnées GPS, votre nom, l’appareil utilisé, l’historique des modifications. Strix MetaVault supprime tout cela, puis scelle en option les fichiers nettoyés dans une archive 7-Zip chiffrée en AES-256, avec des noms de fichiers masqués et un mot de passe aléatoire à usage unique. Entièrement hors ligne, sans compte, sans télémétrie.',
    features: [
      'Supprime les données EXIF, GPS, IPTC et XMP des images ; auteur/société/historique des fichiers Office et PDF',
      'Archive AES-256 en option, avec noms de fichiers chiffrés et nom de sortie aléatoire',
      'Génère un mot de passe robuste à usage unique, jamais écrit sur le disque ni dans les journaux',
      'Refuse les mots de passe personnalisés faibles ; protégé contre les attaques par lien symbolique et les bombes zip',
      'Vos fichiers originaux ne sont jamais modifiés — tout s’effectue sur des copies',
    ],
    definition:
      'Strix MetaVault est un suppresseur de métadonnées et chiffreur de fichiers gratuit et open source pour Windows et Linux, qui supprime les métadonnées cachées EXIF/GPS et de documents, puis verrouille en option vos fichiers dans une archive chiffrée en AES-256 — entièrement hors ligne, sans compte ni télémétrie.',
    notFor: [
      'Il n’envoie jamais vos fichiers — tout le nettoyage se fait localement, contrairement aux suppresseurs de métadonnées en ligne.',
      'Il n’implémente pas sa propre cryptographie : le chiffrement est délégué au 7-Zip AES-256, éprouvé.',
      'Ce n’est pas un service cloud et il ne nécessite aucun compte.',
    ],
    faq: [
      ['Fonctionne-t-il sans 7-Zip ni ExifTool ?', 'Les fichiers JPEG et PNG sont nettoyés par le moteur intégré. Pour tous les autres formats et pour l’archivage chiffré, installez 7-Zip et ExifTool (ou placez-les à côté de l’application).'],
      ['Puis-je récupérer un mot de passe d’archive perdu ?', 'Non. Le mot de passe est affiché une seule fois et n’est jamais stocké. Enregistrez-le immédiatement dans un gestionnaire de mots de passe — sans lui, le chiffrement est réellement incassable.'],
    ],
    seoTitle: 'Strix MetaVault — Suppresseur de métadonnées et chiffreur de fichiers',
    seoDescription: 'Outil gratuit et open source pour supprimer les métadonnées EXIF/GPS et de documents, puis verrouiller vos fichiers dans une archive chiffrée en AES-256. Hors ligne, sans télémétrie. Windows et Linux.',
  },
  'strix-pulse-monitor': {
    tagline: 'Un moniteur d’un coup d’œil, toujours au premier plan, pour toute votre machine.',
    summary:
      'Un widget de bureau élégant et sans cadre qui flotte au-dessus de votre travail et affiche en direct l’utilisation du CPU, du GPU, de la RAM et du disque, aux côtés du débit réseau descendant et montant en temps réel — actualisé chaque seconde. Déplacez-le où vous voulez, épinglez-le en place ou rangez-le dans la zone de notification. Aucun accès réseau propre, aucune télémétrie.',
    features: [
      'Charge du CPU, du GPU, de la RAM et du stockage en direct, plus le débit réseau, une fois par seconde',
      'Relevés du GPU depuis NVIDIA, les compteurs de performance Windows ou le sysfs AMD sous Linux',
      'Widget « verre » sans cadre que vous pouvez déplacer, épingler ou masquer dans la zone de notification',
      'Mémorise sa position ; les réglages sont validés et écrits de façon atomique',
    ],
    definition:
      'Strix Pulse Monitor est un widget de surveillance système de bureau, gratuit et open source, pour Windows et Linux, qui affiche en direct l’utilisation du CPU, du GPU, de la RAM, du disque et du réseau dans un panneau « verre » toujours au premier plan — hors ligne, sans télémétrie.',
    notFor: [
      'Il ne communique avec aucun serveur et ne collecte aucune donnée d’utilisation.',
      'C’est un moniteur en direct, consultable d’un coup d’œil, et non une suite de tests de performance (voir Strix Inspector pour les benchmarks).',
      'Il ne nécessite aucun droit d’administrateur pour fonctionner.',
    ],
    faq: [
      ['Pourquoi la ligne du GPU affiche-t-elle N/A ?', 'Les GPU Intel sous Linux nécessitent des outils privilégiés ; le widget affiche donc N/A plutôt que de demander les droits root. NVIDIA et AMD sont pris en charge d’emblée.'],
      ['Peut-il démarrer avec ma session ?', 'Oui — sous Windows, ajoutez un raccourci dans le dossier Démarrage ; sous Linux, lancez l’installateur avec --autostart.'],
    ],
    seoTitle: 'Strix Pulse Monitor — Widget CPU/GPU/RAM et réseau',
    seoDescription: 'Un widget de bureau élégant, toujours au premier plan, affichant en direct l’utilisation du CPU, du GPU, de la RAM, du disque et du réseau. Open source, hors ligne, sans télémétrie. Windows et Linux.',
  },
  'strix-sentinel': {
    tagline: 'Sachez ce qui s’exécute, observe et écoute sur votre machine.',
    summary:
      'Une sentinelle locale et hors ligne qui répond à cinq questions : ce qui démarre avec votre machine, quels nouveaux processus apparaissent, quelle application utilise votre microphone ou votre caméra, qui s’est connecté, et quels appareils inconnus se trouvent sur votre réseau. Une interface graphique sombre et épurée sous Windows ; une CLI scriptable sous Linux. Rien ne quitte jamais votre ordinateur.',
    features: [
      'Audit du démarrage qui signale tout élément nouveau depuis votre référence approuvée',
      'Surveillance en temps réel des processus nouvellement lancés, avec les chemins d’exécutables complets',
      'Détecte quelle application utilise actuellement votre microphone ou votre caméra',
      'Audit des connexions et surveillance du réseau local qui signale les adresses MAC d’appareils inconnus',
    ],
    definition:
      'Strix Sentinel est un moniteur de sécurité gratuit, open source et hors ligne pour Windows et Linux, qui audite ce qui démarre avec votre machine, surveille les nouveaux processus, détecte l’usage du microphone/de la caméra, audite les connexions et signale les appareils inconnus sur votre réseau — sans aucun trafic réseau sortant qui lui soit propre.',
    notFor: [
      'Ce n’est ni un antivirus ni un EDR — il fait remonter les changements pour que vous les jugiez ; il ne met jamais en quarantaine et ne bloque jamais.',
      'Il n’envoie jamais aucune donnée hors de votre machine.',
      'L’édition Linux est une CLI scriptable par conception (sans interface graphique).',
    ],
    faq: [
      ['L’audit des connexions nécessite-t-il des droits d’administrateur ?', 'Oui — la lecture du journal de sécurité nécessite les droits d’administrateur sous Windows et root sous Linux. Toutes les autres vérifications s’exécutent sans privilèges.'],
      ['Existe-t-il une interface graphique Linux ?', 'L’édition Linux est un outil en ligne de commande épuré par conception — il fonctionne sans affichage et via SSH, ce qui convient à un moniteur de sécurité. Il partage le même cœur de détection éprouvé que l’interface graphique Windows.'],
    ],
    seoTitle: 'Strix Sentinel — Moniteur de sécurité et de confidentialité hors ligne',
    seoDescription: 'Voyez ce qui démarre et s’exécute, quelle application utilise votre micro/caméra, auditez les connexions et repérez les appareils inconnus sur votre réseau. Open source, hors ligne. Interface graphique Windows et CLI Linux.',
  },
  'strix-inspector': {
    tagline: 'Un panorama complet et en lecture seule de votre matériel — en quelques secondes.',
    summary:
      'Un inventaire précis et en lecture seule de votre machine — système d’exploitation, CPU, mémoire jusqu’à chaque barrette DIMM, GPU, disques, carte mère, BIOS et batterie — présenté sous forme de texte console, de JSON exploitable par une machine, ou d’un tableau de bord HTML autonome et soigné. Il exécute également de rapides benchmarks du CPU, de la mémoire et du disque. Aucun réseau, aucune élévation de privilèges requise.',
    features: [
      'Inventaire complet : OS, CPU, mémoire par barrette DIMM, GPU, disques, carte mère, BIOS, batterie',
      'Trois formats de sortie : console, JSON et un tableau de bord HTML clair/sombre',
      'Micro-benchmarks intégrés du CPU, de la mémoire et du disque',
      'Fonctionne sous Linux via .NET 8, en réutilisant le même analyseur SMBIOS durci que sous Windows',
    ],
    definition:
      'Strix Inspector est un outil d’informations matérielles et de benchmark gratuit, open source et en lecture seule, pour Windows et Linux, qui inventorie votre CPU, votre RAM par barrette DIMM, votre GPU, vos disques, votre carte mère et votre BIOS sous forme de texte console, de JSON ou d’un tableau de bord HTML autonome — sans aucun accès réseau.',
    notFor: [
      'Il est strictement en lecture seule — il ne modifie jamais de réglages, n’overclocke pas et ne flashe aucun firmware.',
      'Il ne nécessite l’installation d’aucun runtime sous Windows ni aucune élévation de privilèges pour s’exécuter.',
      'Il n’envoie aucune donnée où que ce soit.',
    ],
    faq: [
      ['Dois-je installer un runtime ?', 'Sous Windows, il utilise le .NET Framework intégré — rien à installer. La version Linux est fournie sous forme de binaire autonome.'],
      ['Pourquoi certains champs nécessitent-ils les droits d’administrateur ?', 'Les tailles de disque, les détails des barrettes DIMM et les chaînes du BIOS proviennent d’interfaces privilégiées. Sans élévation, l’outil fonctionne quand même et indique simplement ce qu’il a ignoré.'],
    ],
    seoTitle: 'Strix Inspector — Outil d’informations matérielles et de benchmark',
    seoDescription: 'Inventaire matériel en lecture seule (CPU, RAM par barrette DIMM, GPU, disques, BIOS) et benchmarks — sous forme de texte console, de JSON ou d’un tableau de bord HTML. Open source. Windows et Linux.',
  },
  'strix-disk-cleaner': {
    tagline: 'Effacez un disque pour de bon — avec une protection contre l’effacement du mauvais disque.',
    summary:
      'Effacez de façon définitive et vérifiable un disque entier selon les normes NIST SP 800-88 et DoD 5220.22-M — en recourant au « sanitize » matériel lorsque c’est possible, ou à un écrasement multipasse. Une protection de sécurité multicouche rend impossible la sélection de votre disque système, et chaque action destructrice exige une confirmation saisie au clavier. Windows est fourni avec une interface graphique complète et un certificat de destruction imprimable ; Linux est fourni avec un effaceur en ligne de commande couvert par des tests unitaires.',
    features: [
      'Une protection multicouche : votre disque système et tout disque monté ne peuvent jamais être sélectionnés',
      '« Sanitize » matériel (blkdiscard, nvme, hdparm) ou écrasement multipasse',
      'Confirmation par la saisie du mot ERASE, avec une nouvelle vérification juste avant l’écriture',
      'Logique de sécurité couverte par des tests unitaires ; un certificat de destruction imprimable sous Windows',
    ],
    definition:
      'Strix Disk Cleaner est un effaceur de disque sécurisé, gratuit et open source, pour Windows et Linux, qui efface définitivement un disque selon les normes NIST SP 800-88 et DoD 5220.22-M, avec une protection de sécurité multicouche qui rend impossible l’effacement de votre disque système.',
    notFor: [
      'Il ne peut ni sélectionner ni effacer votre disque système/de démarrage ou tout volume monté — par conception.',
      'Il efface des disques entiers, pas des fichiers individuels.',
      'Il n’effectue aucun appel réseau et ne nécessite aucun compte.',
    ],
    faq: [
      ['Puis-je effacer accidentellement mon disque Windows/Linux ?', 'Non. Le disque système et le disque de démarrage sont détectés et masqués ; sous Linux, tout disque monté est refusé. Vous devez en outre saisir le chemin du périphérique et le mot ERASE.'],
      ['L’écrasement suffit-il pour un SSD ?', 'Pas de façon fiable — le nivellement d’usure de la mémoire flash peut laisser des données derrière lui. L’outil détecte les SSD et vous oriente vers un « sanitize » matériel (blkdiscard / nvme), qui est complet.'],
    ],
    seoTitle: 'Strix Disk Cleaner — Effaceur de disque sécurisé (NIST/DoD)',
    seoDescription: 'Effacez définitivement un disque selon les normes NIST SP 800-88 / DoD 5220.22-M, avec une protection multicouche qui ne peut jamais effacer votre disque système. Open source. Interface graphique Windows et CLI Linux.',
  },
  'strix-vantage': {
    tagline: 'Une seule commande exécute un pipeline de reconnaissance complet et sûr pour les WAF sur votre laboratoire.',
    dangerText: 'Vantage émet du trafic de scan actif (scans de ports, fuzzing, sondes de vulnérabilités). Utilisez-le UNIQUEMENT contre des systèmes que vous possédez ou que vous êtes explicitement autorisé à tester — par exemple votre propre laboratoire local volontairement vulnérable. Le scan non autorisé est illégal dans la plupart des juridictions.',
    summary:
      'Vantage enchaîne environ 25 outils Kali standard de l’industrie — énumération de sous-domaines, tests de disponibilité, scans de ports et TLS, exploration, fuzzing et vérifications de vulnérabilités — en une seule commande, avec un état en direct dans le terminal et un rapport soigné. Il est conçu pour affûter vos compétences en sécurité web sur un laboratoire local volontairement vulnérable (ou toute cible que vous possédez ou êtes autorisé à tester), avec une conception « low-and-slow » sûre pour les IDS/WAF et une interface en terminal en option.',
    features: [
      'Enchaîne environ 25 outils (nmap, nuclei, httpx, ffuf, katana, sqlmap, …) en un seul pipeline de reconnaissance',
      'Sûr pour les IDS/WAF par conception : débit réduit + gigue, plutôt qu’un martèlement plus rapide (profils furtif/approfondi)',
      'Limite le scan actif à votre cible principale ; une empreinte légère sur tout le reste',
      'État en direct dans le terminal + un rapport formaté ; interface TUI Textual en option, avec un navigateur d’historique',
      'Durci : sans interpréteur de commandes (argv uniquement), et l’installation automatique est facultative, avec un avertissement sur la chaîne d’approvisionnement',
    ],
    definition:
      'Strix Vantage est un pipeline d’automatisation de la reconnaissance gratuit et open source pour Linux, qui enchaîne environ 25 outils Kali (nmap, nuclei, httpx, ffuf et d’autres) en une seule commande sûre pour les WAF, destinée à l’entraînement autorisé aux tests d’intrusion sur votre propre laboratoire volontairement vulnérable.',
    notFor: [
      'Il est réservé aux cibles autorisées uniquement — une confirmation de consentement unique l’impose avant tout scan actif.',
      'Il orchestre des outils en amont ; il ne les empaquette ni ne les modifie.',
      'Il est réservé à Linux/Kali (aucune version Windows ou macOS).',
    ],
    faq: [
      ['Son utilisation est-elle légale ?', 'Uniquement contre des systèmes que vous possédez ou que vous êtes explicitement autorisé à tester — comme une application d’entraînement volontairement vulnérable ou un laboratoire de cybersécurité que vous contrôlez. Le scan actif de systèmes qui ne vous appartiennent pas est illégal dans la plupart des juridictions ; vous êtes responsable de votre usage.'],
      ['Nécessite-t-il Kali ou les droits root ?', 'Il cible Kali Linux et sa chaîne d’outils standard ; sudo active les scans SYN et l’installateur automatique (facultatif). Il fonctionne sur d’autres distributions Linux lorsque les outils sont déjà installés.'],
    ],
    creditsNote: 'Vantage orchestre ces outils open source — il ne les empaquette ni ne les modifie. Un grand merci à chaque projet en amont.',
    seoTitle: 'Strix Vantage — Automatisation de la reconnaissance pour CTF et laboratoires de pentest',
    seoDescription: 'Enchaînez environ 25 outils de reconnaissance Kali (nmap, nuclei, ffuf, httpx…) en un seul pipeline sûr pour les WAF, destiné à l’entraînement au pentest autorisé sur un laboratoire local volontairement vulnérable. Open source.',
  },
  'strix-archer': {
    tagline: 'OSINT passif pour les défis CTF et les cibles de laboratoire autorisées.',
    dangerText: 'Strix Archer effectue de la collecte OSINT et affiche une confirmation de consentement unique. Utilisez-le UNIQUEMENT contre des défis CTF / personnages fictifs ou des cibles que vous possédez ou êtes autorisé à tester. Profiler de vraies personnes sans leur consentement peut être illégal.',
    summary:
      'Strix Archer associe un moteur OSINT sans dépendances, reposant uniquement sur la bibliothèque standard, à des wrappers pour des outils populaires — en utilisant Sherlock, maigret, holehe, theHarvester et SpiderFoot lorsqu’ils sont installés, et en se repliant sur sa propre implémentation dans le cas contraire. Il réalise de la reconnaissance de domaine (DNS-over-HTTPS, RDAP/WHOIS, sous-domaines crt.sh, empreinte HTTP + en-têtes de sécurité), de la reconnaissance d’identité (recherche de noms d’utilisateur à débit limité, OSINT GitHub, Gravatar, recherche de fuites) et une vérification de mot de passe sûre reposant sur le k-anonymat de HIBP. Une confirmation de consentement unique le cantonne à un usage de laboratoire autorisé ; tout est passif et en lecture seule, avec un rapport .txt et un rapport HTML sombre.',
    features: [
      'Moteur intégré basé sur la bibliothèque standard + encapsulation automatique de Sherlock / maigret / holehe / theHarvester / SpiderFoot lorsqu’ils sont présents',
      'Domaine : DNS-over-HTTPS, RDAP/WHOIS, sous-domaines crt.sh, HTTP + vérification des en-têtes de sécurité manquants',
      'Identité : recherche de noms d’utilisateur à débit limité, OSINT GitHub (e-mails fuités dans les commits), Gravatar, recherche de fuites XposedOrNot',
      'Vérification sûre de la compromission d’un mot de passe via le k-anonymat de HIBP — le mot de passe ne quitte jamais votre machine',
      'Confirmation de consentement unique, à débit limité par conception ; passif et en lecture seule ; rapport .txt + rapport HTML sombre',
    ],
    definition:
      'Strix Archer est un outil OSINT gratuit et open source pour Linux — conçu pour les défis CTF et les cibles de laboratoire autorisées — qui réalise de la reconnaissance passive de domaine et d’identité (DNS/RDAP/crt.sh, recherche de noms d’utilisateur et d’e-mails, OSINT GitHub, vérifications de fuites), ainsi qu’une vérification de mot de passe sûre reposant sur le k-anonymat de HIBP.',
    notFor: [
      'Il est passif et en lecture seule — il n’exploite jamais et n’attaque jamais activement une cible.',
      'Il est réservé à un usage autorisé uniquement — une confirmation de consentement unique en impose la reconnaissance.',
      'La vérification de compromission de mot de passe n’envoie jamais votre mot de passe (k-anonymat de HIBP).',
    ],
    faq: [
      ['Son utilisation est-elle légale ?', 'Uniquement contre des défis CTF / personnages fictifs ou des cibles que vous possédez ou êtes explicitement autorisé à tester. Profiler de vraies personnes sans leur consentement peut constituer du harcèlement et être illégal — une confirmation de consentement unique en impose la reconnaissance.'],
      ['Dois-je installer quelque chose ?', 'Non — le moteur intégré repose uniquement sur la bibliothèque standard de Python. Les outils optionnels (Sherlock, holehe, …) sont encapsulés automatiquement s’ils sont présents, et `--setup` les installe dans des environnements pipx isolés afin que le Python de votre système reste intact.'],
    ],
    creditsNote: 'Strix Archer encapsule ces outils open source et services publics — il ne les empaquette ni ne les modifie. Merci à chaque projet et service en amont.',
    seoTitle: 'Strix Archer — Outil OSINT pour CTF et cibles de laboratoire autorisées',
    seoDescription: 'OSINT passif pour des cibles de laboratoire/CTF autorisées : reconnaissance de domaine (DNS/RDAP/crt.sh), recherche de noms d’utilisateur et d’e-mails, OSINT GitHub, vérifications de fuites et une vérification de mot de passe HIBP sûre. Open source.',
  },
  'strix-sinkhole': {
    tagline: 'Bloquez les traqueurs, la télémétrie et les publicités dans votre fichier hosts — hors ligne, réversible, en un clic.',
    summary:
      'Strix Sinkhole gère en toute sécurité le fichier hosts de votre système pour rediriger vers 0.0.0.0 les domaines connus de traqueurs, de télémétrie et de publicités : une résolution meurt ainsi sur votre propre machine avant qu’aucune requête ne la quitte — sans serveur comme Pi-hole, sans extension par navigateur, sans démon en arrière-plan et sans appel réseau qui lui soit propre. Tout ce qu’il écrit se trouve à l’intérieur d’un bloc à espace de noms dédié : vos propres entrées hosts et les valeurs par défaut du système sont donc copiées octet par octet et jamais modifiées. Une protection intégrée refuse de rediriger vers le vide les infrastructures critiques (mise à jour de l’OS, révocation de certificats/OCSP, synchronisation de l’heure, localhost), quoi qu’en dise une liste de blocage, de sorte qu’il ne peut jamais casser silencieusement votre machine. Chaque modification est précédée d’une sauvegarde horodatée et réversible en un clic, avec un aperçu des différences en mode simulation indiquant exactement ce qui va changer, et une liste d’autorisation pour les faux positifs.',
    features: [
      'Redirige vers le vide les domaines de traqueurs / télémétrie / publicités à l’échelle du système via le fichier hosts — hors ligne, sans serveur, sans extension',
      'Bloc géré à espace de noms dédié : vos entrées hosts et celles du système sont préservées octet par octet (vérifiées avant chaque écriture)',
      'Protection des domaines critiques : la mise à jour de l’OS, OCSP/CRL, la synchronisation de l’heure et localhost ne peuvent jamais être redirigés vers le vide par une liste',
      'Sauvegarde horodatée avant chaque écriture + restauration en un clic ; aperçu des différences en mode simulation ; liste d’autorisation pour les faux positifs',
      'Liste de départ soignée fournie ; importez la vôtre ou optez pour une mise à jour HTTPS encadrée ; interface graphique sombre (Windows) + CLI `strixsink` (Linux)',
    ],
    definition:
      'Strix Sinkhole est un bloqueur de publicités et de traqueurs gratuit, open source et hors ligne, par fichier hosts, pour Windows et Linux, qui redirige vers le vide les domaines de traqueurs, de télémétrie et de publicités à l’échelle du système — sans serveur comme Pi-hole, sans extension de navigateur et sans transfert DNS.',
    notFor: [
      'Ce n’est pas un serveur DNS de type Pi-hole et il ne transfère aucune de vos requêtes où que ce soit.',
      'Ce n’est pas une extension de navigateur — il modifie un fichier hosts en texte clair, auditable et réversible.',
      'Il bloque au niveau du fichier hosts ; il ne chiffre pas votre DNS en amont.',
    ],
    faq: [
      ['En quoi est-ce différent de Pi-hole ou d’une extension de navigateur ?', 'Aucun serveur distinct ni Raspberry Pi (Pi-hole), et ce n’est pas une extension par navigateur susceptible de lire elle-même votre navigation — Strix Sinkhole modifie un fichier hosts en texte clair que tout utilisateur technique peut auditer et rétablir. Rien ne s’exécute en arrière-plan et rien ne transfère vos requêtes DNS où que ce soit.'],
      ['Une mauvaise liste de blocage peut-elle casser mon ordinateur ?', 'Non. Une protection intégrée refuse de rediriger vers le vide les infrastructures critiques (mise à jour de l’OS, révocation de certificats, synchronisation de l’heure, localhost), quoi qu’en dise une liste, chaque modification est d’abord sauvegardée, et un clic rétablit l’original exact. À noter qu’il bloque au niveau du fichier hosts et ne chiffre pas le DNS en amont.'],
    ],
    creditsNote: 'Strix Sinkhole ne fournit que sa propre petite liste de départ soignée et n’empaquette pas ces listes — il vous permet de les importer, chacune sous sa propre licence. Merci à l’écosystème public des listes de blocage.',
    seoTitle: 'Strix Sinkhole — Bloqueur de publicités et de traqueurs hors ligne par fichier hosts',
    seoDescription: 'Bloquez les traqueurs, la télémétrie et les publicités à l’échelle du système en les redirigeant vers le vide dans votre fichier hosts — entièrement hors ligne, sans serveur, sans extension de navigateur. Sauvegardes horodatées, retour en arrière en un clic, ne casse jamais les domaines critiques. Open source, Windows et Linux.',
  },
  'strix-talon': {
    tagline: 'Observez le trafic sortant de chaque application — et coupez celui des applications en qui vous n’avez pas confiance.',
    summary:
      'Strix Talon est une carte du trafic sortant en direct, processus par processus : quelle application communique avec quelle adresse et quel port distants, actualisée une fois par seconde, les toutes nouvelles destinations étant signalées dès leur apparition. Au-dessus de cette visibilité en lecture seule vient une couche de règles optionnelle — « cette application ne doit jamais accéder à Internet », « bloquer cette adresse », et un coupe-circuit global qui coupe tout le trafic sortant sauf le loopback (en conservant éventuellement votre réseau local). Point essentiel, Talon n’embarque aucun pilote noyau : chaque règle est traduite dans le pare-feu propre au système d’exploitation — le Pare-feu Windows Defender via netsh, Linux via une table nftables privée — et nommée de manière à pouvoir être annulée en un clic, sans jamais toucher à vos règles existantes. Il fait également apparaître les sockets locales en écoute, afin que vous voyiez l’exposition entrante et le bavardage sortant dans une seule vue.',
    features: [
      'Carte du trafic sortant en direct par application : application → IP/port/état distants, actualisée environ toutes les 2 s, nouvelles destinations mises en évidence',
      'Bloquez une application (Windows) ou une adresse (toutes plateformes), ainsi qu’un coupe-circuit global (bloquer tout le trafic sortant sauf le loopback)',
      'Appliqué via le pare-feu de votre système d’exploitation (Pare-feu Windows Defender / nftables) — aucun pilote noyau à approuver ou à signer',
      'Chaque règle possède son propre espace de noms et est annulable en un clic — Talon ne touche jamais à vos règles de pare-feu existantes ; le loopback n’est jamais bloqué',
      'Voit aussi l’exposition entrante (écoute sur 0.0.0.0 vs 127.0.0.1) ; interface graphique PySide6 moderne sous Windows + une CLI `talon` sous Linux',
    ],
    definition:
      'Strix Talon est un pare-feu sortant par application et un moniteur de trafic sortant, gratuit et open source, pour Windows et Linux, qui montre en temps réel quelle application communique avec quelle adresse distante et vous permet de bloquer n’importe quelle application ou adresse — ou tout le trafic sortant — le tout appliqué via le pare-feu propre à votre système d’exploitation, sans pilote noyau.',
    notFor: [
      'Il n’embarque aucun pilote noyau — il pilote le pare-feu intégré de votre système d’exploitation (Pare-feu Windows Defender / nftables).',
      'Il n’affiche pas de fenêtres contextuelles d’autorisation/refus de connexion en direct dans la v1.',
      'Le blocage par application est réservé à Windows ; sous Linux, il bloque par adresse de destination.',
    ],
    faq: [
      ['En quoi est-ce différent de Little Snitch ou de GlassWire ?', 'Talon est open source, sans aucune télémétrie, et fonctionne sous Windows ET Linux (Little Snitch est réservé à macOS et payant ; GlassWire est propriétaire). Point essentiel, il délègue l’application des règles au pare-feu intégré de votre système d’exploitation au lieu d’embarquer un pilote noyau, et chaque règle est une entrée de pare-feu simple et auditable que vous pouvez inspecter et annuler.'],
      ['Peut-il me bloquer l’accès à ma propre machine ?', 'Non. Le loopback est toujours exempté, le coupe-circuit maintient localhost (et éventuellement votre réseau local) accessible, chaque règle possède l’espace de noms StrixTalon-* / réside dans une table nftables privée, et un clic (ou `sudo talon revert`) supprime tout ce que Talon a ajouté sans toucher à vos autres règles de pare-feu. À noter : les fenêtres contextuelles « autoriser/refuser cette nouvelle connexion » en direct sont hors du périmètre de la v1 ; le blocage par application est réservé à Windows (sous Linux, le blocage se fait par adresse).'],
    ],
    creditsNote: 'Strix Talon cartographie les sockets avec psutil, construit son interface avec PySide6 et applique les règles via le pare-feu de votre système d’exploitation — il ne partage aucun code avec Little Snitch / GlassWire / OpenSnitch ; ceux-ci ne sont crédités qu’à titre d’inspiration.',
    seoTitle: 'Strix Talon — Pare-feu sortant par application (Windows et Linux)',
    seoDescription: 'Observez le trafic sortant de chaque application et bloquez ce en quoi vous n’avez pas confiance — un pare-feu sortant par application et un moniteur de connexions open source pour Windows et Linux. Appliqué via le pare-feu de votre système d’exploitation (sans pilote noyau), avec un coupe-circuit global. Sans télémétrie, MIT.',
  },
};

export const contribute = {
  h1: 'Créez un outil. Intégrez-le à Strix.',
  lead:
    'Strix est une suite, pas un jardin clos. Si vous avez créé un outil de confidentialité ou de sécurité open source qui vit selon les mêmes règles — hors ligne par défaut, zéro télémétrie, véritablement auditable —, vous pouvez le proposer. Une fois qu’il a passé la même revue de sécurité et le même travail de durcissement que chaque outil Strix, il est publié sous la bannière Strix : son propre dépôt, une page sur ce site en 13 langues, et des versions avec sommes de contrôle et attestation.',
  badge: 'Ouvert aux outils de la communauté',
  ctaTop: 'Proposer votre outil',
  updatedLabel: 'Dernière mise à jour',
  steps: {
    h2: 'Comment ça marche',
    sub: 'Quatre étapes, de votre dépôt à un outil Strix publié — et vous en conservez la paternité et le droit d’auteur d’un bout à l’autre.',
    list: [
      { n: '01', t: 'Créez votre outil', d: 'Écrivez-le dans n’importe quel langage, pour Windows et/ou Linux, sous une licence compatible MIT. Respectez les critères ci-dessous : hors ligne, sans télémétrie, une seule tâche bien accomplie.' },
      { n: '02', t: 'Ouvrez une proposition', d: 'Ouvrez un ticket de proposition sur GitHub avec un lien vers votre dépôt, ce qu’il fait, les plateformes qu’il vise et la manière dont il touche au réseau — si tant est qu’il le fasse. Aucun compte chez nous n’est nécessaire ; seulement GitHub.' },
      { n: '03', t: 'Revue de sécurité et durcissement', d: 'Nous appliquons le même filtre que chaque outil Strix a franchi : analyse statique, audit des dépendances et de la chaîne d’approvisionnement, revue de code adverse et travail de durcissement. Vous recevez les constats et nous les traitons ensemble.' },
      { n: '04', t: 'Il est publié sous Strix', d: 'Une fois accepté, votre outil obtient son propre dépôt au sein de l’organisation Strix, une page d’accueil localisée sur ce site, et des versions accompagnées de sommes de contrôle SHA-256 et d’une attestation de provenance de build.' },
    ],
  },
  criteria: {
    h2: 'Ce que doit être un outil Strix',
    sub: 'Ces points ne sont pas négociables — ce sont les promesses sur lesquelles repose toute la suite. Si votre outil vit déjà selon ces règles, il se sentira tout de suite chez lui.',
    list: [
      { t: 'Open source', d: 'Code source public sous licence MIT (ou une licence permissive compatible MIT). Rien de caché, rien d’obscurci.' },
      { t: 'Hors ligne par défaut', d: 'Aucun appel réseau qui lui soit propre pour un outil de bureau. Si le réseau est la raison d’être de l’outil (recon/OSINT), il doit être sans clé, encadré par un consentement et clairement délimité.' },
      { t: 'Zéro télémétrie', d: 'Aucun SDK d’analyse, aucune communication cachée, aucun compte. Les données de l’utilisateur ne quittent jamais sa machine.' },
      { t: 'Une tâche, bien accomplie', d: 'Un utilitaire ciblé, avec des réglages par défaut judicieux, un périmètre clair et une déclaration explicite de ce qu’il ne fait délibérément pas.' },
      { t: 'Documenté et testable', d: 'Un README, un fichier SECURITY.md décrivant un modèle de menace, et des tests de non-régression pour tout ce qui est critique pour la sécurité.' },
      { t: 'Moindre privilège', d: 'Aucun appel à un interpréteur de commandes, aucune exécution de code dynamique, des appels de sous-processus en argv uniquement, une résolution des outils par chemin absolu, et une élévation de privilèges seulement là où elle est réellement nécessaire.' },
    ],
  },
  review: {
    h2: 'La revue de sécurité que traverse chaque proposition',
    sub: 'Le même filtre que les outils existants ont franchi avant leur lancement. Rien n’est publié tant qu’il n’est pas franchi.',
    list: [
      { t: 'Analyse statique (SAST)', d: 'semgrep, bandit, PSScriptAnalyzer, les analyseurs Roslyn et les linters adaptés au langage, sur l’ensemble de la base de code.' },
      { t: 'Audit des dépendances et de la chaîne d’approvisionnement', d: 'Versions épinglées, un SBOM, pip-audit / Dependabot, et une vérification que chaque dépendance tierce est justifiée.' },
      { t: 'Revue de code adverse', d: 'Une passe humaine à la recherche d’injections, de traversée de chemin, de SSRF, d’élévation de privilèges et de tout affaiblissement d’un contrôle de sécurité.' },
      { t: 'Durcissement', d: 'Nous comblons les lacunes ensemble : moindre privilège, pas d’interpréteur de commandes, validation des entrées, réglages par défaut qui se ferment en cas d’échec, et défense en profondeur sur les chemins dangereux.' },
      { t: 'Provenance à chaque version', d: 'La CI compile chaque version, écrit un fichier SHA256SUMS en SHA-256 et y joint une attestation de provenance de build SLSA, de sorte que chaque téléchargement est vérifiable.' },
    ],
  },
  keep: {
    h2: 'Ce que vous conservez — et ce que vous obtenez',
    sub: 'Contribuer à Strix ne signifie pas céder votre travail.',
    list: [
      { t: 'Votre paternité et votre droit d’auteur', d: 'Vous restez l’auteur. Le droit d’auteur MIT est le vôtre ; Strix le distribue et le comaintient avec vous.' },
      { t: 'Un véritable public', d: 'Une page d’accueil localisée en 13 langues, un câblage SEO/GEO, et une place dans la grille des outils et les téléchargements.' },
      { t: 'Un pipeline de publication de confiance', d: 'Sommes de contrôle, attestation, une future voie de signature de code (SignPath Foundation) et un processus de divulgation de sécurité — mis en place pour vous.' },
      { t: 'Comaintenance', d: 'Les tickets, les pull requests et les signalements de sécurité suivent le même processus que le reste de la suite. Vous n’êtes pas seul.' },
    ],
  },
  cta: {
    h2: 'Prêt à proposer votre outil ?',
    p: 'Ouvrez un ticket de proposition avec le lien de votre dépôt et une brève description. Nous le prendrons en charge, mènerons la revue et travaillerons avec vous à partir de là. Pas encore prêt ? Lisez d’abord le guide de contribution complet.',
    btnSubmit: 'Proposer votre outil',
    btnGuide: 'Lire le guide de contribution',
    note: 'Proposer un outil ne nécessite qu’un compte GitHub. Il n’y a aucuns frais, aucun accord de contributeur qui vous retire vos droits, et aucune obligation — vous pouvez vous retirer à tout moment avant la publication.',
  },
  faq: [
    ['Est-ce que je perds la propriété de mon outil ?', 'Non. Vous conservez la paternité et le droit d’auteur MIT. Strix le comaintient et le distribue avec vous, et vous pouvez vous retirer avant la publication.'],
    ['Quels langages ou frameworks sont autorisés ?', 'Tous. La suite existante couvre Python, C#, PowerShell et bien d’autres — ce qui compte, c’est la licence, les règles « hors ligne / sans télémétrie » et le passage de la revue de sécurité, pas la pile technique.'],
    ['Et si mon outil a besoin du réseau ?', 'Ce n’est acceptable que si le réseau est sa véritable raison d’être (comme les outils recon/OSINT). Il doit alors être sans clé, encadré par un consentement explicite, clairement délimité et réservé à un usage autorisé — jamais du trafic silencieux ou en arrière-plan.'],
    ['Combien de temps prend la revue ?', 'Cela dépend de la taille de l’outil et du nombre de constats qui apparaissent. Les petits outils déjà durcis avancent vite ; tout ce qui touche à des opérations destructrices ou à une élévation de privilèges fait l’objet d’un examen supplémentaire.'],
    ['Que se passe-t-il s’il échoue ?', 'Vous recevez l’ensemble des constats et pouvez les corriger puis proposer de nouveau. Une revue qui trouve des problèmes, c’est le processus qui fonctionne — c’est exactement ce qui est arrivé aux outils déjà présents dans la suite.'],
  ],
};

export const donate = {
  h1: 'Soutenez Strix — en toute confidentialité.',
  lead:
    'Strix est gratuit, sous licence MIT et n’embarque aucune télémétrie — et il en sera toujours ainsi. Aucune publicité, aucun compte, rien à vendre. Si les outils vous font gagner du temps ou vous protègent davantage, vous pouvez contribuer en Monero (XMR) : confidentiel par conception, exactement comme tout ce qui se trouve ici. Chaque contribution finance l’hébergement, un certificat de signature de code et du temps de développement.',
  badge: 'Des dons respectueux de la vie privée',
  updatedLabel: 'Dernière mise à jour',
  card: {
    label: 'Adresse Monero (XMR)',
    scanHint: 'Scannez le QR avec votre portefeuille, ou copiez l’adresse ci-dessous.',
    copy: 'Copier l’adresse',
    copied: 'Copié ✓',
    openWallet: 'Ouvrir dans le portefeuille',
    qrPending: 'Un QR code apparaîtra ici une fois l’adresse de don configurée.',
    notConfigured: 'L’adresse de don n’est pas encore renseignée — revenez bientôt.',
  },
  why: {
    h2: 'Pourquoi Monero ?',
    sub: 'Parce qu’un projet dédié à la vie privée ne devrait pas vous demander de renoncer à la vôtre pour le soutenir.',
    list: [
      { t: 'Confidentiel par défaut', d: 'Monero masque l’expéditeur, le destinataire et le montant. Aucun registre public ne relie un don à vous — ce qui convient à une suite bâtie sur le principe de ne pas vous pister.' },
      { t: 'Aucun intermédiaire, aucun compte', d: 'Aucun prestataire de paiement, aucune inscription et aucun script tiers sur cette page. L’adresse est tout ce dont vous avez besoin.' },
      { t: 'Rien n’est suivi ici', d: 'Cette page ne charge aucun outil d’analyse et n’effectue aucun appel réseau. Nous ne pouvons pas savoir qui l’a consultée, ni qui a fait un don.' },
    ],
  },
  funds: {
    h2: 'Où va l’argent',
    sub: 'Un petit projet indépendant, sans budget. Chaque contribution est dépensée en toute transparence :',
    list: [
      { t: 'Hébergement et infrastructure', d: 'Garder le site, les versions et les sommes de contrôle en ligne et rapides.' },
      { t: 'Certificat de signature de code', d: 'Un certificat OV/EV pour que les installateurs cessent de déclencher SmartScreen — l’amélioration la plus demandée de toutes.' },
      { t: 'Temps de développement', d: 'De nouveaux outils, des portages Linux, du durcissement de la sécurité, et le maintien de tout cela gratuit et sans télémétrie.' },
    ],
  },
  otherWays: {
    h2: 'D’autres façons d’aider',
    sub: 'Vous ne pouvez pas faire de don ? Ces gestes aident tout autant — et ne coûtent rien.',
    list: [
      { t: 'Mettre une étoile aux dépôts sur GitHub', d: 'La visibilité et la réputation aident vraiment les nouveaux utilisateurs à trouver les outils et à leur faire confiance.' },
      { t: 'Proposer un outil', d: 'Créez quelque chose qui s’intègre à la suite et soumettez-le à la revue de sécurité.' },
      { t: 'Signaler des bogues et des faux positifs', d: 'Ouvrez des tickets, signalez les faux positifs des antivirus à leurs éditeurs, et aidez les autres dans les discussions.' },
    ],
  },
  note: 'Les dons sont des cadeaux volontaires, pas des achats — il n’y a ni remboursement, ni facture, ni reçu fiscal. Ne donnez que ce que vous pouvez aisément vous permettre. Merci de faire vivre un logiciel indépendant qui place la vie privée avant tout.',
};

export const about = {
  h1: 'À propos de Strix',
  lead:
    'Nous sommes un petit groupe indépendant de quatre amis — des étudiants en informatique établis en Allemagne — lassés des outils de « confidentialité » que l’on ne peut pas réellement inspecter. Strix est né de là : une suite d’utilitaires de confidentialité et de sécurité qui fonctionnent entièrement hors ligne, n’embarquent aucune télémétrie et vous appartiennent — à lire, à compiler et à approuver. Sous licence MIT, gratuit à jamais, aucune entreprise derrière et rien à vendre.',
  badge: 'Indépendant · open source',
  updatedLabel: 'Dernière mise à jour',
  values: {
    h2: 'Ce en quoi nous croyons',
    list: [
      { t: 'Vérifier, pas seulement faire confiance', d: 'Chaque outil est un code source public, sous licence MIT, accompagné d’un modèle de menace. Ne nous croyez pas sur parole — lisez-le, compilez-le et vérifiez-le vous-même.' },
      { t: 'Un outil de confidentialité ne doit pas vous espionner', d: 'Zéro télémétrie, aucun compte, aucune analyse d’audience — pas même sur ce site. Vos données ne quittent jamais votre machine.' },
      { t: 'Hors ligne par défaut', d: 'Les outils de bureau n’effectuent aucun appel réseau de leur propre initiative. Débranchez le câble : ils fonctionnent toujours.' },
      { t: 'Gratuit, à jamais', d: 'Aucune formule payante, aucun abonnement, aucune publicité. Si nous acceptons un jour des dons ou des subventions, cela ne changera jamais ces promesses.' },
    ],
  },
  story: {
    h2: 'Pourquoi nous le développons',
    p1: 'Nous voulions que les outils que nous utilisons nous-mêmes soient honnêtes : pas de boîtes noires, pas de « faites-nous confiance », pas de collecte de données en catimini. La plupart de ce dont nous avions besoin, soit n’existait pas en open source, soit n’était pas multiplateforme, soit nous demandait de renoncer à notre vie privée pour la protéger. Alors nous nous sommes mis à créer — un petit outil ciblé et auditable à la fois.',
    p2: 'Strix est un projet parallèle qui nous tient à cœur, entretenu sur notre temps libre. Il restera toujours ouvert et toujours honnête sur ce qu’il est — y compris là où il pèche encore (les installateurs ne sont pas encore signés numériquement, et nous le disons clairement sur la page de vérification).',
  },
  cta: {
    h2: 'Participer',
    p: 'Strix est ouvert à tous. Lisez le code source, signalez un bogue, proposez un outil ou soumettez le vôtre pour une revue de sécurité. Si Strix vous est utile, une étoile sur GitHub aide vraiment les autres à le découvrir.',
    btnGithub: 'Voir sur GitHub',
    btnContribute: 'Proposer un outil',
  },
};

export const alternatives = {
  h1: 'Alternatives open source',
  lead:
    'Vous utilisez déjà un outil de confidentialité propriétaire ou payant ? Il y a de fortes chances que Strix propose un remplacement open source, hors ligne et sans aucune télémétrie — gratuit à jamais, sous licence MIT et que vous pouvez auditer. Voici les correspondances.',
  badge: 'Des remplacements gratuits et ouverts',
  updatedLabel: 'Dernière mise à jour',
  altToLabel: 'Alternative open source à',
  viewTool: 'Voir l’outil →',
  ctaLead: 'Vous ne trouvez pas de correspondance ?',
  ctaText: 'Parcourez la suite d’outils complète, ou proposez un outil que nous devrions créer.',
  ctaAll: 'Tous les outils',
  ctaSuggest: 'Proposer un outil',
};

export default { ui, categories, security, apps, contribute, donate, about, alternatives };
