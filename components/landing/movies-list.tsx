// import { MOVIES_DATA } from "@/lib/data";
import { getMovies } from "@/actions/movies";
import { MovieCard } from "./movie-card";

// NOTE: React Fragments
// Ex 1: <></>
// Ex 2: <React.Fragment></React.Fragment>

export async function MoviesList() {
  // const movies = MOVIES_DATA; // Simulating fetching movies data
  const movies = await getMovies();

  console.log("Movies", movies);

  return (
    <>
      <div className="text-muted-foreground text-sm">
        Showing 5 of 100 movies.
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={`movie-${movie._id}`} movie={movie} />
        ))}
      </div>
    </>
  );
}
