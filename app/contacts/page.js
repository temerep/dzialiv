"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import InputMask from "react-input-mask";
import { HiMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { host } from '@/http';
import { Button } from '@nextui-org/react';

export default function Contacts() {
  const initValues = { name: "", email: "", phone: "", message: "" };
  const initState = { values: initValues };
  
  const [state, setState] = useState(initState);

  const { values, isLoading } = state;

  const handleChange = ({ target }) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }))
  };

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true
    }))
    try {
      await sendContactForm(values);
      setState(initState);
    } catch (error) {
      console.log(error);
    }
  };

  const sendContactForm = async (data) => {
    try {
      const response = await host.post("api/send-mail", data);
      if (response.status === 200) {
        console.log("Message sent successfully");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="aboslute flex justify-center items-center w-full overflow-hidden overscroll-hidden min-h-[70vh] h-screen/3  bg-cover bg-no-repeat bg-[url('/photos/contacts.jpg')] object-cover">
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl bg-white">
            <div className="flex">
              <h1 className="font-bold text-stone-800 text-3xl mb-5">
              Якщо у Вас виникли питання або Ви бажаєте зробити замовлення, заповніть форму 
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" value={values.name} onChange={handleChange} type="text" name="name" placeholder="Ваше імʼя" />
              <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" value={values.email} onChange={handleChange} type="text" name="email" placeholder="E-mail" />
            </div>
            <InputMask
                      mask="+99-999-999-99-99"
                      maskChar={null}
                      name="phone"
                      id="phone"
                      value={values.phone}
                      placeholder="Номер телефону"
                      className="mt-5 w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      onChange={handleChange}
                    />
            <div className="my-4">
              <textarea placeholder="Ваше повідомлення" name="message" value={values.message} onChange={handleChange} className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <Button
                className="uppercase text-sm font-bold disabled:cursor-not-allowed disabled:bg-stone-300 tracking-wide bg-emerald-600 text-white p-3 rounded-lg max-w-min focus:outline-none focus:shadow-outline"
                disabled={
                  !values.name || !values.email || !values.message
                }
                isLoading={isLoading}
                spinner={
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      fill="currentColor"
                    />
                  </svg>
                }
                onClick={onSubmit}
              >
                Відправити
              </Button>
            </div>
          </div>

          <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-5 ml-auto  border-4 border-emerald-800 bg-emerald-600 rounded-2xl">
            <div className="flex flex-col text-white">
              <div className="flex items-center">
              <Image src="/logo.webp" width={100} height={100} alt=""/>
              <h1 className="font-bold text-4xl ml-3 my-4">ФГ «Дзялів»</h1>
              </div>
              <div className="flex my-4 w-2/3 lg:w-full">
                <div className="flex flex-col">
                  <h2 className="text-2xl p-2 font-medium">вул. Перемоги, 3</h2>
                  <p className=" text-lg px-2">с. Камʼяногірна, Вінницької обл.</p>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-full">
                <div className="flex flex-col">
                  <i className="fas fa-phone-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center p-2 bg-white w-full rounded-lg cursor-pointer"><HiMail size="1em" className="text-emerald-600 mr-2"/><h2 className="text-xl text-stone-800">dzyaliv@ukr.net</h2></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
