import { useState } from "react";
import axios, { AxiosError } from "axios";
import { convertToFormData } from "../helpers/convertToFormData";

const useCreate = (url: string) => {
  const [success, setSuccess] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendRequest = async (images: File[], method: string, info: Record<string, string>) => {
    try {
      setIsLoading(true);
      const data = convertToFormData(info, images);

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
      setSuccess(response.data.message);
    } catch (error) {
      if (error instanceof Error) {
        if (error instanceof AxiosError) {
          setSuccess(error.response?.data.message);
        }
      }
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { sendRequest, isLoading, success, setSuccess };
};

export { useCreate };
