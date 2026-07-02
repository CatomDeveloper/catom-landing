import React, { useState, useEffect } from 'react';
import AnimatedButton from './AnimatedButton';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Work',      href: '#work' },
    { label: 'Platform',  href: '#platform' },
    { label: 'About',     href: '#about' },
  ];

  const dockLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Work',      href: '#work' },
    { label: 'Platform',  href: '#platform' },
    { label: 'About',     href: '#about' },
    { label: 'Contact',   href: '#contact' },
  ];

  return (
    <>
      {/* ── Top Minimal Navbar ─────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/5 backdrop-blur-2xl bg-void/70'
            : 'bg-transparent'
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-10 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span
              className="text-base font-bold tracking-tight text-ink group-hover:text-gold transition-colors duration-300"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Catom<span className="text-gold">Developer</span>
            </span>
          </a>

          {/* Nav Links — hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold tracking-widest uppercase text-ink-3 hover:text-ink transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right CTA — Osmo animated */}
          <AnimatedButton
            id="nav-cta"
            href="#contact"
            variant="outline"
            className="hidden md:inline-flex text-xs tracking-widest uppercase"
            icon={
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          >
            Start Project
          </AnimatedButton>
        </div>
      </nav>

      {/* ── Floating Bottom Dock ────────────────────────── */}
      <div className="floating-dock">
        {dockLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="px-4 py-2 rounded-full text-[11px] font-semibold tracking-widest uppercase text-ink-3 hover:text-ink hover:bg-white/5 transition-all duration-200"
          >
            {link.label}
          </a>
        ))}
        <div className="w-px h-4 bg-white/10 mx-1" />
        {/* Dock CTA — Osmo animated (smaller sizing) */}
        <AnimatedButton
          id="dock-cta"
          href="#contact"
          variant="gold"
          className="text-[11px] tracking-wider uppercase px-5 py-2"
        >
          Get Started →
        </AnimatedButton>
      </div>
    </>
  );
};

export default Navbar;
