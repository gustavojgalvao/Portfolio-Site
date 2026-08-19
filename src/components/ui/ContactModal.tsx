import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, MessageSquare, Mail, Calendar } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useContactModal } from '../../context/ContactModalContext';

export const ContactModal: React.FC = () => {
  const { isContactModalOpen, closeContactModal } = useContactModal();
  const { t } = useLanguage();

  const [name, setName] = useState('');
  const [details, setDetails] = useState('');

  // Lock body scroll
  useEffect(() => {
    if (isContactModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Reset state on close
      setTimeout(() => {
        setName('');
        setDetails('');
      }, 300);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isContactModalOpen]);

  if (!isContactModalOpen) return null;

  const handleWhatsApp = () => {
    const text = t.contactModal.whatsappMessagePrefix
      .replace('{name}', name || 'um futuro cliente')
      .replace('{details}', details || 'Gostaria de saber mais.');
    const url = 'https://wa.me/5571992550509?text=' + encodeURIComponent(text);
    window.open(url, '_blank');
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`New Project Inquiry from ${name || 'Website Visitor'}`);
    const body = encodeURIComponent(`Name: ${name}\n\nProject Details:\n${details}`);
    const url = `mailto:gustavojezler@gmail.com?subject=${subject}&body=${body}`;
    window.open(url, '_blank');
  };

  const handleMeeting = () => {
    // Calendly or other meeting link
    const url = 'https://calendly.com/';
    window.open(url, '_blank');
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={closeContactModal}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg bg-[#0a0a0d] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                {t.contactModal.title}
              </h2>
              <p className="text-sm text-zinc-400 mt-1">
                {t.contactModal.subtitle}
              </p>
            </div>
            <button
              onClick={closeContactModal}
              className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto space-y-5 custom-scrollbar">
            <div className="space-y-1.5">
              <label htmlFor="contact-name" className="text-sm font-medium text-zinc-300">
                {t.contactModal.nameLabel}
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.contactModal.namePlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-[#FFC069]/50 focus:ring-1 focus:ring-[#FFC069]/50 transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="contact-details" className="text-sm font-medium text-zinc-300">
                {t.contactModal.detailsLabel}
              </label>
              <textarea
                id="contact-details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder={t.contactModal.detailsPlaceholder}
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-[#FFC069]/50 focus:ring-1 focus:ring-[#FFC069]/50 transition-all resize-none"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="p-6 bg-white/[0.02] border-t border-white/10 space-y-4">
            <p className="text-xs font-mono tracking-widest text-zinc-500 uppercase text-center">
              {t.contactModal.proceedLabel}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={handleWhatsApp}
                className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#FFC069]/50 hover:bg-[#FFC069]/10 text-zinc-300 hover:text-white transition-all group"
              >
                <MessageSquare className="w-5 h-5 text-zinc-400 group-hover:text-[#FFC069]" />
                <span className="text-xs font-medium">{t.contactModal.btnWhatsapp}</span>
              </button>

              <button
                onClick={handleEmail}
                className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 text-zinc-300 hover:text-white transition-all group"
              >
                <Mail className="w-5 h-5 text-zinc-400 group-hover:text-white" />
                <span className="text-xs font-medium">{t.contactModal.btnEmail}</span>
              </button>

              <button
                onClick={handleMeeting}
                className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 text-zinc-300 hover:text-white transition-all group"
              >
                <Calendar className="w-5 h-5 text-zinc-400 group-hover:text-white" />
                <span className="text-xs font-medium">{t.contactModal.btnMeeting}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
