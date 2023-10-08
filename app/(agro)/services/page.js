import { Grid } from "@/components/Grid";
import { services } from "@/app/config";
import { Card } from "@/components/Card";

export default function Services() {
  return (
    <>
      <main className="flex flex-col items-center w-full p-5 bg-stone-200">
        <div className="flex flex-col">
          <h1 className="text-3xl text-stone-800 md:text-5xl font-bold mb-5 pl-5 pt-5">Послуги</h1>
          <Grid>
            {services.map((el) => {
              return (
                <>
                  <Card key={el.name} title={el.name} desc={el.desc} img={el.img} />
                </>
              );
            })}
          </Grid>
        </div>
      </main>
    </>
  );
}
