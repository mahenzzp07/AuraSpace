# Project memory

## Product intent & audience

- **AuraSpace**: an astrology/divination web app offering horoscope readings, tarot draws, birth chart analysis, and user profiles.
- Target audience: users interested in astrology, tarot, and personal spiritual insight tools.
- Gold coin counter badge suggests a gamification or credits/loyalty system is planned.

## Brand personality & voice

- Refined, sophisticated mysticism — elegant rather than playful or gimmicky.
- Restrained and editorial; avoids visual noise (no glow, no emoji, no pulsing).
- Left-aligned layouts preferred over centered everything.

## Visual design & UX direction

- **Palette**: bg `#0A0A0F`, surface `#12121A`, gold accent `#C9A962`, violet accent `#7B68EE` (max ~5% screen), text primary `#E8E6E3`, text secondary `#8A8A95`, border `rgba(255,255,255,0.06)`.
- **Fonts**: Newsreader (headings, 400–500), DM Sans (body, 400), JetBrains Mono (data/numbers).
- **Spacing**: strict 4-point grid (4, 8, 12, 16, 24, 32, 48, 64, 96).
- **Radii**: 4px tags, 8px buttons, 12px cards, 16px modals.
- **Avoid**: purple gradients, glow effects, emoji in nav, ALL CAPS labels, bouncing/pulsing animations.
- Animations: subtle Framer Motion fade-ups only; typed ease constants to avoid TS issues.

## Decisions, constraints & rationale

- Next.js 14 App Router + TypeScript + Tailwind CSS + Framer Motion.
- Future additions planned but not yet installed: Anime.js, React Bits, ECharts.
- Project structure: `app/` with routes (landing, horoscope, tarot, birth-chart, profile); `components/` split into `ui/`, `layout/`, `features/`; `lib/` split into `api/`, `utils/`.
- Navbar is a client component (active-link state + coin badge); footer is minimal.
- Shared page-header pattern established for section pages.
- Gold coin badge initialized at 120 (placeholder).

## Open questions & assumptions

- Next feature to build: zodiac picker (horoscope) vs tarot card draw — user hasn't chosen yet.
- Coin/credits system purpose and earning logic undefined.
- API layer (`lib/api/`) content and data sources for horoscope/tarot/birth-chart not yet specified.
- Profile page content and auth model not yet defined.