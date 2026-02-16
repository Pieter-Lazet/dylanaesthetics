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
  metadataBase: new URL("https://www.dylanaesthetics.nl"),
  title: "Dylanaesthetics | Nieuwe Golf",
  description: "Officieel portfolio van Dylanaesthetics. Fitness, Lifestyle, Mindset. Sluit je aan bij de nieuwe golf.",
  keywords: ["Dylanaesthetics", "Fitness", "Lifestyle", "Gym", "Motivation", "Nieuwe Golf", "New Wave", "Personal Training", "Coaching"],
  authors: [{ name: "Dylanaesthetics" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dylanaesthetics | Nieuwe Golf",
    description: "Start een nieuwe golf. Fitness & Lifestyle.",
    url: "https://www.dylanaesthetics.nl",
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
    title: "Dylanaesthetics | Nieuwe Golf",
    description: "Start een nieuwe golf.",
    images: ["/hero-image.png"],
  },
};

import { Analytics } from "@vercel/analytics/react";

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
        <Analytics />
      </body>
    </html>
  );
}
