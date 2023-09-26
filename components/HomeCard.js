import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const HomeCard = ({ title, categories, img, children }) => {
  return (
    <>
      <Link href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-xl drop-shadow-lg md:flex-row md:max-w-lg">
        <div class="flex flex-col justify-between p-5">
          <div className="flex items-center space-x-2 mb-5">
          {children}
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 ">{title}</h1>
          </div>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 text-emerald-600">
            {categories.map((item) => {
              return (
                <>
                <li className="flex items-center hover:text-emerald-400">
                <IoIosArrowForward size="1em" color="#30576b" />
                {item}
                </li>
                </>
              )
            })}
          </ul>
        </div>
      </Link>
    </>
  );
};
export { HomeCard };
