import Link from 'next/link';

const footerLinks = [
  { href: '/horoscope', label: 'Horoscope' },
  { href: '/tarot', label: 'Tarot' },
  { href: '/birth-chart', label: 'Birth Chart' },
  { href: '/profile', label: 'Profile' },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-lg text-text-primary">AuraSpace</p>
          <p className="mt-2 text-sm text-text-secondary">
            Quiet guidance, told well.
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
