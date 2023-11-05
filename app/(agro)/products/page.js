"use client"
import { useEffect, useState } from "react";
import { host } from "@/http";
import { Grid } from "@/components/Grid";
import { Card } from "@/components/Card";
import { usePathname, useRouter } from "next/navigation";

export default function Products() {
  const pathname = usePathname();
  const router = useRouter();

  const [subcategories, setSubcategories] = useState(null);
  useEffect(() => {
    host
      .get("api/subcategory")
      .then((response) => {
        setSubcategories(response.data);
      })
      .catch((e) => console.log(e.response.data.message));
  }, []);
  return (
    <>
      <main className="flex flex-col items-center w-full md:p-5 bg-stone-100">
        <div className="flex flex-col">
        <h1 className="text-3xl text-stone-800 md:text-5xl font-bold mb-5 pl-5 pt-5">Продукція</h1>
          <Grid>
          {subcategories?.map((el) => { 
          return (
              <Card key={el.name} source={el.link} title={el.name} img={el.img} desc={el.desc} />
          )
        })}
        </Grid>
        </div>
      </main>
    </>
  )
}