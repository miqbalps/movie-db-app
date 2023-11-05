import { useGetGenres } from "@/hooks/useMovies";
import React, { useState, useEffect } from "react";
import CardSkeleton from "@/app/components/Skeleton";
import { MovieCard } from "../components/Card";
import Link from "next/link";

const MovieSearch = ({ query }) => {
  const genres = useGetGenres();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (query) {
      setIsLoading(false);
    }
  }, [query]);

  return (
    <div className="px-3 md:px-20 mb-8">
      <h3 className="text-2xl lg:text-4xl font-black text-zinc-500 py-2 mt-4 lg:my-6">
        Search Results
      </h3>
      <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 justify-center sm:justify-around gap-3">
        {!query || isLoading
          ? Array.from({ length: 20 }).map((_, index) => (
              <React.Fragment key={index}>
                <CardSkeleton />
              </React.Fragment>
            ))
          : query.map((movie) => (
              <React.Fragment key={movie.id}>
                <Link href={`/movie/${movie.id}`}>
                  <MovieCard movie={movie} genres={genres} />
                </Link>
              </React.Fragment>
            ))}
      </div>
    </div>
  );
};

export default MovieSearch;
