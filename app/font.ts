import { Geist, Geist_Mono, Inter } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const inter = Inter({
  variable: "--font-inter",
  // weight: ["100", "200", "400", "500"],
  // preload: false,
  subsets: ["latin"],
});
