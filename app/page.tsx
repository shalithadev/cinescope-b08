import type { Metadata } from "next";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export const metadata: Metadata = {
  title: "CineScope Movie Dashboard",
  description:
    "CineScope is a web application that provides a comprehensive dashboard for movie enthusiasts. It allows users to explore, search, and manage their favorite movies, providing detailed information and insights.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow bg-blue-300">Main Content</main>
      <Footer />
    </div>
  );
}
