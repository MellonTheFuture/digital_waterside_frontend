import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Digital Waterside | Marketplace",
    description: "Discover independent waterside businesses.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return <html lang="en"><body>{children}</body></html>;
}
