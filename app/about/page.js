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
                    фруктів у регіоні. Наша місія - надавати нашим клієнтам найкращу якість продукції, дбайливо вирощену з любов'ю та повагою до природи.
                    Ми - фермерське господарство, яке було засновано більше 17 років тому у с. Камʼяногірка, Вінницьої області. За цей час ми стали лідерами у вирощуванні та продажу зернових, овочів і
                    фруктів у регіоні. Наша місія - надавати нашим клієнтам найкращу якість продукції, дбайливо вирощену з любов'ю та повагою до природи.
                    
                  </p>
                </div>
              </div>
              <div className="w-full mb-10 lg:w-1/2 lg:mb-0">
              <Image src="/photos/about_1.jpg" width={500} height={500} alt="" className="w-full rounded-xl" draggable={false} />
              <div className="grid grid-cols-2 mt-5 gap-5">
              <Image src="/photos/about_2.jpg" width={500} height={500} alt="" className="w-full rounded-xl" draggable={false} />
              <Image src="/photos/about_3.jpg" width={500} height={500} alt="" className="w-full rounded-xl" draggable={false} />
              </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto md:px-6 mt-24">
            <div className="flex flex-wrap">
              <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                <div className="lg:max-w-md">
                  <div className="px-4 pl-4 mb-6 border-l-4 border-emerald-500">
                    <h1 className="mt-2 text-3xl font-black md:text-5xl text-emerald-600">Наша команда</h1>
                  </div>
                  <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                    Ми - фермерське господарство, яке було засновано більше 17 років тому у с. Камʼяногірка, Вінницьої області. За цей час ми стали лідерами у вирощуванні та продажу зернових, овочів і
                    фруктів у регіоні. Наша місія - надавати нашим клієнтам найкращу якість продукції, дбайливо вирощену з любов'ю та повагою до природи.
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
