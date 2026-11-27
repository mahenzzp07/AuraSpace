'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { PageHeader } from '@/components/layout/page-header';
import { TarotCardView } from '@/components/features/tarot-card';
import { drawCards, majorArcana } from '@/lib/data/tarot';

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

type Drawn = ReturnType<typeof drawCards>;

const positions = ['Past', 'Present', 'Future'];

export default function TarotPage() {
  const [count, setCount] = useState(3);
  const [drawn, setDrawn] = useState<Drawn | null>(null);
  const [flippedCount, setFlippedCount] = useState(0);
  const allFlipped = drawn !== null && flippedCount === drawn.length;

  function deal() {
    setDrawn(drawCards(count));
    setFlippedCount(0);
  }

  function reset() {
    setDrawn(null);
    setFlippedCount(0);
  }

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24">
      <PageHeader
        eyebrow="Major Arcana"
        title="Tarot"
        description={`${majorArcana.length} cards, drawn without ceremony.`}
      />

      <div className="py-16">
        {/* Draw panel */}
        <AnimatePresence mode="wait" initial={false}>
          {!drawn ? (
            <motion.div
              key="setup"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
            >
              <h2 className="text-[28px] text-text-primary">Draw Your Cards</h2>
              <p className="mt-3 text-text-secondary">
                Focus on your question, then choose how many cards to draw.
              </p>

              <div className="mt-8 flex items-center gap-4">
                {[1, 2, 3].map((n) => (
                  <button
                    key={n}
                    onClick={() => setCount(n)}
                    className={`h-10 w-10 rounded-btn border font-mono text-sm transition-colors ${
                      count === n
                        ? 'border-gold text-gold'
                        : 'border-line text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {n}
                  </button>
                ))}
                <button
                  onClick={deal}
                  className="ml-4 inline-flex h-12 items-center rounded-btn bg-gold px-8 text-sm font-medium text-background transition-all duration-150 hover:scale-[1.02] hover:bg-gold-muted"
                >
                  Draw {count} {count === 1 ? 'card' : 'cards'}
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="spread"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
            >
              <div className="flex flex-wrap gap-6 md:gap-8">
                {drawn.map((d, i) => (
                  <div key={i} className="flex flex-col items-start gap-3">
                    <TarotCardView
                      drawn={d}
                      index={i}
                      flipped={flippedCount > i}
                      onFlip={() => setFlippedCount((c) => c + 1)}
                    />
                    <span className="font-mono text-xs text-text-secondary">
                      {positions[i]}
                    </span>
                  </div>
                ))}
              </div>

              <AnimatePresence>
                {allFlipped && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={sectionFade}
                    className="mt-16 max-w-xl"
                  >
                    <h3 className="text-2xl text-text-primary">
                      The spread, read
                    </h3>
                    <dl className="mt-8 space-y-8">
                      {drawn.map((d, i) => (
                        <div key={i}>
                          <dt className="font-mono text-xs text-gold">
                            {positions[i]} — {d.card.name}
                            {d.reversed ? ' · reversed' : ''}
                          </dt>
                          <dd className="mt-2 text-sm leading-relaxed text-text-secondary">
                            {d.reversed
                              ? d.card.reversedMeaning
                              : d.card.meaning}
                          </dd>
                        </div>
                      ))}
                    </dl>
                    <button
                      onClick={reset}
                      className="mt-12 inline-flex h-12 items-center rounded-btn border border-line px-8 text-sm text-text-primary transition-all duration-150 hover:scale-[1.02] hover:border-gold/40"
                    >
                      Draw again
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
