import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dylanaesthetics | Nieuwe Golf",
  description: "Officieel portfolio van Dylanaesthetics. Fitness, Lifestyle, Mindset. Sluit je aan bij de nieuwe golf.",
  keywords: ["Dylanaesthetics", "Fitness", "Lifestyle", "Gym", "Motivation", "Nieuwe Golf", "New Wave"],
  authors: [{ name: "Dylanaesthetics" }],
  openGraph: {
    title: "Dylan Aesthetics", // Black 'Dylan', Gold 'Aesthetics' handled by platform styling usually, text is plain.
    description: "Start een nieuwe golf. Fitness & Lifestyle.",
    url: "https://dylanaesthetics.com", // Placeholder, updated on deploy
    siteName: "Dylanaesthetics",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Dylanaesthetics Hero",
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dylan Aesthetics",
    description: "Start een nieuwe golf.",
    images: ["/hero-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground selection:bg-gold-500/30 selection:text-gold-400`}
      >
        {children}
      </body>
    </html>
  );
}
