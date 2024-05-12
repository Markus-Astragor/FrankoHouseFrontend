import { useState } from "react";
import axios, { AxiosError } from "axios";
import { convertToFormData } from "../helpers/convertToFormData";

const useCreate = (url: string) => {
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendRequest = async (
    images: File[],
    method: "POST",
    info: Record<string, string>,
    photoName: string,
  ) => {
    try {
      setIsLoading(true);
      const data = convertToFormData(info, images, photoName);

      const headers = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      };

      const response = await axios({
        url,
        method,
        data,
        headers,
      });

      console.log(response);
      setMessage(response.data.message);
    } catch (error) {
      if (error instanceof Error) {
        if (error instanceof AxiosError) {
          setMessage(error.response?.data.message);
        }
      }
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { sendRequest, isLoading, message, setMessage };
};

export { useCreate };
