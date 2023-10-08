"use client"
import Image from "next/image";
import {HiMail} from "react-icons/hi"
import {BsFillTelephoneFill} from "react-icons/bs"

export default function Contacts() {
  return (
    <>
      <div className="aboslute flex justify-center items-center w-screen min-h-[70vh] h-screen/3  bg-cover  bg-no-repeat bg-[url('/photos/contacts.jpg')] object-cover">
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <form className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl bg-white">
            <div className="flex">
              <h1 className="font-bold text-stone-800 text-3xl mb-5">
              Якщо у Вас виникли питання або Ви бажаєте зробити замовлення, заповніть форму 
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"  type="text" name="name" placeholder="Ваше імʼя" />
              <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"  type="text" name="surname" placeholder="Ваше прізвище" />
              <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"  type="email" name="email" placeholder="E-mail" />
              <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"  type="text" name="phone" placeholder="Номер телефону" />
            </div>
            <div className="my-4">
              <textarea placeholder="Ваше повідомлення" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-emerald-600 text-gray-100 p-3 rounded-lg max-w-min 
                      focus:outline-none focus:shadow-outline"
              >
                Відправити
              </button>
            </div>
          </form>

          <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-5 ml-auto  border-4 border-emerald-800 bg-emerald-600 rounded-2xl">
            <div className="flex flex-col text-white">
              <div className="flex items-center">
              <Image src="/logo.webp" width={100} height={100}/>
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
                  <div className="flex items-center p-2 bg-white w-full rounded-lg cursor-pointer"><HiMail size="1em" className="text-emerald-600 mr-2"/><h2 className="text-xl text-stone-800">dzialiv@gmail.com</h2></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
