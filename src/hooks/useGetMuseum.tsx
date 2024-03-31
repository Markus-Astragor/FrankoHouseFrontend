import axios from "axios";
import { useState } from "react";
import { museumInfoProps } from "../Pages/AdminPanel/types/museumInfoProps";

const useGetMuseum = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<museumInfoProps>({
    urkMuseumTitle: "",
    UkrWorkingHr: "",
    UkrAddress: "",
    EnMuseumTitle: "",
    EnWorkingHr: "",
    EnAddress: "",
    link: "",
    phone: "",
    email: "",
  });

  async function getMuseum(
    id: string | undefined,
    // setImagesUrl: Dispatch<SetStateAction<string[]>>,
  ) {
    try {
      setIsLoading(true);
      const res = await axios.get(`http://localhost:8000/museums?_id=${id}`);
      console.log(res);
      setData({
        urkMuseumTitle: res.data[0].urkMuseumTitle,
        UkrWorkingHr: res.data[0].UkrWorkingHr,
        UkrAddress: res.data[0].UkrAddress,
        EnMuseumTitle: res.data[0].EnMuseumTitle,
        EnWorkingHr: res.data[0].EnWorkingHr,
        EnAddress: res.data[0].EnAddress,
        link: res.data[0]?.link || "",
        phone: res.data[0]?.phone || "",
        email: res.data[0]?.email || "",
      });
      // setImagesUrl(res.data[0].photos);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, data, getMuseum };
};

export { useGetMuseum };
