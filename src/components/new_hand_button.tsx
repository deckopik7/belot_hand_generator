"use client";

import Button from "@/src/components/button";
import { CardData } from "@/src/types/card_types";
import { generateRandomHand } from "@/src/utils/new_hand_logic";

interface NewHandButtonProps {
    onGenerate: (hand: CardData[]) => void;
}

export default function NewHandButton({ onGenerate }: NewHandButtonProps) {
    return (
        <Button
            label="Nova ruka"
            endIcon="shuffle"
            onClick={() => onGenerate(generateRandomHand())}
        />
    );
}
