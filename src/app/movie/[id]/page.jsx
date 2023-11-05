"use client";
import { imageUrl } from "@/lib/api";
import { useParams } from "next/navigation";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useGetDetailMovie, useGetReviews } from "@/hooks/useMovies";
import { useGetCredits } from "@/hooks/useMovies";
import { BsBookmarkPlusFill, BsEyeFill, BsStarFill } from "react-icons/bs";
import Navbar from "@/app/components/Navbar";
import Overview from "@/app/movie/sections/Overview";
import CastList from "@/app/movie/sections/CastList";
import Review from "@/app/movie/sections/Review";

export default function Page() {
  const params = useParams();
  const detail = useGetDetailMovie(params.id);
  const credits = useGetCredits(params.id);
  const reviews = useGetReviews(params.id);
  const [menu, setMenu] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (credits) {
      setIsLoading(false);
    }
  }, [credits]);

  return (
    <>
      <Navbar />
      <div className="h-[300px] md:h-[424px] w-full m-auto">
        <div className="bg-gradient-to-b carousel h-full w-full">
          <div
            style={{
              backgroundImage:
                detail && detail.backdrop_path
                  ? `url(${imageUrl + detail.backdrop_path})`
                  : "url(https://placehold.co/3500x1969)",
            }}
            className="ease-in-out duration-700 delay-100 carousel-item justify-end h-full flex flex-col w-full bg-center bg-cover bg-no-repeat"
          >
            <div className="overlay top-0 left-0 w-full h-full flex bg-opacity-30 bg-black">
              <div className="overlay-content text-white justify-center container p-6 mx-auto sm:px-12 lg:px-0 xl:px-12 lg:py-8 flex flex-col gap-4 md:gap-6">
                <div className="overview md:w-3/4 lg:px-8">
                  <h1 className="text-3xl md:text-4xl font-bold truncate w-full">
                    {detail.original_title}
                  </h1>
                  <h2 className="flex items-center gap-2">
                    <div className="md:text-xl text-2xl text-yellow-400">
                      <BsStarFill></BsStarFill>
                    </div>
                    {detail.vote_average}
                  </h2>
                  <p className="line-clamp-3 md:line-clamp-5 text-base xl:text-xl">
                    {detail.overview}
                  </p>
                </div>
                <div className="flex gap-4 items-center lg:px-8">
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
      <div className="container mt-5 mx-auto p-6 sm:px-12 md:py-8 lg:px-0 xl:px-12">
        <div className="mb-8 lg:px-8">
          <div className="flex gap-4 mb-8 overflow-auto">
            <button onClick={() => setMenu(0)}>
              <div
                className={`${
                  menu === 0
                    ? "bg-primary py-1 px-4 rounded-full text-white transition-colors hover:text-white"
                    : ""
                } max-w-fit text-lg md:text-xl xl:text-2xl hover:text-primary`}
              >
                Overview
              </div>
            </button>
            <button onClick={() => setMenu(1)} disabled={!credits || isLoading}>
              <div
                className={`${
                  menu === 1
                    ? "bg-primary py-1 px-4 rounded-full text-white transition-colors hover:text-white"
                    : ""
                } ${
                  !credits || isLoading ? "cursor-not-allowed" : ""
                } max-w-fit text-lg md:text-xl xl:text-2xl hover:text-primary`}
              >
                Characters
              </div>
            </button>
            <button onClick={() => setMenu(2)} disabled={!reviews || isLoading}>
              <div
                className={`${
                  menu === 2
                    ? "bg-primary py-1 px-4 rounded-full text-white transition-colors hover:text-white"
                    : ""
                } max-w-fit text-lg md:text-xl xl:text-2xl hover:text-primary`}
              >
                Review
              </div>
            </button>
          </div>
        </div>
        {menu === 1 ? (
          <CastList castList={credits} />
        ) : menu === 2 ? (
          <Review reviews={reviews} />
        ) : (
          <Overview overview={detail} />
        )}
      </div>
    </>
  );
}
