import { useState } from "react";
import axios from "axios";

import config from "../configURLS.json";
import { postInfoProps } from "../Pages/AdminPanel/CreatePost/CreatePost";

const useCreatePost = () => {
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const createPost = async (postInfo: postInfoProps, images: File[]) => {
    try {
      setLoading(true);
      const data = new FormData();
      data.append("ukrTitle", postInfo.ukrTitle);
      data.append("ukrDescription", postInfo.ukrDescription);
      data.append("ukrShortDescription", postInfo.ukrShortDescription);
      data.append("engTitle", postInfo.engTitle);
      data.append("engDescription", postInfo.engDescription);
      data.append("engShortDescription", postInfo.engShortDescription);
      images.forEach((image) => {
        data.append("photos", image);
      });

      const response = await axios.post(`${config["BASE-URL"]}/admin/createPost`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      });
      console.log(response);
      setSuccess(response.data.message);
    } catch (error) {
      console.log(error);
      alert("Виникла помилка під час створення поста");
    } finally {
      setLoading(false);
    }
  };

  return { createPost, loading, success, setSuccess };
};

export default useCreatePost;
