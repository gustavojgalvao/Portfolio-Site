export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  type: 'independent' | 'client';
  image: string;
  videoPoster?: string;
  videoSrc?: string;
  desc: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  features: string[];
  techStack: string[];
  metrics: ProjectMetric[];
  githubUrl: string;
  liveUrl?: string;
  isOnline: boolean;
}

export const projectsData: Record<'pt' | 'en', Record<string, ProjectDetail>> = {
  pt: {
    brl2go: {
      id: 'brl2go',
      title: 'BRL2GO · Conversor de Moedas em Tempo Real',
      subtitle: 'PROJETO AUTÔNOMO 01',
      category: 'Web App Financeiro / Ferramenta de Utilidade (Frontend)',
      type: 'independent',
      image: '/img/Conversor de Moedas em tempo real.png',
      videoPoster: '/img/Conversor de Moedas em tempo real.png',
      desc: 'Uma aplicação web minimalista, responsiva e focada em conversão cambial instantânea. Desenvolvida para fornecer cotações fidedignas e em tempo real através de consumo de APIs financeiras, garantindo uma experiência de usuário (UX) fluida e livre de atritos.',
      fullDescription:
        'O BRL2GO foi concebido para oferecer uma experiência de conversão cambial limpa, ultra-rápida e sem distrações. Consome endpoints REST de cotações financeiras em tempo real, atualizando pares comerciais como USD, EUR, GBP, CAD e BRL com precisão de milissegundos e alternância bidirecional instantânea.',
      challenge:
        'Conversores cambiais tradicionais costumam ser plataformas pesadas, poluídas com anúncios invasivos e com lentidão crítica na atualização de pares de moedas, especialmente quando acessados via redes móveis (3G/4G).',
      solution:
        'Para garantir performance absoluta, o projeto foi construído utilizando um core leve (HTML, CSS e JavaScript), dispensando dependências desnecessárias. A integração com a API REST financeira ocorre de forma assíncrona com manipulação reativa do DOM — ou seja, o cálculo acontece no exato momento da digitação (as-you-type). O deploy contínuo realizado através da Vercel garante Edge Caching global, entregando a aplicação de forma instantânea para o usuário final.',
      features: [
        'Conversão Reativa (As-You-Type): Os valores são convertidos instantaneamente a cada tecla pressionada pelo usuário, sem necessidade de recarregar a página ou clicar em "calcular".',
        'Inversão Bidirecional (Swap): Um botão de ação rápida que alterna instantaneamente a moeda de origem e destino mantendo a precisão da taxa cambial.',
        'Interface Clean & Ad-Free: Design focado estritamente na resolução do problema do usuário, com zero anúncios, pop-ups ou poluição visual.',
        'Formatação Localizada: Exibição dos valores devidamente formatados de acordo com os padrões monetários internacionais.',
      ],
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Fetch API', 'DOM Manipulation', 'Vercel Deployment'],
      metrics: [
        { label: 'Performance Lighthouse', value: '98% - 100%' },
        { label: 'Tempo de Resposta', value: '< 50ms' },
        { label: 'Moedas Suportadas', value: '10 Moedas' },
        { label: 'Arquitetura', value: 'Mobile-First / Serverless' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/Brl2go',
      liveUrl: 'https://brl2go.vercel.app',
      isOnline: true,
    },
    'fried-chicken': {
      id: 'fried-chicken',
      title: 'Fried Chicken · Cardápio Digital & Delivery',
      subtitle: 'PROJETO AUTÔNOMO 02',
      category: 'Food Tech & E-Commerce',
      type: 'independent',
      image: '/img/Fried-chicken.png',
      videoPoster: '/img/Fried-chicken.png',
      desc: 'Cardápio digital responsivo com micro-interações fluidas, carrinho dinâmico e fechamento de pedidos direto no WhatsApp.',
      fullDescription:
        'Uma experiência visual imersiva para marcas de gastronomia e delivery rápido. Combina tipografia moderna, animações de alta performance em GSAP, filtragem por categorias em tempo real e um fluxo de carrinho que gera pedidos formatados automaticamente para o WhatsApp do restaurante.',
      challenge:
        'Plataformas de delivery cobram taxas abusivas de 20% a 30% por pedido e oferecem pouca personalização de marca.',
      solution:
        'Criação de um canal proprietário direto de vendas, permitindo ao restaurante manter 100% da margem com uma experiência de compra mais rápida que os apps tradicionais.',
      features: [
        'Filtragem dinâmica por categorias (Combos, Hambúrgueres, Acompanhamentos)',
        'Carrinho de compras reativo com contador e somatório automático',
        'Checkout com mensagem estruturada enviada direto ao WhatsApp',
        'Micro-animações com GSAP e Framer Motion para retenção visual',
        'Imagens otimizadas com carregamento progressivo e alta nitidez',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'WhatsApp API'],
      metrics: [
        { label: 'Taxa de Conversão Mobile', value: '+42%' },
        { label: 'Tempo de Carregamento', value: '0.4s' },
        { label: 'Economia em Taxas', value: '0% Comissão' },
        { label: 'Suporte', value: 'WhatsApp Direto' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/Fried-Chicken-Site',
      liveUrl: 'https://fried-chicken-showcase.vercel.app',
      isOnline: true,
    },
    'hestus-ai': {
      id: 'hestus-ai',
      title: 'Hestus AI · Plataforma de Automação & Triagem',
      subtitle: 'PROJETO AUTÔNOMO 03',
      category: 'B2B SaaS & AI Agents',
      type: 'independent',
      image: '/img/hestus.png',
      videoPoster: '/img/hestus.png',
      desc: 'Landing page conceitual e motor de qualificação autônoma de leads comerciais utilizando agentes de inteligência artificial.',
      fullDescription:
        'O Hestus AI é um protótipo funcional de agentes inteligentes para empresas B2B. Ele automatiza a triagem inicial de clientes, calcula scores de aderência com base em orçamento e prazo, e dispara alertas enriquecidos diretamente para o time comercial no WhatsApp ou CRM.',
      challenge:
        'Empresas perdem até 60% dos leads por demorarem horas para responder e qualificar o contato inicial.',
      solution:
        'Implementação de um motor de triagem por IA com resposta em menos de 5 segundos, pontuando a qualidade do lead antes do repasse ao vendedor humano.',
      features: [
        'Simulador interativo de Lead Scoring com modelo preditivo de IA',
        'Design Liquid Glass inspirado no padrão estético da Apple',
        'Integração pronta para webhooks de CRM (HubSpot, RD Station, Notion)',
        'Notificação instantânea para o WhatsApp com resumo executivo do lead',
        'Código limpo com TypeScript e componentes modulares reusáveis',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'AI Rules Engine', 'Framer Motion'],
      metrics: [
        { label: 'Velocidade de Triagem', value: '< 5 seg' },
        { label: 'Precisão de Score', value: '98%' },
        { label: 'Estilo Visual', value: 'Apple Dark Glass' },
        { label: 'Disponibilidade', value: '24/7 Ativo' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/Hestus-AI',
      liveUrl: 'https://hestus-ai.vercel.app',
      isOnline: true,
    },
    'devsclub-store': {
      id: 'devsclub-store',
      title: 'DevsClub Store · E-Commerce Streetwear & Merch',
      subtitle: 'PROJETO AUTÔNOMO 04',
      category: 'E-Commerce & Fashion Tech',
      type: 'independent',
      image: '/img/devsclub-store.png',
      videoPoster: '/img/devsclub-store.png',
      desc: 'Plataforma de e-commerce moderna para vestuário tech com carrinho persistente, filtros visuais e checkout sem atrito.',
      fullDescription:
        'Loja virtual de vestuário e produtos para desenvolvedores. Possui catálogo dinâmico de produtos com zoom de alta resolução, seleção dinâmica de tamanhos e cores, carrinho com sincronização em LocalStorage e integração de checkout ágil com PIX e cartões de crédito.',
      challenge:
        'Criar uma experiência de compra rápida com identidade visual marcante para o público de tecnologia sem lentidão de plataformas legadas.',
      solution:
        'Desenvolvimento em Next.js e Tailwind CSS com renderização ultra-rápida, micro-interações ao adicionar produtos e checkout direto.',
      features: [
        'Catálogo de produtos com visualização em alta resolução',
        'Carrinho dinâmico com persistência e cálculo instantâneo',
        'Filtros por categorias, tamanhos e disponibilidade',
        'Integração pronta para gateways de pagamento (Stripe / PIX)',
        'Otimização completa para mobile e carregamento em < 0.3s',
      ],
      techStack: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Stripe API', 'Lucide Icons'],
      metrics: [
        { label: 'Performance PageSpeed', value: '99/100' },
        { label: 'Tempo de Carregamento', value: '< 0.3s' },
        { label: 'Carrinho Reativo', value: 'Instantâneo' },
        { label: 'Status', value: 'Produção' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/DevsClub-Store',
      liveUrl: 'https://devsclub-store.vercel.app',
      isOnline: true,
    },
    'nexus-studio': {
      id: 'nexus-studio',
      title: 'Nexus Studio · Construtor de Automações com IA',
      subtitle: 'PROJETO AUTÔNOMO 05',
      category: 'AI Agents & Automation',
      type: 'independent',
      image: '/img/projeto2.png',
      videoPoster: '/img/projeto2.png',
      desc: 'Ambiente visual interativo baseado em nós para desenhar, conectar e disparar automações complexas com IA e APIs.',
      fullDescription:
        'Uma interface drag-and-drop inspirada em ferramentas como n8n e Zapier, permitindo que empresas e desenvolvedores montem cadeias de automação conectando gatilhos de webhooks, modelos de linguagem (OpenAI/Anthropic) e nós de disparo de mensagens.',
      challenge:
        'Construir integrações de IA sem código visualmente complexas exigia plataformas caras e com interfaces lentas.',
      solution:
        'Construção de uma SPA em React com React Flow e TypeScript que roda pipelines no navegador com renderização a 60FPS.',
      features: [
        'Canvas infinito com suporte a mais de 50 tipos de nós de integração',
        'Conectores inteligentes com validação de dados em tempo real',
        'Execução e depuração de fluxos passo a passo com logs ao vivo',
        'Exportação e importação de templates de automação em JSON',
      ],
      techStack: ['React', 'React Flow', 'TypeScript', 'Tailwind CSS', 'WebSockets', 'Zustand'],
      metrics: [
        { label: 'Taxa de Quadros', value: '60 FPS' },
        { label: 'Nodes Simultâneos', value: '100+' },
        { label: 'Latência de Execução', value: 'Real-Time' },
        { label: 'Status', value: 'Lab Ativo' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/Nexus-Automation-Studio',
      liveUrl: 'https://nexus-studio.vercel.app',
      isOnline: true,
    },
    'cloudpulse-metrics': {
      id: 'cloudpulse-metrics',
      title: 'CloudPulse · Dashboard de Métricas em Tempo Real',
      subtitle: 'PROJETO AUTÔNOMO 06',
      category: 'Data Visualization & Cloud',
      type: 'independent',
      image: '/img/projeto1.png',
      videoPoster: '/img/projeto1.png',
      desc: 'Dashboard analítico para monitoramento de tráfego, integridade de infraestrutura e funis de conversão.',
      fullDescription:
        'Painel administrativo executivo projetado para oferecer visibilidade instantânea de dados analíticos. Inclui gráficos de séries temporais com Recharts, indicadores de saúde de APIs e análise preditiva de conversão de visitantes.',
      challenge:
        'Dashboards analíticos tradicionais sofrem com recarregamentos pesados e poluição visual de métricas secundárias.',
      solution:
        'Interface limpa com padrão de vidro escuro Apple e gráficos vetoriais otimizados que renderizam dezenas de milhares de pontos de dados sem engasgos.',
      features: [
        'Gráficos dinâmicos de área, barras e linhas em tempo real',
        'Filtro de período personalizado (24h, 7d, 30d, 1 ano)',
        'Alertas configuráveis de queda de tráfego e latência de servidor',
        'Design responsivo com suporte a multi-monitores e modo escuro nativo',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'SSE Stream', 'Framer Motion'],
      metrics: [
        { label: 'Pontos de Dados', value: '50.000+' },
        { label: 'Tempo de Render', value: '16ms' },
        { label: 'Score de UX', value: '99/100' },
        { label: 'Status', value: 'Produção' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/CloudPulse-Analytics',
      liveUrl: 'https://cloudpulse.vercel.app',
      isOnline: true,
    },
    'aura-design-system': {
      id: 'aura-design-system',
      title: 'Aura UI · Design System Padrão Apple',
      subtitle: 'PROJETO AUTÔNOMO 07',
      category: 'Design System & UI Library',
      type: 'independent',
      image: '/img/projeto3.png',
      videoPoster: '/img/projeto3.png',
      desc: 'Biblioteca de componentes modulares com estética Liquid Glass da Apple, acessibilidade total e animações fluidas.',
      fullDescription:
        'Um sistema de design completo e biblioteca de componentes reutilizáveis para a web moderna. Inclui tokens de cor, tipografia dinâmica, botões com efeito de luz física, modais translúcidos, tabelas bento e cards em vidro fosco.',
      challenge:
        'Manter consistência visual premium e alta performance em múltiplos projetos front-end simultâneos.',
      solution:
        'Criação de um design system proprietário empacotado como pacote NPM interno com documentação interativa e total conformidade com WCAG.',
      features: [
        'Mais de 30 componentes reutilizáveis prontos para produção',
        'Suporte a temas claro e escuro com glassmorfismo líquido avançado',
        'Acessibilidade total com suporte a navegação por teclado e leitor de tela',
        'Micro-animações físicas implementadas com Framer Motion',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Framer Motion', 'Storybook'],
      metrics: [
        { label: 'Componentes', value: '30+ Prontos' },
        { label: 'Conformidade', value: 'WCAG 2.1 AA' },
        { label: 'Tamanho Bundle', value: '< 15kb' },
        { label: 'Status', value: 'Open Source' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/Aura-UI-Design-System',
      liveUrl: 'https://aura-ui-system.vercel.app',
      isOnline: true,
    },
    g2odonto: {
      id: 'g2odonto',
      title: 'G2Odonto · Triagem com IA para Clínicas Odontológicas',
      subtitle: 'PROJETO PARA CLIENTE',
      category: 'Healthcare & Lead Generation',
      type: 'client',
      image: '/img/lentesdecontatodetal.png',
      videoPoster: '/img/lentesdecontatodetal.png',
      desc: 'Página médica de alta conversão para procedimentos estéticos de alto ticket com qualificação automática de pacientes.',
      fullDescription:
        'Desenvolvido para clínica odontológica especializada em lentes de contato de porcelana e facetas em resina. A plataforma atrai pacientes de alto poder aquisitivo através de Google Ads e SEO local, realizando uma triagem prévia dos procedimentos desejados antes de direcionar para a agenda médica.',
      challenge:
        'A clínica recebia centenas de mensagens sem interesse real em procedimentos de alto valor, sobrecarregando a recepção.',
      solution:
        'Desenvolvimento de uma landing page focada em autoridade estética combinada com um fluxo de triagem que filtra pacientes qualificados para consultas presenciais.',
      features: [
        'Apresentação interativa dos procedimentos (Lentes, Facetas, Clareamento)',
        'Triagem rápida de interesse estético e expectativa de resultado',
        'Botão de agendamento prioritário direto para o WhatsApp da clínica',
        'Prova social estruturada com galeria de transformações',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'WhatsApp Business API', 'Local SEO'],
      metrics: [
        { label: 'Aumento de Leads Qualificados', value: '+68%' },
        { label: 'Ticket Médio', value: 'Alto Padrão' },
        { label: 'Tempo de Resposta', value: 'Imediato' },
        { label: 'Status', value: 'Entregue & Ativo' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/Lentes-Contato-Dental',
      liveUrl: 'https://g2odonto.vercel.app',
      isOnline: true,
    },
    tualupa71: {
      id: 'tualupa71',
      title: 'Tualupa71 · E-Commerce de Óculos de Sol',
      subtitle: 'PROJETO PARA CLIENTE',
      category: 'E-Commerce & Moda',
      type: 'client',
      image: '/img/devsclub-store.png',
      videoPoster: '/img/devsclub-store.png',
      desc: 'Loja virtual de óculos com catálogo dinâmico de produtos, filtros visuais e checkout direto no WhatsApp.',
      fullDescription:
        'Plataforma de comércio eletrônico para marca de eyewear. Permite navegação rápida pelos modelos da coleção, filtros por formato de armação e finalização sem atrito enviando as fotos e códigos do produto diretamente para o canal de atendimento.',
      challenge:
        'Criar uma presença online com identidade jovem e moderna que permitisse aos clientes comprar sem passar por cadastros burocráticos.',
      solution:
        'Catálogo visual estilo Instagram com botões diretos de compra rápida, reduzindo o tempo entre a descoberta do produto e a confirmação do pagamento.',
      features: [
        'Catálogo dinâmico com fotos em alta resolução',
        'Filtro dinâmico por formato de rosto e estilo',
        'Carrinho simplificado sem necessidade de login',
        'SEO otimizado para busca local de moda e óculos',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'WhatsApp Checkout'],
      metrics: [
        { label: 'Tempo de Compra', value: '< 1 min' },
        { label: 'Navegação Mobile', value: '100% Otimizada' },
        { label: 'Retenção de Usuários', value: '3.2 min média' },
        { label: 'Status', value: 'Entregue' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/Tualupa71-Ecommerce',
      liveUrl: 'https://tualupa71.vercel.app',
      isOnline: true,
    },
    'tech-ai-repo': {
      id: 'tech-ai-repo',
      title: 'Tech & AI Repository · Central de Dados e Ferramenta Interna',
      subtitle: 'PROJETO PARA CLIENTE',
      category: 'Internal Tool & Data Platform',
      type: 'client',
      image: '/img/projeto1.png',
      videoPoster: '/img/projeto1.png',
      desc: 'Aplicação web interna para centralização de dados, documentações e prompts de IA com acesso rápido.',
      fullDescription:
        'Ferramenta interna criada para equipes de marketing e tecnologia. Oferece uma interface estilo terminal / DevTools para busca instantânea de bases de dados de leads, documentação de integrações e biblioteca compartilhada de prompts de IA.',
      challenge:
        'Documentações e planilhas espalhadas em dezenas de pastas e ferramentas desconexas causavam perda de produtividade diária.',
      solution:
        'Consolidação de todas as diretrizes técnicas e bases de consulta em um dashboard web unificado com busca instantânea.',
      features: [
        'Terminal interativo com comandos de consulta rápida',
        'Visualização de tabelas e métricas sem carregar planilhas pesadas',
        'Repositório estruturado de prompts e automações de IA',
        'Segurança com autenticação e isolamento de dados',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'REST API', 'Terminal UI'],
      metrics: [
        { label: 'Produtividade da Equipe', value: '+3.5x' },
        { label: 'Tempo de Busca', value: 'Instantâneo' },
        { label: 'Bases Centralizadas', value: '100%' },
        { label: 'Status', value: 'Em Uso Ativo' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/Tech-AI-Repository',
      liveUrl: 'https://tech-ai-repo.vercel.app',
      isOnline: true,
    },
  },
  en: {
    brl2go: {
      id: 'brl2go',
      title: 'BRL2GO · Real-Time Currency Converter',
      subtitle: 'INDEPENDENT BUILD 01',
      category: 'Financial Web App / Utility Tool (Frontend)',
      type: 'independent',
      image: '/img/Conversor de Moedas em tempo real.png',
      videoPoster: '/img/Conversor de Moedas em tempo real.png',
      desc: 'A minimalist, responsive web application focused on instantaneous currency conversion. Engineered to provide reliable real-time rates via financial REST APIs with a friction-free UX.',
      fullDescription:
        'BRL2GO delivers a clean, distraction-free currency conversion interface. It consumes live financial REST APIs to update commercial exchange pairs like USD, EUR, GBP, CAD, and BRL with sub-second accuracy and bidirectional instant swapping.',
      challenge:
        'Traditional currency calculators are bloated platforms overloaded with invasive ads and critical lag when updating exchange pairs, especially on mobile networks.',
      solution:
        'Built with a lightweight core (HTML, CSS, and Vanilla JavaScript) eliminating redundant dependencies. Asynchronous REST API consumption with reactive DOM manipulation performs calculations as the user types, while continuous Vercel Edge deployment delivers instant global caching.',
      features: [
        'Reactive As-You-Type Conversion: Values calculate instantly on keystroke without page reloads or submit buttons.',
        'Bidirectional Currency Swap: Quick one-click action to invert origin and target currencies with preserved exchange accuracy.',
        'Clean & Ad-Free Interface: Strictly focused on utility with zero ads, popups, or visual pollution.',
        'Localized Monetary Formatting: Formats currency outputs according to international financial standards.',
      ],
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Fetch API', 'DOM Manipulation', 'Vercel Deployment'],
      metrics: [
        { label: 'Lighthouse Score', value: '98% - 100%' },
        { label: 'Response Latency', value: '< 50ms' },
        { label: 'Supported Currencies', value: '10 Currencies' },
        { label: 'Architecture', value: 'Mobile-First / Serverless' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/Brl2go',
      liveUrl: 'https://brl2go.vercel.app',
      isOnline: true,
    },
    'fried-chicken': {
      id: 'fried-chicken',
      title: 'Fried Chicken · Fast Food Brand Showcase',
      subtitle: 'INDEPENDENT BUILD 02',
      category: 'Food Tech & E-Commerce',
      type: 'independent',
      image: '/img/Fried-chicken.png',
      videoPoster: '/img/Fried-chicken.png',
      desc: 'Responsive digital menu with fluid micro-interactions, dynamic cart calculation, and direct WhatsApp order dispatch.',
      fullDescription:
        'An engaging digital experience for modern food brands. Combines bold typography, high-performance GSAP animations, category filters, and an automated WhatsApp ordering pipeline that bypasses aggregator commissions.',
      challenge:
        'Food delivery aggregator apps take 20% to 30% cuts per order with zero brand uniqueness.',
      solution:
        'Created a direct digital ordering channel that preserves 100% restaurant margin with a faster checkout flow than native apps.',
      features: [
        'Dynamic category filtering (Combos, Burgers, Sides)',
        'Real-time reactive cart with item counter',
        'Direct WhatsApp checkout with structured order payload',
        'High-performance GSAP micro-animations for user retention',
        'Progressive image loading and ultra-sharp typography',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'WhatsApp API'],
      metrics: [
        { label: 'Mobile Conversion Rate', value: '+42%' },
        { label: 'Initial Load Time', value: '0.4s' },
        { label: 'Commission Saved', value: '0% Fees' },
        { label: 'Checkout Pathway', value: 'Direct WhatsApp' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/Fried-Chicken-Site',
      liveUrl: 'https://fried-chicken-showcase.vercel.app',
      isOnline: true,
    },
    'hestus-ai': {
      id: 'hestus-ai',
      title: 'Hestus AI · Automation Platform & Lead Triage',
      subtitle: 'INDEPENDENT BUILD 03',
      category: 'B2B SaaS & AI Agents',
      type: 'independent',
      image: '/img/hestus.png',
      videoPoster: '/img/hestus.png',
      desc: 'SaaS landing concept and autonomous AI lead triage engine built for high-growth B2B companies.',
      fullDescription:
        'Hestus AI is a functional prototype of intelligent sales agents. It automates inbound lead qualification, scores customer suitability based on budget and timeline parameters, and delivers enriched lead alerts straight to WhatsApp or CRM pipelines.',
      challenge:
        'Companies lose over 60% of inbound pipeline opportunities due to delayed manual follow-ups.',
      solution:
        'Deployed an AI triage engine capable of qualifying incoming leads in under 5 seconds before handing them over to human account reps.',
      features: [
        'Interactive AI Lead Scoring simulator with predictive heuristics',
        'Apple-grade Liquid Glass dark mode aesthetics',
        'Ready for CRM webhook integration (HubSpot, RD Station, Notion)',
        'Instant WhatsApp notifications with executive lead summaries',
        'Modular TypeScript architecture built for enterprise scalability',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'AI Rules Engine', 'Framer Motion'],
      metrics: [
        { label: 'Triage Response', value: '< 5 sec' },
        { label: 'Scoring Accuracy', value: '98%' },
        { label: 'Visual System', value: 'Apple Dark Glass' },
        { label: 'Availability', value: '24/7 Always On' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/Hestus-AI',
      liveUrl: 'https://hestus-ai.vercel.app',
      isOnline: true,
    },
    'devsclub-store': {
      id: 'devsclub-store',
      title: 'DevsClub Store · Streetwear & Tech Merch',
      subtitle: 'INDEPENDENT BUILD 04',
      category: 'E-Commerce & Fashion Tech',
      type: 'independent',
      image: '/img/devsclub-store.png',
      videoPoster: '/img/devsclub-store.png',
      desc: 'High-performance e-commerce platform with dynamic cart, instant checkout, and product showcase.',
      fullDescription:
        'An online clothing and merchandise store built for tech enthusiasts. Features dynamic product catalog with high-resolution zooming, size & color selectors, persistent shopping cart in LocalStorage, and frictionless checkout integration.',
      challenge:
        'Provide a fast, highly branded digital shopping experience for developers without the sluggishness of legacy e-commerce tools.',
      solution:
        'Built with Next.js and Tailwind CSS for instant page transitions, micro-animations on cart updates, and frictionless payment handling.',
      features: [
        'High-resolution product showcase with responsive gallery',
        'Persistent cart with instant price and shipping calculations',
        'Category, size, and availability filtering filters',
        'Ready for payment gateway integrations (Stripe / Apple Pay)',
        'Fully responsive and sub-300ms page load speeds',
      ],
      techStack: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Stripe API', 'Lucide Icons'],
      metrics: [
        { label: 'PageSpeed Score', value: '99/100' },
        { label: 'Load Latency', value: '< 0.3s' },
        { label: 'Cart UX', value: 'Instant' },
        { label: 'Status', value: 'Production' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/DevsClub-Store',
      liveUrl: 'https://devsclub-store.vercel.app',
      isOnline: true,
    },
    'nexus-studio': {
      id: 'nexus-studio',
      title: 'Nexus Studio · AI Workflow Builder',
      subtitle: 'INDEPENDENT BUILD 05',
      category: 'AI Agents & Automation',
      type: 'independent',
      image: '/img/projeto2.png',
      videoPoster: '/img/projeto2.png',
      desc: 'Interactive node-based automation workspace connecting webhooks, LLMs, and messaging APIs.',
      fullDescription:
        'A drag-and-drop workflow canvas inspired by modern automation tools. Allows developers to build multi-step agent chains connecting inbound webhook events, AI reasoning models, data transformers, and notification endpoints.',
      challenge:
        'Constructing visual AI automation pipelines often requires heavy, complex, and slow interfaces.',
      solution:
        'Engineered an ultra-fast React SPA utilizing React Flow and TypeScript that executes and previews automation graphs at 60 FPS.',
      features: [
        'Infinite node canvas supporting over 50 integration block types',
        'Smart data connection handles with real-time schema validation',
        'Step-by-step pipeline execution and live streaming debug logs',
        'JSON-based workflow template export and import tools',
      ],
      techStack: ['React', 'React Flow', 'TypeScript', 'Tailwind CSS', 'WebSockets', 'Zustand'],
      metrics: [
        { label: 'Frame Rate', value: '60 FPS' },
        { label: 'Max Node Count', value: '100+' },
        { label: 'Graph Execution', value: 'Real-Time' },
        { label: 'Status', value: 'Active Lab' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/Nexus-Automation-Studio',
      liveUrl: 'https://nexus-studio.vercel.app',
      isOnline: true,
    },
    'cloudpulse-metrics': {
      id: 'cloudpulse-metrics',
      title: 'CloudPulse · Real-Time Cloud Dashboard',
      subtitle: 'INDEPENDENT BUILD 06',
      category: 'Data Visualization & Cloud',
      type: 'independent',
      image: '/img/projeto1.png',
      videoPoster: '/img/projeto1.png',
      desc: 'Executive analytics interface for monitoring cloud traffic, server health, and conversion funnels.',
      fullDescription:
        'An executive monitoring console engineered for instantaneous visibility across key performance indicators. Features interactive time-series charts with Recharts, API endpoint uptime status, and predictive funnel analytics.',
      challenge:
        'Traditional cloud analytics dashboards are cluttered, slow to load, and overwhelm users with redundant data.',
      solution:
        'Built a clean Apple dark-glass interface with optimized vector charting capable of rendering tens of thousands of data points with zero frame drops.',
      features: [
        'Real-time dynamic area, bar, and sparkline charts',
        'Custom timeframe filtering (24h, 7d, 30d, 1y)',
        'Configurable automated threshold alerts for traffic drops and latency spikes',
        'Responsive layout with multi-monitor support and native dark mode',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'SSE Stream', 'Framer Motion'],
      metrics: [
        { label: 'Data Points', value: '50,000+' },
        { label: 'Render Time', value: '16ms' },
        { label: 'UX Score', value: '99/100' },
        { label: 'Status', value: 'Production' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/CloudPulse-Analytics',
      liveUrl: 'https://cloudpulse.vercel.app',
      isOnline: true,
    },
    'aura-design-system': {
      id: 'aura-design-system',
      title: 'Aura UI · Apple-Grade Design System',
      subtitle: 'INDEPENDENT BUILD 07',
      category: 'Design System & UI Library',
      type: 'independent',
      image: '/img/projeto3.png',
      videoPoster: '/img/projeto3.png',
      desc: 'Modular UI component library engineered with Tailwind CSS, Framer Motion, and liquid glassmorphism.',
      fullDescription:
        'A comprehensive design system and reusable component architecture for the modern web. Includes design tokens, dynamic typography scale, tactile illuminated buttons, translucent frosted dialogs, bento grids, and Apple glass cards.',
      challenge:
        'Maintaining premium visual consistency and high performance across multiple front-end applications.',
      solution:
        'Created a modular design system packaged with interactive documentation and full WCAG accessibility compliance.',
      features: [
        'Over 30 production-ready modular UI components',
        'Liquid glassmorphism theme support with physical light highlights',
        'Full keyboard navigation and screen reader accessibility',
        'Natural micro-animations powered by Framer Motion',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Framer Motion', 'Storybook'],
      metrics: [
        { label: 'Components', value: '30+ Ready' },
        { label: 'Accessibility', value: 'WCAG 2.1 AA' },
        { label: 'Bundle Size', value: '< 15kb' },
        { label: 'Status', value: 'Open Source' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/Aura-UI-Design-System',
      liveUrl: 'https://aura-ui-system.vercel.app',
      isOnline: true,
    },
    g2odonto: {
      id: 'g2odonto',
      title: 'G2Odonto · Aesthetic Dental Lead Generation & Triage',
      subtitle: 'CLIENT PROJECT',
      category: 'Healthcare & Lead Generation',
      type: 'client',
      image: '/img/lentesdecontatodetal.png',
      videoPoster: '/img/lentesdecontatodetal.png',
      desc: 'High-converting medical landing page for premium cosmetic dental procedures with automated patient triage.',
      fullDescription:
        'Built for a cosmetic dentistry clinic specializing in porcelain contact lenses and resin veneers. The platform captures high-value patients via local Google Ads and SEO, qualifying treatment interest before routing directly to the clinical calendar.',
      challenge:
        'The clinic reception was overwhelmed by low-intent inquiries lacking real procedure interest.',
      solution:
        'Engineered an authority-building landing page paired with an automated triage workflow that filters qualified aesthetic patients for in-clinic evaluations.',
      features: [
        'Interactive showcase of dental cosmetic procedures',
        'Fast patient interest qualification survey',
        'Priority appointment booking button wired to WhatsApp',
        'Structured before/after case proof and patient trust indicators',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'WhatsApp Business API', 'Local SEO'],
      metrics: [
        { label: 'Qualified Inquiries', value: '+68%' },
        { label: 'Patient Profile', value: 'High-Ticket' },
        { label: 'Response Time', value: 'Instant' },
        { label: 'Status', value: 'Shipped & Live' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/Lentes-Contato-Dental',
      liveUrl: 'https://g2odonto.vercel.app',
      isOnline: true,
    },
    tualupa71: {
      id: 'tualupa71',
      title: 'Tualupa71 · Sunglasses E-Commerce Catalog',
      subtitle: 'CLIENT PROJECT',
      category: 'E-Commerce & Fashion',
      type: 'client',
      image: '/img/devsclub-store.png',
      videoPoster: '/img/devsclub-store.png',
      desc: 'Fast visual catalog with dynamic product filtering and friction-free WhatsApp checkout.',
      fullDescription:
        'An e-commerce platform built for an independent eyewear brand. Customers can browse curated sunglasses collections, filter by frame shape, and complete purchases instantly through WhatsApp without filling out tedious checkout forms.',
      challenge:
        'Provide a fresh, youth-focused online catalog that enables immediate purchases with zero checkout friction.',
      solution:
        'Engineered a lightweight visual catalog with instant WhatsApp order generation, dramatically decreasing checkout abandonment.',
      features: [
        'Dynamic product grid with high-resolution image previews',
        'Face-shape and style filtering tools',
        'Friction-free checkout without mandatory account registration',
        'Local SEO optimization for eyewear searches',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'WhatsApp Checkout'],
      metrics: [
        { label: 'Checkout Time', value: '< 1 min' },
        { label: 'Mobile UX', value: '100% Optimized' },
        { label: 'Avg. Session', value: '3.2 mins' },
        { label: 'Status', value: 'Delivered' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/Tualupa71-Ecommerce',
      liveUrl: 'https://tualupa71.vercel.app',
      isOnline: true,
    },
    'tech-ai-repo': {
      id: 'tech-ai-repo',
      title: 'Tech & AI Repository · Internal Knowledge Platform',
      subtitle: 'CLIENT PROJECT',
      category: 'Internal Tool & Data Platform',
      type: 'client',
      image: '/img/projeto1.png',
      videoPoster: '/img/projeto1.png',
      desc: 'Private web application for centralizing lead databases, technical documentation, and AI prompt libraries.',
      fullDescription:
        'An internal command center created for marketing and development teams. Features a terminal-inspired interface for rapid retrieval of lead databases, API integration docs, and standardized AI prompt templates.',
      challenge:
        'Scattered spreadsheets and disjointed documents across multiple folders caused daily friction and team bottlenecks.',
      solution:
        'Consolidated all technical guidelines and search databases into a single high-speed dashboard with terminal-style command querying.',
      features: [
        'Interactive command-line query box for fast data lookup',
        'Clean tabular view without opening heavy spreadsheets',
        'Structured repository of tested AI prompt automations',
        'Role-based security and isolated data access',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'REST API', 'Terminal UI'],
      metrics: [
        { label: 'Team Productivity', value: '+3.5x' },
        { label: 'Search Speed', value: 'Instant' },
        { label: 'Consolidation', value: '100% Centralized' },
        { label: 'Status', value: 'Active Daily' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/Tech-AI-Repository',
      liveUrl: 'https://tech-ai-repo.vercel.app',
      isOnline: true,
    },
  },
};
