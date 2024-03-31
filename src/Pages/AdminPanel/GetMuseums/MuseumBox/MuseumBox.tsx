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

import { MuseumInfoPropsWithId } from "../../types/museumInfoProps";

import moment from "moment";
import "moment/locale/uk";
// import { MuseumsContainer } from "../../../../components/Museums/MuseunsStyles";
type DeleteFunction = (id: string) => void;

export default function Post({
  museum,
  handlePostDelete,
}: {
  museum: MuseumInfoPropsWithId;
  handlePostDelete: DeleteFunction;
}) {
  moment.locale("uk");

  const title = museum.urkMuseumTitle.split(" ").slice(0, 7).join(" ");
  const addDots = museum.urkMuseumTitle.split(" ").length >= 7;

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
