import { CardData, TrumpSelection } from "@/src/types/card_types";
import Container from "@/src/components/container";
import NewHandButton from "@/src/components/new_hand_button";
import TrumpSelector from "@/src/components/trump_selector";

interface ControlsProps {
    trumpSelection: TrumpSelection | null;
    handleNewHand: (newHand: CardData[]) => void;
    setTrump: (selection: TrumpSelection) => void;
}

export default function Controls({ trumpSelection, handleNewHand, setTrump }: ControlsProps) {
    return <Container>
        <NewHandButton onGenerate={handleNewHand} />
        <TrumpSelector trumpSelection={trumpSelection} onSelect={setTrump} />
    </Container>;
}
