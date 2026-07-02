import React, { useRef, useState } from 'react';

export type ButtonVariant = 'gold' | 'outline' | 'dark' | 'ghost';

interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  id?: string;
}

/**
 * Osmo-style animated button.
 * Hover → sliding fill from bottom + text swap + magnetic drift.
 */
const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  variant = 'outline',
  href,
  type = 'button',
  className = '',
  onClick,
  icon,
  id,
}) => {
  const btnRef = useRef<HTMLElement>(null);
  const [fillStyle, setFillStyle] = useState({ scaleY: 0, originY: '100%' });
  const [magnetOffset, setMagnetOffset] = useState({ x: 0, y: 0 });

  /* ---------- Colours per variant ---------- */
  const palette: Record<ButtonVariant, {
    bg: string; text: string;
    fillBg: string; fillText: string;
    border: string;
  }> = {
    gold: {
      bg: '#f0c040',     text: '#080808',
      fillBg: '#080808', fillText: '#f0c040',
      border: '#f0c040',
    },
    outline: {
      bg: 'transparent', text: '#f0ede8',
      fillBg: '#f0ede8', fillText: '#080808',
      border: 'rgba(255,255,255,0.15)',
    },
    dark: {
      bg: '#161616',     text: '#f0ede8',
      fillBg: '#f0ede8', fillText: '#080808',
      border: '#2a2a2a',
    },
    ghost: {
      bg: 'transparent', text: '#6e6b66',
      fillBg: '#f0c040', fillText: '#080808',
      border: 'transparent',
    },
  };

  const p = palette[variant];

  /* ---------- Mouse handlers ---------- */
  const handleMouseEnter = () => {
    setFillStyle({ scaleY: 1, originY: '100%' });
  };

  const handleMouseLeave = () => {
    setFillStyle({ scaleY: 0, originY: '0%' });
    setMagnetOffset({ x: 0, y: 0 });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 6;
    setMagnetOffset({ x, y });
  };

  const isHovered = fillStyle.scaleY === 1;

  const sharedProps = {
    ref: btnRef as React.RefObject<any>,
    id,
    className: `relative overflow-hidden inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide cursor-pointer select-none ${className}`,
    style: {
      background: p.bg,
      color: isHovered ? p.fillText : p.text,
      border: `1.5px solid ${p.border}`,
      transform: `translate(${magnetOffset.x}px, ${magnetOffset.y}px)`,
      transition: 'color 0.35s ease, transform 0.25s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease',
      willChange: 'transform',
    },
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseMove: handleMouseMove,
    onClick,
  };

  const inner = (
    <>
      {/* Sliding fill layer */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: p.fillBg,
          borderRadius: 'inherit',
          transformOrigin: fillStyle.originY === '100%' ? 'bottom' : 'top',
          transform: `scaleY(${fillStyle.scaleY})`,
          transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
          zIndex: 0,
        }}
      />
      {/* Content sits above fill */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <span
            style={{
              display: 'inline-flex',
              transform: isHovered ? 'translate(2px, -2px)' : 'translate(0,0)',
              transition: 'transform 0.3s ease',
            }}
          >
            {icon}
          </span>
        )}
      </span>
    </>
  );

  if (href) {
    return <a href={href} {...sharedProps}>{inner}</a>;
  }

  return (
    <button type={type} {...sharedProps}>
      {inner}
    </button>
  );
};

export default AnimatedButton;
