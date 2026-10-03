import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans, inter } from "@/app/font";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: "CineScope Movie Dashboard",
    template: "%s | CineScope Movie Dashboard",
  },
  description:
    "CineScope is a web application that provides a comprehensive dashboard for movie enthusiasts. It allows users to explore, search, and manage their favorite movies, providing detailed information and insights.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        geistSans.variable,
        geistMono.variable,
        inter.variable,
        inter.className,
      )}
    >
      <body className="min-h-full flex flex-col relative">{children}</body>
    </html>
  );
}
