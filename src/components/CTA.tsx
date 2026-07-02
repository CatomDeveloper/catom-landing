import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-void">
      <div className="section-wrap">
        <div className="micro-label mb-8 text-center">Let's Build Together</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Left CTA — Start a Project */}
          <div
            className="group relative rounded-4xl p-10 md:p-14 overflow-hidden cursor-pointer"
            style={{ background: '#0d0d0d', border: '1px solid #2a2a2a', transition: 'border-color 0.3s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1)' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = '#f0c040';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = '#2a2a2a';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            {/* Background glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(240,192,64,0.08) 0%, transparent 65%)' }}
            />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <span className="badge-gold">→ Start Project</span>
                <div
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-300"
                  style={{ transition: 'all 0.3s ease' }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:rotate-45 transition-transform duration-300">
                    <path d="M3 13L13 3M13 3H6M13 3V10" stroke="#f0ede8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <h2
                className="display-headline text-4xl md:text-5xl text-ink mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Ready to<br />forge something?
              </h2>
              <p className="text-ink-3 text-sm leading-relaxed max-w-sm">
                Join the select few defining the digital landscape with CatomDeveloper. Let's turn your vision into reality.
              </p>

              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-void bg-gold hover:bg-gold-2 transition-colors duration-200 text-sm"
                >
                  Contact Strategy Team
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right CTA — Join the Team */}
          <div
            className="group relative rounded-4xl p-10 md:p-14 overflow-hidden cursor-pointer"
            style={{ background: '#111', border: '1px solid #2a2a2a', transition: 'border-color 0.3s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1)' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = '#5b8def';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = '#2a2a2a';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            {/* Background glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(91,141,239,0.08) 0%, transparent 65%)' }}
            />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <span className="badge-dark">⬟ Join the Team</span>
                <div
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-ice/50 group-hover:bg-ice/10 transition-all duration-300"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:rotate-45 transition-transform duration-300">
                    <path d="M3 13L13 3M13 3H6M13 3V10" stroke="#f0ede8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <h2
                className="display-headline text-4xl md:text-5xl text-ink mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                We're always<br />seeking talent.
              </h2>
              <p className="text-ink-3 text-sm leading-relaxed max-w-sm">
                Engineers, designers, strategists — if you're exceptional at what you do, we want to hear from you.
              </p>

              <div className="mt-10">
                <a
                  href="mailto:careers@catom.dev"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-ink border border-white/15 hover:border-ice/50 hover:text-ice transition-all duration-200 text-sm"
                >
                  View Open Roles
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
