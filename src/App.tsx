import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import { LoadingProvider, useLoading } from './context/LoadingContext';
import { ProjectModalProvider } from './context/ProjectModalContext';
import { ContactModalProvider } from './context/ContactModalContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SEOHead } from './components/SEOHead';
import { CookieBanner } from './components/CookieBanner';
import { MobileStickyCtA } from './components/MobileStickyCtA';
import { Analytics } from '@vercel/analytics/react';
import { initGA4, pageViewGA4 } from './utils/analytics';

// Lazy Load Below-the-fold components
const PlanOverview = lazy(() => import('./components/PlanOverview').then(m => ({ default: (m as any).PlanOverview || (m as any).default })) as Promise<{ default: React.ComponentType<any> }>);
const Comparison = lazy(() => import('./components/Comparison').then(m => ({ default: (m as any).Comparison || (m as any).default })) as Promise<{ default: React.ComponentType<any> }>);
const FeatureBlocks = lazy(() => import('./components/FeatureBlocks').then(m => ({ default: (m as any).FeatureBlocks || (m as any).default })) as Promise<{ default: React.ComponentType<any> }>);
const Process = lazy(() => import('./components/Process').then(m => ({ default: (m as any).Process || (m as any).default })) as Promise<{ default: React.ComponentType<any> }>);
const PortfolioTeaser = lazy(() => import('./components/PortfolioTeaser').then(m => ({ default: (m as any).PortfolioTeaser || (m as any).default })) as Promise<{ default: React.ComponentType<any> }>);
const AboutMe = lazy(() => import('./components/AboutMe').then(m => ({ default: (m as any).AboutMe || (m as any).default })) as Promise<{ default: React.ComponentType<any> }>);
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: (m as any).FAQ || (m as any).default })) as Promise<{ default: React.ComponentType<any> }>);
const FinalCTA = lazy(() => import('./components/FinalCTA').then(m => ({ default: (m as any).FinalCTA || (m as any).default })) as Promise<{ default: React.ComponentType<any> }>);
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: (m as any).Footer || (m as any).default })) as Promise<{ default: React.ComponentType<any> }>);
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: (m as any).Testimonials || (m as any).default })) as Promise<{ default: React.ComponentType<any> }>);

// Lazy Load Other Pages & Modals
const PortfolioPage = lazy(() => import('./components/PortfolioPage').then(m => ({ default: (m as any).PortfolioPage || (m as any).default })) as Promise<{ default: React.ComponentType<any> }>);
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(m => ({ default: (m as any).PrivacyPolicyPage || (m as any).default })) as Promise<{ default: React.ComponentType<any> }>);
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage').then(m => ({ default: (m as any).TermsOfServicePage || (m as any).default })) as Promise<{ default: React.ComponentType<any> }>);
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: (m as any).NotFoundPage || (m as any).default })) as Promise<{ default: React.ComponentType<any> }>);
const ThankYouPage = lazy(() => import('./pages/ThankYouPage').then(m => ({ default: (m as any).ThankYouPage || (m as any).default })) as Promise<{ default: React.ComponentType<any> }>);
const ContactModal = lazy(() => import('./components/ui/ContactModal').then(m => ({ default: (m as any).ContactModal || (m as any).default })) as Promise<{ default: React.ComponentType<any> }>);

const GA_TRACKING_ID = 'G-9J623EKFXT';

const HomePage: React.FC<{ onNavigatePortfolio: () => void }> = ({ onNavigatePortfolio }) => (
  <>
    <SEOHead
      title="Desenvolvimento Web, Automação com IA & Growth Marketing"
      description="Site em React do zero, SEO/GEO, Google Meu Negócio, tráfego pago e CRM com IA — tudo em um plano mensal. Gustavo Galvão, desenvolvedor React e especialista em automação."
      ogUrl="https://jezlercodes.dev"
    />
    {/* Hero is above the fold, loads instantly */}
    <Hero />
    
    {/* Everything below the fold is lazy loaded */}
    <Suspense fallback={<div className="min-h-[50vh]" />}>
      <PlanOverview />
      <Comparison />
      <FeatureBlocks />
      <Process />
      <PortfolioTeaser onNavigatePortfolio={onNavigatePortfolio} />
      <Testimonials />
      <AboutMe onNavigatePortfolio={onNavigatePortfolio} />
      <FAQ />
      <FinalCTA />
    </Suspense>
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
        <Suspense fallback={<div className="min-h-screen bg-[#050505]" />}>
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
        </Suspense>
      </main>

      <Suspense fallback={null}>
        {!isLegalPage && <Footer onNavigatePortfolio={handleNavigatePortfolio} />}
        {isLegalPage && <Footer onNavigatePortfolio={handleNavigatePortfolio} />}
      </Suspense>

      {/* Global UI Overlays */}
      <CookieBanner />
      <MobileStickyCtA />
      
      <Suspense fallback={null}>
        <ContactModal />
      </Suspense>
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
