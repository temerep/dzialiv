import { Grid } from "@/components/Grid";
import {products} from "@/app/config"
import { Card } from "@/components/Card";

export default function Family({ params }) {
  const family = products.filter(el => el.subcategory_id == params.familyID)
  return (
    <>
      <main className="flex flex-col items-center w-full p-5 bg-stone-200">
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-5xl font-bold mb-5 pl-5 pt-5">{params.familyID}</h1>
          <Grid>
          {family.map((item) => { 
          return (
            <>
            <Card key={item.name} title={item.name} desc={item.desc} img={item.img}/>
            </>
          )
        })}
        </Grid>
        </div>
      </main>
    </>
  )
}