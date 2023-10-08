"use client";
import Image from "next/image";
import Link from "next/link";
import { BiSolidDownload } from "react-icons/bi";
import { products } from "@/app/config";

export default function ProductItem({ params }) {
  return (
    <>
      <main className="flex min-h-[80vh] flex-col w-full p-5 bg-white">
        <div className="flex flex-col lg:flex-row space-x-5 p-5 bg-stone-100 rounded-lg">
          <Image src="/photos/about.webp" className="rounded-lg" width={500} height={1000} alt="" />
          <div className="flex flex-col">
            <h1 className="text-5xl font-bold mb-5">Hello</h1>
            <p></p>
              <Link class="inline-flex text-black hover:text-white hover:bg-emerald-600" href="#">
                <span class="h-12 flex items-center justify-center uppercase font-semibold px-8 border border-black transition duration-300 ease-in-out">
                  Завантажити прайс-лист
                </span>
                <span class="h-12 w-12 flex-shrink-0 flex items-center justify-center border border-l-0 border-black transition duration-300 ease-in-out">
                  <BiSolidDownload size="1.5em" />
                </span>
              </Link>
          </div>
        </div>
      </main>
    </>
  );
}
