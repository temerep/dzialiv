"use client"
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocalizationStore } from "@/app/provider";
import localize from "@/app/localize";

const Footer = () => {
  const {locale} = useLocalizationStore();
  return (
    <footer className="bg-emerald-600 border-t-2 border-emerald-700 z-40">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex flex-col min-[1080px]:flex-row justify-between">
          <div className="flex flex-col mb-6 md:mb-0">
            <Link href="/" className="flex items-center mb-5">
              <Image src="/logo.webp" width={80} height={80} alt="" />
              <h1 className="text-2xl font-bold ml-3 text-white">{locale.current === "uk" ? "ФГ «Дзялів»" : "FG «Dzialiv»"}</h1>
            </Link>
            <span className="text-sm text-white">
              © 2023{" "}
              <Link href="/" className="text-green-200">
              {locale.current === "uk" ? "ФГ «Дзялів»" : "FG «Dzialiv»"}
              </Link>
              {localize(". Всі права захищені.", locale.current)}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div className="text-white">
              <h2 className="mb-4 text-xl font-semibold text-white/70">{localize("Про нас", locale.current)}</h2>
              <p className="">{localize("23163 Вінницька обл.", locale.current)}</p>
              <p className="mb-4">{localize("село Камʼяногірка, вул. Перемоги 3", locale.current)}</p>
            </div>
            <div className="text-white">
              <h2 className="mb-4 text-xl font-semibold text-white/70">{localize("Контакти", locale.current)}</h2>
              <p className="">E-mail: <a href="mailto:dzyaliv@ukr.net" className="underline underline-offset-4 decoration-green-300">dzyaliv@ukr.net</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
