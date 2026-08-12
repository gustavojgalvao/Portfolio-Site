import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TextMorph } from './ui/text-morph';
import { MessageSquare, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { useGsapReveal } from '../hooks/useGsapReveal';

export const Hero: React.FC = () => {
  const { language, t } = useLanguage();
  const containerRef = useGsapReveal({ y: 30, duration: 0.8, stagger: 0.15 });

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

  return (
    <section id="hero" ref={containerRef as React.RefObject<HTMLElement>} className="relative min-h-[85vh] pt-12 pb-20 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Sales Copy & Conversion CTAs */}
          <div className="lg:col-span-7 space-y-8 text-left gsap-child">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-xs font-mono tracking-wider text-orange-400 uppercase font-semibold">
                {t.hero.eyebrow}
              </span>
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
                className="btn-shine inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-bold text-sm sm:text-base shadow-xl shadow-orange-500/20 hover:scale-[1.02] transition-all"
              >
                <MessageSquare className="w-5 h-5" />
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

          {/* RIGHT COLUMN: Clean Developer Portrait */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl glass-card p-3 overflow-hidden border border-white/15 shadow-2xl">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black">
                {/* Clean Professional Developer Photo */}
                <img
                  src="/fotoperfil.png"
                  alt="Gustavo Galvão"
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                {/* Stat Badge Overlay 1 */}
                <div className="absolute bottom-4 left-4 glass-card px-4 py-2.5 rounded-xl border border-white/15 flex items-center gap-3">
                  <Award className="w-5 h-5 text-orange-400" />
                  <div>
                    <span className="block text-xs font-bold text-white">Gustavo Galvão</span>
                    <span className="block text-[11px] font-mono text-zinc-400">Senior Web & AI Dev</span>
                  </div>
                </div>

                {/* Stat Badge Overlay 2 */}
                <div className="absolute top-4 right-4 glass-card px-3.5 py-1.5 rounded-full border border-white/15 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono font-bold text-emerald-300">Verified Specialist</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
