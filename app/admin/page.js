"use client"
import React, { useContext, useEffect } from 'react';
import Login from "@/components/Login";
import AdminDashboard from '@/components/AdminDashboard';

import {observer} from 'mobx-react-lite';
import { useAdminStore } from "@/app/provider";
import { authHost } from '@/http';
import jwt_decode from "jwt-decode";

const AdminPage = observer(() => {
  const {admin} = useAdminStore();

  useEffect(() => {
    document.title = "Адмін";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    authHost
      .get("api/admin/auth")
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        const data = jwt_decode(response.data.token);
        admin.setUser({ id: data.id });
        admin.setIsAuth(true);
      })
      .catch((e) => {
        localStorage.removeItem("token");
        admin.setUser({});
        admin.setIsAuth(false);
      });
  }, [admin]);

  return (
      <div className="flex w-full flex-col items-center justify-center p-5 md:p-24">
        {admin.isAuth ? <AdminDashboard/> : <Login />}
      </div>
  )
})

export default AdminPage;