import { TrumpSelection } from "@/src/types/types";
import Container from "@/src/components/container";
import NewHandButton from "@/src/components/new_hand_button";
import TrumpSelector from "@/src/components/trump_selector";

interface ControlsProps {
    trumpSelection: TrumpSelection | null;
    handleNewHand: () => void;
    setTrumpSelection: (selection: TrumpSelection) => void;
}

export default function Controls({ trumpSelection, handleNewHand, setTrumpSelection }: ControlsProps) {
    return <Container>
        <NewHandButton onGenerate={handleNewHand} />
        <TrumpSelector trumpSelection={trumpSelection} setTrumpSelection={setTrumpSelection} />
    </Container>;
}
