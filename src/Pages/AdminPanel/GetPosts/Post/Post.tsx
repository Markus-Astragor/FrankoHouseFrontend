import React from "react";
import {
  PostItem,
  PostInfo,
  Title,
  Date,
  ButtonsBox,
  Button,
  LinkButton,
  ButtonsGroup,
} from "./PostStyle";
import { PostData } from "../GetPosts";

import moment from "moment";
import "moment/locale/uk";
type DeleteFunction = (id: string) => void;

export default function Post({
  post,
  handlePostDelete,
}: {
  post: PostData;
  handlePostDelete: DeleteFunction;
}) {
  moment.locale("uk");

  const title = post.title.split(" ").slice(0, 8).join(" ");
  const addDots = post.title.split(" ").length >= 8;
  const formattedDate = moment(post.timestamp).format("DD MMMM YYYY");

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
          <div>
            <Date>{formattedDate}</Date>
          </div>

          <ButtonsGroup>
            <Button onClick={() => handlePostDelete(post._id)}>Видалити</Button>
            <LinkButton to={`${post._id}`}>Редагувати</LinkButton>
          </ButtonsGroup>
        </ButtonsBox>
      </PostItem>
    </>
  );
}
