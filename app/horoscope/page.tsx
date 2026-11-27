'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Moon } from 'lucide-react';
import { PageHeader } from '@/components/layout/page-header';
import { ZodiacIcon } from '@/components/features/zodiac-icon';
import {
  getDailyHoroscope,
  zodiacSigns,
  type DailyHoroscope,
} from '@/lib/api/horoscope';

const contentFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15, ease: [0.22, 1, 0.36, 1] },
  },
};

function MoonPhaseIllustration({ phase }: { phase: string }) {
  const illum = {
    'New Moon': 0,
    'Waxing Crescent': 0.25,
    'First Quarter': 0.5,
    'Waxing Gibbous': 0.75,
    'Full Moon': 1,
    'Waning Gibbous': 0.75,
    'Last Quarter': 0.5,
    'Waning Crescent': 0.25,
  }[phase] ?? 0.5;

  return (
    <svg viewBox="0 0 64 64" className="h-20 w-20" aria-hidden>
      <circle cx="32" cy="32" r="20" stroke="#8A8A95" strokeWidth={1} fill="none" />
      {illum > 0 && (
        <path
          d={
            illum >= 1
              ? 'M32 12a20 20 0 1 1 0 40 20 20 0 0 1 0-40Z'
              : `M32 12a20 20 0 0 1 0 40 ${illum > 0.5 ? '' : ''}A${Math.abs(20 * (1 - illum * 2)).toFixed(1)} 20 0 0 ${illum > 0.5 ? '0' : '1'} 32 12Z`
          }
          fill="#C9A962"
          opacity={0.85}
        />
      )}
    </svg>
  );
}

export default function HoroscopePage() {
  const [selected, setSelected] = useState('leo');
  const [horoscope, setHoroscope] = useState<DailyHoroscope | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    getDailyHoroscope(selected).then((data) => {
      if (!cancelled) {
        setHoroscope(data);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [selected]);

  const sign = zodiacSigns.find((s) => s.id === selected);

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24">
      <PageHeader
        eyebrow="Daily read"
        title="Horoscope"
        description="Pick your sign to see today's reading. Updated every morning."
      />

      {/* Sign selector */}
      <nav className="sticky top-16 z-40 -mx-6 overflow-x-auto border-b border-line bg-background/95 px-6 backdrop-blur-sm">
        <div className="flex gap-8 py-4">
          {zodiacSigns.map((s) => {
            const isActive = s.id === selected;
            return (
              <button
                key={s.id}
                onClick={() => setSelected(s.id)}
                className={`relative flex shrink-0 items-center gap-2 pb-1 text-sm transition-colors ${
                  isActive
                    ? 'text-gold'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                <ZodiacIcon sign={s.id} className="h-4 w-4" />
                {s.name}
                <span
                  className={`absolute inset-x-0 bottom-0 h-0.5 bg-gold transition-opacity ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {horoscope && sign && !loading && (
          <motion.div
            key={selected}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={contentFade}
            className="grid gap-16 py-16 md:grid-cols-[7fr_3fr]"
          >
            {/* Left column */}
            <div>
              <h2 className="text-[32px] text-text-primary">{sign.name}</h2>
              <p className="mt-2 font-sans text-sm text-text-secondary">
                {sign.dateRange}
              </p>

              <h3 className="mt-12 text-lg text-text-primary">
                Today&apos;s Reading
              </h3>
              <p className="mt-4 max-w-xl leading-relaxed text-text-secondary">
                {horoscope.reading}
              </p>

              <h3 className="mt-12 text-lg text-text-primary">Lucky Numbers</h3>
              <div className="mt-4 flex gap-3">
                {horoscope.luckyNumbers.map((n) => (
                  <span
                    key={n}
                    className="rounded-tag border border-line bg-surface px-4 py-2 font-mono text-sm text-gold"
                  >
                    {n}
                  </span>
                ))}
              </div>

              <h3 className="mt-12 text-lg text-text-primary">Compatibility</h3>
              <p className="mt-4 text-text-secondary">
                {horoscope.compatibility}
              </p>
            </div>

            {/* Right column */}
            <aside className="space-y-6">
              <div className="rounded-card border border-line bg-surface p-8">
                <div className="flex items-center gap-3">
                  <Moon className="h-4 w-4 text-gold" strokeWidth={1.5} />
                  <h3 className="text-sm text-text-primary">Moon Phase</h3>
                </div>
                <div className="mt-6 flex justify-center">
                  <MoonPhaseIllustration phase={horoscope.moonPhase} />
                </div>
                <p className="mt-6 text-center font-mono text-sm text-text-secondary">
                  {horoscope.moonPhase}
                </p>
              </div>

              <div className="rounded-card border border-line bg-surface p-8">
                <dl className="space-y-6">
                  <div>
                    <dt className="text-sm text-text-secondary">Element</dt>
                    <dd className="mt-2 text-text-primary">{sign.element}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-text-secondary">
                      Ruling Planet
                    </dt>
                    <dd className="mt-2 text-text-primary">
                      {sign.rulingPlanet}
                    </dd>
                  </div>
                </dl>
              </div>
            </aside>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
