import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="work" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="section-badge">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.caseStudies.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.caseStudies.title}
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            {t.caseStudies.subtitle}
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.caseStudies.items.map((cs) => (
            <div
              key={cs.id}
              className="glass-card rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden bg-zinc-950">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  
                  {/* Metric Pill Overlay */}
                  <div className="absolute top-4 left-4 glass-card px-3 py-1.5 rounded-full border border-white/15 flex items-center gap-2">
                    <span className="text-sm font-extrabold font-mono text-orange-400">{cs.metric}</span>
                    <span className="text-[10px] text-zinc-300 font-medium">{cs.metricLabel}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                      {cs.client}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors leading-snug">
                      {cs.title}
                    </h3>
                  </div>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {cs.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Actions & Tags */}
              <div className="p-6 pt-0 space-y-4">
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                  {cs.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/WHATSAPP_NUMBER_PLACEHOLDER?text=${encodeURIComponent(
                    language === 'en'
                      ? `Hi Gustavo! I'd like to see the case study details for ${cs.title}.`
                      : `Olá Gustavo! Gostaria de ver os detalhes do estudo de caso para ${cs.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-orange-400 hover:text-amber-300 transition-colors"
                >
                  <span>{cs.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
