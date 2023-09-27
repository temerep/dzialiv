import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

const Slideshow = () => {
  const images = [
    { img: "/photos/slider.webp", title: "Послуги сушки, зважування, навантажувача", desc: "Ми використовуємо найкращу техніку при наданні послуг."},
    { img: "/photos/slider1.webp", title: "Пелети з соломи для будь-яких цілей", desc: "Обирайте якість за вигідну ціну. Паливні, кормові, підстилочні пелети."},
    { img: "/photos/slider3.webp", title: "Свіжа та cмачна цибуля до Ваших страв", desc: "Додайте неповторний смак до своїх страв з нашою свіжою цибулею."}];

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
    <div className="w-full h-full">
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} className="flex justify-center md:justify-start items-center w-screen h-[50vh] sm:h-[70vh] relative">
            <Image fill objectFit="cover" src={each.img} loading="lazy" alt="" />
            <div className="absolute w-full h-[50vh] sm:h-[70vh] bg-[linear-gradient(180deg,rgba(40,40,40,0.3)_0%,rgba(40,40,40,0.5)_50%,rgba(40,40,40,0.6)_100%)]"></div>
            <div className="flex flex-col space-y-4 p-12 sm:p-24 md:p-48 ">
            <h1 className="z-10 md:text-6xl text-3xl font-black text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{each.title}</h1>
            <p className="z-10 md:text-2xl text-xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{each.desc}</p>
            </div>
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export { Slideshow };
