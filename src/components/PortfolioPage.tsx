import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import GooeyLayer from './ui/GooeyLayer';
import { useGsapReveal } from '../hooks/useGsapReveal';
import { MessageSquare, Sparkles } from 'lucide-react';
import {
  ImagesScrollingAnimation,
  type ScrollingProjectItem,
} from './ui/images-scrolling-animation';
import { useProjectModal } from '../context/ProjectModalContext';
import { SelectedWorkList } from './SelectedWorkList';

/* ── High-Res Image Mapping for Projects ────────────────────── */

const CLIENT_IMAGES: Record<string, string> = {
  g2odonto: '/img/lentesdecontatodental.png',
  tualupa71: '/img/devsclub-store.png',
  'ac-joias': '/img/LuPhellipo.png',
};

const INDEPENDENT_IMAGES: Record<string, string> = {
  brl2go: '/img/BRL2GO.png',
  'fried-chicken': '/img/Fried-chicken.png',
  'hestus-ai': '/img/hestus.png',
  'devsclub-store': '/img/devsclub-store.png',
  'lu-phellipo': '/img/LuPhellipo.png',
  'cebe-portal': '/img/CEBEPortal.png',
  promptbase: '/img/PromptBase.png',
  sorrisoperfeito: '/img/sorrisoPerfeito.png',
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

  const { openProjectModal } = useProjectModal();

  const handleOpenProject = (projectId: string) => {
    openProjectModal(projectId);
  };

  const whatsappUrl =
    'https://wa.me/WHATSAPP_NUMBER_PLACEHOLDER?text=' +
    encodeURIComponent(
      language === 'en'
        ? "Hi Gustavo! I'd like to talk about a project."
        : 'Olá Gustavo! Gostaria de conversar sobre um projeto.'
    );

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
        '/img/Conversor de Moedas em tempo real.png',
      tags: project.tags,
      url: project.url || 'https://gustavogalvao.vercel.app',
    }));

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100">
      {/* ── HEADER ─────────────────────────────────────────── */}
      <section
        ref={headerRef as React.RefObject<HTMLElement>}
        className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Gooey glow behind header */}
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
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            <span>{language === 'en' ? 'PORTFOLIO & LAB' : 'PORTFÓLIO & EXPERIMENTOS'}</span>
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 gsap-child tracking-tight"
            style={{ letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            {t.portfolioPage.title}
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto gsap-child">
            {t.portfolioPage.subtitle}
          </p>
        </div>
      </section>

      {/* ── GROUP 1: SELECTED WORK LIST ───────────────────── */}
      <section
        id="client-work"
        ref={grid1Ref as React.RefObject<HTMLElement>}
        className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-white/6"
      >
        <div className="max-w-5xl mx-auto gsap-child">
          <SelectedWorkList
            projects={t.portfolioPage.clientProjects}
            images={CLIENT_IMAGES}
            onSelectProject={handleOpenProject}
            label={language === 'en' ? 'SELECTED WORK' : 'TRABALHOS SELECIONADOS'}
            language={language}
          />
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

          {/* Sticky Stacking Scrolling Animation with modal click handler */}
          <div className="w-full">
            <ImagesScrollingAnimation
              items={scrollingProjects}
              onSelectProject={handleOpenProject}
            />
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
          <div className="glass-feature px-8 sm:px-12 py-12 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl border border-white/10">
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
              <span>{t.portfolioPage.footerCta.cta}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
