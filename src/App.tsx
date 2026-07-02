import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeStrip from './components/MarqueeStrip';
import Expertise from './components/Expertise';
import Stats from './components/Stats';
import Features from './components/Features';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen" style={{ background: '#080808', color: '#f0ede8' }}>
      <Navbar />
      <main>
        <Hero />
        {/* First marquee strip — scrolls left */}
        <MarqueeStrip direction="left" />
        <Expertise />
        {/* Second marquee strip — scrolls right, between sections */}
        <MarqueeStrip
          direction="right"
          items={[
            'Award-Winning Design', '✦',
            'Zero Critical Vulnerabilities', '✦',
            '99.9% Uptime Guaranteed', '✦',
            '150+ Projects Shipped', '✦',
            '12M+ Daily Users', '✦',
            '48h Mean Recovery', '✦',
          ]}
        />
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
