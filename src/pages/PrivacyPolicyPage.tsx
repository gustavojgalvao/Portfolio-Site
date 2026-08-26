import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { ChevronRight } from 'lucide-react';

const Breadcrumb: React.FC<{ items: { label: string; href?: string }[] }> = ({ items }) => (
  <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-zinc-500 mb-8">
    {items.map((item, idx) => (
      <React.Fragment key={idx}>
        {idx > 0 && <ChevronRight className="w-3 h-3 text-zinc-700" aria-hidden="true" />}
        {item.href ? (
          <Link to={item.href} className="hover:text-zinc-300 transition-colors">{item.label}</Link>
        ) : (
          <span className="text-zinc-400">{item.label}</span>
        )}
      </React.Fragment>
    ))}
  </nav>
);

export const PrivacyPolicyPage: React.FC = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  return (
    <>
      <SEOHead
        title={isEn ? 'Privacy Policy' : 'Política de Privacidade'}
        description={isEn
          ? 'Privacy Policy for jezlercodes.dev — how we collect and use your data.'
          : 'Política de Privacidade do site jezlercodes.dev — como coletamos e usamos seus dados.'}
        ogUrl="https://jezlercodes.dev/privacy-policy"
        noIndex
      />
      <div className="min-h-screen bg-[#050505] pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: isEn ? 'Privacy Policy' : 'Política de Privacidade' },
            ]}
          />

          <div className="space-y-4 mb-12">
            <div className="section-badge inline-flex">Legal</div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight" style={{ letterSpacing: '-0.025em' }}>
              {isEn ? 'Privacy Policy' : 'Política de Privacidade'}
            </h1>
            <p className="text-zinc-500 text-sm">
              {isEn ? 'Last updated: August 2026' : 'Última atualização: Agosto de 2026'}
            </p>
          </div>

          <div className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-300 text-sm leading-relaxed">
            {isEn ? (
              <>
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-white">1. Who We Are</h2>
                  <p>This website is operated by Gustavo Galvão (gustavojezler@gmail.com). When you use this site or contact us through forms or WhatsApp, you may share personal data with us. This policy explains how we handle that information.</p>
                </section>
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-white">2. Data We Collect</h2>
                  <ul className="list-disc list-inside space-y-1.5 text-zinc-400">
                    <li>Contact information (name, email, phone) when you reach out via WhatsApp or any contact form</li>
                    <li>Technical data (IP address, browser type, pages visited) collected automatically via analytics tools</li>
                    <li>Cookie data as described in our Cookie Policy below</li>
                  </ul>
                </section>
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-white">3. How We Use Your Data</h2>
                  <ul className="list-disc list-inside space-y-1.5 text-zinc-400">
                    <li>To respond to your inquiries and provide our services</li>
                    <li>To improve our website and service offerings</li>
                    <li>To analyze website traffic and user behavior (anonymized)</li>
                    <li>We do not sell or share your data with third parties for marketing purposes</li>
                  </ul>
                </section>
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-white">4. Cookies</h2>
                  <p>We use essential cookies for site functionality and analytics cookies to understand how visitors use our site. You can manage your cookie preferences via the cookie banner displayed on your first visit.</p>
                </section>
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-white">5. Your Rights</h2>
                  <p>You have the right to access, correct, or delete your personal data at any time. To exercise these rights, contact us at <a href="mailto:gustavojezler@gmail.com" className="text-[#FFC069] hover:underline">gustavojezler@gmail.com</a>.</p>
                </section>
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-white">6. Data Retention</h2>
                  <p>We retain personal data only for as long as necessary to fulfill the purposes described in this policy, or as required by applicable law.</p>
                </section>
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-white">7. Contact</h2>
                  <p>For any privacy-related questions, please contact: <a href="mailto:gustavojezler@gmail.com" className="text-[#FFC069] hover:underline">gustavojezler@gmail.com</a></p>
                </section>
              </>
            ) : (
              <>
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-white">1. Quem Somos</h2>
                  <p>Este site é operado por Gustavo Galvão (gustavojezler@gmail.com). Ao usar este site ou entrar em contato conosco por formulários ou WhatsApp, você pode compartilhar dados pessoais. Esta política explica como tratamos essas informações.</p>
                </section>
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-white">2. Dados que Coletamos</h2>
                  <ul className="list-disc list-inside space-y-1.5 text-zinc-400">
                    <li>Dados de contato (nome, e-mail, telefone) quando você nos envia mensagens pelo WhatsApp ou formulário</li>
                    <li>Dados técnicos (endereço IP, tipo de navegador, páginas visitadas) coletados automaticamente por ferramentas de analytics</li>
                    <li>Dados de cookies conforme descrito abaixo</li>
                  </ul>
                </section>
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-white">3. Como Usamos seus Dados</h2>
                  <ul className="list-disc list-inside space-y-1.5 text-zinc-400">
                    <li>Para responder às suas solicitações e prestar nossos serviços</li>
                    <li>Para melhorar nosso site e ofertas de serviços</li>
                    <li>Para analisar o tráfego do site e o comportamento dos usuários (de forma anonimizada)</li>
                    <li>Não vendemos nem compartilhamos seus dados com terceiros para fins de marketing</li>
                  </ul>
                </section>
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-white">4. Cookies</h2>
                  <p>Usamos cookies essenciais para o funcionamento do site e cookies de análise para entender como os visitantes utilizam nosso site. Você pode gerenciar suas preferências de cookies por meio do banner exibido na sua primeira visita.</p>
                </section>
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-white">5. Seus Direitos (LGPD)</h2>
                  <p>Nos termos da Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018), você tem o direito de acessar, corrigir, excluir ou portar seus dados pessoais. Para exercer esses direitos, entre em contato em <a href="mailto:gustavojezler@gmail.com" className="text-[#FFC069] hover:underline">gustavojezler@gmail.com</a>.</p>
                </section>
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-white">6. Retenção de Dados</h2>
                  <p>Mantemos dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta política, ou conforme exigido pela legislação aplicável.</p>
                </section>
                <section className="space-y-3">
                  <h2 className="text-lg font-bold text-white">7. Contato</h2>
                  <p>Para qualquer questão relacionada à privacidade: <a href="mailto:gustavojezler@gmail.com" className="text-[#FFC069] hover:underline">gustavojezler@gmail.com</a></p>
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
