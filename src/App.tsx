import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { LoadingProvider, useLoading } from './context/LoadingContext';
import { ProjectModalProvider } from './context/ProjectModalContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PlanOverview } from './components/PlanOverview';
import { Comparison } from './components/Comparison';
import { FeatureBlocks } from './components/FeatureBlocks';
import { Process } from './components/Process';
import { AboutMe } from './components/AboutMe';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { PortfolioPage } from './components/PortfolioPage';
import { Footer } from './components/Footer';

export const AppContent: React.FC = () => {
  const [route, setRoute] = useState<'home' | 'portfolio'>('home');
  const { triggerLoading } = useLoading();

  useEffect(() => {
    if (window.location.pathname === '/portfolio') {
      setRoute('portfolio');
    }
  }, []);

  // Listen for the custom event dispatched from Hero
  useEffect(() => {
    const handler = () => handleNavigatePortfolio();
    window.addEventListener('navigate-portfolio', handler);
    return () => window.removeEventListener('navigate-portfolio', handler);
  }, []);

  // Show Splash Screen only once per session
  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem('splash_seen');
    if (!hasSeenSplash) {
      triggerLoading(undefined, 2500);
      sessionStorage.setItem('splash_seen', 'true');
    }
  }, [triggerLoading]);

  const handleNavigatePortfolio = () => {
    setRoute('portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setRoute('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 relative selection:bg-[#FFC069] selection:text-black">
      {/* Navbar on both routes */}
      <Navbar
        currentRoute={route}
        onNavigatePortfolio={handleNavigatePortfolio}
        onNavigateHome={handleNavigateHome}
      />

      <main>
        {route === 'home' ? (
          <>
            {/* 1. Hero */}
            <Hero />

            {/* 2. Plan Overview */}
            <PlanOverview />

            {/* 3. Comparison */}
            <Comparison />

            {/* 4. Feature Blocks */}
            <FeatureBlocks />

            {/* 5. Process */}
            <Process />

            {/* 6. About */}
            <AboutMe onNavigatePortfolio={handleNavigatePortfolio} />

            {/* 7. FAQ */}
            <FAQ />

            {/* 8. Final CTA */}
            <FinalCTA />
          </>
        ) : (
          <PortfolioPage onBackHome={handleNavigateHome} />
        )}
      </main>

      <Footer onNavigatePortfolio={handleNavigatePortfolio} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <LoadingProvider>
        <ProjectModalProvider>
          <AppContent />
        </ProjectModalProvider>
      </LoadingProvider>
    </LanguageProvider>
  );
};

export default App;
