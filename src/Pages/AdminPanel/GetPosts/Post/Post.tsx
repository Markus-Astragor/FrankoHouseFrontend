import React, { useState } from "react";
import { PostItem, PostInfo, Title, Date, ButtonsBox, Button } from "./PostStyle";
import { PostData } from "../GetPosts";
import axios from "axios";
import config from "../../../../configURLS.json";
import moment from "moment";
import "moment/locale/uk";
import { Loader } from "../../../../components/Loader/LoaderComponentStyles";
// type DeleteFunction = (id: string) => void;
type PostsProps = {
  onDeletePost: (id: string) => void;
  setSuccess: (success: string) => void;
};
export default function Post({
  post,
  setSuccess,
  onDeletePost,
}: {
  post: PostData;
  onDeletePost: PostsProps["onDeletePost"];
  setSuccess: PostsProps["setSuccess"];
}) {
  moment.locale("uk");

  const [isLoading, setIsLoading] = useState(false);

  const title = post.title.split(" ").slice(0, 8).join(" ");
  const addDots = post.title.split(" ").length >= 8;
  const formattedDate = moment(post.timestamp).format("DD MMMM YYYY");

  async function deletePost() {
    try {
      setIsLoading(true);
      const res = await axios.delete(`${config["BASE-URL"]}/admin/deletePost`, {
        data: { postId: post._id },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      });

      if (res.status != 200) throw new Error("Помилка видалення поста");

      console.log(res);

      onDeletePost(post._id);
      console.log(res.data.message);

      setSuccess(res.data.message);
      // alert("Пост був видалений успішно");
    } catch (error) {
      let message = "Невідома помилка";
      if (error instanceof Error) message = error.message;
      alert(message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <PostItem>
        <PostInfo>
          <Title>
            {title}
            {addDots ? "..." : ""}
          </Title>
        </PostInfo>
        <ButtonsBox>
          <Date>{formattedDate}</Date>

          {isLoading ? <Loader /> : <Button onClick={deletePost}>Видалити</Button>}
          <Button>Редагувати</Button>
        </ButtonsBox>
      </PostItem>
    </>
  );
}
