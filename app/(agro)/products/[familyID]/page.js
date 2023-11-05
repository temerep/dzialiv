"use client"
import { Grid } from "@/components/Grid";
import { useEffect, useState } from "react";
import { host } from "@/http";
import { Card } from "@/components/Card";

export default function Family({ params }) {
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
          <h1 className="text-3xl text-stone-800 md:text-5xl font-bold mb-5 pl-5 pt-5">{subcategory?.name}</h1>
          <Grid>
            { products?.map((item) => {
              return (
                  <Card key={item.name} source={item.link} title={item.name} desc={item.desc} img={item.img} />
              );
            })}
          </Grid>
        </div>
      </main>
    </>
  );
}
