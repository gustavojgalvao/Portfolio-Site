import React, { useState } from 'react';
import { ArrowLeft, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';

interface ProjectViewProps {
  onClose: () => void;
}

export const LenteContatoView: React.FC<ProjectViewProps> = ({ onClose }) => {
  const [selectedProcedure, setSelectedProcedure] = useState<string>('Lentes de Porcelana');

  const whatsappBookingUrl =
    'https://wa.me/5571992550509?text=' +
    encodeURIComponent('Olá! Gostaria de agendar uma avaliação para Lentes de Contato Dental.');

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-2xl p-4 sm:p-8 animate-fade-in">
      <div className="max-w-5xl mx-auto space-y-8 py-6">
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10 hover:border-orange-500/40 text-xs font-mono text-zinc-300 hover:text-white transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-orange-400" />
            <span>Voltar ao Portfólio</span>
          </button>

          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold">
            PROJETO REACT: ODONTOLOGIA ESTÉTICA
          </span>
        </div>

        {/* Hero Header */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              ODONTOLOGIA ESTÉTICA PREMIUM
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Transforme Seu Sorriso com Lentes Dental
            </h1>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Página médica de alta conversão projetada para clínicas com agendamento direto e experiência fluida.
            </p>
            <div>
              <a
                href={whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-bold text-sm shadow-xl shadow-emerald-500/20 hover:scale-105 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Agendar Avaliação no WhatsApp →</span>
              </a>
            </div>
          </div>

          <div className="w-64 h-48 rounded-2xl overflow-hidden glass-card border border-white/15 shrink-0">
            <img
              src="/img/lentesdecontatodetal.png"
              alt="Lentes de Contato Dental"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Procedures Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { title: 'Lentes de Porcelana', desc: 'Resistência extrema e naturalidade perfeita.' },
            { title: 'Facetas em Resina', desc: 'Transformação rápida e conservadora em poucas sessões.' },
            { title: 'Clareamento Laser', desc: 'Brilho intenso e uniforme para o seu sorriso.' },
          ].map((proc) => (
            <div
              key={proc.title}
              onClick={() => setSelectedProcedure(proc.title)}
              className={`glass-card p-6 rounded-2xl border cursor-pointer transition-all ${
                selectedProcedure === proc.title
                  ? 'border-emerald-500/60 bg-emerald-500/10 shadow-lg shadow-emerald-500/10'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mb-2" />
              <h4 className="text-base font-bold text-white mb-1">{proc.title}</h4>
              <p className="text-xs text-zinc-400">{proc.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
