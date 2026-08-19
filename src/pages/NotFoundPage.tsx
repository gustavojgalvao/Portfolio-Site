import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEOHead title="Página não encontrada" noIndex />
      <div className="min-h-screen bg-[#050505] flex items-center justify-center px-4 relative overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(232,100,47,0.07) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        <div className="relative z-10 text-center space-y-8 max-w-lg mx-auto">
          {/* 404 Code */}
          <div className="space-y-2">
            <p className="text-[9rem] sm:text-[12rem] font-black leading-none text-white/[0.04] select-none">
              404
            </p>
            <div className="-mt-16 sm:-mt-24 relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/8 text-[11px] font-mono text-zinc-500 tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8642F]" />
                Rota não encontrada
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight" style={{ letterSpacing: '-0.025em' }}>
                Esta página não existe
              </h1>
              <p className="text-base text-zinc-400 leading-relaxed">
                O endereço que você acessou não está disponível.<br />
                Pode ter sido movido, deletado ou nunca existido.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="btn-primary text-sm px-6 py-2.5"
            >
              ← Voltar para o início
            </button>
            <button
              onClick={() => navigate('/portfolio')}
              className="btn-ghost text-sm px-6 py-2.5"
            >
              Ver portfólio
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
