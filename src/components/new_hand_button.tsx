"use client";

import Button from "@/src/components/button";

interface NewHandButtonProps {
    onGenerate: () => void;
}

export default function NewHandButton({ onGenerate }: NewHandButtonProps) {
    return (
        <Button
            label="New Hand"
            endIcon="hand"
            onClick={() => onGenerate()}
        />
    );
}
