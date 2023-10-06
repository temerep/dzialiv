import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const Card = ({ title, badge, desc, text, price, categories, img }) => {
  return (
    <>
      <div className="relative mx-auto w-full max-w-sm pt-6">
        <a href="#" className="relative inline-block w-full transform transition-transform duration-300 ease-in-out">
          <div className="rounded-lg">
            <div className="relative flex h-60 justify-center overflow-hidden rounded-lg">
              <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                <Image fill objectFit="cover" src={img} alt="" />
              </div>
              {badge && <span className="absolute left-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white">Новинка</span>}
            </div>

            <div className="">
              <div className="mt-4 grid grid-cols-2">
                <div className="flex items-center">
                  <div className="relative">
                    {title && <h2 className="line-clamp-1 text-base font-bold text-gray-800 md:text-2xl">{title}</h2>}
                    {desc && <p className="mt-2 line-clamp-1 text-sm text-gray-800">{desc}</p>}
                  </div>
                </div>
                {price && (
                  <div className="flex items-center justify-end">
                    <p className="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                      <span className="text-sm uppercase"> $ </span>
                      <span className="text-lg">{price}</span>/т
                    </p>
                  </div>
                )}
              </div>
              {text && <div className="mt-2 border-t border-gray-200 pt-3">{text}</div>}

              {categories && (
                <div className="mt-2 grid grid-cols-2 grid-rows-2 gap-4 border-b border-t border-gray-200 pb-3 pt-3">
                  {categories?.map((item, idx) => {
                    return (
                      <>
                        <p key={idx} className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                          <svg className="mr-3 inline-block h-5 w-5 fill-current text-gray-800 xl:h-4 xl:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path d="M570.53,242,512,190.75V48a16,16,0,0,0-16-16H400a16,16,0,0,0-16,16V78.75L298.53,4a16,16,0,0,0-21.06,0L5.47,242a16,16,0,0,0,21.07,24.09L64,233.27V464a48.05,48.05,0,0,0,48,48H464a48.05,48.05,0,0,0,48-48V233.27l37.46,32.79A16,16,0,0,0,570.53,242ZM480,464a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V205.27l192-168,192,168Zm0-301.25-64-56V64h64ZM208,218.67V325.34A26.75,26.75,0,0,0,234.66,352H341.3A26.76,26.76,0,0,0,368,325.34V218.67A26.75,26.75,0,0,0,341.3,192H234.66A26.74,26.74,0,0,0,208,218.67ZM240,224h96v96H240Z"></path>
                          </svg>
                          <span className="xl:mt-0">{item}</span>
                        </p>
                      </>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
export { Card };
