import { FaPlay } from "react-icons/fa";

import React from "react";

export default function Navbar() {
  return (
    <>
      <header className="w-full bg-white py-3 shadow-md">
        <nav className="flex container gap-3 px-3 sm:px-0 items-center mx-auto">
          <div className="bg-primary py-3 px-6 rounded-xl max-w-fit">
            <FaPlay className="text-2xl md:text-4xl text-white" />
          </div>
          <div className="bg-white ml-auto sm:mx-auto border-2 border-stone-300 rounded-sm p-2 md:p-3 sm:w-[26rem] hover:border-primary transition-colors">
            <input
              type="text"
              className="w-full focus:outline-none placeholder:text-xl placeholder:md:text-2xl placeholder:font-medium placeholder:text-zinc-400"
              placeholder="search movie"
            ></input>
          </div>
        </nav>
      </header>
    </>
  );
}
