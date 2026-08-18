export type Language = 'en' | 'pt';

export interface Translations {
  nav: {
    tagline: string;
    portfolio: string;
    cta: string;
    langToggle: string;
  };
  hero: {
    eyebrow: string;
    titleStart: string;
    morphWords: string[];
    titleEnd: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    trustStrip: {
      label: string;
      desc: string;
    }[];
    techStack: string[];
  };
  planOverview: {
    eyebrow: string;
    title: string;
    subtitle: string;
    heroCard: {
      tag: string;
      title: string;
      desc: string;
      bullets: string[];
      statLabel: string;
      statValue: string;
    };
    bentoCards: {
      tag: string;
      title: string;
      desc: string;
      bullets: string[];
    }[];
    footnote: string;
    cta: string;
  };
  comparison: {
    eyebrow: string;
    title: string;
    subtitle: string;
    agencyTitle: string;
    gustavoTitle: string;
    rows: {
      feature: string;
      agency: string;
      gustavo: string;
    }[];
  };
  featureBlocks: {
    eyebrow: string;
    blocks: {
      title: string;
      copy: string;
      visualAlt: string;
    }[];
  };
  portfolioTeaser: {
    heading: string;
    subtitle: string;
    cta: string;
  };
  process: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: {
      num: string;
      timeframe: string;
      title: string;
      bullets: string[];
    }[];
  };
  about: {
    eyebrow: string;
    title: string;
    bio: string;
    facts: {
      label: string;
      value: string;
    }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  finalCta: {
    tagline: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  footer: {
    copyright: string;
  };
  portfolioPage: {
    title: string;
    subtitle: string;
    group1Label: string;
    group1Desc: string;
    group2Label: string;
    group2Desc: string;
    clientProjects: {
      id: string;
      title: string;
      client: string;
      challenge: string;
      solution: string;
      tags: string[];
      visualAlt: string;
    }[];
    independentProjects: {
      id: string;
      title: string;
      desc: string;
      tags: string[];
      visualAlt: string;
      url?: string;
    }[];
    footerCta: {
      heading: string;
      subtitle: string;
      cta: string;
    };
  };
}

export const translations: Record<Language, Translations> = {
  // ─── ENGLISH ─────────────────────────────────────────────────
  en: {
    nav: {
      tagline: 'Web · AI · Marketing',
      portfolio: 'Portfolio',
      cta: 'Book a Call',
      langToggle: 'PT',
    },
    hero: {
      eyebrow: 'ONE FLAT MONTHLY PLAN. MANAGED DIRECTLY.',
      titleStart: 'Complete digital growth.',
      morphWords: ['React Systems', 'AI Automation', 'Growth Engines', 'AI CRM Setup'],
      titleEnd: 'Built and managed by one person.',
      subtitle:
        'I build your site, run your Google presence, launch paid traffic, and deploy a custom AI CRM. All in one simple monthly plan with direct WhatsApp access.',
      primaryCta: 'Book a Call on WhatsApp',
      secondaryCta: 'Explore Portfolio',
      trustStrip: [
        { label: 'DIRECT ACCESS', desc: 'Direct WhatsApp communication with the builder.' },
        { label: 'FIXED MONTHLY RATE', desc: 'Zero hidden fees. Clear monthly pricing.' },
        { label: 'AI NATIVE STACK', desc: 'Automations wired in from day one.' },
      ],
      techStack: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'AI Agents', 'Google Ads', 'Local SEO'],
    },
    planOverview: {
      eyebrow: "WHAT'S INCLUDED",
      title: 'Everything you need to grow online.',
      subtitle: 'One monthly plan. No agency overhead. No fragmented freelancers.',
      heroCard: {
        tag: 'CORE FOUNDATION',
        title: 'Custom Website and Web Systems',
        desc: 'A modern website coded from scratch. Ultra fast loading, optimized mobile UX, clean animations, and direct WhatsApp conversion pathways.',
        bullets: [
          'Hand-coded React and TypeScript architecture',
          '95+ Google PageSpeed score and sub-second load times',
          'Domain connection, SSL certification, and cloud hosting',
          'Continuous code updates and maintenance included',
        ],
        statLabel: 'PERFORMANCE SCORE',
        statValue: '99/100',
      },
      bentoCards: [
        {
          tag: 'LOCAL & AI SEARCH',
          title: 'SEO and Generative Search (GEO)',
          desc: 'Get found where customers search. Google ranking and AI answer citations.',
          bullets: [
            'Google Business Profile setup and local ranking',
            'Structuring data so ChatGPT and Perplexity recommend you',
            'Keyword tracking and monthly search visibility updates',
          ],
        },
        {
          tag: 'AUTOMATION & PIPELINE',
          title: 'Custom AI CRM and Lead Triage',
          desc: 'Instant lead qualification on WhatsApp. No rented tool fees.',
          bullets: [
            'Automated 24/7 lead qualification and booking assistant',
            'Direct WhatsApp notifications when a qualified lead arrives',
            'Full database ownership with zero third-party software cost',
          ],
        },
        {
          tag: 'ACQUISITION',
          title: 'Targeted Traffic and Content',
          desc: 'Reaching active buyers through paid and organic channels.',
          bullets: [
            'Google Ads setup targeting high-intent local keywords',
            'Meta Ads campaigns for brand authority and remarketing',
            'Conversion tracking with Google Analytics 4 and Meta Pixel',
          ],
        },
      ],
      footnote: 'No hourly billing. No surprise invoices. One flat plan managed directly.',
      cta: 'Get Started with One Plan',
    },
    comparison: {
      eyebrow: 'WHY CHOOSE DIRECT',
      title: 'Traditional Agencies vs. Working With Me',
      subtitle: 'Compare speed, communication, and real engineering quality.',
      agencyTitle: 'Traditional Agency',
      gustavoTitle: 'Gustavo (Direct)',
      rows: [
        {
          feature: 'Execution',
          agency: 'Passed through account managers and juniors',
          gustavo: 'Built by the exact same engineer you talk to',
        },
        {
          feature: 'Communication',
          agency: 'Ticket queues, emails, and multi-day delays',
          gustavo: 'Direct 1-on-1 access via WhatsApp',
        },
        {
          feature: 'Pricing Model',
          agency: 'High retainers, hourly rates, and add-on fees',
          gustavo: 'One transparent monthly plan with zero surprises',
        },
        {
          feature: 'Delivery Speed',
          agency: 'Slowed down by internal approval meetings',
          gustavo: 'Fast, iterative delivery without corporate bottlenecks',
        },
        {
          feature: 'AI and Automation',
          agency: 'Glued on top of expensive legacy SaaS',
          gustavo: 'Native AI agents and custom-built CRM included',
        },
      ],
    },
    featureBlocks: {
      eyebrow: 'IN-DEPTH LOOK',
      blocks: [
        {
          title: 'A High-End Presence on Every Channel',
          copy: 'A bespoke website, an authority-building profile, and an optimized Google local presence. Built with fluid micro-interactions and frictionless checkout.',
          visualAlt: 'Website interface mockup with modern UI blocks',
        },
        {
          title: 'Search Ranking and AI Citations',
          copy: 'Rank where your buyers search. Optimized for traditional Google results and referenced by AI tools like ChatGPT and Perplexity.',
          visualAlt: 'Search and growth analytics interface mockup',
        },
        {
          title: 'Custom AI CRM and Automated Follow-Ups',
          copy: 'My proprietary CRM built in-house. An AI agent qualifies leads 24/7 and coordinates appointments while you focus on operations.',
          visualAlt: 'AI CRM dashboard interface mockup',
        },
      ],
    },
    portfolioTeaser: {
      heading: 'Selected Work and Lab Projects',
      subtitle: 'Explore the applications, systems, and platforms I have shipped.',
      cta: 'View Portfolio',
    },
    process: {
      eyebrow: 'HOW IT WORKS',
      title: 'Five simple steps to continuous growth.',
      subtitle: 'A lean, straightforward process from initial call to ongoing management.',
      steps: [
        {
          num: '01',
          timeframe: 'Days 1–3',
          title: 'Discovery and Strategy',
          bullets: [
            'Direct 30-minute alignment call to map your business needs',
            'Audit of current website, local SEO, and conversion bottlenecks',
            'Definition of target traffic channels and growth goals',
          ],
        },
        {
          num: '02',
          timeframe: 'Days 4–5',
          title: 'Onboarding and Setup',
          bullets: [
            'Agreement formalized with zero hidden fees',
            'Direct WhatsApp workspace established',
            'Simple checklist to gather brand assets and credentials',
          ],
        },
        {
          num: '03',
          timeframe: 'Weeks 2–3',
          title: 'Build and AI Deployment',
          bullets: [
            'Coding the custom site with React and TypeScript',
            'Setting up your AI CRM and automated lead triage',
            'Wiring Google Analytics 4, Meta Pixel, and event tracking',
          ],
        },
        {
          num: '04',
          timeframe: 'Week 4',
          title: 'Launch and Traffic Activation',
          bullets: [
            'Zero-downtime domain switch and SSL deployment',
            'Google Business Profile verification and launch',
            'Paid ad campaigns activated and lead flow live',
          ],
        },
        {
          num: '05',
          timeframe: 'Monthly',
          title: 'Continuous Management',
          bullets: [
            'Ongoing SEO and GEO search position monitoring',
            'Weekly ad spend and conversion rate optimization',
            'Continuous website updates and direct WhatsApp support',
          ],
        },
      ],
    },
    about: {
      eyebrow: 'ABOUT ME',
      title: 'The engineer behind your plan.',
      bio: "I am Gustavo, a full-stack developer and Computer Science student at Jorge Amado University, Brazil. I have been building websites and AI-powered automation systems as an independent engineer. Previously, I co-founded a marketing and tech operation where I ran client acquisition, local SEO, and CRM deployments for dental clinics. I build fast, write clean code, and personally manage every client plan.",
      facts: [
        { label: 'Location', value: 'Brazil (Global Remote)' },
        { label: 'Languages', value: 'Portuguese (native) · English (fluent)' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Straightforward answers.',
      items: [
        {
          question: 'How does the monthly plan work?',
          answer:
            'It is one fixed monthly rate covering your website, marketing, and custom AI CRM. We agree on the scope after a short discovery call. No hourly bills. No surprise add-on charges.',
        },
        {
          question: 'Are you an agency or a solo engineer?',
          answer:
            'I work solo by design. You communicate directly with the person writing your code and managing your growth. No account managers.',
        },
        {
          question: 'Do you work with international clients?',
          answer:
            'Yes. I build and communicate fluently in English, working with clients across the US, Europe, and Latin America.',
        },
        {
          question: 'What is Generative Engine Optimization (GEO)?',
          answer:
            'It is the technical practice of structuring your website so AI platforms like ChatGPT and Perplexity cite and recommend your business, alongside standard Google SEO.',
        },
        {
          question: 'What happens after I reach out?',
          answer:
            'We chat on WhatsApp, schedule a quick 20-minute call to understand your goals, and I provide a clear plan proposal.',
        },
      ],
    },
    finalCta: {
      tagline: 'DIRECT ENGINEERING.',
      title: 'One plan. Everything your business needs online.',
      subtitle: 'Send a message on WhatsApp. Let us talk through your goals without long pitches or sales pressure.',
      cta: 'Chat on WhatsApp',
    },
    footer: {
      copyright: '© 2026 Gustavo. Web Development, AI Automation and Growth.',
    },
    portfolioPage: {
      title: 'Selected Work',
      subtitle: 'Production systems, client platforms, and software experiments.',
      group1Label: 'Client Work',
      group1Desc: 'Real freelance projects built for businesses.',
      group2Label: 'Independent Builds',
      group2Desc: 'Personal software experiments and open lab projects.',
      clientProjects: [
        {
          id: 'g2odonto',
          title: 'G2Odonto. AI Triage for Dental Clinics',
          client: 'Aesthetic Dental Clinic',
          challenge: 'Qualify and capture inbound patient leads automatically.',
          solution: 'Custom AI triage system reducing front-desk response time to seconds.',
          tags: ['AI AUTOMATION', 'LEAD TRIAGE', 'WEBHOOKS'],
          visualAlt: 'AI triage interface mockup',
        },
        {
          id: 'tualupa71',
          title: 'Tualupa71. Sunglasses E-Commerce',
          client: 'Eyewear Brand',
          challenge: 'Build a frictionless shopping catalog with immediate checkout.',
          solution: 'Fast visual catalog with category filters and direct WhatsApp checkout.',
          tags: ['E-COMMERCE', 'UI/UX', 'WHATSAPP CHECKOUT'],
          visualAlt: 'E-commerce interface mockup',
        },
        {
          id: 'tech-ai-repo',
          title: 'Tech and AI Repository. Internal Tool',
          client: 'Private Data Tool',
          challenge: 'Centralize internal databases, prompts, and documentation securely.',
          solution: 'Private web application with instant data access and AI guidelines.',
          tags: ['WEB APP', 'DATA PLATFORM', 'SECURITY'],
          visualAlt: 'Internal data platform interface mockup',
        },
      ],
      independentProjects: [
        {
          id: 'brl2go',
          title: 'BRL2GO. Real-Time Currency Converter',
          desc: 'Minimalist, responsive web app focused on instant currency conversion via live financial APIs.',
          tags: ['JAVASCRIPT', 'FETCH API', 'EDGE SERVERLESS'],
          visualAlt: 'Currency converter interface mockup',
          url: 'https://brl2go.vercel.app',
        },
        {
          id: 'fried-chicken',
          title: 'Fried Chicken. Digital Menu & Delivery',
          desc: 'Interactive digital menu with client-side reactive cart and automated direct WhatsApp checkout.',
          tags: ['TAILWIND CSS', 'JAVASCRIPT', 'WHATSAPP API'],
          visualAlt: 'Fast food delivery menu mockup',
          url: 'https://fried-chicken-beta.vercel.app',
        },
        {
          id: 'hestus-ai',
          title: 'Hestus AI. Automation & Triage Platform',
          desc: 'Autonomous AI agents engineered for customer support, sales qualification, and back-office pipelines.',
          tags: ['AI AGENTS', 'WEBHOOKS', 'TAILWIND CSS'],
          visualAlt: 'AI automation platform landing mockup',
          url: 'https://hestus.vercel.app',
        },
        {
          id: 'devsclub-store',
          title: 'DevsClub Store. E-Commerce & Tech Merch',
          desc: 'Optimized and responsive e-commerce interface for high-end tech gear with conversion-focused UX.',
          tags: ['HTML5', 'CSS3', 'UI/UX CONVERSION'],
          visualAlt: 'Tech gear e-commerce showcase mockup',
          url: 'https://devclubstore.vercel.app',
        },
        {
          id: 'lu-phellipo',
          title: 'Lu Phellipo. Mandala Art Portfolio',
          desc: 'Virtual showcase and digital portfolio for fine artist Luciana Phellipo with direct WhatsApp commission channel.',
          tags: ['HTML5', 'CSS3', 'VANILLA JS'],
          visualAlt: 'Art portfolio and mandala showcase mockup',
          url: 'https://luphellipo.vercel.app/',
        },
        {
          id: 'cebe-portal',
          title: 'CEBE Portal. Academic Management Platform',
          desc: 'Fullstack monorepo platform with responsive frontend, real-time SSE chat support, and Java Spring Boot API.',
          tags: ['JAVA 21', 'SPRING BOOT', 'SSE REAL-TIME'],
          visualAlt: 'Academic management platform student portal mockup',
          url: 'https://github.com/gustavojgalvao/CEBE-Portal',
        },
        {
          id: 'promptbase',
          title: 'PromptBase. AI Prompt Repository',
          desc: 'Minimalist second-brain web app for archiving, tagging, and executing dynamic AI prompt templates.',
          tags: ['CANVAS GRAPH', 'VANILLA JS', 'PRODUCTIVITY'],
          visualAlt: 'AI prompt repository interface mockup',
          url: 'https://prompt-base-peach.vercel.app',
        },
      ],
      footerCta: {
        heading: 'Ready to build your next project?',
        subtitle: 'Let us discuss your goals and put together the right plan.',
        cta: 'Talk on WhatsApp',
      },
    },
  },

  // ─── PORTUGUESE ──────────────────────────────────────────────
  pt: {
    nav: {
      tagline: 'Web · IA · Marketing',
      portfolio: 'Portfólio',
      cta: 'Falar Comigo',
      langToggle: 'EN',
    },
    hero: {
      eyebrow: 'PLANO MENSAL ÚNICO. GERENCIADO DIRETO POR MIM.',
      titleStart: 'Crescimento digital completo.',
      morphWords: ['Sites em React', 'Automação com IA', 'Motores de Venda', 'CRM com IA Própria'],
      titleEnd: 'Executado e gerenciado por uma única pessoa.',
      subtitle:
        'Desenvolvo seu site, cuido do Google Meu Negócio, executo tráfego pago e implanto um CRM com IA exclusivo. Tudo em um único plano mensal com acesso direto pelo WhatsApp.',
      primaryCta: 'Chamar no WhatsApp',
      secondaryCta: 'Ver Portfólio',
      trustStrip: [
        { label: 'ACESSO DIRETO', desc: 'Comunicação direta pelo WhatsApp com quem constrói.' },
        { label: 'VALOR MENSAL FIXO', desc: 'Sem taxas ocultas. Preço mensal transparente.' },
        { label: 'IA NATIVA', desc: 'Automações e CRM integrados desde o primeiro dia.' },
      ],
      techStack: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Agentes IA', 'Google Ads', 'SEO Local'],
    },
    planOverview: {
      eyebrow: 'O QUE ESTÁ INCLUSO',
      title: 'Tudo o que seu negócio precisa para crescer online.',
      subtitle: 'Um único plano mensal. Sem burocracia de agência. Sem freelancers desarticulados.',
      heroCard: {
        tag: 'BASE PRINCIPAL',
        title: 'Site Exclusivo e Sistemas Web',
        desc: 'Seu site desenvolvido do zero com código limpo. Carregamento ultra-rápido, experiência mobile perfeita, micro-animações e botões de conversão direta no WhatsApp.',
        bullets: [
          'Desenvolvimento em React e TypeScript de alta velocidade',
          'Nota 95+ no Google PageSpeed com carregamento instantâneo',
          'Configuração de domínio, certificado SSL e hospedagem em nuvem',
          'Manutenção, melhorias visuais e atualizações de código inclusas',
        ],
        statLabel: 'PERFORMANCE PAGESPEED',
        statValue: '99/100',
      },
      bentoCards: [
        {
          tag: 'BUSCA LOCAL E IA',
          title: 'SEO e Otimização para IAs (GEO)',
          desc: 'Seja encontrado onde os clientes buscam. Google e buscadores de inteligência artificial.',
          bullets: [
            'Google Meu Negócio otimizado para liderar buscas locais',
            'Conteúdo estruturado para ser citado no ChatGPT e Perplexity',
            'Monitoramento constante de posições e visibilidade',
          ],
        },
        {
          tag: 'AUTOMAÇÃO E VENDAS',
          title: 'CRM Próprio com Agente de IA',
          desc: 'Triagem de leads no WhatsApp 24 horas por dia. Sem mensalidade de software extra.',
          bullets: [
            'Assistente com IA que atende e qualifica leads no WhatsApp',
            'Avisos imediatos quando um cliente pronto para comprar chega',
            'Seus dados sob seu controle sem pagar mensalidades de terceiros',
          ],
        },
        {
          tag: 'AQUISIÇÃO DE CLIENTES',
          title: 'Tráfego Pago e Conteúdo',
          desc: 'Alcance compradores prontos através de anúncios no Google e redes sociais.',
          bullets: [
            'Campanhas no Google Ads focadas em palavras de compra imediata',
            'Anúncios no Meta Ads para autoridade e remarketing de clientes',
            'Rastreamento de conversão com Google Analytics 4 e Pixel',
          ],
        },
      ],
      footnote: 'Sem cobrança por hora. Sem faturas surpresa. Um plano mensal com tudo incluso.',
      cta: 'Começar com Plano Único',
    },
    comparison: {
      eyebrow: 'POR QUE TRABALHAR DIRETO',
      title: 'Agência Tradicional vs. Gustavo Direto',
      subtitle: 'Compare agilidade, comunicação e qualidade de engenharia.',
      agencyTitle: 'Agência Tradicional',
      gustavoTitle: 'Gustavo (Direto)',
      rows: [
        {
          feature: 'Execução',
          agency: 'Repassada para gerentes de conta e estagiários',
          gustavo: 'Feita pela mesma pessoa com quem você conversa',
        },
        {
          feature: 'Comunicação',
          agency: 'Filas de chamados, e-mails e dias de espera',
          gustavo: 'Acesso direto 1-a-1 pelo WhatsApp',
        },
        {
          feature: 'Modelo de Preço',
          agency: 'Mensalidades infladas, horas extras e taxas surpresa',
          gustavo: 'Um plano mensal fixo e transparente',
        },
        {
          feature: 'Velocidade',
          agency: 'Travada por reuniões internas e processos burocráticos',
          gustavo: 'Entregas rápidas e diretas sem gargalos corporativos',
        },
        {
          feature: 'IA e Automação',
          agency: 'Ferramentas antigas com plugins caros',
          gustavo: 'CRM próprio e agentes de IA nativos inclusos no plano',
        },
      ],
    },
    featureBlocks: {
      eyebrow: 'DETALHES DO PLANO',
      blocks: [
        {
          title: 'Presença Digital de Alto Padrão',
          copy: 'Site exclusivo, perfil de autoridade e Google Meu Negócio otimizado. Design fluído, carregamento instantâneo e caminhos diretos de venda.',
          visualAlt: 'Mockup de interface web com design moderno',
        },
        {
          title: 'Ranqueamento no Google e Citações em IA',
          copy: 'Apareça onde seus compradores procuram. Otimizado para buscas tradicionais no Google e recomendado por assistentes de IA como ChatGPT e Perplexity.',
          visualAlt: 'Mockup de painel de métricas de busca',
        },
        {
          title: 'CRM com IA Próprio e Triagem Automática',
          copy: 'Meu software de CRM desenvolvido internamente. Um agente de IA qualifica leads no WhatsApp e organiza seu funil sem cobranças extras.',
          visualAlt: 'Mockup de dashboard do CRM com IA',
        },
      ],
    },
    portfolioTeaser: {
      heading: 'Trabalhos Recentes e Laboratório',
      subtitle: 'Explore as plataformas, aplicações e sistemas que desenvolvi.',
      cta: 'Ver Portfólio',
    },
    process: {
      eyebrow: 'COMO FUNCIONA',
      title: 'Cinco etapas simples para crescimento contínuo.',
      subtitle: 'Um processo direto e sem enrolação, do primeiro contato à gestão diária.',
      steps: [
        {
          num: '01',
          timeframe: 'Dias 1–3',
          title: 'Alinhamento e Estratégia',
          bullets: [
            'Conversa direta de 30 minutos para mapear suas metas',
            'Auditoria do site atual, posicionamento local e gargalos',
            'Definição dos canais de tráfego e objetivos de venda',
          ],
        },
        {
          num: '02',
          timeframe: 'Dias 4–5',
          title: 'Onboarding e Acessos',
          bullets: [
            'Acordo formalizado sem taxas extras ou contratos abusivos',
            'Criação do canal direto no WhatsApp',
            'Checklist simples para envio de identidade e acessos',
          ],
        },
        {
          num: '03',
          timeframe: 'Semanas 2–3',
          title: 'Construção e Ativação de IA',
          bullets: [
            'Desenvolvimento do site com React e TypeScript',
            'Configuração do CRM com IA e triagem no WhatsApp',
            'Instalação de Google Analytics 4, Meta Pixel e eventos de conversão',
          ],
        },
        {
          num: '04',
          timeframe: 'Semana 4',
          title: 'Lançamento e Tráfego Ativo',
          bullets: [
            'Virada de domínio sem interrupção de serviço com SSL',
            'Otimização e verificação do Google Meu Negócio',
            'Ativação dos anúncios pagos e início da captura de leads',
          ],
        },
        {
          num: '05',
          timeframe: 'Mensal',
          title: 'Gestão e Otimização',
          bullets: [
            'Acompanhamento contínuo de ranqueamento no Google e IAs',
            'Otimização semanal de custo por lead nos anúncios',
            'Atualizações no site e suporte prioritário no WhatsApp',
          ],
        },
      ],
    },
    about: {
      eyebrow: 'SOBRE MIM',
      title: 'Quem executa e cuida do seu plano.',
      bio: 'Sou Gustavo, desenvolvedor full-stack e estudante de Ciência da Computação na Universidade Jorge Amado. Atuo de forma independente construindo sites e sistemas de automação com inteligência artificial. Antes disso, co-fundei uma operação de marketing e tecnologia cuidando de captação de clientes, SEO local e implantação de CRM para clínicas odontológicas. Desenvolvo com agilidade, código limpo e atendo pessoalmente cada cliente.',
      facts: [
        { label: 'Localização', value: 'Brasil (Remoto Global)' },
        { label: 'Idiomas', value: 'Português (nativo) · Inglês (avançado)' },
      ],
    },
    faq: {
      eyebrow: 'DÚVIDAS FREQUENTES',
      title: 'Respostas diretas.',
      items: [
        {
          question: 'Como funciona o plano mensal?',
          answer:
            'É um valor mensal fixo que inclui site, marketing, SEO e CRM com IA. Definimos o escopo após uma conversa rápida. Sem surpresas na fatura e sem cobranças por hora.',
        },
        {
          question: 'Você é uma agência ou desenvolvedor independente?',
          answer:
            'Trabalho de forma independente. Você conversa diretamente com quem programa e gerencia seu crescimento digital. Sem intermediários.',
        },
        {
          question: 'Você atende clientes fora do Brasil?',
          answer:
            'Sim. Desenvolvo e me comunico fluentemente em inglês com clientes nos Estados Unidos, Europa e América Latina.',
        },
        {
          question: 'O que é Generative Engine Optimization (GEO)?',
          answer:
            'É a estruturação do seu site para que inteligências artificiais como ChatGPT e Perplexity citem e recomendem sua empresa nas respostas, além do Google tradicional.',
        },
        {
          question: 'Como posso começar?',
          answer:
            'Basta me mandar uma mensagem no WhatsApp. Marcamos uma conversa de 20 minutos para entender sua empresa e eu apresento a proposta ideal.',
        },
      ],
    },
    finalCta: {
      tagline: 'ENGENHARIA DIRETA.',
      title: 'Um plano mensal. Tudo o que sua empresa precisa online.',
      subtitle: 'Envie uma mensagem no WhatsApp. Vamos conversar sobre suas metas sem pressão e sem discurso pronto.',
      cta: 'Conversar no WhatsApp',
    },
    footer: {
      copyright: '© 2026 Gustavo. Desenvolvimento Web, IA e Marketing Digital.',
    },
    portfolioPage: {
      title: 'Trabalhos Selecionados',
      subtitle: 'Projetos em produção, plataformas de clientes e sistemas em laboratório.',
      group1Label: 'Projetos para Clientes',
      group1Desc: 'Sistemas reais desenvolvidos para empresas.',
      group2Label: 'Projetos Autônomos',
      group2Desc: 'Experimentos de software e desenvolvimentos independentes.',
      clientProjects: [
        {
          id: 'g2odonto',
          title: 'G2Odonto. Triagem com IA para Clínicas',
          client: 'Clínica Odontológica Estética',
          challenge: 'Qualificar e capturar pacientes de alto padrão automaticamente.',
          solution: 'Sistema com IA que atende no WhatsApp e reduz o tempo de resposta a segundos.',
          tags: ['AUTOMAÇÃO COM IA', 'TRIAGEM DE LEADS', 'WEBHOOKS'],
          visualAlt: 'Mockup de interface de triagem com IA',
        },
        {
          id: 'tualupa71',
          title: 'Tualupa71. E-Commerce de Óculos',
          client: 'Marca de Óculos de Sol',
          challenge: 'Criar uma loja virtual rápida com fechamento ágil de pedidos.',
          solution: 'Catálogo dinâmico com filtros visuais e checkout direto no WhatsApp.',
          tags: ['E-COMMERCE', 'DESIGN UI/UX', 'CHECKOUT WHATSAPP'],
          visualAlt: 'Mockup de interface de e-commerce',
        },
        {
          id: 'tech-ai-repo',
          title: 'Repositório Tech e IA. Ferramenta Interna',
          client: 'Plataforma Privada de Dados',
          challenge: 'Centralizar bancos de dados, prompts e documentos com segurança.',
          solution: 'Aplicação web segura com acesso instantâneo a planilhas e diretrizes de IA.',
          tags: ['APLICAÇÃO WEB', 'BANCO DE DADOS', 'SEGURANÇA'],
          visualAlt: 'Mockup de interface de plataforma de dados',
        },
      ],
      independentProjects: [
        {
          id: 'brl2go',
          title: 'BRL2GO. Conversor de Moedas em Tempo Real',
          desc: 'Aplicação web minimalista e responsiva focada em conversão cambial instantânea via API financeira.',
          tags: ['JAVASCRIPT', 'FETCH API', 'EDGE SERVERLESS'],
          visualAlt: 'Mockup de conversor de moedas',
          url: 'https://brl2go.vercel.app',
        },
        {
          id: 'fried-chicken',
          title: 'Fried Chicken. Cardápio Digital & Delivery',
          desc: 'Cardápio digital interativo com carrinho reativo e checkout automatizado direto no WhatsApp.',
          tags: ['TAILWIND CSS', 'JAVASCRIPT', 'WHATSAPP API'],
          visualAlt: 'Mockup de cardápio digital de delivery',
          url: 'https://fried-chicken-beta.vercel.app',
        },
        {
          id: 'hestus-ai',
          title: 'Hestus AI. Plataforma de Automação & Triagem',
          desc: 'Agentes autônomos de IA sob medida para automação de atendimento, qualificação e rotinas operacionais.',
          tags: ['AGENTES IA', 'WEBHOOKS', 'TAILWIND CSS'],
          visualAlt: 'Mockup de plataforma de agentes de IA',
          url: 'https://hestus.vercel.app',
        },
        {
          id: 'devsclub-store',
          title: 'DevsClub Store. E-Commerce & Tech Merch',
          desc: 'Interface de e-commerce otimizada e responsiva para produtos de tecnologia premium com foco em conversão.',
          tags: ['HTML5', 'CSS3', 'UI/UX CONVERSÃO'],
          visualAlt: 'Mockup de e-commerce de produtos tech',
          url: 'https://devclubstore.vercel.app',
        },
        {
          id: 'lu-phellipo',
          title: 'Lu Phellipo. Site de Mandalas & Portfólio',
          desc: 'Vitrine virtual e portfólio digital para a artista plástica Luciana Phellipo com canal direto de encomendas.',
          tags: ['HTML5', 'CSS3', 'VANILLA JS'],
          visualAlt: 'Mockup de site de portfólio de mandalas',
          url: 'https://luphellipo.vercel.app/',
        },
        {
          id: 'cebe-portal',
          title: 'CEBE-Portal. Portal do Aluno do CEBE',
          desc: 'Plataforma acadêmica fullstack monorepo com suporte via SSE em tempo real e backend Java Spring Boot.',
          tags: ['JAVA 21', 'SPRING BOOT', 'SSE TEMPO REAL'],
          visualAlt: 'Mockup do portal do aluno e gestão acadêmica',
          url: 'https://github.com/gustavojgalvao/CEBE-Portal',
        },
        {
          id: 'promptbase',
          title: 'PromptBase. Repositório de Prompts com IA',
          desc: 'Aplicação web minimalista para arquivar, categorizar e executar prompts de IA com variáveis dinâmicas.',
          tags: ['CANVAS GRAFO', 'VANILLA JS', 'PRODUTIVIDADE'],
          visualAlt: 'Mockup de repositório de prompts de inteligência artificial',
          url: 'https://prompt-base-peach.vercel.app',
        },
      ],
      footerCta: {
        heading: 'Pronto para construir seu próximo projeto?',
        subtitle: 'Vamos conversar sobre seus objetivos e estruturar o plano ideal.',
        cta: 'Falar no WhatsApp',
      },
    },
  },
};
