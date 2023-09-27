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

  const openModal = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  let img = Array.from({ length: Math.ceil(tmp_img.length / 3) }, (_, index) => tmp_img.slice(index * 3, (index + 1) * 3));
  return (
    <>
      <div className="fixed z-50 p-5 overflow-x-hidden overflow-y-auto md:inset-0 max-w-full" style={{ display: selectedImage ? "block" : "none" }}>
        <div className="w-full max-w-lg">
          <div className="relative bg-white rounded-lg shadow">
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
              data-modal-hide="popup-modal"
            >
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-15 rounded-xl">{selectedImage && <Image width={100} height={100} src={selectedImage} alt="Збільшена фотографія" className="max-w-full max-h-screen" />}</div>
          </div>
        </div>
      </div>
      <section className="flex w-full items-center bg-gray-100 py-16">
        <div className="p-4 mx-auto max-w-7xl">
          <h2 className="pb-5 font-bold text-center text-green-800 text-5xl">Фотографії</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {img.map((el) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="grid gap-4">
                  {el.map((item) => {
                    return (
                      <div key={item.src} onClick={() => openModal(item.src)}>
                        <img className="h-auto max-w-full rounded-lg" src={item.src} alt="" />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
