import React from "react";
import {
  formatReadableDate,
  formatReadableNumber,
  formatLanguage,
} from "@/app/utils/formatters";

const Overview = (overview) => {
  const data = overview.overview;

  return (
    <div className="lg:px-8">
      <div className="mb-8 synopsis">
        <div className="flex items-center mb-3 gap-4">
          <h1 className="text-2xl md:text-3xl font-bold">Synopsis</h1>
          <div className="flex-grow h-0.5 bg-gray-300"></div>
        </div>
        <p className="text-lg xl:text-xl mb-3 font">{data.overview}</p>
      </div>
      <div className="movie-info">
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
  );
};

export default Overview;
