import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-3 mt-5 shadow-md bg-black">
      <div className="flex flex-col md:flex-row justify-between container gap-3 p-6 md:p-0 my-4 sm:px-0 text-white mx-auto">
        <div className="basis-1/2">
          <div className="bg-primary py-3 px-6 rounded-xl max-w-fit mb-4">
            <FaPlay className="text-2xl md:text-4xl text-white" />
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard.printing and
            typesetting industry. Lorem Ipsum has been the industrys standard
          </p>
        </div>

        <div className=" basis-1/4 me-auto">
          <ul className="flex flex-col justify-between h-full">
            {["Tentang Kami", "Blog", "Layanan", "Karir", "Pusat Media"].map(
              (page) => (
                <li key={page}>
                  <Link
                    className="hover:text-primary transition-colors"
                    href={`/${page}`}
                  >
                    {page}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="basis-1/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          laboriosam minus quae quidem facilis consequatur fuga consequuntur
          perferendis optio quos.
        </div>
      </div>
    </footer>
  );
}
