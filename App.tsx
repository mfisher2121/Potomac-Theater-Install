import React from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import FreeGuideSection from './components/FreeGuideSection';
import CTASection from './components/CTASection';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <FreeGuideSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;