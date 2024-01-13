import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../../configURLS.json";
import { CreatePostStyled, Title, PostsBox, CenterBox } from "./GetPostsStyle";
import Post from "./Post/Post";
import Success from "../../../components/SuccesWindow/Success";
import { Loader } from "../../../components/Loader/LoaderComponentStyles";

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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleDeletePost(id: string) {
    setData((prev) => prev.filter((post) => post._id !== id));
  }

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
      <CreatePostStyled>
        <Title>Пости</Title>
        <PostsBox>
          {data.map((el: PostData) => (
            <Post setSuccess={setSuccess} onDeletePost={handleDeletePost} key={el._id} post={el} />
          ))}
        </PostsBox>
      </CreatePostStyled>
      {success && <Success setSuccess={setSuccess} message={success} />}
    </>
  );
}
