import Container from "@/src/components/container";
import Image from "@/src/components/image";
import { CardData } from "../types/card_types";


interface CardProps extends CardData {
}

export default function Card({ suit, value }: CardProps) {
    const imagePath = `/cards/${suit}_${value}.png`;

    return (
        <Container maxWidth="sm">
            <Image
                src={imagePath}
                alt={`${value} of ${suit}`}
                borderRadius="md"
                aspect="auto"
                objectFit="contain"
            />
        </Container>
    );
}
