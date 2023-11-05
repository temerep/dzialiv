import React, { useState } from "react";
import { authHost } from "@/http";
import EditModal from "@/components/EditModal";
import { Button } from '@nextui-org/react';

const TableItem = ({ item }) => {
  const [showEdit, setShowEdit] = useState(false);
  // const [showAlert, setShowAlert] = useState(false);
  // const [dataAlert, setDataAlert] = useState({ data: "", status: 0 });

  const handleRecordRemove = (_id) => {
    authHost
      .delete(`api/product/${_id}`)
      .then((response) => {
        setTimeout(() => {window.location.reload()}, 500)
      })
      .catch((e) => console.log(e.response.data.message));
  };

  return (
    <>
      {/* {showAlert && <Alert onHide={() => setShowAlert(!showAlert)} data={dataAlert} />} */}
      <EditModal
        visible={showEdit}
        onHide={() => {
          setShowEdit(!showEdit);
        }}
        data={item}
        update
      />
      <tr className="border-b bg-neutral-100 border-neutral-300">
        {
          Object.keys(item).map(key => {
            if (['_id', 'createdAt', 'updatedAt', '__v'].includes(key)) { return null; }
            return(
            <td key={item[key]} className="px-6 py-4 max-w-[250px] truncate">{item[key]}</td>
            )
          })
        }
        <td className="py-4 px-6">
          <div className="flex flex-row">
          <Button
            type="button"
            className="transitions ease-in-out duration-200 justify-center items-center flex-shrink-0 rounded-lg inline-flex h-8 w-8 border-2 border-neutral-400 text-neutral-400 min-[1040px]:hover:text-white min-[1040px]:hover:bg-neutral-400 min-[1040px]:hover:border-0 active:text-white active:bg-neutral-400 active:border-0"
            aria-label="Edit"
            onClick={() => {
              setShowEdit(!showEdit);
            }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
              <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
              <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></polygon>
            </svg>
          </Button>
          <Button
            type="button"
            className="ml-2 transitions ease-in-out duration-200 justify-center items-center flex-shrink-0 rounded-lg inline-flex h-8 w-8 border-2 border-red-700 text-red-700 min-[1040px]:hover:text-white min-[1040px]:hover:bg-red-700 min-[1040px]:hover:border-0 active:text-white active:bg-red-700 active:border-0"
            aria-label="Close"
            onClick={() => {
              handleRecordRemove(item._id);
            }}
          >
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            </Button>
            </div>
        </td>
      </tr>
    </>
  );
};

export default TableItem;