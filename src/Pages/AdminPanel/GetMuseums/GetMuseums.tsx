import React, { useEffect, useState } from "react";

import { GetPostsStyled, Title, PostsBox, CenterBox } from "../GetPosts/GetPostsStyle";
import { Loader } from "../../../components/Loader/LoaderComponentStyles";
import MuseumBox from "./MuseumBox/MuseumBox";
import Confirmation from "../../../components/ConfirmationWindow/Confirmation";
import Success from "../../../components/SuccesWindow/Success";
import config from "../../../configURLS.json";

import axios from "axios";

export type MuseumData = {
  _id: string;
  name: string;
  website?: string;
  email?: string;
  phone?: string;
  working_hours?: string;
  address?: string;
};

function GetMuseums() {
  const [museums, setMuseums] = useState<MuseumData[]>([]);
  const [success, setSuccess] = useState<string>("");
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  useEffect(() => {
    async function getMuseums() {
      try {
        const res = await axios.get("http://localhost:8000/museums");
        if (res.status !== 200) throw new Error("Виникла помилка при завантажені даних");

        setMuseums(res.data);
      } catch (err) {
        let message: string = "Невідома помилка";
        if (err instanceof Error) message = err.message;
        alert(message);
      } finally {
        setIsLoading(false);
      }
    }

    getMuseums();
  }, []);

  function handlePostDelete(id: string) {
    if (!id) return;
    setShowConfirm(true);
    setId(id);
  }

  function handleCancel() {
    setShowConfirm(false);
  }

  async function handleDelete() {
    setShowConfirm(false);
    try {
      setIsLoading(true);
      const res = await axios.delete(`${config["BASE-URL"]}/admin/deleteMuseum`, {
        data: { postId: id },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      });

      if (res.status != 200) throw new Error("Помилка видалення поста");

      console.log(res);
      setSuccess(res.data.message);
    } catch (error) {
      let message = "Невідома помилка";
      if (error instanceof Error) message = error.message;
      alert(message);
    } finally {
      setIsLoading(false);
    }
    setMuseums((prev) => prev.filter((el) => el._id !== id));
  }
  if (isLoading) {
    return (
      <CenterBox>
        <Loader />
      </CenterBox>
    );
  }

  return (
    <>
      <GetPostsStyled>
        <Title>Музеї</Title>
        <PostsBox>
          {museums.map((el: MuseumData, index) => (
            <MuseumBox handlePostDelete={handlePostDelete} key={index} museum={el} />
          ))}
        </PostsBox>
      </GetPostsStyled>
      {success && <Success setSuccess={setSuccess} message={success} />}
      {showConfirm && <Confirmation onCancel={handleCancel} onDelete={handleDelete} />}
    </>
  );
}

export default GetMuseums;
