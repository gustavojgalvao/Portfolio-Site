import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import GooeyLayer from './ui/GooeyLayer';
import { useGsapReveal } from '../hooks/useGsapReveal';
import { MessageSquare } from 'lucide-react';
import {
  ImagesScrollingAnimation,
  type ScrollingProjectItem,
} from './ui/images-scrolling-animation';

/* ── Abstract visual mockups for Client Projects ───────────── */

const ChatMockup: React.FC = () => (
  <div
    className="w-full h-40 rounded-xl overflow-hidden relative"
    style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
    }}
    aria-hidden="true"
  >
    <div className="absolute top-3 left-3 flex items-center gap-2">
      <div
        className="w-5 h-5 rounded-md flex items-center justify-center text-[9px] font-black"
        style={{
          background: 'linear-gradient(135deg,#FFC069,#7A1610)',
          color: '#050505',
        }}
      >
        AI
      </div>
      <span className="text-[10px] font-mono text-zinc-500">TRIAGE AGENT</span>
    </div>
    <div className="absolute inset-0 flex flex-col justify-end p-3 gap-2">
      {[
        { right: false, text: 'Preciso agendar uma avaliação estética.' },
        { right: true, text: '✅ Encaminhando para agenda disponível...' },
      ].map((m, i) => (
        <div
          key={i}
          className={`flex ${m.right ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className="max-w-[70%] px-3 py-1.5 rounded-xl text-[10px] leading-relaxed"
            style={
              m.right
                ? {
                    background: 'rgba(255,192,105,0.15)',
                    color: '#fde8c0',
                  }
                : {
                    background: 'rgba(255,255,255,0.06)',
                    color: '#d4d4d8',
                  }
            }
          >
            {m.text}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ShopMockup: React.FC = () => (
  <div
    className="w-full h-40 rounded-xl overflow-hidden relative"
    style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
    }}
    aria-hidden="true"
  >
    <div className="absolute top-3 left-3 right-3 flex items-center gap-2">
      <div
        className="flex-1 h-5 rounded-lg"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      />
      <div
        className="w-14 h-5 rounded-full"
        style={{ background: 'rgba(255,192,105,0.2)' }}
      />
    </div>
    <div className="absolute inset-0 top-10 p-3 grid grid-cols-3 gap-2">
      {[0.9, 0.6, 0.75, 0.5, 0.8, 0.65].map((o, i) => (
        <div
          key={i}
          className="rounded-lg"
          style={{
            background: `rgba(255,192,105,${o * 0.12})`,
            border: '1px solid rgba(255,192,105,0.1)',
          }}
        >
          <div
            className="w-full h-8 rounded-t-lg"
            style={{ background: `rgba(255,192,105,${o * 0.15})` }}
          />
          <div className="p-1.5 space-y-1">
            <div
              className="w-full h-1 rounded-full"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            />
            <div
              className="w-2/3 h-1 rounded-full"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const TerminalMockup: React.FC = () => (
  <div
    className="w-full h-40 rounded-xl overflow-hidden font-mono"
    style={{
      background: 'rgba(10,10,14,0.9)',
      border: '1px solid rgba(255,255,255,0.08)',
    }}
    aria-hidden="true"
  >
    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/6">
      {['#7A1610', '#E8642F', '#FFC069'].map((c) => (
        <div
          key={c}
          className="w-2 h-2 rounded-full"
          style={{ background: c }}
        />
      ))}
      <span className="ml-2 text-[9px] text-zinc-600">tech-ai-repo ~ admin</span>
    </div>
    <div className="p-3 space-y-1.5">
      {[
        { prompt: '$ ', cmd: 'load database leads_q1.csv', color: '#FFC069' },
        { prompt: '→ ', cmd: '847 records loaded', color: '#d4d4d8' },
        { prompt: '$ ', cmd: 'ai summarize --context=marketing', color: '#FFC069' },
        { prompt: '→ ', cmd: 'Generating insights...', color: '#E8642F' },
      ].map((l, i) => (
        <div key={i} className="text-[10px] leading-relaxed">
          <span style={{ color: l.color }}>{l.prompt}</span>
          <span style={{ color: l.color === '#FFC069' ? '#a8a8b3' : l.color }}>
            {l.cmd}
          </span>
        </div>
      ))}
    </div>
  </div>
);

/* ── High-Res Image Mapping for Independent Projects ────────── */

const INDEPENDENT_IMAGES: Record<string, string> = {
  brl2go:
    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&auto=format&fit=crop&q=80',
  'fried-chicken':
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&auto=format&fit=crop&q=80',
  'hestus-ai':
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
};

/* ── Main Component ─────────────────────────────────────────── */

interface PortfolioPageProps {
  onBackHome: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onBackHome: _onBackHome,
}) => {
  const { language, t } = useLanguage();
  const headerRef = useGsapReveal({ y: 40, duration: 0.9, stagger: 0.12 });
  const grid1Ref = useGsapReveal({ y: 50, duration: 0.9, stagger: 0.15 });

  const whatsappUrl =
    'https://wa.me/WHATSAPP_NUMBER_PLACEHOLDER?text=' +
    encodeURIComponent(
      language === 'en'
        ? "Hi Gustavo! I'd like to talk about a project."
        : 'Olá Gustavo! Gostaria de conversar sobre um projeto.'
    );

  const ClientVisuals = [ChatMockup, ShopMockup, TerminalMockup];

  /* Prepare scrolling items for Independent Builds with high-res assets */
  const scrollingProjects: ScrollingProjectItem[] =
    t.portfolioPage.independentProjects.map((project, index) => ({
      id: project.id,
      title: project.title,
      subtitle:
        language === 'en'
          ? `INDEPENDENT BUILD 0${index + 1}`
          : `PROJETO AUTÔNOMO 0${index + 1}`,
      desc: project.desc,
      src:
        INDEPENDENT_IMAGES[project.id] ||
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80',
      tags: project.tags,
      url: project.url || 'https://gustavogalvao.vercel.app',
    }));

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100">
      {/* ── HEADER ─────────────────────────────────────────── */}
      <section
        ref={headerRef as React.RefObject<HTMLElement>}
        className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Gooey glow behind header only */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
          aria-hidden="true"
        >
          <GooeyLayer
            dominantColor="gold"
            cursorChase={false}
            className="absolute inset-0"
            blobCount={2}
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="section-badge inline-flex mb-4">
            {language === 'en' ? 'PORTFOLIO & LAB' : 'PORTFÓLIO & EXPERIMENTOS'}
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 gsap-child"
            style={{ letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            {t.portfolioPage.title}
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto gsap-child">
            {t.portfolioPage.subtitle}
          </p>
        </div>
      </section>

      {/* ── GROUP 1: CLIENT WORK ──────────────────────────── */}
      <section
        id="client-work"
        ref={grid1Ref as React.RefObject<HTMLElement>}
        className="py-16 px-4 sm:px-6 lg:px-8 border-b border-white/6"
      >
        <div className="max-w-5xl mx-auto">
          {/* Group label */}
          <div className="mb-10 gsap-child">
            <h2
              className="text-2xl font-extrabold text-white mb-1.5"
              style={{ letterSpacing: '-0.02em' }}
            >
              {t.portfolioPage.group1Label}
            </h2>
            <p className="text-xs font-mono text-zinc-500">
              {t.portfolioPage.group1Desc}
            </p>
          </div>

          {/* Asymmetric grid: one featured card (col-span-2) + two narrower */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.portfolioPage.clientProjects.map((project, i) => {
              const Visual = ClientVisuals[i];
              const isFeatured = i === 0;
              return (
                <article
                  key={project.id}
                  className={`glass-feature flex flex-col overflow-hidden gsap-child transition-all duration-300 hover:border-white/20 ${
                    isFeatured ? 'md:col-span-2' : ''
                  }`}
                >
                  {/* Visual */}
                  <div className="p-5 pb-0">
                    <Visual />
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col space-y-4">
                    <div>
                      <div className="text-[10px] font-mono text-zinc-500 mb-1.5 uppercase tracking-widest">
                        {project.client}
                      </div>
                      <h3
                        className="text-xl font-bold text-white"
                        style={{ letterSpacing: '-0.02em' }}
                      >
                        {project.title}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <span className="text-[10px] font-mono font-semibold text-[#FFC069] uppercase tracking-wider">
                          Challenge —{' '}
                        </span>
                        <span className="text-sm text-zinc-400 leading-relaxed">
                          {project.challenge}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-semibold text-[#E8642F] uppercase tracking-wider">
                          Solution —{' '}
                        </span>
                        <span className="text-sm text-zinc-300 leading-relaxed">
                          {project.solution}
                        </span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2 mt-auto">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2.5 py-1 rounded-full"
                          style={{
                            background: 'rgba(255,192,105,0.08)',
                            border: '1px solid rgba(255,192,105,0.18)',
                            color: '#FFC069',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── GROUP 2: INDEPENDENT BUILDS (IMAGES SCROLLING ANIMATION) ── */}
      <section id="independent-builds" className="pt-20 pb-28 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          {/* Group label */}
          <div className="mb-4 text-center max-w-xl mx-auto">
            <h2
              className="text-2xl sm:text-3xl font-extrabold text-white mb-2"
              style={{ letterSpacing: '-0.025em' }}
            >
              {t.portfolioPage.group2Label}
            </h2>
            <p className="text-xs sm:text-sm font-mono text-zinc-500">
              {t.portfolioPage.group2Desc}
            </p>
          </div>

          {/* Sticky Stacking Scrolling Animation */}
          <div className="w-full">
            <ImagesScrollingAnimation items={scrollingProjects} />
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA BANNER ────────────────────────────── */}
      <section
        className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 60% 70% at 50% 100%, rgba(255,192,105,0.06) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="glass-feature px-8 sm:px-12 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left space-y-2">
              <h2
                className="text-2xl sm:text-3xl font-extrabold text-white"
                style={{ letterSpacing: '-0.025em' }}
              >
                {t.portfolioPage.footerCta.heading}
              </h2>
              <p className="text-sm text-zinc-400">
                {t.portfolioPage.footerCta.subtitle}
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shrink-0"
            >
              <MessageSquare className="w-4 h-4" />
              {t.portfolioPage.footerCta.cta}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
