import "./globals.css";
import { Suspense } from 'react'
import { Loading } from './loading'
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";


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
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="ua">
      <body className={exo.className + " bg-emerald-600 md:bg-stone-900"}>
        <div className="flex w-full flex-col">
        <Header />
        <Suspense fallback={<Loading/>}>
        <main className="flex w-full ">{children}</main>
        </Suspense>
        <Footer />
        </div>
      </body>
    </html>
  );
}
