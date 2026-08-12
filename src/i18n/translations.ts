export type Language = 'en' | 'pt';

export interface Translations {
  nav: {
    role: string;
    portfolio: string;
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
    trustStrip: {
      label: string;
      desc: string;
    }[];
  };
  portfolioBanner: {
    heading: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
      tags: string[];
    }[];
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
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitCta: string;
  };
  footer: {
    copyright: string;
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
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      role: 'Web · AI · Marketing',
      portfolio: 'Portfolio',
      cta: 'Start a Project',
    },
    hero: {
      eyebrow: "Hi, I'm Gustavo",
      titleStart: 'Web Developer,',
      morphWords: ['AI Automation', 'React Systems', 'Growth Engineering'],
      titleEnd: '& Digital Marketing',
      subtitle:
        'I design premium interfaces and automated systems that scale businesses — from flawless UI/UX to artificial intelligence, turning ideas into high-conversion platforms.',
      primaryCta: 'Start a Project →',
      secondaryCta: 'View Portfolio',
      trustStrip: [
        {
          label: 'SENIOR-LEVEL WORK',
          desc: 'Direct execution, no juniors or account managers.',
        },
        {
          label: 'FIXED, CLEAR PRICING',
          desc: 'Agency capability without agency overhead.',
        },
        {
          label: 'ONE POINT OF CONTACT',
          desc: 'You talk directly to the person building it.',
        },
      ],
    },
    portfolioBanner: {
      heading: 'Explore My Work',
      subtitle: "A closer look at the platforms and systems I've shipped.",
      cta: 'See the Portfolio →',
    },
    services: {
      title: 'Expertise & Capabilities',
      subtitle: 'End-to-end digital solutions designed for conversion, speed, and scalable growth.',
      items: [
        {
          title: 'Premium Web Design & Development',
          desc: 'High-performance landing pages and optimized online stores. Built around UI/UX, modern layouts, fluid GSAP animation, and frictionless checkout.',
          tags: ['UI/UX', 'E-COMMERCE', 'GSAP'],
        },
        {
          title: 'Growth Marketing — SEO, GEO & Paid Traffic',
          desc: 'Visibility where buyers actually look — ranked on Google, referenced by AI search engines (GEO), and reached through paid campaigns built around real conversion funnels.',
          tags: ['SEO', 'GEO', 'PAID ADS'],
        },
        {
          title: 'AI-Powered CRM & Automation',
          desc: 'A CRM that runs itself — automated lead triage, follow-ups, and client communication handled by AI, so nothing falls through the cracks while you focus on the business.',
          tags: ['CRM', 'AI AGENTS', 'WEBHOOKS'],
        },
      ],
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
    contact: {
      title: 'Ready to take your project to the next level?',
      subtitle:
        "Let's talk about how the right technology can streamline your operation and drive more results.",
      nameLabel: 'Your Name',
      namePlaceholder: 'John Doe',
      emailLabel: 'Email Address',
      emailPlaceholder: 'john@example.com',
      messageLabel: 'Project Details',
      messagePlaceholder: 'Tell me about your goals, scope, and timeline...',
      submitCta: 'Send via WhatsApp',
    },
    footer: {
      copyright: '© 2026 Gustavo — Web Development, AI Automation & Digital Marketing.',
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
  },
  pt: {
    nav: {
      role: 'Web · IA · Marketing',
      portfolio: 'Portfólio',
      cta: 'Iniciar Projeto',
    },
    hero: {
      eyebrow: 'Olá, eu sou o Gustavo',
      titleStart: 'Desenvolvedor Web,',
      morphWords: ['Automação com IA', 'Sistemas React', 'Engenharia de Growth'],
      titleEnd: '& Marketing Digital',
      subtitle:
        'Crio interfaces premium e sistemas automatizados que alavancam negócios — de UI/UX impecável à inteligência artificial, transformando ideias em plataformas de alta conversão.',
      primaryCta: 'Iniciar Projeto →',
      secondaryCta: 'Ver Portfólio',
      trustStrip: [
        {
          label: 'TRABALHO DE NÍVEL SÊNIOR',
          desc: 'Execução direta, sem estagiários ou gerentes de conta.',
        },
        {
          label: 'PREÇO FIXO E TRANSPARENTE',
          desc: 'Capacidade de agência sem os custos de agência.',
        },
        {
          label: 'PONTO ÚNICO DE CONTATO',
          desc: 'Você fala diretamente com quem está construindo.',
        },
      ],
    },
    portfolioBanner: {
      heading: 'Explore Meu Trabalho',
      subtitle: 'Uma visão detalhada das plataformas e sistemas que entreguei.',
      cta: 'Ver o Portfólio →',
    },
    services: {
      title: 'Especialidades & Soluções',
      subtitle: 'Soluções digitais completas focadas em conversão, velocidade e crescimento escalável.',
      items: [
        {
          title: 'Design & Desenvolvimento Web Premium',
          desc: 'Landing pages de alta performance e lojas online otimizadas. Construídas com foco em UI/UX, layouts modernos, animações fluídas em GSAP e checkout sem atrito.',
          tags: ['UI/UX', 'E-COMMERCE', 'GSAP'],
        },
        {
          title: 'Growth Marketing — SEO, GEO & Tráfego Pago',
          desc: 'Visibilidade onde os compradores realmente procuram — ranqueado no Google, citado em buscadores por IA (GEO) e alcançado por campanhas pagas com funis reais.',
          tags: ['SEO', 'GEO', 'ADS PAGOS'],
        },
        {
          title: 'CRM & Automação com Inteligência Artificial',
          desc: 'Um CRM que roda sozinho — triagem automatizada de leads, follow-ups e atendimento via IA, garantindo que nada passe sem atenção enquanto você foca no negócio.',
          tags: ['CRM', 'AGENTES IA', 'WEBHOOKS'],
        },
      ],
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
    contact: {
      title: 'Pronto para levar seu projeto ao próximo nível?',
      subtitle:
        'Vamos conversar sobre como a tecnologia certa pode simplificar sua operação e gerar mais resultados.',
      nameLabel: 'Seu Nome',
      namePlaceholder: 'João Silva',
      emailLabel: 'E-mail',
      emailPlaceholder: 'joao@exemplo.com',
      messageLabel: 'Detalhes do Projeto',
      messagePlaceholder: 'Conte sobre seus objetivos, escopo e prazo...',
      submitCta: 'Enviar via WhatsApp',
    },
    footer: {
      copyright: '© 2026 Gustavo — Desenvolvedor Web, Automação com IA & Marketing Digital.',
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
  },
};
