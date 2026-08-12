import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-white/10 relative z-10 text-center space-y-2">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-xs font-mono text-zinc-400 tracking-wide">
          {t.footer.copyright}
        </p>
        <p className="text-[11px] font-mono text-zinc-500">
          {t.footer.tagline}
        </p>
      </div>
    </footer>
  );
};
