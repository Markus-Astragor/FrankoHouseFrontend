import { useState } from "react";
import axios, { AxiosError } from "axios";

import config from "../configURLS.json";
import { museumInfoProps } from "../Pages/AdminPanel/types/museumInfoProps";

const useAddMuseum = () => {
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const sendRequest = async (museumInfo: museumInfoProps, images: File[]) => {
    try {
      setLoading(true);
      const data = new FormData();
      data.append("urkMuseumTitle", museumInfo.urkMuseumTitle);
      data.append("UkrWorkingHr", museumInfo.UkrWorkingHr);
      data.append("UkrAddress", museumInfo.UkrAddress);
      data.append("EnMuseumTitle", museumInfo.EnMuseumTitle);
      data.append("EnWorkingHr", museumInfo.EnWorkingHr);
      data.append("EnAddress", museumInfo.EnAddress);
      data.append("link", museumInfo.link);
      data.append("phone", museumInfo.phone);
      data.append("email", museumInfo.email);
      images.forEach((image) => {
        data.append("photos", image);
      });

      const headers = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      };

      const response = await axios({
        url: config.ADMIN["ADD-MUSEUM"],
        method: "POST",
        data,
        headers,
      });

      console.log(response);
      setSuccess(response.data.message);
    } catch (error) {
      if (error instanceof Error) {
        if (error instanceof AxiosError) {
          setSuccess(error.response?.data.message);
        }
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { sendRequest, loading, success, setSuccess };
};

export default useAddMuseum;
