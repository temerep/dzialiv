import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const HomeCard = ({ title, categories, img }) => {
  return (
    <>
      <Link href="#" class="flex flex-col items-center bg-white border-2 border-stone-300 rounded-xl duration-200 drop-shadow-lg md:hover:drop-shadow-none md:max-w-lg">
        <div class="flex flex-col items-start justify-start p-3">
          <Image width="500" height="500" className="w-[320px] h-[150px] object-cover rounded-lg" src={img} alt=""/>
          <div className="flex items-center space-x-2 my-5">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 break-all">{title}</h1>
          </div>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 text-emerald-600">
            {categories?.map((item) => {
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
