import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { LoadingProvider, useLoading } from './context/LoadingContext';
import { ProjectModalProvider } from './context/ProjectModalContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PlanOverview } from './components/PlanOverview';
import { Comparison } from './components/Comparison';
import { FeatureBlocks } from './components/FeatureBlocks';
import { PortfolioTeaser } from './components/PortfolioTeaser';
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

  const handleNavigatePortfolio = () => {
    triggerLoading(() => {
      setRoute('portfolio');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  };

  const handleNavigateHome = () => {
    triggerLoading(() => {
      setRoute('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
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
            {/* 1. Hero — keeps existing structure, content updated */}
            <Hero />

            {/* 2. Plan Overview — single-panel, one-plan framing */}
            <PlanOverview />

            {/* 3. Comparison — honest agency vs direct table */}
            <Comparison />

            {/* 4. Feature Blocks — 3 Raycast-style sections with gooey glow */}
            <FeatureBlocks />

            {/* 5. Portfolio Teaser — glass banner CTA to /portfolio */}
            <PortfolioTeaser onNavigatePortfolio={handleNavigatePortfolio} />

            {/* 6. Process — 5-step numbered list, emphasizes ongoing plan */}
            <Process />

            {/* 7. About — honest first-person bio */}
            <AboutMe onNavigatePortfolio={handleNavigatePortfolio} />

            {/* 8. FAQ — GEO-optimized, Schema.org markup */}
            <FAQ />

            {/* 9. Final CTA — full-bleed gooey glow closing section */}
            <FinalCTA />
          </>
        ) : (
          <PortfolioPage onBackHome={handleNavigateHome} />
        )}
      </main>

      <Footer />
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
