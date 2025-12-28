"use client";

import { useState, useEffect } from "react";
import Grid from "@/src/components/grid";
import Heading from "@/src/components/heading";
import Card from "@/src/components/card";
import NewHandButton from "@/src/components/new_hand_button";
import { CardData } from "@/src/types/card_types";
import { generateRandomHand, sortHand } from "@/src/utils/new_hand_logic";
import Button from "@/src/components/button";

export default function Home() {
    const [fullHand, setFullHand] = useState<CardData[]>([]);
    const [isRevealed, setIsRevealed] = useState(false);

    const handleNewHand = (newHand: CardData[]) => {
        setFullHand(newHand);
        setIsRevealed(false);
    }

    useEffect(() => {
        handleNewHand(generateRandomHand());
    }, []);

    const firstSix = sortHand(fullHand.slice(0, 6));

    return (
        <main>
            <Heading tag="h1" fontClass="display1-bold">
                Belot Hand Generator
            </Heading>

            <div>
                <NewHandButton onGenerate={handleNewHand} />

                <Button
                    label="Reveal Talon"
                    color={isRevealed ? "secondary" : "primary"}
                    onClick={() => {
                        if (isRevealed) return;
                        setIsRevealed(true);
                    }}
                    endIcon={isRevealed ? "eye" : "eye-off"}
                />
            </div>

            <Grid columns={8} autoResponsive gap="sm">
                {isRevealed ? (
                    sortHand(fullHand).map((card, i) => (
                        <Card key={i} suit={card.suit} value={card.value} />
                    ))
                ) : (
                    <>
                        {firstSix.map((card, i) => (
                            <Card key={i} suit={card.suit} value={card.value} />
                        ))}
                        <Card isFaceDown />
                        <Card isFaceDown />
                    </>
                )}
            </Grid>
        </main>
    );
}
