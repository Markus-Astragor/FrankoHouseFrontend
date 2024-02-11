import React from "react";
import { NewsPiece, BlockForImage, BlockForTitle } from "../NewsPiece/styled";

import moment from "moment";
import "moment/locale/uk";

type NewsPieceBlockProps = {
  id: string;
  image: string;
  title: string;
  setSelectedNews: (news: string | null) => void;
  setShowCards: (show: boolean) => void;
};

function NewsPieceBlock({ image, title, id, setSelectedNews, setShowCards }: NewsPieceBlockProps) {
  console.log(id);

  moment.locale("uk");

  return (
    <NewsPiece
      onClick={() => {
        setSelectedNews(id);
        setShowCards(false);
      }}
    >
      <BlockForImage src={image} />
      <BlockForTitle>{title}</BlockForTitle>
    </NewsPiece>
  );
}

export default NewsPieceBlock;
