"use client"
import React from "react";
import Image from "next/image";
import { PiGlobeSimpleBold, PiPhoneCallThin, PiPhoneCallFill } from "react-icons/pi";

const LangSwitcher = () => { 
  return (
    <div className="group inline-block relative">
    <button className="inline-flex px-2 py-1 border-2 items-center rounded-lg border-emerald-600  md:hover:bg-emerald-600 cursor-pointer" id="language">
      <PiGlobeSimpleBold size="1.25em" color="#fff" />
      <p className="pl-1 text-white">Українська</p>
      <ul className="absolute hidden text-gray-700 top-5 min-w-[150px] right-0 pt-5 group-hover:block">
        <li className="">
          <a className="flex bg-white rounded-t-md px-4 py-2 text-sm text-stone-700 hover:bg-stone-100 active:bg-emerald-100 cursor-pointer" role="menuitem">
            🇬🇧 English
          </a>
        </li>
        <li className="">
          <a className="flex bg-white px-4 py-2 text-sm text-stone-700 hover:bg-stone-100 active:bg-emerald-100 cursor-pointer" role="menuitem">
            🇺🇦 Українська
          </a>
        </li>
        <li className="">
          <a className="flex bg-white px-4 py-2 text-sm text-stone-700 hover:bg-stone-100 active:bg-emerald-100 cursor-pointer" role="menuitem">
            🇵🇱 Polska
          </a>
        </li>
        <li className="">
          <a className="flex bg-white px-4 py-2 text-sm text-stone-700 hover:bg-stone-100 active:bg-emerald-100 cursor-pointer" role="menuitem">
            🇩🇪 Deutsch
          </a>
        </li>
        <li className="">
          <a className="flex bg-white px-4 py-2 text-sm text-stone-700 hover:bg-stone-100 active:bg-emerald-100 cursor-pointer" role="menuitem">
            🇱🇹 Lietuvių
          </a>
        </li>
        <li className="">
          <a className="flex bg-white rounded-b-md px-4 py-2 text-sm text-stone-700 hover:bg-stone-100 active:bg-emerald-100 cursor-pointer" role="menuitem">
            🇷🇴 Românesc
          </a>
        </li>
      </ul>
    </button>
  </div>
  )
}

export { LangSwitcher };