"use client"
import { useEffect, useState } from "react";
import { host } from "@/http/index";
import { Grid } from "@/components/Grid";
import { Card } from "@/components/Card";
import { observer } from 'mobx-react-lite';
import { useLocalizationStore } from "@/app/provider";
import localize from "@/app/localize";

const Services = observer(() => {
  const { locale } = useLocalizationStore();
  const [services, setServices] = useState(null);
  useEffect(() => {
    host
      .get("api/services")
      .then((response) => {
        setServices(response.data);
      })
      .catch((e) => console.log(e.response.data.message));
  }, []);
  return (
    <>
      <main className="flex flex-col items-center w-full p-5 bg-stone-200">
        <div className="flex flex-col">
          <h1 className="text-3xl text-stone-800 md:text-5xl font-bold mb-5 pl-5 pt-5">{localize("Послуги", locale.current)}</h1>
          <Grid>
            {services?.map((el) => {
              return (
                  <Card key={el.name} source={el.link} title={localize(el.name, locale.current)} desc={localize(el.desc, locale.current)} img={el.img} btn={localize("Детальніше", locale.current)}/>
              );
            })}
          </Grid>
        </div>
      </main>
    </>
  );
});
export default Services;