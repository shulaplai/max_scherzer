import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Max Scherzer | Mad Max — The Legend of a Fierce Competitor",
  description:
    "Explore the career, pitch arsenal, and legendary story of Max Scherzer — 3-time Cy Young Award winner, World Series Champion, and one of baseball's most dominant pitchers.",
  openGraph: {
    title: "Max Scherzer | Mad Max",
    description:
      "The career, pitches, and story of a future Hall of Famer.",
    type: "website",
    images: ["/images/avatar.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0b] text-[#f0ece4]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
