export type Suit = "S" | "D" | "H" | "C";
export type CardValue = "7" | "8" | "9" | "10" | "J" | "Q" | "K" | "A";

export interface CardData {
  suit: Suit;
  value: CardValue;
}
