import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useContactModal } from '../context/ContactModalContext';

export const MobileStickyCtA: React.FC = () => {
  const { language } = useLanguage();
  const { openContactModal } = useContactModal();

  const label = language === 'en' ? 'Start Project' : 'Iniciar Projeto';

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-0 left-0 right-0 z-[90] md:hidden pb-safe"
    >
      <div className="bg-[#0a0a0d]/95 backdrop-blur-2xl border-t border-white/8 px-4 py-3 flex items-center gap-3">
        {/* Pulse indicator */}
        <div className="shrink-0 relative">
          <span className="absolute inset-0 rounded-full bg-[#FFC069]/20 animate-ping" />
          <span className="relative block w-2 h-2 rounded-full bg-[#FFC069]" />
        </div>

        <p className="text-xs text-zinc-400 flex-1 leading-tight">
          {language === 'en' ? 'Response in under 2h' : 'Resposta em até 2h'}
        </p>

        <button
          onClick={openContactModal}
          className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FFC069] text-black text-sm font-bold hover:bg-[#ffcf85] transition-colors active:scale-95"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          {label}
        </button>
      </div>
    </motion.div>
  );
};
