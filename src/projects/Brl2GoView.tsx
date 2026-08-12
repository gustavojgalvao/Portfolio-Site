import React, { useState } from 'react';
import { ArrowLeft, ArrowRightLeft, DollarSign, TrendingUp, RefreshCw, CheckCircle } from 'lucide-react';

interface ProjectViewProps {
  onClose: () => void;
}

export const Brl2GoView: React.FC<ProjectViewProps> = ({ onClose }) => {
  const [amount, setAmount] = useState<number>(100);
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('BRL');

  const rates: Record<string, number> = {
    USD: 5.65,
    EUR: 6.15,
    GBP: 7.20,
    BRL: 1.0,
    CAD: 4.10,
    AUD: 3.75,
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const convertedAmount = (
    (amount * (rates[fromCurrency] || 1)) /
    (rates[toCurrency] || 1)
  ).toFixed(2);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-2xl p-4 sm:p-8 animate-fade-in">
      <div className="max-w-4xl mx-auto space-y-8 py-6">
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10 hover:border-orange-500/40 text-xs font-mono text-zinc-300 hover:text-white transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-orange-400" />
            <span>Voltar ao Portfólio</span>
          </button>

          <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30 text-xs font-mono font-bold">
            PROJETO REACT: BRL2GO
          </span>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            BRL2GO — Conversor de Moedas
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base">
            Aplicação em React para conversão de taxas de câmbio em tempo real com interface moderna e responsiva.
          </p>
        </div>

        {/* Live Interactive Currency Calculator */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl space-y-6 max-w-xl mx-auto">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-orange-400" />
              <span className="font-bold text-white text-base">Cotação em Tempo Real</span>
            </div>
            <div className="flex items-center gap-1 text-xs font-mono text-emerald-400">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>Taxas Atualizadas</span>
            </div>
          </div>

          <div className="space-y-4">
            {/* Amount Input */}
            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                Valor para Converter
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value) || 0)}
                className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/10 text-white font-mono text-lg outline-none focus:border-orange-500 transition-all"
              />
            </div>

            {/* Currency Selectors & Swap */}
            <div className="grid grid-cols-5 gap-3 items-center">
              <div className="col-span-2">
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">De</label>
                <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="w-full px-3 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm font-mono outline-none"
                >
                  {Object.keys(rates).map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="col-span-1 flex justify-center pt-5">
                <button
                  onClick={handleSwap}
                  className="p-3 rounded-xl bg-white/10 hover:bg-orange-500/20 text-orange-400 transition-all"
                >
                  <ArrowRightLeft className="w-5 h-5" />
                </button>
              </div>

              <div className="col-span-2">
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">Para</label>
                <select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="w-full px-3 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm font-mono outline-none"
                >
                  {Object.keys(rates).map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Result Box */}
            <div className="p-6 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-center space-y-1 mt-4">
              <span className="text-xs font-mono text-zinc-400 uppercase">Resultado Convertido</span>
              <div className="text-3xl font-extrabold font-mono text-white">
                {convertedAmount} <span className="text-orange-400">{toCurrency}</span>
              </div>
              <span className="text-[11px] text-zinc-500 font-mono block pt-1">
                1 {fromCurrency} = {((rates[fromCurrency] || 1) / (rates[toCurrency] || 1)).toFixed(4)} {toCurrency}
              </span>
            </div>
          </div>
        </div>

        {/* Technical Features & Case Notes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-2">
            <TrendingUp className="w-6 h-6 text-orange-400" />
            <h4 className="text-base font-bold text-white">Taxas em Tempo Real</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Consumo de API financeira para atualização automática das cotações comerciais sem reload.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-2">
            <CheckCircle className="w-6 h-6 text-amber-400" />
            <h4 className="text-base font-bold text-white">UI Mobile-First</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Layout 100% responsivo projetado para navegação rápida em smartphones e desktops.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-2">
            <RefreshCw className="w-6 h-6 text-yellow-400" />
            <h4 className="text-base font-bold text-white">Cálculo Instantâneo</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Reatividade do estado do React garantindo conversões instantâneas a cada dígito digitado.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
