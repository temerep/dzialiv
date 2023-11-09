"use client"
import { Grid } from "@/components/Grid";
import { Card } from "@/components/Card";
import { usePathname, useRouter } from "next/navigation";
import { useLocalizationStore } from "@/app/provider";
import { GetData } from "@/utils";
import localize from "@/app/localize";

const Products = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { locale } = useLocalizationStore();
  const subcategories = GetData("api/subcategory");
  return (
    <>
      <main className="flex flex-col items-center w-full md:p-5 bg-stone-100">
        <div className="flex flex-col">
          <h1 className="text-3xl text-stone-800 md:text-5xl font-bold mb-5 pl-5 pt-5">{localize("Продукція", locale.current)}</h1>
          <Grid>
            {subcategories?.map((el) => {
              return (
                <Card key={el.name} source={el.link} title={localize(el.name, locale.current)} img={el.img} desc={localize(el.desc, locale.current)} btn={localize("Детальніше", locale.current)} />
              )
            })}
          </Grid>
        </div>
      </main>
    </>
  )
};

export default Products;