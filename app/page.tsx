import type { Metadata } from "next";
import Footer from "@/components/layout/footer";
import MainNav from "@/components/layout/main-nav";
import HeroBanner from "@/components/landing/hero-banner";
import FeaturedMovies from "@/components/landing/featured-movies";

export const metadata: Metadata = {
  title: "CineScope Movie Dashboard",
  description:
    "CineScope is a web application that provides a comprehensive dashboard for movie enthusiasts. It allows users to explore, search, and manage their favorite movies, providing detailed information and insights.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="grow">
        <HeroBanner />
        <FeaturedMovies />
      </main>
      <Footer />
    </div>
  );
}
