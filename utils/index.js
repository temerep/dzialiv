"use client"
import React, { useEffect, useState } from "react";
import { host } from "@/http/index";

export const GetData = (endpoint, queryParams = {}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await host.get(endpoint, { params: queryParams });
        setData(response.data);
      } catch (error) {
        console.error("Помилка при отриманні даних:", error);
      }
    };

    fetchData();
  }, []);

  return data;
};