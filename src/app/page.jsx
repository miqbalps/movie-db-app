"use client";
import { useState, useEffect } from "react";
import HeroImage from "@/app/sections/HeroImage";
import MovieList from "@/app/sections/MovieList";
import axios from "@/lib/api";

export default function Home() {
  const baseUrl = "https://api.themoviedb.org/3";
  const apiKey = "0d12dc45d21e4ed7e110b9ad8d1e293e";
  const [hero, setHero] = useState(false);
  const [discoverMov, setDiscover] = useState([0]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/discover/movie?api_key=${apiKey}`)
      .then((ress) => setDiscover(ress));
  }, []);
  return (
    <main className="flex min-h-screen flex-col justify-between mx-auto pt-0">
      <HeroImage discover={discoverMov?.data?.results} hero={hero} />
      <MovieList />
    </main>
  );
}
