import React, { useState, useEffect } from 'react';
import AnimatedButton from './AnimatedButton';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Work',      href: '#work' },
    { label: 'Platform',  href: '#platform' },
    { label: 'About',     href: '#about' },
  ];

  const dockLinks = [
    {
      label: 'Home',
      href: '#',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 21V12h6v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: 'Work',
      href: '#work',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/>
          <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      label: 'Features',
      href: '#solutions',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: 'Contact',
      href: '#contact',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* ── Top Navbar ─────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? 'border-b border-white/5 backdrop-blur-2xl bg-void/90'
            : 'bg-transparent'
        }`}
      >
        <div className="flex justify-between items-center px-5 md:px-10 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" onClick={() => setMenuOpen(false)}>
            <span
              className="text-base font-bold tracking-tight text-ink group-hover:text-gold transition-colors duration-300"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Catom<span className="text-gold">Developer</span>
            </span>
          </a>

          {/* Nav Links — desktop only */}
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

          {/* Right area */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
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

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full transition-all duration-300 focus:outline-none"
              style={{
                background: menuOpen ? 'rgba(240,192,64,0.12)' : 'rgba(255,255,255,0.06)',
                border: menuOpen ? '1px solid rgba(240,192,64,0.3)' : '1px solid rgba(255,255,255,0.1)',
              }}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span
                style={{
                  display: 'block',
                  width: '16px',
                  height: '1.5px',
                  background: menuOpen ? '#f0c040' : '#f0ede8',
                  borderRadius: '2px',
                  transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.2s ease',
                  transform: menuOpen ? 'translateY(5px) rotate(45deg)' : 'none',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: '16px',
                  height: '1.5px',
                  background: menuOpen ? '#f0c040' : '#f0ede8',
                  borderRadius: '2px',
                  transition: 'opacity 0.2s ease',
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: '16px',
                  height: '1.5px',
                  background: menuOpen ? '#f0c040' : '#f0ede8',
                  borderRadius: '2px',
                  transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
                  transform: menuOpen ? 'translateY(-5px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Full-Screen Menu Overlay ─── */}
      <div
        className="md:hidden fixed inset-0 z-40 flex flex-col"
        style={{
          background: 'rgba(8,8,8,0.97)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transition: 'opacity 0.35s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {/* Menu content */}
        <div className="flex flex-col flex-1 px-8 pt-28 pb-12">
          {/* Nav links */}
          <nav className="flex flex-col gap-1 mb-auto">
            {[...navLinks, { label: 'Contact', href: '#contact' }].map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between py-5 border-b border-white/6"
                style={{
                  transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
                  transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
                  opacity: menuOpen ? 1 : 0,
                  transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease',
                }}
              >
                <span
                  className="text-3xl font-bold tracking-tight text-ink group-hover:text-gold transition-colors duration-300"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {link.label}
                </span>
                <span className="text-ink-3 group-hover:text-gold transition-colors duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 transform transition-transform">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 19L19 5M19 5H8M19 5V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div
            style={{
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: menuOpen ? 1 : 0,
              transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1) 0.32s, opacity 0.4s ease 0.32s',
            }}
          >
            <AnimatedButton
              id="mobile-menu-cta"
              href="#contact"
              variant="gold"
              className="w-full text-sm tracking-widest uppercase justify-center"
              icon={
                <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              onClick={() => setMenuOpen(false)}
            >
              Start a Project
            </AnimatedButton>
            <p className="text-ink-3 text-xs text-center mt-4 tracking-wide">
              Cuddalore, Tamil Nadu · India
            </p>
          </div>
        </div>
      </div>

      {/* ── Floating Bottom Dock — desktop only ─── */}
      <div className="floating-dock hidden md:flex">
        {[
          { label: 'Solutions', href: '#solutions' },
          { label: 'Work',      href: '#work' },
          { label: 'Platform',  href: '#platform' },
          { label: 'About',     href: '#about' },
          { label: 'Contact',   href: '#contact' },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="px-4 py-2 rounded-full text-[11px] font-semibold tracking-widest uppercase text-ink-3 hover:text-ink hover:bg-white/5 transition-all duration-200"
          >
            {link.label}
          </a>
        ))}
        <div className="w-px h-4 bg-white/10 mx-1" />
        <AnimatedButton
          id="dock-cta"
          href="#contact"
          variant="gold"
          className="text-[11px] tracking-wider uppercase px-5 py-2"
        >
          Get Started →
        </AnimatedButton>
      </div>

      {/* ── Mobile Bottom Tab Bar ─────────────── */}
      <div className="mobile-tab-bar md:hidden">
        {dockLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="mobile-tab-item"
            onClick={() => setMenuOpen(false)}
          >
            <span className="mobile-tab-icon">{link.icon}</span>
            <span className="mobile-tab-label">{link.label}</span>
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
