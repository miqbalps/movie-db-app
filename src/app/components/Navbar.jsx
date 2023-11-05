import { FaPlay } from "react-icons/fa";
import Link from "next/link";
import React from "react";

export default function Navbar({ search }) {
  return (
    <>
      <header className="w-full bg-white py-3 shadow-md sticky top-0">
        <nav className="flex container gap-3 px-3 sm:px-0 md:px-14 lg:px-20 items-center justify-center md:justify-normal mx-auto">
          <Link href="/">
            <div className="bg-primary py-3 px-6 rounded-xl max-w-fit">
              <FaPlay className="text-2xl md:text-4xl text-white" />
            </div>
          </Link>
          <div className="bg-white ms-auto lg:mx-auto border-2 border-stone-300 rounded-sm p-2 md:p-3 sm:w-[26rem] hover:border-primary transition-colors">
            <input
              type="text"
              className="w-full focus:outline-none placeholder:text-xl placeholder:md:text-2xl placeholder:font-medium placeholder:text-zinc-400"
              placeholder="search movie"
              onChange={search}
              onClick={search}
            ></input>
          </div>
        </nav>
      </header>
    </>
  );
}
