"use client";
import { items, services } from "@/app/config";
import { Grid } from "@/components/Grid";
import { Slideshow } from "@/components/Slideshow";
import { LuWheat } from "react-icons/lu";
import { PiPlant } from "react-icons/pi";
import { MdMiscellaneousServices } from "react-icons/md";
import { GiTomato } from "react-icons/gi";
import Image from "next/image";
import { Card } from "@/components/Card";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center bg-stone-100">
        <Slideshow />
        <div className="flex flex-col items-center justify-center w-full border-t-8 border-emerald-600">
          <h1 className="flex text-3xl md:text-5xl font-black mt-10 md:mt-20">
            <PiPlant size="1em" className="mr-3 text-emerald-600" />
            Продукція
          </h1>
          <div className="py-5 md:py-10">
            <Grid>
              {items.map((el) => {
                return (
                  <>
                    <Card key={el.title} title={el.title} img={el.img} />
                  </>
                );
              })}
            </Grid>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full border-t-8 bg-emerald-600">
          <h1 className="flex text-3xl md:text-5xl text-white font-black mt-10 md:mt-20">
            <MdMiscellaneousServices size="1em" className="mr-3 text-white" />
            Послуги
          </h1>
          <div className="py-5 md:py-10">
            <Grid>
              {services.map((el) => {
                return (
                  <>
                    <Card key={el.title} title={el.title} img={el.img} />
                  </>
                );
              })}
            </Grid>
          </div>
        </div>
        <section className="w-full relative" id="contacts">
          <div className="absolute inset-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21655.15627131309!2d28.13398468574302!3d48.9202756970125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1suk!2sua!4v1694762454383!5m2!1suk!2sua"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title='ФГ "Дзялів"'
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="container px-5 py-24 mx-auto max-w-7xl flex">
            <div className="lg:w-1/2 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative drop-shadow-xl">
              <h2 className="text-gray-900 text-5xl mb-5 font-bold title-font">Контакти</h2>
              <p className="mb-5 text-md text-gray-600">Ми завжди раді відповісти на ваші запитання. Зв`яжіться з нами за допомогою наступних контактних даних:</p>
              <h3 className="text-gray-900 font-bold my-2">
                Адреса:
                <br />
                <span className="text-emerald-600">вул. Перемоги 3, с. Камʼяногірка, Вінницька обл.</span>
              </h3>
              <h3 className="text-gray-900 font-bold my-2">
                Телефон:
                <br />
                <span className="text-emerald-600">
                  <a href="tel:+380345353443">+380345353443</a>
                  <br />
                  <a href="tel:+380456546456">+380456546456</a>
                </span>
              </h3>
              <h3 className="text-gray-900 font-bold my-2">
                E-mail:
                <br />
                <a href="mailto:dzialiv@gmail.com" className="font-medium text-emerald-600">
                  dzialiv@gmail.com
                </a>
              </h3>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
