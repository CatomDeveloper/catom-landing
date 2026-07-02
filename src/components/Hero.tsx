import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imgRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 14;
      const y = (e.clientY / innerHeight - 0.5) * 14;
      imgRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scores = [
    { label: 'Design',     value: '9.4' },
    { label: 'Usability',  value: '9.1' },
    { label: 'Creativity', value: '9.7' },
    { label: 'Content',    value: '9.2' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-void">

      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #5b8def 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-8 blur-[100px]"
          style={{ background: 'radial-gradient(circle, #f0c040 0%, transparent 70%)' }}
        />
      </div>

      {/* Header micro-label */}
      <div className="section-wrap pt-28 pb-8 flex justify-between items-center">
        <span className="micro-label">Featured Project — 2026</span>
        <span className="micro-label">Scroll to explore ↓</span>
      </div>

      {/* Hero Grid */}
      <div className="section-wrap flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 pb-24">

        {/* Left: Main featured card */}
        <div className="lg:col-span-8 relative rounded-4xl overflow-hidden min-h-[520px] lg:min-h-[620px] group">
          {/* Image */}
          <div ref={imgRef} className="absolute inset-0 transition-transform duration-300 ease-out will-change-transform">
            <img
              src="/hero_featured.png"
              alt="Catom Developer — Featured Project"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 hero-overlay" />

          {/* Gold badge */}
          <div className="absolute top-6 left-6 flex items-center gap-3">
            <span className="badge-gold">⬟ Featured Project</span>
            <span className="badge-dark">Catom 2026</span>
          </div>

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            {/* Score pills */}
            <div className="flex items-center gap-6 mb-6">
              {scores.map((s) => (
                <div key={s.label} className="score-pill">
                  <span className="score-value">{s.value}</span>
                  <span className="score-label">{s.label}</span>
                </div>
              ))}
              <div className="ml-auto">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold/60 group-hover:bg-gold/10 transition-all duration-300 cursor-pointer">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="#f0ede8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            <h1
              className="display-headline text-5xl md:text-7xl text-ink mb-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              The Vision<br />
              <span className="gold-gradient-text">of Catom.</span>
            </h1>
            <p className="text-ink-2 text-sm md:text-base max-w-lg">
              Crafting digital exhibitions through software excellence — experiences that define the next generation.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-4 flex flex-col gap-6">

          {/* Award badge card */}
          <div
            className="rounded-4xl p-6 flex flex-col gap-4 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #161616 0%, #1c1c1c 100%)', border: '1px solid #2a2a2a' }}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="micro-label mb-2">Developer</div>
                <div
                  className="text-2xl font-bold text-ink"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  CatomDeveloper
                </div>
                <div className="text-ink-3 text-xs mt-1 tracking-wide">Cuddalore, Tamil Nadu · India</div>
              </div>
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl"
                style={{ background: 'rgba(240, 192, 64, 0.12)', border: '1px solid rgba(240, 192, 64, 0.2)' }}
              >
                ⬟
              </div>
            </div>

            <hr className="divider" />

            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="micro-label mb-1">Projects</div>
                <div className="font-mono text-2xl font-bold text-ink" style={{ fontFamily: "'JetBrains Mono', monospace" }}>150+</div>
              </div>
              <div>
                <div className="micro-label mb-1">Uptime</div>
                <div className="font-mono text-2xl font-bold text-gold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>99.9%</div>
              </div>
            </div>
          </div>

          {/* Services quick tags */}
          <div
            className="rounded-4xl p-6 flex-1"
            style={{ background: '#111', border: '1px solid #2a2a2a' }}
          >
            <div className="micro-label mb-4">Core Services</div>
            <div className="flex flex-wrap gap-2">
              {['Web Ecosystems', 'AI Integration', 'Mobile Apps', 'Cloud Infra', 'Strategic Consulting', 'Edge Optimization'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-xs font-medium text-ink-2 hover:text-ink hover:border-white/20 transition-all cursor-default"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <hr className="divider my-5" />

            {/* CTA row */}
            <div className="flex gap-3">
              <a
                href="#work"
                className="flex-1 py-3 rounded-full text-xs font-bold tracking-widest uppercase text-center text-void bg-gold hover:bg-gold-2 transition-colors duration-200"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="flex-1 py-3 rounded-full text-xs font-bold tracking-widest uppercase text-center text-ink border border-white/10 hover:border-white/25 transition-colors duration-200"
              >
                Start Project
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
