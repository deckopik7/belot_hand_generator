import { useState, useEffect } from "react";
import { CardData, TrumpSelection } from "@/src/types/types";
import {
  generateRandomHand,
  sortHand,
  revealTalon,
} from "@/src/utils/new_hand_logic";

export function useBelotGame() {
  const [fullHand, setFullHand] = useState<CardData[]>([]);
  const [trumpSelection, setTrumpSelection] = useState<TrumpSelection | null>(
    null,
  );

  const handleNewHand = () => {
    const newHand = generateRandomHand(fullHand);
    setFullHand(sortHand(newHand));
    setTrumpSelection(null);
  };

  const handleSelectTrump = (suit: TrumpSelection) => {
    setTrumpSelection(suit);
    setFullHand(sortHand(revealTalon(fullHand)));
  };

  const toggleLock = (suit: string, value: string) => {
    setFullHand((prev) =>
      prev.map((card) =>
        card.suit === suit && card.value === value && !card.isFaceDown
          ? { ...card, isLocked: !card.isLocked }
          : card,
      ),
    );
  };

  useEffect(() => {
    handleNewHand();
  }, []);

  return {
    fullHand,
    trumpSelection,
    handleNewHand,
    handleSelectTrump,
    toggleLock,
  };
}
