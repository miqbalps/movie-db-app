import React, { useState, useEffect } from "react";
import { ReviewCard } from "@/app/components/Card";
import CardSkeleton from "@/app/components/Skeleton";

const Review = (reviews) => {
  const data = reviews.reviews;

  return (
    <div className="lg:px-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Reviews</h1>

      {data.results.length === 0 ? (
        <div className="text-lg">
          We don&#39;t have any reviews for this movie yet. Come back later.
        </div>
      ) : (
        data?.results?.map((reviews, index) => (
          <React.Fragment key={index}>
            <ReviewCard reviews={reviews} />
          </React.Fragment>
        ))
      )}
    </div>
  );
};

export default Review;
