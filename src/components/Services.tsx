import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Layout, TrendingUp, Bot, Sparkles } from 'lucide-react';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const icons = [
    <Layout key="0" className="w-6 h-6 text-orange-400" />,
    <TrendingUp key="1" className="w-6 h-6 text-amber-400" />,
    <Bot key="2" className="w-6 h-6 text-yellow-400" />,
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SERVICES & SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            {t.services.subtitle}
          </p>
        </div>

        {/* 3 Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.services.items.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/10 group relative overflow-hidden"
            >
              {/* Subtle Ambient Hover Glow */}
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-all" />

              <div className="space-y-6 relative z-10">
                {/* Glass Icon Chip */}
                <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center border border-white/15 shadow-inner group-hover:scale-110 transition-transform">
                  {icons[idx]}
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Tag Row */}
              <div className="pt-8 relative z-10 flex flex-wrap gap-2">
                {item.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300 group-hover:border-orange-500/30 group-hover:text-orange-300 transition-all"
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
