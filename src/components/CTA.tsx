import React from 'react';
import AnimatedButton from './AnimatedButton';

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

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
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <span className="badge-gold">→ Start Project</span>
              </div>

              <h2
                className="display-headline text-4xl md:text-5xl text-ink mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Ready to<br />forge something?
              </h2>
              <p className="text-ink-3 text-sm leading-relaxed max-w-sm mb-10">
                Join the select few defining the digital landscape with CatomDeveloper. Let's turn your vision into reality.
              </p>

              <AnimatedButton
                id="cta-contact-team"
                href="#contact"
                variant="gold"
                className="text-sm"
                icon={<ArrowIcon />}
              >
                Contact Strategy Team
              </AnimatedButton>
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
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <span className="badge-dark">⬟ Join the Team</span>
              </div>

              <h2
                className="display-headline text-4xl md:text-5xl text-ink mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                We're always<br />seeking talent.
              </h2>
              <p className="text-ink-3 text-sm leading-relaxed max-w-sm mb-10">
                Engineers, designers, strategists — if you're exceptional at what you do, we want to hear from you.
              </p>

              <AnimatedButton
                id="cta-view-roles"
                href="mailto:careers@catom.dev"
                variant="outline"
                className="text-sm"
                icon={<ArrowIcon />}
              >
                View Open Roles
              </AnimatedButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
