import { Suit, TrumpSelection } from "@/src/types/types";
import Container from "@/src/components/container";
import Text from "@/src/components/text";

interface SelectionTextProps {
    trumpSelection: TrumpSelection | null
}

export default function SelectionText({ trumpSelection }: SelectionTextProps) {
    const suitNames: Record<Suit, string> = { S: "Spades", D: "Diamonds", H: "Hearts", C: "Clubs" };

    const message = trumpSelection === "Pass"
        ? "You chose to Pass"
        : trumpSelection
            ? `You chose ${suitNames[trumpSelection]}`
            : "Choose a Trump";

    return <Container>
        <Text className="mb-sm" fontClass="title1-bold" color="onsurface">{message}</Text>
    </Container>;
}
