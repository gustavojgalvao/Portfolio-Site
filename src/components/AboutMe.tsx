import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Sparkles } from 'lucide-react';

interface AboutMeProps {
  onNavigatePortfolio: () => void;
}

export const AboutMe: React.FC<AboutMeProps> = ({ onNavigatePortfolio }) => {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Summary Copy */}
            <div className="lg:col-span-8 space-y-6">
              <div className="section-badge">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.about.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {t.about.title}
              </h2>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                {language === 'en'
                  ? 'Senior web developer and AI automation specialist. I help founders, businesses, and agencies engineer high-performance React web platforms, automated lead triage engines, and conversion-first digital systems.'
                  : 'Desenvolvedor web sênior e especialista em automação com inteligência artificial. Ajudando empresas, startups e agências a construir plataformas web em React de alta performance, motores de triagem de leads automatizados e sistemas focados em conversão.'}
              </p>

              <div>
                <button
                  onClick={onNavigatePortfolio}
                  className="btn-shine inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 text-white font-bold text-sm shadow-lg shadow-orange-500/20 hover:scale-105 transition-all group"
                >
                  <span>
                    {language === 'en'
                      ? 'Know More & Explore Full Portfolio'
                      : 'Saiba Mais & Explore o Portfólio Completo'}
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right: Quick Spec Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="glass-card p-6 rounded-2xl border border-white/10 w-full max-w-xs text-left space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/fotoperfil.png"
                    alt="Gustavo Galvão"
                    className="w-12 h-12 rounded-full object-cover border border-orange-500/40"
                  />
                  <div>
                    <span className="block text-sm font-bold text-white">Gustavo Galvão</span>
                    <span className="block text-xs font-mono text-zinc-400">Senior Web & AI Developer</span>
                  </div>
                </div>

                <div className="space-y-2 pt-3 border-t border-white/10 text-xs font-mono text-zinc-300">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Location:</span>
                    <span className="text-white">Brazil (Global Remote)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Languages:</span>
                    <span className="text-white">English · Portuguese</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Experience:</span>
                    <span className="text-orange-400 font-bold">5+ Years</span>
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
