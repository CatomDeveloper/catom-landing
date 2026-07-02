import React, { useRef, useEffect } from 'react';

const stats = [
  { value: '150+', label: 'Launch Cycles', sub: 'Projects shipped globally' },
  { value: '12M',  label: 'Daily Users',   sub: 'Across all platforms' },
  { value: '48h',  label: 'Mean Recovery', sub: 'Incident response time' },
  { value: '0',    label: 'Critical Vuln', sub: 'Security track record' },
];

const Stats: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.2 }
    );
    const items = ref.current?.querySelectorAll('.stat-item');
    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="platform" className="py-24 bg-void overflow-hidden">
      {/* Section label */}
      <div className="section-wrap mb-14">
        <div className="micro-label mb-4">Numbers</div>
        <h2
          className="display-headline text-4xl md:text-5xl text-ink max-w-xl"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Built for scale.<br />Proven by data.
        </h2>
      </div>

      {/* Stats row */}
      <div
        ref={ref}
        className="section-wrap grid grid-cols-2 lg:grid-cols-4 gap-0"
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="stat-item opacity-0 translate-y-6 transition-all duration-700 border-l border-border-dk pl-8 py-8 first:border-l-0 first:pl-0"
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <style>{`
              .stat-item.in-view {
                opacity: 1 !important;
                transform: translateY(0) !important;
              }
            `}</style>
            <div
              className="font-mono text-6xl md:text-7xl font-bold text-ink leading-none mb-3 tracking-tighter"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <span className="gold-gradient-text">{stat.value}</span>
            </div>
            <div className="micro-label mb-1">{stat.label}</div>
            <p className="text-ink-3 text-xs leading-relaxed">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Decorative line */}
      <div className="section-wrap mt-14">
        <hr className="divider" />
      </div>
    </section>
  );
};

export default Stats;
