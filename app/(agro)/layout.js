"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { subcategories, services, products } from "../config";

export default function ProductLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      <aside className="hidden sm:block sticky overflow-hidden left-0 top-34 w-96 bg-white border-r border-stone-300">
        <div className="flex flex-col">
          <button className="text-white bg-emerald-700">
            <Link href="/products">
              <div className="flex items-center justify-between h-12 px-3 text-xl font-bold">
                <span className="truncate">Продукція</span>
              </div>
            </Link>
          </button>
          {subcategories.map((el) => {
            return (
              <>
                <button className="group border-b border-stone-300 bg-white focus:outline-none">
                  <div className="flex items-center justify-between h-12 px-3 font-semibold hover:bg-stone-200 group-focus:bg-stone-200">
                    <span className="truncate">{el.name}</span>
                    <svg className="h-5 w-5 duration-300 group-focus:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="max-h-0 overflow-hidden duration-300 group-focus:max-h-full">
                    {products
                      .filter((item) => item.subcategory_id == el.link)
                      .map((itm) => {
                        return (
                          <>
                            <Link className="flex items-center h-8 px-4 text-sm hover:bg-stone-200" href={"/products/" + el.link + "/" + itm.link}>
                              {itm.name}
                            </Link>
                          </>
                        );
                      })}
                  </div>
                </button>
              </>
            );
          })}

          <button className="text-white bg-emerald-700">
            <Link href="/services">
              <div className="flex items-center justify-between h-12 px-3 text-xl font-bold">
                <span className="truncate">Послуги</span>
              </div>
            </Link>
          </button>
          {services.map((el) => {
            return (
              <>
                <Link href={"/services/" + el.link}>
                <button className="group border-b border-stone-300 bg-white focus:outline-none">
                  <div className="flex items-center justify-between h-12 px-3 font-semibold hover:bg-stone-200 group-focus:bg-stone-200">
                    <span className="truncate">{el.name}</span>
                  </div>
                </button>
                </Link>
              </>
            );
          })}
        </div>
      </aside>
      {children}
    </>
  );
}
