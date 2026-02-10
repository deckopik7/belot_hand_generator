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
        <Container className="relative cursor-pointer" onClick={onToggleLock}>
            <Image
                src={imagePath}
                alt={isFaceDown ? "Hidden card" : `${value} of ${suit}`}
                borderRadius="md"
                aspect="auto"
                objectFit="contain"
            />

            <Container className="absolute flex-v-center gap-3xs" style={{ top: 2, right: 2 }}>
                {isLocked && (
                    <Icon
                        name="lock"
                        display="block"
                        color="warning"
                        fontClass="title1"
                        strokeWidth={3}
                    />
                )}
                {!isFaceDown && isTalon && (
                    <Icon
                        name="type"
                        display="block"
                        color="info"
                        fontClass="title1"
                        strokeWidth={3}
                    />
                )}
            </Container>
        </Container >
    );
}
