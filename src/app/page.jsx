"use client";
import { useState, useEffect } from "react";
import { useSearchMovies } from "@/hooks/useMovies";
import Navbar from "@/app/components/Navbar";
import HeroImage from "@/app/sections/HeroImage";
import MovieList from "@/app/sections/MovieList";
import MovieSearch from "@/app/sections/MovieSearch";
import axios from "@/lib/api";

export default function Home() {
  const baseUrl = "https://api.themoviedb.org/3";
  const apiKey = "0d12dc45d21e4ed7e110b9ad8d1e293e";
  const [discoverMov, setDiscover] = useState([0]);
  const [query, setQuery] = useState("");

  const queryMovie = useSearchMovies(query);
  const searchHandle = (e) => setQuery(e.target.value);

  useEffect(() => {
    axios
      .get(`${baseUrl}/discover/movie?api_key=${apiKey}`)
      .then((ress) => setDiscover(ress));
  }, []);

  return (
    <>
      <Navbar search={searchHandle} />
      <main className="flex min-h-screen flex-col justify-between mx-auto pt-0">
        <HeroImage discover={discoverMov?.data?.results} />
        {queryMovie.total_results === 0 ? (
          <MovieList />
        ) : (
          <MovieSearch query={queryMovie?.results} />
        )}
      </main>
    </>
  );
}
