import { Suit, TrumpSelection } from "@/src/types/types";
import Container from "@/src/components/container";
import Grid from "@/src/components/grid";
import Image from "@/src/components/image";
import Button from "@/src/components/button";

interface ControlsProps {
    trumpSelection: TrumpSelection | null;
    handleNewHand: () => void;
    setTrumpSelection: (selection: TrumpSelection) => void;
}

export default function Controls({ trumpSelection, handleNewHand, setTrumpSelection }: ControlsProps) {
    const suits: Suit[] = ['S', 'D', 'H', 'C'];

    return <Container className="gap-4xl bg-secondarycontainer p-md rounded-md border border-color-outline mb-2xl">
        <Grid autoResponsive columns={4} gap="lg">
            {suits.map((suit) => (
                <Image
                    key={suit}
                    src={`/suits/${suit}.png`}
                    alt={suit}
                    aspect="1/1"
                    objectFit="contain"
                    height="2xl"
                    width="2xl"
                    onClick={() => { if (trumpSelection !== null) return; setTrumpSelection(suit) }}
                    className={trumpSelection !== null ? (trumpSelection !== suit ? "opacity-60" : "") : "cursor-pointer"}
                />
            ))}
            <Button modifiers={`colspan-2 justify-center ${trumpSelection !== null ? 'pointer-events-none opacity-60' : ''}`} label="Pass" endIcon="corner-down-right" color="secondary" onClick={() => { if (trumpSelection !== null) return; setTrumpSelection("Pass") }} />
            <Button modifiers="colspan-2 justify-center" label="New Hand" endIcon="hand" color="primary" onClick={() => handleNewHand()}
            />
        </Grid>
    </Container>;
}
