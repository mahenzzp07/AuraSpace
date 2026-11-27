export type TarotCard = {
  id: string;
  name: string;
  number: number;
  meaning: string;
  reversedMeaning: string;
};

export const majorArcana: TarotCard[] = [
  {
    id: 'fool',
    name: 'The Fool',
    number: 0,
    meaning: 'A beginning with no map. Step forward before you feel ready; the ground appears as you walk.',
    reversedMeaning: 'Hesitation dressed as caution. You are not unprepared, only unwilling to be a beginner again.',
  },
  {
    id: 'magician',
    name: 'The Magician',
    number: 1,
    meaning: 'Everything you need is already on the table. Assemble it rather than wait for more.',
    reversedMeaning: 'Energy scattered across too many intentions. Choose one and give it the whole day.',
  },
  {
    id: 'high-priestess',
    name: 'The High Priestess',
    number: 2,
    meaning: 'The answer is known, just not yet spoken. Sit with it before you announce it.',
    reversedMeaning: 'You have been talking over your own instinct. Quiet the room and listen again.',
  },
  {
    id: 'empress',
    name: 'The Empress',
    number: 3,
    meaning: 'Something in your care is growing on schedule. Tend it; do not rush the harvest.',
    reversedMeaning: 'Overwatering. Attention has tipped into control, and the thing you love feels it.',
  },
  {
    id: 'emperor',
    name: 'The Emperor',
    number: 4,
    meaning: 'Structure is not the enemy of freedom today; it is what makes the afternoon possible.',
    reversedMeaning: 'Rigidity masquerading as discipline. Ask which rule is actually protecting anyone.',
  },
  {
    id: 'hierophant',
    name: 'The Hierophant',
    number: 5,
    meaning: 'Tradition holds something useful for you this time. Borrow the old method before inventing a new one.',
    reversedMeaning: 'A rule inherited rather than chosen. Today it is permitted to decline it politely.',
  },
  {
    id: 'lovers',
    name: 'The Lovers',
    number: 6,
    meaning: 'A choice between what is easy and what is aligned. The second option costs more and pays longer.',
    reversedMeaning: 'Misalignment named out loud loses half its weight. Say the honest thing first.',
  },
  {
    id: 'chariot',
    name: 'The Chariot',
    number: 7,
    meaning: 'Two opposing forces, one direction. Hold both reins; do not resolve the tension, use it.',
    reversedMeaning: 'Motion without steering. Pause for ten minutes before the next commitment.',
  },
  {
    id: 'strength',
    name: 'The Strength',
    number: 8,
    meaning: 'Gentleness is the stronger position today. Persuade rather than push, including yourself.',
    reversedMeaning: 'Force applied where patience would do. The wall is real, but so is the door.',
  },
  {
    id: 'hermit',
    name: 'The Hermit',
    number: 9,
    meaning: 'Withdraw deliberately, not defensively. The hour alone returns more than the meeting would.',
    reversedMeaning: 'Solitude curdling into hiding. One honest conversation ends the streak.',
  },
  {
    id: 'wheel',
    name: 'The Wheel of Fortune',
    number: 10,
    meaning: 'Conditions shift on their own schedule. Position matters more than prediction today.',
    reversedMeaning: 'A downturn that feels permanent is only recent. Do not sign anything in this mood.',
  },
  {
    id: 'justice',
    name: 'The Justice',
    number: 11,
    meaning: 'The ledger balances, though not sentimentally. Facts favor you if you keep to them.',
    reversedMeaning: 'A bias you have not audited. Look for the detail you are working hardest to avoid.',
  },
  {
    id: 'hanged-man',
    name: 'The Hanged Man',
    number: 12,
    meaning: 'Suspension is not stagnation. The view from upside down reveals what standing never did.',
    reversedMeaning: 'Waiting has become the decision. The cost of another week of stalling is due.',
  },
  {
    id: 'death',
    name: 'The Death',
    number: 13,
    meaning: 'An ending completes itself without your assistance. Clear the space; what replaces it is better.',
    reversedMeaning: 'A chapter kept open by sentiment. Close it kindly, but close it today.',
  },
  {
    id: 'temperance',
    name: 'The Temperance',
    number: 14,
    meaning: 'The blend, not the ingredient, is the answer. Measure carefully and pour slowly.',
    reversedMeaning: 'Excess in one area compensating for lack in another. Rebalance the pour.',
  },
  {
    id: 'devil',
    name: 'The Devil',
    number: 15,
    meaning: 'Name the attachment plainly and it shrinks. The chain is shorter than it looks.',
    reversedMeaning: 'The bargain renegotiates well. You have more leverage to walk away than you think.',
  },
  {
    id: 'tower',
    name: 'The Tower',
    number: 16,
    meaning: 'What falls today was already hollow. Let it come down cleanly; the site is better cleared.',
    reversedMeaning: 'A collapse postponed, not prevented. Controlled demolition beats the storm.',
  },
  {
    id: 'star',
    name: 'The Star',
    number: 17,
    meaning: 'Repair after the fall. Small, unglamorous restoration — done slowly, it holds.',
    reversedMeaning: 'Faith running low is information, not failure. Rest before you rebuild.',
  },
  {
    id: 'moon',
    name: 'The Moon',
    number: 18,
    meaning: 'Not everything unclear is untrue. Walk the dim path slowly and keep your hands where you can see them.',
    reversedMeaning: 'The fog lifts on its own schedule. Decisions made tonight deserve a morning review.',
  },
  {
    id: 'sun',
    name: 'The Sun',
    number: 19,
    meaning: 'Clarity without complication. Say the true thing in daylight and watch how little it costs.',
    reversedMeaning: 'Joy dimmed by an unpaid small debt. Settle it and the warmth returns.',
  },
  {
    id: 'judgement',
    name: 'The Judgement',
    number: 20,
    meaning: 'A summons you have heard before, finally loud enough. Answer with the version of you that exists now.',
    reversedMeaning: 'Self-judgment running the meeting. The verdict under review deserves an appeal.',
  },
  {
    id: 'world',
    name: 'The World',
    number: 21,
    meaning: 'A circle closing well. Mark the completion honestly before reaching for the next thing.',
    reversedMeaning: 'A finish line crossed without acknowledgment. Take the hour to notice what you built.',
  },
];

export function drawCards(count: number): Array<{ card: TarotCard; reversed: boolean }> {
  const pool = [...majorArcana];
  const drawn: Array<{ card: TarotCard; reversed: boolean }> = [];
  for (let i = 0; i < count; i++) {
    const index = Math.floor(Math.random() * pool.length);
    const [card] = pool.splice(index, 1);
    drawn.push({ card, reversed: Math.random() < 0.35 });
  }
  return drawn;
}
