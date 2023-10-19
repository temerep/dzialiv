"use client"
import React, { useEffect, useState } from "react";
import { authHost, host } from "@/http";
import EditModal from "./EditModal";

const AdminDashboard = () => {
  const [products, setProducts] = useState(null);
  const [services, setServices] = useState(null);
  const [slider, setSlider] = useState(null);
  const [subcategories, setSubcategories] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [modalStatus, setModalStatus] = useState();

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
      .get("api/services")
      .then((response) => {
        setServices(response.data);
      })
      .catch((e) => console.log(e.response.data.message));
  }, []);

  useEffect(() => {
    host
      .get("api/slider")
      .then((response) => {
        setSlider(response.data);
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

  return (
    <>
      <EditModal
        visible={showAdd}
        onHide={() => {
          setShowAdd(!showAdd);
        }}
        status={modalStatus}
        sub={subcategories}
      />
      <div className={"flex flex-col w-[90vw] md:w-auto items-center p-10 bg-white border-4 border-emerald-600 rounded-2xl overflow-x-hidden " + (showAdd ? "overflow-y-hidden" : "")}>
        <h1 className="mb-10 md:mb-16 md:mt-10 text-4xl md:text-5xl text-center font-bold text-black">Панель керування</h1>
        <div className="flex flex-col items-center">
          <div className="flex items-center flex-col md:flex-row mb-5">
            <div className="grid place-items-center">
              <div className="m-4">
                <button
                  className="bg-emerald-600 max-w-min inline-flex items-center py-2 px-3 border-2 text-white border-emerald-500 rounded-lg drop-shadow-xl hover:bg-emerald-300 cursor-pointer select-none"
                  onClick={() => {
                    setModalStatus("products");
                    setShowAdd(!showAdd);
                  }}
                >Додати продукцію/послугу
                </button>
                <button
                  className="bg-emerald-600 max-w-min inline-flex items-center py-2 px-3 border-2 text-white border-emerald-500 rounded-lg drop-shadow-xl hover:bg-emerald-300 cursor-pointer select-none"
                  onClick={() => {
                    setModalStatus("subcategory");
                    setShowAdd(!showAdd);
                  }}
                >Додати субкатегорію продукції
                </button>
                <button
                  className="bg-emerald-600 max-w-min inline-flex items-center py-2 px-3 border-2 text-white border-emerald-500 rounded-lg drop-shadow-xl hover:bg-emerald-300 cursor-pointer select-none"
                  onClick={() => {
                    setModalStatus("slider");
                    setShowAdd(!showAdd);
                  }}
                >Додати слайди на головній
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default AdminDashboard;