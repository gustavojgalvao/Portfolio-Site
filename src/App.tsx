import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Comparison } from './components/Comparison';
import { Services } from './components/Services';
import { FeaturedSystems } from './components/FeaturedSystems';
import { CaseStudies } from './components/CaseStudies';
import { Pricing } from './components/Pricing';
import { AboutMe } from './components/AboutMe';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { PortfolioPage } from './components/PortfolioPage';
import { Footer } from './components/Footer';

export const AppContent: React.FC = () => {
  const [route, setRoute] = useState<'home' | 'portfolio'>('home');

  useEffect(() => {
    if (window.location.pathname === '/portfolio') {
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
      {/* Navbar rendered only on Home page */}
      {route === 'home' && (
        <Navbar
          currentRoute={route}
          onNavigatePortfolio={handleNavigatePortfolio}
          onNavigateHome={handleNavigateHome}
        />
      )}

      {/* Main Sections */}
      <main>
        {route === 'home' ? (
          <>
            {/* Section 1: Hero */}
            <Hero />

            {/* Section 2: Agency vs Direct Comparison */}
            <Comparison />

            {/* Section 3: Core Services & Deliverables */}
            <Services />

            {/* Section 4: Interactive Systems Showcase */}
            <FeaturedSystems />

            {/* Section 5: Case Studies & Delivered Systems */}
            <CaseStudies onNavigatePortfolio={handleNavigatePortfolio} />

            {/* Section 6: Transparent Pricing Packages */}
            <Pricing />

            {/* Section 7: About Me & Bio */}
            <AboutMe onNavigatePortfolio={handleNavigatePortfolio} />

            {/* Section 8: FAQ & Objection Handling */}
            <FAQ />

            {/* Section 9: Conversion Contact Form */}
            <Contact />
          </>
        ) : (
          <PortfolioPage onBackHome={handleNavigateHome} />
        )}
      </main>

      {/* Footer */}
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
