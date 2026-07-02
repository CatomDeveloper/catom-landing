import React from 'react';
import AnimatedButton from './AnimatedButton';

const features = [
  {
    index: '01',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'ISO-Grade Security',
    description: 'Encrypted end-to-end data processing with sovereign cloud compliance protocols. Zero critical vulnerabilities across all deployments.',
    accent: '#f0c040',
    btnVariant: 'gold' as const,
  },
  {
    index: '02',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Edge Optimization',
    description: 'Content served from the edge for lowest possible latency. Global CDN with intelligent caching for distributed teams worldwide.',
    accent: '#5b8def',
    btnVariant: 'outline' as const,
  },
  {
    index: '03',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Modular Core',
    description: 'Our proprietary forge architecture enables rapid scaling and decoupled service updates. Build once, deploy everywhere.',
    accent: '#ff4d00',
    btnVariant: 'outline' as const,
  },
];

const Features: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-void">
      <div className="section-wrap">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="micro-label mb-4">Core Capabilities</div>
            <h2
              className="display-headline text-5xl md:text-6xl text-ink"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Precision in<br />every pixel.
            </h2>
          </div>
          <p className="text-ink-3 text-sm max-w-xs leading-relaxed md:text-right">
            Three guiding principles that underpin everything we build — from initial architecture to final deployment.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.index}
              className="group relative rounded-3xl p-8 cursor-default overflow-hidden"
              style={{
                background: '#111',
                border: '1px solid #2a2a2a',
                transition: 'border-color 0.3s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#383838';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#2a2a2a';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              {/* Subtle background tint on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 30% 20%, ${f.accent}10 0%, transparent 60%)` }}
              />

              {/* Index + icon */}
              <div className="flex items-start justify-between mb-8">
                <span className="index-num text-base">{f.index}</span>
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center"
                  style={{ background: `${f.accent}15`, color: f.accent }}
                >
                  {f.icon}
                </div>
              </div>

              {/* Title */}
              <h3
                className="text-2xl font-bold text-ink mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {f.title}
              </h3>

              <p className="text-ink-3 text-sm leading-relaxed mb-8">
                {f.description}
              </p>

              {/* Osmo animated button */}
              <AnimatedButton
                id={`feature-learn-${f.index}`}
                href="#contact"
                variant={f.btnVariant}
                className="text-xs tracking-widest uppercase"
                icon={
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
              >
                Learn More
              </AnimatedButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
