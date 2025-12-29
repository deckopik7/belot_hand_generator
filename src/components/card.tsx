import Container from "@/src/components/container";
import Image from "@/src/components/image";
import Icon from "@/src/components/icon";
import { CardData } from "@/src/types/types";

interface CardProps extends Partial<CardData> {
    onToggleLock: () => void;
}

export default function Card({ suit, value, isTalon, isLocked, isFaceDown, onToggleLock }: CardProps) {
    const imagePath = isFaceDown
        ? "/cards/back.png"
        : `/cards/${suit}_${value}.png`;

    return (
        <Container className="relative" onClick={onToggleLock}>
            <Image
                src={imagePath}
                alt={isFaceDown ? "Hidden card" : `${value} of ${suit}`}
                borderRadius="md"
                aspect="auto"
                objectFit="contain"
            />

            <Container className="absolute" style={{ top: 0, right: 0 }}>
                {isLocked && (
                    <Icon
                        name="lock"
                        display="block"
                        color="primary"
                        fontClass="title1"
                        strokeWidth={4}
                    />
                )}
                {isTalon && (
                    <Icon
                        name="type"
                        display="block"
                        color="primary"
                        fontClass="title1"
                        strokeWidth={4}
                    />
                )}
            </Container>
        </Container >
    );
}
