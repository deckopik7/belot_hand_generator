import { Suit, CardValue, CardData } from "@/src/types/card_types";

const suitOrder: Record<Suit, number> = { S: 0, D: 1, H: 2, C: 3 };
const valueOrder: Record<CardValue, number> = {
  7: 0,
  8: 1,
  9: 2,
  10: 3,
  J: 4,
  Q: 5,
  K: 6,
  A: 7,
};

export const sortHand = (hand: CardData[]): CardData[] => {
  return [...hand].sort((a, b) => {
    if (suitOrder[a.suit] !== suitOrder[b.suit]) {
      return suitOrder[a.suit] - suitOrder[b.suit];
    }
    return valueOrder[a.value] - valueOrder[b.value];
  });
};

export const generateRandomHand = (): CardData[] => {
  const suits: Suit[] = ["S", "D", "H", "C"];
  const values: CardValue[] = ["7", "8", "9", "10", "J", "Q", "K", "A"];

  const deck: CardData[] = [];
  suits.forEach((s) => {
    values.forEach((v) => {
      deck.push({ suit: s, value: v });
    });
  });

  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  shuffled[6].isTalon = true;
  shuffled[7].isTalon = true;

  return shuffled.slice(0, 8);
};
