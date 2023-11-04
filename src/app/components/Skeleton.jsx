import React from "react";
import Image from "next/image";

const CardSkeleton = () => {
  return (
    <div className="rounded-md -z-10 animate-pulse">
      <Image
        className="rounded-md"
        src="https://placehold.co/640x960/png"
        alt="Image Placeholder"
        width="500"
        height="500"
        priority
      />
      <div className="px-2 pb-2 mt-2">
        <div className="skeleton-title bg-zinc-200 h-6 mb-2"></div>
        <div className="skeleton-genre bg-zinc-200 h-4"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
