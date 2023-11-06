"use client";
import { useEffect, useState } from "react";
import { host } from "@/http";
import Image from "next/image";
import Link from "next/link";
import { observer } from 'mobx-react-lite';
import { useLocalizationStore } from "@/app/provider";
import localize from "@/app/localize";

const ServicesItem = observer(({ params }) => {
  const { locale } = useLocalizationStore();
  const [service, setService] = useState(null);
  useEffect(() => {
    host
      .get(`api/services?link=${params.serviceID}`)
      .then((response) => {
        setService(response.data[0]);
      })
      .catch((e) => console.log(e.response.data.message));
  }, [params]);
  return (
    <>
      <main className="flex min-h-[80vh] flex-col w-full p-5 bg-white">
        <div className="flex flex-col h-full lg:flex-row space-x-5 p-5 bg-stone-100 rounded-lg">
          <Image src={service?.img} className="rounded-lg object-cover" width={600} height={1000} alt="" />
          <div className="flex flex-col">
            <h1 className="text-3xl mt-5 lg:mt-0 lg:text-5xl font-bold mb-5">{localize(service?.name, locale.current)}</h1>
            <p className="text-lg">
              {localize(service?.desc, locale.current)}
            </p>
          </div>
        </div>
      </main>
    </>
  );
});

export default ServicesItem;