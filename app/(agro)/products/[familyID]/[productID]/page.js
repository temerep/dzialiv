"use client";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { products, services, subcategories } from "@/app/config";
import { BiSolidDownload } from "react-icons/bi";

export default function ProductItem({ params }) {
  const item = products.find(el => el.link == params.productID);
  return (
    <>
      <main className="flex min-h-[80vh] flex-col w-full p-5 bg-white">
        <Breadcrumbs />
        <div className="flex flex-col h-full lg:flex-row space-x-5 p-5 bg-stone-100 rounded-lg">
          <Image src={item.img} className="rounded-lg object-cover" width={600} height={1000} alt="" />
          <div className="flex flex-col">
            <h1 className="text-3xl mt-5 lg:mt-0 lg:text-5xl font-bold mb-5">{item.name}</h1>
            <p className="text-lg">
              Гранули є 100% рослинного походження, оскільки виготовляються із соломи різних рослин без хімічних домішок і добавок.
              <br></br><br></br>
              <h1 className="font-bold text-xl p-2 bg-emerald-600 rounded-lg text-white">Характеристики</h1><br></br>
              - Діаметр 6, 8 мм<br></br>
              - Довжина пелет ±50 мм<br></br>
              - Зольність у сухому стані 8%<br></br>
              - Масова частка вологи 10%<br></br>
              - Насипна щільність, не менше 585 кг/м3<br></br>
              - Теплота згоряння 15-19 МДж/кг<br></br>
              - Найвища теплота згоряння 4600 ккал/кг<br></br>
              - Масова частка летких речовин, не менше 70%<br></br>
              - Вміст сірки 0,05-0,2%<br></br><br></br>
              <h1 className="font-bold text-xl p-2 bg-emerald-600 rounded-lg text-white">Продукція</h1><br></br>
              - Топливні пелети<br></br>
              - Кормові гранули<br></br>
              - Підстилка для тварин<br></br>
              - Наповнювач для домашніх тварин<br></br>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
