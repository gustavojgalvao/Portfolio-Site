import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TextMorph } from './ui/text-morph';
import KineticGrid from './ui/kinetic-grid';
import { MessageSquare, ArrowRight } from 'lucide-react';
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
    const rotateX = ((y - centerY) / centerY) * -10;
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
        ? "Hi Gustavo! I'd like to book a call to talk about your plan."
        : 'Olá Gustavo! Gostaria de agendar uma conversa sobre o plano.'
    );

  const scrollToPortfolio = () => {
    // Handled by App — portfolio navigation
    const ev = new CustomEvent('navigate-portfolio');
    window.dispatchEvent(ev);
  };

  return (
    <section id="hero" ref={containerRef as React.RefObject<HTMLElement>} className="relative w-full bg-black flex flex-col justify-between overflow-hidden pt-0 pb-0">

      {/* FULL-VIEWPORT HERO WITH KINETIC GRID BACKGROUND */}
      <KineticGrid className="w-full min-h-screen flex flex-col justify-center pt-6 sm:pt-8 pb-8 sm:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* LEFT COLUMN */}
            <div className="lg:col-span-7 space-y-8 text-left gsap-child">

              {/* Eyebrow */}
              <div className="section-badge">
                <span className="w-2 h-2 rounded-full bg-[#FFC069] animate-pulse" />
                <span>{t.hero.eyebrow}</span>
              </div>

              {/* H1 — one per page, keep structure with morphing orange word */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]" style={{ letterSpacing: '-0.02em' }}>
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
              <p className="text-base sm:text-lg text-zinc-400 max-w-xl font-normal leading-relaxed">
                {t.hero.subtitle}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm sm:text-base"
                >
                  <MessageSquare className="w-4 h-4" />
                  {t.hero.primaryCta}
                </a>

                <button
                  onClick={scrollToPortfolio}
                  className="btn-ghost text-sm sm:text-base group"
                >
                  {t.hero.secondaryCta}
                  <ArrowRight className="w-4 h-4 text-[#FFC069] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Trust strip — 3 items replacing old inflated metrics */}
              <div className="pt-8 border-t border-white/8 grid grid-cols-1 sm:grid-cols-3 gap-5">
                {t.hero.trustStrip.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-[11px] font-mono font-bold tracking-widest text-[#FFC069]">
                      {item.label}
                    </div>
                    <div className="text-xs text-zinc-500 leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>

              {/* Tech stack — trimmed, legible */}
              <div className="flex flex-wrap gap-2 pt-2">
                {t.hero.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[12px] font-medium font-mono px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: Portrait with tilt */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={tiltStyle}
                className="relative w-full max-w-md aspect-[4/5] rounded-[32px] glass-card p-3 overflow-hidden border border-white/15 shadow-2xl cursor-pointer will-change-transform group"
              >
                <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-black/90">
                  <img
                    src="/fotoperfil.png"
                    alt="Gustavo Galvão — full-stack developer and digital growth specialist"
                    className="w-full h-full object-cover filter contrast-[1.02] pointer-events-none group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </KineticGrid>

      {/* TECH MARQUEE RIBBON */}
      <div className="w-full border-t border-b border-white/6 bg-[#050505]/90 backdrop-blur-2xl py-6 relative z-20 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-30 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-30 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-10">
          {[
            'React · Next.js',
            'Tailwind CSS',
            'GSAP & Framer Motion',
            'TypeScript',
            'AI Agents & Automation',
            'SEO / GEO',
            'Google Ads',
            'WhatsApp API',
            'Proprietary AI CRM',
            'Webhooks & Integrations',
            'React · Next.js',
            'Tailwind CSS',
            'GSAP & Framer Motion',
            'TypeScript',
            'AI Agents & Automation',
            'SEO / GEO',
            'Google Ads',
            'WhatsApp API',
            'Proprietary AI CRM',
            'Webhooks & Integrations',
          ].map((item, idx) => (
            <span
              key={idx}
              className="shrink-0 text-[13px] font-mono font-medium text-zinc-400 hover:text-[#FFC069] transition-colors"
            >
              {item}
              {idx % 10 !== 9 && <span className="ml-10 text-zinc-700">·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
