import { Suit, TrumpSelection } from "@/src/types/card_types";
import Container from "@/src/components/container";
import Text from "@/src/components/text";

interface SelectionTextProps {
    trumpSelection: TrumpSelection | null
}

export default function SelectionText({ trumpSelection }: SelectionTextProps) {
    const suitNames: Record<Suit, string> = { S: "Spades", D: "Diamonds", H: "Hearts", C: "Clubs" };

    return <Container>
        {trumpSelection === "Pass" ? (
            <Text>You chose to pass</Text>
        ) : trumpSelection !== null ? (
            <Text>You chose {suitNames[trumpSelection]}</Text>
        ) : (
            <Text>Choose a trump</Text>
        )}
    </Container>;
}
