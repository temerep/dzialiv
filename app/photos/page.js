"use client";
import Image from "next/image";
import { useState } from "react";

export default function Photo() {
  const [selectedImage, setSelectedImage] = useState(null);
  const tmp_img = [
    { name: "Пшениця", src: "/photos/about_1.webp" },
    { name: "Пшениця", src: "/photos/about_1.webp" },
    { name: "Пшениця", src: "/photos/about_1.webp" },
    { name: "Пшениця", src: "/photos/about_1.webp" },
    { name: "Пшениця", src: "/photos/about_1.webp" },
    { name: "Пшениця", src: "/photos/about_1.webp" },
    { name: "Пшениця", src: "/photos/about_1.webp" },
    { name: "Пшениця", src: "/photos/about_1.webp" },
    { name: "Пшениця", src: "/photos/about_1.webp" },
    { name: "Пшениця", src: "/photos/about_1.webp" },
    { name: "Пшениця", src: "/photos/about_1.webp" },
    { name: "Пшениця", src: "/photos/about_1.webp" },
    { name: "Пшениця", src: "/photos/about_1.webp" },
    { name: "Пшениця", src: "/photos/about_1.webp" },
    { name: "Пшениця", src: "/photos/about_1.webp" },
    { name: "Пшениця", src: "/photos/about_1.webp" },
  ];


  let img = Array.from({ length: Math.ceil(tmp_img.length / 3) }, (_, index) => tmp_img.slice(index * 3, (index + 1) * 3));
  return (
    <>
     <div className="bg-stone-100 py-6 sm:py-8 lg:py-12 w-full">
    <div className="px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Галерея</h2>
                <p className="hidden max-w-screen-lg text-gray-500 md:block">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6 xl:gap-8">
            <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <Image fill src={tmp_img[0].src} loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </a>
            <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 md:col-span-2">
                <Image fill src={tmp_img[0].src} loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </a>
            <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <Image fill src={tmp_img[0].src} loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </a>
            <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <Image fill src={tmp_img[0].src} loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </a>
        </div>
    </div>
</div>
    </>
  );
}
