import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import MovieSelectors from "./movie-selectors";
import MovieData from "./movie-data";

export default function DashboardMoviesPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Movies Management
          </h2>
          <p className="text-muted-foreground">
            Manage your movie collection and keep track of your favorite films.
          </p>
        </div>

        {/* Add Movie Button */}
        <Button size="lg" className="rounded-md has-[>svg]:px-3 gap-2">
          <PlusIcon className="size-4" />
          Add Movie
        </Button>
      </div>

      <MovieSelectors />

      <MovieData />
    </div>
  );
}
