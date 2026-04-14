import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Launch Cycles', value: '150+' },
    { label: 'Daily Users', value: '12M' },
    { label: 'Mean Recovery', value: '48h' },
    { label: 'Critical Vulnerabilities', value: '0' },
  ];

  return (
    <section className="bg-surface-container-low py-32 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-6xl font-extrabold tracking-tighter text-primary mb-2">{stat.value}</p>
            <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
