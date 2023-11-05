import { useGetMovies, useGetGenres } from "@/hooks/useMovies";
import React, { useState, useEffect } from "react";
import { MovieCard } from "@/app/components/Card";
import { ButtonCategory } from "@/app/components/Button";
import CardSkeleton from "@/app/components/Skeleton";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const MovieList = () => {
  const [withGenres, setWithGenres] = useState("");
  const [page, setPage] = useState(1);
  const data = useGetMovies(withGenres, page);
  const genres = useGetGenres();
  const [isLoading, setIsLoading] = useState(true);

  const genreButtons = [
    { id: "", name: "All" },
    { id: "16", name: "animation" },
    { id: "28", name: "action" },
    { id: "12", name: "adventure" },
    { id: "878", name: "science fiction" },
    { id: "35", name: "comedy" },
  ];

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  const totalPages = 6 || 1;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="px-3 md:px-20">
      <h3 className="text-2xl lg:text-4xl font-black text-zinc-500 py-2 mt-4 lg:my-6">
        Browse by category
      </h3>

      <div className="flex py-2 mb-4 overflow-auto items-center text-lg lg:text-2xl text-zinc-400 font-semibold gap-6 sm:gap-6 lg:mb-8 whitespace-nowrap">
        {genreButtons.map((button) => (
          <React.Fragment key={button.id}>
            <ButtonCategory
              onClick={() => setWithGenres(button.id)}
              name={button.name}
              active={withGenres === button.id}
            />
          </React.Fragment>
        ))}
      </div>

      <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 justify-center sm:justify-around gap-3">
        {!data || isLoading
          ? Array.from({ length: 20 }).map((_, index) => (
              <React.Fragment key={index}>
                <CardSkeleton />
              </React.Fragment>
            ))
          : data?.results?.map((movie) => (
              <React.Fragment key={movie.id}>
                <Link href={`/movie/${movie.id}`}>
                  <MovieCard movie={movie} genres={genres} />
                </Link>
              </React.Fragment>
            ))}
      </div>

      <div className="flex justify-center mt-10">
        <ul className="flex items-center text-2xl gap-6 sm:gap-12">
          <li>
            <button onClick={handlePrevPage} disabled={page === 1}>
              <BsArrowLeft
                className={`text-3xl hover:text-primary ${
                  page === 1 ? "hover:text-black" : ""
                }`}
              />
            </button>
          </li>
          {[...Array(totalPages)].map((_, index) => (
            <React.Fragment key={index + 1}>
              <li>
                <button
                  onClick={() => handlePageChange(index + 1)}
                  className={`${
                    page === index + 1
                      ? "bg-primary text-white py-1 px-3"
                      : "hover:text-primary"
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            </React.Fragment>
          ))}
          <li>
            <button onClick={handleNextPage} disabled={page === totalPages}>
              <BsArrowRight
                className={`text-3xl hover:text-primary ${
                  page === totalPages ? "hover:text-black" : ""
                }`}
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieList;
