import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Stats from './components/Stats';
import Features from './components/Features';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Expertise />
        <Stats />
        <Features />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
