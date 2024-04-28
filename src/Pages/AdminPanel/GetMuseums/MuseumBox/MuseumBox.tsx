import React from "react";
import {
  PostItem,
  PostInfo,
  Title,
  ButtonsBox,
  Button,
  LinkButton,
  ButtonsGroup,
} from "./MuseumBoxStyles";

import { MuseumData } from "../../types/museumInfoProps";

import moment from "moment";
import "moment/locale/uk";
type DeleteFunction = (id: string) => void;

export default function Post({
  museum,
  handlePostDelete,
}: {
  museum: MuseumData;
  handlePostDelete: DeleteFunction;
}) {
  moment.locale("uk");

  const title = museum.title.split(" ").slice(0, 7).join(" ");
  const addDots = museum.title.split(" ").length >= 7;

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
          <ButtonsGroup>
            <Button onClick={() => handlePostDelete(museum._id)}>Видалити</Button>
            <LinkButton to={`${museum._id}`}>Редагувати</LinkButton>
          </ButtonsGroup>
        </ButtonsBox>
      </PostItem>
    </>
  );
}
