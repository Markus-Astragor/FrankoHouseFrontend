import axios, { AxiosError } from "axios";
import { useState } from "react";

function useDelete(url: string) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  async function sendRequest(obj: { name: string; id: string | number }) {
    if (!obj.id) return;
    try {
      setIsLoading(true);
      const res = await axios.delete(`${url}`, {
        data: {
          [obj.name]: obj.id,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      });

      if (res.status !== 200) throw new Error("Виникла помилка при завантажені даних");
      console.log(res);
      setMessage(res.data.message);
    } catch (error) {
      if (error instanceof Error) {
        if (error instanceof AxiosError) {
          return setMessage(error.response?.data.message);
        }
      }
      setMessage("Виникла помилка при завантажені данних");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { sendRequest, isLoading, setIsLoading, message, setMessage };
}

export { useDelete };
