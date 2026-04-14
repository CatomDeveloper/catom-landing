import React from 'react';

const Expertise: React.FC = () => {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Expertise carved from <br />experience.</h2>
          <p className="text-lg text-on-surface-variant">We specialize in three core pillars that drive modern digital transformation, ensuring every touchpoint is a masterpiece of engineering.</p>
        </div>
        <div className="pb-2">
          <span className="text-sm font-label uppercase tracking-widest opacity-50">Our Capabilities</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full md:h-[600px]">
        {/* Web Systems */}
        <div className="md:col-span-8 bg-surface-container-low rounded-3xl p-12 flex flex-col justify-between overflow-hidden relative group">
          <div className="z-10">
            <span className="material-symbols-outlined text-4xl text-primary mb-6">public</span>
            <h3 className="text-3xl font-bold mb-4">Web Ecosystems</h3>
            <p className="text-on-surface-variant max-w-md leading-relaxed">
              Developing scalable architectures that handle millions of requests while maintaining millisecond-level responsiveness.
            </p>
          </div>
          <img 
            alt="Web Systems" 
            className="absolute -right-20 -bottom-20 w-1/2 opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEBhtbkipulVQoFSzjXr_izp4WZEHrEzYbhp8q4tvXjzSvV6iSauc32U70XtTcueaPlEMfd_mW-IIDSQjC_10Q_x6PwNoDrh-JSOlV1fIsGWo-9Q5YOfWrF-kNBPkkNTf7V4K-tCdEt46SLHRquW5_DpU2mHrMNSAL2kyIV22lrI2BN4hGkAZaOUEQdEcKYtafLkxDQfhdq3zYHVuUF583EPQV-rn4nZU_pocvs2ot0NcqwfmGQTXP5gNHi8XhJRMbZtUWyQ3jAw" 
          />
        </div>
        {/* AI Forge */}
        <div className="md:col-span-4 bg-primary text-white rounded-3xl p-12 flex flex-col justify-between relative overflow-hidden group">
          <div className="z-10">
            <span className="material-symbols-outlined text-4xl mb-6">auto_awesome</span>
            <h3 className="text-3xl font-bold mb-4">AI Integration</h3>
            <p className="text-blue-100 leading-relaxed">
              Bespoke LLM deployments and predictive modeling tools.
            </p>
          </div>
          <div className="absolute bottom-0 right-0 p-8 opacity-40">
            <span className="material-symbols-outlined text-9xl">memory</span>
          </div>
        </div>
        {/* Mobile First */}
        <div className="md:col-span-5 bg-surface-container-highest rounded-3xl p-12 flex flex-col justify-between relative overflow-hidden group">
          <div className="z-10">
            <span className="material-symbols-outlined text-4xl text-on-surface mb-6">smartphone</span>
            <h3 className="text-3xl font-bold mb-4">Mobile Experience</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Native-first performance for iOS and Android with seamless shared logic.
            </p>
          </div>
        </div>
        {/* Cloud Infrastructure */}
        <div className="md:col-span-7 bg-surface-container-low rounded-3xl p-12 flex flex-col justify-between overflow-hidden group">
          <div className="flex justify-between items-start">
            <div>
              <span className="material-symbols-outlined text-4xl text-primary mb-6">cloud_done</span>
              <h3 className="text-3xl font-bold mb-4">Cloud Infrastructure</h3>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors cursor-pointer">arrow_outward</span>
          </div>
          <p className="text-on-surface-variant max-w-lg leading-relaxed">
            Automated CI/CD pipelines and Kubernetes orchestration for zero-downtime deployment environments across global regions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
