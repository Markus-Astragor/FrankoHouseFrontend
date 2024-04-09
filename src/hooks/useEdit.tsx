import axios, { AxiosError } from "axios";
import { useState } from "react";
import { convertToFormData } from "../helpers/convertToFormData";

type IdObject = {
  name: string;
  value: string;
};

function useEdit(url: string) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>("");

  async function sendRequest(images: File[], info: Record<string, string>, postId: IdObject) {
    try {
      setIsLoading(true);
      const data = convertToFormData(info, images);
      data.append(postId.name, postId.value);

      const headers = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      };

      const response = await axios({
        url,
        method: "PATCH",
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
  }

  return { setIsLoading, isLoading, setSuccess, success, sendRequest };
}

export { useEdit };
