'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type Star = { x: number; y: number; r?: number };

// Lyra-inspired constellation plus scattered field stars
const constellation: Star[] = [
  { x: 96, y: 328 },
  { x: 152, y: 264 },
  { x: 232, y: 216 },
  { x: 316, y: 232 },
  { x: 384, y: 176 },
  { x: 340, y: 300 },
  { x: 232, y: 216 },
];

const links: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [3, 5],
  [5, 1],
];

const fieldStars: Star[] = [
  { x: 40, y: 80, r: 1 },
  { x: 140, y: 40, r: 1.5 },
  { x: 260, y: 88, r: 1 },
  { x: 360, y: 56, r: 1 },
  { x: 440, y: 120, r: 1.5 },
  { x: 60, y: 200, r: 1 },
  { x: 428, y: 264, r: 1 },
  { x: 120, y: 400, r: 1 },
  { x: 300, y: 420, r: 1.5 },
  { x: 416, y: 380, r: 1 },
  { x: 40, y: 440, r: 1 },
  { x: 200, y: 120, r: 1 },
  { x: 390, y: 330, r: 1 },
];

export function Constellation() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  // Moves slower than content as the page scrolls
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <div ref={ref} className="relative h-full w-full">
      <motion.svg
        style={{ y }}
        viewBox="0 0 480 480"
        fill="none"
        className="h-full w-full"
        aria-hidden
      >
        {fieldStars.map((s, i) => (
          <circle
            key={`f-${i}`}
            cx={s.x}
            cy={s.y}
            r={s.r ?? 1}
            fill="#E8E6E3"
            opacity={0.25}
          />
        ))}

        {links.map(([a, b], i) => (
          <line
            key={`l-${i}`}
            x1={constellation[a].x}
            y1={constellation[a].y}
            x2={constellation[b].x}
            y2={constellation[b].y}
            stroke="#C9A962"
            strokeWidth={0.75}
            opacity={0.5}
          />
        ))}

        {constellation.map((s, i) => (
          <g key={`c-${i}`}>
            <circle cx={s.x} cy={s.y} r={2.5} fill="#C9A962" />
            <circle
              cx={s.x}
              cy={s.y}
              r={6}
              stroke="#C9A962"
              strokeWidth={0.5}
              opacity={0.3}
              fill="none"
            />
          </g>
        ))}

        <text
          x={232}
          y={188}
          textAnchor="middle"
          fill="#8A8A95"
          fontSize={11}
          fontFamily="var(--font-jetbrains), monospace"
          letterSpacing={2}
        >
          LYRA
        </text>
      </motion.svg>
    </div>
  );
}
