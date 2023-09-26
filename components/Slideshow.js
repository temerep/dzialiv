import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

const Slideshow = () => {
  const images = [
    { img: "/photos/slider.jpg", title: "Послуги сушки зерна та зважування", desc: "Тільки найкраща техніка для найвищої якості вашого продукту"},
    { img: "/photos/slider1.jpg", title: "Смачні та Поживні Зернові", desc: "Відкрийте світ смаку та користі з нашим вибором найсмачніших та найпоживніших зернових культур. Обирайте якість для здорового способу життя"},
    { img: "/photos/slider3.jpg", title: "Свіжа та Смачна Цибуля до Ваших Страв", desc: "Додайте неповторний смак до своїх страв з нашою свіжою цибулею. Оберіть найкраще для особливих страв та насолоджуйтеся вишуканим смаком."}];

  const zoomInProperties = {
    scale: 1,
    duration: 3000,
    transitionDuration: 300,
    infinite: true,
    prevArrow: (
      <div className="ml-10 top-40 md:top-72">
        <IoIosArrowBack size="1.5em" color="#fff" className="cursor-pointer" />
      </div>
    ),
    nextArrow: (
      <div className="mr-10 top-40 md:top-72">
        <IoIosArrowForward size="1.5em" color="#fff" className="cursor-pointer" />
      </div>
    ),
  };
  return (
    <div className="w-full h-full">
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} className="flex justify-center md:justify-start items-center w-screen h-[70vh] relative">
            <Image fill objectFit="cover" src={each.img} loading="lazy" alt="" />
            <div className="absolute w-full h-[70vh] bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_6.82%,rgba(0,0,0,0.00)_81.44%)]"></div>
            <div className="flex flex-col space-y-4 p-24 md:p-48 ">
            <h1 className="z-10 md:text-6xl text-4xl font-black text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{each.title}</h1>
            <p className="z-10 md:text-2xl text-xl font-bold text-white">{each.desc}</p>
            </div>
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export { Slideshow };
