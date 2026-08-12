import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  ArrowLeft,
  Sparkles,
  User,
  Code2,
  Zap,
  Layers,
  Award,
  Download,
  MessageSquare,
  ArrowUpRight,
  Terminal,
  Eye,
  Boxes,
} from 'lucide-react';
import { Brl2GoView } from '../projects/Brl2GoView';
import { FriedChickenView } from '../projects/FriedChickenView';
import { HestusAiView } from '../projects/HestusAiView';
import { LenteContatoView } from '../projects/LenteContatoView';

interface PortfolioPageProps {
  onBackHome: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onBackHome }) => {
  const { language } = useLanguage();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const isPt = language === 'pt';

  const whatsappUrl =
    'https://wa.me/5571992550509?text=' +
    encodeURIComponent(
      isPt
        ? 'Olá Gustavo! Vi seu portfólio completo e gostaria de conversar sobre um projeto.'
        : "Hi Gustavo! I reviewed your full portfolio and would like to start a project."
    );

  const projects = [
    {
      id: 'brl2go',
      title: 'BRL2GO',
      desc: isPt
        ? 'Um conversor de moedas moderno, rápido e profissional com taxas de câmbio em tempo real e foco em UI/UX.'
        : 'A modern, fast, professional currency converter with real-time exchange rates and clean UI/UX.',
      image: '/img/Conversor de Moedas em tempo real.png',
      tags: ['React', 'JavaScript', 'CSS3', 'API Integration'],
      isInteractive: true,
    },
    {
      id: 'fried-chicken',
      title: 'Fried Chicken',
      desc: isPt
        ? 'Site fictício totalmente responsivo para restaurante, com animações Vanilla JS e keyframes de alta performance.'
        : 'Fully responsive food business platform built with HTML, CSS, and fluid Vanilla JS animations.',
      image: '/img/Fried-chicken.png',
      tags: ['React', 'HTML5', 'CSS3', 'JavaScript'],
      isInteractive: true,
    },
    {
      id: 'hestus-ai',
      title: 'Hestus AI',
      desc: isPt
        ? 'Landing page corporativa para empresa de automação e Inteligência Artificial voltada para PMEs.'
        : 'B2B landing page for an AI & automation enterprise software provider targeting SMBs.',
      image: '/img/hestus.png',
      tags: ['React', 'AI Agents', 'GSAP', 'B2B Funnel'],
      isInteractive: true,
    },
    {
      id: 'lente-contato',
      title: 'Lente de Contato Dental',
      desc: isPt
        ? 'Landing page especializada de alta conversão para odontologia estética com agendamento instantâneo via WhatsApp.'
        : 'High-converting medical landing page for aesthetic dentistry with instant WhatsApp booking integration.',
      image: '/img/lentesdecontatodetal.png',
      tags: ['React', 'HTML5', 'Landing Page', 'WhatsApp API'],
      isInteractive: true,
    },
    {
      id: 'sorriso-perfeito',
      title: 'Sorriso Perfeito',
      desc: isPt
        ? 'Site institucional profissional para clínica odontológica com foco em SEO local e captação de pacientes.'
        : 'Professional dental clinic platform focused on local SEO and patient acquisition.',
      image: '/img/sorrisoPerfeito.png',
      tags: ['React', 'SEO', 'Conversion', 'Vercel'],
      link: 'https://sorrisoperfeito-swart.vercel.app',
      isInteractive: false,
    },
    {
      id: 'devclub-store',
      title: 'DevClub Store',
      desc: isPt
        ? 'Experimento de vitrine digital infinita desenvolvida em JavaScript escalável e modular.'
        : 'Infinite digital storefront experiment built with scalable, modular JavaScript.',
      image: '/img/devsclub-store.png',
      tags: ['JavaScript', 'E-Commerce', 'UI/UX'],
      link: 'https://devclubstore.vercel.app/',
      isInteractive: false,
    },
    {
      id: 'site-mandalas',
      title: 'Site Mandalas',
      desc: isPt
        ? 'Plataforma institucional fluída construindo pontes para e-commerce local de arte.'
        : 'Fluid institutional showcase powering a local art e-commerce brand.',
      image: '/img/projeto2.png',
      tags: ['HTML5', 'CSS3', 'E-Commerce'],
      link: 'https://trabalho-site-sheyla.vercel.app/',
      isInteractive: false,
    },
  ];

  const skills = [
    { name: 'HTML5', icon: 'ri-html5-fill' },
    { name: 'CSS3', icon: 'ri-css3-fill' },
    { name: 'JavaScript', icon: 'ri-javascript-fill' },
    { name: 'TailwindCSS', isCustomImg: true, imgSrc: '/img/tailwind-css-fill.svg' },
    { name: 'React', isFa: true, faClass: 'fa-brands fa-react' },
    { name: 'Python', isFa: true, faClass: 'fa-brands fa-python' },
    { name: 'GitHub', isFa: true, faClass: 'fa-brands fa-github' },
    { name: 'Java', isFa: true, faClass: 'fa-brands fa-java' },
    { name: 'Git', isFa: true, faClass: 'fa-brands fa-git-alt' },
    { name: 'IA & Automação', isCustomImg: true, imgSrc: '/img/ai.svg' },
  ];

  return (
    <div className="py-12 relative z-10 min-h-screen">
      {/* Active React Project Modals */}
      {activeModal === 'brl2go' && <Brl2GoView onClose={() => setActiveModal(null)} />}
      {activeModal === 'fried-chicken' && <FriedChickenView onClose={() => setActiveModal(null)} />}
      {activeModal === 'hestus-ai' && <HestusAiView onClose={() => setActiveModal(null)} />}
      {activeModal === 'lente-contato' && <LenteContatoView onClose={() => setActiveModal(null)} />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Back Navigation Bar */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBackHome}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card hover:bg-white/10 text-zinc-300 hover:text-white text-xs font-mono transition-all group"
          >
            <ArrowLeft className="w-4 h-4 text-orange-400 group-hover:-translate-x-1 transition-transform" />
            <span>{isPt ? 'Voltar para Landing Page' : 'Back to Landing Page'}</span>
          </button>

          <div className="flex items-center gap-3">
            <a
              href="/assets/curriculo-gustavogalvao.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10 hover:border-orange-500/40 text-xs font-mono text-zinc-300 hover:text-white transition-all"
            >
              <Download className="w-3.5 h-3.5 text-orange-400" />
              <span>{isPt ? 'Baixar Currículo' : 'Download Resume'}</span>
            </a>

            <div className="section-badge hidden sm:inline-flex">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PORTFÓLIO COMPLETO</span>
            </div>
          </div>
        </div>

        {/* SECTION 1: HERO PORTFOLIO PROFILE */}
        <div className="glass-card p-8 sm:p-14 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Image Avatar */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl glass-card p-3 border border-orange-500/30 overflow-hidden shadow-2xl group">
                <img
                  src="/fotoperfil.png"
                  alt="Gustavo Galvão"
                  className="w-full h-full object-cover rounded-2xl filter contrast-110 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Title & Subtitle */}
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30">
                <Terminal className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-xs font-mono tracking-wider text-orange-300 font-bold uppercase">
                  FULL-STACK DEVELOPER &amp; PRODUCT BUILDER
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
                Gustavo Galvão
              </h1>

              <p className="text-xl sm:text-2xl font-bold text-zinc-300">
                I do Code &amp; <span className="text-gradient-orange-gold">Chill</span>
              </p>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl">
                {isPt
                  ? 'Desenvolvedor Full-Stack & Product Builder. Especialista em arquitetura escalável, performance extrema (Core Web Vitals) e experiências imersivas guiadas para conversão e experiência do usuário.'
                  : 'Full-Stack Developer & Product Builder. Specialist in scalable architecture, extreme performance (Core Web Vitals), and immersive user experiences engineered for conversion.'}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-black font-bold text-sm shadow-xl shadow-orange-500/20 hover:scale-105 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{isPt ? 'Entre em Contato' : 'Get in Touch'}</span>
                </a>

                <a
                  href="#projects-list"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass-card border border-white/10 hover:border-orange-500/40 text-white font-semibold text-sm transition-all"
                >
                  <span>{isPt ? 'Ver Todos os Projetos' : 'View All Projects'}</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* SECTION 2: ABOUT & STATS */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="section-badge mx-auto">
              <User className="w-3.5 h-3.5" />
              <span>{isPt ? 'SOBRE MIM' : 'ABOUT ME'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {isPt ? 'Transformando Ideias em ' : 'Transforming Ideas into '}
              <span className="text-gradient-orange-gold">{isPt ? 'Realidade Digital' : 'Digital Reality'}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 glass-card p-8 rounded-3xl border border-white/10 space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col justify-center">
              <p>
                {isPt
                  ? 'Sou Gustavo Galvão, desenvolvedor Full Stack e estudante de Ciência da Computação. Desenvolvo produtos digitais com foco em performance, clareza e resultado, desde landing pages até aplicações web completas. Meu objetivo não é apenas entregar interfaces bonitas, mas construir soluções rápidas, bem estruturadas e preparadas para escalar, com código limpo e organizado.'
                  : 'I am Gustavo Galvão, a Full Stack developer and Computer Science student. I build digital products with focus on performance, clarity, and results — from high-converting landing pages to full web applications.'}
              </p>
              <p>
                {isPt
                  ? 'Trabalho unindo design e desenvolvimento para transformar regras de negócio em experiências digitais fluidas, acessíveis e eficientes. Tenho foco forte em performance, aplicando técnicas como code splitting, lazy loading e otimizações de renderização para garantir carregamento rápido e navegação consistente.'
                  : 'I bridge design and software engineering to turn complex business rules into smooth, accessible digital experiences with modern tools like React, GSAP, and Python.'}
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="glass-card p-6 rounded-3xl border border-white/10 flex flex-col justify-center items-center text-center space-y-1">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-gradient-orange-gold">10+</span>
                <span className="text-xs font-mono text-zinc-400">{isPt ? 'Projetos Completos' : 'Completed Projects'}</span>
              </div>
              <div className="glass-card p-6 rounded-3xl border border-white/10 flex flex-col justify-center items-center text-center space-y-1">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-gradient-orange-gold">2+</span>
                <span className="text-xs font-mono text-zinc-400">{isPt ? 'Anos de Experiência' : 'Years Experience'}</span>
              </div>
              <div className="glass-card p-6 rounded-3xl border border-white/10 flex flex-col justify-center items-center text-center space-y-1">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-gradient-orange-gold">100%</span>
                <span className="text-xs font-mono text-zinc-400">{isPt ? 'Satisfação' : 'Client Satisfaction'}</span>
              </div>
              <div className="glass-card p-6 rounded-3xl border border-white/10 flex flex-col justify-center items-center text-center space-y-1">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-gradient-orange-gold">24/7</span>
                <span className="text-xs font-mono text-zinc-400">{isPt ? 'Dedicação' : 'Dedication'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: MANIFESTO DO ENGENHEIRO */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="section-badge mx-auto">
              <Zap className="w-3.5 h-3.5" />
              <span>{isPt ? 'FILOSOFIA' : 'PHILOSOPHY'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {isPt ? 'O Manifesto do ' : 'The Engineer’s '}
              <span className="text-gradient-orange-gold">{isPt ? 'Engenheiro' : 'Manifesto'}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <Zap className="w-8 h-8 text-orange-400" />
              <h3 className="text-xl font-bold text-white">1. Performance como Base</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {isPt
                  ? 'Performance não é detalhe, é requisito. Estruturo aplicações para carregarem rápido desde o primeiro render, evitando reflows desnecessários.'
                  : 'Performance is a hard requirement. Applications are structured for instant load speeds, optimized web vitals, and clean rendering.'}
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <Boxes className="w-8 h-8 text-amber-400" />
              <h3 className="text-xl font-bold text-white">2. Estrutura que Escala</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {isPt
                  ? 'Código precisa crescer sem virar problema. Trabalho com componentização e organização clara para manter cada parte reutilizável.'
                  : 'Clean architecture built to scale. Component-driven code organization ensuring predictability and long-term maintainability.'}
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <Eye className="w-8 h-8 text-yellow-400" />
              <h3 className="text-xl font-bold text-white">3. Experiência Real</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {isPt
                  ? 'Interface não é só aparência. Garanto acessibilidade, navegação clara e comportamento consistente para interações sem fricção.'
                  : 'User experience goes beyond aesthetics. Accessible, intuitive navigation designed to convert visitors seamlessly.'}
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 4: TRAJETÓRIA / JOURNEY TIMELINE */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="section-badge mx-auto">
              <Award className="w-3.5 h-3.5" />
              <span>{isPt ? 'JORNADA' : 'JOURNEY'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {isPt ? 'Minha ' : 'My '}
              <span className="text-gradient-orange-gold">{isPt ? 'Trajetória' : 'Trajectory'}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-3">
              <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider block">
                1. Base
              </span>
              <h3 className="text-lg font-bold text-white">Fundamentos da Web</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                {isPt
                  ? 'Início focado em HTML semântico e CSS bem estruturado, construindo interfaces limpas e organizadas desde a base.'
                  : 'Core web foundation focused on semantic HTML and clean, structured CSS.'}
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-3">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                2. Evolução
              </span>
              <h3 className="text-lg font-bold text-white">JavaScript na Prática</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                {isPt
                  ? 'Transição para aplicações dinâmicas com JavaScript, manipulando DOM, eventos e assincronismo para interatividade.'
                  : 'Transitioning into dynamic applications with Vanilla JS, async routines, and DOM events.'}
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-3">
              <span className="text-xs font-mono font-bold text-yellow-400 uppercase tracking-wider block">
                3. Aplicação
              </span>
              <h3 className="text-lg font-bold text-white">Projetos Reais</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                {isPt
                  ? 'Desenvolvimento de sites e landing pages como freelancer, entregando valor direto e performance extrema.'
                  : 'Developing production landing pages and web apps as a direct specialist.'}
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-3">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                4. Direção Atual
              </span>
              <h3 className="text-lg font-bold text-white">Full Stack &amp; Escala</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                {isPt
                  ? 'Evoluindo para desenvolvimento full stack e automação com IA, construindo sistemas preparados para crescer.'
                  : 'Full-stack engineering & AI automation workflows built for enterprise growth.'}
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 5: HABILIDADES & TECNOLOGIAS */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="section-badge mx-auto">
              <Code2 className="w-3.5 h-3.5" />
              <span>{isPt ? 'HABILIDADES' : 'SKILLS'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {isPt ? 'Minhas ' : 'My '}
              <span className="text-gradient-orange-gold">{isPt ? 'Tecnologias' : 'Technologies'}</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {skills.map((sk, idx) => (
              <div
                key={idx}
                className="glass-card px-5 py-3.5 rounded-2xl border border-white/10 flex items-center gap-3 hover:border-orange-500/40 transition-all duration-300"
              >
                {sk.isCustomImg ? (
                  <img src={sk.imgSrc} alt={sk.name} className="w-6 h-6 object-contain" />
                ) : sk.isFa ? (
                  <i className={`${sk.faClass} text-xl text-orange-400`} />
                ) : (
                  <i className={`${sk.icon} text-xl text-orange-400`} />
                )}
                <span className="text-sm font-mono font-semibold text-white">{sk.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 6: TODOS OS PROJETOS EM REACT */}
        <div id="projects-list" className="space-y-8 pt-8 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="section-badge mx-auto">
              <Layers className="w-3.5 h-3.5" />
              <span>{isPt ? 'CATÁLOGO DE PROJETOS INERATIVOS EM REACT' : 'FULL REACT PROJECTS CATALOG'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {isPt ? 'Todos os Projetos & ' : 'All Projects & '}
              <span className="text-gradient-orange-gold">{isPt ? 'Estudos em React' : 'React Studies'}</span>
            </h2>
            <p className="text-zinc-400 text-base">
              {isPt
                ? 'Clique em qualquer card para explorar a aplicação interativa em React.'
                : 'Click any card below to launch the interactive React application.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="glass-card rounded-3xl border border-white/10 overflow-hidden hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden bg-zinc-950">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-4">
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                    {proj.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {proj.isInteractive ? (
                    <button
                      onClick={() => setActiveModal(proj.id)}
                      className="btn-shine inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-black font-mono font-bold text-xs shadow-lg shadow-orange-500/20 hover:scale-[1.02] transition-all"
                    >
                      <span>{isPt ? 'Abrir Projeto Interativo React' : 'Launch React Interactive App'}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-shine inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 text-xs font-mono font-bold text-orange-300 transition-all"
                    >
                      <span>{isPt ? 'Acessar Link Externo' : 'Visit Live Project'}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 7: BOTTOM CTA */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-orange-500/40 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
            {isPt ? 'Vamos construir o seu próximo produto?' : 'Ready to build your next digital product?'}
          </h3>
          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto">
            {isPt
              ? 'Entre em contato para alinhar o escopo e desenvolver sua solução em código sênior.'
              : 'Get in touch directly to map out your project scope.'}
          </p>
          <div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-black font-bold text-base shadow-xl shadow-orange-500/20 hover:scale-105 transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              <span>{isPt ? 'Iniciar Conversa no WhatsApp →' : 'Start Discussion on WhatsApp →'}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
