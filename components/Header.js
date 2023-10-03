"use client";
import Link from "next/link";
import Image from "next/image";
import {items, services} from "@/app/config"
import { PiGlobeSimpleBold, PiPhoneCallThin,PiPhoneCallFill } from "react-icons/pi";
import { ImPhone } from "react-icons/im";
import { useEffect, useState } from "react";

const Header = () => {
  const [showMenu, setMenu] = useState(false);
  // const [showDrop, setDrop] = useState(false);
  // const [showLanguage, setLanguage] = useState(false);

  useEffect(() => {
    // const dropdownLanguage = document.querySelector('#dropdown-language');
    // const dropdownMenu = document.querySelector('#dropdown-menu');
    const mobile = document.querySelector("#mobile-menu");
    (showMenu == false) ? mobile.classList.add("-translate-x-full") : mobile.classList.remove("-translate-x-full");
    // (showLanguage == false) ? dropdownLanguage.classList.add('hidden') : dropdownLanguage.classList.remove('hidden');
    // (showDrop == false) ? dropdownMenu.classList.add('hidden') : dropdownMenu.classList.remove('hidden');
    
    
  }, [showMenu]);

  return (
    <>
    <div className=" sm:hidden fixed bg-emerald-600 p-5 rounded-full bottom-2 left-2 border-4 border-emerald-700 drop-shadow-lg animate-bounce z-50">
          <a href="tel:+380000000">
            <ImPhone size="2em" className="text-white"/>
          </a>
    </div>

      {/* верхня панель контактів та мови */}
      <div className="hidden md:block sticky inset-x-0 overflow-y-visible top-0 bg-stone-900 z-50">
        <div className="md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto ">
          <div className="flex justify-between items-center h-14">
            <ul className="flex items-center text-white space-x-5">
              <li>
                <Image className="hidden md:block" src="/stand.webp" height={150} width={150} alt="Ukraine" />
              </li>
              <Link href="/about">
                <li className="decoration-2 hover:underline decoration-emerald-600 cursor-pointer">Про нас</li>
              </Link>
              <Link href="/contacts">
                <li className="decoration-2 hover:underline decoration-emerald-600 cursor-pointer">Контактна інформація</li>
              </Link>
              <li className="flex items-center decoration-2 hover:underline decoration-emerald-600 cursor-pointer">
                <PiPhoneCallThin size="1.25em" color="#fff" className="mr-2" />
                +38 (096)-427-13-75
              </li>
            </ul>
            <div className="flex px-2 py-1 border-2 items-center rounded-lg border-emerald-600  md:hover:bg-emerald-600 cursor-pointer" onMouseEnter={() => setLanguage(true)} onMouseLeave={() => setTimeout(() => setLanguage(false), 500)} id="language">
              <PiGlobeSimpleBold size="1.25em" color="#fff" />
              <p className="pl-1 text-white">UA</p>
              {/* <div id="dropdown-language" className="hidden absolute top-12 -ml-32 z-50 w-48 rounded-md shadow-lg bg-white" onMouseEnter={() => setLanguage(true)} onMouseLeave={() => setTimeout(() => setLanguage(false), 500)}>
                <div className="py-2 p-2" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button">
                    <a className="flex rounded-md px-4 py-2 text-sm text-stone-700 hover:bg-stone-100 active:bg-emerald-100 cursor-pointer" role="menuitem">🇬🇧 English</a>
                    <a className="flex rounded-md px-4 py-2 text-sm text-stone-700 hover:bg-stone-100 active:bg-emerald-100 cursor-pointer" role="menuitem">🇺🇦 Українська</a>
                    <a className="flex rounded-md px-4 py-2 text-sm text-stone-700 hover:bg-stone-100 active:bg-emerald-100 cursor-pointer" role="menuitem">🇵🇱 Polska</a>
                    <a className="flex rounded-md px-4 py-2 text-sm text-stone-700 hover:bg-stone-100 active:bg-emerald-100 cursor-pointer" role="menuitem">🇩🇪 Deutsch</a>
                    <a className="flex rounded-md px-4 py-2 text-sm text-stone-700 hover:bg-stone-100 active:bg-emerald-100 cursor-pointer" role="menuitem">🇱🇹 Lietuvių</a>
                    <a className="flex rounded-md px-4 py-2 text-sm text-stone-700 hover:bg-stone-100 active:bg-emerald-100 cursor-pointer" role="menuitem">🇷🇴 Românesc</a>
              </div>
            </div> */}
            </div>

          </div>
        </div>
      </div>

      {/* меню під десктоп */}
      <nav className="sticky inset-x-0 top-0 md:top-14 z-40 overflow-y-visible border-b-4 border-emerald-700 md:shadow-lg md:border-0" id="menu">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14 md:h-20">
            <Link href="/" className="flex items-center">
              <Image src="/logo.webp" width={50} height={50} alt="" />
              <span className="text-white ml-1 md:ml-2 text-xl md:text-3xl font-bold">ФГ «Дзялів»</span>
            </Link>
            <ul className="hidden md:flex space-x-5 text-md md:text-xl font-semibold text-white">
              <Link href="/" className="md:hover:bg-emerald-600 rounded-lg -skew-x-12">
                <li className="p-3 skew-x-12">Головна</li>
              </Link>
              <Link href="/offer/products" className="md:hover:bg-emerald-600 rounded-lg -skew-x-12">
                <li className="p-3 skew-x-12">Продукція</li>
                {/* <div id="dropdown-menu" className="hidden absolute top-34 z-50 w-48 rounded-md shadow-lg bg-white" onMouseEnter={() => setDrop(true)} onMouseLeave={() => setTimeout(() => setDrop(false), 500)}>
                  <div className="py-2 p-2" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button">
                    {items.map((el) => {
                      return(
                        <a key={el.title} className="flex rounded-md px-4 py-2 text-sm text-stone-700 hover:bg-stone-100 active:bg-emerald-100 cursor-pointer" role="menuitem">{el.title}</a>
                      )
                    })}
                  </div>
                </div> */}
              </Link>
              <Link href="/offer/services" className="md:hover:bg-emerald-600 rounded-lg -skew-x-12">
                <li className="p-3 skew-x-12">Послуги</li>
              </Link>
              <Link href="/photos" className="md:hover:bg-emerald-600 rounded-lg -skew-x-12">
                <li className="p-3 skew-x-12">Фото</li>
              </Link>
              <li className="bg-emerald-600 hidden lg:flex items-center -skew-x-12 py-2 px-3 rounded-md drop-shadow-xl hover:bg-emerald-300 cursor-pointer select-none">
                <PiPhoneCallFill className="mr-1 animate-pulse skew-x-12" size="1.25em" color="#fff"/>
                <span className="animate-pulse skew-x-12">Звʼязатися</span>
              </li>
            </ul>
            <button className="flex bg-emerald-600 drop-shadow-xl py-2 px-3 rounded-lg md:hidden" onClick={() => setMenu(!showMenu)}>
              <h1 className="text-xl font-bold text-white">Меню</h1>
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
      <div id="mobile-menu" className="md:hidden fixed top-0 left-0 z-50 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-emerald-600 border-r-4 border-emerald-700 w-64">
        <div className="absolute top-0 left-0 w-full h-hull bg-black opacity-25 z-40"></div>
        <button type="button" onClick={() => setMenu(!showMenu)} className="text-white bg-transparent  text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center ">
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto mt-5">
          <div className="flex items-center mb-5">

          <Image src="/logo.webp" className="mr-2" width={50} height={50} alt=""/>
          <h1 className="text-xl text-white font-bold">ФГ Дзялів</h1>
          </div>
          <ul className="flex flex-col justify-center space-y-2 font-bold">
            <li className="border-2 border-white rounded-lg">
              <Link href="/" className="flex items-center p-2 text-white  hover:bg-stone-100/3 group" onClick={()=>setMenu(!showMenu)}>
                <span className="ml-3">Головна</span>
              </Link>
            </li>
            <li className="border-2 border-white rounded-lg">
              <Link href="/about" className="flex items-center p-2 text-white   hover:bg-stone-100/3 group" onClick={()=>setMenu(!showMenu)}>
                <span className="flex-1 ml-3 whitespace-nowrap">Про нас</span>
              </Link>
            </li>
            <li className="border-2 border-white rounded-lg">
              <Link href="/offer/products" className="flex items-center p-2 text-white   hover:bg-stone-100/3 group" onClick={()=>setMenu(!showMenu)}>
                <span className="flex-1 ml-3 whitespace-nowrap">Продукція</span>
              </Link>
            </li>
            <li className="border-2 border-white rounded-lg">
              <Link href="/offer/services" className="flex items-center p-2 text-white   hover:bg-stone-100/3 group" onClick={()=>setMenu(!showMenu)}>
                <span className="flex-1 ml-3 whitespace-nowrap">Послуги</span>
              </Link>
            </li>
            <li className="w-full border-2 border-white rounded-lg">
              <Link href="/contacts" className="flex items-center p-2 text-white   hover:bg-stone-100/3 group" onClick={()=>setMenu(!showMenu)}>
                <span className="flex-1 ml-3 whitespace-nowrap">Контакти</span>
              </Link>
            </li>
          </ul>
          <div className="space-y-3">
            <div className="flex mt-10 text-white decoration-2 hover:underline decoration-emerald-600 cursor-pointer" onClick={()=>setMenu(!showMenu)}>
              <PiPhoneCallThin size="1.25em" color="#fff" className="mr-2" />
              +38 (096)-427-13-75
            </div>
            <div className="flex px-2 py-1 border-2 rounded-lg items-center border-white  md:hover:bg-emerald-600 cursor-pointer" id="language" onClick={()=>setMenu(!showMenu)}>
              <PiGlobeSimpleBold size="1.25em" color="#fff" />
              <p className="pl-1 text-white">UA</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Header };
