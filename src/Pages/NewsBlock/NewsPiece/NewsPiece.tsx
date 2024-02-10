import React from "react";
import { NewsPiece, BlockForImage, BlockForTitle } from "../NewsPiece/styled";
import moment from "moment";
import "moment/locale/uk";

type NewsPieceBlockProps = {
  id: string;
  image: string;
  title: string;
};

function NewsPieceBlock({ image, title, id }: NewsPieceBlockProps) {
  console.log(id);

  moment.locale("uk");

  return (
    <NewsPiece>
      <BlockForImage src={image} />
      <BlockForTitle>{title}</BlockForTitle>
    </NewsPiece>
  );
}

export default NewsPieceBlock;
