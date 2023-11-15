import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa";

export default function Footer() {
  const today = new Date();
  return (
    <footer className="w-full py-3 mt-5 shadow-md bg-black md:px-12">
      <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-between container gap-6 p-6 md:p-0 xl:px-12 2xl:px-0 my-4 sm:px-0 text-white mx-auto">
        <div className="basis-3/5 lg:ps-8 md:pe-16">
          <div className="bg-primary py-3 px-6 rounded-xl max-w-fit mb-4">
            <Link href="/">
              <FaPlay className="text-2xl md:text-4xl text-white" />
            </Link>
          </div>
          <p className="xl:text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard.printing and
            typesetting industry. Lorem Ipsum has been the industrys standard
          </p>
        </div>

        <div className=" basis-1/5 me-auto">
          <ul className="flex flex-col justify-between h-full">
            {["Tentang Kami", "Blog", "Layanan", "Karir", "Pusat Media"].map(
              (page) => (
                <li key={page}>
                  <Link
                    className="hover:text-primary transition-colors"
                    href="/"
                  >
                    {page}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="basis-2/4">
          <h3 className="font-semibold mb-1">Download</h3>
          <div className="flex gap-2 mb-4 items-center">
            <Link href="https://play.google.com/store/apps">
              <Image
                src="/google-play-badge.svg"
                alt="ps-badge"
                width={130}
                height={130}
              />
            </Link>
            <Link href="https://www.apple.com/id/app-store/">
              <Image
                src="/app-store-badge.svg"
                alt="as-badge"
                width={130}
                height={130}
              />
            </Link>
          </div>
          <h3 className="font-semibold mb-1">Sosial Media</h3>
          <div className="flex flex-wrap gap-2 mb-4 items-center">
            <Link href="https://www.facebook.com/">
              <Image
                src="/facebook.svg"
                alt="facebook"
                width={40}
                height={40}
              />
            </Link>
            <Link href="https://twitter.com/">
              <Image src="/path.svg" alt="path" width={40} height={40} />
            </Link>
            <Link href="https://www.instagram.com/">
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={45}
                height={45}
              />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p className="text-white text-lg text-center border-t-2 pt-4 mt-8">
          &copy; {today.getFullYear()} Movie DB App &#40;{" "}
          <Link
            href={"https://github.com/miqbalps/movie-db-app"}
            className="hover:text-primary transition-colors"
          >
            @miqbalps
          </Link>{" "}
          &#41;. All Right Reserved.
        </p>
      </div>
    </footer>
  );
}
