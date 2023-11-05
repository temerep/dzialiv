"use client"
import React, {useState, useEffect} from "react";
import Loader from "@/components/Loader";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const MainContent = ({children}) => {
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMainContent(true);
    }, 1000);
  }, []);
  return (
    <>
      {showMainContent ? (
        <>
          <Header />
          <main className="flex w-full">{children}</main>
          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}
export {MainContent};