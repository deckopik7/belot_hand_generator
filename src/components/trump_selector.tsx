"use client";

import Grid from "@/src/components/grid";
import Image from "@/src/components/image";
import { TrumpSelection, Suit } from "@/src/types/card_types";
import Button from "@/src/components/button";

interface TrumpSelectorProps {
    trumpSelection: TrumpSelection | null;
    onSelect: (suit: TrumpSelection) => void;
}

export default function TrumpSelector({ trumpSelection, onSelect }: TrumpSelectorProps) {
    const suits: Suit[] = ['S', 'D', 'H', 'C'];

    return (
        <Grid columns={5} gap="sm">
            {suits.map((suit) => (
                <Image
                    key={suit}
                    src={`/suits/${suit}.png`}
                    alt={suit}
                    aspect="1/1"
                    objectFit="contain"
                    onClick={() => { if (trumpSelection !== null) return; onSelect(suit) }}
                />
            ))}
            <Button label="Pass" onClick={() => { if (trumpSelection !== null) return; onSelect("Pass") }} />
        </Grid>
    );
}
