import React, { useEffect, useState } from "react";
import config from "../../../configURLS.json";
import { GetPostsStyled, Title, PostsBox, CenterBox } from "./GetPostsStyle";
import Post from "./Post/Post";
import MessageWindow from "../../../components/Message/Message";
import { Loader } from "../../../components/Loader/LoaderComponentStyles";
import Confirmation from "../../../components/ConfirmationWindow/Confirmation";
import { useGet } from "../../../hooks/useGet";
import { useDelete } from "../../../hooks/useDelete";

export type PostData = {
  _id: string;
  title: string;
  shortDescription: string;
  timestamp: string;
  photos: string;
};

export default function GetPosts() {
  const [data, setData] = useState<PostData[]>([]);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  const { isLoading, message, setMessage, sendRequest } = useGet(config["GET-POSTS"]);
  const { isLoading: postIsDeleting, sendRequest: sendDeletePostRequest } = useDelete(
    config.ADMIN["DELETE-POST"],
  );

  // When confirm is true
  async function handleDelete() {
    setShowConfirm(false);
    sendDeletePostRequest({ name: "postId", id });
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
    sendRequest(setData);
  }, []);

  if (isLoading || postIsDeleting) {
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
      {message && <MessageWindow setMessage={setMessage} message={message} />}
      {showConfirm && <Confirmation onCancel={handleCancel} onDelete={handleDelete} />}
    </>
  );
}
