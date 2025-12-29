"use client";

import { useState, useEffect } from "react";
import Grid from "@/src/components/grid";
import Heading from "@/src/components/heading";
import Card from "@/src/components/card";
import { CardData, TrumpSelection } from "@/src/types/card_types";
import { generateRandomHand, sortHand } from "@/src/utils/new_hand_logic";
import Container from "@/src/components/container";
import Controls from "@/src/components/controls";
import SelectionText from "@/src/components/selection_text";

export default function Home() {
    const [fullHand, setFullHand] = useState<CardData[]>([]);
    const [trumpSelection, setTrumpSelection] = useState<TrumpSelection | null>(null);

    const handleNewHand = (newHand: CardData[]) => {
        setFullHand(newHand);
        setTrumpSelection(null);
    }

    useEffect(() => {
        handleNewHand(generateRandomHand());
    }, []);

    const firstSix = sortHand(fullHand.slice(0, 6));

    return (
        <Container>
            <Heading tag="h1" fontClass="display1-bold">
                Belot Hand Generator
            </Heading>

            <Controls trumpSelection={trumpSelection} handleNewHand={handleNewHand} setTrump={setTrumpSelection}></Controls>

            <SelectionText trumpSelection={trumpSelection}></SelectionText>

            <Grid columns={8} autoResponsive gap="sm">
                {trumpSelection !== null ? (
                    sortHand(fullHand).map((card, i) => (
                        <Card key={i} suit={card.suit} value={card.value} isTalon={card.isTalon} />
                    ))
                ) : (
                    <>
                        {firstSix.map((card, i) => (
                            <Card key={i} suit={card.suit} value={card.value} />
                        ))}
                        <Card isFaceDown isTalon />
                        <Card isFaceDown isTalon />
                    </>
                )}
            </Grid>
        </Container>
    );
}
