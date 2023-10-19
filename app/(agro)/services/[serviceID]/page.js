"use client";
import React, { useEffect, useState } from "react";
import { host } from "@/http/index";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BiSolidDownload } from "react-icons/bi";

export default function ServicesItem({ params }) {
  const [services, setServices] = useState(null);
  useEffect(() => {
    host
      .get("api/services")
      .then((response) => {
        setServices(response.data);
      })
      .catch((e) => console.log(e.response.data.message));
  }, []);
  const item = services?.find(el => el.link == params.serviceID);
  return (
    <>
      <main className="flex min-h-[80vh] flex-col w-full p-5 bg-white">
        <Breadcrumbs />
        <div className="flex flex-col h-full lg:flex-row space-x-5 p-5 bg-stone-100 rounded-lg">
          <Image src={item?.img} className="rounded-lg object-cover" width={600} height={1000} alt="" />
          <div className="flex flex-col">
            <h1 className="text-3xl mt-5 lg:mt-0 lg:text-5xl font-bold mb-5">{item?.name}</h1>
            <p className="text-lg">
              {item?.desc}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
