import { HomeGrid } from "@/components/HomeGrid";
import {items} from "@/app/config"

export default function Products() {
  return (
    <>
      <main className="flex flex-col items-center w-full p-5 bg-stone-200">
        <div className="flex flex-col">
        <h1 className="text-3xl md:text-5xl font-bold mb-5 pl-5 pt-5">Продукція</h1>
        <HomeGrid products={items}/>
        </div>
      </main>
    </>
  )
}