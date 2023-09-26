"use client";
import Link from "next/link";
import Image from "next/image";
import { PiGlobeSimpleBold, PiPhoneCallThin } from "react-icons/pi";
import { BsFire } from "react-icons/bs";
import { useEffect, useState } from "react";

const Header = () => {
  const [showMenu, setMenu] = useState(false);

  useEffect(() => {
    let mobile = document.querySelector("#mobile-menu");
    if (showMenu == false) {
      mobile.classList.add("-translate-x-full");
    } else {
      mobile.classList.remove("-translate-x-full");
    }
  }, [showMenu]);

  return (
    <>
      {/* верхня панель контактів та мови */}
      <div className="hidden md:block sticky inset-x-0 overflow-hidden top-0 bg-stone-900 z-50">
        <div className="md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto ">
          <div className="flex justify-between items-center h-14">
            <ul className="flex items-center text-white space-x-5">
              <li>
                <Image className="hidden md:block" src="/stand.png" height={150} width={150} alt="Ukraine" />
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
            <div className="flex px-2 py-1 border-2 items-center rounded-lg border-emerald-600  md:hover:bg-emerald-600 cursor-pointer" id="language">
              <PiGlobeSimpleBold size="1.25em" color="#fff" />
              <p className="pl-1 text-white">UA</p>
            </div>
          </div>
        </div>
      </div>

      {/* меню під десктоп */}
      <nav className="sticky inset-x-0 top-0 md:top-14 z-50 overflow-hidden border-b-4 border-emerald-700 md:border-0" id="menu">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14 md:h-20">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" width={50} height={50} alt="" />
              <span className="text-white ml-1 md:ml-2 text-xl md:text-3xl font-bold">ФГ "Дзялів"</span>
            </Link>
            <ul className="hidden md:flex space-x-5 text-md md:text-xl font-semibold text-white">
              <Link href="/">
                <li className="p-2">Головна</li>
              </Link>
              <Link href="/products">
                <li className="p-2">Продукція</li>
              </Link>
              <Link href="/services">
                <li className="p-2">Послуги</li>
              </Link>
              <li className="bg-emerald-600 hidden lg:flex items-center py-2 px-3 rounded-md drop-shadow-xl hover:bg-emerald-300 cursor-pointer select-none animate-pulse">
                <BsFire size="1.5em" color="#fff" className="mr-2" />
                Спеціальна пропозиція
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
      <div id="mobile-menu" class="md:hidden fixed top-0 left-0 z-50 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-emerald-600 border-r-4 border-emerald-700 w-64">
        <div className="absolute top-0 left-0 w-full h-hull bg-black opacity-25 z-40"></div>
        <button type="button" onClick={() => setMenu(!showMenu)} class="text-white bg-transparent  text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center ">
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span class="sr-only">Close menu</span>
        </button>
        <div class="py-4 overflow-y-auto mt-5">
          <div className="flex items-center mb-5">

          <Image src="/logo.png" className="mr-2" width={50} height={50} alt=""/>
          <h1 className="text-xl text-white font-bold">ФГ "Дзялів"</h1>
          </div>
          <ul class="flex flex-col justify-center space-y-2 font-bold">
            <li className="border-2 border-white rounded-lg">
              <Link href="/" class="flex items-center p-2 text-white  hover:bg-gray-100/3 group" onClick={()=>setMenu(!showMenu)}>
                <span class="ml-3">Головна</span>
              </Link>
            </li>
            <li className="border-2 border-white rounded-lg">
              <Link href="/about" class="flex items-center p-2 text-white   hover:bg-gray-100/3 group" onClick={()=>setMenu(!showMenu)}>
                <span class="flex-1 ml-3 whitespace-nowrap">Про нас</span>
              </Link>
            </li>
            <li className="border-2 border-white rounded-lg">
              <Link href="/products" class="flex items-center p-2 text-white   hover:bg-gray-100/3 group" onClick={()=>setMenu(!showMenu)}>
                <span class="flex-1 ml-3 whitespace-nowrap">Продукція</span>
              </Link>
            </li>
            <li className="border-2 border-white rounded-lg">
              <Link href="/products" class="flex items-center p-2 text-white   hover:bg-gray-100/3 group" onClick={()=>setMenu(!showMenu)}>
                <span class="flex-1 ml-3 whitespace-nowrap">Послуги</span>
              </Link>
            </li>
            <li className="w-full border-2 border-white rounded-lg">
              <Link href="/contacts" class="flex items-center p-2 text-white   hover:bg-gray-100/3 group" onClick={()=>setMenu(!showMenu)}>
                <span class="flex-1 ml-3 whitespace-nowrap">Контакти</span>
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
