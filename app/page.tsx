'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Constellation } from '@/components/features/constellation';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const, delay: i * 0.1 },
  }),
};

const cardFade: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const, delay: i * 0.08 },
  }),
};

const features = [
  {
    title: 'Daily Horoscope',
    description:
      'Your sun, moon, and rising sign readings, updated every morning at 6 AM.',
  },
  {
    title: 'Tarot Draw',
    description:
      'Pull up to 3 cards. Get interpretations that actually relate to your question.',
  },
  {
    title: 'Birth Chart',
    description:
      'Enter your birth date, time, and place. See your full natal chart visualized.',
  },
];

const steps = [
  { number: '01', title: 'Enter your birth details' },
  { number: '02', title: 'Get your cosmic profile' },
  { number: '03', title: 'Receive daily guidance' },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Hero */}
      <section className="grid items-center gap-16 py-24 md:grid-cols-[1.1fr_1fr] md:py-32">
        <div>
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-mono text-sm text-gold"
          >
            Daily cosmic guidance
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 max-w-xl text-[40px] leading-[1.1] text-text-primary md:text-[56px]"
          >
            Know your rhythm. Own your energy.
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 max-w-md text-lg text-text-secondary"
          >
            Personalized horoscope, tarot readings, and birth chart insights.
            No fluff, just clarity.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/horoscope"
              className="inline-flex h-12 items-center rounded-btn bg-gold px-8 text-sm font-medium text-background transition-all duration-150 hover:scale-[1.02] hover:bg-gold-muted"
            >
              Read Today&apos;s Energy
            </Link>
            <Link
              href="/birth-chart"
              className="inline-flex h-12 items-center rounded-btn border border-line px-8 text-sm text-text-primary transition-all duration-150 hover:scale-[1.02] hover:border-gold/40"
            >
              Explore Birth Chart
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="hidden h-[480px] md:block"
        >
          <Constellation />
        </motion.div>
      </section>

      {/* Features */}
      <section className="pb-24">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-64px' }}
          variants={cardFade}
          className="text-3xl text-text-primary md:text-4xl"
        >
          What AuraSpace does
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-64px' }}
              variants={cardFade}
              className="rounded-card border border-line bg-surface p-8 transition-all duration-150 hover:-translate-y-0.5 hover:border-gold/25"
            >
              <h3 className="text-xl text-text-primary">{feature.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="pb-24">
        <div className="relative grid gap-12 md:grid-cols-3 md:gap-8">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px bg-line md:block"
          />
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-64px' }}
              variants={cardFade}
              className="relative"
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-background font-mono text-sm text-gold">
                {step.number}
              </div>
              <h3 className="mt-6 text-lg text-text-primary">{step.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="pb-24">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-64px' }}
          variants={cardFade}
          className="text-3xl text-text-primary md:text-4xl"
        >
          Simple pricing
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-64px' }}
            variants={cardFade}
            className="rounded-card border border-line bg-surface p-8"
          >
            <h3 className="text-xl text-text-primary">Free</h3>
            <p className="mt-3 font-mono text-2xl text-text-primary">Rp 0</p>
            <ul className="mt-8 space-y-4 text-sm text-text-secondary">
              <li>3 readings per day</li>
              <li>Basic horoscope</li>
            </ul>
            <Link
              href="/horoscope"
              className="mt-8 inline-flex h-12 items-center rounded-btn border border-line px-8 text-sm text-text-primary transition-all duration-150 hover:scale-[1.02] hover:border-gold/40"
            >
              Start free
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-64px' }}
            variants={cardFade}
            className="rounded-card border border-gold/50 bg-surface p-8"
          >
            <h3 className="text-xl text-gold">Premium</h3>
            <p className="mt-3 font-mono text-2xl text-text-primary">
              Rp 29.000
              <span className="text-sm text-text-secondary">/month</span>
            </p>
            <ul className="mt-8 space-y-4 text-sm text-text-secondary">
              <li>Unlimited readings</li>
              <li>Full birth chart</li>
              <li>Tarot spreads</li>
              <li>Weekly forecast</li>
            </ul>
            <Link
              href="/profile"
              className="mt-8 inline-flex h-12 items-center rounded-btn bg-gold px-8 text-sm font-medium text-background transition-all duration-150 hover:scale-[1.02] hover:bg-gold-muted"
            >
              Go premium
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
