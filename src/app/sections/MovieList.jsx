"use client";
import { useGetMovies, useGetGenres } from "@/hooks/useMovies";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import Card from "@/app/components/Card";
import { ButtonCategory } from "@/app/components/Button";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const MovieList = () => {
  const [withGenres, setWithGenres] = useState("");
  const [page, setPage] = useState(1);
  const data = useGetMovies(withGenres, page);
  const genres = useGetGenres();

  const genreButtons = [
    { id: "", name: "All" },
    { id: "16", name: "animation" },
    { id: "28", name: "action" },
    { id: "12", name: "adventure" },
    { id: "878", name: "science fiction" },
    { id: "35", name: "comedy" },
  ];

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

      <div className="flex py-2 mb-4 overflow-auto items-center text-lg lg:text-2xl text-zinc-400 font-semibold gap-6 sm:gap-6 lg:mb-8">
        {genreButtons.map((button) => (
          <React.Fragment key={button.id}>
            <ButtonCategory
              onClick={() => setWithGenres(button.id)}
              name={button.name}
            />
          </React.Fragment>
        ))}
      </div>

      <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 justify-center sm:justify-around gap-3">
        {data?.results?.map((movie) => (
          <React.Fragment key={movie.id}>
            <Link key={movie.id} href={`/movie/${movie.id}`}>
              <Card movie={movie} genres={genres} />
            </Link>
          </React.Fragment>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <ul className="flex items-center text-2xl gap-6 sm:gap-12">
          <li>
            <button onClick={handlePrevPage}>
              <BsArrowLeft className="text-3xl" />
            </button>
          </li>
          {[...Array(6)].map((_, index) => (
            <React.Fragment key={index + 1}>
              <li>
                <button onClick={() => handlePageChange(index + 1)}>
                  {index + 1}
                </button>
              </li>
            </React.Fragment>
          ))}
          <li>
            <button onClick={handleNextPage}>
              <BsArrowRight className="text-3xl" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieList;
