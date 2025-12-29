import { Suit, CardValue, CardData } from "@/src/types/types";

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
    if (a.isFaceDown !== b.isFaceDown) {
      return a.isFaceDown ? 1 : -1;
    }

    if (suitOrder[a.suit] !== suitOrder[b.suit]) {
      return suitOrder[a.suit] - suitOrder[b.suit];
    }

    return valueOrder[a.value] - valueOrder[b.value];
  });
};

export const generateFullDeck = (): CardData[] => {
  const suits: Suit[] = ["S", "D", "H", "C"];
  const values: CardValue[] = ["7", "8", "9", "10", "J", "Q", "K", "A"];
  const deck: CardData[] = [];

  suits.forEach((s) => {
    values.forEach((v) => {
      deck.push({
        suit: s,
        value: v,
        isTalon: false,
        isLocked: false,
      });
    });
  });

  return deck;
};

export const shuffle = (array: CardData[]): CardData[] => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

export const generateRandomHand = (
  currentHand: CardData[] = [],
): CardData[] => {
  const fullDeck = generateFullDeck();

  const lockedCards = currentHand.filter((c) => c.isLocked);

  const availableCards = fullDeck.filter(
    (c) =>
      !lockedCards.some((lc) => lc.suit === c.suit && lc.value === c.value),
  );

  const shuffled = shuffle(availableCards);

  const cardsNeeded = 8 - lockedCards.length;

  const newCards = [];
  for (let i = 0; i < cardsNeeded; i++) {
    newCards.push(shuffled.pop()!);
  }

  const nextHand = [...lockedCards, ...newCards];

  return nextHand.map((card, i) => ({
    ...card,
    isTalon: i >= 6,
    isFaceDown: !card.isLocked && i >= 6,
  }));
};

export const revealTalon = (currentHand: CardData[]): CardData[] => {
  return currentHand.map((card) => ({
    ...card,
    isFaceDown: false,
  }));
};
