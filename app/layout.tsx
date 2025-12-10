import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: "Janhavi Chavada | Full Stack Developer",
  description: "Full Stack Developer & Web3 enthusiast. Building innovative solutions with React, Next.js, and blockchain technology.",
  keywords: ["Janhavi Chavada", "Full Stack Developer", "Web3", "Blockchain", "React", "Next.js", "Solidity", "Solana"],
  authors: [{ name: "Janhavi Chavada" }],
  openGraph: {
    title: "Janhavi Chavada | Full Stack Developer",
    description: "Full Stack Developer & Web3 enthusiast",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} font-mono`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
