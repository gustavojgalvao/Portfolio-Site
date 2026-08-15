import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageSquare, Send, Sparkles, User, Mail, FileText } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedText = `Name: ${name.trim() || 'N/A'}\nEmail: ${email.trim() || 'N/A'}\nProject Details: ${message.trim() || 'N/A'}`;
    const whatsappUrl = `https://wa.me/WHATSAPP_NUMBER_PLACEHOLDER?text=${encodeURIComponent(formattedText)}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <div className="section-badge mx-auto">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Minimalist Glass Form */}
        <div className="max-w-[580px] mx-auto">
          <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Name */}
              <div className="space-y-2">
                <label className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-300">
                  <User className="w-3.5 h-3.5 text-orange-400" />
                  {t.contact.nameLabel} <span className="text-orange-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.contact.namePlaceholder}
                  className="w-full px-4 py-3.5 rounded-xl glass-input text-white text-sm placeholder-zinc-500 focus:border-orange-500 transition-all outline-none"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-300">
                  <Mail className="w-3.5 h-3.5 text-orange-400" />
                  {t.contact.emailLabel} <span className="text-orange-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.contact.emailPlaceholder}
                  className="w-full px-4 py-3.5 rounded-xl glass-input text-white text-sm placeholder-zinc-500 focus:border-orange-500 transition-all outline-none"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-300">
                  <FileText className="w-3.5 h-3.5 text-orange-400" />
                  {t.contact.messageLabel} <span className="text-orange-400">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-4 py-3.5 rounded-xl glass-input text-white text-sm placeholder-zinc-500 focus:border-orange-500 transition-all outline-none resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn-shine w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 text-white font-bold text-base shadow-xl shadow-orange-500/20 hover:scale-[1.01] transition-all"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <span>{t.contact.submitCta}</span>
                <Send className="w-4 h-4 ml-1 text-white" />
              </button>

              <p className="text-center text-xs text-zinc-500 font-mono pt-2">
                {t.contact.guarantee}
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};
