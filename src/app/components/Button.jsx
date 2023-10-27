import React from "react";

export const ButtonCategory = ({ name, onClick }) => {
  return (
    <div className="acive:bg-secondary py-0 hover:text-primary hover:rounded-full active:rounded-full active:text-white transition-colors">
      <button onClick={onClick}>{name}</button>
    </div>
  );
};
