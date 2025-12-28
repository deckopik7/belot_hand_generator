"use client";

import { useState, useEffect } from "react";
import Grid from "@/src/components/grid";
import Heading from "@/src/components/heading";
import Card from "@/src/components/card";
import NewHandButton from "@/src/components/new_hand_button";
import { CardData } from "@/src/types/card_types";
import { generateRandomHand } from "@/src/utils/new_hand_logic";

export default function Home() {
    const [hand, setHand] = useState<CardData[]>([]);

    useEffect(() => {
        const initialHand = generateRandomHand();
        setHand(initialHand);
    }, []);

    return (
        <main>
            <Heading tag="h1" fontClass="display1-bold">
                Belot Hand Generator
            </Heading>

            <div>
                <NewHandButton onGenerate={setHand} />
            </div>

            <Grid columns={8} autoResponsive gap="sm">
                {hand.map((card, index) => (
                    <Card
                        key={`${card.suit}-${card.value}-${index}`}
                        suit={card.suit}
                        value={card.value}
                    />
                ))}
            </Grid>
        </main>
    );
}
