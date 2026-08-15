import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Check, Sparkles, MessageSquare } from 'lucide-react';

export const Pricing: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="pricing" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="section-badge">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.pricing.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.pricing.title}
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {t.pricing.plans.map((plan, idx) => {
            const isPopular = plan.popular;
            const whatsappUrl = `https://wa.me/WHATSAPP_NUMBER_PLACEHOLDER?text=${encodeURIComponent(
              language === 'en'
                ? `Hi Gustavo! I'd like to select the ${plan.name} package.`
                : `Olá Gustavo! Gostaria de contratar o pacote ${plan.name}.`
            )}`;

            return (
              <div
                key={idx}
                className={`glass-card p-8 rounded-3xl border flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                  isPopular
                    ? 'border-orange-500/60 shadow-2xl shadow-orange-500/10 bg-black/80'
                    : 'border-white/10'
                }`}
              >
                {/* Popular Badge Ribbon */}
                {isPopular && (
                  <div className="absolute top-0 right-0">
                    <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 text-white text-[10px] font-mono font-extrabold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider block shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Name & Price */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <div className="flex items-baseline gap-1 font-mono">
                      <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                      <span className="text-xs text-zinc-400 font-normal">{plan.period}</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                      {plan.desc}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="pt-6 border-t border-white/10 space-y-3">
                    <span className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider block">
                      Included in Scope:
                    </span>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-8">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn-shine w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm transition-all ${
                      isPopular
                        ? 'bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 text-white shadow-lg shadow-orange-500/20'
                        : 'bg-white/10 hover:bg-white/15 text-white border border-white/10'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4 text-white" />
                    <span>{plan.cta}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
