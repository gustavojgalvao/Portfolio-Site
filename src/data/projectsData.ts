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
      image: '/img/BRL2GO.png',
      videoPoster: '/img/BRL2GO.png',
      videoSrc: '/assets/videoBRL2GO.webm',
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
      videoSrc: '/assets/videoFriedChicken.webm',
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
        'O principal desafio foi conceber uma interface de e-commerce moderna com excelente apelo visual e tempo de carregamento instantâneo, sem perder a simplicidade na jornada do usuário. O projeto precisava garantir que o visitante pudesse escanear os produtos, checar preços/descontos e interagir com o carrinho sem encontrar distrações ou lentidão no mobile.',
      solution:
        'O projeto foi arquitetado como uma aplicação frontend estática e semântica, priorizando o tempo de carregamento e a fluidez da interface. A solução focou em construir um layout "clean" e de alto contraste (padrão light-mode), estruturando o catálogo com foco em hierarquia visual (cards bem espaçados, badges de desconto com alto destaque e tipografia moderna). A organização do código garante total responsividade e aderência aos padrões de UI/UX para conversão rápida.',
      features: [
        'Vitrine Visual de Alto Impacto: Apresentação de produtos em grade (Grid) com tratamento visual de ponta, destacando mockups e detalhes técnicos de cada item.',
        'Hierarquia de Preços e Conversão: Destaque inteligente para preços originais vs. promocionais, reforçando o valor percebido das ofertas.',
        'Design Mobile-First: Interface 100% responsiva pensada para compras rápidas no smartphone.',
        'Performance Máxima: Construção leve sem frameworks pesados, garantindo pontuações máximas no Google PageSpeed e carregamento em milissegundos.',
      ],
      techStack: ['HTML5 Semântico', 'CSS3 Moderno', 'JavaScript', 'Google Fonts', 'Vercel Deployment'],
      metrics: [
        { label: 'Tempo de Carregamento', value: '< 0.5s' },
        { label: 'PageSpeed Score', value: '100/100' },
        { label: 'Taxa de Conversão UI', value: 'Otimizada' },
        { label: 'Experiência Mobile', value: '100% Fluida' },
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
      image: '/img/LuPhellipo.png',
      videoPoster: '/img/LuPhellipo.png',
      videoSrc: '/assets/videoLuPhellipo.webm',
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
        'Acessibilidade e SEO Técnico: Construção com tags semânticas estritas (<article>, <section>, blockquote) e atributos de acessibilidade (aria-label, aria-hidden) para máxima indexação no Google.',
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
      image: '/img/CEBEPortal.png',
      videoPoster: '/img/CEBEPortal.png',
      videoSrc: '/assets/videoCEBE.webm',
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
      liveUrl: '',
      isOnline: false,
    },
    promptbase: {
      id: 'promptbase',
      title: 'PromptBase · AI Prompt Repository',
      subtitle: 'PROJETO AUTÔNOMO 07',
      category: 'Web Application & Productivity Tools',
      type: 'independent',
      image: '/img/PromptBase.png',
      videoPoster: '/img/PromptBase.png',
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
    sorrisoperfeito: {
      id: 'sorrisoperfeito',
      title: 'SorrisoPerfeito · Landing Page Odontológica & Captação de Leads',
      subtitle: 'PROJETO AUTÔNOMO 08',
      category: 'Frontend Development & Funil de Conversão (Marketing Tech)',
      type: 'independent',
      image: '/img/sorrisoPerfeito.png',
      videoPoster: '/img/sorrisoPerfeito.png',
      desc: 'Landing page de alta performance projetada especificamente para clínicas odontológicas. Atua como uma vitrine digital focada na atração de pacientes e como o topo de funil para sistemas automatizados de triagem e qualificação de leads.',
      fullDescription:
        'O projeto "SorrisoPerfeito" foi desenvolvido para estabelecer a presença digital de ponta a ponta de uma clínica focada em estética e reabilitação (como implantes, ortodontia e clareamento). Mais do que um site institucional, a interface foi desenhada como uma máquina de conversão. Ela transmite credibilidade através da apresentação do corpo clínico e provas sociais, guiando o visitante diretamente para o agendamento de consultas via formulário ou botão de WhatsApp.',
      challenge:
        'No nicho odontológico e estético, o maior desafio das clínicas não é apenas atrair cliques, mas filtrar os "curiosos" e captar leads qualificados de alto ticket sem perder a conexão humana. A solução exigia uma interface que carregasse instantaneamente no mobile (origem principal do tráfego pago) e que estivesse pronta para ser plugada em sistemas de retaguarda (como CRMs e automações de triagem via IA) no momento em que o paciente preenche o formulário.',
      solution:
        'A página foi construída seguindo as melhores práticas de UI/UX para a área da saúde: layout "clean" em "light-mode" (transmitindo higiene e modernidade), navegação fluida em Single Page Application (SPA) e microinterações elegantes. A estrutura técnica foi planejada para que os botões de contato e formulários possam acionar webhooks invisíveis (integráveis com ferramentas como n8n), conectando a conversão do Frontend diretamente com a triagem inteligente do Backend.',
      features: [
        'Design Orientado à Confiança (Trust Design): Seções dedicadas a exibir a experiência dos dentistas e depoimentos reais de pacientes (prova social), fatores decisivos na contratação de serviços de saúde.',
        'Venda Visual de Tratamentos: Cards explicativos organizados em grade (Grid) destacando os principais serviços da clínica de forma direta e sem jargões técnicos.',
        'Mobile-First e CTAs Estratégicos: Estrutura totalmente responsiva, garantindo que botões de conversão e informações de contato estejam sempre acessíveis, maximizando a resposta de campanhas de anúncios.',
        'Pronto para Automação: Arquitetura de formulários preparada para envio de dados assíncrono (Fetch API), facilitando a integração do lead capturado com robôs de qualificação.',
      ],
      techStack: ['HTML5', 'CSS3 (Flexbox & Grid)', 'JavaScript (Fetch API)', 'Local SEO', 'Vercel Deployment'],
      metrics: [
        { label: 'Conversão de Tráfego', value: 'Alta Performance' },
        { label: 'Tempo de Carregamento', value: '< 1s Mobile' },
        { label: 'Core Web Vitals', value: '100% Verde' },
        { label: 'Integração CRM', value: 'Webhooks Ready' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/SorrisoPerfeito',
      liveUrl: 'https://sorrisoperfeito-swart.vercel.app',
      isOnline: true,
    },
    'speak-flow': {
      id: 'speak-flow',
      title: 'Speak Flow · Plataforma de Ensino de Inglês',
      subtitle: 'TRABALHO DE CLIENTE 01',
      category: 'Landing Page / Funil de Conversão',
      type: 'client',
      image: '/img/speakflow.webp',
      videoPoster: '/img/speakflow.webp',
      videoSrc: '/assets/videoSpeakFlow.webm',
      desc: 'Uma landing page desenvolvida para a professora de inglês Anna Luíza. O site atende tanto alunos online de todo o país quanto turmas presenciais em Camaçari, Bahia.',
      fullDescription: 'O Speak Flow foi criado sob medida para a professora de inglês Anna Luíza. O projeto envolveu a criação de uma landing page exclusiva e codificada à mão usando HTML, CSS e JavaScript. A estrutura foi pensada do começo ao fim para maximizar o ranqueamento no Google e facilitar as descobertas por inteligência artificial.',
      challenge: 'A Anna já tinha uma ótima base de alunos por indicação, mas sentia falta de uma vitrine profissional na internet. Sem um site, toda nova conversa no WhatsApp começava do zero e ela não existia nos resultados de busca do Google.',
      solution: 'Criei um site de página única totalmente responsivo que funciona como um funil de vendas direto. Ele apresenta a metodologia, tira as dúvidas mais comuns, mostra os preços e traz depoimentos reais. Tudo isso conduz o visitante naturalmente para uma conversa no WhatsApp, com o texto otimizado estrategicamente para motores de busca e respostas de IA.',
      features: [
        'Funil de conversão single-page com foco no WhatsApp',
        'Detalhamento de modalidades (online / presencial / híbrido)',
        'Seções de metodologia, bio, depoimentos, preços e FAQ',
        'Totalmente responsivo, otimizado para SEO on-page + GEO'
      ],
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'On-page SEO', 'GEO', 'Integração WhatsApp'],
      metrics: [
        { label: 'Desenvolvimento', value: '100% código próprio, sem templates' },
        { label: 'Estrutura', value: '8 seções, arquitetura single-page' },
        { label: 'Conversão', value: 'Fluxo de conversão rápido e sem fricção' }
      ],
      githubUrl: 'https://github.com/gustavojgalvao/SpeakFlow',
      liveUrl: 'https://speakflow-alpha.vercel.app',
      isOnline: true,
    },
    g2odonto: {
      id: 'g2odonto',
      title: 'Lentes de Contato Dental · Catálogo Nacional de Estética',
      subtitle: 'PROJETO PARA CLIENTE',
      category: 'Catálogo SEO & GEO / Saúde',
      type: 'client',
      image: '/img/lentesdecontatodental.png',
      videoPoster: '/img/lentesdecontatodental.png',
      videoSrc: '/assets/videoLDCD.webm',
      desc: 'Catálogo de dentistas de estética em todo o Brasil focado puramente em ranqueamento local (Google Meu Negócio), SEO e GEO.',
      fullDescription:
        'Um diretório centralizado projetado exclusivamente para dentistas especializados em lentes de contato dental no Brasil. A plataforma atua como uma máquina de aquisição de pacientes, utilizando estratégias pesadas de SEO local, GEO (Generative Engine Optimization) e integração direta com o Google Meu Negócio para dominar as buscas de alto ticket.',
      challenge:
        'Pacientes buscando por lentes de contato dental tinham dificuldade em encontrar os melhores especialistas locais, e dentistas perdiam presença orgânica nas buscas geolocalizadas.',
      solution:
        'O desenvolvimento de um catálogo nacional de altíssima performance estruturado semanticamente para ser indexado instantaneamente pelo Google e IAs. Cada perfil é otimizado para integrar-se ao Google Meu Negócio, convertendo tráfego orgânico em consultas diretas.',
      features: [
        'Arquitetura de diretório otimizada para SEO local em nível nacional',
        'Estruturação semântica para GEO (Citações por IAs como ChatGPT e Gemini)',
        'Integração nativa com APIs do Google Meu Negócio',
        'Foco extremo em performance (Lighthouse 100) para vantagem competitiva nas buscas',
      ],
      techStack: ['React', 'Next.js', 'Tailwind CSS', 'Google Business Profile', 'Local SEO & GEO'],
      metrics: [
        { label: 'Estratégia Principal', value: 'Otimização para Buscas Orgânicas' },
        { label: 'Alcance', value: 'Escala Nacional (Brasil)' },
        { label: 'Arquitetura', value: 'Foco total em Performance e Acessibilidade' },
        { label: 'Status', value: 'Em Expansão' },
      ],
      githubUrl: '',
      liveUrl: 'https://www.lentedecontatodental.com.br/',
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
    'ac-joias': {
      id: 'ac-joias',
      title: 'Ariane Carla Joias · E-Commerce de Alta Joalheria',
      subtitle: 'PROJETO PARA CLIENTE',
      category: 'E-Commerce & Alta Joalheria (Nuvemshop)',
      type: 'client',
      image: '/img/arianacarla.png',
      videoPoster: '/img/arianacarla.png',
      videoSrc: '/assets/videoACjoais.webm',
      desc: 'Loja virtual completa de alta joalheria desenvolvida na plataforma Nuvemshop, especializada em peças banhadas a Ouro 18K, Prata e Ródio com pedras nobres (Moissanite, Zircônia, Esmeraldas e Pérolas), com navegação mobile-first e checkout transparente.',
      fullDescription:
        'Desenvolvido para a marca de joias e semijoias finas Ariane Carla (AC Joias). O projeto consistiu na criação e personalização de um e-commerce completo na plataforma Nuvemshop, estruturado para transmitir o requinte e a sofisticação de peças inspiradas nas grandes grifes internacionais. A loja foi configurada com catálogo categorizado (anéis, colares, brincos, pulseiras), integração com gateways de pagamento (Nuvem Pago com PIX e parcelamento no cartão), cálculo dinâmico de frete e conexão direta com WhatsApp para suporte VIP.',
      challenge:
        'Transmitir a exclusividade e o valor agregado de peças de alta joalheria no meio digital, garantindo carregamento rápido das fotos em alta resolução no celular, segurança nas transações de alto ticket e um fluxo de compra sem atritos.',
      solution:
        'Personalização visual refinada do tema Nuvemshop com tipografia elegante (Work Sans), banners imersivos, filtros inteligentes por banho e pedra, checkout transparente com PIX instantâneo e integração com Melhor Envio para frete rápido em todo o Brasil.',
      features: [
        'Vitrine de Luxo Responsiva: Design clean e sofisticado otimizado para navegação mobile com galerias de fotos em altíssima definição.',
        'Checkout Transparente e Seguro: Integração com Nuvem Pago e cartões de crédito com parcelamento e desconto via PIX.',
        'Frete e Logística Automatizada: Cálculo de frete em tempo real integrado às transportadoras (Correios / Melhor Envio).',
        'Canal de Vendas VIP no WhatsApp: Botão de atendimento direto para consultoria de noivas e encomendas personalizadas.',
      ],
      techStack: ['Nuvemshop Platform', 'HTML5 / CSS3', 'JavaScript', 'Nuvem Pago Gateway', 'Logistics API', 'WhatsApp VIP Sales'],
      metrics: [
        { label: 'Plataforma', value: 'Nuvemshop Pro' },
        { label: 'Checkout', value: 'Transparente / PIX' },
        { label: 'UX Mobile', value: '100% Otimizado' },
        { label: 'Status', value: 'Online em Produção' },
      ],
      githubUrl: '',
      liveUrl: 'https://acjoias.art.br',
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
      image: '/img/BRL2GO.png',
      videoPoster: '/img/BRL2GO.png',
      videoSrc: '/assets/videoBRL2GO.webm',
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
      videoSrc: '/assets/videoFriedChicken.webm',
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
      desc: 'Artificial intelligence platform focused on deploying custom autonomous agents for customer support, sales lead qualification, and back-office operations.',
      fullDescription:
        'Hestus AI was engineered to help organizations scale operational output while slashing support overhead through tailored autonomous agents. The platform operates across three essential business layers: 24/7 intelligent tier-1 customer care, proactive sales prospect qualification, and automated back-office workflow orchestration.',
      challenge:
        'Companies experience daily bottlenecks managing repetitive support tickets, slow manual lead intake, and error-prone administrative tasks. This causes delayed response times, lost sales opportunities, and inflated operational headcount.',
      solution:
        'Engineered an ecosystem of specialized AI agents. The architecture leverages natural language processing to triage inbound requests, qualify high-intent sales leads, and trigger automated webhook routing to CRMs and communication pipelines.',
      features: [
        'AI Support Agents: Instant, human-like resolution for high-frequency inquiries, reducing support ticket queue times by over 90%.',
        'AI Sales Qualification: Conversational agents that engage visitors, evaluate qualification criteria, and schedule high-intent leads.',
        'Operational AI Automations: Backend workflows automating data extraction, email sorting, and performance reporting.',
      ],
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'AI APIs', 'Webhooks', 'Vercel Deployment'],
      metrics: [
        { label: 'Support Resolution', value: '93% Resolved' },
        { label: 'Time Saved', value: '~50h / mo' },
        { label: 'Sales Lift', value: '+35% to 40%' },
        { label: 'Cost Reduction', value: '-72% Costs' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/Hestus',
      liveUrl: 'https://hestus.vercel.app',
      isOnline: true,
    },
    'devsclub-store': {
      id: 'devsclub-store',
      title: 'DevsClub Store · High-Tech Merch E-Commerce',
      subtitle: 'INDEPENDENT BUILD 04',
      category: 'E-Commerce Frontend & UI/UX',
      type: 'independent',
      image: '/img/devsclub-store.png',
      videoPoster: '/img/devsclub-store.png',
      desc: 'Optimized, responsive e-commerce interface built for premium tech merchandise and performance accessories, focusing strictly on speed and visual hierarchy.',
      fullDescription:
        'DevsClub Store is a digital storefront created to showcase flagship tech hardware (smartwatches, studio headphones, VR headsets). Designed for maximum visual impact and seamless checkout discovery with zero friction.',
      challenge:
        'Crafting a modern storefront with high visual polish, crisp product presentations, and instant loading times while maintaining a distraction-free user journey.',
      solution:
        'Engineered as a lightweight static frontend adhering to modern UI/UX principles. Utilizes structured CSS grid galleries, high-contrast promotional badges, and clean typography for immediate conversion.',
      features: [
        'High-Impact Product Grid: Crisp product photography with featured benefit callouts and ergonomic specifications.',
        'Promotional Price Badges: Strategic visual distinction between original and sale prices to amplify value perception.',
        'Mobile-First Fluid UX: Completely responsive touch layout designed for frictionless smartphone navigation.',
        'Instant Load Speed: Bloat-free codebase achieving top-tier Google PageSpeed scores.',
      ],
      techStack: ['Semantic HTML5', 'Modern CSS3', 'JavaScript', 'Google Fonts', 'Vercel Deployment'],
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
      image: '/img/LuPhellipo.png',
      videoPoster: '/img/LuPhellipo.png',
      videoSrc: '/assets/videoLuPhellipo.webm',
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
      image: '/img/CEBEPortal.png',
      videoPoster: '/img/CEBEPortal.png',
      videoSrc: '/assets/videoCEBE.webm',
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
      liveUrl: '',
      isOnline: false,
    },
    promptbase: {
      id: 'promptbase',
      title: 'PromptBase · AI Prompt Repository',
      subtitle: 'INDEPENDENT BUILD 07',
      category: 'Web Application & Productivity Tools',
      type: 'independent',
      image: '/img/PromptBase.png',
      videoPoster: '/img/PromptBase.png',
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
    sorrisoperfeito: {
      id: 'sorrisoperfeito',
      title: 'SorrisoPerfeito · Dental Landing Page & Lead Funnel',
      subtitle: 'INDEPENDENT BUILD 08',
      category: 'Frontend Development & Conversion Funnel (Marketing Tech)',
      type: 'independent',
      image: '/img/sorrisoPerfeito.png',
      videoPoster: '/img/sorrisoPerfeito.png',
      desc: 'High-performance landing page engineered for dental clinics. Operates as a digital showcase attracting high-value patients and serving as the top of funnel for automated lead qualification systems.',
      fullDescription:
        'The SorrisoPerfeito project was engineered to establish an end-to-end digital presence for an aesthetic and restorative dentistry clinic (implants, orthodontics, teeth whitening). Designed as a conversion engine, it establishes clinical authority through social proof and expert doctor profiles while channeling prospects directly into booking consultations via forms and WhatsApp triggers.',
      challenge:
        'In the premium dental niche, the primary hurdle is filtering unqualified inquiries and capturing high-intent patients without friction. Required an instant mobile-first interface (capturing paid traffic) pre-wired to trigger backend CRM and AI lead triage automations on form submission.',
      solution:
        'Constructed following healthcare UI/UX best practices: a clean light-mode aesthetic, smooth SPA navigation, and async form submission with Fetch API ready to dispatch lead payloads to webhook automations (e.g. n8n) and CRM databases.',
      features: [
        'Trust-Driven Healthcare Design: Dedicated doctor credentials and real patient transformation reviews for high credibility.',
        'Visual Treatment Breakdown: Clear service cards organized in CSS Grid explaining procedures without complex medical jargon.',
        'Mobile-First Strategic CTAs: Responsive layout keeping booking triggers persistently accessible to maximize ad conversion.',
        'Automation-Ready Pipelines: Asynchronous form submission (Fetch API) architected for immediate webhook lead ingestion.',
      ],
      techStack: ['HTML5', 'CSS3 (Flexbox & Grid)', 'JavaScript (Fetch API)', 'Local SEO', 'Vercel Deployment'],
      metrics: [
        { label: 'Ad Traffic Conversion', value: 'High Performance' },
        { label: 'Mobile Load Time', value: '< 1s Mobile' },
        { label: 'Core Web Vitals', value: '100% Green' },
        { label: 'CRM Connectivity', value: 'Webhook Ready' },
      ],
      githubUrl: 'https://github.com/gustavojgalvao/SorrisoPerfeito',
      liveUrl: 'https://sorrisoperfeito-swart.vercel.app',
      isOnline: true,
    },
    'speak-flow': {
      id: 'speak-flow',
      title: 'Speak Flow · English Teaching Platform',
      subtitle: 'CLIENT WORK 01',
      category: 'Landing Page / Conversion Funnel',
      type: 'client',
      image: '/img/speakflow.webp',
      videoPoster: '/img/speakflow.webp',
      videoSrc: '/assets/videoSpeakFlow.webm',
      desc: 'A custom landing page developed for English teacher Anna Luíza, designed to capture both nationwide online students and local in-person classes.',
      fullDescription: 'Speak Flow was built from the ground up for Anna Luíza, a private English teacher. The project features a custom hand-coded landing page using HTML, CSS, and JavaScript. Its entire architecture was designed to maximize Google rankings and make her services easily discoverable by AI engines.',
      challenge: 'Anna already had a solid student base from referrals, but lacked a professional online presence. Without a website, every new inquiry on WhatsApp meant starting the pitch from scratch, and she had zero visibility on Google.',
      solution: 'I designed a fully responsive single-page website that acts as a natural conversion funnel. It introduces her methodology, handles common objections, displays pricing, and highlights real testimonials. The flow gently guides visitors toward starting a WhatsApp conversation, while the underlying copy is heavily optimized for search engines and AI citations.',
      features: [
        'Single-page conversion funnel, WhatsApp-first CTA',
        'Modality breakdown (online / in-person / hybrid)',
        'Methodology, bio, testimonials, pricing, and FAQ sections',
        'Fully responsive, on-page SEO + GEO structuring'
      ],
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'On-page SEO', 'GEO structuring', 'WhatsApp deep-linking'],
      metrics: [
        { label: 'Development', value: '100% hand-coded, no template' },
        { label: 'Structure', value: '8 sections, single-page structure' },
        { label: 'Conversion', value: 'Fully responsive, one frictionless conversion path' }
      ],
      githubUrl: 'https://github.com/gustavojgalvao/SpeakFlow',
      liveUrl: 'https://speakflow-alpha.vercel.app',
      isOnline: true,
    },
    g2odonto: {
      id: 'g2odonto',
      title: 'Lentes de Contato Dental · National Aesthetic Catalog',
      subtitle: 'CLIENT PROJECT',
      category: 'SEO & GEO Catalog / Healthcare',
      type: 'client',
      image: '/img/lentesdecontatodental.png',
      videoPoster: '/img/lentesdecontatodental.png',
      videoSrc: '/assets/videoLDCD.webm',
      desc: 'Aesthetic dentists catalog across Brazil focused purely on local ranking (Google My Business), SEO, and GEO.',
      fullDescription:
        'A centralized directory designed exclusively for dentists specializing in dental veneers across Brazil. The platform acts as a patient acquisition machine, utilizing heavy local SEO strategies, GEO (Generative Engine Optimization), and direct integration with Google My Business to dominate high-ticket searches.',
      challenge:
        'Patients looking for high-end dental aesthetic procedures had trouble finding the best local specialists, while dentists lost organic presence in localized searches.',
      solution:
        'Engineered a high-performance national catalog semantically structured to be indexed instantly by Google and AI engines. Each profile is optimized to integrate with Google My Business, converting organic traffic into direct appointments.',
      features: [
        'Directory architecture optimized for nationwide local SEO',
        'Semantic structuring for GEO (Citations by AIs like ChatGPT and Gemini)',
        'Native integration with Google My Business APIs',
        'Extreme performance focus (Lighthouse 100) for search competitive advantage',
      ],
      techStack: ['React', 'Next.js', 'Tailwind CSS', 'Google Business Profile', 'Local SEO & GEO'],
      metrics: [
        { label: 'Core Strategy', value: 'Organic Search Optimization' },
        { label: 'Reach', value: 'National Scale (Brazil)' },
        { label: 'Architecture', value: 'Full Focus on Performance & Accessibility' },
        { label: 'Status', value: 'Expanding' },
      ],
      githubUrl: '',
      liveUrl: 'https://www.lentedecontatodental.com.br/',
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
    'ac-joias': {
      id: 'ac-joias',
      title: 'Ariane Carla Joias · Fine Jewelry E-Commerce',
      subtitle: 'CLIENT PROJECT',
      category: 'E-Commerce & Fine Jewelry (Nuvemshop)',
      type: 'client',
      image: '/img/arianacarla.png',
      videoPoster: '/img/arianacarla.png',
      videoSrc: '/assets/videoACjoais.webm',
      desc: 'Full-scale luxury jewelry e-commerce developed on the Nuvemshop platform, showcasing fine pieces plated in 18K Gold, Silver, and Rhodium with precious gemstones (Moissanite, Zirconia, Emeralds, and Pearls), featuring mobile-first UX and frictionless transparent checkout.',
      fullDescription:
        'Engineered for the fine jewelry brand Ariane Carla (AC Joias). The project delivered a full-featured e-commerce storefront customized on the Nuvemshop platform, designed to convey luxury aesthetics inspired by international jewelry houses. Configured with categorized collections (rings, necklaces, earrings, bracelets), transparent payment gateways (Nuvem Pago with instant PIX discounts and card installment plans), real-time shipping calculation, and direct WhatsApp VIP sales integration.',
      challenge:
        'Communicating luxury brand exclusivity while maintaining fast mobile load times for high-res jewelry photography, bulletproof payment trust for high-ticket items, and zero-friction mobile checkout.',
      solution:
        'Tailored Nuvemshop theme customization with refined typography, high-impact hero banners, faceted stone and metal plating filters, transparent checkout with instant PIX incentives, and automated shipping logistics across Brazil.',
      features: [
        'Responsive Luxury Storefront: Clean, sophisticated layout optimized for mobile browsing with high-definition jewelry galleries.',
        'Transparent Secure Checkout: Nuvem Pago gateway integration with instant PIX discounts and multi-installment credit card billing.',
        'Automated Real-Time Shipping: Live shipping calculations seamlessly integrated with Brazilian courier networks.',
        'VIP WhatsApp Concierge: Direct messaging triggers for bridal jewelry consulting and bespoke custom piece inquiries.',
      ],
      techStack: ['Nuvemshop Platform', 'HTML5 / CSS3', 'JavaScript', 'Nuvem Pago Gateway', 'Logistics API', 'WhatsApp VIP Sales'],
      metrics: [
        { label: 'Platform', value: 'Nuvemshop Pro' },
        { label: 'Checkout', value: 'Transparent / PIX' },
        { label: 'Mobile UX', value: '100% Optimized' },
        { label: 'Status', value: 'Live in Production' },
      ],
      githubUrl: '',
      liveUrl: 'https://acjoias.art.br',
      isOnline: true,
    },
  },
};
