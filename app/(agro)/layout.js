"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { host } from "@/http";
import { useRouter, usePathname } from "next/navigation";
import { observer } from 'mobx-react-lite';
import { useLocalizationStore } from "@/app/provider";
import localize from "@/app/localize";

const ProductLayout = observer(({ children }) => {
  const {locale} = useLocalizationStore();
  const router = useRouter();
  const pathname = usePathname();

  const [products, setProducts] = useState(null);
  const [services, setServices] = useState(null);
  const [subcategories, setSubcategories] = useState(null);

  useEffect(() => {
    host
      .get("api/product")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => console.log(e.response.data.message));
  }, []);

  useEffect(() => {
    host
      .get("api/services")
      .then((response) => {
        setServices(response.data);
      })
      .catch((e) => console.log(e.response.data.message));
  }, []);

  useEffect(() => {
    host
      .get("api/subcategory")
      .then((response) => {
        setSubcategories(response.data);
      })
      .catch((e) => console.log(e.response.data.message));
  }, []);
  return (
    <>
      <aside className="hidden sm:block sticky overflow-hidden left-0 top-34 w-96 bg-white border-r border-stone-300">
        <div className="flex flex-col">
          <button className="text-white bg-emerald-700">
            <Link href="/products">
              <div className="flex items-center justify-between h-12 px-3 text-xl font-bold">
                <span className="truncate">{localize("Продукція", locale.current)}</span>
              </div>
            </Link>
          </button>
          { subcategories?.map((el) => {
            return (
              <>
                <button className="group border-b border-stone-300 bg-white focus:outline-none">
                  <div className="flex items-center justify-between h-12 px-3 font-semibold hover:bg-stone-200 group-focus:bg-stone-200">
                    <Link href={`/${el.category_id}/${el.link}`}>
                    <span className="truncate cursor-pointer hover:text-emerald-600">{localize(el.name, locale.current)}</span>
                    </Link>
                    <svg className="h-5 w-5 duration-300 group-focus:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="max-h-0 overflow-hidden duration-300 group-focus:max-h-full">
                    {products?.filter((item) => item.subcategory_id == el.link)
                      ?.map((itm) => {
                        return (
                          <>
                            <Link className="flex items-center h-8 px-4 text-sm hover:bg-stone-200" href={"/products/" + el.link + "/" + itm.link}>
                              {localize(itm.name, locale.current)}
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
                <span className="truncate">{localize("Послуги", locale.current)}</span>
              </div>
            </Link>
          </button>
          {services?.map((el) => {
            return (
              <>
                <Link href={"/services/" + el.link}>
                <button className="group border-b w-full border-stone-300 bg-white focus:outline-none">
                  <div className="flex items-center h-12 px-3 font-semibold hover:bg-stone-200 group-focus:bg-stone-200">
                    <span className="truncate">{localize(el.name, locale.current)}</span>
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
});

export default ProductLayout;