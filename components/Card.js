"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";
import { CiCircleMore } from "react-icons/ci";
import { AiOutlineRight } from "react-icons/ai";

const Card = ({ title, source, badge, desc, text, price, categories, img, btn }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <div className="relative mx-auto w-full max-w-sm cursor-pointer bg-stone-200">
        <div
          className="relative inline-block w-full transform transition-transform duration-300 ease-in-out"
        >
          <div className="rounded-lg p-3 md:p-5">
            <div className="relative flex h-60 justify-center overflow-hidden rounded-lg">
              <div className="w-full min-w-[50vw] md:min-w-max transform transition-transform duration-500 ease-in-out hover:scale-110">
                <Image fill objectFit="cover" src={img} alt="" />
              </div>
              {badge && <span className="absolute left-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white">Новинка</span>}
            </div>

            <div className="">
              <div className="mt-4">
                <div className="flex items-center">
                  <div className="relative">
                    {title && <h2 className="text-base font-bold text-stone-800 md:text-3xl break-words">{title}</h2>}
                    {desc && <p className="line-clamp-3 mt-2 text-md w-full text-stone-400">{desc}</p>}
                  </div>
                </div>
              </div>
              {text && <div className="mt-2 border-t border-gray-200 pt-3">{text}</div>}

              <div className="mt-2 border-t border-gray-200 pb-3 pt-3">
                <button
                  className="inline-flex items-center justify-center uppercase text-sm font-bold bg-emerald-600 text-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  onClick={() => {
                    if(source){
                      if (pathname == "/") {
                        router.push("/" + source);
                      } else {
                        router.push(pathname + "/" + source);
                      }
                    }
                  }}
                >
                  <span>{btn}</span>
                  <AiOutlineRight size="1em" className="text-white pl-1"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { Card };
