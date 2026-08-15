import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TextMorph } from './ui/text-morph';
import KineticGrid from './ui/kinetic-grid';
import { MessageSquare, ArrowRight, Code2, Cpu, Zap, ShieldCheck, Sparkles, Globe, Terminal } from 'lucide-react';
import { useGsapReveal } from '../hooks/useGsapReveal';

export const Hero: React.FC = () => {
  const { language, t } = useLanguage();
  const containerRef = useGsapReveal({ y: 30, duration: 0.8, stagger: 0.15 });

  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.5s ease-out',
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max tilt angle
    const rotateY = ((x - centerX) / centerX) * 10;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s ease-out',
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease-out',
    });
  };

  const whatsappUrl =
    'https://wa.me/WHATSAPP_NUMBER_PLACEHOLDER?text=' +
    encodeURIComponent(
      language === 'en'
        ? "Hi Gustavo! I'd like to discuss a high-converting web or AI project."
        : 'Olá Gustavo! Gostaria de conversar sobre um projeto de alta conversão.'
    );

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const marqueeItems = [
    { icon: Code2, title: 'React 19 & Next.js', sub: 'Clean Architecture', color: 'text-orange-400 bg-orange-500/10 border-orange-500/20' },
    { icon: Cpu, title: 'AI Lead Engines', sub: 'Automated Triage & RAG', color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
    { icon: Zap, title: '100% Web Vitals', sub: 'Extreme Performance', color: 'text-orange-500 bg-orange-500/10 border-orange-500/20' },
    { icon: ShieldCheck, title: 'Production Ready', sub: 'Enterprise Standards', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
    { icon: Sparkles, title: 'Bespoke UI/UX', sub: 'Glassmorphic Aesthetics', color: 'text-orange-400 bg-orange-500/10 border-orange-500/20' },
    { icon: Globe, title: 'Global Delivery', sub: 'USA, LatAm & Europe', color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
    { icon: Terminal, title: 'Senior Codebase', sub: 'TypeScript & Tailwind', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
  ];

  return (
    <section id="hero" ref={containerRef as React.RefObject<HTMLElement>} className="relative w-full bg-black flex flex-col justify-between overflow-hidden pt-0 pb-0">

      {/* TOP HERO AREA COVERED BY KINETIC GRID (FULL 100VH FOLD) */}
      <KineticGrid className="w-full min-h-screen flex flex-col justify-center pt-6 sm:pt-8 pb-8 sm:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* LEFT COLUMN: Sales Copy & Conversion CTAs */}
            <div className="lg:col-span-7 space-y-8 text-left gsap-child">
              {/* Eyebrow Badge */}
              <div className="section-badge">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span>{t.hero.eyebrow}</span>
              </div>

              {/* Main Sales Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                <span>{t.hero.titleStart} </span>
                <span className="block mt-1 sm:inline-block">
                  <TextMorph
                    words={t.hero.morphWords}
                    interval={2800}
                    className="text-gradient-orange-gold font-black inline-flex"
                  />
                </span>
                <span className="block mt-1 text-zinc-300">{t.hero.titleEnd}</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed">
                {t.hero.subtitle}
              </p>

              {/* Conversion CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 hover:scale-[1.02] text-white font-bold text-sm sm:text-base shadow-xl shadow-orange-500/25 transition-all"
                >
                  <MessageSquare className="w-5 h-5 text-white" />
                  <span>{t.hero.primaryCta}</span>
                </a>

                <button
                  onClick={() => scrollToSection('work')}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass-card hover:bg-white/10 text-white font-semibold text-sm sm:text-base transition-all group"
                >
                  <span>{t.hero.secondaryCta}</span>
                  <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* 4-Metric Proof Bar */}
              <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {t.hero.proofBar.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                      <span className="text-gradient-orange-gold">{item.value}</span>
                    </div>
                    <div className="text-xs text-zinc-400 font-medium">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: 100% Clean Pristine Interactive Developer Portrait */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={tiltStyle}
                className="relative w-full max-w-md aspect-[4/5] rounded-[32px] glass-card p-3 overflow-hidden border border-white/15 shadow-2xl cursor-pointer will-change-transform group"
              >
                <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-black/90">
                  {/* Clean Professional Developer Photo (Zero Overlay Badges) */}
                  <img
                    src="/fotoperfil.png"
                    alt="Gustavo Galvão"
                    className="w-full h-full object-cover filter contrast-[1.02] pointer-events-none group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </KineticGrid>

      {/* LARGER ANIMATED MARQUEE TRANSITION RIBBON (Posicionada abaixo do 1º fold, visível ao scrollar) */}
      <div className="w-full border-t border-b border-orange-500/20 bg-[#0a0a0d]/90 backdrop-blur-2xl py-7 sm:py-8 relative z-20 shadow-[0_0_40px_rgba(255,85,0,0.08)] overflow-hidden">
        {/* Left & Right Gradient Fade Masks */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-black via-black/80 to-transparent z-30 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-black via-black/80 to-transparent z-30 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-6 sm:gap-10">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card px-5 py-3 rounded-2xl border border-white/10 flex items-center gap-3.5 shrink-0 hover:border-orange-500/40 transition-colors"
              >
                <div className={`p-2.5 rounded-xl border ${item.color} shrink-0`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-bold text-white text-sm sm:text-base font-sans tracking-tight">
                    {item.title}
                  </span>
                  <span className="block text-xs text-zinc-400 font-mono">
                    {item.sub}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};





