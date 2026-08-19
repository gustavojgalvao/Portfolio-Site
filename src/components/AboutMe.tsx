import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useGsapReveal } from '../hooks/useGsapReveal';
import { MapPin, Languages } from 'lucide-react';

interface AboutMeProps {
  onNavigatePortfolio?: () => void;
}

export const AboutMe: React.FC<AboutMeProps> = () => {
  const { t } = useLanguage();
  const containerRef = useGsapReveal({ y: 40, duration: 0.9, stagger: 0.12 });

  return (
    <section
      id="about"
      ref={containerRef as React.RefObject<HTMLElement>}
      className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 85% 50%, rgba(255,192,105,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Heading */}
        <div className="mb-10 gsap-child">
          <div className="section-badge inline-flex mb-5">
            {t.about.eyebrow}
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white"
            style={{ letterSpacing: '-0.025em' }}
          >
            {t.about.title}
          </h2>
        </div>

        {/* Glass bio card */}
        <div className="glass-feature p-5 sm:p-8 md:p-10 space-y-6 gsap-child">
          <p className="text-[16px] sm:text-[17px] text-zinc-300 leading-[1.75]">
            {t.about.bio}
          </p>

          {/* Facts row */}
          <div className="pt-6 border-t border-white/8 flex flex-wrap gap-6">
            {t.about.facts.map((fact, i) => {
              const Icon = i === 0 ? MapPin : Languages;
              return (
                <div key={i} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-[#FFC069] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[10px] font-mono font-semibold tracking-widest text-zinc-600 uppercase mb-0.5">
                      {fact.label}
                    </div>
                    <div className="text-sm text-zinc-300">{fact.value}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
