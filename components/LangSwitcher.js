"use client"
import React from "react";
import Image from "next/image";
import { observer } from 'mobx-react-lite';
import { useLocalizationStore } from "@/app/provider";
import { PiGlobeSimpleBold, PiPhoneCallThin, PiPhoneCallFill } from "react-icons/pi";

const LangSwitcher = observer(() => { 
  const {locale} = useLocalizationStore();
  const allLocales = [
    {
      locale: "en",
      name: "🇬🇧 English",
    },
    {
      locale: "uk",
      name: "🇺🇦 Українська",
    },
    {
      locale: "pl",
      name: "🇵🇱 Polska",
    },
    {
      locale: "de",
      name: "🇩🇪 Deutsch", 
    },
    {
      locale: "lt",
      name: "🇱🇹 Lietuvių",
    },
    {
      locale: "ro",
      name: "🇷🇴 Românesc"
    }
  ];
  const handleChange = (val) => {
    try {
      localStorage.setItem("locale", val);
      locale.setLocale(val);
      setTimeout(() => {window.location.reload()}, 500)
    } catch (error) {
      console.error("localStorage is not available. Cannot store locale.");
    }
  }
  return (
    <div className="group inline-block relative">
    <button className="inline-flex px-2 py-1 border-2 items-center rounded-lg border-emerald-600  md:hover:bg-emerald-600 cursor-pointer" id="language">
      <PiGlobeSimpleBold size="1.25em" color="#fff" />
      <p className="pl-1 text-white">{allLocales.find(loc => loc.locale == locale.current).name.slice(4)}</p>
      <ul className="absolute hidden text-gray-700 top-5 min-w-[150px] right-0 pt-5 group-hover:block">
        {
          allLocales?.map(lang => {
            return(
            <li className="" value={lang.locale} onClick={() => handleChange(lang.locale)}>
              <a className="flex bg-white px-4 py-2 text-sm text-stone-700 hover:bg-stone-100 active:bg-emerald-100 cursor-pointer" role="menuitem">
                {lang.name}
          </a>
        </li>)
          })
        }

      </ul>
    </button>
  </div>
  )
})

export { LangSwitcher };