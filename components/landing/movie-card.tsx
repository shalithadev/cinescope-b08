import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { MovieData } from "@/lib/type";

interface MovieCardProps {
  movie: MovieData;
}

export function MovieCard({ movie }: MovieCardProps) {
  console.log("CARD", movie);

  return (
    <Card className="border-primary/20 hover:border-primary/50 overflow-hidden py-0 gap-0 transition-colors">
      <div className="aspect-2/3 w-full overflow-hidden bg-amber-400">
        <Image
          src={movie.poster || "/placeholder.svg"}
          alt={movie.title}
          width={300}
          height={450}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="line-clamp-1 font-semibold text-base">{movie.title}</h3>

        <p className="text-muted-foreground">
          {movie.year} • {movie.runtime} min
        </p>

        <div className="mt-2 flex flex-wrap gap-1">
          {movie.genres.slice(0, 2).map((genre, idx) => (
            <Badge
              key={`${genre}-${idx}`}
              variant="outline"
              className="border-primary/30 bg-primary/5 text-xs rounded-sm"
            >
              {genre}
            </Badge>
          ))}

          {movie.genres.length > 2 && (
            <Badge
              variant="outline"
              className="border-primary/30 text-xs rounded-sm"
            >
              +{movie.genres.length - 2}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between p-4 pt-0 border-t-0 bg-transparent">
        <div className="flex items-center">
          <span className="text-primary text-sm font-medium">
            ⭐ {movie.imdb.rating || 0}/10
          </span>
        </div>

        <Button
          variant="ghost"
          className="hover:bg-accent hover:text-primary rounded-sm cursor-pointer"
        >
          Details
        </Button>
      </CardFooter>
    </Card>
  );
}
