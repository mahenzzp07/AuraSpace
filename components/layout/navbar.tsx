'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Sparkle } from 'lucide-react';

const navLinks = [
  { href: '/horoscope', label: 'Horoscope' },
  { href: '/tarot', label: 'Tarot' },
  { href: '/birth-chart', label: 'Birth Chart' },
  { href: '/profile', label: 'Profile' },
];

export function Navbar() {
  const pathname = usePathname();
  const [coins] = useState(120);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-heading text-2xl text-text-primary transition-colors hover:text-gold"
        >
          AuraSpace
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors hover:text-text-primary ${
                  active ? 'text-gold' : 'text-text-secondary'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 rounded-tag border border-line bg-surface px-3 py-1.5">
          <Sparkle className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
          <span className="font-mono text-sm text-gold">{coins}</span>
        </div>
      </div>

      <nav className="flex items-center gap-6 overflow-x-auto border-t border-line px-6 py-3 md:hidden">
        {navLinks.map((link) => {
          const active = pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap text-sm transition-colors hover:text-text-primary ${
                active ? 'text-gold' : 'text-text-secondary'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
