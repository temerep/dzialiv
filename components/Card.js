"use client";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { CiCircleMore } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa";

const Card = ({ title, source, badge, desc, text, price, categories, img }) => {
  const router = useRouter();
  const pathname = usePathname();

  var a = {
    Ё: "YO",
    Й: "I",
    Ц: "TS",
    У: "U",
    К: "K",
    Е: "E",
    Н: "N",
    Г: "G",
    Ш: "SH",
    Щ: "SCH",
    З: "Z",
    Х: "H",
    Ъ: "'",
    ё: "yo",
    й: "i",
    ц: "ts",
    у: "u",
    к: "k",
    е: "e",
    н: "n",
    г: "g",
    ш: "sh",
    щ: "sch",
    з: "z",
    х: "h",
    ъ: "'",
    Ф: "F",
    Ы: "I",
    В: "V",
    А: "A",
    П: "P",
    Р: "R",
    О: "O",
    Л: "L",
    Д: "D",
    Ж: "ZH",
    Э: "E",
    ф: "f",
    ы: "i",
    в: "v",
    а: "a",
    п: "p",
    р: "r",
    о: "o",
    л: "l",
    д: "d",
    ж: "zh",
    э: "e",
    Я: "Ya",
    Ч: "CH",
    С: "S",
    М: "M",
    И: "I",
    Т: "T",
    Ь: "'",
    Б: "B",
    Ю: "YU",
    я: "ya",
    ч: "ch",
    с: "s",
    м: "m",
    и: "i",
    т: "t",
    ь: "'",
    б: "b",
    ю: "yu",
  };

  function transliterate(word) {
    return word
      .split("")
      .map(function (char) {
        return a[char] || char;
      })
      .join("");
  }

  return (
    <>
      <div className="relative mx-auto w-full max-w-sm cursor-pointer bg-stone-200">
        <div
          className="relative inline-block w-full transform transition-transform duration-300 ease-in-out"
          onClick={() => {
            source ? router.push(pathname + source) : "";
          }}
        >
          <div className="rounded-lg p-5">
            <div className="relative flex h-60 justify-center overflow-hidden rounded-lg">
              <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                <Image fill objectFit="cover" src={img} alt="" />
              </div>
              {badge && <span className="absolute left-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white">Новинка</span>}
            </div>

            <div className="">
              <div className="mt-4">
                <div className="flex items-center">
                  <div className="relative">
                    {title && <h2 className="text-base font-bold text-stone-800 md:text-2xl">{title}</h2>}
                    {desc && <p className="line-clamp-3 lg:active:line-clamp-none mt-2 text-md w-full text-stone-400">{desc}</p>}
                  </div>
                </div>
              </div>
              {text && <div className="mt-2 border-t border-gray-200 pt-3">{text}</div>}

              <div className="mt-2 grid grid-cols-1 lg:grid-cols-2 gap-4 border-t border-gray-200 pb-3 pt-3">
                <p className="flex items-center text-stone-800 xl:flex-row xl:items-center">
                  <CiCircleMore size="1.5em" className=" mr-2" />
                  <span className="xl:mt-0">Детальніше</span>
                </p>
                <button className="inline-flex items-center justify-center uppercase text-sm font-bold bg-emerald-600 text-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline">
                  <span>Прайс лист</span>
                  <FaDollarSign size="1em" className="text-white pl-1"/>
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
