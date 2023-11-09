"use client"
import React, {useState, useEffect} from "react";
import { Loader }  from "@/components/Loader";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const MainContent = ({children}) => {
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    const checkDOMLoaded = () => {
      if (document.readyState === "complete") {
        setShowMainContent(true);
      }
    };
    const intervalId = setInterval(checkDOMLoaded, 500);
    checkDOMLoaded();
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      {showMainContent ? (
        <>
          <Header />
            <main className="flex w-full">
              {children}
            </main>
          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}
export {MainContent};