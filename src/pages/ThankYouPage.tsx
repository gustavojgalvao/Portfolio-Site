import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { MessageSquare } from 'lucide-react';

export const ThankYouPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEOHead title="Obrigado pelo contato" noIndex />
      <div className="min-h-screen bg-[#050505] flex items-center justify-center px-4 relative overflow-hidden">
        <div
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255,192,105,0.06) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div className="relative z-10 text-center space-y-8 max-w-lg mx-auto">
          {/* Checkmark */}
          <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <svg className="w-9 h-9 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/8 text-[11px] font-mono text-zinc-400 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Mensagem recebida
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight" style={{ letterSpacing: '-0.025em' }}>
              Obrigado pelo contato!
            </h1>
            <p className="text-base text-zinc-400 leading-relaxed max-w-sm mx-auto">
              Recebi sua mensagem e responderei diretamente no WhatsApp em até <span className="text-white font-semibold">2 horas</span>.
            </p>
          </div>

          {/* Response promise */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/8 p-5 text-left space-y-2">
            <p className="text-xs font-mono text-zinc-400 tracking-widest uppercase">Próximos passos</p>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              <li className="flex items-start gap-2.5">
                <span className="text-[#FFC069] mt-0.5">01</span>
                <span>Você receberá uma resposta no WhatsApp em até 2 horas</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#FFC069] mt-0.5">02</span>
                <span>Vamos agendar uma conversa de 20 minutos para entender seu negócio</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#FFC069] mt-0.5">03</span>
                <span>Você recebe uma proposta clara e sem pressão de venda</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => navigate('/')} className="btn-ghost text-sm px-6 py-2.5">
              ← Voltar ao início
            </button>
            <a
              href="https://wa.me/5571992550509"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-6 py-2.5"
            >
              <MessageSquare className="w-4 h-4" />
              Abrir WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
