import { useState } from "react";
// import axios, { AxiosError } from "axios";
// import configURLS from "../configURLS.json";

import mockData from "../data/mockData.json";
// type MuseumsData = {
//   frontText: string;
//   rearText: string;
//   link?: string;
//   photo: string[];
// };

export type MuseumsData = {
  _id: string;
  name?: string;
  website?: string;
  email?: string;
  phone?: string;
  working_hours?: string;
  address?: string;
};

const useMuseums = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<MuseumsData[]>([]);

  const getMuseums = async () => {
    try {
      // setIsLoading(true);
      // const res = await axios.get(configURLS.GET_MUSEUMS);
      // if (res.status !== 200) throw new Error("Виникла помилка при завантажені даних");
      // console.log(res);
      // setData(res.data);
      setData(mockData.museums);
    } catch (error) {
      // if (error instanceof Error) {
      //   if (error instanceof AxiosError) {
      //     console.log(error.response?.data.message);
      //   }
      // }
      // console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { getMuseums, isLoading, data };
};

export default useMuseums;
