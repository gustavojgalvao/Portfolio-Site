import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioTeaser } from './components/PortfolioTeaser';
import { Services } from './components/Services';
import { FeaturedSystems } from './components/FeaturedSystems';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { PortfolioPage } from './components/PortfolioPage';
import { Footer } from './components/Footer';

export const AppContent: React.FC = () => {
  const [route, setRoute] = useState<'home' | 'portfolio'>('home');

  // Handle browser route sync if needed
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/portfolio') {
      setRoute('portfolio');
    }
  }, []);

  const handleNavigatePortfolio = () => {
    setRoute('portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setRoute('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 bg-dot-grid relative selection:bg-orange-500 selection:text-black">
      {/* Sticky Blurred Glass Navbar */}
      <Navbar
        currentRoute={route}
        onNavigatePortfolio={handleNavigatePortfolio}
        onNavigateHome={handleNavigateHome}
      />

      {/* Main View Router */}
      <main>
        {route === 'home' ? (
          <>
            {/* Section 1: Hero */}
            <Hero onNavigatePortfolio={handleNavigatePortfolio} />

            {/* Section 2: Portfolio Teaser Banner */}
            <PortfolioTeaser onNavigatePortfolio={handleNavigatePortfolio} />

            {/* Section 3: Services */}
            <Services />

            {/* Section 3.5: Interactive Circular Carousel Showcase */}
            <FeaturedSystems />

            {/* Section 4: Process Timeline */}
            <Process />

            {/* Section 5: WhatsApp Contact Form */}
            <Contact />
          </>
        ) : (
          <PortfolioPage onBackHome={handleNavigateHome} />
        )}
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
