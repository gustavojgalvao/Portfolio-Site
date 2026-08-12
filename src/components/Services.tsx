import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Layout, Bot, TrendingUp, CheckCircle2, Sparkles } from 'lucide-react';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const icons = [
    <Layout key="0" className="w-6 h-6 text-orange-400" />,
    <Bot key="1" className="w-6 h-6 text-amber-400" />,
    <TrendingUp key="2" className="w-6 h-6 text-yellow-400" />,
  ];

  return (
    <section id="services" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="section-badge">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            {t.services.subtitle}
          </p>
        </div>

        {/* 3 Glass Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.services.items.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
                  {icons[idx]}
                </div>

                {/* Title & Desc */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  <span className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider block">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-2">
                    {item.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tag Row */}
              <div className="pt-8 flex flex-wrap gap-2">
                {item.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
