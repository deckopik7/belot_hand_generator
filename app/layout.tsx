import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Belot Hand Generator",
    description: "Generate hands for card game Belot",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
