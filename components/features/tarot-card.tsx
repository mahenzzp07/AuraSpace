'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const MAX_TILT = 5; // degrees

type DrawnCard = {
  card: { id: string; name: string; number: number; meaning: string; reversedMeaning: string };
  reversed: boolean;
};

function CardBackPattern() {
  return (
    <svg viewBox="0 0 200 320" className="h-full w-full" aria-hidden>
      <g stroke="#C9A962" strokeWidth={0.75} fill="none" opacity={0.55}>
        <circle cx="100" cy="160" r="72" />
        <circle cx="100" cy="132" r="72" />
        <circle cx="100" cy="188" r="72" />
        <path d="M100 88 L160 196 L40 196 Z" />
        <path d="M100 232 L40 124 L160 124 Z" />
        <rect x="62" y="122" width="76" height="76" />
        <rect x="100" y="60" width="40" height="200" opacity={0.5} />
        <circle cx="100" cy="160" r="24" />
      </g>
    </svg>
  );
}

export function TarotCardView({
  drawn,
  index,
  flipped,
  onFlip,
}: {
  drawn: DrawnCard;
  index: number;
  flipped: boolean;
  onFlip: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [revealed, setRevealed] = useState(false);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 200, damping: 25 });
  const rotateY = useSpring(ry, { stiffness: 200, damping: 25 });
  const tiltX = useTransform(rotateX, (v) => `${v}deg`);
  const tiltY = useTransform(rotateY, (v) => `${v}deg`);

  function handleMouseMove(e: React.MouseEvent) {
    if (revealed || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * MAX_TILT * 2);
    rx.set(-py * MAX_TILT * 2);
  }

  function handleMouseLeave() {
    rx.set(0);
    ry.set(0);
  }

  function handleClick() {
    if (!revealed) {
      setRevealed(true);
      onFlip();
    }
  }

  return (
    <motion.button
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="h-[320px] w-[200px] shrink-0 cursor-pointer [perspective:800px]"
      aria-label={revealed ? `${drawn.card.name}, ${drawn.reversed ? 'reversed' : 'upright'}` : 'Face-down card, click to reveal'}
    >
      <motion.div
        style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: 'preserve-3d' }}
        className="relative h-full w-full"
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative h-full w-full"
        >
          {/* Face down */}
          <div
            style={{ backfaceVisibility: 'hidden' }}
            className="absolute inset-0 overflow-hidden rounded-card border border-line bg-surface"
          >
            <CardBackPattern />
          </div>

          {/* Face up */}
          <div
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            className="absolute inset-0 flex flex-col rounded-card border border-gold/30 bg-surface p-5"
          >
            <p className="font-mono text-xs text-gold">
              {String(drawn.card.number).padStart(2, '0')}
            </p>
            <h3 className="mt-2 font-heading text-lg leading-snug text-text-primary">
              {drawn.card.name}
            </h3>
            {drawn.reversed && (
              <p className="mt-1 font-mono text-[10px] tracking-wide text-text-secondary">
                Reversed
              </p>
            )}
            <p className="mt-4 text-xs leading-relaxed text-text-secondary">
              {drawn.reversed ? drawn.card.reversedMeaning : drawn.card.meaning}
            </p>
            <span className="mt-auto font-mono text-[10px] text-gold-dim">
              {drawn.reversed ? '▽' : '△'}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </motion.button>
  );
}
