import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Code2, Bot, Target, Sparkles } from 'lucide-react';

export const AboutMe: React.FC = () => {
  const { t } = useLanguage();

  const highlightIcons = [
    <Code2 key="0" className="w-5 h-5 text-orange-400" />,
    <Bot key="1" className="w-5 h-5 text-amber-400" />,
    <Target key="2" className="w-5 h-5 text-yellow-400" />,
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="section-badge">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.about.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {t.about.title}
            </h2>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>{t.about.bioParagraph1}</p>
              <p>{t.about.bioParagraph2}</p>
              <p className="font-medium text-white">{t.about.bioParagraph3}</p>
            </div>

            {/* Core Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {t.about.highlights.map((hl, idx) => (
                <div key={idx} className="glass-card p-4 rounded-2xl border border-white/10 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {highlightIcons[idx]}
                  </div>
                  <h4 className="text-sm font-bold text-white">{hl.title}</h4>
                  <p className="text-xs text-zinc-400 leading-snug">{hl.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Photo & Tech Stack Pills */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-4 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80"
                alt="Gustavo Galvão"
                className="w-full h-80 object-cover object-top rounded-2xl filter contrast-105"
              />
              
              <div className="p-4 space-y-3">
                <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider block">
                  {t.about.skillsTitle}
                </span>

                <div className="flex flex-wrap gap-1.5">
                  {t.about.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
