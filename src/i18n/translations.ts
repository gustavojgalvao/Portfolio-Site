export type Language = 'en' | 'pt';

export interface Translations {
  nav: {
    role: string;
    services: string;
    work: string;
    pricing: string;
    about: string;
    faq: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    titleStart: string;
    morphWords: string[];
    titleEnd: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    proofBar: {
      value: string;
      label: string;
    }[];
  };
  comparison: {
    badge: string;
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
  services: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
      deliverables: string[];
      tags: string[];
    }[];
  };
  portfolioBanner: {
    heading: string;
    subtitle: string;
    cta: string;
  };
  process: {
    title: string;
    subtitle: string;
    steps: {
      num: string;
      title: string;
      desc: string;
    }[];
  };
  portfolioPage: {
    backToHome: string;
    title: string;
    subtitle: string;
    projects: {
      id: string;
      title: string;
      category: string;
      desc: string;
      image: string;
      tags: string[];
      linkText: string;
    }[];
  };
  featuredSystems: {
    badge: string;
    title: string;
    subtitle: string;
  };
  caseStudies: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      id: string;
      title: string;
      client: string;
      metric: string;
      metricLabel: string;
      desc: string;
      image: string;
      tags: string[];
      ctaText: string;
    }[];
  };
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    plans: {
      name: string;
      badge?: string;
      price: string;
      period: string;
      desc: string;
      features: string[];
      cta: string;
      popular?: boolean;
    }[];
  };
  about: {
    badge: string;
    title: string;
    bioParagraph1: string;
    bioParagraph2: string;
    bioParagraph3: string;
    highlights: {
      title: string;
      desc: string;
    }[];
    skillsTitle: string;
    skills: string[];
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitCta: string;
    guarantee: string;
  };
  footer: {
    copyright: string;
    tagline: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      role: 'Web · AI · Growth',
      services: 'Services',
      work: 'Case Studies',
      pricing: 'Pricing',
      about: 'About Me',
      faq: 'FAQ',
      cta: 'Book a Project',
    },
    hero: {
      eyebrow: 'DIRECT SENIOR EXECUTION · NO AGENCY OVERHEAD',
      titleStart: 'Custom Web Platforms,',
      morphWords: ['AI Workflows', 'React Systems', 'Growth Engines'],
      titleEnd: 'Built for High Conversion',
      subtitle:
        'I design and build high-performance React web applications and automated AI systems that turn traffic into qualified leads and recurring revenue for global clients.',
      primaryCta: 'Start Your Project →',
      secondaryCta: 'Explore Case Studies',
      proofBar: [
        { value: '30+', label: 'Shipped Projects' },
        { value: '+140%', label: 'Avg Lead Growth' },
        { value: '< 1s', label: 'Page Load Speed' },
        { value: '100%', label: 'On-Time Delivery' },
      ],
    },
    comparison: {
      badge: 'WHY WORK DIRECTLY WITH ME',
      title: 'Traditional Agency vs. Direct Senior Execution',
      subtitle: 'Why international founders and growth teams prefer working 1-on-1 with a specialist.',
      agencyTitle: 'Traditional Digital Agency',
      gustavoTitle: 'Gustavo (Direct Specialist)',
      rows: [
        {
          feature: 'Execution',
          agency: 'Passed down to junior developers or interns',
          gustavo: '100% built by a senior developer & strategist',
        },
        {
          feature: 'Communication',
          agency: 'Account managers creating telephone-game delays',
          gustavo: 'Direct 1-on-1 access via WhatsApp & Slack',
        },
        {
          feature: 'Pricing Structure',
          agency: 'High monthly retainers covering office overhead',
          gustavo: 'Fixed, transparent project pricing based on value',
        },
        {
          feature: 'Turnaround Time',
          agency: '8 to 16 weeks filled with bureaucracy',
          gustavo: 'Rapid 2 to 4 week execution sprints',
        },
        {
          feature: 'Tech & AI Integration',
          agency: 'Outdated CMS templates (WordPress/Wix)',
          gustavo: 'Custom React/Vite codebase + AI Automation engines',
        },
      ],
    },
    services: {
      badge: 'SERVICES & DELIVERABLES',
      title: 'End-to-End Digital Solutions Focused on Revenue',
      subtitle: 'Modular engineering services tailored to solve specific business bottlenecks.',
      items: [
        {
          title: 'High-Converting Web Development',
          desc: 'Custom React & Tailwind websites built for lightning-fast speeds, flawless mobile responsiveness, and high visitor-to-lead conversion rates.',
          deliverables: [
            'Mobile-first responsive architecture',
            'Custom GSAP scroll interactions & smooth UI',
            'Lighthouse 95+ speed & SEO optimization',
            'Analytics & conversion pixel integration',
          ],
          tags: ['REACT', 'TAILWIND', 'TYPESCRIPT', 'GSAP'],
        },
        {
          title: 'AI Lead Qualification & CRM Systems',
          desc: 'Automated CRM workflows and AI agents that triage incoming leads 24/7, schedule meetings, and sync prospect data into your pipeline instantly.',
          deliverables: [
            'Custom AI lead scoring & triage agents',
            'Automated WhatsApp & Email follow-ups',
            'CRM webhooks (HubSpot, Salesforce, Pipedrive)',
            'Calendar auto-booking workflows',
          ],
          tags: ['AI AGENTS', 'WEBHOOKS', 'MAKE/N8N', 'PYTHON'],
        },
        {
          title: 'Growth Marketing & GEO (AI Search)',
          desc: 'Get found where buyers actually search — ranked #1 on Google, referenced inside AI engines like ChatGPT and Perplexity (GEO), and scaled via paid campaigns.',
          deliverables: [
            'Generative Engine Optimization (GEO)',
            'Technical & Content SEO audit',
            'High-intent Google & Meta ad funnels',
            'A/B testing & landing page optimization',
          ],
          tags: ['SEO', 'GEO', 'GOOGLE ADS', 'ANALYTICS'],
        },
      ],
    },
    portfolioBanner: {
      heading: 'Explore My Work',
      subtitle: "A closer look at the platforms and systems I've shipped.",
      cta: 'See the Portfolio →',
    },
    process: {
      title: 'Engineering Process',
      subtitle: 'A streamlined 4-step framework from concept to execution.',
      steps: [
        {
          num: '01',
          title: 'Discovery & Strategy',
          desc: 'Mapping your business needs and defining the right architecture for the solution.',
        },
        {
          num: '02',
          title: 'Agreement & Kick-off',
          desc: 'Once the scope is aligned, we formalize the agreement and move straight into execution.',
        },
        {
          num: '03',
          title: 'Development & UI/UX',
          desc: 'Clean-code build (Tailwind, JavaScript) with intelligent automations wired in from the start.',
        },
        {
          num: '04',
          title: 'Launch & Optimization',
          desc: 'Final review, conversion testing, and ongoing tracking once the project is live.',
        },
      ],
    },
    portfolioPage: {
      backToHome: '← Back to Home',
      title: 'Featured Projects & Systems',
      subtitle: 'A selection of recent web platforms, AI integrations, and conversion funnels.',
      projects: [
        {
          id: 'lente-contato',
          title: 'Dental Contact Lens Landing Page',
          category: 'Web Development & UI/UX',
          desc: 'High-converting medical landing page with interactive preloader, custom tilt cards, and instant WhatsApp booking integration.',
          image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
          tags: ['HTML5', 'GSAP', 'CSS3', 'WhatsApp Integration'],
          linkText: 'View Case Study',
        },
        {
          id: 'ai-crm-automation',
          title: 'AI Lead Qualification Engine',
          category: 'AI Automation & CRM',
          desc: 'Autonomous AI workflow that triages inbound leads, scores prospects, and syncs directly with CRM & calendar.',
          image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
          tags: ['Python', 'AI Agents', 'Webhooks', 'Make/n8n'],
          linkText: 'Explore System Architecture',
        },
        {
          id: 'growth-funnel-geo',
          title: 'International E-Commerce Growth Platform',
          category: 'Growth Marketing & GEO',
          desc: 'SEO & Generative Engine Optimization (GEO) strategy boosting AI engine visibility and direct conversions by 140%.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
          tags: ['SEO', 'GEO', 'Google Ads', 'Analytics'],
          linkText: 'View Metrics',
        },
      ],
    },
    featuredSystems: {
      badge: 'INTERACTIVE SHOWCASE',
      title: 'Core Architecture Modules',
      subtitle: 'Test the interactive components powering custom React platforms and AI pipelines.',
    },
    caseStudies: {
      badge: 'PROVEN RESULTS',
      title: 'Case Studies & Delivered Systems',
      subtitle: 'Real-world platforms engineered for measurable growth and client satisfaction.',
      items: [
        {
          id: 'lente-contato',
          title: 'Dental Clinic Conversion Engine',
          client: 'Premium Dental Studio',
          metric: '+215%',
          metricLabel: 'Increase in Direct Bookings',
          desc: 'High-converting medical landing page built with custom preloader, interactive procedure cards, and instant WhatsApp booking integration.',
          image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
          tags: ['React', 'Tailwind', 'WhatsApp API', 'UI/UX'],
          ctaText: 'View Case Details →',
        },
        {
          id: 'ai-crm-automation',
          title: 'Autonomous AI Lead Qualification Engine',
          client: 'B2B SaaS Provider',
          metric: '0 Min',
          metricLabel: 'Lead Response Time (Down from 4 hrs)',
          desc: 'Custom AI agent pipeline that evaluates inbound website forms, qualifies prospective budgets, and books sales calls automatically.',
          image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
          tags: ['AI Agents', 'Python', 'Webhooks', 'Make'],
          ctaText: 'View System Architecture →',
        },
        {
          id: 'growth-funnel-geo',
          title: 'International E-Commerce Growth Platform',
          client: 'Global D2C Brand',
          metric: '+140%',
          metricLabel: 'Revenue Growth via AI Search (GEO)',
          desc: 'Combined technical SEO and Generative Engine Optimization (GEO) strategy ensuring top recommendations across AI engines.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
          tags: ['GEO', 'SEO', 'Conversion Optimization'],
          ctaText: 'View Metrics →',
        },
      ],
    },
    pricing: {
      badge: 'TRANSPARENT INVESTMENT',
      title: 'Clear Project Packages & Pricing',
      subtitle: 'Fixed-scope project packages with no hidden costs or monthly surprises.',
      plans: [
        {
          name: 'Conversion Landing Page',
          price: '$1,200',
          period: 'one-time',
          desc: 'Ideal for launching a product, service, or campaign with a high-converting single page.',
          features: [
            'Custom mobile-first React & Tailwind design',
            'Bilingual support (EN / PT)',
            'WhatsApp & CRM contact form integration',
            'Copywriting alignment & SEO foundation',
            '2-week delivery timeline',
          ],
          cta: 'Select Sprint Package',
        },
        {
          name: 'Full Web & AI System',
          popular: true,
          badge: 'MOST POPULAR',
          price: '$2,800',
          period: 'one-time',
          desc: 'Complete digital platform with web application, AI lead qualification, and automated CRM pipelines.',
          features: [
            'Multi-page React web application',
            'Autonomous AI lead triage & scoring engine',
            'WhatsApp & Calendar booking workflows',
            'Full SEO + Generative Engine (GEO) setup',
            'Custom graphics & case study modules',
            '3-week delivery timeline + 30 days support',
          ],
          cta: 'Build Full System →',
        },
        {
          name: 'Growth & Optimization Retainer',
          price: '$1,500',
          period: '/ month',
          desc: 'Ongoing strategic partnership to scale traffic, optimize conversions, and manage paid/GEO funnels.',
          features: [
            'Continuous A/B testing & CRO',
            'Monthly GEO & Google SEO optimization',
            'Paid Ads funnel management (Google/Meta)',
            'New AI automation workflows & updates',
            'Direct priority WhatsApp access',
            'Weekly performance reporting',
          ],
          cta: 'Start Growth Partnership',
        },
      ],
    },
    about: {
      badge: 'BEHIND THE CODE',
      title: 'About Gustavo Galvão',
      bioParagraph1:
        'I am a senior web developer, AI automation specialist, and growth strategist based in Brazil, serving clients across North America, Europe, and Latin America.',
      bioParagraph2:
        'Having worked across web development, performance marketing, and artificial intelligence, I realized most companies struggle not because of lack of traffic, but because their digital touchpoints fail to convert visitors into buyers.',
      bioParagraph3:
        'I operate as a solo direct specialist. When you hire me, you get my full technical capability — clean React code, intelligent AI agents, and high-conversion UX design — with zero middle management.',
      highlights: [
        {
          title: 'Clean Code Standard',
          desc: 'Modular React, TypeScript, and Tailwind built to scale easily.',
        },
        {
          title: 'AI-First Mindset',
          desc: 'Wiring autonomous AI agents into operations to eliminate friction.',
        },
        {
          title: 'Conversion Focused',
          desc: 'Every pixel and headline is designed to drive measurable business results.',
        },
      ],
      skillsTitle: 'Technical Core',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'GSAP', 'Framer Motion', 'AI Agents', 'Python', 'Webhooks', 'GEO / SEO', 'Google Ads'],
    },
    faq: {
      badge: 'FREQUENTLY ASKED QUESTIONS',
      title: 'Everything You Need to Know',
      subtitle: 'Clear answers to common questions about timelines, process, and working together.',
      items: [
        {
          question: 'How long does a typical project take?',
          answer:
            'A custom Landing Page sprint takes 2 weeks. A Full Web & AI System takes 3 to 4 weeks from kick-off to live launch.',
        },
        {
          question: 'How does payment work?',
          answer:
            'Projects are structured as 50% upfront upon agreement and 50% upon final sign-off before deployment.',
        },
        {
          question: 'Do you work with international English-speaking clients?',
          answer:
            'Yes! I collaborate regularly with founders, agencies, and businesses across the US, UK, Canada, and Europe in fluent English.',
        },
        {
          question: 'What is Generative Engine Optimization (GEO)?',
          answer:
            'GEO is the modern evolution of SEO. It ensures your business and website are indexed and cited by AI engines like ChatGPT, Perplexity, and Google Gemini when buyers ask for recommendations.',
        },
        {
          question: 'Can you integrate AI into my existing CRM or workflow?',
          answer:
            'Absolutely. I build custom webhooks and AI workflows using Python, Make, or n8n that connect directly to your current CRM (HubSpot, Salesforce, Pipedrive) and WhatsApp.',
        },
      ],
    },
    contact: {
      badge: 'START YOUR PROJECT',
      title: 'Ready to Scale Your Conversion & System?',
      subtitle:
        'Tell me about your business goals. I will respond within 24 hours with a clear roadmap and proposal.',
      nameLabel: 'Your Name',
      namePlaceholder: 'John Doe',
      emailLabel: 'Email Address',
      emailPlaceholder: 'john@example.com',
      messageLabel: 'Project Details & Goals',
      messagePlaceholder: 'Describe your project, target launch date, and budget range...',
      submitCta: 'Send via WhatsApp →',
      guarantee: '🔒 Direct senior response within 24 hours. No sales spam.',
    },
    footer: {
      copyright: '© 2026 Gustavo Galvão — Web Development, AI Automation & Growth Marketing.',
      tagline: 'High-performance React web applications & autonomous AI engines for global teams.',
    },
  },
  pt: {
    nav: {
      role: 'Web · IA · Growth',
      services: 'Serviços',
      work: 'Estudos de Caso',
      pricing: 'Investimento',
      about: 'Sobre Mim',
      faq: 'FAQ',
      cta: 'Iniciar Projeto',
    },
    hero: {
      eyebrow: 'EXECUÇÃO SÊNIOR DIRETA · SEM CUSTOS DE AGÊNCIA',
      titleStart: 'Plataformas Web,',
      morphWords: ['Workflows com IA', 'Sistemas React', 'Motores de Growth'],
      titleEnd: 'Focadas em Alta Conversão',
      subtitle:
        'Desenvolvo aplicações web em React e sistemas de IA automatizados que transformam tráfego em clientes qualificados e receita recorrente para clientes no Brasil e no exterior.',
      primaryCta: 'Iniciar Seu Projeto →',
      secondaryCta: 'Ver Estudos de Caso',
      proofBar: [
        { value: '30+', label: 'Projetos Entregues' },
        { value: '+140%', label: 'Crescimento Médio' },
        { value: '< 1s', label: 'Carregamento' },
        { value: '100%', label: 'Prazo Cumprido' },
      ],
    },
    comparison: {
      badge: 'POR QUE TRABALHAR DIRETO COMIGO',
      title: 'Agência Tradicional vs. Execução Sênior Direta',
      subtitle: 'Por que fundadores e equipes de growth preferem o atendimento 1-para-1 com um especialista.',
      agencyTitle: 'Agência Digital Tradicional',
      gustavoTitle: 'Gustavo (Especialista Direto)',
      rows: [
        {
          feature: 'Execução',
          agency: 'Repassada para estagiários ou desenvolvedores júniores',
          gustavo: '100% construído por um desenvolvedor e estrategista sênior',
        },
        {
          feature: 'Comunicação',
          agency: 'Gerentes de conta que geram ruído e atrasos no processo',
          gustavo: 'Acesso direto via WhatsApp e reuniões objetivas',
        },
        {
          feature: 'Modelo de Preço',
          agency: 'Mensalidades altas para cobrir custos de escritório',
          gustavo: 'Preço fixo e transparente baseado no valor entregue',
        },
        {
          feature: 'Prazo de Entrega',
          agency: '8 a 16 semanas repletas de burocracia',
          gustavo: 'Sprints ágeis de 2 a 4 semanas',
        },
        {
          feature: 'Tecnologia e IA',
          agency: 'Templates ultrapassados em WordPress ou Wix',
          gustavo: 'Código React/Vite sob medida + automações com IA',
        },
      ],
    },
    services: {
      badge: 'SERVIÇOS E ENTREGÁVEIS',
      title: 'Soluções Digitais Focadas em Gerar Receita',
      subtitle: 'Serviços de engenharia desenhados para resolver gargalos específicos do seu negócio.',
      items: [
        {
          title: 'Desenvolvimento Web de Alta Conversão',
          desc: 'Sites e aplicações em React e Tailwind construídos para carregamento ultrarrápido, responsividade móvel impecável e máxima taxa de conversão.',
          deliverables: [
            'Arquitetura responsiva mobile-first',
            'Interações GSAP fluídas e interface premium',
            'Nota 95+ no Google Lighthouse & SEO',
            'Integração de analytics e pixels de conversão',
          ],
          tags: ['REACT', 'TAILWIND', 'TYPESCRIPT', 'GSAP'],
        },
        {
          title: 'Qualificação de Leads com IA & CRM',
          desc: 'Workflows automatizados e agentes de IA que triam leads 24/7, agendam reuniões e sincronizam dados no seu CRM em tempo real.',
          deliverables: [
            'Agentes de IA para triagem e pontuação de leads',
            'Follow-ups automatizados via WhatsApp e E-mail',
            'Webhooks para CRM (HubSpot, Salesforce, Pipedrive)',
            'Agendamento automático de reuniões',
          ],
          tags: ['AGENTES IA', 'WEBHOOKS', 'MAKE/N8N', 'PYTHON'],
        },
        {
          title: 'Growth Marketing & GEO (Busca por IA)',
          desc: 'Seja encontrado onde os compradores procuram — #1 no Google, citado em buscadores por IA (ChatGPT, Perplexity) e escalado com anúncios pagos.',
          deliverables: [
            'Otimização para Motores Generativos (GEO)',
            'Auditoria técnica e de conteúdo SEO',
            'Funis de anúncios no Google e Meta Ads',
            'Testes A/B e otimização contínua de conversão',
          ],
          tags: ['SEO', 'GEO', 'GOOGLE ADS', 'ANALYTICS'],
        },
      ],
    },
    portfolioBanner: {
      heading: 'Explore Meu Trabalho',
      subtitle: 'Uma visão detalhada das plataformas e sistemas que entreguei.',
      cta: 'Ver o Portfólio →',
    },
    process: {
      title: 'Processo de Engenharia',
      subtitle: 'Um fluxo simplificado em 4 etapas do conceito ao lançamento.',
      steps: [
        {
          num: '01',
          title: 'Descoberta & Estratégia',
          desc: 'Mapeamento das necessidades do seu negócio e definição da arquitetura ideal para a solução.',
        },
        {
          num: '02',
          title: 'Acordo & Alinhamento',
          desc: 'Com o escopo definido, formalizamos a parceria e partimos direto para a execução.',
        },
        {
          num: '03',
          title: 'Desenvolvimento & UI/UX',
          desc: 'Construção em código limpo (Tailwind, JavaScript) com automações inteligentes desde o primeiro dia.',
        },
        {
          num: '04',
          title: 'Lançamento & Otimização',
          desc: 'Revisão final, testes de conversão e acompanhamento contínuo com o projeto no ar.',
        },
      ],
    },
    portfolioPage: {
      backToHome: '← Voltar para o Início',
      title: 'Projetos e Sistemas em Destaque',
      subtitle: 'Uma seleção de plataformas web, integrações de IA e funis de conversão recentes.',
      projects: [
        {
          id: 'lente-contato',
          title: 'Landing Page Lente de Contato Dental',
          category: 'Desenvolvimento Web & UI/UX',
          desc: 'Landing page médica de alta conversão com preloader interativo, cards com efeito tilt e integração instantânea ao WhatsApp.',
          image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
          tags: ['HTML5', 'GSAP', 'CSS3', 'Integração WhatsApp'],
          linkText: 'Ver Estudo de Caso',
        },
        {
          id: 'ai-crm-automation',
          title: 'Motor de Qualificação de Leads com IA',
          category: 'Automação IA & CRM',
          desc: 'Workflow autônomo com inteligência artificial para qualificar leads, pontuar prospectos e sincronizar ao CRM.',
          image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
          tags: ['Python', 'Agentes IA', 'Webhooks', 'Make/n8n'],
          linkText: 'Explorar Arquitetura',
        },
        {
          id: 'growth-funnel-geo',
          title: 'Plataforma Internacional de Growth E-Commerce',
          category: 'Growth Marketing & GEO',
          desc: 'Estratégia de SEO e Otimização para Motores Generativos (GEO) aumentando a visibilidade em IA e conversões em 140%.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
          tags: ['SEO', 'GEO', 'Google Ads', 'Analytics'],
          linkText: 'Ver Métricas',
        },
      ],
    },
    featuredSystems: {
      badge: 'SHOWCASE INTERATIVO',
      title: 'Módulos da Arquitetura',
      subtitle: 'Explore os componentes centrais que alimentam plataformas React e automações com IA.',
    },
    caseStudies: {
      badge: 'RESULTADOS COMPROVADOS',
      title: 'Estudos de Caso & Sistemas Entregues',
      subtitle: 'Plataformas reais engenheiradas para crescimento mensurável.',
      items: [
        {
          id: 'lente-contato',
          title: 'Motor de Conversão para Studio Odontológico',
          client: 'Studio Odontológico Premium',
          metric: '+215%',
          metricLabel: 'Aumento nos Agendamentos Diretos',
          desc: 'Landing page médica de alta conversão construída com preloader exclusivo, cards de procedimentos e agendamento instantâneo no WhatsApp.',
          image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
          tags: ['React', 'Tailwind', 'WhatsApp API', 'UI/UX'],
          ctaText: 'Ver Detalhes do Estudo →',
        },
        {
          id: 'ai-crm-automation',
          title: 'Motor Autônomo de Qualificação com IA',
          client: 'Provedor SaaS B2B',
          metric: '0 Min',
          metricLabel: 'Tempo de Resposta (Antes 4 horas)',
          desc: 'Pipeline autônomo com IA que avalia formulários do site, qualifica o orçamento dos prospects e agenda reuniões de vendas.',
          image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
          tags: ['Agentes IA', 'Python', 'Webhooks', 'Make'],
          ctaText: 'Ver Arquitetura do Sistema →',
        },
        {
          id: 'growth-funnel-geo',
          title: 'Plataforma Internacional de Growth E-Commerce',
          client: 'Marca D2C Global',
          metric: '+140%',
          metricLabel: 'Crescimento via Busca por IA (GEO)',
          desc: 'Estratégia combinada de SEO técnico e Otimização para Motores Generativos (GEO) garantindo recomendações em motores de IA.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
          tags: ['GEO', 'SEO', 'Otimização de Conversão'],
          ctaText: 'Ver Métricas →',
        },
      ],
    },
    pricing: {
      badge: 'INVESTIMENTO TRANSPARENTE',
      title: 'Pacotes de Projeto & Valores',
      subtitle: 'Valores fixos por escopo de projeto, sem taxas escondidas ou surpresas.',
      plans: [
        {
          name: 'Landing Page de Conversão',
          price: 'R$ 3.800',
          period: 'único',
          desc: 'Ideal para lançar um produto, serviço ou campanha com uma página focada em conversão.',
          features: [
            'Design exclusivo em React & Tailwind',
            'Suporte bilíngue (Português / Inglês)',
            'Integração com formulário WhatsApp & CRM',
            'Alinhamento de copywriting & fundação SEO',
            'Entrega ágil em 2 semanas',
          ],
          cta: 'Escolher Pacote Sprint',
        },
        {
          name: 'Sistema Web & IA Completo',
          popular: true,
          badge: 'MAIS ESCOLHIDO',
          price: 'R$ 8.500',
          period: 'único',
          desc: 'Plataforma digital completa com aplicação web, qualificação com IA e automação de CRM.',
          features: [
            'Aplicação web React multipáginas',
            'Motor de IA para triagem e pontuação de leads',
            'Workflows de WhatsApp e agendamento',
            'Configuração de SEO + Otimização GEO (IA)',
            'Gráficos sob medida & módulos interativos',
            'Entrega em 3 semanas + 30 dias de suporte',
          ],
          cta: 'Construir Sistema Completo →',
        },
        {
          name: 'Parceria de Growth & Otimização',
          price: 'R$ 4.500',
          period: '/ mês',
          desc: 'Parceria contínua para escalar tráfego, otimizar conversões e gerenciar funis de busca por IA e tráfego pago.',
          features: [
            'Testes A/B contínuos e otimização de conversão',
            'Otimização mensal de GEO & Google SEO',
            'Gestão de tráfego no Google Ads & Meta Ads',
            'Novas automações com IA & atualizações',
            'Acesso direto e prioritário via WhatsApp',
            'Relatórios semanais de performance',
          ],
          cta: 'Iniciar Parceria de Growth',
        },
      ],
    },
    about: {
      badge: 'BASTIDORES DO CÓDIGO',
      title: 'Sobre Gustavo Galvão',
      bioParagraph1:
        'Sou desenvolvedor web sênior, especialista em automação com IA e estrategista de growth baseado no Brasil, atendendo clientes no Brasil, América do Norte e Europa.',
      bioParagraph2:
        'Após trabalhar em desenvolvimento web, tráfego pago e inteligência artificial, percebi que a maioria das empresas falha não por falta de acessos, mas porque suas páginas não transformam visitantes em clientes.',
      bioParagraph3:
        'Atuo como especialista direto. Ao me contratar, você recebe toda a minha capacidade técnica — código React limpo, agentes autônomos de IA e UX focado em conversão — sem intermediários ou burocracia.',
      highlights: [
        {
          title: 'Padrão de Código Limpo',
          desc: 'React, TypeScript e Tailwind estruturados para escalar.',
        },
        {
          title: 'Mentalidade IA-First',
          desc: 'Integração de agentes autônomos para eliminar gargalos manuais.',
        },
        {
          title: 'Foco Total em Conversão',
          desc: 'Cada elemento visual é desenhado para gerar resultados de negócio.',
        },
      ],
      skillsTitle: 'Stack Técnica',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'GSAP', 'Framer Motion', 'Agentes IA', 'Python', 'Webhooks', 'GEO / SEO', 'Google Ads'],
    },
    faq: {
      badge: 'PERGUNTAS FREQUENTES',
      title: 'Tudo o Que Você Precisa Saber',
      subtitle: 'Respostas diretas sobre prazos, processo de trabalho e garantia.',
      items: [
        {
          question: 'Quanto tempo leva um projeto?',
          answer:
            'Uma Landing Page de conversão leva 2 semanas. Um Sistema Web & IA Completo leva de 3 a 4 semanas desde o alinhamento até o lançamento.',
        },
        {
          question: 'Como funciona o pagamento?',
          answer:
            'Os projetos são estruturados em 50% na aprovação do escopo e 50% na entrega final antes do deploy.',
        },
        {
          question: 'Você atende clientes internacionais em inglês?',
          answer:
            'Sim! Colaboro frequentemente com fundadores e empresas nos EUA, Europa e Canadá com comunicação fluente em inglês.',
        },
        {
          question: 'O que é Otimização para Motores Generativos (GEO)?',
          answer:
            'GEO é a evolução do SEO. Garante que sua empresa seja citada e recomendada quando clientes buscam soluções dentro de IA como ChatGPT, Perplexity e Google Gemini.',
        },
        {
          question: 'É possível integrar IA ao meu CRM atual?',
          answer:
            'Com certeza. Desenvolvo webhooks e fluxos em Python/Make que se conectam diretamente ao seu CRM (HubSpot, Pipedrive, Salesforce) e WhatsApp.',
        },
      ],
    },
    contact: {
      badge: 'INICIAR PROJETO',
      title: 'Pronto para Escalar Suas Conversões e Operação?',
      subtitle:
        'Conte sobre os objetivos da sua empresa. Responderei em até 24 horas com um plano claro e proposta.',
      nameLabel: 'Seu Nome',
      namePlaceholder: 'João Silva',
      emailLabel: 'Seu E-mail',
      emailPlaceholder: 'joao@exemplo.com',
      messageLabel: 'Detalhes & Objetivos do Projeto',
      messagePlaceholder: 'Descreva seu projeto, prazo desejado e estimativa de investimento...',
      submitCta: 'Enviar via WhatsApp →',
      guarantee: '🔒 Resposta sênior direta em até 24 horas. Sem mensagens automáticas genéricas.',
    },
    footer: {
      copyright: '© 2026 Gustavo Galvão — Desenvolvimento Web, Automação com IA & Marketing Digital.',
      tagline: 'Aplicações web de alta performance e motores de IA para empresas em crescimento.',
    },
  },
};
