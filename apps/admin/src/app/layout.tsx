import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Digital Waterside | Admin",
    description: "Administration for Digital Waterside.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return <html lang="en"><body>{children}</body></html>;
}
