import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useGsapReveal } from '../hooks/useGsapReveal';
import { MapPin, Languages } from 'lucide-react';
import { Card, CardContent } from './ui/card';

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

        {/* ─── BENTO GRID ──────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 gsap-child">
          
          {/* Bio Card */}
          <Card className="lg:col-span-2 relative overflow-hidden border-white/10 bg-white/[0.02] backdrop-blur-xl">
            <CardContent className="p-6 sm:p-8 md:p-10">
              <p className="text-[16px] sm:text-[17px] text-zinc-300 leading-[1.75]">
                {t.about.bio}
              </p>
            </CardContent>
          </Card>

          {/* Facts Column */}
          <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {t.about.facts.map((fact, i) => {
              const Icon = i === 0 ? MapPin : Languages;
              return (
                <Card key={i} className="relative overflow-hidden border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/[0.03] group">
                  {/* Subtle hover glow */}
                  <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity duration-500" style={{ background: '#FFC069' }} />
                  
                  <CardContent className="p-6 sm:p-8 flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#FFC069]/10 border border-[#FFC069]/20 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#FFC069]" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono font-semibold tracking-widest text-zinc-500 uppercase mb-1">
                        {fact.label}
                      </div>
                      <div className="text-sm font-medium text-white">{fact.value}</div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
