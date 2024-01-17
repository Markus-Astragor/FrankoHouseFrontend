import { useState } from "react";
import axios, { AxiosError } from "axios";

// import config from "../configURLS.json";
import { postInfoProps } from "../Pages/AdminPanel/EditPost/EditPost";
type HttpMethod = "POST" | "PATCH";

const useApi = (url: string) => {
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const sendRequest = async (
    postInfo: postInfoProps,
    images: File[],
    method: HttpMethod,
    postId?: string,
  ) => {
    try {
      setLoading(true);
      const data = new FormData();
      if (postId !== undefined) data.append("postId", postId);
      data.append("ukrTitle", postInfo.ukrTitle);
      data.append("ukrDescription", postInfo.ukrDescription);
      data.append("ukrShortDescription", postInfo.ukrShortDescription);
      data.append("engTitle", postInfo.engTitle);
      data.append("engDescription", postInfo.engDescription);
      data.append("engShortDescription", postInfo.engShortDescription);
      images.forEach((image) => {
        data.append("photos", image);
      });

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
      setLoading(false);
    }
  };

  return { sendRequest, loading, success, setSuccess };
};

export default useApi;
