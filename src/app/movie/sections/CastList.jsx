import React, { useState, useEffect } from "react";
import { CastCard } from "@/app/components/Card";
import CardSkeleton from "@/app/components/Skeleton";

const CastList = (castList) => {
  const data = castList.castList;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  return (
    <div className="lg:px-8">
      <h1 className="flex gap-1 text-2xl md:text-3xl font-bold mb-4">
        Cast
        <span className="text-secondary font-normal">
          {!data || isLoading ? "0" : data.cast.length}
        </span>
      </h1>
      <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 justify-center sm:justify-around gap-3">
        {!data || isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <React.Fragment key={index}>
                <CardSkeleton />
              </React.Fragment>
            ))
          : data?.cast?.map((data) => (
              <React.Fragment key={data.id}>
                <CastCard cast={data} />
              </React.Fragment>
            ))}
      </div>
    </div>
  );
};

export default CastList;
