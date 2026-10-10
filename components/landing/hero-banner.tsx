import { Button } from "@/components/ui/button";
import { PlayIcon } from "lucide-react";

export default function HeroBanner() {
  return (
    <section id="overview" className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Dark Overlay */}
        <div className="bg-linear-to-r absolute inset-0 z-10 from-black/70 via-black/50 to-black/80 dark:via-black/60 dark:to-black/80"></div>
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/hero-1.jpg')] bg-cover bg-center opacity-60 dark:opacity-40 bg-amber-300"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto relative z-1 px-4 py-32 md:py-40 lg:py-52">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-white drop-shadow-md sm:text-5xl md:text-6xl lg:text-7xl">
              Discover Amazing Movies
            </h1>

            <p className="mx-auto max-w-175 text-lg text-white/80 drop-shadow-sm md:text-xl">
              Explore our collection of the best movies from around the world.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="px-6 has-[>svg]:px-4 hover:bg-primary/90 gap-2 rounded-md"
            >
              <PlayIcon />
              Browse Movies
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-primary/10 backdrop-blur-xs border-primary/30 px-6 hover:bg-primary/20 text-white hover:text-white gap-2 rounded-md"
            >
              Latest Releases
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
