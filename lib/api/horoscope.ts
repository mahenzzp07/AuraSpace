export type ZodiacSign = {
  id: string;
  name: string;
  dateRange: string;
  element: string;
  rulingPlanet: string;
};

export type DailyHoroscope = {
  sign: string;
  date: string;
  reading: string;
  luckyNumbers: number[];
  compatibility: string;
  moonPhase: string;
};

export const zodiacSigns: ZodiacSign[] = [
  { id: 'aries', name: 'Aries', dateRange: 'Mar 21 – Apr 19', element: 'Fire', rulingPlanet: 'Mars' },
  { id: 'taurus', name: 'Taurus', dateRange: 'Apr 20 – May 20', element: 'Earth', rulingPlanet: 'Venus' },
  { id: 'gemini', name: 'Gemini', dateRange: 'May 21 – Jun 20', element: 'Air', rulingPlanet: 'Mercury' },
  { id: 'cancer', name: 'Cancer', dateRange: 'Jun 21 – Jul 22', element: 'Water', rulingPlanet: 'Moon' },
  { id: 'leo', name: 'Leo', dateRange: 'Jul 23 – Aug 22', element: 'Fire', rulingPlanet: 'Sun' },
  { id: 'virgo', name: 'Virgo', dateRange: 'Aug 23 – Sep 22', element: 'Earth', rulingPlanet: 'Mercury' },
  { id: 'libra', name: 'Libra', dateRange: 'Sep 23 – Oct 22', element: 'Air', rulingPlanet: 'Venus' },
  { id: 'scorpio', name: 'Scorpio', dateRange: 'Oct 23 – Nov 21', element: 'Water', rulingPlanet: 'Pluto' },
  { id: 'sagittarius', name: 'Sagittarius', dateRange: 'Nov 22 – Dec 21', element: 'Fire', rulingPlanet: 'Jupiter' },
  { id: 'capricorn', name: 'Capricorn', dateRange: 'Dec 22 – Jan 19', element: 'Earth', rulingPlanet: 'Saturn' },
  { id: 'aquarius', name: 'Aquarius', dateRange: 'Jan 20 – Feb 18', element: 'Air', rulingPlanet: 'Uranus' },
  { id: 'pisces', name: 'Pisces', dateRange: 'Feb 19 – Mar 20', element: 'Water', rulingPlanet: 'Neptune' },
];

const mockReadings: Record<string, string> = {
  aries: 'Momentum builds quietly today. The effort you put in last week starts to pay off, though the results may arrive through someone else\'s introduction rather than your own push. Say yes to the smaller invitation.',
  taurus: 'A steady hand wins the morning. Money matters benefit from patience rather than action, and an overdue conversation about shared resources resolves more easily than you expect.',
  gemini: 'Your words carry unusual weight today. Use them to close a loop that has stayed open too long — a short message is enough. Avoid commitments made after dark.',
  cancer: 'Home and work pull in different directions this morning. Choose the one that will still matter next month. A small act of care toward someone older pays unexpected dividends.',
  leo: 'Attention finds you without you asking for it. Resist the urge to spend it all at once; one well-placed decision today outperforms three flashy ones. Rest in the late afternoon.',
  virgo: 'Details are your allies today, but only the ones you can verify. A number that looked wrong last week turns out to be right, and it changes a plan you had already written off.',
  libra: 'Balance is less about splitting evenly and more about choosing which side deserves the extra weight. A creative collaboration favors you. Evening light is on your side.',
  scorpio: 'Something you kept below the surface surfaces on its own terms. Let it. The reveal costs you less now than it would have a month ago, and the relief is immediate.',
  sagittarius: 'The horizon is not going anywhere — today is for the ground beneath your feet. Finish the task you keep rescheduling; it takes half the time you fear and frees up tomorrow.',
  capricorn: 'Structure serves you well, but one rule you have been following out of habit deserves a second look. Loyalty in a professional relationship is repaid today.',
  aquarius: 'An idea arrives sideways, through a book, an overheard sentence, or a wrong turn. Write it down before it reshapes itself into something more ordinary.',
  pisces: 'Your intuition is calibrated well today; trust the first instinct over the third revision. Water, literally or figuratively, restores you by evening.',
};

const moonPhases = [
  'Waxing Crescent',
  'First Quarter',
  'Waxing Gibbous',
  'Full Moon',
  'Waning Gibbous',
  'Last Quarter',
  'Waning Crescent',
];

function hashString(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash;
}

export async function getDailyHoroscope(sign: string): Promise<DailyHoroscope> {
  const today = new Date().toISOString().slice(0, 10);
  const seed = hashString(`${sign}-${today}`);

  const luckyNumbers = [
    (seed % 89) + 1,
    ((seed >> 3) % 89) + 1,
    ((seed >> 6) % 89) + 1,
  ].sort((a, b) => a - b);

  const compatible = zodiacSigns[(seed >> 9) % zodiacSigns.length];
  const moonPhase = moonPhases[(seed >> 4) % moonPhases.length];

  return {
    sign,
    date: today,
    reading: mockReadings[sign],
    luckyNumbers,
    compatibility: `Good energy with ${compatible.name} today`,
    moonPhase,
  };
}
