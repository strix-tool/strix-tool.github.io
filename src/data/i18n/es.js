// Spanish (es, neutral international) translation. Mirrors the structure of en.js / site.js.
//   - `ui`        : all site-chrome / marketing strings (re-exported as `t`).
//   - `categories`: display labels for the app-category chips (canonical keys stay English).
//   - `security`  : the /security (Verify) page prose.
//   - `apps`      : per-locale overrides for each app's content.

export const ui = {
  metaDescription:
    'Herramientas de privacidad y seguridad de código abierto y sin conexión para Windows y Linux. Sin telemetría, sin cuentas, con licencia MIT. Eliminación de metadatos, borrado seguro, bloqueo de anuncios y rastreadores, un cortafuegos de salida por aplicación, supervisión del sistema y mucho más.',
  homeSeoTitle: 'Strix Advanced Tools — Herramientas de privacidad y seguridad de código abierto',
  homeSeoDescription:
    'Nueve herramientas de privacidad y seguridad de código abierto y sin conexión para Windows y Linux: eliminador de metadatos y archivador AES-256, borrador seguro de discos, bloqueador de anuncios y rastreadores por archivo hosts, cortafuegos de salida por aplicación, monitor del sistema, información de hardware, centinela de seguridad, además de herramientas de reconocimiento y OSINT. Sin telemetría. Con licencia MIT. Gratis para siempre.',
  downloadsSeoTitle: 'Descargar Strix Advanced Tools — Windows y Linux',
  downloadsSeoDescription:
    'Descarga la suite Strix Advanced Tools para Windows y Linux. Instaladores directos y paquetes .deb desde GitHub Releases, cada uno con una suma de comprobación SHA-256. Gratis y de código abierto.',
  keywordsGlobal:
    'herramientas de seguridad de código abierto, herramientas de privacidad, windows, linux, eliminador de metadatos, eliminador exif, borrado seguro de discos, nist 800-88, bloqueador de anuncios por archivo hosts, bloqueador de rastreadores, bloqueador de telemetría, dns sinkhole, cortafuegos por aplicación, cortafuegos de salida, monitor de tráfico saliente, interruptor de corte, alternativa a little snitch, widget de monitor del sistema, información de hardware, monitor de seguridad, osint, reconocimiento, sin conexión, sin telemetría, licencia MIT',
  tagline: 'Herramientas de privacidad y seguridad de código abierto para Windows y Linux.',
  heroBadge: 'Código abierto · MIT · Windows y Linux',
  heroTitle: 'No confíes en las herramientas de seguridad. Léelas.',
  heroSubtitle:
    'Strix Advanced Tools es una suite de código abierto de utilidades de privacidad y seguridad para Windows y Linux. Cada una funciona totalmente sin conexión, no incluye telemetría alguna y es tuya para auditarla, compilarla y confiar en ella: gratis para siempre, con licencia MIT.',
  browse: 'Explorar las herramientas',
  getStarted: 'Descargar',
  viewOnGithub: 'Dar una estrella en GitHub',
  nav: { apps: 'Herramientas', downloads: 'Descargas', github: 'GitHub', security: 'Seguridad', contribute: 'Contribuir', donate: 'Donar', about: 'Acerca de', alternatives: 'Alternativas' },
  allApps: 'Las herramientas',
  allAppsLead: 'Nueve utilidades específicas. Cada una hace una sola cosa y la hace bien, sin conexión.',
  features: 'Qué hace',
  screenshots: 'Un vistazo al interior',
  faqTitle: 'Preguntas frecuentes',
  download: 'Descargar',
  downloadCta: 'Obtener',
  otherDownloads: 'Todas las plataformas y sumas de comprobación',
  source: 'Código fuente',
  docs: 'Documentación',
  readme: 'Leer la documentación',
  install: 'Instalación',
  installWindows: 'Windows',
  installLinux: 'Linux (Ubuntu / Debian)',
  security: 'Seguridad',
  securityNote:
    'Sin conexión de forma predeterminada, sin intérprete de comandos, sin código dinámico, mínimo privilegio — y cada línea tiene licencia MIT y está abierta a auditoría.',
  category: 'Categoría',
  backHome: 'Todas las herramientas',
  verified: 'Se publican sumas de comprobación (SHA-256) con cada versión para que puedas verificar tu descarga.',
  unsigned:
    'Los binarios aún no están firmados digitalmente, por lo que Windows SmartScreen puede advertir en el primer inicio — elige «Más información → Ejecutar de todas formas», o verifica primero la suma de comprobación. Nunca desactives tu antivirus.',
  whyTitle: 'Basado en cuatro promesas',
  whyLead: 'No es un eslogan: cada promesa es algo que puedes verificar en el código fuente antes de confiar en ella.',
  why: [
    { k: 'offline', title: 'Sin conexión por diseño', text: 'Sin llamadas de red, sin telemetría, sin cuentas. Tus datos nunca salen de la máquina en la que residen.', proof: 'haz grep en el código fuente: cero sockets salientes en las herramientas de escritorio' },
    { k: 'hardened', title: 'Reforzado y probado', text: 'Sin llamadas al intérprete de comandos, sin código dinámico, mínimo privilegio — y las rutas críticas para la seguridad están cubiertas por auténticas pruebas de regresión.', proof: 'por ejemplo, el borrador de discos rechaza el disco del sistema en 18 pruebas unitarias' },
    { k: 'cross', title: 'Windows y Linux', text: 'Auténticos asistentes de instalación en Windows y paquetes nativos en Linux para las herramientas de escritorio; las herramientas de reconocimiento/OSINT de Kali se distribuyen como scripts de Linux.', proof: 'versiones con sumas de comprobación y atestación de procedencia de compilación de GitHub' },
    { k: 'open', title: 'Genuinamente abierto', text: 'Con licencia MIT, sin condiciones ocultas. Léelo, compílalo tú mismo, audítalo o envía una pull request.', proof: 'cada repositorio es público en GitHub — nada oculto' },
  ],
  downloadsTitle: 'Descargas',
  downloadsLead:
    'Consigue la última versión para tu plataforma. Cada descarga es un archivo directo de GitHub Releases, acompañado de una suma de comprobación SHA-256.',
  homeFaq: [
    ['¿Son las Strix Advanced Tools realmente gratuitas y de código abierto?', 'Sí. Cada herramienta tiene licencia MIT y es gratis para siempre: puedes leer el código fuente, compilarlo tú mismo y contribuir. Sin planes de pago, sin cuentas, sin suscripciones ni anuncios, ni ahora ni nunca.'],
    ['¿Quién desarrolla Strix y por qué debería confiar en ello?', 'Strix Advanced Tools es un proyecto de código abierto independiente, no una empresa que vende tus datos. No tienes que confiar a ciegas: cada herramienta es un repositorio público de GitHub bajo la licencia MIT, de modo que tú (o cualquier persona) puedes leer cada línea, compilarlo tú mismo a partir del código fuente y confirmar que hace exactamente lo que anuncia. La confianza se verifica, no se pide. Cada repositorio incluye además un archivo SECURITY.md con el modelo de amenazas y un canal de divulgación privado.'],
    ['¿Qué herramienta de Strix es la alternativa de código abierto a la aplicación que ya uso?', 'Talon es un cortafuegos de salida por aplicación: una alternativa de código abierto a Little Snitch y GlassWire. Sinkhole es un bloqueador de anuncios y rastreadores por archivo hosts: una alternativa local, en una sola máquina, a Pi-hole. MetaVault elimina metadatos y crea archivos AES-256: una alternativa a las interfaces gráficas de ExifTool, a MAT2 y a los eliminadores EXIF en línea. Disk Cleaner borra discos de forma segura: una alternativa a DBAN y al borrado de CCleaner. Pulse es un widget de monitor del sistema (alternativa a los gadgets de Rainmeter/HWiNFO), Inspector informa sobre el hardware (alternativa a CPU-Z/Speccy) y Sentinel es un centinela de seguridad. Cada una funciona sin conexión y sin telemetría alguna.'],
    ['¿Envían estas herramientas mis datos a algún sitio?', 'No. Cada herramienta de escritorio funciona por completo en tu máquina, no realiza llamadas de red por sí misma y no incluye telemetría alguna: tus datos nunca salen de tu dispositivo. Las únicas herramientas que tocan la red son aquellas cuya función es precisamente esa (las herramientas de reconocimiento/OSINT), e incluso esas solo usan API públicas sin clave, sujetas a consentimiento y limitadas por tiempos de espera.'],
    ['¿Necesito conocimientos técnicos para usarlas?', 'No para las aplicaciones de escritorio: MetaVault, Pulse, Inspector, Sentinel, Sinkhole y Talon tienen todas una interfaz gráfica clara, con valores predeterminados sensatos y confirmaciones antes de cualquier acción destructiva. Las herramientas de reconocimiento (Vantage, Archer) funcionan en línea de comandos, para quienes se sienten cómodos en una terminal.'],
    ['¿Qué herramienta necesito?', 'Usa la búsqueda y los filtros situados encima de la cuadrícula de herramientas para acotar por plataforma (Windows / Linux) y categoría (Privacidad, Seguridad, Sistema, OSINT…), o pulsa ⌘K / Ctrl-K en cualquier lugar para ir directamente a una herramienta. Cada página de herramienta explica exactamente lo que hace — y lo que deliberadamente no hace.'],
    ['¿Cómo verifico que una descarga es auténtica?', 'Cada versión de GitHub publica una suma de comprobación SHA-256 (SHA256SUMS) junto a los archivos. Descárgala, compara el hash de tu archivo y sabrás que el binario es exactamente lo que se publicó, sin manipulación alguna. Eso importa más que cualquier firma de código.'],
    ['¿Qué plataformas son compatibles?', 'Windows y Linux (Ubuntu / Debian). Las herramientas de escritorio incluyen un instalador de Windows y un paquete de Linux; las herramientas de reconocimiento/OSINT Vantage y Archer son exclusivas de Linux/Kali.'],
    ['¿Existe una versión para macOS o para móviles?', 'Todavía no oficialmente: los destinos compatibles son Windows y Linux (Ubuntu / Debian), y no hay versiones para iOS ni Android. Como las herramientas basadas en Python (MetaVault, Pulse, Sentinel, Sinkhole, Talon) son de código abierto y multiplataforma, es muy posible que funcionen en macOS a partir del código fuente, pero eso no está ni soportado ni probado. Una versión nativa para macOS está en la hoja de ruta, no es un producto ya disponible.'],
    ['¿Por qué Windows muestra una advertencia de «editor desconocido»?', 'Los instaladores aún no están firmados digitalmente, por lo que SmartScreen muestra un aviso en el primer inicio. Elige «Más información → Ejecutar de todas formas», o verifica la suma de comprobación SHA-256 publicada con cada versión. Nunca desactives tu antivirus para ejecutarlos: no deberías tener que hacerlo.'],
    ['¿Es legal usar las herramientas de reconocimiento / OSINT?', 'Únicamente contra sistemas que poseas o para cuya prueba estés explícitamente autorizado: un laboratorio de prácticas deliberadamente vulnerable, un reto CTF o un encargo con permiso por escrito. Tanto Vantage como Archer muestran una confirmación de consentimiento única y son estrictamente pasivas / de uso autorizado exclusivamente. Escanear o perfilar sin autorización puede ser ilegal.'],
    ['¿Puedo informar de un error o contribuir?', 'Por supuesto: cada herramienta es un repositorio público independiente en GitHub, con un archivo SECURITY.md, plantillas de incidencias y una guía de contribución. Los problemas de seguridad disponen de un canal de divulgación privado; las nuevas funciones y las correcciones son bienvenidas en forma de pull requests.'],
  ],
  faqSearchPlaceholder: 'Buscar en las preguntas…',
  toolsFilterAll: 'Todas',
  toolsSearchPlaceholder: 'Buscar herramientas por nombre, función o palabra clave…',
  toolsNoMatch: 'Ninguna herramienta coincide — prueba a borrar los filtros.',
  footerTagline: 'Herramientas de privacidad y seguridad de código abierto.',
  footerNote: 'Hecho para quienes se preocupan por su privacidad.',
  footerCols: { product: 'Herramientas', resources: 'Recursos', about: 'Proyecto' },
  langLabel: 'Idioma',
  stats: { tools: 'herramientas', platforms: 'plataformas', telemetry: 'telemetría', license: 'licencia' },
  faqNoMatch: 'Ninguna pregunta coincide — prueba con otras palabras.',
  // Downloads page section headings
  dl: { allTools: 'Todas las herramientas — Windows y Linux', verify: 'Verifica tu descarga' },
  // App-page fixed labels ({name} is replaced with the tool name)
  app: {
    price: 'Precio',
    priceVal: 'Gratis — código abierto (MIT)',
    platforms: 'Plataformas',
    category: 'Categoría',
    builtWith: 'Desarrollado con',
    altTo: 'Alternativa de código abierto a',
    telemetry: 'Telemetría',
    telemetryVal: 'Ninguna — totalmente sin conexión',
    updated: 'Actualizado',
    notDo: 'Lo que {name} deliberadamente no hace',
    poweredBy: 'Impulsado por el código abierto',
    fullAck: 'Agradecimientos completos y enlaces →',
    related: 'Herramientas de Strix relacionadas',
    winInstall: 'Descarga el asistente de instalación y ejecútalo — se crean por ti accesos directos en el menú Inicio y un desinstalador.',
    dangerFallback: 'Esta herramienta destruye datos de forma permanente y no se puede deshacer. Lee la guía de seguridad antes de usarla.',
    copy: 'Copiar',
    copied: 'Copiado ✓',
    glance: 'de un vistazo',
  },
};

export const categories = {
  Privacy: 'Privacidad',
  System: 'Sistema',
  Security: 'Seguridad',
  Diagnostics: 'Diagnóstico',
  Recon: 'Reconocimiento',
  OSINT: 'OSINT',
};

export const security = {
  h1: 'Verifícanos, no te limites a confiar en nosotros.',
  lead:
    'Las Strix Advanced Tools son gratuitas, de código abierto (MIT) y están diseñadas para funcionar totalmente sin conexión. Nuestros binarios de Windows aún no están firmados digitalmente con un certificado de pago: somos un proyecto pequeño, independiente y sin presupuesto, y preferimos decirlo con claridad antes que ocultarlo. Como cada herramienta es de código abierto, no tienes que creernos en nada. Así es como puedes comprobarlo tú mismo.',
  boldNotSigned: 'aún no están firmados digitalmente con un certificado de pago',
  updatedLabel: 'Última actualización',
  why: [
    { t: 'El código fuente es público', d: 'Cada herramienta es un repositorio público de GitHub bajo la licencia MIT. Lee cada línea, recompílalo tú mismo y confirma que hace exactamente lo que anuncia.' },
    { t: 'Los binarios están atestados', d: 'Cada versión lleva una atestación de procedencia de compilación de GitHub (SLSA Build L2): prueba criptográfica de que el archivo se compiló a partir de este código fuente, en los servidores de GitHub, sin modificaciones desde entonces.' },
    { t: 'Nada se comunica en secreto', d: 'Las herramientas de escritorio no realizan ninguna llamada de red. Desconecta el cable de red y siguen funcionando; observa tu tráfico saliente y no verás ninguno.' },
  ],
  verify: {
    h2: 'Verifica tu descarga',
    sub: 'La verificación es opcional: si descargaste desde una versión de GitHub, ya estás bien. Pero si quieres asegurarte, cada versión incluye un archivo SHA256SUMS, y así es como confrontarlo. Sustituye el nombre de archivo de ejemplo por la herramienta que descargaste.',
    anyOs: 'Cualquier sistema operativo',
    winStt: 'Comprobar la suma de comprobación',
    winIntro: 'En la carpeta donde guardaste la descarga, ejecuta PowerShell:',
    winExp: 'Compara el hash mostrado con la línea correspondiente de SHA256SUMS. Si son idénticos, el archivo es, byte a byte, lo que publicamos:',
    nixStt: 'Comprobar la suma de comprobación',
    nixIntro: 'Coloca la descarga y su archivo SHA256SUMS en la misma carpeta y, a continuación:',
    nixExp: 'Una respuesta de una sola palabra por archivo — quieres obtener OK:',
    provStt: 'Verifica la procedencia de la compilación',
    provIntro: 'Más fuerte que una suma de comprobación: demuestra que el binario se compiló a partir de nuestro código fuente público, en nuestra CI pública. Requiere GitHub CLI 2.49+:',
    provExp: 'Una línea verde de éxito que nombra el repositorio de código fuente exacto que produjo el archivo:',
    note: 'Las sumas de comprobación se publican en cada GitHub Release y se replican mediante HTTPS — ejemplo SHA256SUMS. La atestación de procedencia se almacena en GitHub, no en nuestro poder: por eso ni nosotros ni un mirror de descarga comprometido podemos falsificarla.',
  },
  data: {
    h2: 'Qué datos salen de tu máquina',
    sub: 'La versión corta: en las herramientas de escritorio, ninguno. Aquí está el detalle completo — y cada fila es algo que puedes confirmar con una captura de paquetes.',
    thCategory: 'Categoría',
    thWhat: 'De qué se trata',
    thWhere: 'Adónde va',
    rows: [
      ['Los archivos que procesas', 'Metadatos, contenido de discos, archivos comprimidos — leídos y escritos in situ, en tu máquina.', 'Nunca se suben. No se envía nada a ningún sitio.'],
      ['Los datos de tu sistema', 'Nombre de host, nombre de usuario, números de serie, direcciones IP, hardware — mostrados únicamente dentro de la aplicación.', 'Se muestran localmente; nunca se transmiten.'],
      ['Ajustes e informes', 'Preferencias, registros, informes HTML/PDF.', 'Se guardan en el disco (%LOCALAPPDATA% / ~/.config); nunca se sincronizan con un servidor.'],
      ['Estadísticas de uso y de fallos', 'Ninguna. No hay ningún SDK de analítica, ni telemetría, ni comunicación oculta.', 'Nunca se recopila nada.'],
      ['Tráfico de red saliente (herramientas de escritorio)', 'MetaVault, Pulse, Inspector, Sentinel, Sinkhole, Talon.', 'Cero sockets salientes. Desconecta la red — siguen funcionando.'],
      ['Tráfico de red saliente (herramientas de reconocimiento)', 'Vantage y Archer — cuya función es precisamente la red.', 'Únicamente API públicas sin clave que activas explícitamente, tras una confirmación de consentimiento, limitadas por tiempos de espera.'],
    ],
  },
  av: {
    h2: 'Advertencias del antivirus y de SmartScreen',
    intro1: 'Como nuestras aplicaciones de Windows no están firmadas y están empaquetadas con PyInstaller, Windows SmartScreen puede indicar',
    intro2: 'y unos pocos de los aproximadamente 70 motores antivirus pueden marcar el instalador.',
    intro3: 'Esto es de esperar en software nuevo, sin firmar y de código abierto: se trata de una heurística genérica relacionada con la forma de empaquetar la aplicación, no de la detección de un malware real.',
    unknownPublisher: 'editor desconocido',
    notCommon: 'poco descargado,',
    list: [
      { b: 'Por qué ocurre:', r: 'el bootloader de PyInstaller es un formato de empaquetado habitual (el malware también lo usa), un archivo recién creado no tiene reputación de descargas y los binarios sin firmar reciben una penalización de «sospechoso hasta que se demuestre lo contrario».' },
      { b: 'La verdadera prueba', r: 'son la suma de comprobación y la atestación de procedencia anteriores, además del código fuente que puedes leer — y no la heurística de ningún fabricante.' },
      { b: 'Lo que hacemos:', r: 'informamos de los falsos positivos a los fabricantes a medida que aparecen y estamos solicitando el programa gratuito de firma de código de la SignPath Foundation destinado a proyectos de código abierto, que iremos implantando a medida que se consolide la reputación.' },
      { b: 'Nunca desactives tu antivirus, por favor.', r: 'Si tienes dudas, verifica la suma de comprobación o ejecuta la herramienta a partir del código fuente.' },
    ],
    tiny: 'Enlazamos un análisis en vivo de VirusTotal para cada compilación en cuanto sale una versión, para que puedas ver el resultado actual por ti mismo. Nunca publicaremos una captura de pantalla de un «análisis limpio» ni afirmaremos «cero detecciones»: un enlace en vivo en el que puedes hacer clic vale más que una captura que queda obsoleta en la siguiente compilación.',
  },
  read: {
    h2: 'Lee el código fuente',
    sub: 'La garantía más sólida de todas. Haz grep en cualquier repositorio buscando socket, urllib, requests o http y comprueba por ti mismo qué toca — y qué no toca — la red.',
    view: 'Ver el código fuente ↗',
  },
  threat: {
    h2: 'Modelo de amenazas',
    items: [
      ['Contra qué protege Strix', 'Fugas de datos a través de los metadatos de archivos, datos recuperables en discos desechados, dominios de rastreadores/telemetría/anuncios, conexiones salientes silenciosas, programas de inicio automático y dispositivos desconocidos, y herramientas de código cerrado que no puedes inspeccionar.'],
      ['Lo que Strix NO es', 'No es un antivirus/EDR, ni un sandbox, ni una defensa contra un sistema operativo comprometido o un malware que ya se ejecuta con permisos de administrador. Las herramientas de escritorio muestran información y actúan cuando tú lo ordenas; no combaten amenazas activas en tiempo real.'],
      ['Límite de confianza', 'La procedencia demuestra que una descarga proviene, sin modificaciones, de este código fuente público a través de la CI de GitHub. No demuestra que el código fuente sea inofensivo — para eso está el código MIT abierto, que puedes leer y recompilar.'],
    ],
  },
  report: {
    h2: '¿Encontraste una vulnerabilidad?',
    p: 'Repórtala en privado: por favor, no abras una incidencia pública por un fallo de seguridad. Cada repositorio dispone de un archivo SECURITY.md con el modelo de amenazas y un canal de divulgación coordinada, y está habilitado el informe privado de vulnerabilidades de GitHub. No tomaremos represalias y te daremos crédito si así lo deseas.',
    btnPolicy: 'Política de seguridad',
    btnRepos: 'Todos los repositorios',
  },
};

export const apps = {
  'strix-metavault': {
    tagline: 'Borra los metadatos ocultos y luego bloquea tus archivos con cifrado AES-256.',
    summary:
      'Cada foto, documento y PDF que compartes lleva rastros ocultos: coordenadas GPS, tu nombre, el dispositivo que usaste, el historial de ediciones. Strix MetaVault elimina todo eso y luego, de forma opcional, sella los archivos limpios dentro de un archivo 7-Zip cifrado con AES-256, con nombres de archivo ocultos y una contraseña aleatoria de un solo uso. Totalmente sin conexión, sin cuentas, sin telemetría.',
    features: [
      'Elimina los datos EXIF, GPS, IPTC y XMP de las imágenes; autor/empresa/historial de los archivos de Office y PDF',
      'Archivo AES-256 opcional, con nombres de archivo cifrados y un nombre de salida aleatorizado',
      'Genera una contraseña robusta de un solo uso que nunca se escribe en el disco ni en los registros',
      'Rechaza las contraseñas personalizadas débiles; protegido contra ataques de enlaces simbólicos y bombas zip',
      'Tus archivos originales nunca se modifican — todo se ejecuta sobre copias',
    ],
    definition:
      'Strix MetaVault es un eliminador de metadatos y cifrador de archivos gratuito y de código abierto para Windows y Linux, que elimina los metadatos ocultos EXIF/GPS y de documentos, y luego bloquea de forma opcional tus archivos dentro de un archivo cifrado con AES-256 — totalmente sin conexión, sin cuentas ni telemetría.',
    notFor: [
      'Nunca sube tus archivos — toda la limpieza se realiza localmente, a diferencia de los eliminadores de metadatos en línea.',
      'No implementa su propia criptografía: el cifrado se delega en el contrastado 7-Zip AES-256.',
      'No es un servicio en la nube y no requiere ninguna cuenta.',
    ],
    faq: [
      ['¿Funciona sin 7-Zip ni ExifTool?', 'Los archivos JPEG y PNG se limpian con el motor integrado. Para todos los demás formatos y para el archivado cifrado, instala 7-Zip y ExifTool (o colócalos junto a la aplicación).'],
      ['¿Puedo recuperar una contraseña de archivo perdida?', 'No. La contraseña se muestra una sola vez y nunca se almacena. Guárdala de inmediato en un gestor de contraseñas — sin ella, el cifrado es realmente indescifrable.'],
    ],
    seoTitle: 'Strix MetaVault — Eliminador de metadatos y cifrador de archivos',
    seoDescription: 'Herramienta gratuita y de código abierto para eliminar los metadatos EXIF/GPS y de documentos, y luego bloquear tus archivos en un archivo cifrado con AES-256. Sin conexión, sin telemetría. Windows y Linux.',
  },
  'strix-pulse-monitor': {
    tagline: 'Un monitor de un vistazo, siempre en primer plano, para toda tu máquina.',
    summary:
      'Un elegante widget de escritorio sin marco que flota sobre tu trabajo y muestra en vivo el uso de CPU, GPU, RAM y disco, junto con la velocidad de descarga y de subida de la red en tiempo real — actualizado cada segundo. Arrástralo a donde quieras, fíjalo en su sitio o guárdalo en el área de notificación. Sin acceso a la red propio, sin telemetría.',
    features: [
      'Carga de CPU, GPU, RAM y almacenamiento en vivo, además del rendimiento de la red, una vez por segundo',
      'Lecturas de GPU desde NVIDIA, los contadores de rendimiento de Windows o el sysfs de AMD en Linux',
      'Widget «cristal» sin marco que puedes arrastrar, fijar u ocultar en el área de notificación',
      'Recuerda su posición; los ajustes se validan y se escriben de forma atómica',
    ],
    definition:
      'Strix Pulse Monitor es un widget de escritorio para monitorizar el sistema, gratuito y de código abierto, para Windows y Linux, que muestra en vivo el uso de CPU, GPU, RAM, disco y red en un panel «cristal» siempre en primer plano — sin conexión, sin telemetría.',
    notFor: [
      'No se comunica con ningún servidor y no recopila ningún dato de uso.',
      'Es un monitor en vivo, consultable de un vistazo, y no una suite de pruebas de rendimiento (consulta Strix Inspector para las pruebas comparativas).',
      'No requiere permisos de administrador para funcionar.',
    ],
    faq: [
      ['¿Por qué la fila de la GPU muestra N/A?', 'Las GPU Intel en Linux requieren herramientas con privilegios, por lo que el widget muestra N/A en lugar de pedir permisos de root. NVIDIA y AMD son compatibles de forma nativa.'],
      ['¿Puede iniciarse con mi sesión?', 'Sí — en Windows, añade un acceso directo a la carpeta de Inicio; en Linux, ejecuta el instalador con --autostart.'],
    ],
    seoTitle: 'Strix Pulse Monitor — Widget de CPU/GPU/RAM y red',
    seoDescription: 'Un elegante widget de escritorio, siempre en primer plano, que muestra en vivo el uso de CPU, GPU, RAM, disco y red. De código abierto, sin conexión, sin telemetría. Windows y Linux.',
  },
  'strix-sentinel': {
    tagline: 'Descubre qué se ejecuta, observa y escucha en tu máquina.',
    summary:
      'Un centinela local y sin conexión que responde a cinco preguntas: qué se inicia con tu máquina, qué procesos nuevos aparecen, qué aplicación está usando tu micrófono o tu cámara, quién ha iniciado sesión y qué dispositivos desconocidos hay en tu red. Una interfaz gráfica oscura y sobria en Windows; una CLI programable en Linux. Nada sale nunca de tu ordenador.',
    features: [
      'Auditoría de inicio que señala cualquier elemento nuevo desde tu configuración de referencia aprobada',
      'Vigilancia en tiempo real de los procesos recién iniciados, con las rutas completas de los ejecutables',
      'Detecta qué aplicación está usando en ese momento tu micrófono o tu cámara',
      'Auditoría de inicios de sesión y un vigilante de la red local que señala las direcciones MAC de dispositivos desconocidos',
    ],
    definition:
      'Strix Sentinel es un monitor de seguridad gratuito, de código abierto y sin conexión para Windows y Linux, que audita qué se inicia con tu máquina, vigila los procesos nuevos, detecta el uso del micrófono/la cámara, audita los inicios de sesión y señala los dispositivos desconocidos en tu red — sin ningún tráfico de red saliente propio.',
    notFor: [
      'No es un antivirus ni un EDR — muestra los cambios para que tú los juzgues; nunca pone en cuarentena ni bloquea.',
      'Nunca envía ningún dato fuera de tu máquina.',
      'La edición de Linux es una CLI programable por diseño (sin interfaz gráfica).',
    ],
    faq: [
      ['¿La auditoría de inicios de sesión requiere permisos de administrador?', 'Sí — la lectura del registro de seguridad requiere permisos de administrador en Windows y de root en Linux. Todas las demás comprobaciones se ejecutan sin privilegios.'],
      ['¿Existe una interfaz gráfica para Linux?', 'La edición de Linux es una herramienta de línea de comandos sobria por diseño — funciona sin pantalla y a través de SSH, lo que resulta idóneo para un monitor de seguridad. Comparte el mismo núcleo de detección probado que la interfaz gráfica de Windows.'],
    ],
    seoTitle: 'Strix Sentinel — Monitor de seguridad y privacidad sin conexión',
    seoDescription: 'Descubre qué se inicia y se ejecuta, qué aplicación usa tu micrófono/cámara, audita los inicios de sesión y detecta dispositivos desconocidos en tu red. De código abierto, sin conexión. Interfaz gráfica en Windows y CLI en Linux.',
  },
  'strix-inspector': {
    tagline: 'Una imagen completa y de solo lectura de tu hardware — en segundos.',
    summary:
      'Un inventario preciso y de solo lectura de tu máquina — sistema operativo, CPU, memoria hasta cada módulo DIMM, GPU, discos, placa base, BIOS y batería — presentado como texto de consola, JSON legible por máquina o un pulido panel HTML autónomo. También ejecuta rápidas pruebas de rendimiento de CPU, memoria y disco. Sin red, sin necesidad de elevación de privilegios.',
    features: [
      'Inventario completo: OS, CPU, memoria por módulo DIMM, GPU, discos, placa, BIOS, batería',
      'Tres formatos de salida: consola, JSON y un panel HTML claro/oscuro',
      'Microbenchmarks integrados de CPU, memoria y disco',
      'Funciona en Linux mediante .NET 8, reutilizando el mismo analizador SMBIOS reforzado que en Windows',
    ],
    definition:
      'Strix Inspector es una herramienta de información de hardware y de pruebas de rendimiento, gratuita, de código abierto y de solo lectura, para Windows y Linux, que inventaría tu CPU, tu RAM por módulo DIMM, tu GPU, tus discos, tu placa base y tu BIOS como texto de consola, JSON o un panel HTML autónomo — sin ningún acceso a la red.',
    notFor: [
      'Es estrictamente de solo lectura — nunca cambia ajustes, ni hace overclock, ni actualiza ningún firmware.',
      'No requiere instalar ningún runtime en Windows ni elevación de privilegios para ejecutarse.',
      'No envía ningún dato a ningún sitio.',
    ],
    faq: [
      ['¿Necesito instalar algún runtime?', 'En Windows utiliza el .NET Framework integrado — no hay nada que instalar. La versión de Linux se distribuye como un binario autónomo.'],
      ['¿Por qué algunos campos requieren permisos de administrador?', 'Los tamaños de disco, los detalles de los módulos DIMM y las cadenas de la BIOS provienen de interfaces con privilegios. Sin elevación, la herramienta funciona igualmente y simplemente indica lo que omitió.'],
    ],
    seoTitle: 'Strix Inspector — Herramienta de información de hardware y benchmark',
    seoDescription: 'Inventario de hardware de solo lectura (CPU, RAM por módulo DIMM, GPU, discos, BIOS) además de pruebas de rendimiento — como texto de consola, JSON o un panel HTML. De código abierto. Windows y Linux.',
  },
  'strix-disk-cleaner': {
    tagline: 'Borra un disco para siempre — con una protección contra borrar el equivocado.',
    summary:
      'Borra de forma permanente y verificable un disco entero conforme a las normas NIST SP 800-88 y DoD 5220.22-M — recurriendo al «sanitize» por hardware cuando es posible, o a la sobrescritura de varias pasadas. Una protección de seguridad multicapa hace imposible seleccionar el disco del sistema, y cada acción destructiva exige una confirmación escrita. Windows incluye una interfaz gráfica completa con un certificado de destrucción imprimible; Linux incluye un borrador de línea de comandos cubierto por pruebas unitarias.',
    features: [
      'Una protección multicapa: tu disco del sistema y cualquier disco montado nunca pueden seleccionarse',
      '«Sanitize» por hardware (blkdiscard, nvme, hdparm) o sobrescritura de varias pasadas',
      'Confirmación escribiendo la palabra ERASE, con una nueva comprobación justo antes de escribir',
      'Lógica de seguridad cubierta por pruebas unitarias; un certificado de destrucción imprimible en Windows',
    ],
    definition:
      'Strix Disk Cleaner es un borrador seguro de discos, gratuito y de código abierto, para Windows y Linux, que borra de forma permanente un disco conforme a las normas NIST SP 800-88 y DoD 5220.22-M, con una protección de seguridad multicapa que hace imposible borrar el disco del sistema.',
    notFor: [
      'No puede seleccionar ni borrar tu disco del sistema/de arranque ni ningún volumen montado — por diseño.',
      'Borra discos enteros, no archivos individuales.',
      'No realiza llamadas de red y no requiere ninguna cuenta.',
    ],
    faq: [
      ['¿Puedo borrar por accidente mi disco de Windows/Linux?', 'No. El disco del sistema y el de arranque se detectan y se ocultan; en Linux, cualquier disco montado se rechaza. Además, tienes que escribir la ruta del dispositivo y la palabra ERASE.'],
      ['¿Basta con la sobrescritura para un SSD?', 'No de forma fiable — el nivelado de desgaste de la memoria flash puede dejar datos atrás. La herramienta detecta los SSD y te orienta hacia un «sanitize» por hardware (blkdiscard / nvme), que es exhaustivo.'],
    ],
    seoTitle: 'Strix Disk Cleaner — Borrador seguro de discos (NIST/DoD)',
    seoDescription: 'Borra de forma permanente un disco conforme a las normas NIST SP 800-88 / DoD 5220.22-M, con una protección multicapa que nunca puede borrar el disco del sistema. De código abierto. Interfaz gráfica en Windows y CLI en Linux.',
  },
  'strix-vantage': {
    tagline: 'Un solo comando ejecuta un pipeline de reconocimiento completo y seguro para WAF en tu laboratorio.',
    dangerText: 'Vantage emite tráfico de escaneo activo (escaneos de puertos, fuzzing, sondas de vulnerabilidades). Úsalo ÚNICAMENTE contra sistemas que poseas o para cuya prueba estés explícitamente autorizado — por ejemplo, tu propio laboratorio local deliberadamente vulnerable. El escaneo no autorizado es ilegal en la mayoría de los lugares.',
    summary:
      'Vantage encadena alrededor de 25 herramientas de Kali estándar del sector — enumeración de subdominios, comprobación de disponibilidad, escaneos de puertos y de TLS, rastreo, fuzzing y comprobaciones de vulnerabilidades — en un solo comando, con estado en vivo en el terminal y un informe cuidado. Está diseñado para afinar tus habilidades de seguridad web contra un laboratorio local deliberadamente vulnerable (o cualquier objetivo que poseas o estés autorizado a probar), con un diseño «low-and-slow» seguro para IDS/WAF y una interfaz de terminal opcional.',
    features: [
      'Encadena unas 25 herramientas (nmap, nuclei, httpx, ffuf, katana, sqlmap, …) en un único pipeline de reconocimiento',
      'Seguro para IDS/WAF por diseño: menor tasa + jitter, en lugar de un martilleo más rápido (perfiles sigiloso/exhaustivo)',
      'Limita el escaneo activo a tu objetivo principal; una huella ligera sobre todo lo demás',
      'Estado en vivo en el terminal + un informe con formato; interfaz TUI de Textual opcional, con un navegador de historial',
      'Reforzado: sin intérprete de comandos (solo argv), y la instalación automática es opcional, con una advertencia sobre la cadena de suministro',
    ],
    definition:
      'Strix Vantage es un pipeline de automatización de reconocimiento, gratuito y de código abierto, para Linux, que encadena unas 25 herramientas de Kali (nmap, nuclei, httpx, ffuf y más) en un único comando seguro para WAF, destinado a la práctica autorizada de pruebas de penetración contra tu propio laboratorio deliberadamente vulnerable.',
    notFor: [
      'Es solo para objetivos autorizados — una confirmación de consentimiento única lo impone antes de cualquier escaneo activo.',
      'Orquesta herramientas de terceros; no las empaqueta ni las modifica.',
      'Es exclusivo de Linux/Kali (sin versión para Windows ni macOS).',
    ],
    faq: [
      ['¿Es legal usarlo?', 'Únicamente contra sistemas que poseas o para cuya prueba estés explícitamente autorizado — como una aplicación de prácticas deliberadamente vulnerable o un laboratorio de ciberseguridad que controles. El escaneo activo de sistemas que no te pertenecen es ilegal en la mayoría de las jurisdicciones; tú eres responsable del uso que hagas.'],
      ['¿Necesita Kali o permisos de root?', 'Está pensado para Kali Linux y su conjunto de herramientas estándar; sudo activa los escaneos SYN y el instalador automático (opcional). Funciona en otras distribuciones de Linux cuando las herramientas ya están instaladas.'],
    ],
    creditsNote: 'Vantage orquesta estas herramientas de código abierto — no las empaqueta ni las modifica. Un enorme agradecimiento a cada proyecto de terceros.',
    seoTitle: 'Strix Vantage — Automatización de reconocimiento para CTF y laboratorios de pentest',
    seoDescription: 'Encadena unas 25 herramientas de reconocimiento de Kali (nmap, nuclei, ffuf, httpx…) en un único pipeline seguro para WAF, destinado a la práctica autorizada de pentest en un laboratorio local deliberadamente vulnerable. De código abierto.',
  },
  'strix-archer': {
    tagline: 'OSINT pasivo para retos CTF y objetivos de laboratorio autorizados.',
    dangerText: 'Strix Archer realiza recopilación OSINT y muestra una confirmación de consentimiento única. Úsalo ÚNICAMENTE contra retos CTF / personajes ficticios u objetivos que poseas o estés autorizado a probar. Perfilar a personas reales sin su consentimiento puede ser ilegal.',
    summary:
      'Strix Archer combina un motor OSINT sin dependencias, basado únicamente en la biblioteca estándar, con envoltorios para herramientas populares — usando Sherlock, maigret, holehe, theHarvester y SpiderFoot cuando están instaladas, y recurriendo a su propia implementación cuando no lo están. Realiza reconocimiento de dominio (DNS-over-HTTPS, RDAP/WHOIS, subdominios de crt.sh, huella HTTP + cabeceras de seguridad), reconocimiento de identidad (búsqueda de nombres de usuario con límite de frecuencia, OSINT de GitHub, Gravatar, búsqueda de filtraciones) y una comprobación segura de contraseñas basada en el k-anonimato de HIBP. Una confirmación de consentimiento única lo limita al uso autorizado en laboratorio; todo es pasivo y de solo lectura, con un informe .txt y un informe HTML oscuro.',
    features: [
      'Motor integrado basado en la biblioteca estándar + envoltura automática de Sherlock / maigret / holehe / theHarvester / SpiderFoot cuando están presentes',
      'Dominio: DNS-over-HTTPS, RDAP/WHOIS, subdominios de crt.sh, HTTP + comprobación de cabeceras de seguridad ausentes',
      'Identidad: búsqueda de nombres de usuario con límite de frecuencia, OSINT de GitHub (correos filtrados en commits), Gravatar, búsqueda de filtraciones en XposedOrNot',
      'Comprobación segura de contraseñas filtradas mediante el k-anonimato de HIBP — la contraseña nunca sale de tu máquina',
      'Confirmación de consentimiento única, con límite de frecuencia por diseño; pasivo y de solo lectura; informe .txt + informe HTML oscuro',
    ],
    definition:
      'Strix Archer es una herramienta OSINT gratuita y de código abierto para Linux — diseñada para retos CTF y objetivos de laboratorio autorizados — que realiza reconocimiento pasivo de dominio e identidad (DNS/RDAP/crt.sh, búsqueda de nombres de usuario y correos, OSINT de GitHub, comprobaciones de filtraciones), además de una comprobación segura de contraseñas basada en el k-anonimato de HIBP.',
    notFor: [
      'Es pasivo y de solo lectura — nunca explota ni ataca activamente un objetivo.',
      'Es solo para uso autorizado — una confirmación de consentimiento única exige el reconocimiento.',
      'La comprobación de contraseñas filtradas nunca envía tu contraseña (k-anonimato de HIBP).',
    ],
    faq: [
      ['¿Es legal usarlo?', 'Únicamente contra retos CTF / personajes ficticios u objetivos que poseas o para cuya prueba estés explícitamente autorizado. Perfilar a personas reales sin su consentimiento puede constituir acoso y ser ilegal — una confirmación de consentimiento única exige el reconocimiento.'],
      ['¿Necesito instalar algo?', 'No — el motor integrado se basa exclusivamente en la biblioteca estándar de Python. Las herramientas opcionales (Sherlock, holehe, …) se envuelven automáticamente si están presentes, y `--setup` las instala en entornos pipx aislados para que el Python de tu sistema permanezca intacto.'],
    ],
    creditsNote: 'Strix Archer envuelve estas herramientas de código abierto y servicios públicos — no los empaqueta ni los modifica. Gracias a cada proyecto y servicio de terceros.',
    seoTitle: 'Strix Archer — Herramienta OSINT para CTF y objetivos de laboratorio autorizados',
    seoDescription: 'OSINT pasivo para objetivos de laboratorio/CTF autorizados: reconocimiento de dominio (DNS/RDAP/crt.sh), búsqueda de nombres de usuario y correos, OSINT de GitHub, comprobaciones de filtraciones y una comprobación segura de contraseñas con HIBP. De código abierto.',
  },
  'strix-sinkhole': {
    tagline: 'Bloquea rastreadores, telemetría y anuncios en tu archivo hosts — sin conexión, reversible, en un clic.',
    summary:
      'Strix Sinkhole gestiona de forma segura el archivo hosts de tu sistema para redirigir a 0.0.0.0 los dominios conocidos de rastreadores, telemetría y anuncios, de modo que una resolución muere en tu propia máquina antes de que ninguna petición la abandone — sin un servidor como Pi-hole, sin extensiones por navegador, sin ningún demonio en segundo plano y sin llamadas de red propias. Todo lo que escribe reside dentro de un bloque con espacio de nombres dedicado: así, tus propias entradas de hosts y los valores predeterminados del sistema se copian byte a byte y nunca se tocan. Una protección integrada se niega a redirigir al vacío la infraestructura crítica (actualización del OS, revocación de certificados/OCSP, sincronización horaria, localhost), diga lo que diga cualquier lista de bloqueo, de modo que nunca puede romper tu máquina en silencio. Cada cambio va precedido de una copia de seguridad con marca de tiempo y es reversible en un clic, con una vista previa de diferencias en modo simulación de exactamente lo que va a cambiar y una lista de permitidos para los falsos positivos.',
    features: [
      'Redirige al vacío los dominios de rastreadores / telemetría / anuncios en todo el sistema mediante el archivo hosts — sin conexión, sin servidor, sin extensión',
      'Bloque gestionado con espacio de nombres dedicado: tus entradas de hosts y las del sistema se conservan byte a byte (verificadas antes de cada escritura)',
      'Protección de dominios críticos: la actualización del OS, OCSP/CRL, la sincronización horaria y localhost nunca pueden ser redirigidos al vacío por ninguna lista',
      'Copia de seguridad con marca de tiempo antes de cada escritura + restauración en un clic; vista previa de diferencias en modo simulación; lista de permitidos para los falsos positivos',
      'Incluye una lista inicial curada; importa la tuya u opta por una actualización HTTPS acotada; interfaz gráfica oscura (Windows) + CLI `strixsink` (Linux)',
    ],
    definition:
      'Strix Sinkhole es un bloqueador de anuncios y rastreadores gratuito, de código abierto y sin conexión, basado en el archivo hosts, para Windows y Linux, que redirige al vacío los dominios de rastreadores, telemetría y anuncios en todo el sistema — sin un servidor como Pi-hole, sin extensión de navegador y sin reenvío de DNS.',
    notFor: [
      'No es un servidor DNS al estilo de Pi-hole y no reenvía ninguna de tus consultas a ningún sitio.',
      'No es una extensión de navegador — edita un archivo hosts en texto plano, auditable y reversible.',
      'Bloquea a nivel del archivo hosts; no cifra tu DNS de salida.',
    ],
    faq: [
      ['¿En qué se diferencia de Pi-hole o de una extensión de navegador?', 'Sin servidor aparte ni Raspberry Pi (Pi-hole), y no es una extensión por navegador que pueda leer por sí misma tu navegación — Strix Sinkhole edita un archivo hosts en texto plano que cualquier usuario técnico puede auditar y revertir. Nada se ejecuta en segundo plano y nada reenvía tus consultas DNS a ningún sitio.'],
      ['¿Puede una lista de bloqueo defectuosa romper mi ordenador?', 'No. Una protección integrada se niega a redirigir al vacío la infraestructura crítica (actualización del OS, revocación de certificados, sincronización horaria, localhost), diga lo que diga una lista, cada cambio se respalda primero y un clic restaura el original exacto. Ten en cuenta que bloquea a nivel del archivo hosts y no cifra el DNS de salida.'],
    ],
    creditsNote: 'Strix Sinkhole solo incluye su propia y pequeña lista inicial curada y no empaqueta estas listas — te permite importarlas, cada una bajo su propia licencia. Gracias al ecosistema público de listas de bloqueo.',
    seoTitle: 'Strix Sinkhole — Bloqueador de anuncios y rastreadores sin conexión por archivo hosts',
    seoDescription: 'Bloquea rastreadores, telemetría y anuncios en todo el sistema redirigiéndolos al vacío en tu archivo hosts — totalmente sin conexión, sin servidor, sin extensión de navegador. Copias de seguridad con marca de tiempo, reversión en un clic, nunca rompe los dominios críticos. De código abierto, Windows y Linux.',
  },
  'strix-talon': {
    tagline: 'Observa el tráfico saliente de cada aplicación — y corta el de aquellas en las que no confías.',
    summary:
      'Strix Talon es un mapa en vivo del tráfico saliente, proceso a proceso: qué aplicación se comunica con qué dirección y puerto remotos, actualizado una vez por segundo, con los destinos totalmente nuevos señalados en cuanto aparecen. Por encima de esta visibilidad de solo lectura se sitúa una capa de reglas opcional — «esta aplicación nunca debe acceder a internet», «bloquear esta dirección», y un interruptor de corte global que corta todo el tráfico saliente salvo el de loopback (manteniendo opcionalmente tu red local). Lo fundamental es que Talon no incluye ningún controlador de núcleo: cada regla se traduce al propio cortafuegos del sistema operativo — el Firewall de Windows Defender mediante netsh, Linux mediante una tabla nftables privada — y se nombra de modo que pueda revertirse en un clic sin tocar jamás tus reglas existentes. También muestra los sockets locales en escucha, de modo que ves la exposición entrante y el parloteo saliente en una sola vista.',
    features: [
      'Mapa de tráfico saliente por aplicación en vivo: aplicación → IP/puerto/estado remotos, actualizado cada ~2 s, con los nuevos destinos resaltados',
      'Bloquea una aplicación (Windows) o una dirección (todas las plataformas), además de un interruptor de corte global (bloquear todo el tráfico saliente salvo el de loopback)',
      'Aplicado a través del cortafuegos de tu sistema operativo (Firewall de Windows Defender / nftables) — sin ningún controlador de núcleo que aprobar o firmar',
      'Cada regla tiene su propio espacio de nombres y es reversible en un clic — Talon nunca toca tus reglas de cortafuegos existentes; el loopback nunca se bloquea',
      'También ve la exposición entrante (escucha en 0.0.0.0 frente a 127.0.0.1); interfaz gráfica moderna con PySide6 en Windows + una CLI `talon` en Linux',
    ],
    definition:
      'Strix Talon es un cortafuegos de salida por aplicación y monitor de tráfico saliente, gratuito y de código abierto, para Windows y Linux, que muestra en tiempo real qué aplicación se comunica con qué dirección remota y te permite bloquear cualquier aplicación o dirección — o todo el tráfico saliente — aplicado a través del propio cortafuegos de tu sistema operativo, sin ningún controlador de núcleo.',
    notFor: [
      'No incluye ningún controlador de núcleo — controla el cortafuegos integrado de tu sistema operativo (Firewall de Windows Defender / nftables).',
      'No muestra ventanas emergentes de permitir/denegar conexiones en vivo en la v1.',
      'El bloqueo por aplicación es exclusivo de Windows; en Linux, bloquea por dirección de destino.',
    ],
    faq: [
      ['¿En qué se diferencia de Little Snitch o GlassWire?', 'Talon es de código abierto, sin telemetría alguna, y funciona en Windows Y Linux (Little Snitch es exclusivo de macOS y de pago; GlassWire es de código cerrado). Lo fundamental es que delega la aplicación de las reglas en el cortafuegos integrado de tu sistema operativo en lugar de incluir un controlador de núcleo, y cada regla es una entrada de cortafuegos sencilla y auditable que puedes inspeccionar y revertir.'],
      ['¿Puede dejarme fuera de mi propia máquina?', 'No. El loopback siempre está exento, el interruptor de corte mantiene accesible localhost (y, opcionalmente, tu red local), cada regla tiene el espacio de nombres StrixTalon-* / reside en una tabla nftables privada, y un clic (o `sudo talon revert`) elimina todo lo que Talon añadió sin tocar tus demás reglas de cortafuegos. Nota: las ventanas emergentes de «permitir/denegar esta nueva conexión» en vivo quedan fuera del alcance de la v1; el bloqueo por aplicación es exclusivo de Windows (en Linux, el bloqueo se hace por dirección).'],
    ],
    creditsNote: 'Strix Talon mapea los sockets con psutil, construye su interfaz con PySide6 y aplica las reglas a través del cortafuegos de tu sistema operativo — no comparte código con Little Snitch / GlassWire / OpenSnitch; solo se les menciona a modo de inspiración.',
    seoTitle: 'Strix Talon — Cortafuegos de salida por aplicación (Windows y Linux)',
    seoDescription: 'Observa el tráfico saliente de cada aplicación y bloquea aquello en lo que no confías — un cortafuegos de salida por aplicación y monitor de conexiones de código abierto para Windows y Linux. Aplicado a través del cortafuegos de tu sistema operativo (sin controlador de núcleo), con un interruptor de corte global. Sin telemetría, MIT.',
  },
};

export const contribute = {
  h1: 'Crea una herramienta. Hazla parte de Strix.',
  lead:
    'Strix es una suite, no un jardín amurallado. Si has creado una herramienta de privacidad o seguridad de código abierto que se rige por las mismas reglas — sin conexión de forma predeterminada, cero telemetría, genuinamente auditable —, puedes proponerla. Una vez que supere la misma revisión de seguridad y el mismo trabajo de refuerzo que atraviesa cada herramienta de Strix, se publica bajo el paraguas de Strix: con su propio repositorio, una página en este sitio en 13 idiomas y versiones con sumas de comprobación y atestación.',
  badge: 'Abierto a herramientas de la comunidad',
  ctaTop: 'Envía tu herramienta',
  updatedLabel: 'Última actualización',
  steps: {
    h2: 'Cómo funciona',
    sub: 'Cuatro pasos desde tu repositorio hasta una herramienta de Strix publicada — y conservas la autoría y los derechos de autor de principio a fin.',
    list: [
      { n: '01', t: 'Crea tu herramienta', d: 'Escríbela en cualquier lenguaje, para Windows o Linux (o ambos), bajo una licencia compatible con MIT. Cumple los criterios de más abajo: sin conexión, sin telemetría, una sola tarea bien hecha.' },
      { n: '02', t: 'Envía una propuesta', d: 'Abre una incidencia de propuesta en GitHub con un enlace a tu repositorio, qué hace, las plataformas a las que se dirige y cómo toca la red — si es que lo hace. No necesitas ninguna cuenta con nosotros; solo GitHub.' },
      { n: '03', t: 'Revisión de seguridad y refuerzo', d: 'Aplicamos el mismo filtro que superó cada herramienta de Strix: análisis estático, una auditoría de dependencias y de la cadena de suministro, una revisión de código adversaria y un trabajo de refuerzo. Recibes los hallazgos y los resolvemos juntos.' },
      { n: '04', t: 'Se publica como Strix', d: 'Tras la aceptación, tu herramienta obtiene su propio repositorio dentro de la organización Strix, una página de aterrizaje localizada en este sitio y versiones con sumas de comprobación SHA-256 y una atestación de procedencia de compilación.' },
    ],
  },
  criteria: {
    h2: 'Lo que debe ser una herramienta de Strix',
    sub: 'Estos puntos no son negociables — son las promesas sobre las que se construye toda la suite. Si tu herramienta ya se rige por ellas, se sentirá como en casa desde el primer momento.',
    list: [
      { t: 'Código abierto', d: 'Código fuente público bajo la licencia MIT (o una licencia permisiva compatible con MIT). Nada oculto, nada ofuscado.' },
      { t: 'Sin conexión de forma predeterminada', d: 'Ninguna llamada de red propia en el caso de una herramienta de escritorio. Si la red es la razón de ser de la herramienta (recon/OSINT), debe ser sin clave, sujeta a consentimiento y con un alcance claramente delimitado.' },
      { t: 'Cero telemetría', d: 'Sin SDK de analítica, sin comunicación oculta, sin cuentas. Los datos del usuario nunca salen de su máquina.' },
      { t: 'Una sola tarea, bien hecha', d: 'Una utilidad específica, con valores predeterminados sensatos, un alcance claro y una declaración explícita de lo que deliberadamente no hace.' },
      { t: 'Documentada y comprobable', d: 'Un README, un archivo SECURITY.md con un modelo de amenazas y pruebas de regresión para todo lo crítico para la seguridad.' },
      { t: 'Mínimo privilegio', d: 'Sin llamadas al intérprete de comandos, sin ejecución de código dinámico, llamadas a subprocesos solo mediante argv, resolución de herramientas por ruta absoluta y elevación de privilegios solo donde sea realmente necesaria.' },
    ],
  },
  review: {
    h2: 'La revisión de seguridad que atraviesa cada propuesta',
    sub: 'El mismo filtro que las herramientas existentes superaron antes de su lanzamiento. Nada se publica hasta que lo supera.',
    list: [
      { t: 'Análisis estático (SAST)', d: 'semgrep, bandit, PSScriptAnalyzer, los analizadores de Roslyn y los linters adecuados a cada lenguaje en toda la base de código.' },
      { t: 'Auditoría de dependencias y de la cadena de suministro', d: 'Versiones fijadas, un SBOM, pip-audit / Dependabot y una comprobación de que cada dependencia de terceros está justificada.' },
      { t: 'Revisión de código adversaria', d: 'Una pasada humana en busca de inyecciones, salto de directorio, SSRF, escalada de privilegios y cualquier debilitamiento de un control de seguridad.' },
      { t: 'Refuerzo', d: 'Cerramos las brechas juntos: mínimo privilegio, sin intérprete de comandos, validación de entradas, valores predeterminados que se cierran ante un fallo y defensa en profundidad en las rutas peligrosas.' },
      { t: 'Procedencia en cada versión', d: 'La CI compila cada versión, escribe un archivo SHA256SUMS en SHA-256 y adjunta una atestación de procedencia de compilación SLSA, de modo que cada descarga es verificable.' },
    ],
  },
  keep: {
    h2: 'Lo que conservas — y lo que obtienes',
    sub: 'Contribuir a Strix no significa ceder tu trabajo.',
    list: [
      { t: 'Tu autoría y tus derechos de autor', d: 'Sigues siendo el autor. Los derechos de autor MIT son tuyos; Strix lo distribuye y lo mantiene junto a ti.' },
      { t: 'Un público real', d: 'Una página de aterrizaje localizada en 13 idiomas, la integración de SEO/GEO y un lugar en la cuadrícula de herramientas y en las descargas.' },
      { t: 'Un pipeline de publicación de confianza', d: 'Sumas de comprobación, atestación, una futura vía de firma de código (SignPath Foundation) y un proceso de divulgación de seguridad — configurados para ti.' },
      { t: 'Mantenimiento conjunto', d: 'Las incidencias, las pull requests y los informes de seguridad siguen el mismo proceso que el resto de la suite. No estás solo.' },
    ],
  },
  cta: {
    h2: '¿Listo para enviar tu herramienta?',
    p: 'Abre una incidencia de propuesta con el enlace de tu repositorio y una breve descripción. La recogeremos, haremos la revisión y trabajaremos contigo a partir de ahí. ¿Aún no estás listo? Lee primero la guía de contribución completa.',
    btnSubmit: 'Envía tu herramienta',
    btnGuide: 'Leer la guía de contribución',
    note: 'Para enviar una herramienta solo necesitas una cuenta de GitHub. No hay ninguna tarifa, ningún acuerdo de colaborador que te arrebate tus derechos ni ninguna obligación — puedes retirarte en cualquier momento antes de la publicación.',
  },
  faq: [
    ['¿Pierdo la propiedad de mi herramienta?', 'No. Conservas la autoría y los derechos de autor MIT. Strix la mantiene y la distribuye junto a ti, y puedes retirarte antes de la publicación.'],
    ['¿Qué lenguajes o frameworks se permiten?', 'Cualquiera. La suite existente abarca Python, C#, PowerShell y más — lo que importa es la licencia, las reglas de «sin conexión / sin telemetría» y superar la revisión de seguridad, no la pila tecnológica.'],
    ['¿Y si mi herramienta necesita la red?', 'Eso solo es aceptable si la red es su verdadera razón de ser (como las herramientas recon/OSINT). En ese caso debe ser sin clave, sujeta a un consentimiento explícito, con un alcance claramente delimitado y de uso autorizado exclusivamente — nunca tráfico silencioso o en segundo plano.'],
    ['¿Cuánto tarda la revisión?', 'Depende del tamaño de la herramienta y de cuántos hallazgos aparezcan. Las herramientas pequeñas y ya reforzadas avanzan rápido; todo lo que toque operaciones destructivas o elevación de privilegios recibe un escrutinio adicional.'],
    ['¿Qué ocurre si no la supera?', 'Recibes todos los hallazgos y puedes resolverlos y volver a enviarla. Una revisión que encuentra problemas es la prueba de que el proceso funciona — es exactamente lo que les ocurrió a las herramientas que ya forman parte de la suite.'],
  ],
};

export const donate = {
  h1: 'Apoya a Strix — de forma privada.',
  lead:
    'Strix es gratuito, tiene licencia MIT y no incluye telemetría alguna — y siempre será así. Sin anuncios, sin cuentas, nada a la venta. Si las herramientas te ahorran tiempo o te mantienen más seguro, puedes aportar con Monero (XMR): privado por diseño, exactamente como todo lo demás aquí. Cada aporte se destina al alojamiento, a un certificado de firma de código y a tiempo de desarrollo.',
  badge: 'Donaciones que respetan la privacidad',
  updatedLabel: 'Última actualización',
  card: {
    label: 'Dirección de Monero (XMR)',
    scanHint: 'Escanea el QR con tu monedero o copia la dirección de abajo.',
    copy: 'Copiar dirección',
    copied: 'Copiado ✓',
    openWallet: 'Abrir en el monedero',
    qrPending: 'Aquí aparecerá un código QR una vez configurada la dirección de donación.',
    notConfigured: 'La dirección de donación aún no está configurada — vuelve pronto.',
  },
  why: {
    h2: '¿Por qué Monero?',
    sub: 'Porque un proyecto de privacidad no debería pedirte que renuncies a la tuya para apoyarlo.',
    list: [
      { t: 'Privado de forma predeterminada', d: 'Monero oculta al remitente, al destinatario y el importe. No hay ningún libro de contabilidad público que vincule una donación contigo — algo apropiado para una suite construida sobre la premisa de no rastrearte.' },
      { t: 'Sin intermediarios, sin cuentas', d: 'Sin procesador de pagos, sin registro y sin ningún script de terceros en esta página. La dirección es todo lo que necesitas.' },
      { t: 'Aquí no se rastrea nada', d: 'Esta página no carga ninguna analítica ni realiza llamadas de red. No podemos saber quién la visitó ni quién donó.' },
    ],
  },
  funds: {
    h2: 'Adónde va',
    sub: 'Un proyecto pequeño, independiente y sin presupuesto. Cada aportación se gasta con total transparencia:',
    list: [
      { t: 'Alojamiento e infraestructura', d: 'Mantener el sitio, las versiones y las sumas de comprobación en línea y rápidos.' },
      { t: 'Certificado de firma de código', d: 'Un certificado OV/EV para que los instaladores dejen de activar SmartScreen — la mejora más solicitada con diferencia.' },
      { t: 'Tiempo de desarrollo', d: 'Nuevas herramientas, adaptaciones a Linux, refuerzo de la seguridad y mantener todo gratuito y sin telemetría.' },
    ],
  },
  otherWays: {
    h2: 'Otras formas de ayudar',
    sub: '¿No puedes donar? Estas formas ayudan igual — y no cuestan nada.',
    list: [
      { t: 'Dar una estrella a los repositorios en GitHub', d: 'La visibilidad y la reputación ayudan de verdad a que los nuevos usuarios encuentren las herramientas y confíen en ellas.' },
      { t: 'Contribuir con una herramienta', d: 'Crea algo que encaje en la suite y envíalo para su revisión de seguridad.' },
      { t: 'Informar de errores y falsos positivos', d: 'Abre incidencias, informa de los falsos positivos de los antivirus a sus fabricantes y ayuda a otros en las discusiones.' },
    ],
  },
  note: 'Las donaciones son regalos voluntarios, no compras — no hay reembolso, ni factura, ni recibo fiscal. Por favor, dona solo lo que puedas permitirte sin apuros. Gracias por mantener con vida un software independiente que prioriza la privacidad.',
};

export const about = {
  h1: 'Acerca de Strix',
  lead:
    'Somos un grupo pequeño e independiente de cuatro amigos —estudiantes de informática afincados en Alemania— que nos cansamos de las herramientas de «privacidad» que en realidad no puedes inspeccionar. De ahí surgió Strix: un conjunto de utilidades de privacidad y seguridad que funcionan totalmente sin conexión, no incluyen telemetría alguna y son tuyas para leerlas, compilarlas y confiar en ellas. Con licencia MIT, gratis para siempre, sin ninguna empresa detrás y sin nada que vender.',
  badge: 'Independiente · código abierto',
  updatedLabel: 'Última actualización',
  values: {
    h2: 'En qué creemos',
    list: [
      { t: 'Verificar, no solo confiar', d: 'Cada herramienta es código fuente público, con licencia MIT y un modelo de amenazas. No nos creas sin más: léelo, compílalo y compruébalo tú mismo.' },
      { t: 'Las herramientas de privacidad no deben espiarte', d: 'Cero telemetría, sin cuentas, sin analíticas — ni siquiera en este sitio web. Tus datos nunca salen de tu máquina.' },
      { t: 'Sin conexión de forma predeterminada', d: 'Las herramientas de escritorio no realizan llamadas de red por sí mismas. Desconecta el cable y siguen funcionando.' },
      { t: 'Gratis, para siempre', d: 'Sin planes de pago, sin suscripciones, sin anuncios. Si algún día aceptamos donaciones o subvenciones, eso nunca cambiará estas promesas.' },
    ],
  },
  story: {
    h2: 'Por qué lo desarrollamos',
    p1: 'Queríamos que las herramientas que usamos nosotros mismos fueran honestas: sin cajas negras, sin «confía en nosotros», sin recopilación de datos a escondidas. La mayor parte de lo que necesitábamos, o no existía como código abierto, o no era multiplataforma, o nos pedía renunciar a nuestra privacidad para protegerla. Así que nos pusimos a crear: una herramienta pequeña, específica y auditable cada vez.',
    p2: 'Strix es un proyecto paralelo que nos importa, mantenido en nuestro tiempo libre. Siempre será abierto y siempre será honesto sobre lo que es — incluso en aquello en lo que se queda corto (los instaladores aún no están firmados digitalmente, y lo decimos con claridad en la página de verificación).',
  },
  cta: {
    h2: 'Participa',
    p: 'Strix está abierto a todo el mundo. Lee el código fuente, informa de un error, sugiere una herramienta o envía la tuya para una revisión de seguridad. Si te resulta útil, una estrella en GitHub ayuda de verdad a que otros la descubran.',
    btnGithub: 'Ver en GitHub',
    btnContribute: 'Contribuir con una herramienta',
  },
};

export const alternatives = {
  h1: 'Alternativas de código abierto',
  lead:
    '¿Ya usas una herramienta de privacidad de código cerrado o de pago? Es muy probable que Strix tenga un reemplazo de código abierto, sin conexión y sin telemetría alguna — gratis para siempre, con licencia MIT y que puedes auditar. Aquí tienes qué sustituye a qué.',
  badge: 'Reemplazos gratuitos y abiertos',
  updatedLabel: 'Última actualización',
  altToLabel: 'Alternativa de código abierto a',
  viewTool: 'Ver la herramienta →',
  ctaLead: '¿No encuentras una equivalencia?',
  ctaText: 'Explora la suite de herramientas completa o sugiere una herramienta que deberíamos crear.',
  ctaAll: 'Todas las herramientas',
  ctaSuggest: 'Sugerir una herramienta',
};

export default { ui, categories, security, apps, contribute, donate, about, alternatives };
