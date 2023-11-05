import React, { useState, useEffect } from "react";
import { ReviewCard } from "@/app/components/Card";
import CardSkeleton from "@/app/components/Skeleton";

const Review = (reviews) => {
  const data = reviews.reviews;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  return (
    <div className="lg:px-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Reviews</h1>
      <div>
        {!data || isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <React.Fragment key={index}>
                <CardSkeleton />
              </React.Fragment>
            ))
          : data?.results?.map((reviews, index) => (
              <React.Fragment key={index}>
                <ReviewCard reviews={reviews} />
              </React.Fragment>
            ))}
      </div>
    </div>
  );
};

export default Review;
