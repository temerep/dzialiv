"use client"
import React from "react";
import Image from "next/image";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BeatLoader } from 'react-spinners';

export default function Loading() {
  return (
    <main>
     <LazyLoadImage
        src="../public/photos/logo.webp"
        alt="logo"
        style={{
          width: "200px",
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      />
      <BeatLoader
        color="#36d7b7"
        loading={true}
        cssOverride={{ position: "absolute", left: "50%", top: "55%" }}
      />
    </main>
  );
}
