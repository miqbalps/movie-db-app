"use client";
import { imageUrl } from "@/lib/api";
import {
  formatReadableDate,
  formatReadableNumber,
  formatLanguage,
} from "@/app/utils/formatters";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useGetDetailMovie } from "@/hooks/useMovies";
import { BsBookmarkPlusFill, BsEyeFill, BsStarFill } from "react-icons/bs";

export default function Page() {
  const params = useParams();
  const data = useGetDetailMovie(params.id);

  return (
    <>
      <div className="h-[300px] md:h-[424px] w-full m-auto">
        <div className="bg-gradient-to-b carousel h-full w-full">
          <div
            style={{
              backgroundImage: `url(${imageUrl}${data?.backdrop_path})`,
            }}
            className="ease-in-out duration-700 delay-100 carousel-item justify-end h-full flex flex-col w-full bg-center bg-cover bg-no-repeat"
          >
            <div className="overlay top-0 left-0 w-full h-full flex bg-opacity-30 bg-black">
              <div className="overlay-content text-white justify-center container p-8 mt-5 mx-auto md:p-0 lg:px-12 lg:py-8 flex flex-col gap-4 md:gap-6">
                <div className="overview md:w-3/4">
                  <h1 className="text-3xl md:text-4xl font-bold truncate w-full">
                    {data.original_title}
                  </h1>
                  <div className="text-lg md:text-xl">
                    <h2 className="flex items-center gap-2">
                      <div className="text-2xl text-yellow-400">
                        <BsStarFill></BsStarFill>
                      </div>
                      {data.vote_average}
                    </h2>
                    <p className="line-clamp-3 md:line-clamp-6 md:overflow-visible md:text-clip md:whitespace-normal">
                      {data.overview}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <Link href="#">
                    <div className="bg-primary hidden sm:block py-3 px-6 rounded-md max-w-fit text-lg md:text-xl hover:bg-transparent hover:border-2 transition-colors">
                      Watch Trailer
                    </div>
                    <div className="bg-primary py-3 visible sm:hidden px-6 rounded-md max-w-fit text-lg md:text-xl hover:bg-transparent hover:border-2 transition-colors">
                      <BsEyeFill></BsEyeFill>
                    </div>
                  </Link>
                  <Link href="#">
                    <div className="bg-transparent hidden sm:block border-2 py-3 px-6 rounded-md max-w-fit text-lg md:text-xl hover:bg-primary transition-colors hover:border-none">
                      Add to Watchlist
                    </div>
                    <div className="bg-transparent border-2 visible sm:hidden py-3 px-6 rounded-md max-w-fit text-lg md:text-xl hover:bg-primary transition-colors hover:border-none">
                      <BsBookmarkPlusFill></BsBookmarkPlusFill>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container p-8 mt-5 mx-auto md:p-0 lg:px-12 lg:py-8">
        <div className="mb-8">
          <div className="flex gap-4 mb-8 overflow-auto">
            <Link href="#">
              <div className="bg-primary py-1 px-4 rounded-full text-white max-w-fit text-lg md:text-xl transition-colors">
                Overview
              </div>
            </Link>
            <Link href="#">
              <div className="bg-transparent py-1 px-4 max-w-fit text-lg md:text-xl transition-colors hover:text-primary">
                Characters
              </div>
            </Link>
            <Link href="#">
              <div className="bg-transparent py-1 px-4 max-w-fit text-lg md:text-xl transition-colors hover:text-primary">
                Review
              </div>
            </Link>
          </div>

          <div className="flex items-center mb-3 gap-4">
            <h1 className="text-2xl md:text-3xl font-bold">Synopsis</h1>
            <div className="flex-grow h-0.5 bg-gray-300"></div>
          </div>
          <p className="text-lg mb-3 font">{data.overview}</p>
        </div>
        <div>
          <div className="flex items-center mb-3 gap-4">
            <h1 className="text-2xl md:text-3xl font-bold">Movie Info</h1>
            <div className="flex-grow h-0.5 bg-gray-300"></div>
          </div>
          <div className="text-lg md:text-xl mb-3">
            <h1>
              <span className="font-semibold">Status: </span>
              {data.status}
            </h1>
            <h1>
              <span className="font-semibold">Original Language: </span>
              {formatLanguage(data.original_language)}
            </h1>
            <p>
              <span className="font-semibold">Release Date: </span>
              {formatReadableDate(data.release_date)}
            </p>
            <p>
              <span className="font-semibold">Budget: </span>
              {formatReadableNumber(data.budget)}
            </p>
            <p>
              <span className="font-semibold">Revenue: </span>
              {formatReadableNumber(data.revenue)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
