// Brazilian Portuguese (pt-BR) translation. Mirrors the structure of en.js / site.js.
//   - `ui`        : all site-chrome / marketing strings (re-exported as `t`).
//   - `categories`: display labels for the app-category chips (canonical keys stay English).
//   - `security`  : the /security (Verify) page prose.
//   - `apps`      : per-locale overrides for each app's content.

export const ui = {
  metaDescription:
    'Ferramentas de privacidade e segurança de código aberto e off-line para Windows e Linux. Sem telemetria, sem contas, sob licença MIT. Remoção de metadados, apagamento seguro, bloqueio de anúncios e rastreadores, firewall de saída por aplicativo, monitoramento do sistema e muito mais.',
  homeSeoTitle: 'Strix Advanced Tools — Ferramentas de privacidade e segurança de código aberto',
  homeSeoDescription:
    'Nove ferramentas de privacidade e segurança de código aberto e off-line para Windows e Linux: removedor de metadados e arquivador AES-256, apagador seguro de discos, bloqueador de anúncios e rastreadores por arquivo hosts, firewall de saída por aplicativo, monitor do sistema, informações de hardware, sentinela de segurança, além de ferramentas de reconhecimento e OSINT. Sem telemetria. Licença MIT. Gratuito para sempre.',
  downloadsSeoTitle: 'Baixar o Strix Advanced Tools — Windows e Linux',
  downloadsSeoDescription:
    'Baixe a suíte Strix Advanced Tools para Windows e Linux. Instaladores diretos e pacotes .deb no GitHub Releases, cada um acompanhado de uma soma de verificação SHA-256. Gratuito e de código aberto.',
  keywordsGlobal:
    'ferramentas de segurança de código aberto, ferramentas de privacidade, windows, linux, removedor de metadados, removedor de exif, apagar disco com segurança, nist 800-88, bloqueador de anúncios por arquivo hosts, bloqueador de rastreadores, bloqueador de telemetria, dns sinkhole, firewall por aplicativo, firewall de saída, monitor de tráfego de saída, kill switch, alternativa ao little snitch, widget de monitoramento do sistema, informações de hardware, monitor de segurança, osint, reconhecimento, off-line, sem telemetria, licença MIT',
  tagline: 'Ferramentas de privacidade e segurança de código aberto para Windows e Linux.',
  heroBadge: 'Código aberto · MIT · Windows e Linux',
  heroTitle: 'Não confie em ferramentas de segurança. Leia-as.',
  heroSubtitle:
    'O Strix Advanced Tools é uma suíte de código aberto com utilitários de privacidade e segurança para Windows e Linux. Cada um funciona totalmente off-line, não embarca nenhuma telemetria e pertence a você — para auditar, compilar e aprovar. Gratuito para sempre, sob licença MIT.',
  browse: 'Explorar as ferramentas',
  getStarted: 'Baixar',
  viewOnGithub: 'Dar uma estrela no GitHub',
  nav: { apps: 'Ferramentas', downloads: 'Downloads', github: 'GitHub', security: 'Segurança', contribute: 'Contribuir', donate: 'Doar', about: 'Sobre', alternatives: 'Alternativas' },
  allApps: 'As ferramentas',
  allAppsLead: 'Nove utilitários objetivos. Cada um faz uma coisa bem-feita, off-line.',
  features: 'O que ela faz',
  screenshots: 'Um olhar por dentro',
  faqTitle: 'Perguntas frequentes',
  download: 'Baixar',
  downloadCta: 'Obter',
  otherDownloads: 'Todas as plataformas e somas de verificação',
  source: 'Código-fonte',
  docs: 'Documentação',
  readme: 'Ler a documentação',
  install: 'Instalação',
  installWindows: 'Windows',
  installLinux: 'Linux (Ubuntu / Debian)',
  security: 'Segurança',
  securityNote:
    'Off-line por padrão, sem shell, sem código dinâmico, privilégio mínimo — e cada linha está sob licença MIT e aberta à auditoria.',
  category: 'Categoria',
  backHome: 'Todas as ferramentas',
  verified: 'Somas de verificação (SHA-256) são publicadas a cada versão para que você possa verificar seu download.',
  unsigned:
    'Os binários ainda não têm assinatura digital, então o Windows SmartScreen pode exibir um aviso na primeira execução — escolha “Mais informações → Executar assim mesmo” ou verifique antes a soma de verificação. Nunca desative seu antivírus.',
  whyTitle: 'Construído sobre quatro promessas',
  whyLead: 'Não é um slogan — cada promessa pode ser verificada no código-fonte antes que você confie nela.',
  why: [
    { k: 'offline', title: 'Off-line por concepção', text: 'Nenhuma chamada de rede, nenhuma telemetria, nenhuma conta. Seus dados nunca saem da máquina onde estão.', proof: 'faça grep no código-fonte: zero sockets de saída nas ferramentas de desktop' },
    { k: 'hardened', title: 'Reforçado e testado', text: 'Nenhuma chamada a shell, nenhum código dinâmico, privilégio mínimo — e os caminhos críticos para a segurança são cobertos por testes de regressão de verdade.', proof: 'por exemplo, o apagador de discos recusa o disco do sistema em 18 testes unitários' },
    { k: 'cross', title: 'Windows e Linux', text: 'Assistentes de instalação completos no Windows e pacotes nativos no Linux para as ferramentas de desktop; as ferramentas de reconhecimento/OSINT do Kali são distribuídas como scripts Linux.', proof: 'versões com somas de verificação e atestado de proveniência de build do GitHub' },
    { k: 'open', title: 'Genuinamente aberto', text: 'Sob licença MIT, sem letras miúdas. Leia, compile você mesmo, audite ou envie um pull request.', proof: 'cada repositório é público no GitHub — nada escondido' },
  ],
  downloadsTitle: 'Downloads',
  downloadsLead:
    'Baixe a versão mais recente para sua plataforma. Cada download é um arquivo direto do GitHub Releases, acompanhado de uma soma de verificação SHA-256.',
  homeFaq: [
    ['As ferramentas do Strix Advanced Tools são mesmo gratuitas e de código aberto?', 'Sim. Cada ferramenta está sob licença MIT e é gratuita para sempre — você pode ler o código-fonte, compilá-la você mesmo e contribuir. Sem planos pagos, sem contas, sem assinaturas e sem anúncios, nem agora nem nunca.'],
    ['Quem faz o Strix e por que eu deveria confiar nele?', 'O Strix Advanced Tools é um projeto de código aberto independente — não uma empresa que vende seus dados. Você não precisa confiar às cegas: cada ferramenta é um repositório público no GitHub sob a licença MIT, de modo que você (ou qualquer pessoa) pode ler cada linha, compilá-la a partir do código-fonte e confirmar que ela faz exatamente o que promete. A confiança deve ser verificada, não pedida. Cada repositório também inclui um arquivo SECURITY.md com o modelo de ameaças e um canal privado de divulgação.'],
    ['Qual ferramenta do Strix é a alternativa de código aberto ao aplicativo que já uso?', 'O Talon é um firewall de saída por aplicativo — uma alternativa de código aberto ao Little Snitch e ao GlassWire. O Sinkhole é um bloqueador de anúncios e rastreadores por arquivo hosts — uma alternativa local, em uma única máquina, ao Pi-hole. O MetaVault remove metadados e cria arquivos AES-256 — uma alternativa às interfaces gráficas do ExifTool, ao MAT2 e aos removedores de EXIF on-line. O Disk Cleaner apaga discos com segurança — uma alternativa ao DBAN e ao apagamento do CCleaner. O Pulse é um widget de monitoramento do sistema (alternativa aos gadgets do Rainmeter/HWiNFO), o Inspector informa sobre o hardware (alternativa ao CPU-Z/Speccy) e o Sentinel é uma sentinela de segurança. Cada um funciona off-line, sem nenhuma telemetria.'],
    ['Essas ferramentas enviam meus dados para algum lugar?', 'Não. Cada ferramenta de desktop funciona inteiramente na sua máquina, não faz nenhuma chamada de rede por conta própria e não embarca nenhuma telemetria — seus dados nunca saem do seu dispositivo. As únicas ferramentas que acessam a rede são aquelas cuja função é justamente essa (as ferramentas de reconhecimento/OSINT), e mesmo essas usam apenas APIs públicas sem chave, condicionadas ao consentimento e limitadas por tempos de expiração.'],
    ['Preciso ter conhecimento técnico para usá-las?', 'Não para os aplicativos de desktop — MetaVault, Pulse, Inspector, Sentinel, Sinkhole e Talon têm uma interface gráfica limpa, com padrões sensatos e confirmações antes de qualquer ação destrutiva. As ferramentas de reconhecimento (Vantage, Archer) funcionam por linha de comando, para quem se sente à vontade em um terminal.'],
    ['De qual ferramenta eu preciso?', 'Use a busca e os filtros acima da grade de ferramentas para refinar por plataforma (Windows / Linux) e categoria (Privacidade, Segurança, Sistema, OSINT…), ou pressione ⌘K / Ctrl-K em qualquer lugar para ir direto a uma ferramenta. Cada página de ferramenta explica exatamente o que ela faz — e o que ela deliberadamente não faz.'],
    ['Como verifico se um download é autêntico?', 'Cada versão no GitHub publica uma soma de verificação SHA-256 (SHA256SUMS) ao lado dos arquivos. Baixe-a, compare o hash do seu arquivo e você saberá que o binário é exatamente o que foi publicado — sem adulteração. Isso importa mais do que qualquer assinatura de código.'],
    ['Quais plataformas são compatíveis?', 'Windows e Linux (Ubuntu / Debian). As ferramentas de desktop vêm com um instalador para Windows e um pacote para Linux; as ferramentas de reconhecimento/OSINT Vantage e Archer são exclusivas para Linux/Kali.'],
    ['Existe uma versão para macOS ou mobile?', 'Ainda não oficialmente — as plataformas compatíveis são Windows e Linux (Ubuntu / Debian), e não há versões para iOS ou Android. Como as ferramentas baseadas em Python (MetaVault, Pulse, Sentinel, Sinkhole, Talon) são de código aberto e multiplataforma, é bem possível que funcionem no macOS a partir do código-fonte, mas isso não é compatível nem testado. Uma versão nativa para macOS está no roteiro, não é um produto entregue.'],
    ['Por que o Windows exibe um aviso de "editor desconhecido"?', 'Os instaladores ainda não têm assinatura digital, então o SmartScreen exibe um aviso na primeira execução. Escolha "Mais informações → Executar assim mesmo" ou verifique a soma de verificação SHA-256 publicada com cada versão. Nunca desative seu antivírus para executá-los — você nunca deveria precisar disso.'],
    ['O uso das ferramentas de reconhecimento / OSINT é legal?', 'Somente contra sistemas que você possui ou que está explicitamente autorizado a testar — um laboratório de prática propositalmente vulnerável, um desafio de CTF ou um trabalho com autorização por escrito. Tanto o Vantage quanto o Archer exibem uma confirmação de consentimento única e são estritamente passivos / de uso autorizado apenas. Escanear ou traçar perfis sem autorização pode ser ilegal.'],
    ['Posso relatar um bug ou contribuir?', 'Com certeza — cada ferramenta é um repositório público separado no GitHub, com um arquivo SECURITY.md, modelos de issue e um guia de contribuição. Problemas de segurança têm um canal privado de divulgação; novos recursos e correções são bem-vindos como pull requests.'],
  ],
  faqSearchPlaceholder: 'Pesquisar nas perguntas…',
  toolsFilterAll: 'Todas',
  toolsSearchPlaceholder: 'Pesquisar ferramentas por nome, função ou palavra-chave…',
  toolsNoMatch: 'Nenhuma ferramenta corresponde — tente limpar os filtros.',
  footerTagline: 'Ferramentas de privacidade e segurança de código aberto.',
  footerNote: 'Feito para quem se importa com a privacidade.',
  footerCols: { product: 'Ferramentas', resources: 'Recursos', about: 'Projeto' },
  langLabel: 'Idioma',
  stats: { tools: 'ferramentas', platforms: 'plataformas', telemetry: 'telemetria', license: 'licença' },
  faqNoMatch: 'Nenhuma pergunta corresponde — tente outras palavras.',
  // Downloads page section headings
  dl: { allTools: 'Todas as ferramentas — Windows e Linux', verify: 'Verifique seu download' },
  // App-page fixed labels ({name} is replaced with the tool name)
  app: {
    price: 'Preço',
    priceVal: 'Gratuito — código aberto (MIT)',
    platforms: 'Plataformas',
    category: 'Categoria',
    builtWith: 'Desenvolvido com',
    altTo: 'Alternativa de código aberto a',
    telemetry: 'Telemetria',
    telemetryVal: 'Nenhuma — totalmente off-line',
    updated: 'Atualizado',
    notDo: 'O que o {name} deliberadamente não faz',
    poweredBy: 'Movido a código aberto',
    fullAck: 'Agradecimentos completos e links →',
    related: 'Ferramentas Strix relacionadas',
    winInstall: 'Baixe o assistente de instalação e execute-o — atalhos no menu Iniciar e um desinstalador são criados para você.',
    dangerFallback: 'Esta ferramenta destrói dados permanentemente e a operação não pode ser desfeita. Leia o guia de segurança antes de usar.',
    copy: 'Copiar',
    copied: 'Copiado ✓',
    glance: 'num relance',
  },
};

export const categories = {
  Privacy: 'Privacidade',
  System: 'Sistema',
  Security: 'Segurança',
  Diagnostics: 'Diagnóstico',
  Recon: 'Reconhecimento',
  OSINT: 'OSINT',
};

export const security = {
  h1: 'Verifique-nos — não apenas confie em nós.',
  lead:
    'As ferramentas do Strix Advanced Tools são gratuitas, de código aberto (MIT) e feitas para funcionar totalmente off-line. Nossos binários para Windows ainda não têm assinatura digital com um certificado pago — somos um projeto pequeno, independente e sem orçamento, e preferimos dizer isso claramente a escondê-lo. Como cada ferramenta é de código aberto, você não precisa acreditar em nossa palavra para nada. Veja como verificar você mesmo.',
  boldNotSigned: 'ainda não têm assinatura digital com um certificado pago',
  updatedLabel: 'Última atualização',
  why: [
    { t: 'O código-fonte é público', d: 'Cada ferramenta é um repositório público no GitHub sob a licença MIT. Leia cada linha, recompile-a você mesmo e confirme que ela faz exatamente o que promete.' },
    { t: 'Os binários são atestados', d: 'Cada versão traz um atestado de proveniência de build do GitHub (SLSA Build L2) — prova criptográfica de que o arquivo foi compilado a partir deste código-fonte, nos servidores do GitHub, e não foi modificado desde então.' },
    { t: 'Nada se comunica em segredo', d: 'As ferramentas de desktop não fazem nenhuma chamada de rede. Desconecte o cabo de rede e elas continuam funcionando; monitore seu tráfego de saída e você não verá nenhum.' },
  ],
  verify: {
    h2: 'Verifique seu download',
    sub: 'A verificação é opcional — se você baixou de uma versão do GitHub, já está tudo certo. Mas, se quiser ter certeza, cada versão inclui um arquivo SHA256SUMS, e veja como conferir a partir dele. Substitua o nome de arquivo do exemplo pela ferramenta que você baixou.',
    anyOs: 'Qualquer sistema operacional',
    winStt: 'Conferir a soma de verificação',
    winIntro: 'Na pasta onde você salvou o download, execute o PowerShell:',
    winExp: 'Compare o hash exibido com a linha correspondente no SHA256SUMS. Se forem idênticos, o arquivo é, byte por byte, o que publicamos:',
    nixStt: 'Conferir a soma de verificação',
    nixIntro: 'Coloque o download e seu arquivo SHA256SUMS na mesma pasta e, em seguida:',
    nixExp: 'Uma resposta de uma só palavra por arquivo — você quer obter OK:',
    provStt: 'Verificar a proveniência do build',
    provIntro: 'Mais forte que uma soma de verificação: prove que o binário foi compilado a partir do nosso código-fonte público, em nossa CI pública. Requer o GitHub CLI 2.49+:',
    provExp: 'Uma linha verde de sucesso indicando o repositório de origem exato que produziu o arquivo:',
    note: 'As somas de verificação são publicadas em cada GitHub Release e replicadas via HTTPS — exemplo SHA256SUMS. O atestado de proveniência fica armazenado no GitHub, não conosco: assim, nem nós nem um espelho de download comprometido podemos falsificá-lo.',
  },
  data: {
    h2: 'Quais dados saem da sua máquina',
    sub: 'A versão curta: para as ferramentas de desktop, nenhum. Aqui está a versão completa — e cada linha pode ser confirmada com uma captura de pacotes.',
    thCategory: 'Categoria',
    thWhat: 'Do que se trata',
    thWhere: 'Para onde vai',
    rows: [
      ['Os arquivos que você processa', 'Metadados, conteúdo de discos, arquivos compactados — lidos e gravados no local, na sua máquina.', 'Nunca enviados. Nada é transmitido para lugar algum.'],
      ['Os detalhes do seu sistema', 'Nome do host, nome de usuário, números de série, endereços IP, hardware — exibidos apenas dentro do aplicativo.', 'Exibidos localmente; nunca transmitidos.'],
      ['Configurações e relatórios', 'Preferências, logs, relatórios em HTML/PDF.', 'Salvos no disco (%LOCALAPPDATA% / ~/.config); nunca sincronizados com um servidor.'],
      ['Estatísticas de uso e de falhas', 'Nenhuma. Não há nenhum SDK de análise, nenhuma telemetria, nenhuma comunicação oculta.', 'Nada é coletado, jamais.'],
      ['Tráfego de rede de saída (ferramentas de desktop)', 'MetaVault, Pulse, Inspector, Sentinel, Sinkhole, Talon.', 'Zero sockets de saída. Desconecte a rede — elas continuam funcionando.'],
      ['Tráfego de rede de saída (ferramentas de reconhecimento)', 'Vantage e Archer — cuja função é justamente a rede.', 'Apenas APIs públicas sem chave que você aciona explicitamente, após uma confirmação de consentimento, limitadas por tempos de expiração.'],
    ],
  },
  av: {
    h2: 'Avisos do antivírus e do SmartScreen',
    intro1: 'Como nossos aplicativos para Windows não são assinados e são empacotados com o PyInstaller, o Windows SmartScreen pode indicar',
    intro2: 'e alguns dos cerca de 70 mecanismos de antivírus podem sinalizar o instalador.',
    intro3: 'Isso é esperado para um software novo, não assinado e de código aberto — trata-se de uma heurística genérica ligada à forma como o aplicativo é empacotado, e não da detecção de um malware de verdade.',
    unknownPublisher: 'editor desconhecido',
    notCommon: 'pouco baixado,',
    list: [
      { b: 'Por que isso acontece:', r: 'o bootloader do PyInstaller é um formato de empacotamento comum (os malwares também o usam), um arquivo novinho não tem reputação de download, e os binários não assinados sofrem uma penalidade de “suspeito até prova em contrário”.' },
      { b: 'A verdadeira prova', r: 'são a soma de verificação e o atestado de proveniência acima, além do código-fonte que você pode ler — e não a heurística de um fornecedor qualquer.' },
      { b: 'O que fazemos:', r: 'relatamos os falsos positivos aos fornecedores à medida que aparecem, e estamos nos candidatando ao programa gratuito de assinatura de código da SignPath Foundation destinado a projetos de código aberto, que implantaremos à medida que a reputação se consolidar.' },
      { b: 'Por favor, nunca desative seu antivírus.', r: 'Se estiver em dúvida, verifique a soma de verificação ou execute a ferramenta a partir do código-fonte.' },
    ],
    tiny: 'Disponibilizamos um link para uma análise ao vivo do VirusTotal de cada build assim que uma versão é lançada, para que você mesmo veja o resultado atual. Nunca publicaremos uma captura de tela de “análise limpa” nem alegaremos “zero detecções” — um link ao vivo em que você pode clicar vale mais do que uma captura de tela que fica desatualizada no build seguinte.',
  },
  read: {
    h2: 'Leia o código-fonte',
    sub: 'A garantia mais forte de todas. Faça grep em qualquer repositório por socket, urllib, requests ou http e veja por conta própria o que acessa — e o que não acessa — a rede.',
    view: 'Ver o código-fonte ↗',
  },
  threat: {
    h2: 'Modelo de ameaças',
    items: [
      ['Contra o que o Strix protege', 'Vazamento de dados por metadados de arquivos, dados recuperáveis em discos descartados, domínios de rastreadores/telemetria/anúncios, conexões de saída silenciosas, programas de inicialização e dispositivos desconhecidos, além de ferramentas de código fechado que você não pode inspecionar.'],
      ['O que o Strix NÃO é', 'Não é um antivírus/EDR, não é uma sandbox e não é uma defesa contra um sistema operacional comprometido ou um malware já em execução com privilégios de administrador. As ferramentas de desktop revelam informações e agem sob seu comando; elas não combatem ameaças ativas em tempo real.'],
      ['Limite de confiança', 'A proveniência prova que um download veio, sem modificação, deste código-fonte público, por meio da CI do GitHub. Ela não prova que o código-fonte é inofensivo — é para isso que serve o código MIT aberto, que você pode ler e recompilar.'],
    ],
  },
  report: {
    h2: 'Encontrou uma vulnerabilidade?',
    p: 'Relate-a de forma privada — por favor, não abra uma issue pública para uma falha de segurança. Cada repositório tem um arquivo SECURITY.md com o modelo de ameaças e um canal de divulgação coordenada, e o relato privado de vulnerabilidades do GitHub está ativado. Não haverá represálias, e daremos crédito a você, se desejar.',
    btnPolicy: 'Política de segurança',
    btnRepos: 'Todos os repositórios',
  },
};

export const apps = {
  'strix-metavault': {
    tagline: 'Apague os metadados ocultos e proteja seus arquivos com criptografia AES-256.',
    summary:
      'Cada foto, documento e PDF que você compartilha carrega vestígios ocultos — coordenadas GPS, seu nome, o dispositivo utilizado, o histórico de edições. O Strix MetaVault remove tudo isso e, opcionalmente, lacra os arquivos limpos dentro de um arquivo 7-Zip com criptografia AES-256, com nomes de arquivo ocultos e uma senha aleatória de uso único. Totalmente off-line, sem contas, sem telemetria.',
    features: [
      'Remove dados EXIF, GPS, IPTC e XMP das imagens; autor/empresa/histórico dos arquivos do Office e PDF',
      'Arquivo AES-256 opcional, com nomes de arquivo criptografados e nome de saída aleatório',
      'Gera uma senha forte de uso único, nunca gravada em disco ou em logs',
      'Recusa senhas personalizadas fracas; protegido contra ataques de link simbólico e bombas zip',
      'Seus arquivos originais nunca são modificados — tudo é feito em cópias',
    ],
    definition:
      'O Strix MetaVault é um removedor de metadados e criptografador de arquivos gratuito e de código aberto para Windows e Linux, que remove os metadados ocultos EXIF/GPS e de documentos e, opcionalmente, protege seus arquivos dentro de um arquivo com criptografia AES-256 — totalmente off-line, sem contas e sem telemetria.',
    notFor: [
      'Ele nunca envia seus arquivos — toda a limpeza acontece localmente, ao contrário dos removedores de metadados on-line.',
      'Ele não implementa a própria criptografia: essa tarefa é delegada ao consagrado 7-Zip AES-256.',
      'Não é um serviço em nuvem e não exige nenhuma conta.',
    ],
    faq: [
      ['Funciona sem o 7-Zip ou o ExifTool?', 'Os arquivos JPEG e PNG são limpos pelo mecanismo integrado. Para todos os outros formatos e para a compactação criptografada, instale o 7-Zip e o ExifTool (ou coloque-os ao lado do aplicativo).'],
      ['Posso recuperar uma senha de arquivo perdida?', 'Não. A senha é exibida uma única vez e nunca é armazenada. Salve-a imediatamente em um gerenciador de senhas — sem ela, a criptografia é realmente inquebrável.'],
    ],
    seoTitle: 'Strix MetaVault — Removedor de metadados e criptografador de arquivos',
    seoDescription: 'Ferramenta gratuita e de código aberto para remover metadados EXIF/GPS e de documentos e, em seguida, proteger seus arquivos em um arquivo com criptografia AES-256. Off-line, sem telemetria. Windows e Linux.',
  },
  'strix-pulse-monitor': {
    tagline: 'Um monitor de olhada rápida, sempre em primeiro plano, para toda a sua máquina.',
    summary:
      'Um widget de desktop elegante e sem bordas que flutua sobre o seu trabalho e mostra, ao vivo, o uso de CPU, GPU, RAM e disco, junto com o download e o upload da rede em tempo real — atualizado a cada segundo. Arraste-o para onde quiser, fixe-o no lugar ou recolha-o na área de notificação. Sem acesso próprio à rede, sem telemetria.',
    features: [
      'Carga ao vivo de CPU, GPU, RAM e armazenamento, além da taxa de transferência da rede, uma vez por segundo',
      'Leituras da GPU a partir da NVIDIA, dos contadores de desempenho do Windows ou do sysfs da AMD no Linux',
      'Widget “de vidro” sem bordas que você pode arrastar, fixar ou ocultar na área de notificação',
      'Memoriza a própria posição; as configurações são validadas e gravadas de forma atômica',
    ],
    definition:
      'O Strix Pulse Monitor é um widget de monitoramento do sistema para desktop, gratuito e de código aberto, para Windows e Linux, que mostra ao vivo o uso de CPU, GPU, RAM, disco e rede em um painel “de vidro” sempre em primeiro plano — off-line, sem telemetria.',
    notFor: [
      'Ele não se comunica com nenhum servidor e não coleta dados de uso.',
      'É um monitor ao vivo, de olhada rápida, e não um conjunto de testes de desempenho (veja o Strix Inspector para benchmarks).',
      'Não exige privilégios de administrador para funcionar.',
    ],
    faq: [
      ['Por que a linha da GPU mostra N/A?', 'As GPUs Intel no Linux exigem ferramentas privilegiadas, então o widget mostra N/A em vez de pedir privilégios de root. NVIDIA e AMD são compatíveis de imediato.'],
      ['Ele pode iniciar junto com a minha sessão?', 'Sim — no Windows, adicione um atalho à pasta Inicializar; no Linux, execute o instalador com --autostart.'],
    ],
    seoTitle: 'Strix Pulse Monitor — Widget de CPU/GPU/RAM e rede',
    seoDescription: 'Um widget de desktop elegante, sempre em primeiro plano, que mostra ao vivo o uso de CPU, GPU, RAM, disco e rede. Código aberto, off-line, sem telemetria. Windows e Linux.',
  },
  'strix-sentinel': {
    tagline: 'Saiba o que executa, observa e escuta na sua máquina.',
    summary:
      'Uma sentinela local e off-line que responde a cinco perguntas: o que inicia junto com sua máquina, quais novos processos aparecem, qual aplicativo está usando seu microfone ou câmera, quem fez login e quais dispositivos desconhecidos estão na sua rede. Uma interface gráfica escura e objetiva no Windows; uma CLI programável no Linux. Nada jamais sai do seu computador.',
    features: [
      'Auditoria de inicialização que sinaliza tudo o que é novo desde a sua referência aprovada',
      'Monitoramento em tempo real dos processos recém-iniciados, com os caminhos completos dos executáveis',
      'Detecta qual aplicativo está usando seu microfone ou câmera no momento',
      'Auditoria de logins e um vigia de rede local que sinaliza endereços MAC de dispositivos desconhecidos',
    ],
    definition:
      'O Strix Sentinel é um monitor de segurança gratuito, de código aberto e off-line para Windows e Linux, que audita o que inicia junto com sua máquina, monitora novos processos, detecta o uso do microfone/câmera, audita logins e sinaliza dispositivos desconhecidos na sua rede — sem nenhum tráfego de rede de saída próprio.',
    notFor: [
      'Não é um antivírus nem um EDR — ele revela as mudanças para que você as avalie; nunca coloca em quarentena nem bloqueia.',
      'Ele nunca envia nenhum dado para fora da sua máquina.',
      'A edição para Linux é uma CLI programável por concepção (sem interface gráfica).',
    ],
    faq: [
      ['A auditoria de logins exige privilégios de administrador?', 'Sim — a leitura do log de segurança exige privilégios de administrador no Windows e de root no Linux. Todas as outras verificações são executadas sem privilégios.'],
      ['Existe uma interface gráfica para Linux?', 'A edição para Linux é uma ferramenta de linha de comando enxuta por concepção — funciona sem interface visual e por SSH, o que convém a um monitor de segurança. Ela compartilha o mesmo núcleo de detecção testado da interface gráfica do Windows.'],
    ],
    seoTitle: 'Strix Sentinel — Monitor de segurança e privacidade off-line',
    seoDescription: 'Veja o que inicia e executa, qual aplicativo usa seu microfone/câmera, audite logins e identifique dispositivos desconhecidos na sua rede. Código aberto, off-line. Interface gráfica no Windows e CLI no Linux.',
  },
  'strix-inspector': {
    tagline: 'Um retrato completo e somente leitura do seu hardware — em segundos.',
    summary:
      'Um inventário preciso e somente leitura da sua máquina — sistema operacional, CPU, memória até cada módulo DIMM, GPUs, discos, placa-mãe, BIOS e bateria — apresentado como texto de console, JSON legível por máquina ou um painel HTML autônomo e caprichado. Ele também executa benchmarks rápidos de CPU, memória e disco. Sem rede, sem exigência de elevação de privilégios.',
    features: [
      'Inventário completo: OS, CPU, memória por módulo DIMM, GPUs, discos, placa-mãe, BIOS, bateria',
      'Três formatos de saída: console, JSON e um painel HTML claro/escuro',
      'Micro-benchmarks integrados de CPU, memória e disco',
      'Funciona no Linux via .NET 8, reutilizando o mesmo analisador SMBIOS reforçado do Windows',
    ],
    definition:
      'O Strix Inspector é uma ferramenta de informações de hardware e benchmark gratuita, de código aberto e somente leitura, para Windows e Linux, que inventaria sua CPU, sua RAM por módulo DIMM, sua GPU, seus discos, sua placa-mãe e seu BIOS como texto de console, JSON ou um painel HTML autônomo — sem nenhum acesso à rede.',
    notFor: [
      'É estritamente somente leitura — ele nunca altera configurações, não faz overclock e não regrava firmware.',
      'Não exige a instalação de nenhum runtime no Windows nem elevação de privilégios para funcionar.',
      'Ele não envia nenhum dado para lugar algum.',
    ],
    faq: [
      ['Preciso instalar um runtime?', 'No Windows, ele usa o .NET Framework integrado — nada a instalar. A versão para Linux é distribuída como um binário autônomo.'],
      ['Por que alguns campos exigem privilégios de administrador?', 'Os tamanhos dos discos, os detalhes dos módulos DIMM e as strings do BIOS vêm de interfaces privilegiadas. Sem elevação, a ferramenta funciona mesmo assim e apenas indica o que foi ignorado.'],
    ],
    seoTitle: 'Strix Inspector — Ferramenta de informações de hardware e benchmark',
    seoDescription: 'Inventário de hardware somente leitura (CPU, RAM por módulo DIMM, GPU, discos, BIOS), além de benchmarks — como texto de console, JSON ou um painel HTML. Código aberto. Windows e Linux.',
  },
  'strix-disk-cleaner': {
    tagline: 'Apague um disco para sempre — com uma proteção contra apagar o disco errado.',
    summary:
      'Apague de forma permanente e verificável um disco inteiro segundo as normas NIST SP 800-88 e DoD 5220.22-M — usando o “sanitize” de hardware quando possível, ou a sobregravação de múltiplas passagens. Uma proteção de segurança em várias camadas torna impossível selecionar o disco do sistema, e cada ação destrutiva exige uma confirmação digitada. O Windows vem com uma interface gráfica completa e um certificado de destruição imprimível; o Linux vem com um apagador de linha de comando coberto por testes unitários.',
    features: [
      'Uma proteção em várias camadas: o disco do sistema e qualquer disco montado nunca podem ser selecionados',
      '“Sanitize” de hardware (blkdiscard, nvme, hdparm) ou sobregravação de múltiplas passagens',
      'Confirmação digitando a palavra ERASE, com uma nova verificação imediatamente antes da gravação',
      'Lógica de segurança coberta por testes unitários; um certificado de destruição imprimível no Windows',
    ],
    definition:
      'O Strix Disk Cleaner é um apagador de discos seguro, gratuito e de código aberto, para Windows e Linux, que apaga definitivamente um disco segundo as normas NIST SP 800-88 e DoD 5220.22-M, com uma proteção de segurança em várias camadas que torna impossível apagar o disco do sistema.',
    notFor: [
      'Ele não pode selecionar nem apagar o disco do sistema/de inicialização ou qualquer volume montado — por concepção.',
      'Ele apaga discos inteiros, não arquivos individuais.',
      'Ele não faz nenhuma chamada de rede e não exige nenhuma conta.',
    ],
    faq: [
      ['Posso apagar meu disco do Windows/Linux por acidente?', 'Não. O disco do sistema e o de inicialização são detectados e ocultados; no Linux, qualquer disco montado é recusado. Você ainda precisa digitar o caminho do dispositivo e a palavra ERASE.'],
      ['A sobregravação é suficiente para um SSD?', 'Não de forma confiável — o nivelamento de desgaste da memória flash pode deixar dados para trás. A ferramenta detecta SSDs e o orienta para um “sanitize” de hardware (blkdiscard / nvme), que é completo.'],
    ],
    seoTitle: 'Strix Disk Cleaner — Apagador de discos seguro (NIST/DoD)',
    seoDescription: 'Apague definitivamente um disco segundo as normas NIST SP 800-88 / DoD 5220.22-M, com uma proteção em várias camadas que nunca pode apagar o disco do sistema. Código aberto. Interface gráfica no Windows e CLI no Linux.',
  },
  'strix-vantage': {
    tagline: 'Um único comando executa um pipeline de reconhecimento completo e seguro para WAF no seu laboratório.',
    dangerText: 'O Vantage emite tráfego de varredura ativa (varreduras de portas, fuzzing, sondagens de vulnerabilidades). Use-o SOMENTE contra sistemas que você possui ou está explicitamente autorizado a testar — por exemplo, seu próprio laboratório local propositalmente vulnerável. A varredura não autorizada é ilegal na maioria dos lugares.',
    summary:
      'O Vantage encadeia cerca de 25 ferramentas do Kali, padrão do setor — enumeração de subdomínios, testes de disponibilidade, varreduras de portas e TLS, rastreamento, fuzzing e verificações de vulnerabilidades — em um único comando, com status ao vivo no terminal e um relatório organizado. Ele foi feito para aprimorar suas habilidades de segurança web contra um laboratório local propositalmente vulnerável (ou qualquer alvo que você possua ou esteja autorizado a testar), com um design “low-and-slow” seguro para IDS/WAF e uma interface de terminal opcional.',
    features: [
      'Encadeia cerca de 25 ferramentas (nmap, nuclei, httpx, ffuf, katana, sqlmap, …) em um único pipeline de reconhecimento',
      'Seguro para IDS/WAF por design: taxa reduzida + jitter, em vez de um martelamento mais rápido (perfis furtivo/aprofundado)',
      'Limita a varredura ativa ao seu alvo principal; uma leve impressão digital em todo o resto',
      'Status ao vivo no terminal + um relatório formatado; TUI Textual opcional, com um navegador de histórico',
      'Reforçado: sem shell (apenas argv), e a instalação automática é opcional, com um aviso sobre a cadeia de suprimentos',
    ],
    definition:
      'O Strix Vantage é um pipeline de automação de reconhecimento gratuito e de código aberto para Linux, que encadeia cerca de 25 ferramentas do Kali (nmap, nuclei, httpx, ffuf e outras) em um único comando seguro para WAF, destinado à prática autorizada de testes de invasão contra o seu próprio laboratório propositalmente vulnerável.',
    notFor: [
      'É destinado apenas a alvos autorizados — uma confirmação de consentimento única impõe isso antes de qualquer varredura ativa.',
      'Ele orquestra ferramentas de terceiros; não as empacota nem as modifica.',
      'É exclusivo para Linux/Kali (sem versão para Windows ou macOS).',
    ],
    faq: [
      ['O uso disto é legal?', 'Somente contra sistemas que você possui ou está explicitamente autorizado a testar — como um aplicativo de prática propositalmente vulnerável ou um laboratório de cibersegurança que você controla. A varredura ativa de sistemas que não são seus é ilegal na maioria das jurisdições; você é responsável pelo seu uso.'],
      ['Ele exige o Kali ou privilégios de root?', 'Ele é voltado ao Kali Linux e ao seu conjunto de ferramentas padrão; o sudo habilita as varreduras SYN e o instalador automático (opcional). Ele funciona em outras distribuições Linux quando as ferramentas já estão instaladas.'],
    ],
    creditsNote: 'O Vantage orquestra estas ferramentas de código aberto — não as empacota nem as modifica. Muito obrigado a cada projeto de terceiros.',
    seoTitle: 'Strix Vantage — Automação de reconhecimento para CTFs e laboratórios de pentest',
    seoDescription: 'Encadeie cerca de 25 ferramentas de reconhecimento do Kali (nmap, nuclei, ffuf, httpx…) em um único pipeline seguro para WAF, destinado à prática autorizada de pentest em um laboratório local propositalmente vulnerável. Código aberto.',
  },
  'strix-archer': {
    tagline: 'OSINT passivo para desafios de CTF e alvos de laboratório autorizados.',
    dangerText: 'O Strix Archer realiza coleta de OSINT e exibe uma confirmação de consentimento única. Use-o SOMENTE contra desafios de CTF / personagens fictícios ou alvos que você possui ou está autorizado a testar. Traçar o perfil de pessoas reais sem consentimento pode ser ilegal.',
    summary:
      'O Strix Archer combina um mecanismo OSINT sem dependências, baseado apenas na biblioteca padrão, com wrappers para ferramentas populares — usando Sherlock, maigret, holehe, theHarvester e SpiderFoot quando instalados, e recorrendo à própria implementação quando não estão. Ele faz reconhecimento de domínio (DNS-over-HTTPS, RDAP/WHOIS, subdomínios do crt.sh, impressão digital de HTTP + cabeçalhos de segurança), reconhecimento de identidade (busca de nomes de usuário com limite de taxa, OSINT do GitHub, Gravatar, busca de vazamentos) e uma verificação de senha segura baseada no k-anonimato do HIBP. Uma confirmação de consentimento única o restringe ao uso autorizado em laboratório; tudo é passivo e somente leitura, com um relatório .txt e um relatório HTML escuro.',
    features: [
      'Mecanismo integrado baseado na biblioteca padrão + encapsulamento automático de Sherlock / maigret / holehe / theHarvester / SpiderFoot quando presentes',
      'Domínio: DNS-over-HTTPS, RDAP/WHOIS, subdomínios do crt.sh, HTTP + verificação de cabeçalhos de segurança ausentes',
      'Identidade: busca de nomes de usuário com limite de taxa, OSINT do GitHub (e-mails vazados em commits), Gravatar, busca de vazamentos no XposedOrNot',
      'Verificação segura de comprometimento de senha via k-anonimato do HIBP — a senha nunca sai da sua máquina',
      'Confirmação de consentimento única, com limite de taxa por design; passivo e somente leitura; relatório .txt + relatório HTML escuro',
    ],
    definition:
      'O Strix Archer é uma ferramenta OSINT gratuita e de código aberto para Linux — feita para desafios de CTF e alvos de laboratório autorizados — que realiza reconhecimento passivo de domínio e identidade (DNS/RDAP/crt.sh, busca de nomes de usuário e e-mails, OSINT do GitHub, verificações de vazamentos), além de uma verificação de senha segura baseada no k-anonimato do HIBP.',
    notFor: [
      'É passivo e somente leitura — ele nunca explora nem ataca ativamente um alvo.',
      'É destinado apenas ao uso autorizado — uma confirmação de consentimento única impõe o reconhecimento dos termos.',
      'A verificação de comprometimento de senha nunca envia sua senha (k-anonimato do HIBP).',
    ],
    faq: [
      ['O uso disto é legal?', 'Somente contra desafios de CTF / personagens fictícios ou alvos que você possui ou está explicitamente autorizado a testar. Traçar o perfil de pessoas reais sem consentimento pode constituir assédio e ser ilegal — uma confirmação de consentimento única impõe o reconhecimento dos termos.'],
      ['Preciso instalar alguma coisa?', 'Não — o mecanismo integrado usa apenas a biblioteca padrão do Python. As ferramentas opcionais (Sherlock, holehe, …) são encapsuladas automaticamente se estiverem presentes, e o `--setup` as instala em ambientes pipx isolados, para que o Python do seu sistema permaneça intacto.'],
    ],
    creditsNote: 'O Strix Archer encapsula estas ferramentas de código aberto e serviços públicos — não os empacota nem os modifica. Obrigado a cada projeto e serviço de terceiros.',
    seoTitle: 'Strix Archer — Ferramenta OSINT para CTFs e alvos de laboratório autorizados',
    seoDescription: 'OSINT passivo para alvos de laboratório/CTF autorizados: reconhecimento de domínio (DNS/RDAP/crt.sh), busca de nomes de usuário e e-mails, OSINT do GitHub, verificações de vazamentos e uma verificação de senha segura no HIBP. Código aberto.',
  },
  'strix-sinkhole': {
    tagline: 'Bloqueie rastreadores, telemetria e anúncios no seu arquivo hosts — off-line, reversível, em um clique.',
    summary:
      'O Strix Sinkhole gerencia com segurança o arquivo hosts do seu sistema para redirecionar para 0.0.0.0 os domínios conhecidos de rastreadores, telemetria e anúncios, de modo que uma resolução morra na sua própria máquina antes que qualquer requisição a deixe — sem servidor como o Pi-hole, sem extensão por navegador, sem daemon em segundo plano e sem chamadas de rede próprias. Tudo o que ele grava fica dentro de um bloco com espaço de nomes dedicado, de modo que suas próprias entradas do hosts e os padrões do sistema são copiados byte por byte e nunca são tocados. Uma proteção integrada se recusa a redirecionar para o vazio a infraestrutura crítica (atualização do OS, revogação de certificados/OCSP, sincronização de horário, localhost), não importa o que qualquer lista de bloqueio diga, de modo que ele nunca pode quebrar silenciosamente sua máquina. Cada alteração é precedida de um backup com data e hora e é reversível em um clique, com uma prévia das diferenças em modo de simulação, mostrando exatamente o que vai mudar, e uma lista de permissões para falsos positivos.',
    features: [
      'Redireciona para o vazio os domínios de rastreadores / telemetria / anúncios em todo o sistema por meio do arquivo hosts — off-line, sem servidor, sem extensão',
      'Bloco gerenciado com espaço de nomes dedicado: suas entradas do hosts e as do sistema são preservadas byte por byte (verificadas antes de cada gravação)',
      'Proteção de domínios críticos: atualização do OS, OCSP/CRL, sincronização de horário e localhost nunca podem ser redirecionados para o vazio por nenhuma lista',
      'Backup com data e hora antes de cada gravação + restauração em um clique; prévia das diferenças em modo de simulação; lista de permissões para falsos positivos',
      'Lista inicial curada incluída; importe a sua própria ou opte por uma atualização HTTPS controlada; interface gráfica escura (Windows) + CLI `strixsink` (Linux)',
    ],
    definition:
      'O Strix Sinkhole é um bloqueador de anúncios e rastreadores gratuito, de código aberto e off-line, por arquivo hosts, para Windows e Linux, que redireciona para o vazio os domínios de rastreadores, telemetria e anúncios em todo o sistema — sem servidor como o Pi-hole, sem extensão de navegador e sem encaminhamento de DNS.',
    notFor: [
      'Não é um servidor DNS no estilo do Pi-hole e não encaminha nenhuma das suas requisições para lugar algum.',
      'Não é uma extensão de navegador — ele edita um arquivo hosts em texto simples, auditável e reversível.',
      'Ele bloqueia no nível do arquivo hosts; não criptografa o seu DNS de saída.',
    ],
    faq: [
      ['Em que isso é diferente do Pi-hole ou de uma extensão de navegador?', 'Nenhum servidor separado nem Raspberry Pi (Pi-hole), e não é uma extensão por navegador que pode ela mesma ler sua navegação — o Strix Sinkhole edita um arquivo hosts em texto simples que qualquer usuário técnico pode auditar e reverter. Nada é executado em segundo plano e nada encaminha suas requisições de DNS para lugar algum.'],
      ['Uma lista de bloqueio ruim pode quebrar meu computador?', 'Não. Uma proteção integrada se recusa a redirecionar para o vazio a infraestrutura crítica (atualização do OS, revogação de certificados, sincronização de horário, localhost), independentemente do que uma lista diga; cada alteração recebe um backup primeiro, e um clique restaura o original exato. Observe que ele bloqueia no nível do arquivo hosts e não criptografa o DNS de saída.'],
    ],
    creditsNote: 'O Strix Sinkhole distribui apenas a sua própria pequena lista inicial curada e não empacota estas listas — ele permite que você as importe, cada uma sob sua própria licença. Obrigado ao ecossistema público de listas de bloqueio.',
    seoTitle: 'Strix Sinkhole — Bloqueador de anúncios e rastreadores off-line por arquivo hosts',
    seoDescription: 'Bloqueie rastreadores, telemetria e anúncios em todo o sistema, redirecionando-os para o vazio no seu arquivo hosts — totalmente off-line, sem servidor, sem extensão de navegador. Backups com data e hora, reversão em um clique, nunca quebra domínios críticos. Código aberto, Windows e Linux.',
  },
  'strix-talon': {
    tagline: 'Veja o tráfego de saída de cada aplicativo — e corte o daqueles em que você não confia.',
    summary:
      'O Strix Talon é um mapa ao vivo do tráfego de saída, processo por processo: qual aplicativo está se comunicando com qual endereço e porta remotos, atualizado uma vez por segundo, com os destinos totalmente novos sinalizados assim que aparecem. Sobre essa visibilidade somente leitura há uma camada de regras opcional — “este aplicativo nunca pode acessar a internet”, “bloquear este endereço” e um kill switch global que corta todo o tráfego de saída, exceto o loopback (mantendo, opcionalmente, sua rede local). Fundamentalmente, o Talon não embarca nenhum driver de kernel: cada regra é traduzida para o próprio firewall do sistema operacional — o Firewall do Windows Defender via netsh, o Linux via uma tabela nftables privada — e nomeada de modo que possa ser revertida em um clique, sem jamais tocar em suas regras existentes. Ele também revela os sockets locais em escuta, para que você veja a exposição de entrada e a conversa de saída em uma única visão.',
    features: [
      'Mapa ao vivo de tráfego de saída por aplicativo: aplicativo → IP/porta/estado remotos, atualizado a cada ~2s, novos destinos destacados',
      'Bloqueie um aplicativo (Windows) ou um endereço (todas as plataformas), além de um kill switch global (bloquear todo o tráfego de saída, exceto o loopback)',
      'Aplicado por meio do firewall do seu sistema operacional (Firewall do Windows Defender / nftables) — nenhum driver de kernel para aprovar ou assinar',
      'Cada regra possui um espaço de nomes próprio e é reversível em um clique — o Talon nunca toca nas suas regras de firewall existentes; o loopback nunca é bloqueado',
      'Também vê a exposição de entrada (escuta em 0.0.0.0 vs 127.0.0.1); interface gráfica moderna em PySide6 no Windows + uma CLI `talon` no Linux',
    ],
    definition:
      'O Strix Talon é um firewall de saída por aplicativo e monitor de tráfego de saída, gratuito e de código aberto, para Windows e Linux, que mostra em tempo real qual aplicativo se comunica com qual endereço remoto e permite bloquear qualquer aplicativo ou endereço — ou todo o tráfego de saída — tudo aplicado pelo próprio firewall do seu sistema operacional, sem driver de kernel.',
    notFor: [
      'Ele não embarca nenhum driver de kernel — pilota o firewall integrado do seu sistema operacional (Firewall do Windows Defender / nftables).',
      'Ele não exibe janelas pop-up de permitir/negar conexão ao vivo na v1.',
      'O bloqueio por aplicativo é exclusivo do Windows; no Linux, ele bloqueia por endereço de destino.',
    ],
    faq: [
      ['Em que isso é diferente do Little Snitch ou do GlassWire?', 'O Talon é de código aberto, sem nenhuma telemetria, e funciona no Windows E no Linux (o Little Snitch é exclusivo do macOS e pago; o GlassWire é de código fechado). Fundamentalmente, ele delega a aplicação das regras ao firewall integrado do seu sistema operacional em vez de embarcar um driver de kernel, e cada regra é uma entrada de firewall simples e auditável que você pode inspecionar e reverter.'],
      ['Ele pode me bloquear o acesso à minha própria máquina?', 'Não. O loopback é sempre isento, o kill switch mantém o localhost (e, opcionalmente, sua rede local) acessível, cada regra tem o espaço de nomes StrixTalon-* / reside em uma tabela nftables privada, e um clique (ou `sudo talon revert`) remove tudo o que o Talon adicionou sem tocar nas suas outras regras de firewall. Observação: as janelas pop-up ao vivo de “permitir/negar esta nova conexão” estão fora do escopo da v1; o bloqueio por aplicativo é exclusivo do Windows (no Linux, o bloqueio é por endereço).'],
    ],
    creditsNote: 'O Strix Talon mapeia os sockets com o psutil, constrói sua interface com o PySide6 e aplica as regras por meio do firewall do seu sistema operacional — ele não compartilha nenhum código com o Little Snitch / GlassWire / OpenSnitch; eles são creditados apenas como inspiração.',
    seoTitle: 'Strix Talon — Firewall de saída por aplicativo (Windows e Linux)',
    seoDescription: 'Veja o tráfego de saída de cada aplicativo e bloqueie aquilo em que você não confia — um firewall de saída por aplicativo e monitor de conexões de código aberto para Windows e Linux. Aplicado pelo firewall do seu sistema operacional (sem driver de kernel), com um kill switch global. Sem telemetria, MIT.',
  },
};

export const contribute = {
  h1: 'Crie uma ferramenta. Torne-a parte do Strix.',
  lead:
    'O Strix é uma suíte, não um jardim murado. Se você criou uma ferramenta de privacidade ou segurança de código aberto que vive segundo as mesmas regras — off-line por padrão, zero telemetria, genuinamente auditável — você pode propô-la. Assim que ela passa pela mesma revisão de segurança e pelo mesmo processo de reforço por que passa cada ferramenta do Strix, ela é lançada sob o guarda-chuva do Strix: seu próprio repositório, uma página neste site em 13 idiomas e versões com somas de verificação e atestado.',
  badge: 'Aberto a ferramentas da comunidade',
  ctaTop: 'Envie sua ferramenta',
  updatedLabel: 'Última atualização',
  steps: {
    h2: 'Como funciona',
    sub: 'Quatro passos do seu repositório até uma ferramenta Strix lançada — e você mantém a autoria e os direitos autorais o tempo todo.',
    list: [
      { n: '01', t: 'Crie sua ferramenta', d: 'Escreva-a em qualquer linguagem, para Windows e/ou Linux, sob uma licença compatível com a MIT. Atenda aos critérios abaixo: off-line, sem telemetria, uma única tarefa bem-feita.' },
      { n: '02', t: 'Abra uma proposta', d: 'Registre uma issue de proposta no GitHub com um link para o seu repositório, o que ela faz, as plataformas que ela atende e como ela toca a rede — se é que toca. Não é preciso ter conta conosco; basta o GitHub.' },
      { n: '03', t: 'Revisão de segurança e reforço', d: 'Aplicamos o mesmo crivo que cada ferramenta do Strix passou: análise estática, uma auditoria de dependências e da cadeia de suprimentos, uma revisão de código adversarial e um processo de reforço. Você recebe os achados e nós os resolvemos juntos.' },
      { n: '04', t: 'Ela é lançada como Strix', d: 'Na aceitação, sua ferramenta ganha o próprio repositório sob a organização Strix, uma landing page localizada neste site e versões com somas de verificação SHA-256 e um atestado de proveniência de build.' },
    ],
  },
  criteria: {
    h2: 'O que uma ferramenta Strix precisa ser',
    sub: 'Estes requisitos são inegociáveis — são as promessas sobre as quais toda a suíte é construída. Se a sua ferramenta já vive segundo eles, ela vai se sentir em casa.',
    list: [
      { t: 'Código aberto', d: 'Código-fonte público sob a licença MIT (ou uma licença permissiva compatível com a MIT). Nada escondido, nada ofuscado.' },
      { t: 'Off-line por padrão', d: 'Nenhuma chamada de rede própria para uma ferramenta de desktop. Se a rede for a razão de ser da ferramenta (recon/OSINT), ela precisa ser sem chaves, condicionada ao consentimento e com escopo claramente definido.' },
      { t: 'Zero telemetria', d: 'Nenhum SDK de análise, nenhuma comunicação oculta, nenhuma conta. Os dados do usuário nunca saem da máquina dele.' },
      { t: 'Uma tarefa, bem-feita', d: 'Um utilitário objetivo com padrões sensatos, um escopo claro e uma declaração explícita do que ele deliberadamente não faz.' },
      { t: 'Documentada e testável', d: 'Um README, um SECURITY.md com um modelo de ameaças e testes de regressão para tudo que for crítico para a segurança.' },
      { t: 'Privilégio mínimo', d: 'Sem chamadas a shell, sem execução de código dinâmico, chamadas de subprocesso apenas por argv, resolução de ferramentas por caminho absoluto e elevação de privilégios apenas onde for genuinamente necessária.' },
    ],
  },
  review: {
    h2: 'A revisão de segurança por que passa cada proposta',
    sub: 'O mesmo crivo que as ferramentas existentes superaram antes do lançamento. Nada é lançado enquanto não passar.',
    list: [
      { t: 'Análise estática (SAST)', d: 'semgrep, bandit, PSScriptAnalyzer, os analisadores Roslyn e os linters apropriados para cada linguagem, em todo o código-fonte.' },
      { t: 'Auditoria de dependências e da cadeia de suprimentos', d: 'Versões fixadas, um SBOM, pip-audit / Dependabot e uma verificação de que cada dependência de terceiros se justifica.' },
      { t: 'Revisão de código adversarial', d: 'Uma revisão humana à caça de injeção, path traversal, SSRF, escalonamento de privilégios e qualquer enfraquecimento de um controle de segurança.' },
      { t: 'Reforço', d: 'Fechamos as brechas juntos: privilégio mínimo, sem shell, validação de entrada, padrões fail-closed e defesa em profundidade nos caminhos perigosos.' },
      { t: 'Proveniência em cada versão', d: 'A CI compila cada versão, grava um SHA256SUMS SHA-256 e anexa um atestado de proveniência de build SLSA, de modo que cada download é verificável.' },
    ],
  },
  keep: {
    h2: 'O que você mantém — e o que você ganha',
    sub: 'Contribuir para o Strix não significa abrir mão do seu trabalho.',
    list: [
      { t: 'Sua autoria e seus direitos autorais', d: 'Você continua sendo o autor. Os direitos autorais MIT são seus; o Strix o distribui e o comantém junto com você.' },
      { t: 'Um público de verdade', d: 'Uma landing page localizada em 13 idiomas, a estrutura de SEO/GEO e um lugar na grade de ferramentas e nos downloads.' },
      { t: 'Um pipeline de lançamento confiável', d: 'Somas de verificação, atestado, um eventual caminho de assinatura de código (SignPath Foundation) e um processo de divulgação de segurança — montados para você.' },
      { t: 'Comanutenção', d: 'Issues, PRs e relatos de segurança seguem o mesmo processo do restante da suíte. Você não fica por conta própria.' },
    ],
  },
  cta: {
    h2: 'Pronto para enviar?',
    p: 'Abra uma issue de proposta com o link do seu repositório e uma breve descrição. Nós a acolheremos, faremos a revisão e trabalharemos com você a partir daí. Ainda não está pronto? Leia primeiro o guia completo de contribuição.',
    btnSubmit: 'Envie sua ferramenta',
    btnGuide: 'Leia o guia de contribuição',
    note: 'Para enviar, basta uma conta do GitHub. Não há taxa, nenhum acordo de contribuidor que tome seus direitos e nenhuma obrigação — você pode desistir a qualquer momento antes do lançamento.',
  },
  faq: [
    ['Eu perco a propriedade da minha ferramenta?', 'Não. Você mantém a autoria e os direitos autorais MIT. O Strix a comantém e a distribui junto com você, e você pode desistir antes do lançamento.'],
    ['Quais linguagens ou frameworks são permitidos?', 'Qualquer um. A suíte existente abrange Python, C#, PowerShell e mais — o que importa é a licença, as regras de off-line/sem telemetria e a aprovação na revisão de segurança, não a tecnologia.'],
    ['E se minha ferramenta precisar da rede?', 'Tudo bem, mas somente se a rede for a sua verdadeira finalidade (como nas ferramentas de recon/OSINT). Nesse caso, ela precisa ser sem chaves, condicionada a um consentimento explícito, com escopo claramente definido e de uso autorizado apenas — nunca tráfego silencioso ou em segundo plano.'],
    ['Quanto tempo leva a revisão?', 'Depende do tamanho da ferramenta e de quantos achados aparecem. Ferramentas pequenas e já reforçadas avançam rápido; qualquer coisa que toque operações destrutivas ou elevação de privilégios recebe um escrutínio extra.'],
    ['O que acontece se ela não passar?', 'Você recebe os achados completos e pode corrigi-los e enviar de novo. Uma revisão que encontra problemas é o processo funcionando — o mesmo aconteceu com as ferramentas que já estão na suíte.'],
  ],
};

export const donate = {
  h1: 'Apoie o Strix — com privacidade.',
  lead:
    'O Strix é gratuito, licenciado sob MIT e não carrega nenhuma telemetria — e sempre será assim. Sem anúncios, sem contas, nada à venda. Se as ferramentas economizam seu tempo ou o mantêm mais seguro, você pode contribuir com Monero (XMR): privado por concepção, exatamente como tudo por aqui. Cada centavo vai para hospedagem, um certificado de assinatura de código e tempo de desenvolvimento.',
  badge: 'Doações que respeitam a privacidade',
  updatedLabel: 'Última atualização',
  card: {
    label: 'Endereço Monero (XMR)',
    scanHint: 'Escaneie o QR com sua carteira ou copie o endereço abaixo.',
    copy: 'Copiar endereço',
    copied: 'Copiado ✓',
    openWallet: 'Abrir na carteira',
    qrPending: 'Um QR code aparece aqui assim que o endereço de doação for configurado.',
    notConfigured: 'O endereço de doação ainda não foi definido — volte em breve.',
  },
  why: {
    h2: 'Por que Monero?',
    sub: 'Porque um projeto de privacidade não deveria pedir que você abra mão da sua privacidade para apoiá-lo.',
    list: [
      { t: 'Privado por padrão', d: 'O Monero oculta o remetente, o destinatário e o valor. Não há registro público que ligue uma doação a você — algo à altura de uma suíte construída sobre o princípio de não rastrear você.' },
      { t: 'Sem intermediários, sem contas', d: 'Sem processador de pagamentos, sem cadastro e sem nenhum script de terceiros nesta página. O endereço é tudo de que você precisa.' },
      { t: 'Nada é rastreado aqui', d: 'Esta página não carrega nenhuma análise e não faz nenhuma chamada de rede. Não temos como ver quem a visitou nem quem doou.' },
    ],
  },
  funds: {
    h2: 'Para onde vai',
    sub: 'Um projeto pequeno, independente e sem orçamento. Cada contribuição é gasta de forma transparente:',
    list: [
      { t: 'Hospedagem e infraestrutura', d: 'Manter o site, as versões e as somas de verificação on-line e rápidos.' },
      { t: 'Certificado de assinatura de código', d: 'Um certificado OV/EV para que os instaladores parem de disparar o SmartScreen — a melhoria mais pedida de todas.' },
      { t: 'Tempo de desenvolvimento', d: 'Novas ferramentas, versões para Linux, reforço de segurança e manter tudo gratuito e livre de telemetria.' },
    ],
  },
  otherWays: {
    h2: 'Outras formas de ajudar',
    sub: 'Não pode doar? Estas ajudam tanto quanto — e não custam nada.',
    list: [
      { t: 'Dê uma estrela aos repositórios no GitHub', d: 'Visibilidade e reputação realmente ajudam novos usuários a encontrar as ferramentas e a confiar nelas.' },
      { t: 'Contribua com uma ferramenta', d: 'Crie algo que se encaixe na suíte e envie para a revisão de segurança.' },
      { t: 'Relate bugs e falsos positivos', d: 'Registre issues, relate os falsos positivos do antivírus aos fornecedores e ajude outras pessoas nas discussões.' },
    ],
  },
  note: 'As doações são presentes voluntários, não compras — não há reembolso, nota fiscal nem recibo para fins fiscais. Por favor, doe apenas o que puder dispensar com tranquilidade. Obrigado por manter vivo um software independente que coloca a privacidade em primeiro lugar.',
};

export const about = {
  h1: 'Sobre o Strix',
  lead:
    'Somos um pequeno grupo independente de quatro amigos — estudantes de ciência da computação na Alemanha — que se cansaram de ferramentas de “privacidade” que não dá para inspecionar de verdade. O Strix nasceu disso: uma suíte de utilitários de privacidade e segurança que funcionam totalmente off-line, não embarcam nenhuma telemetria e pertencem a você — para ler, compilar e aprovar. Sob licença MIT, gratuitos para sempre, sem nenhuma empresa por trás e nada a vender.',
  badge: 'Independente · código aberto',
  updatedLabel: 'Última atualização',
  values: {
    h2: 'No que acreditamos',
    list: [
      { t: 'Verifique, não apenas confie', d: 'Cada ferramenta é de código aberto e público, sob licença MIT, com um modelo de ameaças. Não acredite apenas na nossa palavra — leia, compile e confira você mesmo.' },
      { t: 'Ferramentas de privacidade não podem espionar você', d: 'Nenhuma telemetria, nenhuma conta, nenhuma análise de dados — nem mesmo neste site. Seus dados nunca saem da sua máquina.' },
      { t: 'Off-line por padrão', d: 'As ferramentas de desktop não fazem nenhuma chamada de rede por conta própria. Desconecte o cabo e elas continuam funcionando.' },
      { t: 'Gratuitas, para sempre', d: 'Sem planos pagos, sem assinaturas, sem anúncios. Se um dia aceitarmos doações ou subsídios, isso jamais mudará essas promessas.' },
    ],
  },
  story: {
    h2: 'Por que fazemos isso',
    p1: 'Queríamos que as ferramentas que nós mesmos usamos fossem honestas: sem caixas-pretas, sem “confie em nós”, sem coleta de dados silenciosa. A maior parte do que precisávamos ou não existia como código aberto, ou não era multiplataforma, ou nos pedia para abrir mão da nossa privacidade para protegê-la. Então começamos a construir — uma ferramenta pequena, objetiva e auditável de cada vez.',
    p2: 'O Strix é um projeto paralelo com o qual nos importamos, mantido nas horas vagas. Ele sempre será aberto e sempre será honesto sobre o que é — inclusive sobre onde deixa a desejar (os instaladores ainda não têm assinatura digital, e dizemos isso com clareza na página de Verificação).',
  },
  cta: {
    h2: 'Participe',
    p: 'O Strix é aberto a todos. Leia o código-fonte, relate um bug, sugira uma ferramenta ou envie a sua própria para revisão de segurança. Se ele te ajuda, uma estrela no GitHub ajuda de verdade outras pessoas a encontrá-lo.',
    btnGithub: 'Ver no GitHub',
    btnContribute: 'Contribuir com uma ferramenta',
  },
};

export const alternatives = {
  h1: 'Alternativas de código aberto',
  lead:
    'Já usa uma ferramenta de privacidade proprietária ou paga? É bem provável que o Strix tenha uma substituta de código aberto, off-line e sem nenhuma telemetria — gratuita para sempre, sob licença MIT e sua para auditar. Veja o que corresponde a quê.',
  badge: 'Substitutas livres e abertas',
  updatedLabel: 'Última atualização',
  altToLabel: 'Alternativa de código aberto para',
  viewTool: 'Ver ferramenta →',
  ctaLead: 'Não encontrou uma correspondência?',
  ctaText: 'Explore a suíte completa de ferramentas ou sugira uma ferramenta que devemos criar.',
  ctaAll: 'Todas as ferramentas',
  ctaSuggest: 'Sugerir uma ferramenta',
};

export default { ui, categories, security, apps, contribute, donate, about, alternatives };
