import React, { useEffect, useState } from "react";

import { GetPostsStyled, Title, PostsBox, CenterBox } from "../GetPosts/GetPostsStyle";
import { Loader } from "../../../components/Loader/LoaderComponentStyles";
import MuseumBox from "./MuseumBox/MuseumBox";
import Confirmation from "../../../components/ConfirmationWindow/Confirmation";
import MessageWindow from "../../../components/Message/Message";
import config from "../../../configURLS.json";

import { MuseumData } from "../types/museumInfoProps";
import { useGet } from "../../../hooks/useGet";
import { useDelete } from "../../../hooks/useDelete";

function GetMuseums() {
  const [museums, setMuseums] = useState<MuseumData[]>([]);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  const { sendRequest, isLoading, message, setMessage } = useGet(config.GET_MUSEUMS);

  const { isLoading: postIsDeleting, sendRequest: sendDeletePostRequest } = useDelete(
    config.ADMIN["DELETE-MUSEUM"],
  );

  useEffect(() => {
    sendRequest(setMuseums);
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
    sendDeletePostRequest({ name: "museumId", id });
    setMuseums((prev) => prev.filter((el) => el._id !== id));
  }
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
        <Title>Музеї</Title>
        <PostsBox>
          {museums.map((el: MuseumData, index) => (
            <MuseumBox handlePostDelete={handlePostDelete} key={index} museum={el} />
          ))}
        </PostsBox>
      </GetPostsStyled>
      {message && <MessageWindow setMessage={setMessage} message={message} />}
      {showConfirm && <Confirmation onCancel={handleCancel} onDelete={handleDelete} />}
    </>
  );
}

export default GetMuseums;
