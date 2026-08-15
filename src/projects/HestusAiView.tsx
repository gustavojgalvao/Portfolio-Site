import React, { useState } from 'react';
import { ArrowLeft, Bot, Cpu, Zap } from 'lucide-react';

interface ProjectViewProps {
  onClose: () => void;
}

export const HestusAiView: React.FC<ProjectViewProps> = ({ onClose }) => {
  const [leadScore, setLeadScore] = useState<number | null>(null);
  const [budget, setBudget] = useState<string>('5k-10k');
  const [timeline, setTimeline] = useState<string>('imediato');

  const handleSimulateAI = () => {
    const score = budget === '10k+' ? 98 : budget === '5k-10k' ? 85 : 65;
    setLeadScore(score);
  };

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

          <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold">
            PROJETO REACT: HESTUS AI
          </span>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
            <Cpu className="w-4 h-4" />
            AUTOMAÇÃO B2B PARA PMEs
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Hestus AI — Plataforma de Automação
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Solução de agentes de Inteligência Artificial para automação de atendimento, triagem de leads e fluxos de CRM.
          </p>
        </div>

        {/* Interactive AI Lead Qualification Simulator Widget */}
        <div className="glass-card p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-orange-400" />
              <span className="font-bold text-white text-base">Simulador de Triagem por IA</span>
            </div>
            <span className="text-xs font-mono text-zinc-400">Modelo Hestus v2.4</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                Faixa de Orçamento
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm font-mono outline-none"
              >
                <option value="1k-5k">R$ 1.000 — R$ 5.000</option>
                <option value="5k-10k">R$ 5.000 — R$ 10.000</option>
                <option value="10k+">Acima de R$ 10.000</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                Prazo de Lançamento
              </label>
              <select
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm font-mono outline-none"
              >
                <option value="imediato">Imediato (&lt; 15 dias)</option>
                <option value="30dias">Em até 30 dias</option>
                <option value="planejando">Apenas planejando</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleSimulateAI}
            className="btn-shine w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 text-white font-bold text-sm shadow-lg shadow-orange-500/20 hover:scale-[1.01] transition-all"
          >
            <Zap className="w-4 h-4 text-white" />
            <span>Simular Pontuação do Lead com IA</span>
          </button>

          {leadScore !== null && (
            <div className="p-6 rounded-2xl bg-black/60 border border-orange-500/40 text-center space-y-2 animate-fade-in">
              <span className="text-xs font-mono text-zinc-400 uppercase block">Score de Qualificação</span>
              <div className="text-4xl font-extrabold font-mono text-orange-400">
                {leadScore} <span className="text-white text-lg">/ 100</span>
              </div>
              <p className="text-xs text-emerald-400 font-mono">
                ✓ Lead qualificado automaticamente. Encaminhado ao comercial via WhatsApp.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
