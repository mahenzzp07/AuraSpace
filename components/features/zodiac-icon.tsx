import type { SVGProps } from 'react';

// Minimal 24x24 stroke line glyphs for each sign
export function ZodiacIcon({
  sign,
  ...props
}: { sign: string } & SVGProps<SVGSVGElement>) {
  const common = {
    stroke: 'currentColor',
    strokeWidth: 1.25,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    fill: 'none',
  };

  switch (sign) {
    case 'aries':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M6 20V9a4 4 0 0 1 6-3.5A4 4 0 1 1 18 9v11" {...common} />
        </svg>
      );
    case 'taurus':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <circle cx="12" cy="15" r="5" {...common} />
          <path d="M7 8c0-2.5 2-4 5-4s5 1.5 5 4" {...common} />
        </svg>
      );
    case 'gemini':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M5 5c4.5 2 9.5 2 14 0M5 19c4.5-2 9.5-2 14 0M7 8.5v7M17 8.5v7" {...common} />
        </svg>
      );
    case 'cancer':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M3 10c3-3 8-3 9 0s6 3 9 0" {...common} />
          <circle cx="8" cy="9" r="2" {...common} />
          <circle cx="16" cy="15" r="2" {...common} />
        </svg>
      );
    case 'leo':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <circle cx="12" cy="9" r="5" {...common} />
          <path d="M7 12v3a5 5 0 0 0 10 0v-3" {...common} />
        </svg>
      );
    case 'virgo':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M5 20V7a3 3 0 0 1 6 0v13M11 20V7a3 3 0 0 1 6 0v10a3 3 0 0 0 3-3" {...common} />
        </svg>
      );
    case 'libra':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M4 15a4 4 0 1 1 3-6.6A5 5 0 0 1 17 8.4 4 4 0 1 1 20 15" {...common} />
          <path d="M3 18h18M3 21h18" {...common} />
        </svg>
      );
    case 'scorpio':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M5 19V7a3 3 0 0 1 6 0v12M11 19V7a3 3 0 0 1 6 0v10" {...common} />
          <path d="M17 17l2.5 2.5L22 17" {...common} />
        </svg>
      );
    case 'sagittarius':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M4 20L20 4M10 4h10v10M6.5 13.5L10.5 17.5" {...common} />
        </svg>
      );
    case 'capricorn':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M4 6a3 3 0 0 1 6 0v13M10 9a3 3 0 1 1 3 3h-1v7" {...common} />
          <circle cx="18.5" cy="17" r="2.5" {...common} />
        </svg>
      );
    case 'aquarius':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M3 9l3-2 3 2 3-2 3 2 3-2 3 2M3 16l3-2 3 2 3-2 3 2 3-2 3 2" {...common} />
        </svg>
      );
    case 'pisces':
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M7 20V9a5 5 0 0 1 10 0v11M4 16a3 3 0 0 1 3-3M20 16a3 3 0 0 0-3-3" {...common} />
        </svg>
      );
    default:
      return null;
  }
}
