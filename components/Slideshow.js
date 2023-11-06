"use client"
import { useEffect, useState } from "react";
import { host } from "@/http";
import { Zoom } from "react-slideshow-image";
import Link from "next/link";
import "react-slideshow-image/dist/styles.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs"
import Image from "next/image";
import { observer } from 'mobx-react-lite';
import { useLocalizationStore } from "@/app/provider";
import localize from "@/app/localize";

const Slideshow = observer(() => {
  const {locale} = useLocalizationStore();
  const [slider, setSlider] = useState(null);

  useEffect(() => {
    host
      .get("api/slider")
      .then((response) => {
        setSlider(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const zoomInProperties = {
    scale: 1,
    duration: 3000,
    transitionDuration: 300,
    infinite: true,
    prevArrow: (
      <div className="ml-1 sm:ml-10 top-40 md:top-72">
        <IoIosArrowBack size="1.5em" color="#fff" className="cursor-pointer" />
      </div>
    ),
    nextArrow: (
      <div className="mr-1 sm:mr-10 top-40 md:top-72">
        <IoIosArrowForward size="1.5em" color="#fff" className="cursor-pointer" />
      </div>
    ),
  };
  return (
    <>
      <div className="w-full h-full">
        <Zoom {...zoomInProperties}>
          {slider?.map((each, index) => (
            <div key={index} className="flex justify-center md:justify-start items-center w-screen h-[50vh] sm:h-[70vh] relative">
              <Image fill objectFit="cover" src={each.img} loading="lazy" alt="" />
              <div className="absolute w-full h-[50vh] sm:h-[70vh] bg-[linear-gradient(180deg,rgba(40,40,40,0.3)_0%,rgba(40,40,40,0.5)_50%,rgba(40,40,40,0.6)_100%)]"></div>
              <div className="flex flex-col space-y-4 p-12 sm:p-24 md:p-48 ">
                <h1 className="z-10 md:text-6xl text-3xl font-black text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{localize(each.name, locale.current)}</h1>
                <p className="z-10 md:text-2xl text-xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{localize(each.desc, locale.current)}</p>
                <Link href={each.link}>
                <button className="bg-emerald-600 max-w-min inline-flex items-center py-2 px-3 border-2 -skew-x-12 border-emerald-500 rounded-lg drop-shadow-xl hover:bg-emerald-300 cursor-pointer select-none">
                  <span className="flex items-center text-white text-lg font-bold px-2 py-1.5 skew-x-12">
                    <p className="mr-2 whitespace-nowrap">{localize("Детальніше", locale.current)}</p>
                    <IoIosArrowForward size="1em" color="#fff" className="cursor-pointer" />
                  </span>
                </button>
                </Link>
              </div>
            </div>
          ))}
        </Zoom>
      </div>
    </>
  );
});

export { Slideshow };
