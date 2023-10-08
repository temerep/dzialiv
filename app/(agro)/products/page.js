import { Grid } from "@/components/Grid";
import {subcategories} from "@/app/config"
import { Card } from "@/components/Card";

export default function Products() {
  return (
    <>
      <main className="flex flex-col items-center w-full p-5 bg-stone-200">
        <div className="flex flex-col">
        <h1 className="text-3xl text-stone-800 md:text-5xl font-bold mb-5 pl-5 pt-5">Продукція</h1>
          <Grid>
          {subcategories.map((el) => { 
          return (
            <>
              <Card key={el.name} title={el.name} img={el.img} desc={el.desc} />
            </>
          )
        })}
        </Grid>
        </div>
      </main>
    </>
  )
}