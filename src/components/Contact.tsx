import React, { useState, useRef, useEffect } from 'react';
import AnimatedButton from './AnimatedButton';

const Contact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Select a service...');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = [
    'Web Ecosystems',
    'AI Integration',
    'Mobile Experience',
    'Cloud Infrastructure',
    'Strategic Consulting',
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section id="contact" className="py-24 bg-void">
      <div className="section-wrap">

        <div className="micro-label mb-14">Get in Touch</div>

        <div
          className="rounded-4xl overflow-hidden"
          style={{ background: '#0d0d0d', border: '1px solid #2a2a2a' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left: Info */}
            <div className="p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-border-dk">
              <h2
                className="display-headline text-4xl md:text-5xl text-ink mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Let's build<br />the future.
              </h2>
              <p className="text-ink-3 text-sm leading-relaxed mb-12 max-w-sm">
                Our studio is located in the vibrant coastal hub of South India, ready to forge your vision into reality.
              </p>

              <div className="space-y-10">
                <div>
                  <div className="micro-label mb-3">Headquarters</div>
                  <p className="text-ink font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Cuddalore</p>
                  <p className="text-ink-3 text-sm">Tamil Nadu, India</p>
                </div>

                <hr className="divider" />

                <div>
                  <div className="micro-label mb-4">Connect Directly</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href="mailto:hello@catom.dev"
                      className="group flex flex-col gap-2 p-5 rounded-3xl transition-all duration-300"
                      style={{ background: '#161616', border: '1px solid #2a2a2a' }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.borderColor = '#383838'}
                      onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.borderColor = '#2a2a2a'}
                    >
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'rgba(240,192,64,0.12)' }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="#f0c040" strokeWidth="1.2"/>
                          <path d="M1 4.5l6 4 6-4" stroke="#f0c040" strokeWidth="1.2" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <span className="text-sm font-semibold text-ink">Email Us</span>
                      <span className="text-xs text-ink-3">hello@catom.dev</span>
                    </a>

                    <a
                      href="tel:+918122334455"
                      className="group flex flex-col gap-2 p-5 rounded-3xl transition-all duration-300"
                      style={{ background: '#161616', border: '1px solid #2a2a2a' }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.borderColor = '#383838'}
                      onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.borderColor = '#2a2a2a'}
                    >
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'rgba(91,141,239,0.12)' }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 2.5C2 2.5 3 1 4 1s2 2 2 2L4.5 4.5c.5 1 1.5 2 2.5 2.5L8.5 5.5s1.5 0 2 1.5-1.5 3-1.5 3S5 11 2 8 2 2.5 2 2.5z" stroke="#5b8def" strokeWidth="1.2" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <span className="text-sm font-semibold text-ink">Call Us</span>
                      <span className="text-xs text-ink-3">+91 81223 34455</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="p-10 md:p-14">
              <div className="micro-label mb-8">Send a Proposal</div>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-ink-3 mb-2 tracking-wider uppercase">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3.5 rounded-2xl text-sm text-ink placeholder-ink-3 outline-none transition-all duration-200"
                      style={{ background: '#161616', border: '1px solid #2a2a2a' }}
                      onFocus={(e) => (e.target as HTMLElement).style.borderColor = '#f0c040'}
                      onBlur={(e) => (e.target as HTMLElement).style.borderColor = '#2a2a2a'}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-ink-3 mb-2 tracking-wider uppercase">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="hello@catom.dev"
                      className="w-full px-4 py-3.5 rounded-2xl text-sm text-ink placeholder-ink-3 outline-none transition-all duration-200"
                      style={{ background: '#161616', border: '1px solid #2a2a2a' }}
                      onFocus={(e) => (e.target as HTMLElement).style.borderColor = '#f0c040'}
                      onBlur={(e) => (e.target as HTMLElement).style.borderColor = '#2a2a2a'}
                    />
                  </div>
                </div>

                {/* Dropdown */}
                <div ref={dropdownRef}>
                  <label className="block text-xs font-semibold text-ink-3 mb-2 tracking-wider uppercase">Project Intent</label>
                  <div className="relative">
                    <button
                      id="contact-service-dropdown"
                      type="button"
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-full px-4 py-3.5 rounded-2xl text-sm text-left flex justify-between items-center transition-all duration-200 outline-none"
                      style={{
                        background: '#161616',
                        border: `1px solid ${isOpen ? '#f0c040' : '#2a2a2a'}`,
                        color: selectedService === 'Select a service...' ? '#6e6b66' : '#f0ede8',
                      }}
                    >
                      {selectedService}
                      <svg
                        width="14" height="14" viewBox="0 0 14 14" fill="none"
                        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s', color: '#6e6b66' }}
                      >
                        <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>

                    {isOpen && (
                      <div
                        className="absolute top-full left-0 w-full mt-2 rounded-2xl overflow-hidden z-50"
                        style={{ background: '#1c1c1c', border: '1px solid #2a2a2a', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
                      >
                        {services.map((service) => (
                          <button
                            key={service}
                            type="button"
                            onClick={() => { setSelectedService(service); setIsOpen(false); }}
                            className="w-full px-4 py-3 text-left text-sm font-medium transition-colors duration-150"
                            style={{ color: '#b8b4ae', borderBottom: '1px solid #2a2a2a' }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLElement).style.background = 'rgba(240,192,64,0.08)';
                              (e.currentTarget as HTMLElement).style.color = '#f0c040';
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLElement).style.background = 'transparent';
                              (e.currentTarget as HTMLElement).style.color = '#b8b4ae';
                            }}
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-ink-3 mb-2 tracking-wider uppercase">Message</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Tell us about your vision..."
                    className="w-full px-4 py-3.5 rounded-2xl text-sm text-ink placeholder-ink-3 outline-none transition-all duration-200 resize-none"
                    style={{ background: '#161616', border: '1px solid #2a2a2a' }}
                    onFocus={(e) => (e.target as HTMLElement).style.borderColor = '#f0c040'}
                    onBlur={(e) => (e.target as HTMLElement).style.borderColor = '#2a2a2a'}
                  />
                </div>

                {/* Submit — Osmo animated (full-width) */}
                <AnimatedButton
                  id="contact-submit"
                  type="submit"
                  variant="gold"
                  className="w-full justify-center text-sm tracking-wide"
                >
                  Send Proposal →
                </AnimatedButton>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
