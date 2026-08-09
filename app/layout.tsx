import type { Metadata } from "next";
import { Toaster } from "sonner"
import CookieBanner from "@/components/CookieBanner"
import { Geist, Geist_Mono, Krona_One } from "next/font/google";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ NUOVO FONT
export const krona = Krona_One({
  variable: "--font-krona",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.droneguard.it"),
  title: "DroneGuard",
  description:
    "DroneGuard è il marketplace italiano che mette in contatto clienti e piloti drone per servizi, sopralluoghi, riprese, ispezioni e lavori professionali.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} ${krona.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Toaster richColors position="top-right" />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}