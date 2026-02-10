"use client";

import Grid from "@/src/components/grid";
import Heading from "@/src/components/heading";
import Card from "@/src/components/card";
import Container from "@/src/components/container";
import Controls from "@/src/components/controls";
import SelectionText from "@/src/components/selection_text";
import { useBelotGame } from "@/src/hooks/useBelotGame";

export default function Home() {
    const { fullHand, trumpSelection, handleNewHand, handleSelectTrump, toggleLock } = useBelotGame();

    return (
        <Container className="flex-v-center bg-surfacecontainer h-fullscreen justify-start">
            <Heading className="mt-sm mb-lg" fontClass="display1-bold" fontColor="onsurface">Belot Hand Generator</Heading>
            <SelectionText trumpSelection={trumpSelection} />
            <Controls trumpSelection={trumpSelection} handleNewHand={handleNewHand} setTrumpSelection={handleSelectTrump}></Controls>
            <Container className="px-2xl">
                <Grid autoResponsive columns={8} gap="md">
                    {fullHand.map(card => (
                        <Card key={`${card.suit}-${card.value}`} {...card} onToggleLock={() => toggleLock(card.suit, card.value)} />
                    ))}
                </Grid>
            </Container>
        </Container>
    );
}
