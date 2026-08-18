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
      category: 'Web App E-commerce / Foodtech (Plataforma de Delivery)',
      type: 'independent',
      image: '/img/Fried-chicken.png',
      videoPoster: '/img/Fried-chicken.png',
      desc: 'Uma aplicação web interativa desenvolvida para digitalizar e otimizar o fluxo de pedidos de um restaurante especializado em frango frito. O projeto atua como um cardápio digital dinâmico, permitindo aos usuários navegar visualmente pelos produtos, gerenciar um carrinho de compras em tempo real e finalizar pedidos de forma contínua e sem fricção.',
      fullDescription:
        'Uma aplicação web interativa desenvolvida para digitalizar e otimizar o fluxo de pedidos de um restaurante especializado em frango frito. O projeto atua como um cardápio digital dinâmico, permitindo aos usuários navegar visualmente pelos produtos, gerenciar um carrinho de compras em tempo real e finalizar pedidos de forma contínua e sem fricção.',
      challenge:
        'Restaurantes e operações de delivery que dependem de pedidos manuais via WhatsApp frequentemente enfrentam gargalos de atendimento: clientes demoram para escolher, enviam pedidos desestruturados, esquecem informações de entrega e a operação perde tempo valioso gerenciando mensagens. Além disso, plataformas de delivery tradicionais (como iFood) cobram taxas abusivas que comprometem a margem de lucro de pequenos negócios.',
      solution:
        'Para resolver essa dor comercial, foi arquitetada uma interface Mobile-First voltada estritamente para conversão. O gerenciamento de estado do carrinho de compras (adição, remoção e totalização) é manipulado no lado do cliente (Client-Side Rendering) utilizando JavaScript para garantir resposta imediata aos toques do usuário. A principal solução de engenharia foi o desenvolvimento de um fluxo de checkout inteligente: a aplicação compila os dados do carrinho, formata estruturalmente o pedido (itens, subtotal, endereço e troco) e os injeta via URL diretamente na API do WhatsApp do estabelecimento, unindo a automação do sistema com a gratuidade do canal de mensagens.',
      features: [
        'Carrinho de Compras Reativo: Manipulação de DOM para adição, subtração e remoção de itens com recálculo instantâneo do valor total, sem recarregar a página.',
        'Integração de Checkout via WhatsApp (API): Conversão automática do estado do carrinho em uma mensagem de texto estruturada enviada diretamente para o WhatsApp da operação.',
        'Catálogo Visual Responsivo: Layout de grade (Grid/Flexbox) focado em Food Design, destacando imagens, preços e Calls to Action (CTAs) de forma clara.',
        'Validação de Formulário: Verificação de campos obrigatórios (como endereço de entrega e método de pagamento) antes de liberar o envio do pedido.',
      ],
      techStack: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'State Management', 'WhatsApp API'],
      metrics: [
        { label: 'Performance Lighthouse', value: '99% Web Vitals' },
        { label: 'Tempo de Fechamento', value: '< 15 seg' },
        { label: 'Taxas de Plataforma', value: '0% Comissão' },
        { label: 'Suporte', value: 'Cross-Browser / Mobile' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/fried-chicken',
      liveUrl: 'https://fried-chicken-beta.vercel.app',
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
      desc: 'Plataforma de inteligência artificial focada na criação de agentes autônomos sob medida para automação de atendimento, qualificação de vendas e otimização de rotinas operacionais.',
      fullDescription:
        'A Hestus AI foi desenvolvida para ajudar empresas a escalar resultados e reduzir custos por meio de automações personalizadas. A plataforma atua como uma força de trabalho digital, oferecendo soluções de IA que operam em três frentes essenciais: suporte ao cliente, tracionamento de vendas e automação de back-office. O objetivo é substituir gargalos manuais por agentes com linguagem natural e processamento instantâneo.',
      challenge:
        'Empresas lidam diariamente com um alto volume de tickets de suporte, qualificação manual de leads e tarefas operacionais repetitivas. Esse cenário gera custos elevados, lentidão no tempo de resposta (o que esfria potenciais vendas) e sobrecarga das equipes, limitando a capacidade de crescimento e escala do negócio.',
      solution:
        'Implementação de um ecossistema de agentes de IA divididos por especialidade. A arquitetura integra fluxos de conversação natural que fazem a triagem de contatos, qualificam leads com base em parâmetros de negócio e automatizam o roteamento de dados. A solução conecta uma interface fluida no frontend com motores de IA no backend, garantindo que o atendimento e as operações internas rodem no piloto automático com precisão.',
      features: [
        'IA de Atendimento: Resolução instantânea e humanizada de dúvidas frequentes, reduzindo drasticamente a necessidade de grandes equipes de suporte.',
        'IA de Vendas (Triagem e Qualificação): Agentes que engajam visitantes, aplicam critérios de qualificação de leads e executam follow-ups automáticos.',
        'IA Operacional: Automação de fluxos internos, desde o processamento de e-mails até a compilação de relatórios de desempenho.',
      ],
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'AI APIs', 'Webhooks', 'Vercel Deployment'],
      metrics: [
        { label: 'Eficiência de Suporte', value: '93% Resolvidos' },
        { label: 'Economia Operacional', value: '~50h / mês' },
        { label: 'Impacto em Vendas', value: '+35% a 40%' },
        { label: 'Redução de Custos', value: '-72% Custos' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/Hestus',
      liveUrl: 'https://hestus.vercel.app',
      isOnline: true,
    },
    'devsclub-store': {
      id: 'devsclub-store',
      title: 'DevsClub Store · E-Commerce & Tech Merch',
      subtitle: 'PROJETO AUTÔNOMO 04',
      category: 'E-Commerce Frontend & UI/UX',
      type: 'independent',
      image: '/img/devsclub-store.png',
      videoPoster: '/img/devsclub-store.png',
      desc: 'Interface de e-commerce otimizada e responsiva, projetada para a venda de produtos de tecnologia de alto padrão e acessórios de performance, com foco total na conversão e vitrine visual.',
      fullDescription:
        'A DevsClub Store é um projeto de vitrine virtual (e-commerce) desenvolvido para apresentar lançamentos e produtos de tecnologia premium, como smartwatches, fones de alta performance e óculos de realidade aumentada (ex: Vision Pro). A proposta do projeto é entregar uma navegação direta e imersiva, onde o destaque está integralmente na clareza das informações, na estética do produto e na facilidade de compra.',
      challenge:
        'Lojas virtuais tradicionais frequentemente sofrem com excesso de scripts pesados, poluição visual e lentidão no carregamento de catálogos de produtos, o que diminui a taxa de conversão e aumenta o bounce rate.',
      solution:
        'O projeto foi arquitetado como uma aplicação frontend estática e semântica, priorizando o tempo de carregamento e a fluidez da interface. A solução focou em construir um layout "clean" e de alto contraste (padrão light-mode), estruturando o DOM de forma leve para garantir renderização imediata. O design descarta elementos visuais poluídos em favor de um estilo corporativo e moderno que maximiza a percepção de valor dos itens anunciados.',
      features: [
        'Vitrine de Alta Conversão: Cards de produtos estruturados com imagens de destaque, descrições persuasivas (detalhando ergonomia, cancelamento de ruído e monitoramento de saúde) e forte apelo visual.',
        'Design Clean e Minimalista: Interface focada na usabilidade (UI/UX) com tipografia legível via Google Fonts, paleta de cores limpa e navegação intuitiva através de header fixo.',
        'Layout Responsivo: Estrutura adaptável a diferentes tamanhos de tela, garantindo navegação fluida em desktops, tablets e smartphones.',
      ],
      techStack: ['HTML5 Semântico', 'CSS3', 'JavaScript', 'Google Fonts', 'Vercel Deployment'],
      metrics: [
        { label: 'Performance PageSpeed', value: '+95 Pontos' },
        { label: 'Tempo de Carregamento', value: '< 1 segundo' },
        { label: 'Status', value: 'Concluído' },
        { label: 'Arquitetura', value: 'Mobile-First' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/DevClub-Store',
      liveUrl: 'https://devclubstore.vercel.app',
      isOnline: true,
    },
    'lu-phellipo': {
      id: 'lu-phellipo',
      title: 'Lu Phellipo · Site de Mandalas & Portfólio Artístico',
      subtitle: 'PROJETO AUTÔNOMO 05',
      category: 'Frontend Development & Vitrine Digital (Web Portfolio)',
      type: 'independent',
      image: '/img/projeto2.png',
      videoPoster: '/img/projeto2.png',
      desc: 'Uma vitrine virtual e portfólio digital desenvolvido para a artista plástica Luciana Phellipo. O projeto foi projetado para exibir mandalas exclusivas e 100% artesanais, transmitindo a essência espiritual da arte enquanto facilita o contato e a geração de encomendas diretas.',
      fullDescription:
        'Uma vitrine virtual e portfólio digital desenvolvido para a artista plástica Luciana Phellipo. O projeto foi projetado para exibir mandalas exclusivas e 100% artesanais, transmitindo a essência espiritual da arte enquanto facilita o contato e a geração de encomendas diretas. O site conta a história da artista inspirada no autoconhecimento e em conceitos de Carl Jung, destacando cada obra com galerias imersivas e integração direta ao canal de vendas.',
      challenge:
        'Transpor o trabalho físico, artesanal e profundamente espiritual de uma artista para o meio digital sem perder seu valor agregado. O site não poderia ser apenas um "catálogo comercial"; precisava narrar a história da artista e simultaneamente atuar como ferramenta otimizada de captação de encomendas.',
      solution:
        'Desenvolvimento de uma vitrine digital em HTML5 semântico, CSS3 e JavaScript puro (Vanilla JS), combinando narrativa artística com engenharia de conversão. Foi implementado carregamento inteligente de imagens (lazy loading), acessibilidade com padrões WAI-ARIA, e um funil de orçamentos com botão flutuante e CTAs integrados diretamente à API do WhatsApp Comercial.',
      features: [
        'Vitrine Visual e Imersiva: Galerias de imagens desenvolvidas para dar destaque total às cores e geometria das obras, integrando o portfólio diretamente ao Instagram da artista.',
        'Funil de Vendas e Conversão Rápida: CTAs estratégicos e botão flutuante integrados à API do WhatsApp Comercial, encurtando a jornada do visitante até o orçamento de peças exclusivas.',
        'Acessibilidade e SEO Técnico: Construção com tags semânticas estritas (<article>, <section>, <blockquote>) e atributos de acessibilidade (aria-label, aria-hidden) para máxima indexação no Google.',
        'Carregamento Inteligente: Otimização com loading="lazy" e tipografia do Google Fonts garantindo alta nitidez sem pesar no mobile.',
      ],
      techStack: ['HTML5 Semântico', 'CSS3', 'JavaScript (Vanilla JS)', 'Google Fonts', 'WhatsApp API', 'Vercel Deployment'],
      metrics: [
        { label: 'Tempo de Carregamento', value: '< 0.8s (FCP)' },
        { label: 'PageSpeed Mobile', value: '98/100' },
        { label: 'Acessibilidade', value: 'WAI-ARIA 100%' },
        { label: 'Canal de Pedidos', value: 'WhatsApp Direto' },
      ],
      githubUrl: 'https://github.com/pietrolorenzo/Luphellipo-Mandalas',
      liveUrl: 'https://luphellipo.vercel.app/',
      isOnline: true,
    },
    'cebe-portal': {
      id: 'cebe-portal',
      title: 'CEBE-Portal · Portal do Aluno do CEBE',
      subtitle: 'PROJETO FULLSTACK & EDU TECH',
      category: 'Fullstack Development & Education Tech',
      type: 'independent',
      image: '/img/projeto1.png',
      videoPoster: '/img/projeto1.png',
      desc: 'Plataforma acadêmica completa (Portal do Aluno) para o Centro de Educação e Bem-Estar, construída como um monorepo que integra um frontend responsivo e semântico a uma API REST robusta em Java com Spring Boot.',
      fullDescription:
        'Desenvolvido em equipe (com Fernando Bartilotti, Pietro Lorenzo e Rafael Navarro) para a disciplina de Laboratório de Desenvolvimento de Software com o Professor Igor, o CEBE-Portal visa a transformação digital de uma escola profissionalizante de bairro. O sistema substitui processos físicos, permitindo que os alunos façam login (via CPF e data de nascimento), realizem matrículas em novas turmas, consultem notas, boletos e abram chamados de atendimento. Administradores possuem um painel próprio para gerenciar cursos, turmas e responder aos alunos.',
      challenge:
        'O cenário original envolvia processos baseados em papel e dificuldade no controle de vagas em tempo real. O desafio técnico foi digitalizar o fluxo de matrícula e centralizar os dados em uma plataforma web moderna, garantindo segurança (autenticação JWT) e implementando comunicação assíncrona. Era necessário garantir a integridade dos dados (como chaves únicas para evitar matrículas duplicadas e controle de relacionamentos entre alunos, cursos e turmas) e sincronizar notificações entre diferentes sessões do navegador.',
      solution:
        'O projeto foi estruturado com uma separação clara entre cliente (frontend estático) e servidor (backend Java). A API foi desenhada utilizando os princípios REST, com validação de regras de negócio estritas no backend (como validação de vagas durante a matrícula). Um dos grandes diferenciais da solução é o sistema de atendimento ao aluno com Chat em Tempo Real, construído utilizando SSE (Server-Sent Events), permitindo comunicação bidirecional sem a necessidade de WebSockets pesados. As notificações locais foram sincronizadas através de polling inteligente e eventos de localStorage.',
      features: [
        'Gestão Acadêmica e Financeira: Fluxo completo para o aluno visualizar a situação de pagamentos, grade curricular e realizar matrículas, com validação no backend para evitar duplicatas.',
        'Suporte em Tempo Real (SSE): Módulo de chamados de atendimento com chat ao vivo entre aluno e administração utilizando conexões Server-Sent Events com gerenciamento de timeouts e emitters.',
        'Sistema de Notificações Sincronizado: Serviço frontend que emite eventos globais, faz polling com o banco de dados e sincroniza notificações entre múltiplas abas abertas pelo mesmo usuário.',
        'Segurança e Controle de Acesso: Autenticação stateless via Spring Security + JWT, com rotas protegidas (alunos acessam seus dados, admins gerenciam o sistema) e senhas hasheadas com BCrypt.',
      ],
      techStack: ['Java 21', 'Spring Boot 3.5', 'Spring Security (JWT)', 'Hibernate / JPA', 'MySQL', 'SSE (Server-Sent Events)', 'Vanilla JS', 'HTML5/CSS3'],
      metrics: [
        { label: 'Arquitetura Backend', value: 'Java 21 & Spring Boot' },
        { label: 'Tempo Real', value: 'SSE (Server-Sent Events)' },
        { label: 'Autenticação', value: 'Stateless JWT + BCrypt' },
        { label: 'Banco de Dados', value: 'MySQL Relacional' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/CEBE-Portal',
      liveUrl: 'https://github.com/gustavojgalvao/CEBE-Portal',
      isOnline: false,
    },
    promptbase: {
      id: 'promptbase',
      title: 'PromptBase · AI Prompt Repository',
      subtitle: 'PROJETO AUTÔNOMO 07',
      category: 'Web Application & Productivity Tools',
      type: 'independent',
      image: '/img/projeto3.png',
      videoPoster: '/img/projeto3.png',
      desc: 'Uma aplicação web minimalista projetada como um repositório pessoal para salvar, categorizar e gerenciar prompts de Inteligência Artificial, marketing copy e banco de dados CSV, funcionando como um "segundo cérebro" para interações com IA.',
      fullDescription:
        'O PromptBase nasceu da necessidade de centralizar fluxos de trabalho com IA. O aplicativo permite que o usuário arquive instruções (prompts) longas e complexas, categorizando-as em áreas como Copywriting, Imagens, DNA de Empresa e Checklists. Além de atuar como um repositório simples de notas, a aplicação implementa um sistema inovador de "Prompts Interligados" e de variáveis dinâmicas ({{variavel}}), permitindo estruturar macros que preenchem parâmetros automaticamente antes de copiar a instrução para o ChatGPT ou Gemini.',
      challenge:
        'O principal desafio na criação desta ferramenta foi manter a interface absurdamente rápida e sem fricções, semelhante a aplicativos nativos de anotações (como o Obsidian ou Notion), sem depender de frameworks pesados no client-side. A meta era garantir que o usuário pudesse encontrar, visualizar e copiar um prompt em poucos segundos através de comandos de teclado (ex: atalho ⌘K).',
      solution:
        'A solução adotada foi o desenvolvimento focado no ecossistema nativo da web (Vanilla JavaScript). O layout foi desenhado com uma arquitetura de "Sidebar & Main View", maximizando o espaço de leitura. A implementação focou na manipulação direta do DOM e no gerenciamento de estados locais para permitir que filtros por categoria, adição de novos cards e conexões via "Grafo" ocorressem de forma instantânea.',
      features: [
        'Gestão Dinâmica de Prompts: Editor intuitivo que reconhece variáveis via sintaxe de chaves {{campo}} e interliga outros prompts usando colchetes [[Nome do Prompt]].',
        'Visualização em Grafo: Uma aba interativa construída utilizando o elemento <canvas> que exibe visualmente como diferentes prompts e projetos se conectam dentro da biblioteca do usuário.',
        'Sistema de Pré-Preenchimento: Modais inteligentes que identificam as variáveis criadas no prompt e pedem o preenchimento dos dados antes de copiar o texto final para a área de transferência.',
        'UI/UX Minimalista: Design responsivo com sidebar retrátil, barra superior limpa, modais amigáveis e feedback instantâneo de interface (ex: toast "Copiado!").',
      ],
      techStack: ['HTML5', 'CSS3', 'JavaScript (Vanilla JS)', 'HTML5 Canvas API', 'DOM Manipulation', 'Vercel Deployment'],
      metrics: [
        { label: 'Renderização do Grafo', value: 'Canvas 60 FPS' },
        { label: 'Tempo de Resposta', value: '< 50ms (Instantâneo)' },
        { label: 'Variáveis Dinâmicas', value: 'Parser {{macro}}' },
        { label: 'Arquitetura', value: 'Client-Side Puro' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/PromptBase',
      liveUrl: 'https://prompt-base-peach.vercel.app',
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
      title: 'Fried Chicken · Digital Menu & Delivery',
      subtitle: 'INDEPENDENT BUILD 02',
      category: 'E-Commerce Web App / Foodtech (Delivery Platform)',
      type: 'independent',
      image: '/img/Fried-chicken.png',
      videoPoster: '/img/Fried-chicken.png',
      desc: 'An interactive web app engineered to streamline and digitize the ordering flow for a fast-food brand. Features dynamic category browsing, reactive cart state, and frictionless direct WhatsApp checkout.',
      fullDescription:
        'An interactive web application developed to digitize and optimize the ordering workflow for a fried chicken food brand. The platform serves as a dynamic digital menu allowing customers to visually explore menu items, manage an active shopping cart in real time, and complete orders with zero friction.',
      challenge:
        'Food delivery operations relying on manual WhatsApp chats suffer from slow order taking, missing delivery details, and disorganized messages. Additionally, traditional delivery aggregator apps charge steep commissions of 20% to 30% that erode restaurant margins.',
      solution:
        'Architected a conversion-focused Mobile-First web app with Client-Side Rendering state management for instant UI feedback. The core engineering solution is an automated WhatsApp checkout pipeline that formats the full order payload (items, subtotal, delivery address, change) and routes it directly to WhatsApp with 0% middleman fees.',
      features: [
        'Reactive Shopping Cart: Client-side state handling for add, edit, and remove actions with real-time recalculation and zero reloads.',
        'Direct WhatsApp Checkout API: Automatically compiles cart items into a structured order payload dispatched to the kitchen.',
        'Responsive Food Design Catalog: High-clarity visual grid highlighting appetizing images, pricing, and clear CTAs.',
        'Client Form Validation: Verifies required fields (address, payment method, change) before dispatching the order.',
      ],
      techStack: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'State Management', 'WhatsApp API'],
      metrics: [
        { label: 'Lighthouse Score', value: '99% Web Vitals' },
        { label: 'Checkout Time', value: '< 15 sec' },
        { label: 'Platform Fees', value: '0% Commission' },
        { label: 'Compatibility', value: 'Cross-Browser / Mobile' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/fried-chicken',
      liveUrl: 'https://fried-chicken-beta.vercel.app',
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
      desc: 'Artificial intelligence platform focused on custom autonomous agents for customer support automation, sales lead qualification, and operational workflow optimization.',
      fullDescription:
        'Hestus AI was engineered to help companies scale revenue and reduce overhead through tailored AI automations. Operating as a digital workforce, it deploys intelligent agents across three critical pillars: customer support resolution, sales lead qualification, and back-office process automation.',
      challenge:
        'High volumes of support tickets, manual lead qualification, and repetitive operational tasks overload internal teams, spike operational costs, and delay response times.',
      solution:
        'Architected a specialized multi-agent AI ecosystem with natural conversational pipelines that qualify inbound contacts and automate data routing between frontend interfaces, webhooks, and backend LLM reasoning engines.',
      features: [
        'Customer Support AI: Instant, humanized resolution of routine inquiries, slashing support ticket backlogs.',
        'Sales Qualification AI: Autonomous agents engaging inbound visitors, evaluating pipeline fit, and triggering automated follow-ups.',
        'Operational Workflow AI: Automated processing of inbound data, email categorization, and metric reporting.',
      ],
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'AI APIs', 'Webhooks', 'Vercel Deployment'],
      metrics: [
        { label: 'Ticket Resolution', value: '93% Autonomous' },
        { label: 'Time Saved', value: '~50 hrs / mo' },
        { label: 'Sales Conversion', value: '+35% to 40%' },
        { label: 'Cost Reduction', value: '-72% Overhead' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/Hestus',
      liveUrl: 'https://hestus.vercel.app',
      isOnline: true,
    },
    'devsclub-store': {
      id: 'devsclub-store',
      title: 'DevsClub Store · E-Commerce & Tech Merch',
      subtitle: 'INDEPENDENT BUILD 04',
      category: 'E-Commerce Frontend & UI/UX',
      type: 'independent',
      image: '/img/devsclub-store.png',
      videoPoster: '/img/devsclub-store.png',
      desc: 'Optimized and responsive e-commerce interface engineered for high-end tech gear and performance accessories, strictly focused on visual conversion and showcase clarity.',
      fullDescription:
        'DevsClub Store is a virtual storefront designed to showcase premium tech releases—such as smartwatches, active noise-canceling headphones, and spatial computing headsets (e.g. Vision Pro). The objective is to deliver direct, immersive browsing where product clarity, aesthetic presentation, and frictionless UX take center stage.',
      challenge:
        'Traditional online stores are bloated with heavy third-party scripts, aggressive popups, and slow product catalogs that drag down conversion rates and increase bounce rates.',
      solution:
        'Architected as a semantic, static frontend prioritizing sub-second load times and fluid interaction. Features a clean, high-contrast light-mode layout structured on lightweight DOM nodes for immediate client-side rendering and high perceived value.',
      features: [
        'High-Conversion Showcase: Structured product cards with hero imagery, persuasive copy (ergonomics, ANC, health tracking), and prominent CTAs.',
        'Clean & Minimalist Design: High-readability typography via Google Fonts, modern corporate palette, and intuitive sticky header navigation.',
        'Fully Responsive Architecture: Seamless adaptation across viewport sizes, delivering crisp galleries from mobile to 4K displays.',
      ],
      techStack: ['Semantic HTML5', 'CSS3', 'JavaScript', 'Google Fonts', 'Vercel Deployment'],
      metrics: [
        { label: 'PageSpeed Score', value: '+95 Score' },
        { label: 'Load Latency', value: '< 1 second' },
        { label: 'Status', value: 'Completed' },
        { label: 'Architecture', value: 'Mobile-First' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/DevClub-Store',
      liveUrl: 'https://devclubstore.vercel.app',
      isOnline: true,
    },
    'lu-phellipo': {
      id: 'lu-phellipo',
      title: 'Lu Phellipo · Mandala Art & Web Portfolio',
      subtitle: 'INDEPENDENT BUILD 05',
      category: 'Frontend Development & Digital Showcase (Web Portfolio)',
      type: 'independent',
      image: '/img/projeto2.png',
      videoPoster: '/img/projeto2.png',
      desc: 'A virtual showcase and digital portfolio engineered for visual artist Luciana Phellipo. Designed to display exclusive handcrafted mandalas while facilitating direct commissioned inquiries.',
      fullDescription:
        'A digital showcase and portfolio developed for fine artist Luciana Phellipo to present 100% handcrafted mandalas, conveying the spiritual essence of the artwork while enabling effortless contact and custom art commissions. Inspired by self-discovery and Carl Jung archetypes, the platform blends visual storytelling with conversion-focused UX.',
      challenge:
        'Translating the tactile, spiritual depth of handcrafted physical art into a digital experience without diluting its perceived premium value or turning it into a generic catalog.',
      solution:
        'Built a semantic, lightweight web application using HTML5, CSS3, and Vanilla JavaScript. Implemented lazy-loaded imagery, strict WAI-ARIA accessibility, and a seamless commission inquiry pipeline connecting directly to WhatsApp Business API.',
      features: [
        'Immersive Visual Gallery: Image layouts designed to highlight color harmony and geometric precision with Instagram feed integration.',
        'Fast Inquiry Funnel: Strategic CTAs and floating contact trigger routed straight to WhatsApp Business API for instant custom piece quotes.',
        'Semantic HTML & SEO: Strict markup (<article>, <section>, <blockquote>) with ARIA labels ensuring maximum search discoverability and screen-reader accessibility.',
        'Performance-First Assets: Native lazy loading and Google Fonts optimization delivering instant mobile response.',
      ],
      techStack: ['Semantic HTML5', 'CSS3', 'JavaScript (Vanilla JS)', 'Google Fonts', 'WhatsApp API', 'Vercel Deployment'],
      metrics: [
        { label: 'FCP Load Time', value: '< 0.8s' },
        { label: 'Mobile PageSpeed', value: '98/100' },
        { label: 'Accessibility', value: 'WAI-ARIA 100%' },
        { label: 'Order Channel', value: 'Direct WhatsApp' },
      ],
      githubUrl: 'https://github.com/pietrolorenzo/Luphellipo-Mandalas',
      liveUrl: 'https://luphellipo.vercel.app/',
      isOnline: true,
    },
    'cebe-portal': {
      id: 'cebe-portal',
      title: 'CEBE-Portal · Student Academic Management Platform',
      subtitle: 'FULLSTACK & EDU TECH BUILD',
      category: 'Fullstack Development & Education Tech',
      type: 'independent',
      image: '/img/projeto1.png',
      videoPoster: '/img/projeto1.png',
      desc: 'Complete academic platform (Student Portal) engineered for Centro de Educação e Bem-Estar, built as a monorepo integrating a responsive semantic frontend with a robust Java & Spring Boot REST API.',
      fullDescription:
        'Developed collaboratively with Fernando Bartilotti, Pietro Lorenzo, and Rafael Navarro for the Software Development Laboratory course under Prof. Igor. CEBE-Portal drives the digital transformation of a community vocational institute, replacing legacy paper processes with modern web services: secure CPF login, automated class enrollment, grade and invoice access, and real-time support ticketing.',
      challenge:
        'Eliminating paper-bound registrations and uncontrolled enrollment bottlenecks while guaranteeing strict relational data integrity (preventing duplicate enrollments, managing student-course relationships) and synchronizing live notifications across browser sessions.',
      solution:
        'Structured with a clean separation of concerns between client and server. Built a Spring Boot REST API with strict business logic validation alongside a lightweight real-time support chat powered by Server-Sent Events (SSE) instead of bloated WebSockets, paired with smart localStorage cross-tab notification synchronization.',
      features: [
        'Academic & Financial Portal: Full student workflow for curriculum tracking, invoice verification, and duplicate-safe course enrollment.',
        'Real-Time Student Support (SSE): Live ticketing chat between students and administration utilizing resilient Server-Sent Events connections.',
        'Synchronized Notification Engine: Frontend service broadcasting global events, database polling, and cross-tab localStorage syncing.',
        'Enterprise Security & RBAC: Stateless Spring Security + JWT authentication with granular role-based access and BCrypt password hashing.',
      ],
      techStack: ['Java 21', 'Spring Boot 3.5', 'Spring Security (JWT)', 'Hibernate / JPA', 'MySQL', 'SSE (Server-Sent Events)', 'Vanilla JS', 'HTML5/CSS3'],
      metrics: [
        { label: 'Backend Stack', value: 'Java 21 & Spring Boot' },
        { label: 'Real-Time Sync', value: 'SSE (Server-Sent Events)' },
        { label: 'Security & Auth', value: 'Stateless JWT + BCrypt' },
        { label: 'Database', value: 'MySQL Relacional' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/CEBE-Portal',
      liveUrl: 'https://github.com/gustavojgalvao/CEBE-Portal',
      isOnline: false,
    },
    promptbase: {
      id: 'promptbase',
      title: 'PromptBase · AI Prompt Repository',
      subtitle: 'INDEPENDENT BUILD 07',
      category: 'Web Application & Productivity Tools',
      type: 'independent',
      image: '/img/projeto3.png',
      videoPoster: '/img/projeto3.png',
      desc: 'A minimalist web application engineered as a personal second-brain repository for storing, categorizing, and managing AI prompts, copywriting formulas, and structured CSV data.',
      fullDescription:
        'PromptBase was engineered to centralize high-velocity AI workflows. The app allows users to archive complex multi-step prompts, categorized into areas like Copywriting, Image Generation, Brand DNA, and Execution Checklists. Features an interconnected prompt graph and dynamic macro variables ({{variable}}) that pre-fill custom parameters prior to clipboard export.',
      challenge:
        'Creating an ultra-fast, friction-free interface comparable to desktop note-taking apps like Obsidian or Notion, completely eliminating heavy client-side framework bloat while providing sub-second keyboard discovery.',
      solution:
        'Built with native web standards (Vanilla JavaScript, HTML5, CSS3) using a Sidebar & Main View architecture. Direct DOM manipulation and local state management power instant category filters, dynamic prompt interpolation, and interactive Canvas graph rendering.',
      features: [
        'Dynamic Prompt Management: Intuitive editor parsing variable syntax {{field}} and linking prompt dependencies with brackets [[Prompt Name]].',
        'Interactive Canvas Graph: Interactive visual node map rendered with HTML5 <canvas> showing semantic connections across stored prompts.',
        'Smart Variable Pre-Fill: Modal dialogs that automatically extract template placeholders and request runtime inputs before copying to clipboard.',
        'Minimalist UX: Distraction-free interface with collapsible sidebar, command shortcuts, and instant feedback toasts.',
      ],
      techStack: ['HTML5', 'CSS3', 'JavaScript (Vanilla JS)', 'HTML5 Canvas API', 'DOM Manipulation', 'Vercel Deployment'],
      metrics: [
        { label: 'Graph Rendering', value: 'Canvas 60 FPS' },
        { label: 'UI Response Time', value: '< 50ms (Instant)' },
        { label: 'Dynamic Variables', value: '{{macro}} Parser' },
        { label: 'Architecture', value: 'Pure Client-Side' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/PromptBase',
      liveUrl: 'https://prompt-base-peach.vercel.app',
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
