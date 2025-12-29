"use client";

import { useState, useEffect } from "react";
import Grid from "@/src/components/grid";
import Heading from "@/src/components/heading";
import Card from "@/src/components/card";
import { CardData, TrumpSelection } from "@/src/types/types";
import { generateRandomHand, sortHand, revealTalon } from "@/src/utils/new_hand_logic";
import Container from "@/src/components/container";
import Controls from "@/src/components/controls";
import SelectionText from "@/src/components/selection_text";

export default function Home() {
    const [fullHand, setFullHand] = useState<CardData[]>([]);
    const [trumpSelection, setTrumpSelection] = useState<TrumpSelection | null>(null);

    const handleNewHand = () => {
        const newHand = generateRandomHand(fullHand);
        setFullHand(sortHand(newHand));
        setTrumpSelection(null);
    }

    const handleSelectTrump = (suit: TrumpSelection) => {
        setTrumpSelection(suit);
        setFullHand(sortHand(revealTalon(fullHand)));
    };

    useEffect(() => {
        handleNewHand();
    }, []);

    const toggleLock = (suit: string, value: string) => {
        const cardToToggle = fullHand.find(c => c.suit === suit && c.value === value);

        if (cardToToggle?.isFaceDown) {
            return;
        }

        setFullHand(prevHand =>
            prevHand.map(card =>
                card.suit === suit && card.value === value
                    ? { ...card, isLocked: !card.isLocked }
                    : card
            )
        );
    };

    return (
        <Container>
            <Heading tag="h1" fontClass="display1-bold">
                Belot Hand Generator
            </Heading>

            <Controls trumpSelection={trumpSelection} handleNewHand={handleNewHand} setTrumpSelection={handleSelectTrump}></Controls>

            <SelectionText trumpSelection={trumpSelection}></SelectionText>

            <Grid columns={8} autoResponsive gap="sm">
                {fullHand.map((card, i) => {
                    return <Card key={`${card.suit}-${card.value}`} {...card} onToggleLock={() => toggleLock(card.suit, card.value)} />
                })}
            </Grid>
        </Container>
    );
}
