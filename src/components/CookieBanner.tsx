import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { initGA4 } from '../utils/analytics';

const GA_TRACKING_ID = 'G-9J623EKFXT';

export const CookieBanner: React.FC = () => {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    initGA4(GA_TRACKING_ID);
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setVisible(false);
  };

  const t = {
    text: language === 'en'
      ? 'We use cookies to improve your experience and analyze traffic.'
      : 'Usamos cookies para melhorar a experiência e analisar o tráfego.',
    privacy: language === 'en' ? 'Privacy Policy' : 'Política de Privacidade',
    accept: language === 'en' ? 'Accept' : 'Aceitar',
    decline: language === 'en' ? 'Decline' : 'Recusar',
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm z-[200]"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="rounded-2xl bg-[#0e0e12]/95 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] p-5 space-y-4">
            {/* Close */}
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm text-zinc-300 leading-relaxed">
                {t.text}{' '}
                <Link to="/privacy-policy" className="text-[#FFC069] hover:underline">
                  {t.privacy}
                </Link>
              </p>
              <button
                onClick={decline}
                className="shrink-0 p-1 rounded-full text-zinc-600 hover:text-zinc-400 transition-colors"
                aria-label="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={accept}
                className="flex-1 py-2 rounded-xl bg-[#FFC069] text-black text-sm font-bold hover:bg-[#ffcf85] transition-colors"
              >
                {t.accept}
              </button>
              <button
                onClick={decline}
                className="flex-1 py-2 rounded-xl border border-white/10 text-zinc-400 text-sm font-medium hover:text-white hover:border-white/20 transition-colors"
              >
                {t.decline}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
