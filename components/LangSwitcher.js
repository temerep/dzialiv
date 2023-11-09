"use client"
import React, {useEffect} from "react";
import Image from "next/image";
import {Avatar} from "@nextui-org/react";
import { observer } from 'mobx-react-lite';
import { useLocalizationStore } from "@/app/provider";
import { PiGlobeSimpleBold, PiPhoneCallThin, PiPhoneCallFill } from "react-icons/pi";

const LangSwitcher = observer(() => { 
  const { locale } = useLocalizationStore();
  useEffect(() => {
    const item = localStorage?.getItem('locale')
  }, [])
  
  const allLocales = [
    {
      locale: "en",
      name: "English",
    },
    {
      locale: "uk",
      name: "Українська",
    },
    {
      locale: "pl",
      name: "Polska",
    },
    {
      locale: "de",
      name: "Deutsch", 
    },
    {
      locale: "lt",
      name: "Lietuvių",
    },
    {
      locale: "ro",
      name: "Românesc"
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
    <div className="group inline-block relative z-50">
    <button className="inline-flex px-2 py-1 border-2 justify-between items-center rounded-lg border-emerald-600  md:hover:bg-emerald-600 cursor-pointer" id="language">
      <p className="pl-1 text-white">{allLocales.find(loc => loc.locale == locale.current).name}</p>
      <Avatar alt={locale.current} className="w-5 h-5 ml-2 rounded-full" src={`https://flagcdn.com/${locale.current === "uk" ? "ua" : locale.current === "en" ? "gb" : locale.current}.svg`} />
      <ul className="absolute hidden text-gray-700 top-5 min-w-[150px] right-0 pt-5 group-hover:block">
        {
          allLocales?.map(lang => {
            return(
              <li className="" key={lang.locale} onClick={() => handleChange(lang.locale)}>
              <a className="flex justify-between bg-white px-4 py-2 text-sm text-stone-700 hover:bg-stone-100 active:bg-emerald-100 cursor-pointer" role="menuitem">
                {lang.name}
                <Avatar alt={lang.name} className="w-6 h-6 rounded-full" src={`https://flagcdn.com/${lang.locale === "uk" ? "ua" : lang.locale === "en" ? "gb" : lang.locale}.svg`} />
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