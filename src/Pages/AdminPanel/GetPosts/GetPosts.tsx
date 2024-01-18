import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../../configURLS.json";
import { GetPostsStyled, Title, PostsBox, CenterBox } from "./GetPostsStyle";
import Post from "./Post/Post";
import Success from "../../../components/SuccesWindow/Success";
import { Loader } from "../../../components/Loader/LoaderComponentStyles";
import Confirmation from "../../../components/ConfirmationWindow/Confirmation";

export type PostData = {
  _id: string;
  title: string;
  shortDescription: string;
  timestamp: string;
  photos: string;
};

export default function GetPosts() {
  const [data, setData] = useState<PostData[]>([]);
  const [success, setSuccess] = useState<string>("");
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  // When confirm is true
  async function handleDelete() {
    setShowConfirm(false);
    try {
      setIsLoading(true);
      const res = await axios.delete(`${config["BASE-URL"]}/admin/deletePost`, {
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
    setData((prev) => prev.filter((el) => el._id !== id));
  }
  // When confirm is false
  function handleCancel() {
    setShowConfirm(false);
  }

  function handlePostDelete(id: string) {
    if (!id) return;
    setShowConfirm(true);
    setId(id);
  }

  // Get all Posts
  useEffect(() => {
    async function getPosts() {
      try {
        setIsLoading(true);
        const res = await axios.get(`${config["BASE-URL"]}/getPosts`);

        if (res.status != 200) throw new Error("Виникла помилка при завантажені даних");
        setData(res.data);
      } catch (err) {
        let message: string = "Невідома помилка";
        if (err instanceof Error) message = err.message;
        alert(message);
      } finally {
        setIsLoading(false);
      }
    }
    getPosts();
  }, []);

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
        <Title>Пости</Title>
        <PostsBox>
          {data.map((el: PostData) => (
            <Post handlePostDelete={handlePostDelete} key={el._id} post={el} />
          ))}
        </PostsBox>
      </GetPostsStyled>
      {success && <Success setSuccess={setSuccess} message={success} />}
      {showConfirm && <Confirmation onCancel={handleCancel} onDelete={handleDelete} />}
    </>
  );
}
