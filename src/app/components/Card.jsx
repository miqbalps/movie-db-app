import { imageUrl } from "@/lib/api";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";

export function MovieCard({ movie, genres }) {
  return (
    <div className="rounded-md">
      <Image
        className="rounded-md"
        src={
          movie.poster_path === null
            ? "https://placehold.co/640x960/png"
            : imageUrl + movie.poster_path
        }
        alt={movie.title}
        width="500"
        height="500"
        priority
        unoptimized
      />
      <div className="px-2 pb-2 mt-2">
        <h3 className="font-semibold text-xl sm:text-base xl:text-xl hover:text-primary transition-colors truncate w-full">
          {movie.title}
        </h3>
        <p className="flex text-base sm:text-sm xl:text-lg items-center gap-3">
          {movie.genre_ids.map((genreId) => genres[genreId]).join(", ")}
        </p>
      </div>
    </div>
  );
}

export function CastCard(cast) {
  const data = cast.cast;
  return (
    <div className="rounded-md">
      <Image
        className="rounded-md"
        src={
          data.profile_path === null
            ? "https://placehold.co/640x960/png"
            : imageUrl + data.profile_path
        }
        alt={data.original_name}
        width="500"
        height="500"
        priority
        unoptimized
      />
      <div className="px-2 pb-2 mt-2">
        <h3 className="font-semibold text-xl sm:text-base xl:text-xl hover:text-primary transition-colors truncate w-full">
          {data.original_name}
        </h3>
        <p className="flex text-base sm:text-sm xl:text-lg gap-1">
          as <span className="text-secondary">{data.character}</span>
        </p>
      </div>
    </div>
  );
}

export function ReviewCard(reviews) {
  const data = reviews.reviews;
  return (
    <div className="rounded-md border p-4 mb-8">
      <div className="flex gap-3 items-center">
        <Image
          className="rounded-full h-14 w-14"
          src={
            data.author_details.avatar_path === null
              ? "https://placehold.co/500x500/png"
              : imageUrl + data.author_details.avatar_path
          }
          alt={data.author}
          width="500"
          height="500"
          priority
          unoptimized
        />
        <div className="flex flex-col">
          <h3 className="font-semibold text-base sm:text-base hover:text-primary transition-colors truncate w-full">
            {data.author}
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="inline-flex items-center justify-center px-2 py-1 text-xs leading-none text-white bg-primary rounded-full max-w-fit gap-1">
              <BsStarFill></BsStarFill> {data.author_details.rating}
            </span>
            <div className="flex flex-col items-start sm:gap-1 sm:flex-row md:items-center">
              <p className="hidden sm:block text-sm text-stone-500 font-light">
                Written by{" "}
                <span className="font-normal text-black">{data.author}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 pb-2 mt-2">
        <p className="text-sm sm:text-base xl:text-lg gap-1 line-clamp-5 sm:line-clamp-6 lg:line-clamp-none">
          {data.content}
        </p>
      </div>
    </div>
  );
}
