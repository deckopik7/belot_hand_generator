import Container from "@/src/components/container";
import Image from "@/src/components/image";
import Icon from "@/src/components/icon";
import { CardData } from "@/src/types/card_types";

interface CardProps extends Partial<CardData> {
    isFaceDown?: boolean;
    isTalon?: boolean;
}

export default function Card({ suit, value, isFaceDown, isTalon }: CardProps) {
    const imagePath = isFaceDown
        ? "/cards/back.png"
        : `/cards/${suit}_${value}.png`;

    return (
        <Container className="relative">
            <Image
                src={imagePath}
                alt={isFaceDown ? "Hidden card" : `${value} of ${suit}`}
                borderRadius="md"
                aspect="auto"
                objectFit="contain"
            />

            {isTalon && (
                <Icon
                    name="type"
                    display="block"
                    className="absolute"
                    style={{ top: '4px', right: '4px', zIndex: 10 }}
                    color="primary"
                    fontClass="title1"
                    strokeWidth={4}
                />
            )}
        </Container>
    );
}
