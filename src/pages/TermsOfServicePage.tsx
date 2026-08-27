import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { ChevronRight } from 'lucide-react';

const Breadcrumb: React.FC<{ items: { label: string; href?: string }[] }> = ({ items }) => (
  <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-zinc-400 mb-8">
    {items.map((item, idx) => (
      <React.Fragment key={idx}>
        {idx > 0 && <ChevronRight className="w-3 h-3 text-zinc-500" aria-hidden="true" />}
        {item.href ? (
          <Link to={item.href} className="hover:text-zinc-300 transition-colors">{item.label}</Link>
        ) : (
          <span className="text-zinc-400">{item.label}</span>
        )}
      </React.Fragment>
    ))}
  </nav>
);

export const TermsOfServicePage: React.FC = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  return (
    <>
      <SEOHead
        title={isEn ? 'Terms of Service' : 'Termos de Uso'}
        description={isEn
          ? 'Terms of Service for web development and digital marketing services provided by Gustavo Galvão.'
          : 'Termos de Uso para serviços de desenvolvimento web e marketing digital prestados por Gustavo Galvão.'}
        ogUrl="https://jezlercodes.dev/terms"
        noIndex
      />
      <div className="min-h-screen bg-[#050505] pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: isEn ? 'Terms of Service' : 'Termos de Uso' },
            ]}
          />

          <div className="space-y-4 mb-12">
            <div className="section-badge inline-flex">Legal</div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight" style={{ letterSpacing: '-0.025em' }}>
              {isEn ? 'Terms of Service' : 'Termos de Uso'}
            </h1>
            <p className="text-zinc-400 text-sm">
              {isEn ? 'Last updated: August 2026' : 'Última atualização: Agosto de 2026'}
            </p>
          </div>

          <div className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-300 text-sm leading-relaxed">
            {isEn ? (
              <>
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-white">1. Services</h2>
                  <p>Gustavo Galvão ("Service Provider") offers web development, AI automation, SEO, Google Ads management, and related digital marketing services to clients ("Client"). These terms govern all service engagements.</p>
                </section>
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-white">2. Scope of Work</h2>
                  <p>All deliverables, timelines, and pricing will be detailed in a separate Proposal or Statement of Work agreed upon by both parties before work begins. Changes to scope may affect timelines and pricing.</p>
                </section>
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-white">3. Payments</h2>
                  <ul className="list-disc list-inside space-y-1.5 text-zinc-400">
                    <li>Monthly retainer plans are invoiced in advance at the start of each billing cycle</li>
                    <li>Project-based engagements require a 50% deposit before work begins</li>
                    <li>Late payments may result in service suspension after 7 days</li>
                  </ul>
                </section>
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-white">4. Intellectual Property</h2>
                  <p>Upon full payment, the Client owns all custom code and design assets created specifically for their project. Third-party libraries and tools remain under their respective licenses. The Service Provider retains the right to showcase the work in their portfolio.</p>
                </section>
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-white">5. Confidentiality</h2>
                  <p>Both parties agree to keep confidential any sensitive business information shared during the engagement and not to disclose it to third parties without prior written consent.</p>
                </section>
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-white">6. Limitation of Liability</h2>
                  <p>The Service Provider is not liable for indirect, incidental, or consequential damages. Total liability is limited to the amount paid for the specific service in the preceding 30 days.</p>
                </section>
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-white">7. Termination</h2>
                  <p>Either party may terminate a monthly plan with 30 days written notice. Project-based agreements may be terminated for cause with 15 days notice, with fees due for all work completed to date.</p>
                </section>
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-white">8. Governing Law</h2>
                  <p>These terms are governed by Brazilian law. Any disputes will be resolved in the courts of Salvador, Bahia, Brazil.</p>
                </section>
              </>
            ) : (
              <>
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-white">1. Serviços</h2>
                  <p>Gustavo Galvão ("Prestador") oferece serviços de desenvolvimento web, automação com IA, SEO, gestão de Google Ads e marketing digital ao Cliente. Estes termos regem todos os contratos de prestação de serviço.</p>
                </section>
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-white">2. Escopo do Trabalho</h2>
                  <p>Todas as entregas, prazos e valores serão detalhados em uma Proposta ou Ordem de Serviço acordada por ambas as partes antes do início dos trabalhos. Alterações de escopo podem impactar prazos e valores.</p>
                </section>
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-white">3. Pagamentos</h2>
                  <ul className="list-disc list-inside space-y-1.5 text-zinc-400">
                    <li>Planos de retainer mensal são faturados antecipadamente no início de cada ciclo</li>
                    <li>Projetos avulsos exigem 50% de entrada antes do início dos trabalhos</li>
                    <li>Atrasos no pagamento podem resultar em suspensão do serviço após 7 dias</li>
                  </ul>
                </section>
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-white">4. Propriedade Intelectual</h2>
                  <p>Após o pagamento integral, o Cliente é titular de todo o código e design criados exclusivamente para o seu projeto. Bibliotecas e ferramentas de terceiros permanecem sob suas respectivas licenças. O Prestador mantém o direito de exibir o trabalho em seu portfólio.</p>
                </section>
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-white">5. Confidencialidade</h2>
                  <p>Ambas as partes concordam em manter sigilo sobre informações comerciais sensíveis compartilhadas durante o contrato e não divulgá-las a terceiros sem consentimento prévio por escrito.</p>
                </section>
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-white">6. Limitação de Responsabilidade</h2>
                  <p>O Prestador não é responsável por danos indiretos, incidentais ou consequenciais. A responsabilidade total é limitada ao valor pago pelo serviço específico nos 30 dias anteriores.</p>
                </section>
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-white">7. Rescisão</h2>
                  <p>Qualquer das partes pode rescindir um plano mensal com aviso prévio de 30 dias. Contratos por projeto podem ser rescindidos por justa causa com aviso prévio de 15 dias, sendo devidos os honorários por todo o trabalho realizado até a data.</p>
                </section>
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-white">8. Lei Aplicável</h2>
                  <p>Estes termos são regidos pela legislação brasileira. Eventuais disputas serão resolvidas no foro da cidade de Salvador, Bahia, Brasil.</p>
                </section>
              </>
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-white/8">
            <Link to="/" className="btn-ghost text-sm inline-flex">
              ← {isEn ? 'Back to Home' : 'Voltar ao início'}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
