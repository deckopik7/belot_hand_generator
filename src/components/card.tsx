import Container from "@/src/components/container";
import Image from "@/src/components/image";
import { CardData } from "@/src/types/card_types";

interface CardProps extends Partial<CardData> {
    isFaceDown?: boolean;
}

export default function Card({ suit, value, isFaceDown }: CardProps) {
    const imagePath = isFaceDown
        ? "/cards/back.png"
        : `/cards/${suit}_${value}.png`;

    return (
        <Container maxWidth="sm">
            <Image
                src={imagePath}
                alt={isFaceDown ? "Hidden card" : `${value} of ${suit}`}
                borderRadius="md"
                aspect="auto"
                objectFit="contain"
            />
        </Container>
    );
}
