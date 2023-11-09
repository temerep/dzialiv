"use client";
import Image from "next/image";
import Link from "next/link";
import { useLocalizationStore } from "@/app/provider";
import { GetData } from "@/utils";
import localize from "@/app/localize";

export default function ProductItem ({ params }) {
  const { locale } = useLocalizationStore();
  const product = GetData("api/product", {link: params.productID})?.[0]

  return (
    <>
      <main className="flex min-h-[80vh] flex-col w-full p-5 bg-white">
        <div className="flex flex-col h-full lg:flex-row space-x-5 p-5 bg-stone-100 rounded-lg">
          <Image src={product?.img} className="rounded-lg object-cover" width={600} height={1000} alt="" />
          <div className="flex flex-col">
            <h1 className="text-3xl mt-5 lg:mt-0 lg:text-5xl font-bold mb-5">{localize(product?.name, locale.current)}</h1>
            <p className="text-lg" style={{ whiteSpace: "pre-line", tabSize: 4 }}>
             {localize(product?.desc, locale.current)}
            </p>
          </div>
        </div>
      </main>
    </>
  );
};