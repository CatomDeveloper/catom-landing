import React from 'react';

const Features: React.FC = () => {
  const featureList = [
    {
      icon: 'verified',
      title: 'ISO-Grade Security',
      description: 'Encrypted end-to-end data processing with sovereign cloud compliance protocols.',
    },
    {
      icon: 'bolt',
      title: 'Edge Optimization',
      description: 'Content served from the edge to ensure the lowest possible latency for global teams.',
    },
    {
      icon: 'hub',
      title: 'Modular Core',
      description: 'Our proprietary forge architecture allows for rapid scaling and decoupled service updates.',
    },
  ];

  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-center mb-24">Precision in every pixel.</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {featureList.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-surface-container-low rounded-2xl flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-primary text-3xl">{feature.icon}</span>
            </div>
            <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
            <p className="text-on-surface-variant leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
