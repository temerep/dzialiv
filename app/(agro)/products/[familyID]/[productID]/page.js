"use client";
import { useEffect, useState } from "react";
import { host } from "@/http";
import Image from "next/image";
import Link from "next/link";

export default function ProductItem({ params }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    host
      .get(`api/product?link=${params.productID}`)
      .then((response) => {
        setProduct(response.data[0]);
      })
      .catch((e) => console.log(e.response.data.message));
  }, [params]);

  return (
    <>
      <main className="flex min-h-[80vh] flex-col w-full p-5 bg-white">
        <div className="flex flex-col h-full lg:flex-row space-x-5 p-5 bg-stone-100 rounded-lg">
          <Image src={product?.img} className="rounded-lg object-cover" width={600} height={1000} alt="" />
          <div className="flex flex-col">
            <h1 className="text-3xl mt-5 lg:mt-0 lg:text-5xl font-bold mb-5">{product?.name}</h1>
            <p className="text-lg" style={{ whiteSpace: "pre-line", tabSize: 4 }}>
             {product?.desc}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
