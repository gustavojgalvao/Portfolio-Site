import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useGsapReveal } from '../hooks/useGsapReveal';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { useProjectModal } from '../context/ProjectModalContext';

export const PortfolioTeaser: React.FC<{ onNavigatePortfolio: () => void }> = ({
  onNavigatePortfolio,
}) => {
  const { language, t } = useLanguage();
  const containerRef = useGsapReveal({ y: 40, duration: 0.9, stagger: 0.12 });
  const { openProjectModal } = useProjectModal();

  const teaserProjects = [
    {
      id: 'brl2go',
      title: 'BRL2GO',
      subtitle: language === 'en' ? 'Live Currency Converter' : 'Conversor em Tempo Real',
      tag: 'REACT · REST API',
      image: '/img/Conversor de Moedas em tempo real.png',
    },
    {
      id: 'fried-chicken',
      title: 'Fried Chicken',
      subtitle: language === 'en' ? 'Digital Menu & Delivery' : 'Cardápio Digital & Delivery',
      tag: 'GSAP · E-COMMERCE',
      image: '/img/Fried-chicken.png',
    },
    {
      id: 'hestus-ai',
      title: 'Hestus AI',
      subtitle: language === 'en' ? 'AI Lead Triage Platform' : 'Triagem de Leads com IA',
      tag: 'AI AGENTS · SAAS',
      image: '/img/hestus.png',
    },
    {
      id: 'devsclub-store',
      title: 'DevsClub Store',
      subtitle: language === 'en' ? 'Streetwear & Tech Merch' : 'E-Commerce Streetwear',
      tag: 'NEXT.JS · E-COMMERCE',
      image: '/img/devsclub-store.png',
    },
    {
      id: 'nexus-studio',
      title: 'Nexus Studio',
      subtitle: language === 'en' ? 'AI Workflow Builder' : 'Construtor de Fluxos IA',
      tag: 'REACT FLOW · AI',
      image: '/img/projeto2.png',
    },
    {
      id: 'cloudpulse-metrics',
      title: 'CloudPulse',
      subtitle: language === 'en' ? 'Real-Time Analytics' : 'Dashboard em Tempo Real',
      tag: 'DATA · RECHARTS',
      image: '/img/projeto1.png',
    },
  ];

  return (
    <section
      id="portfolio-teaser"
      ref={containerRef as React.RefObject<HTMLElement>}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 50% 60% at 50% 50%, rgba(255,192,105,0.06) 0%, transparent 70%)
          `,
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10 space-y-12 gsap-child">
        {/* Main Glass Header & CTA Banner */}
        <div className="glass-feature px-8 sm:px-12 py-10 sm:py-12 flex flex-col sm:flex-row items-center justify-between gap-8 rounded-3xl border border-white/10">
          <div className="text-center sm:text-left space-y-2">
            <div className="section-badge inline-flex mb-1">
              <Sparkles className="w-3.5 h-3.5 mr-1" />
              <span>{language === 'en' ? 'PORTFOLIO & LAB' : 'PORTFÓLIO & LABORATÓRIO'}</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
              style={{ letterSpacing: '-0.025em' }}
            >
              {t.portfolioTeaser.heading}
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-md">
              {t.portfolioTeaser.subtitle}
            </p>
          </div>

          <button
            onClick={onNavigatePortfolio}
            className="btn-primary shrink-0 text-sm sm:text-base group shadow-xl"
          >
            <span>{t.portfolioTeaser.cta}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Quick Interactive Project Cards on Home */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teaserProjects.map((p) => (
            <div
              key={p.id}
              onClick={() => openProjectModal(p.id)}
              className="group relative rounded-3xl overflow-hidden glass-card border border-white/10 p-5 space-y-4 hover:border-[#FFC069]/50 hover:shadow-[0_20px_50px_rgba(255,192,105,0.15)] cursor-pointer transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image with Play badge */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/80">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#FFC069] font-bold">
                    {p.tag}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-[#FFC069] text-black flex items-center justify-center shadow-lg transform translate-y-1 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  <Play className="w-4 h-4 ml-0.5 fill-black" />
                </div>
              </div>

              {/* Title & Click prompt */}
              <div className="space-y-1 text-left">
                <h3 className="text-lg font-bold text-white group-hover:text-[#FFC069] transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-zinc-400">
                  {p.subtitle}
                </p>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500 group-hover:text-[#FFC069] transition-colors">
                <span>{language === 'en' ? 'Click for Video & Details' : 'Ver Vídeo & Detalhes'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioTeaser;
