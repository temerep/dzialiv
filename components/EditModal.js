import React, { useEffect, useState } from "react";
import { authHost } from "@/http";
import { Button } from '@nextui-org/react';

const EditModal = ({ data, visible, onHide, update, status, sub }) => {
  const [file, setFile] = useState(data?.img);
  const [newFile, setNewFile] = useState(null);
  const [name, setName] = useState(data?.name);
  const [desc, setDesc] = useState(data?.desc);
  const [category_id, setCategory] = useState(data?.category_id || "products");
  const [subcategory_id, setSubcategory] = useState(data?.subcategory_id);
  const [link, setLink] = useState(data?.link);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [visible])

  useEffect(() => {
    setFile(data?.img);
    setName(data?.name);
    setDesc(data?.desc);
    setCategory(data?.category_id || "products");
    setSubcategory(data?.subcategory_id);
    setLink(data?.link);
  }, [data]);

  const handleUpdateProduct = () => {
    const formData = new FormData();
    formData.append("img", newFile);
    formData.append("name", name);
    formData.append("desc", desc);
    formData.append("subcategory_id", subcategory_id);
    formData.append("link", link);

    authHost
      .patch(`api/product/${data._id}`, formData)
      .then((response) => {
        setTimeout(() => {window.location.reload()}, 500)
      })
      .catch((e) => console.log(e.response.data.message));
  };

  const handleAddProduct = () => {
    const formData = new FormData();
    formData.append("img", newFile);
    formData.append("name", name);
    formData.append("desc", desc);
    formData.append("subcategory_id", subcategory_id);
    formData.append("link", link);

    authHost
      .post("api/product", formData)
      .then((response) => {
        setTimeout(() => {window.location.reload()}, 500)
      })
      .catch((e) => console.log(e));
  };

  const handleUpdateService = () => {
    const formData = new FormData();
    formData.append("img", newFile);
    formData.append("name", name);
    formData.append("desc", desc);
    formData.append("link", link);

    authHost
      .patch(`api/services/${data._id}`, formData)
      .then((response) => {
        setTimeout(() => {window.location.reload()}, 500)
      })
      .catch((e) => console.log(e.response.data.message));
  };

  const handleAddService = () => {
    const formData = new FormData();
    formData.append("img", newFile);
    formData.append("name", name);
    formData.append("desc", desc);
    formData.append("link", link);
    formData.append("category_id", category_id);
    

    authHost
      .post("api/services", formData)
      .then((response) => {
        setTimeout(() => {window.location.reload()}, 500)
      })
      .catch((e) => console.log(e.response.data.message));
  };

  const handleUpdateSlider = () => {
    const formData = new FormData();
    formData.append("img", newFile);
    formData.append("name", name);
    formData.append("desc", desc);
    formData.append("link", link);

    authHost
      .patch(`api/slider/${data._id}`, formData)
      .then((response) => {
        setTimeout(() => {window.location.reload()}, 500)
      })
      .catch((e) => console.log(e.response.data.message));
  };

  const handleAddSlider = () => {
    const formData = new FormData();
    formData.append("img", newFile);
    formData.append("name", name);
    formData.append("desc", desc);
    formData.append("link", link);

    authHost
      .post("api/slider", formData)
      .then((response) => {
        setTimeout(() => {window.location.reload()}, 500)
      })
      .catch((e) => console.log(e));
  };

  const handleUpdateSubcategory = () => {
    const formData = new FormData();
    formData.append("img", newFile);
    formData.append("name", name);
    formData.append("desc", desc);
    formData.append("category_id", category_id);
    formData.append("link", link);

    authHost
      .patch(`api/subcategory/${data._id}`, formData)
      .then((response) => {
        setTimeout(() => {window.location.reload()}, 500)
      })
      .catch((e) => console.log(e.response.data.message));
  };

  const handleAddSubcategory = () => {
    const formData = new FormData();
    formData.append("img", newFile);
    formData.append("name", name);
    formData.append("desc", desc);
    formData.append("category_id", category_id);
    formData.append("link", link);

    authHost
      .post("api/subcategory", formData)
      .then((response) => {
        setTimeout(() => {window.location.reload()}, 500)
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div className={"fixed z-10 overflow-x-hidden top-32 md:top-10 w-full left-0 " + (!visible ? "hidden" : "")}>
        <div className="flex items-start md:items-center justify-center h-screen text-center">
          <div className="fixed inset-0 transition-opacity" onClick={onHide}>
            <div className="absolute inset-0 bg-neutral-950 opacity-80" />
          </div>
          <div
            id="modal"
            aria-hidden="true"
            className={
              (visible ? "flex " : "hidden ") +
              "flex-col md:flex-row mx-auto items-center align-center rounded-2xl bg-neutral-900 overflow-y-auto text-left transform border-4 h-[70vh] md:h-auto border-emerald-600 transition-all p-5"
            }
          >
            <button
              type="button"
              className="absolute top-3 right-2.5 text-neutral-400 bg-transparent rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center min-[1040px]:hover:bg-neutral-600 min-[1040px]:hover:text-white"
              onClick={onHide}
            >
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>

            <div className="flex flex-col px-2 md:px-14 py-2 items-center">
              <div className="">
                <label htmlFor="category" className={(status !== "slider" ? "block" : "hidden") + " mt-2 mb-2 text-sm font-medium text-white"}>
                  Категорія:
                </label>
                <select
                  id="category_id"
                  className={(status !== "slider" ? "block" : "hidden") + " bg-neutral-100 text-neutral-900 text-sm rounded-lg w-full p-2.5 placeholder-neutral-400"}
                  onChange={(e) => setCategory(e.target.value)}
                  value={category_id}
                >
                  <option value="products">Продукція</option>
                  <option value="services">Послуги</option>
                </select>
                <label className="block mt-2 mb-2 text-sm font-medium text-white" htmlFor="food_photo">
                  Фото:
                </label>
                <div className="flex flex-row items-center text-center text-neutral-400">
                  <img
                    src={newFile ? URL.createObjectURL(newFile) : file}
                    className="w-12 cursor-pointer border-2 border-neutral-700 rounded-lg ml-2 mb-2 order-1"
                    alt="IMG"
                    onClick={() => {window.open(newFile ? URL.createObjectURL(newFile) : file)}}
                  />
                  <input
                    className="block w-full p-3 mb-2 text-sm  border rounded-lg cursor-pointer bg-neutral-50 text-neutral-400 focus:outline-none placeholder-neutral-400"
                    id="food_photo"
                    type="file"
                    onChange={(e) => setNewFile(e.target.files[0])}
                  />
                </div>

                <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">
                  Назва:
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-neutral-50 text-neutral-900 text-sm rounded-lg block w-full p-2.5 placeholder-neutral-400"
                  placeholder="Назва"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="desc" className="block my-2 text-sm font-medium text-white">
                  Опис:
                </label>
                <textarea
                  id="desc"
                  rows="3"
                  className="block p-2.5 w-full text-sm text-neutral-900 rounded-lg bg-neutral-100 placeholder-neutral-400"
                  placeholder="..."
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                ></textarea>
                <label htmlFor="subcategory" className={(category_id !== "products" || status === "slider" || status === "subcategory" ? "hidden" : "block") +  " mt-2 mb-2 text-sm font-medium text-white"}>
                  Cуб-категорія:
                </label>
                <select
                  id="subcategory_id"
                  className={(category_id !== "products" || status === "slider" || status === "subcategory" ? "hidden" : "block") + "  bg-neutral-100 text-neutral-900 text-sm rounded-lg w-full p-2.5 placeholder-neutral-400"}
                  onChange={(e) => setSubcategory(e.target.value)}
                  value={subcategory_id}
                >
                  {
                    sub?.map(item => { 
                      return (
                        <option key={item.link} value={item.link}>{item.name}</option>
                      )
                    })
                  }
                </select>
                <label htmlFor="price" className="block mb-2 mt-2 text-sm font-medium text-white">
                  Шлях:
                </label>
                <input
                  type="text"
                  id="link"
                  className="bg-neutral-50 text-neutral-900 text-sm rounded-lg block w-full p-2.5 placeholder-neutral-400"
                  placeholder="zernovi"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
                <div className="flex items-center justify-center mt-10 md:mt-5">
                  <Button
                    className="bg-emerald-600 max-w-min inline-flex items-center py-2 px-3 border-2 text-white border-emerald-500 rounded-lg drop-shadow-xl hover:bg-emerald-300 cursor-pointer select-none"
                    onClick={(status === "subcategory") ? handleAddSubcategory : (status === "slider") ? handleAddSlider : (category_id === "services") ? handleAddService : handleAddProduct}
                  >
                    { update ? "Оновити" : "Додати" }
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditModal;