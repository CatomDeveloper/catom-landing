import React from 'react';

interface MarqueeStripProps {
  direction?: 'left' | 'right';
  items?: string[];
  className?: string;
}

const defaultItems = [
  'Web Ecosystems',
  '✦',
  'AI Integration',
  '✦',
  'Mobile Experience',
  '✦',
  'Cloud Infrastructure',
  '✦',
  'Edge Optimization',
  '✦',
  'Strategic Consulting',
  '✦',
  'ISO-Grade Security',
  '✦',
  'Modular Architecture',
  '✦',
];

const MarqueeStrip: React.FC<MarqueeStripProps> = ({
  direction = 'left',
  items = defaultItems,
  className = '',
}) => {
  const doubled = [...items, ...items];
  const trackClass = direction === 'left' ? 'marquee-track' : 'marquee-track-reverse';

  return (
    <div
      className={`w-full overflow-hidden py-4 border-y border-border-dk ${className}`}
      style={{ background: '#0d0d0d' }}
    >
      <div className={trackClass}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`whitespace-nowrap px-6 text-xs font-semibold tracking-widest uppercase ${
              item === '✦' ? 'text-gold' : 'text-ink-3'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
