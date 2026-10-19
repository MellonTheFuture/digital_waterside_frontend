import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Digital Waterside | Vendor",
    description: "Manage your Digital Waterside business.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return <html lang="en"><body>{children}</body></html>;
}
