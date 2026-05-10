import type { Metadata } from "next";
import { Toaster } from "sonner"
import { Geist, Geist_Mono, Krona_One } from "next/font/google";
import "./globals.css";

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
  title: "DroneGuard",
  description: "Drone services marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${krona.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Toaster richColors position="top-right" />
        {children}
      </body>
    </html>
  );
}