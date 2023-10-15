import React, { useEffect, useState } from "react";
import { authHost } from "../http";

const EditModal = ({ data, visible, onHide, update }) => {
  const [file, setFile] = useState(data?.img);
  const [newFile, setNewFile] = useState(null);
  const [name, setName] = useState(data?.name);
  const [desc, setDesc] = useState(data?.desc);
  const [category_id, setCategory] = useState(data?.category_id);
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
      .catch((e) => console.log(e.response.data.message));
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
                <label className="block mb-2 text-sm font-medium text-white" htmlFor="food_photo">
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
                  placeholder="Рис, норі ..."
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                ></textarea>
                <label htmlFor="weight" className="block mb-2 mt-2 text-sm font-medium text-white">
                  Cуб-категорія:
                </label>
                <input
                  type="text"
                  id="subcategory_id"
                  className="bg-neutral-50 text-neutral-900 text-sm rounded-lg block w-full p-2.5 placeholder-neutral-400"
                  placeholder="100"
                  value={subcategory_id}
                  onChange={(e) => setSubcategory(e.target.value)}
                />
                <label htmlFor="price" className="block mb-2 mt-2 text-sm font-medium text-white">
                  Посилання:
                </label>
                <input
                  type="text"
                  id="link"
                  className="bg-neutral-50 text-neutral-900 text-sm rounded-lg block w-full p-2.5 placeholder-neutral-400"
                  placeholder="250"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
                <label htmlFor="category" className="block mt-2 mb-2 text-sm font-medium text-white">
                  Категорія:
                </label>
                <select
                  id="category_id"
                  className="bg-neutral-100 text-neutral-900 text-sm rounded-lg block w-full p-2.5 placeholder-neutral-400"
                  onChange={(e) => setCategory(e.target.value)}
                  value={category_id}
                >
                  <option value="product">Продукція</option>
                  <option value="service">Послуги</option>
                </select>
                <div className="flex items-center justify-center mt-10 md:mt-5">
                  <button onClick={update ? handleUpdateProduct : handleAddProduct }>{update ? "Оновити" : "Додати"}</button>
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