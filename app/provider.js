"use client"
import React, { createContext, useContext } from 'react';
import AdminStore from "@/store/AdminStore";
import LocalizationStore from "@/store/LocalizationStore";

const AdminStoreContext = createContext();
const LocalizationStoreContext = createContext();

export const Provider = ({ children }) => {
  return (
    <AdminStoreContext.Provider value={{ admin: new AdminStore() }}>
      <LocalizationStoreContext.Provider value={{locale: new LocalizationStore()}}>
        {children}
      </LocalizationStoreContext.Provider>
    </AdminStoreContext.Provider>
  )
};

export const useAdminStore = () => {
  return useContext(AdminStoreContext);
};

export const useLocalizationStore = () => { 
  return useContext(LocalizationStoreContext);
}