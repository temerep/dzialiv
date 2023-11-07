"use client"
import Link from "next/link";
import Image from "next/image";
import { PiGlobeSimpleBold, PiPhoneCallThin, PiPhoneCallFill } from "react-icons/pi";
import { LangSwitcher } from "@/components/LangSwitcher"
import { ImPhone } from "react-icons/im";
import { HiMail } from "react-icons/hi";
import { useEffect, useState } from "react";
import { host } from "@/http";
import { observer } from 'mobx-react-lite';
import { useLocalizationStore } from "@/app/provider";
// import localize from "@/app/localize";

const Header = observer(() => {
  const { locale } = useLocalizationStore();
  
  const localize = (text, lang) => { 
    return text;
  }

  const [products, setProducts] = useState(null);
  const [services, setServices] = useState(null);
  const [subcategories, setSubcategories] = useState(null);
  const [showMenu, setMenu] = useState(false);

  useEffect(() => {
    host
      .get("api/product")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    host
      .get("api/services")
      .then((response) => {
        setServices(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    host
      .get("api/subcategory")
      .then((response) => {
        setSubcategories(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    const mobile = document.querySelector("#mobile-menu");
    showMenu == false ? mobile.classList.add("-translate-x-full") : mobile.classList.remove("-translate-x-full");
  }, [showMenu]);

  return (
    <>
      {/* верхня панель контактів та мови */}
      <div className="hidden md:block sticky inset-x-0 overflow-y-visible top-0 bg-stone-900 z-50">
        <div className="md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto ">
          <div className="flex justify-between items-center h-14">
            <ul className="flex items-center text-white space-x-5">
              <li>
                <Image className="hidden md:block" src="/stand.webp" height={150} width={150} alt="Ukraine" />
              </li>
              <Link href="/about">
                <li className="decoration-2 hover:underline decoration-emerald-600 cursor-pointer">{localize("Про нас", locale.current)}</li>
              </Link>
              <Link href="/contacts">
                <li className="decoration-2 hover:underline decoration-emerald-600 cursor-pointer">{localize("Контактна інформація", locale.current)}</li>
              </Link>
              <li className="flex items-center decoration-2 hover:underline decoration-emerald-600 cursor-pointer" onClick={() => navigator.clipboard.writeText("dzyaliv@ukr.net")}>
                <HiMail size="1.25em" color="#fff" className="mr-2" />
                dzyaliv@ukr.net
                </li>
            </ul>
            <LangSwitcher/>
          </div>
        </div>
      </div>

      {/* меню під десктоп */}
      <nav className="sticky inset-x-0 top-0 md:top-14 z-40 overflow-y-visible border-b-4 border-emerald-700 md:shadow-lg md:border-0" id="menu">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14 md:h-20">
            <Link href="/" className="flex items-center">
              <Image src="/logo.webp" width={50} height={50} alt="" />
              <span className="text-white ml-1 md:ml-2 text-xl md:text-3xl font-bold">{locale.current === "uk" ? "ФГ «Дзялів»" : "FG «Dzialiv»"}</span>
            </Link>
            <ul className="hidden md:flex space-x-5 text-md md:text-xl font-semibold text-white">
              <Link href="/" className="md:hover:bg-emerald-600 rounded-lg -skew-x-12">
                <li className="p-3 skew-x-12">{localize("Головна", locale.current)}</li>
              </Link>
              <div className="group inline-block relative">
                <Link href="/products" className="inline-flex md:hover:bg-emerald-600 rounded-lg -skew-x-12">
                  <li className="p-3 skew-x-12">{localize("Продукція", locale.current)}</li>
                </Link>
                <ul className="absolute hidden text-gray-700 top-10 min-w-[150px] left-0 pt-5 group-hover:block">
                  {subcategories?.map((el, idx) => {
                    return (
                      <li className="border-x-4 border-emerald-600" key={idx}>
                        <Link href={"/" + el.category_id + "/" + el.link}>
                          <span className="flex bg-white px-4 py-2 text-sm text-stone-700 hover:bg-stone-100 active:bg-emerald-100 cursor-pointer z-50">{localize(el.name, locale.current)}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="group inline-block relative">
                <Link href="/services" className="inline-flex md:hover:bg-emerald-600 rounded-lg -skew-x-12">
                  <li className="p-3 skew-x-12">{localize("Послуги", locale.current)}</li>
                </Link>
                <ul className="absolute hidden text-gray-700 top-10 min-w-[150px] left-0 pt-5 group-hover:block">
                  {services?.map((el, idx) => {
                    return (
                      <li className="border-x-4 border-emerald-600" key={idx}>
                        <Link href={"/" + el.category_id + "/" + el.link}>
                          <span className="flex bg-white px-4 py-2 text-sm text-stone-700 hover:bg-stone-100 active:bg-emerald-100 cursor-pointer z-50">{localize(el.name, locale.current)}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <Link href="/photos" className="md:hover:bg-emerald-600 rounded-lg -skew-x-12">
                <li className="p-3 skew-x-12">{localize("Фото", locale.current)}</li>
              </Link>
              <Link href="/contacts">
              <li className="bg-emerald-600 hidden lg:flex items-center max-w-min -skew-x-12 p-3 rounded-md drop-shadow-xl hover:bg-emerald-300 cursor-pointer select-none">
                <HiMail className="mr-1 animate-pulse skew-x-12" size="1.25em" color="#fff" />
                <span className="animate-pulse skew-x-12">{localize("Звʼязатися", locale.current)}</span>
              </li>
              </Link>
            </ul>
            <button className="flex bg-emerald-600 drop-shadow-xl py-2 px-3 rounded-lg md:hidden" onClick={() => setMenu(!showMenu)}>
              <h1 className="text-xl font-bold text-white">{localize("Меню", locale.current)}</h1>
              <div className="space-y-2 ml-3">
                <span className="block w-8 h-1 rounded-sm bg-white "></span>
                <span className="block w-7 h-1 rounded-sm bg-white "></span>
                <span className="block w-8 h-1 rounded-sm bg-white "></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* мобільне меню */}
      <div id="mobile-menu" className="md:hidden fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-emerald-600 border-r-4 border-emerald-700 w-64">
        <div className="absolute top-0 left-0 w-full h-hull bg-black opacity-25 z-50"></div>
        <button type="button" onClick={() => setMenu(!showMenu)} className="text-white bg-transparent  text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center ">
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto mt-5">
          <div className="flex items-center mb-5">
            <Image src="/logo.webp" className="mr-2" width={50} height={50} alt="" />
            <h1 className="text-xl text-white font-bold">{locale.current === "uk" ? "ФГ «Дзялів»" : "FG «Dzialiv»"}</h1>
          </div>
          <ul className="flex flex-col justify-center space-y-2 font-bold">
            <li className="border-2 border-white rounded-lg">
              <Link href="/" className="flex items-center p-2 text-white  hover:bg-stone-100/3 group" onClick={() => setMenu(!showMenu)}>
                <span className="ml-3">{localize("Головна", locale.current)}</span>
              </Link>
            </li>
            <li className="border-2 border-white rounded-lg">
              <Link href="/about" className="flex items-center p-2 text-white   hover:bg-stone-100/3 group" onClick={() => setMenu(!showMenu)}>
                <span className="flex-1 ml-3 whitespace-nowrap">{localize("Про нас", locale.current)}</span>
              </Link>
            </li>
            <li className="border-2 border-white rounded-lg">
              <Link href="/products" className="flex items-center p-2 text-white   hover:bg-stone-100/3 group" onClick={() => setMenu(!showMenu)}>
                <span className="flex-1 ml-3 whitespace-nowrap">{localize("Продукція", locale.current)}</span>
              </Link>
            </li>
            <li className="border-2 border-white rounded-lg">
              <Link href="/services" className="flex items-center p-2 text-white   hover:bg-stone-100/3 group" onClick={() => setMenu(!showMenu)}>
                <span className="flex-1 ml-3 whitespace-nowrap">{localize("Послуги", locale.current)}</span>
              </Link>
            </li>
            <li className="w-full border-2 border-white rounded-lg">
              <Link href="/contacts" className="flex items-center p-2 text-white   hover:bg-stone-100/3 group" onClick={() => setMenu(!showMenu)}>
                <span className="flex-1 ml-3 whitespace-nowrap">{localize("Контакти", locale.current)}</span>
              </Link>
            </li>
          </ul>
          <div className="space-y-3">
            {/* <div className="flex mt-10 text-white decoration-2 hover:underline decoration-emerald-600 cursor-pointer" onClick={() => setMenu(!showMenu)}>
              <PiPhoneCallThin size="1.25em" color="#fff" className="mr-2" />
              +38 (096)-427-13-75
            </div> */}
            <LangSwitcher/>
          </div>
        </div>
      </div>
    </>
  );
});

export { Header };
