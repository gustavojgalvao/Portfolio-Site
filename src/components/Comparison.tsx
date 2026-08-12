import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Check, X, Zap } from 'lucide-react';

export const Comparison: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="comparison" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="section-badge">
            <Zap className="w-3.5 h-3.5" />
            <span>{t.comparison.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.comparison.title}
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            {t.comparison.subtitle}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-white/10 text-sm font-mono">
                  <th className="pb-4 pt-2 text-zinc-400 uppercase tracking-wider w-1/3">Factor</th>
                  <th className="pb-4 pt-2 text-zinc-400 uppercase tracking-wider w-1/3 text-zinc-500">
                    {t.comparison.agencyTitle}
                  </th>
                  <th className="pb-4 pt-2 text-orange-400 uppercase tracking-wider w-1/3 font-bold">
                    {t.comparison.gustavoTitle}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm sm:text-base">
                {t.comparison.rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-5 pr-4 font-bold text-white">
                      {row.feature}
                    </td>
                    <td className="py-5 px-4 text-zinc-500 flex items-start gap-2">
                      <X className="w-4 h-4 text-red-500/80 shrink-0 mt-1" />
                      <span>{row.agency}</span>
                    </td>
                    <td className="py-5 pl-4 text-zinc-200 font-medium">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                        <span>{row.gustavo}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
