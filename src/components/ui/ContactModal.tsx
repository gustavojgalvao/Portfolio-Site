import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronDown, Mail, Copy, Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useContactModal } from '../../context/ContactModalContext';

export const ContactModal: React.FC = () => {
  const { isContactModalOpen, closeContactModal } = useContactModal();
  const { t } = useLanguage();

  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [method, setMethod] = useState<'whatsapp' | 'email' | 'meeting'>('whatsapp');
  const [showEmailFallback, setShowEmailFallback] = useState(false);
  const [copied, setCopied] = useState(false);

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
        setMethod('whatsapp');
        setShowEmailFallback(false);
        setCopied(false);
      }, 300);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isContactModalOpen]);

  if (!isContactModalOpen) return null;

  const handleSubmit = () => {
    if (method === 'whatsapp') {
      const text = t.contactModal.whatsappMessagePrefix
        .replace('{name}', name || 'um futuro cliente')
        .replace('{details}', details || 'Gostaria de saber mais.');
      const url = 'https://wa.me/5571992550509?text=' + encodeURIComponent(text);
      window.open(url, '_blank', 'noopener,noreferrer');
    } else if (method === 'email') {
      const subject = encodeURIComponent(`New Project Inquiry from ${name || 'Website Visitor'}`);
      const body = encodeURIComponent(`Name: ${name}\n\nProject Details:\n${details}`);
      const url = `mailto:gustavojezler@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = url;
      setShowEmailFallback(true);
    } else if (method === 'meeting') {
      // Replace with your actual Calendly link, e.g., https://calendly.com/your-username
      const url = 'https://calendly.com/gustavojezler';
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('gustavojezler@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const subject = encodeURIComponent(`New Project Inquiry from ${name || 'Website Visitor'}`);
  const body = encodeURIComponent(`Name: ${name}\n\nProject Details:\n${details}`);
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=gustavojezler@gmail.com&su=${subject}&body=${body}`;

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
          className="relative w-full max-w-lg glass-card rounded-3xl overflow-hidden flex flex-col max-h-[90vh]"
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

          {showEmailFallback ? (
            <div className="p-8 text-center flex flex-col items-center justify-center min-h-[300px]">
              <div className="w-16 h-16 rounded-full bg-[#FFC069]/10 flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-[#FFC069]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t.contactModal.emailFallbackTitle}</h3>
              <p className="text-zinc-400 text-sm mb-8 max-w-sm mx-auto">
                {t.contactModal.emailFallbackDesc}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mx-auto">
                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 w-full flex justify-center items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#E8642F] to-[#FFC069] text-[#0a0a0d] text-sm font-bold transition-transform hover:scale-[1.02] shadow-lg shadow-orange-500/20"
                >
                  <Mail className="w-4 h-4" />
                  {t.contactModal.emailFallbackGmailBtn}
                </a>

                <div className="flex-1 w-full flex items-center justify-between gap-2 bg-white/5 border border-white/10 rounded-xl p-2">
                  <div className="flex-1 text-zinc-300 text-xs font-medium truncate px-1">
                    gustavojezler@gmail.com
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors shrink-0"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? t.contactModal.emailFallbackCopiedBtn : t.contactModal.emailFallbackCopyBtn}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
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

                <div className="space-y-1.5">
                  <label htmlFor="contact-method" className="text-sm font-medium text-zinc-300">
                    {t.contactModal.methodLabel}
                  </label>
                  <div className="relative">
                    <select
                      id="contact-method"
                      value={method}
                      onChange={(e) => setMethod(e.target.value as any)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FFC069]/50 focus:ring-1 focus:ring-[#FFC069]/50 transition-all appearance-none cursor-pointer"
                    >
                      <option value="whatsapp" className="bg-[#0a0a0d] text-white">{t.contactModal.methodWhatsapp}</option>
                      <option value="email" className="bg-[#0a0a0d] text-white">{t.contactModal.methodEmail}</option>
                      <option value="meeting" className="bg-[#0a0a0d] text-white">{t.contactModal.methodMeeting}</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 bg-white/[0.02] border-t border-white/10">
                <button
                  onClick={handleSubmit}
                  className="w-full btn-primary flex items-center justify-center gap-2 p-3.5 rounded-xl font-bold"
                >
                  <span>{t.contactModal.submitBtn}</span>
                </button>
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
