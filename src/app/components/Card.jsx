import { imageUrl } from "@/lib/api";
import Image from "next/image";

export default function Card({ movie, genres }) {
  return (
    <>
      <div className="rounded-md">
        <Image
          className="rounded-md"
          src={imageUrl + movie.poster_path}
          alt={movie.title}
          width="500"
          height="500"
          priority
        />
        <div className="px-2 pb-2 mt-2">
          <h3 className="font-semibold text-xl sm:text-base hover:text-primary transition-colors truncate w-full">
            {movie.title}
          </h3>
          <p className="flex text-base sm:text-sm items-center gap-3">
            {movie.genre_ids.map((genreId) => genres[genreId]).join(", ")}
          </p>
        </div>
      </div>
    </>
  );
}
