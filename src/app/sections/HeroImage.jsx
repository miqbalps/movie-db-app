"use client";
import { imageUrl } from "@/lib/api";
import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const HeroImage = ({ discover = [], hero }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((currentIndex - 1 + discover.length) % discover.length);
  const nextSlide = () => setCurrentIndex((currentIndex + 1) % discover.length);

  console.log(discover);
  console.log(currentIndex);
  return (
    <div className={"h-[300px] md:h-[424px] w-full m-auto"}>
      <div className="bg-gradient-to-b carousel h-full w-full">
        <div
          id={`item${currentIndex + 1}`}
          style={{
            backgroundImage: `url(${imageUrl}${discover[currentIndex]?.backdrop_path})`,
          }}
          className="ease-in-out duration-700 delay-100 carousel-item justify-end h-full flex flex-col w-full bg-center bg-cover bg-no-repeat"
        >
          <div className="px-5 flex items-start align-middle bg-black justify-between w-full h-full bg-opacity-30 text-secondary">
            <button className="hover:text-primary my-auto" onClick={prevSlide}>
              <HiChevronLeft size={50} />
            </button>
            <button className="hover:text-primary my-auto" onClick={nextSlide}>
              <HiChevronRight size={50} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
