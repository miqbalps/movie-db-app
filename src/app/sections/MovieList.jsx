"use client";
import { useGetMovies, useGetGenres } from "@/hooks/useMovies";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import Card from "@/app/components/Card";
import { ButtonCategory } from "@/app/components/Button";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Link from "next/link";

export default function MovieList() {
  const [withGenres, setWithGenres] = useState("");
  const params = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const data = useGetMovies(withGenres, params.get("page"));
  const genres = useGetGenres();

  const genreButtons = [
    { id: "", name: "All" },
    { id: "16", name: "animation" },
    { id: "28", name: "action" },
    { id: "12", name: "adventure" },
    { id: "878", name: "science fiction" },
    { id: "35", name: "comedy" },
  ];

  const totalPages = data?.total_pages || 1;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage); // Update the current page
    }
  };

  return (
    <>
      <div className="flex py-2 mb-4 overflow-auto items-center text-lg text-zinc-400 font-semibold gap-6 sm:gap-6">
        {genreButtons.map((button, indexButton) => (
          <React.Fragment key={indexButton}>
            <ButtonCategory
              key={button.id}
              onClick={() => setWithGenres(button.id)}
              name={button.name}
            />
          </React.Fragment>
        ))}
      </div>

      <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 justify-center sm:justify-around gap-3">
        {data?.results?.map((movie, indexMovie) => (
          <React.Fragment key={indexMovie}>
            <Link className="rounded-md" href={`/movie/${movie.id}`}>
              <Card movie={movie} genres={genres} />
            </Link>
          </React.Fragment>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <ul className="flex items-center text-2xl gap-6 sm:gap-12">
          <li>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <BsArrowLeft className="text-3xl" />
            </button>
          </li>
          {[1, 2, 3, 4, 5, 6].map((page) => (
            <li key={page}>
              <Link href={`/?page=${page}`}>{page}</Link>
            </li>
          ))}
          <li>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <BsArrowRight className="text-3xl" />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
