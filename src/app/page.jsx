"use client";
import MovieList from "@/app/sections/MovieList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between container mx-auto p-3 pt-0 md:p-0">
      <h3 className="text-2xl font-black text-zinc-500 py-2 mt-4">
        Browse by category
      </h3>
      <MovieList />
    </main>
  );
}
