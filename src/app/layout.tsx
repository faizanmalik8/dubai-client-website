import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "IPTV Dubai | 4K Streaming Subscription for the Whole UAE",
  description: "Experience premium entertainment with our reliable IPTV service in Dubai, offering 32,000+ live TV channels and 20,000+ movies & TV series in stunning HD and 4K.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`} suppressHydrationWarning data-scroll-behavior="smooth">
      <body style={{ fontFamily: "var(--font-outfit)" }} suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
