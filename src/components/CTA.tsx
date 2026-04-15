import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-32 px-8 text-center max-w-4xl mx-auto">
      <h2 className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-8">Ready to forge?</h2>
      <p className="text-xl text-on-surface-variant mb-12">The exhibition is waiting. Join the select few who are defining the digital landscape with Catom<span className="text-primary font-bold">Developer</span>.</p>
      <button className="px-12 py-6 bg-on-surface text-surface rounded-full text-lg font-bold hover:bg-primary transition-colors">
        Contact Strategy Team
      </button>
    </section>
  );
};

export default CTA;
