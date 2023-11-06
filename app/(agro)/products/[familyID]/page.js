"use client"
import { Grid } from "@/components/Grid";
import { useEffect, useState } from "react";
import { host } from "@/http";
import { Card } from "@/components/Card";
import { observer } from 'mobx-react-lite';
import { useLocalizationStore } from "@/app/provider";
import localize from "@/app/localize";

const Family = observer(({ params }) => {
  const { locale } = useLocalizationStore();
  const [products, setProducts] = useState(null);
  const [subcategory, setSubcategory] = useState(null);

  useEffect(() => {
    host
      .get(`api/subcategory?link=${params.familyID}`)
      .then((response) => {
        setSubcategory(response.data[0]);
        if (subcategory) {
          host
            .get(`api/product?subcategory_id=${subcategory.link}`)
            .then((response) => {
              setProducts(response.data);
            })
            .catch((e) => console.log(e.response.data.message));
        }
      })
      .catch((e) => console.log(e.response.data.message));
  }, [params.familyID, subcategory]);

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
});

export default Family;