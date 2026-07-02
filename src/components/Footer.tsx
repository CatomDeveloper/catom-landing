import React from 'react';

const footerNav = [
  {
    heading: 'Work',
    links: ['Web Ecosystems', 'AI Integration', 'Mobile Experience', 'Cloud Infrastructure'],
  },
  {
    heading: 'Services',
    links: ['Strategic Consulting', 'Edge Optimization', 'Security Audits', 'DevOps'],
  },
  {
    heading: 'Company',
    links: ['About Us', 'Careers', 'Blog', 'Press'],
  },
  {
    heading: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookies', 'Security'],
  },
];

const socials = [
  {
    label: 'X (Twitter)',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M12.6 1.5h2.3L9.9 6.9 15.5 14H11L7.4 9.3 3.3 14H1l5.4-5.7L.7 1.5H5.3L8.5 5.8l4.1-4.3zm-.8 11.2h1.3L4.3 2.7H2.9l8.9 10z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M13.5 1h-11C1.7 1 1 1.7 1 2.5v11c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5v-11c0-.8-.7-1.5-1.5-1.5zM5.5 13H3V6.5h2.5V13zM4.25 5.5C3.56 5.5 3 4.94 3 4.25S3.56 3 4.25 3s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zM13 13h-2.5V9.75C10.5 8.95 10 8.5 9.25 8.5S8 9 8 9.75V13H5.5V6.5H8V7.6c.4-.7 1.1-1.1 2-1.1 1.6 0 3 1.1 3 3.5V13z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1C4.13 1 1 4.13 1 8c0 3.09 2 5.71 4.79 6.64.35.06.48-.15.48-.34v-1.2C4.37 13.5 3.97 12.2 3.97 12.2c-.32-.81-.78-1.03-.78-1.03-.63-.43.05-.42.05-.42.7.05 1.07.72 1.07.72.62 1.07 1.63.76 2.02.58.06-.45.24-.76.44-.94-1.54-.18-3.17-.77-3.17-3.43 0-.76.27-1.38.72-1.86-.07-.18-.31-.89.07-1.85 0 0 .58-.19 1.92.72A6.7 6.7 0 018 4.97c.59 0 1.19.08 1.74.23 1.33-.9 1.92-.72 1.92-.72.38.96.14 1.67.07 1.85.45.49.72 1.11.72 1.86 0 2.67-1.63 3.25-3.18 3.42.25.22.47.64.47 1.3v1.92c0 .19.13.4.48.34A6.99 6.99 0 0015 8c0-3.87-3.13-7-7-7z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: 'Dribbble',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M1.5 8c1.5-1 3.5-1.5 6.5-1.5s5 .5 6.5 1.5M5.5 1.8C6.5 3.5 7 5.5 7 8s-.5 5-1.5 6.5M10.5 1.8C9.5 3.5 9 5.5 9 8s.5 5 1.5 6.5" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
  },
];

const Footer: React.FC = () => {
  return (
    <footer
      className="border-t border-border-dk"
      style={{ background: '#080808' }}
    >
      <div className="section-wrap pt-20 pb-10">

        {/* Top row: Logo + Tagline */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-16">
          <div className="max-w-xs">
            <div
              className="text-2xl font-bold tracking-tight text-ink mb-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Catom<span className="text-gold">Developer</span>
            </div>
            <p className="text-ink-3 text-sm leading-relaxed">
              Crafting digital exhibitions through software excellence — experiences that define the next generation.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-ink-3 hover:text-ink transition-all duration-200"
                  style={{ background: '#161616', border: '1px solid #2a2a2a' }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.borderColor = '#383838'}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.borderColor = '#2a2a2a'}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {footerNav.map((col) => (
              <div key={col.heading}>
                <div className="micro-label mb-5">{col.heading}</div>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-ink-3 text-sm hover:text-ink transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="divider mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ink-3 text-xs tracking-wide">
            © {new Date().getFullYear()} CatomDeveloper Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <div
              className="w-1.5 h-1.5 rounded-full animate-pulse-glow"
              style={{ background: '#22c55e' }}
            />
            <span className="text-xs text-ink-3 tracking-wide ml-1.5">All systems operational</span>
          </div>
          <p className="text-ink-3 text-xs tracking-wide">
            Cuddalore, Tamil Nadu · India
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
