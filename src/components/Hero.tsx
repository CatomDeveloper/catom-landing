import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[750px] flex items-center px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="asymmetric-grid grid gap-16 items-center w-full">
        <div className="z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-surface-container-high rounded-full">Evolutionary Tech</span>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[0.95] mb-8">
            The Vision <br />
            <span className="text-primary">of Catom.</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
            Crafting digital exhibitions through software excellence. We don't just build apps; we curate experiences that define the next generation.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 hero-gradient text-white rounded-xl font-semibold shadow-lg shadow-primary/20 flex items-center gap-2 group">
              Start Building
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <button className="px-8 py-4 bg-surface-container-low text-on-surface font-semibold rounded-xl hover:bg-surface-container-high transition-colors">
              View Showcase
            </button>
          </div>
        </div>
        <div className="relative h-[600px] hidden lg:block">
          <div className="absolute inset-0 bg-surface-container-low rounded-[3rem] overflow-hidden">
            <img 
              alt="Catom Technology" 
              className="w-full h-full object-cover mix-blend-overlay opacity-60" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyrRMXBxT9KrUeVJ0DzQURbMn7hiWXNVBn9ft-SIvBAE5r8RxxjvDwKEmwjYznGD5R2UhslmHbwJL1cKg1q7jYq3zl4S6H8sHZaF3GzD8xNiJcKQ5vfpJHRUk5lYSWbUAxIPAHEATeA2VedEZkLyGOZV8W3sPtKF9cMN3q-eBl1g3pVd2_o9dZtXfEHTC7lExYRLFYFcRurO0ocl5bjYfhrkFsyBamVesIjydoQNY2wHAL_csd-uq0_6hMO2IaE7IHlhN36NvgWA" 
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-surface-container-lowest p-8 rounded-3xl shadow-xl max-w-xs border border-outline-variant/10">
            <p className="text-4xl font-bold text-primary mb-1">99.9%</p>
            <p className="text-sm font-medium text-on-surface-variant">Uptime guaranteed for all enterprise deployments.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
