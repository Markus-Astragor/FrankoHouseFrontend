import axios, { AxiosError } from "axios";
import { useState, Dispatch, SetStateAction } from "react";

function useGet(url: string) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>("");
  async function sendRequest<T>(setData: Dispatch<SetStateAction<T>>) {
    try {
      setIsLoading(true);
      const res = await axios.get(url);
      if (res.status !== 200) throw new Error("Виникла помилка при завантажені даних");
      console.log(res);
      setData(res.data);
    } catch (error) {
      if (error instanceof Error) {
        if (error instanceof AxiosError) {
          setSuccess(error.response?.data.message);
        }
      }
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, setIsLoading, success, sendRequest, setSuccess };
}

export { useGet };
