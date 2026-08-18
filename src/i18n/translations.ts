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
    groups: {
      name: string;
      items: {
        title: string;
        desc: string;
      }[];
    }[];
    footnote: string;
    cta: string;
  };
  comparison: {
    eyebrow: string;
    title: string;
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
      subtitle: string;
      desc: string;
      deliverables: string[];
      highlight: string;
      tags: string[];
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
  en: {
    nav: {
      tagline: 'Web · AI · Marketing',
      portfolio: 'Portfolio',
      cta: 'Book a Call',
      langToggle: 'PT',
    },
    hero: {
      eyebrow: 'ONE MONTHLY PLAN · MANAGED BY ME DIRECTLY',
      titleStart: 'Your Business Growth,',
      morphWords: ['React Systems', 'AI Automation', 'Growth Engines', 'AI-Powered CRM'],
      titleEnd: 'Handled End-to-End.',
      subtitle:
        'I build and manage your website, SEO/GEO, Google Business Profile, social media, paid traffic, and a custom AI-powered CRM — as one monthly plan, run by me directly.',
      primaryCta: 'Book a Call →',
      secondaryCta: 'Explore Portfolio',
      trustStrip: [
        { label: 'DIRECT ACCESS', desc: 'You talk to the person running it all — no account managers.' },
        { label: 'ONE MONTHLY PLAN', desc: 'Every channel, every tool, managed under one roof.' },
        { label: 'AI-NATIVE WORKFLOW', desc: 'Built with AI from day one — not bolted onto legacy tools.' },
      ],
      techStack: ['React · Next.js', 'Tailwind CSS', 'GSAP', 'AI Agents & Automation', 'SEO / GEO'],
    },
    planOverview: {
      eyebrow: 'WHAT\'S INCLUDED',
      title: 'Everything your business needs to grow online, in one monthly plan.',
      groups: [
        {
          name: 'Presence & Authority',
          items: [
            { title: 'Premium Website', desc: 'A high-conversion site, designed and built for you.' },
            { title: 'Instagram', desc: 'Content and positioning that build real authority.' },
            { title: 'Google Business Profile', desc: 'Optimized so local and search customers find you first.' },
          ],
        },
        {
          name: 'Visibility & Growth',
          items: [
            { title: 'SEO & GEO', desc: 'Visibility on Google and on AI search/answer engines.' },
            { title: 'Paid Traffic', desc: 'Campaigns managed for you, tied to real conversion goals.' },
            { title: 'Organic Traffic', desc: 'Content and structure that keep earning visibility.' },
          ],
        },
        {
          name: 'Operations & Intelligence',
          items: [
            { title: 'AI-Powered CRM', desc: 'My own proprietary tool — organizing leads and follow-ups.' },
            { title: 'Performance Tracking', desc: 'One dashboard showing what\'s actually working.' },
          ],
        },
      ],
      footnote: 'No à la carte pricing, no add-on negotiations — one plan, everything managed by me.',
      cta: 'Book a Call →',
    },
    comparison: {
      eyebrow: 'WHY WORK DIRECTLY WITH ME',
      title: 'Traditional Agency vs. Gustavo — Direct',
      agencyTitle: 'Traditional Agency',
      gustavoTitle: 'Gustavo — Direct',
      rows: [
        {
          feature: 'Execution',
          agency: 'Passed through account teams',
          gustavo: 'Built by the same person you talk to',
        },
        {
          feature: 'Communication',
          agency: 'Layers of handoffs and delays',
          gustavo: 'Direct 1-on-1 via WhatsApp',
        },
        {
          feature: 'Pricing Structure',
          agency: 'High retainers, hidden fees',
          gustavo: 'One flat monthly plan, transparent',
        },
        {
          feature: 'Speed',
          agency: 'Slowed by internal process',
          gustavo: 'Lean by design — one person, no bottlenecks',
        },
        {
          feature: 'AI & Automation',
          agency: 'Bolted onto legacy tools',
          gustavo: 'Built AI-native from day one',
        },
      ],
    },
    featureBlocks: {
      eyebrow: 'THE PLAN IN DETAIL',
      blocks: [
        {
          title: 'A Premium Presence, Everywhere Clients Look',
          copy: 'A high-conversion website, an Instagram that actually builds authority, and a Google Business Profile optimized so local customers find you first. Built around UI/UX, modern layouts, fluid animations, and frictionless checkout.',
          visualAlt: 'Premium website interface mockup with modern UI blocks',
        },
        {
          title: 'Growth Marketing — SEO, GEO & Full-Funnel Traffic',
          copy: 'Visibility where buyers actually look — ranked on Google, referenced by AI search engines (GEO), and reached through both paid campaigns and organic content, all built around real conversion funnels.',
          visualAlt: 'Analytics and growth chart dashboard mockup',
        },
        {
          title: 'AI-Powered CRM & Performance Tracking',
          copy: 'My own CRM, built in-house — not a rented tool. An AI agent handles lead triage, follow-ups, and client communication, while one dashboard tracks what\'s actually driving revenue — included in your plan at no extra cost.',
          visualAlt: 'AI CRM dashboard interface mockup with chat automation flow',
        },
      ],
    },
    portfolioTeaser: {
      heading: 'Explore My Work',
      subtitle: "A closer look at the platforms and systems I've shipped.",
      cta: 'See the Portfolio →',
    },
    process: {
      eyebrow: 'HOW IT WORKS',
      title: 'From first call to continuous growth.',
      subtitle: 'A structured, predictable 5-step process designed to launch fast and iterate continuously — handled directly by me with no middlemen.',
      steps: [
        {
          num: '01',
          timeframe: 'Days 1–3',
          title: 'Discovery & Strategic Blueprint',
          subtitle: 'Mapping bottlenecks & defining the exact technical architecture',
          desc: 'We start with a comprehensive 1-on-1 strategic deep-dive. I evaluate your current digital assets, competitor landscape, and conversion bottlenecks to create a bespoke roadmap tailored to your specific market and revenue goals.',
          deliverables: [
            '30–45 min 1-on-1 strategic alignment session',
            'Full audit of existing website, SEO & Google Business Profile',
            'Competitor positioning & keyword discovery',
            'Tailored technical architecture & CRM workflow blueprint',
          ],
          highlight: 'Deliverable: Strategic Growth Blueprint & Scope Map',
          tags: ['Strategy', 'Audit', 'Architecture', '1-on-1 Call'],
        },
        {
          num: '02',
          timeframe: 'Days 4–5',
          title: 'Agreement & Frictionless Onboarding',
          subtitle: 'Clear scope, fixed transparent pricing, zero delays',
          desc: 'Once we agree on the scope, we formalize the single monthly plan with complete price transparency. We set up our dedicated WhatsApp direct channel and gather your brand assets via a secure, streamlined checklist.',
          deliverables: [
            'Fixed-price agreement with no hidden retainers or surprise fees',
            'Direct 1-on-1 WhatsApp communication hub established',
            'Streamlined brand asset & credentials handover checklist',
            'Dedicated workspace & tracking infrastructure initialized',
          ],
          highlight: 'Deliverable: Dedicated WhatsApp Hub & Initialized Workspace',
          tags: ['Onboarding', 'Direct Access', 'Asset Gathering', 'Setup'],
        },
        {
          num: '03',
          timeframe: 'Weeks 2–3',
          title: 'Custom Build & AI Integration',
          subtitle: 'Clean-code development with AI automations & tracking from day one',
          desc: 'I develop your high-converting website from the ground up using modern React and TypeScript. Simultaneously, I configure your custom AI CRM, wire lead triage webhooks, and implement comprehensive analytics instrumentation.',
          deliverables: [
            'Custom high-conversion website (90+ Lighthouse score, ultra-fast mobile)',
            'Proprietary AI CRM configured with auto-qualification prompts',
            'Generative Engine Optimization (GEO) & on-page technical SEO',
            'Conversion tracking: Google Analytics 4, Meta Pixel & event triggers',
          ],
          highlight: 'Deliverable: Staging Preview & Automated CRM Ready for Testing',
          tags: ['React · TypeScript', 'AI CRM', 'SEO / GEO', 'GA4 & Pixels'],
        },
        {
          num: '04',
          timeframe: 'Week 4',
          title: 'Launch & Full-Funnel Activation',
          subtitle: 'Domain cutover, ad campaigns live, lead capture active',
          desc: 'We conduct a seamless domain DNS cutover with zero downtime and SSL certification. The Google Business Profile is verified and optimized, paid ad campaigns go live, and real-time lead capture begins flowing directly into your CRM.',
          deliverables: [
            'Zero-downtime DNS deployment with global SSL/CDN acceleration',
            'Google Business Profile overhaul & local search verification',
            'Targeted paid traffic launch (Google Search & Meta remarketing)',
            'End-to-end testing of WhatsApp triggers, forms & webhook alerts',
          ],
          highlight: 'Deliverable: Live Production Platform & Synchronized Campaigns',
          tags: ['Zero-Downtime Launch', 'Google Business', 'Paid Ads', 'Live Leads'],
        },
        {
          num: '05',
          timeframe: 'Ongoing · Monthly',
          title: 'Ongoing Management & Iterative Growth',
          subtitle: 'Continuous SEO/GEO tracking, traffic optimization, and CRM evolution',
          desc: 'Your growth doesn\'t stop at launch. Every single month, I track search rankings, optimize ad spend to lower customer acquisition cost, update website content, and refine your AI agent — keeping your entire digital machine ahead of competitors.',
          deliverables: [
            'Continuous SEO & GEO monitoring for Google and AI answer engines',
            'Weekly ad campaign budget & conversion rate optimization',
            'AI CRM prompt updates and automated follow-up hygiene',
            'Transparent monthly growth report & proactive strategy reviews',
          ],
          highlight: 'Deliverable: Monthly Performance Reports & Proactive Iterations',
          tags: ['Growth Loops', 'GEO Optimization', 'Ad Scaling', 'Direct Support'],
        },
      ],
    },
    about: {
      eyebrow: 'ABOUT ME',
      title: 'Who\'s running the plan.',
      bio: "I'm Gustavo — a full-stack developer and Computer Science student at Jorge Amado University, Brazil, working as a freelancer since 2025 building websites, landing pages, and AI-powered systems. Before that, I co-founded a marketing & technology venture where I handled client acquisition, SEO, Google Business Profile, and CRM setup for a real dental clinic client — so I've seen this from the business side, not just the code side. I build fast because I build AI-native, and I still personally handle every plan I take on.",
      facts: [
        { label: 'Location', value: 'Brazil (Global Remote)' },
        { label: 'Languages', value: 'Portuguese (native) · English (intermediate/advanced)' },
      ],
    },
    faq: {
      eyebrow: 'FREQUENTLY ASKED QUESTIONS',
      title: 'Straight answers.',
      items: [
        {
          question: 'How does the plan work?',
          answer: "It's one monthly plan covering your website, marketing, and CRM — agreed after a short call where I map your business needs and give you a fixed price. No hourly billing, no surprise invoices.",
        },
        {
          question: 'Are you an agency or a solo developer?',
          answer: 'I work solo, by design. You talk directly to the person building your plan — no account managers, no handoffs between teams.',
        },
        {
          question: 'Do you work with international, English-speaking clients?',
          answer: "Yes — I build and communicate in English, and I'm currently expanding my work with clients in the US, Europe, and LatAm.",
        },
        {
          question: 'What is Generative Engine Optimization (GEO)?',
          answer: "It's the practice of structuring your content so AI tools like ChatGPT and Perplexity reference and recommend your business, the same way SEO optimizes for Google.",
        },
        {
          question: 'What happens after I book a call?',
          answer: 'We talk through your business and goals, I map out what the plan looks like for you specifically, and you get a clear proposal.',
        },
      ],
    },
    finalCta: {
      tagline: 'Take the short way.',
      title: 'One plan. Everything\nyour business needs online.',
      subtitle: "Book a short call to see if it's the right fit — no pressure, no long pitch, just a straight conversation about your business.",
      cta: 'Book a Call on WhatsApp →',
    },
    footer: {
      copyright: '© 2026 Gustavo — Web Development, AI Automation & Digital Marketing.',
    },
    portfolioPage: {
      title: 'Selected Works',
      subtitle: "A few of the systems I've designed, built, and put into production.",
      group1Label: 'Client Work',
      group1Desc: 'Real freelance projects built for clients.',
      group2Label: 'Independent Builds',
      group2Desc: 'Personal and practice projects — not client deliverables.',
      clientProjects: [
        {
          id: 'g2odonto',
          title: 'G2Odonto — AI Triage for Dental Clinics',
          client: 'Dental / Aesthetic Clinic',
          challenge: 'Optimize lead capture and qualification for aesthetic dental clinics.',
          solution: 'An AI-driven automated triage system that cuts response time and filters for ideal patients before they ever reach the front desk.',
          tags: ['AI AUTOMATION', 'LEAD TRIAGE', 'WEBHOOKS'],
          visualAlt: 'AI triage chat interface mockup with automated response flow',
        },
        {
          id: 'tualupa71',
          title: 'Tualupa71 — Sunglasses E-Commerce',
          client: 'Sunglasses E-Commerce Brand',
          challenge: 'Create a fast, frictionless shopping experience for a sunglasses brand.',
          solution: 'A clean, focused interface with dynamic category filters and checkout routed straight to WhatsApp for immediate closing.',
          tags: ['E-COMMERCE', 'UI/UX', 'CHECKOUT FLOW'],
          visualAlt: 'E-commerce product grid interface mockup with category filters',
        },
        {
          id: 'tech-ai-repo',
          title: 'Tech & AI Repository — Internal Tool',
          client: 'Private Internal Tool',
          challenge: 'Organize data, AI prompts, and marketing copy in one secure environment.',
          solution: 'A private web app built with core web technologies — fast, secure, instant access to CSV databases and AI guidelines.',
          tags: ['WEB APP', 'DATA', 'SECURITY'],
          visualAlt: 'Terminal and code interface mockup for internal data management tool',
        },
      ],
      independentProjects: [
        {
          id: 'brl2go',
          title: 'BRL2GO — Currency Converter',
          desc: 'A real-time BRL currency converter with clean UI and instant calculations.',
          tags: ['REACT', 'API', 'UI/UX'],
          visualAlt: 'Currency converter interface mockup',
          url: 'https://gustavogalvao.vercel.app',
        },
        {
          id: 'fried-chicken',
          title: 'Fried Chicken — Fictional Site',
          desc: 'A fictional fast-food brand site exploring bold visual design and animation.',
          tags: ['HTML', 'CSS', 'GSAP'],
          visualAlt: 'Bold fictional fast-food brand website mockup',
          url: 'https://gustavogalvao.vercel.app',
        },
        {
          id: 'hestus-ai',
          title: 'Hestus AI — Landing Page',
          desc: 'A landing page concept for an AI SaaS product, dark theme with glassmorphism.',
          tags: ['REACT', 'TAILWIND', 'LANDING PAGE'],
          visualAlt: 'AI SaaS landing page mockup with dark glassmorphism design',
          url: 'https://gustavogalvao.vercel.app',
        },
      ],
      footerCta: {
        heading: "Let's build your next project",
        subtitle: "Ready when you are — let's talk about what you're building.",
        cta: "Let's Talk on WhatsApp →",
      },
    },
  },

  // ─── PORTUGUESE ──────────────────────────────────────────────
  pt: {
    nav: {
      tagline: 'Web · IA · Marketing',
      portfolio: 'Portfólio',
      cta: 'Agendar Conversa',
      langToggle: 'EN',
    },
    hero: {
      eyebrow: 'UM PLANO MENSAL · GERENCIADO POR MIM DIRETAMENTE',
      titleStart: 'O Crescimento do Seu Negócio,',
      morphWords: ['Sistemas React', 'Automação com IA', 'Motores de Growth', 'CRM com IA Própria'],
      titleEnd: 'De Ponta a Ponta.',
      subtitle:
        'Cuido do seu site, SEO/GEO, Google Meu Negócio, redes sociais, tráfego pago e um CRM com IA proprietário — tudo em um plano mensal, gerenciado por mim diretamente.',
      primaryCta: 'Agendar Conversa →',
      secondaryCta: 'Ver Portfólio',
      trustStrip: [
        { label: 'ACESSO DIRETO', desc: 'Você fala direto com quem executa — sem gerentes intermediários.' },
        { label: 'UM PLANO MENSAL', desc: 'Todos os canais, todas as ferramentas, gerenciadas por uma pessoa.' },
        { label: 'FLUXO IA-NATIVO', desc: 'Construído com IA desde o início — não adaptado sobre ferramentas antigas.' },
      ],
      techStack: ['React · Next.js', 'Tailwind CSS', 'GSAP', 'Agentes de IA & Automação', 'SEO / GEO'],
    },
    planOverview: {
      eyebrow: 'O QUE ESTÁ INCLUÍDO',
      title: 'Tudo que seu negócio precisa para crescer online, em um plano mensal.',
      groups: [
        {
          name: 'Presença & Autoridade',
          items: [
            { title: 'Site Premium', desc: 'Um site de alta conversão, criado e desenvolvido para você.' },
            { title: 'Instagram', desc: 'Conteúdo e posicionamento que constroem autoridade real.' },
            { title: 'Google Meu Negócio', desc: 'Otimizado para que clientes locais e de busca te encontrem primeiro.' },
          ],
        },
        {
          name: 'Visibilidade & Crescimento',
          items: [
            { title: 'SEO & GEO', desc: 'Visibilidade no Google e em buscadores por IA.' },
            { title: 'Tráfego Pago', desc: 'Campanhas gerenciadas por mim, com metas reais de conversão.' },
            { title: 'Tráfego Orgânico', desc: 'Conteúdo e estrutura que continuam gerando visibilidade.' },
          ],
        },
        {
          name: 'Operações & Inteligência',
          items: [
            { title: 'CRM com IA Própria', desc: 'Minha ferramenta proprietária — organiza leads e follow-ups.' },
            { title: 'Monitoramento de Performance', desc: 'Um painel mostrando o que está funcionando de verdade.' },
          ],
        },
      ],
      footnote: 'Sem cobrança avulsa, sem negociação de add-ons — um plano, tudo gerenciado por mim.',
      cta: 'Agendar Conversa →',
    },
    comparison: {
      eyebrow: 'POR QUE TRABALHAR DIRETAMENTE COMIGO',
      title: 'Agência Tradicional vs. Gustavo — Direto',
      agencyTitle: 'Agência Tradicional',
      gustavoTitle: 'Gustavo — Direto',
      rows: [
        {
          feature: 'Execução',
          agency: 'Repassada por equipes de contas',
          gustavo: 'Feito pela mesma pessoa com quem você fala',
        },
        {
          feature: 'Comunicação',
          agency: 'Camadas de repasses e atrasos',
          gustavo: 'Direto 1-a-1 via WhatsApp',
        },
        {
          feature: 'Estrutura de Preço',
          agency: 'Mensalidades altas, taxas escondidas',
          gustavo: 'Um plano mensal fixo e transparente',
        },
        {
          feature: 'Velocidade',
          agency: 'Travada por processos internos',
          gustavo: 'Lean por natureza — uma pessoa, sem gargalos',
        },
        {
          feature: 'IA & Automação',
          agency: 'Adaptada sobre ferramentas antigas',
          gustavo: 'Construído IA-nativo desde o primeiro dia',
        },
      ],
    },
    featureBlocks: {
      eyebrow: 'O PLANO EM DETALHE',
      blocks: [
        {
          title: 'Uma Presença Premium, Em Todo Lugar Onde Clientes Procuram',
          copy: 'Um site de alta conversão, um Instagram que constrói autoridade de verdade e um Google Meu Negócio otimizado para que clientes locais te encontrem primeiro. Desenvolvido com foco em UI/UX, layouts modernos, animações fluidas e checkout sem fricção.',
          visualAlt: 'Mockup de interface web premium com blocos de UI modernos',
        },
        {
          title: 'Growth Marketing — SEO, GEO & Tráfego Full-Funil',
          copy: 'Visibilidade onde os compradores realmente procuram — ranqueado no Google, referenciado por buscadores com IA (GEO) e alcançado por campanhas pagas e conteúdo orgânico, tudo construído em torno de funis reais de conversão.',
          visualAlt: 'Mockup de dashboard de analytics e gráfico de crescimento',
        },
        {
          title: 'CRM com IA & Monitoramento de Performance',
          copy: 'Meu próprio CRM, desenvolvido internamente — não uma ferramenta alugada. Um agente de IA cuida da triagem de leads, follow-ups e comunicação com clientes, enquanto um único painel mostra o que está gerando receita — incluído no seu plano sem custo extra.',
          visualAlt: 'Mockup de interface CRM com fluxo de automação e chat de IA',
        },
      ],
    },
    portfolioTeaser: {
      heading: 'Explore Meu Trabalho',
      subtitle: 'Uma visão mais próxima das plataformas e sistemas que já entreguei.',
      cta: 'Ver o Portfólio →',
    },
    process: {
      eyebrow: 'COMO FUNCIONA',
      title: 'Da primeira conversa ao crescimento contínuo.',
      subtitle: 'Um processo estruturado e previsível em 5 etapas para lançar rápido e evoluir todo mês — executado diretamente por mim, sem intermediários.',
      steps: [
        {
          num: '01',
          timeframe: 'Dias 1–3',
          title: 'Descoberta & Blueprint Estratégico',
          subtitle: 'Mapeamento de gargalos e definição da arquitetura técnica exata',
          desc: 'Iniciamos com uma imersão estratégica 1-a-1. Analiso seus canais atuais, concorrentes e gargalos de conversão para desenhar um plano sob medida alinhado aos seus objetivos de faturamento.',
          deliverables: [
            'Sessão estratégica de alinhamento 1-a-1 (30–45 min)',
            'Auditoria completa do site atual, SEO e Google Meu Negócio',
            'Análise de posicionamento da concorrência e palavras-chave',
            'Blueprint da arquitetura técnica e fluxos do CRM com IA',
          ],
          highlight: 'Entregável: Blueprint Estratégico & Mapeamento de Escopo',
          tags: ['Estratégia', 'Auditoria', 'Arquitetura', 'Call 1-a-1'],
        },
        {
          num: '02',
          timeframe: 'Dias 4–5',
          title: 'Acordo & Onboarding Sem Fricção',
          subtitle: 'Escopo claro, preço mensal fixo e transparente, zero burocracia',
          desc: 'Alinhado o escopo, formalizamos o plano mensal único com total transparência. Criamos nosso canal direto no WhatsApp e coletamos acessos e arquivos de marca através de um checklist seguro e organizado.',
          deliverables: [
            'Acordo mensal fixo sem taxas surpresa ou contratos abusivos',
            'Canal direto 1-a-1 no WhatsApp estabelecido para o dia a dia',
            'Checklist seguro para envio de acessos e identidade visual',
            'Ambiente de trabalho e infraestrutura de métricas configurados',
          ],
          highlight: 'Entregável: Canal no WhatsApp & Ambiente Inicializado',
          tags: ['Onboarding', 'Acesso Direto', 'Coleta de Acessos', 'Setup'],
        },
        {
          num: '03',
          timeframe: 'Semanas 2–3',
          title: 'Desenvolvimento & Integração com IA',
          subtitle: 'Código limpo com automações de IA e rastreamento desde o primeiro dia',
          desc: 'Desenvolvo seu site de alta conversão do zero com React e TypeScript moderno. Ao mesmo tempo, configuro o CRM com IA proprietário, integro webhooks de triagem de leads e configuro todas as ferramentas de analytics.',
          deliverables: [
            'Site de alta conversão customizado (Score 90+ Lighthouse, ultra-rápido no mobile)',
            'CRM com IA proprietário configurado com prompts de triagem automática',
            'Estruturação para SEO técnico e Generative Engine Optimization (GEO)',
            'Rastreamento de conversão: Google Analytics 4, Meta Pixel e eventos',
          ],
          highlight: 'Entregável: Preview em Staging & CRM com IA Pronto para Testes',
          tags: ['React · TypeScript', 'CRM com IA', 'SEO / GEO', 'GA4 & Pixels'],
        },
        {
          num: '04',
          timeframe: 'Semana 4',
          title: 'Lançamento & Ativação de Tráfego',
          subtitle: 'Virada de domínio, campanhas no ar e captura de leads ativa',
          desc: 'Realizamos a virada de DNS com zero tempo de inatividade e certificado SSL. O Google Meu Negócio é validado, as campanhas de tráfego pago entram no ar e os primeiros leads começam a ser triados pelo CRM.',
          deliverables: [
            'Deploy seguro de DNS com zero downtime e aceleração CDN global',
            'Otimização completa do Google Meu Negócio e validação local',
            'Lançamento de campanhas pagas segmentadas (Google Ads e Meta Ads)',
            'Testes de ponta a ponta em formulários, disparos no WhatsApp e webhooks',
          ],
          highlight: 'Entregável: Plataforma Ativa em Produção & Campanhas no Ar',
          tags: ['Lançamento Zero-Downtime', 'Google Negócios', 'Tráfego Pago', 'Leads Ativos'],
        },
        {
          num: '05',
          timeframe: 'Contínuo · Mensal',
          title: 'Gestão Contínua & Otimização Iterativa',
          subtitle: 'Monitoramento contínuo de SEO/GEO, refinamento de tráfego e evolução do CRM',
          desc: 'O crescimento não para no lançamento. Todo mês acompanho o ranqueamento no Google e IAs, otimizo o custo por lead nos anúncios, atualizo conteúdos e calibro o agente de IA para manter sua operação na frente do mercado.',
          deliverables: [
            'Acompanhamento contínuo de SEO e indexação em buscadores de IA (GEO)',
            'Otimização semanal de orçamentos e taxas de conversão de anúncios',
            'Atualização de prompts do CRM com IA e higienização do funil',
            'Relatório mensal de desempenho transparente e reuniões de alinhamento',
          ],
          highlight: 'Entregável: Relatórios Mensais de Performance & Iterações Constantes',
          tags: ['Growth Contínuo', 'Otimização GEO', 'Escala de Anúncios', 'Suporte Direto'],
        },
      ],
    },
    about: {
      eyebrow: 'SOBRE MIM',
      title: 'Quem gerencia o plano.',
      bio: 'Sou Gustavo — desenvolvedor full-stack e estudante de Ciência da Computação na Universidade Jorge Amado, Brasil, trabalhando como freelancer desde 2025 construindo sites, landing pages e sistemas com IA. Antes disso, co-fundei uma venture de marketing & tecnologia onde cuidei de captação de clientes, SEO, Google Meu Negócio e implantação de CRM para uma clínica odontológica real — então conheço esse mundo pelo lado do negócio, não só pelo código. Desenvolvo rápido porque desenvolvo IA-nativo, e ainda cuido pessoalmente de cada plano que assumo.',
      facts: [
        { label: 'Localização', value: 'Brasil (Remoto Global)' },
        { label: 'Idiomas', value: 'Português (nativo) · Inglês (intermediário/avançado)' },
      ],
    },
    faq: {
      eyebrow: 'PERGUNTAS FREQUENTES',
      title: 'Respostas diretas.',
      items: [
        {
          question: 'Como funciona o plano?',
          answer: 'É um plano mensal que cobre seu site, marketing e CRM — definido após uma conversa rápida onde mapeio as necessidades do seu negócio e apresento um preço fixo. Sem cobrança por hora, sem surpresas na fatura.',
        },
        {
          question: 'Você é uma agência ou um desenvolvedor solo?',
          answer: 'Trabalho solo, por escolha. Você fala diretamente com quem está construindo seu plano — sem gerentes de conta, sem repasses entre equipes.',
        },
        {
          question: 'Você atende clientes internacionais em inglês?',
          answer: 'Sim — desenvolvimento e comunicação em inglês, e estou expandindo minha atuação com clientes nos EUA, Europa e LatAm.',
        },
        {
          question: 'O que é Generative Engine Optimization (GEO)?',
          answer: 'É a prática de estruturar seu conteúdo para que ferramentas de IA como ChatGPT e Perplexity referenciem e recomendem seu negócio, da mesma forma que o SEO otimiza para o Google.',
        },
        {
          question: 'O que acontece depois que agendar a conversa?',
          answer: 'Conversamos sobre seu negócio e objetivos, mapeo como o plano fica para o seu caso específico, e você recebe uma proposta clara.',
        },
      ],
    },
    finalCta: {
      tagline: 'O caminho mais curto.',
      title: 'Um plano. Tudo que\nseu negócio precisa online.',
      subtitle: 'Agende uma conversa rápida para ver se faz sentido — sem pressão, sem pitch longo, só uma conversa direta sobre o seu negócio.',
      cta: 'Agendar Conversa no WhatsApp →',
    },
    footer: {
      copyright: '© 2026 Gustavo — Desenvolvimento Web, Automação com IA & Marketing Digital.',
    },
    portfolioPage: {
      title: 'Trabalhos Selecionados',
      subtitle: 'Alguns dos sistemas que projetei, desenvolvi e coloquei em produção.',
      group1Label: 'Trabalhos para Clientes',
      group1Desc: 'Projetos freelance reais entregues para clientes.',
      group2Label: 'Projetos Independentes',
      group2Desc: 'Projetos pessoais e de prática — não entregas para clientes.',
      clientProjects: [
        {
          id: 'g2odonto',
          title: 'G2Odonto — Triagem com IA para Clínicas',
          client: 'Clínica Odontológica / Estética',
          challenge: 'Otimizar a captação e qualificação de leads para clínicas odontológicas estéticas.',
          solution: 'Um sistema automatizado de triagem com IA que reduz o tempo de resposta e filtra os pacientes ideais antes de chegarem à recepção.',
          tags: ['AUTOMAÇÃO IA', 'TRIAGEM DE LEADS', 'WEBHOOKS'],
          visualAlt: 'Mockup de interface de chat de triagem com IA e fluxo de resposta automatizado',
        },
        {
          id: 'tualupa71',
          title: 'Tualupa71 — E-Commerce de Óculos',
          client: 'Marca de Óculos de Sol',
          challenge: 'Criar uma experiência de compra rápida e sem fricção para uma marca de óculos.',
          solution: 'Interface limpa com filtros dinâmicos de categoria e checkout direto pelo WhatsApp para fechamento imediato.',
          tags: ['E-COMMERCE', 'UI/UX', 'FLUXO DE CHECKOUT'],
          visualAlt: 'Mockup de grade de produtos de e-commerce com filtros de categoria',
        },
        {
          id: 'tech-ai-repo',
          title: 'Repositório Tech & IA — Ferramenta Interna',
          client: 'Ferramenta Interna Privada',
          challenge: 'Organizar dados, prompts de IA e textos de marketing em um ambiente seguro.',
          solution: 'Um web app privado com tecnologias web fundamentais — rápido, seguro e com acesso instantâneo a bancos CSV e diretrizes de IA.',
          tags: ['WEB APP', 'DADOS', 'SEGURANÇA'],
          visualAlt: 'Mockup de interface terminal e código para ferramenta interna de gestão de dados',
        },
      ],
      independentProjects: [
        {
          id: 'brl2go',
          title: 'BRL2GO — Conversor de Moedas',
          desc: 'Conversor de moedas BRL em tempo real com UI limpa e cálculos instantâneos.',
          tags: ['REACT', 'API', 'UI/UX'],
          visualAlt: 'Mockup de interface de conversor de moedas',
          url: 'https://gustavogalvao.vercel.app',
        },
        {
          id: 'fried-chicken',
          title: 'Fried Chicken — Site Fictício',
          desc: 'Site de marca fictícia de fast-food explorando design visual arrojado e animações.',
          tags: ['HTML', 'CSS', 'GSAP'],
          visualAlt: 'Mockup de site fictício de fast-food com design visual marcante',
          url: 'https://gustavogalvao.vercel.app',
        },
        {
          id: 'hestus-ai',
          title: 'Hestus AI — Landing Page',
          desc: 'Conceito de landing page para produto SaaS de IA, tema escuro com glassmorphism.',
          tags: ['REACT', 'TAILWIND', 'LANDING PAGE'],
          visualAlt: 'Mockup de landing page SaaS de IA com design glassmorphism escuro',
          url: 'https://gustavogalvao.vercel.app',
        },
      ],
      footerCta: {
        heading: 'Vamos construir seu próximo projeto',
        subtitle: 'Pronto quando você estiver — vamos conversar sobre o que você está construindo.',
        cta: 'Falar no WhatsApp →',
      },
    },
  },
};
