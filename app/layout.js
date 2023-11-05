import "./globals.css";
import { Suspense } from "react";
import Loading from "@/app/loading"
import localFont from "next/font/local";
import { Provider } from "@/app/provider";
import { MainContent } from "@/components/MainContent";
import { host } from "@/http";
import dataStore from "@/store/DataStore";


const exo = localFont({
  src: [
    {
      path: "../public/fonts/Exo2-Light.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/Exo2-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/Exo2-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/Exo2-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "../public/fonts/Exo2-Black.ttf",
      weight: "900",
    },
  ],
});

export const metadata = {
  title: 'ФГ "Дзялів"',
  description: 'Фермерське господарство "Дзялів"',
  icons: {
    icon: "favicon.ico",
  },
  keywords: [
    "фг дзялів", "фермерське господарство", "фг жмеринка", "дзялів жмеринка", "дзялів вінниця", "дзялів україна", "фг вінниця", "овочі", " зерно", "зерно україна", "зерно жмеринка",
    "fg dzaliv",
  "farm",
  "fg zhymerynka",
  "dzaliv zhymerynka",
  "dzaliv vinnytsia",
  "dzaliv ukraine",
  "fg vinnytsia",
  "vegetables",
  "grain",
  "grain ukraine",
  "grain zhymerynka",
  "bauernhof",
  "gemüse",
  "getreide",
  "getreide ukraine",
  "getreide zhymerynka",
  "farma",
  "warzywa",
  "zboże",
  "zboże ukraine",
  "Ūkininkų ūkis",
  "daržovės",
  "grūdai",
  "grūdai ukraine",
  "fermă",
  "legume",
  "cereale",
  "cereale ucraina",
]
};

export default function RootLayout({ children }) {
  return (
    <Provider>
      <html className="scroll-smooth" lang="ua">
        <body className={exo.className + " bg-emerald-600 md:bg-stone-900"}>
          <div className="flex w-full flex-col">
          <Suspense fallback={<Loading/>}>
             <MainContent>
              {children}
              </MainContent>
              </Suspense>
          </div>
        </body>
      </html>
    </Provider>
  );
}
