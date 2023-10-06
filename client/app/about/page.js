import Image from "next/image";
export default function About() {
  return (
    <>
      <section className="p-5 py-12 min-[1080px]:p-20 bg-stone-100 w-full" id="about">
        <div className="max-w-7xl mx-auto md:px-6">
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <div className="lg:max-w-md">
                <div className="px-4 pl-4 mb-6 border-l-4 border-emerald-500">
                  <span className="text-sm uppercase text-gray-500">Хто ми?</span>
                  <h1 className="mt-2 text-3xl font-black md:text-5xl text-emerald-600">Про компанію</h1>
                </div>
                <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                  Ми - фермерське господарство, яке було засновано більше 17 років тому у с. Камʼяногірка, Вінницьої області. За цей час ми стали лідерами у вирощуванні та продажу зернових, овочів і
                  фруктів у регіоні. Наша місія - надавати нашим клієнтам найкращу якість продукції, дбайливо вирощену з любовʼю та повагою до природи.
                </p>
              </div>
            </div>
            <div className="w-full mb-10 lg:w-1/2 lg:mb-0">
              <div className="absolute items-center overflow-hidden w-full justify-center -mt-0 -ml-0 md:-mt-5 md:-ml-10">
                <Image src="/logo.webp" width={120} height={120} alt="" className="" />
              </div>
              <Image src="/photos/about_1.webp" width={500} height={500} alt="" className="w-full rounded-xl" draggable={false} />
            </div>
          </div>
        </div>
        <div className="max-w-7xl w-full mx-auto md:px-6 mt-24">
          <div className="flex flex-wrap w-full">
            <div className="px-4 mb-10 w-full lg:mb-0">
              <div className="w-full mx-auto">
              <div className="pl-4 mb-6 border-l-4 border-emerald-500">
                  <h1 className="mt-2 text-3xl font-black md:text-5xl text-emerald-600">Наша команда</h1>
              </div>
              <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                Наш успіх - це результат невтомної роботи та пристрасного підходу нашої команди. Ось обличя, які стоять за успішним фермерським господарством «Дзялів»:
                </p>
                <div className="grid gap-12 items-center md:grid-cols-3">
                  <div className="space-y-4 text-center">
                    <Image
                      className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64 lg:hover:h-80 duration-500"
                      src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg"
                      loading="lazy"
                      width={600}
                      height={600}
                      alt=""
                    />
                    <div>
                      <h4 className="text-2xl">Іванов Іван</h4>
                      <span className="block text-sm text-gray-500">керівник відділу зернових</span>
                    </div>
                  </div>
                  <div className="space-y-4 text-center">
                    <Image
                      className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-64 lg:hover:h-80 duration-500"
                      src="https://tailus.io/sources/blocks/classic/preview/images/man.jpg"
                      loading="lazy"
                      width={600}
                      height={600}
                      alt=""
                    />
                    <div>
                      <h4 className="text-2xl">Іванов Іван</h4>
                      <span className="block text-sm text-gray-500">керівник відділу овочів і фруктів</span>
                    </div>
                  </div>
                  <div className="space-y-4 text-center">
                    <Image
                      className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64 lg:hover:h-80 duration-500"
                      src="https://tailus.io/sources/blocks/classic/preview/images/woman.jpg"
                      loading="lazy"
                      width={600}
                      height={600}
                      alt=""
                    />
                    <div>
                      <h4 className="text-2xl">Іванов Іван</h4>
                      <span className="block text-sm text-gray-500">Власник</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
