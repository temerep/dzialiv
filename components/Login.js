import React,  { useState, useContext } from 'react';
import { host } from "@/http/index";
import jwt_decode from 'jwt-decode';

import {observer} from 'mobx-react-lite';
import { useAdminStore } from '@/app/provider';

const Login = observer(() => {
  const {admin} = useAdminStore();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const response = await host.post("/api/admin/login", { username, password });
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        const data = jwt_decode(response.data.token);
        admin.setUser({id: data.id});
        admin.setIsAuth(true);
      }
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <div className="w-screen max-w-md">
      <form className="flex flex-col justify-center bg-white rounded-xl px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-neutral-700 text-lg font-bold mb-2" htmlFor="username">
            Логін
          </label>
          <input
            className="appearance-none border-2 rounded-lg w-full py-2 px-3 text-neutral-700 focus:outline-none focus:border-neutral-400"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="admin"
          />
        </div>
        <div className="mb-6">
          <label className="block text-neutral-700 text-lg font-bold mb-2" htmlFor="password">
            Пароль
          </label>
          <input
            className="appearance-none border-2  rounded-lg w-full py-2 px-3 text-neutral-700 mb-3 focus:outline-none focus:border-neutral-400"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
          <p className="hidden text-red-700 text-xs italic">Будь ласка, введіть пароль.</p>
        </div>
        <div className="m-auto items-center justify-сenter">
          <button className='p-5 bg-emerald-600' value="Вхід" onClick={signIn}>Вхід</button>
        </div>
      </form>
    </div>
  );
})

export default Login;