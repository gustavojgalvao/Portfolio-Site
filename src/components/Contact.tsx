import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageSquare, Send, Sparkles } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedText = `Name: ${name.trim() || 'N/A'}\nEmail: ${email.trim() || 'N/A'}\nMessage: ${message.trim() || 'N/A'}`;
    const whatsappUrl = `https://wa.me/WHATSAPP_NUMBER_PLACEHOLDER?text=${encodeURIComponent(formattedText)}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Minimalist Glass Form (Centered ~560px) */}
        <div className="max-w-[560px] mx-auto">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            
            {/* Subtle Top Glow Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
                  {t.contact.nameLabel} <span className="text-orange-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.contact.namePlaceholder}
                  className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm placeholder-zinc-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all outline-none"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
                  {t.contact.emailLabel} <span className="text-orange-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.contact.emailPlaceholder}
                  className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm placeholder-zinc-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all outline-none"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
                  {t.contact.messageLabel} <span className="text-orange-400">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm placeholder-zinc-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all outline-none resize-none"
                />
              </div>

              {/* WhatsApp Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:to-amber-600 text-black font-bold text-base shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-[1.01] transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                <span>{t.contact.submitCta}</span>
                <Send className="w-4 h-4 ml-1" />
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};
