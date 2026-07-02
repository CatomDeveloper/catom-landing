import React from 'react';
import AnimatedButton from './AnimatedButton';

const projects = [
  {
    id: '01',
    title: 'Web Ecosystems',
    category: 'Full-Stack Architecture',
    description: 'Scalable systems handling millions of requests with millisecond responsiveness.',
    image: '/card_web.png',
    scores: { Design: '9.4', Usability: '9.1' },
    tag: 'Featured',
    tagColor: 'gold',
  },
  {
    id: '02',
    title: 'AI Integration',
    category: 'Machine Learning · LLM',
    description: 'Bespoke LLM deployments and predictive modeling tools built for scale.',
    image: '/card_ai.png',
    scores: { Design: '9.7', Creativity: '9.8' },
    tag: 'Nominee',
    tagColor: 'ice',
  },
  {
    id: '03',
    title: 'Mobile Experience',
    category: 'iOS · Android · Cross-Platform',
    description: 'Native-first performance with seamless shared logic across platforms.',
    image: '/card_mobile.png',
    scores: { Usability: '9.5', Content: '9.2' },
    tag: 'SOTD',
    tagColor: 'ember',
  },
  {
    id: '04',
    title: 'Cloud Infrastructure',
    category: 'DevOps · Kubernetes · CI/CD',
    description: 'Zero-downtime deployments across global regions with full observability.',
    image: '/card_cloud.png',
    scores: { Design: '9.3', Usability: '9.6' },
    tag: 'Nominee',
    tagColor: 'ice',
  },
];

const tagStyles: Record<string, string> = {
  gold:  'bg-gold text-void',
  ice:   'bg-ice/20 text-ice border border-ice/30',
  ember: 'bg-ember/20 text-ember border border-ember/30',
};

const Expertise: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-void">
      <div className="section-wrap">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="micro-label mb-4">Our Craft</div>
            <h2
              className="display-headline text-5xl md:text-6xl text-ink"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Expertise carved<br />from experience.
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-ink-3 text-sm max-w-xs md:ml-auto leading-relaxed">
              Three core pillars driving modern digital transformation — every touchpoint a masterpiece of engineering.
            </p>
            <AnimatedButton
              id="expertise-view-all"
              href="#contact"
              variant="outline"
              className="text-xs tracking-widest uppercase"
              icon={
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            >
              View All Work
            </AnimatedButton>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
              style={{ background: '#111', border: '1px solid #2a2a2a', transition: 'border-color 0.3s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#383838';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#2a2a2a';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              {/* Image */}
              <div className="card-img-wrap h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                />
                {/* Image overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(8,8,8,0.3)' }}
                />
              </div>

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full ${tagStyles[project.tagColor]}`}>
                  {project.tag}
                </span>
              </div>

              {/* Arrow (top right) */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-void/60 backdrop-blur-sm">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H5M10 2V7" stroke="#f0ede8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="index-num">{project.id}</span>
                  {/* Scores */}
                  <div className="flex items-center gap-3">
                    {Object.entries(project.scores).map(([label, val]) => (
                      <div key={label} className="score-pill">
                        <span className="score-value text-sm">{val}</span>
                        <span className="score-label">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <h3
                  className="text-lg font-bold text-ink mb-1 group-hover:text-gold transition-colors duration-300"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {project.title}
                </h3>

                <div className="micro-label mb-3">{project.category}</div>

                <p className="text-ink-3 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden" style={{ transition: 'opacity 0.3s ease, max-height 0.4s ease' }}>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
