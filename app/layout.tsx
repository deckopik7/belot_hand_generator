import "./globals.css";
import type { Metadata } from "next";
import ThemeProvider from "@/src/components/theme";

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
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
