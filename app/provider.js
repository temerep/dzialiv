"use client"
import React, { createContext, useContext } from 'react';
import AdminStore from "@/store/AdminStore";

const AdminStoreContext = createContext();

export const Provider = ({ children }) => {
  return (
    <AdminStoreContext.Provider value={{ admin: new AdminStore() }}>
      {children}
    </AdminStoreContext.Provider>
  )
};

export const useAdminStore = () => {
  return useContext(AdminStoreContext);
};