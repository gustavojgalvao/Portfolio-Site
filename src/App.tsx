import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import { LoadingProvider, useLoading } from './context/LoadingContext';
import { ProjectModalProvider } from './context/ProjectModalContext';
import { ContactModalProvider } from './context/ContactModalContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PlanOverview } from './components/PlanOverview';
import { Comparison } from './components/Comparison';
import { FeatureBlocks } from './components/FeatureBlocks';
import { Process } from './components/Process';
import { PortfolioTeaser } from './components/PortfolioTeaser';
import { AboutMe } from './components/AboutMe';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { PortfolioPage } from './components/PortfolioPage';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';
import { CookieBanner } from './components/CookieBanner';
import { MobileStickyCtA } from './components/MobileStickyCtA';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { SEOHead } from './components/SEOHead';
import { ContactModal } from './components/ui/ContactModal';
import { Analytics } from '@vercel/analytics/react';
import { initGA4, pageViewGA4 } from './utils/analytics';

const GA_TRACKING_ID = 'G-9J623EKFXT';

const HomePage: React.FC<{ onNavigatePortfolio: () => void }> = ({ onNavigatePortfolio }) => (
  <>
    <SEOHead
      title="Desenvolvimento Web, Automação com IA & Growth Marketing"
      description="Site em React do zero, SEO/GEO, Google Meu Negócio, tráfego pago e CRM com IA — tudo em um plano mensal. Gustavo Galvão, desenvolvedor React e especialista em automação."
      ogUrl="https://jezlercodes.dev"
    />
    <Hero />
    <PlanOverview />
    <Comparison />
    <FeatureBlocks />
    <Process />
    <PortfolioTeaser onNavigatePortfolio={onNavigatePortfolio} />
    <Testimonials />
    <AboutMe onNavigatePortfolio={onNavigatePortfolio} />
    <FAQ />
    <FinalCTA />
  </>
);

export const AppContent: React.FC = () => {
  const { triggerLoading } = useLoading();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem('splash_seen');
    if (!hasSeenSplash) {
      triggerLoading(undefined, 2500);
      sessionStorage.setItem('splash_seen', 'true');
    }
  }, [triggerLoading]);

  // Init GA4 if consent was already granted
  useEffect(() => {
    if (localStorage.getItem('cookie_consent') === 'accepted') {
      initGA4(GA_TRACKING_ID);
    }
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (localStorage.getItem('cookie_consent') === 'accepted') {
      pageViewGA4(GA_TRACKING_ID, location.pathname);
    }
  }, [location.pathname]);

  const handleNavigatePortfolio = () => {
    navigate('/portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isLegalPage = ['/privacy-policy', '/terms', '/thank-you'].includes(location.pathname);

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 relative selection:bg-[#FFC069] selection:text-black">
      <Navbar
        onNavigatePortfolio={handleNavigatePortfolio}
        onNavigateHome={handleNavigateHome}
      />

      <main>
        <Routes>
          <Route path="/" element={<HomePage onNavigatePortfolio={handleNavigatePortfolio} />} />
          <Route path="/portfolio" element={
            <>
              <SEOHead
                title="Portfólio — Projetos em React, IA & Web Design"
                description="Veja os projetos desenvolvidos por Gustavo Galvão: sites em React, sistemas com IA, e-commerce e landing pages de alta conversão para empresas reais."
                ogUrl="https://jezlercodes.dev/portfolio"
              />
              <PortfolioPage onBackHome={handleNavigateHome} />
            </>
          } />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {!isLegalPage && <Footer onNavigatePortfolio={handleNavigatePortfolio} />}
      {isLegalPage && <Footer onNavigatePortfolio={handleNavigatePortfolio} />}

      {/* Global UI Overlays */}
      <CookieBanner />
      <MobileStickyCtA />
      <ContactModal />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <LanguageProvider>
          <LoadingProvider>
            <ProjectModalProvider>
              <ContactModalProvider>
                <AppContent />
                <Analytics />
              </ContactModalProvider>
            </ProjectModalProvider>
          </LoadingProvider>
        </LanguageProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
