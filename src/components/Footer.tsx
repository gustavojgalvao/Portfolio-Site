import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/6 bg-[#050505] py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <p className="text-[11px] font-mono text-zinc-600 text-center">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
};
