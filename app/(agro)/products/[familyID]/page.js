"use client"
import { Grid } from "@/components/Grid";
import { Card } from "@/components/Card";
import { useLocalizationStore } from "@/app/provider";
import { GetData } from "@/utils";
import localize from "@/app/localize";

export default function Family ({ params }) {
  const { locale } = useLocalizationStore();
  const subcategory = GetData("api/subcategory", {link: params.familyID});
  const products = GetData("api/product", {subcategory_id: params.familyID})

  return (
    <>
      <main className="flex flex-col items-center w-full md:p-5 bg-stone-200">
        <div className="flex flex-col">
          <h1 className="text-3xl text-stone-800 md:text-5xl font-bold mb-5 pl-5 pt-5">{localize(subcategory?.name, locale.current)}</h1>
          <Grid>
            {products?.map((item) => {
              return (
                <Card key={item.name} source={item.link} title={localize(item.name, locale.current)} desc={localize(item.desc, locale.current)} img={item.img} btn={localize("Детальніше", locale.current)} />
              );
            })}
          </Grid>
        </div>
      </main>
    </>
  );
};