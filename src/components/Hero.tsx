import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TextMorph } from './ui/text-morph';
import { MessageSquare, ArrowRight, ShieldCheck, Zap, UserCheck, Code2, Cpu } from 'lucide-react';

interface HeroProps {
  onNavigatePortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigatePortfolio }) => {
  const { language, t } = useLanguage();

  const whatsappUrl =
    'https://wa.me/WHATSAPP_NUMBER_PLACEHOLDER?text=' +
    encodeURIComponent(
      language === 'en'
        ? "Hi Gustavo! I saw your portfolio and would like to start a project."
        : 'Olá Gustavo! Vi seu portfólio e gostaria de iniciar um projeto.'
    );

  return (
    <section className="relative min-h-[90vh] pt-12 pb-20 overflow-hidden flex flex-col justify-center">
      {/* Ambient background glows */}
      <div className="glow-orange-top" />
      <div className="glow-red-bottom" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN (Content & Copy) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-xs font-mono tracking-wide text-orange-300 uppercase font-semibold">
                {t.hero.eyebrow}
              </span>
            </div>

            {/* Main H1 Title with TextMorph */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              <span>{t.hero.titleStart} </span>
              <span className="block mt-1 sm:inline-block">
                <TextMorph
                  words={t.hero.morphWords}
                  interval={2800}
                  className="text-gradient-orange-gold font-black inline-flex"
                  charClassName="drop-shadow-[0_0_25px_rgba(255,110,0,0.4)]"
                />
              </span>
              <span className="block mt-1 text-zinc-300">{t.hero.titleEnd}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Two CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:to-amber-600 text-black font-bold text-sm sm:text-base shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                <span>{t.hero.primaryCta}</span>
              </a>

              <button
                onClick={onNavigatePortfolio}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass-panel hover:bg-white/10 text-white border border-white/15 hover:border-orange-500/40 font-semibold text-sm sm:text-base transition-all group"
              >
                <span>{t.hero.secondaryCta}</span>
                <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* 3-Column Micro Trust Strip */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {t.hero.trustStrip.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    {idx === 0 && <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />}
                    {idx === 1 && <Zap className="w-3.5 h-3.5 text-amber-400" />}
                    {idx === 2 && <UserCheck className="w-3.5 h-3.5 text-yellow-400" />}
                    <span className="text-[11px] font-mono font-bold tracking-wider text-orange-400 uppercase">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN (Photo + Abstract Rim-Lit Tech Artwork) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl glass-panel p-3 border border-white/15 shadow-2xl overflow-hidden group">
              
              {/* Outer rim glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-orange-600 via-amber-500 to-red-600 rounded-3xl opacity-30 blur-xl group-hover:opacity-60 transition-opacity" />

              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/80">
                {/* Developer Photo */}
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
                  alt="Gustavo - Web Developer & AI Automation Specialist"
                  className="w-full h-full object-cover object-center filter grayscale brightness-90 contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />

                {/* Orange/Red Rim Light Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent mix-blend-multiply opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-950/40 via-transparent to-red-950/30" />

                {/* Floating Orbiting Tech Rings Overlay */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <div className="w-64 h-64 border border-orange-500/30 rounded-full animate-[spin_20s_linear_infinite] [transform:rotateX(60deg)_rotateY(20deg)]" />
                  <div className="absolute w-56 h-56 border border-amber-400/30 rounded-full animate-[spin_15s_linear_infinite_reverse] [transform:rotateX(40deg)_rotateY(-30deg)]" />
                  <div className="absolute w-48 h-48 border border-red-500/20 rounded-full animate-[spin_25s_linear_infinite] [transform:rotateX(75deg)_rotateY(10deg)]" />
                </div>

                {/* Floating Micro-Badge Top Left */}
                <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/20 shadow-lg">
                  <Cpu className="w-4 h-4 text-orange-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-white tracking-wider">
                    AI Automation
                  </span>
                </div>

                {/* Floating Micro-Badge Bottom Right */}
                <div className="absolute bottom-4 right-4 glass-panel px-3.5 py-2 rounded-xl border border-white/20 shadow-xl flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-amber-400" />
                  <div>
                    <span className="block text-xs font-mono text-zinc-400">Stack</span>
                    <span className="block text-xs font-bold text-white">React · GSAP · AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
