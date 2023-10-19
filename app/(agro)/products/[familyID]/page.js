"use client"
import { Grid } from "@/components/Grid";
import React, { useEffect, useState } from "react";
import { host } from "@/http/index";
import { Card } from "@/components/Card";

export default function Family({ params }) {
  const [products, setProducts] = useState(null);
  const [subcategories, setSubcategories] = useState(null);

  useEffect(() => {
    host
      .get("api/product")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => console.log(e.response.data.message));
  }, []);

  useEffect(() => {
    host
      .get("api/subcategory")
      .then((response) => {
        setSubcategories(response.data);
      })
      .catch((e) => console.log(e.response.data.message));
  }, []);

  const subcat = subcategories?.find(el => el.link == params.familyID);
  const family = products?.filter(el => el.subcategory_id == subcat?.link);
  return (
    <>
      <main className="flex flex-col items-center w-full md:p-5 bg-stone-200">
        <div className="flex flex-col">
          <h1 className="text-3xl text-stone-800 md:text-5xl font-bold mb-5 pl-5 pt-5">{subcat?.name}</h1>
          <Grid>
            { family?.map((item) => {
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
