import React from "react";

export const ButtonCategory = ({ name, onClick, active }) => {
  const activeStyles = active
    ? "bg-primary text-white rounded-full hover:text-white"
    : "";

  return (
    <div
      className={`py-2 px-4 rounded-full max-w-fit text-lg md:text-xl ${activeStyles} hover:text-primary transition-colors cursor-pointer`}
      onClick={onClick}
    >
      {name}
    </div>
  );
};
