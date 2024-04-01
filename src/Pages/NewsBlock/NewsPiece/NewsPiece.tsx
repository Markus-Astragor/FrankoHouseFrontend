import React from "react";
import { NewsPiece, BlockForImage, BlockForTitle } from "../NewsPiece/styled";

type NewsPieceBlockProps = {
  id: string;
  image: string;
  title: string;
  setSelectedNews: (news: string | null) => void;
  setShow: (show: boolean) => void;
};

function NewsPieceBlock({ image, title, id, setSelectedNews, setShow }: NewsPieceBlockProps) {
  console.log(id);

  return (
    <NewsPiece
      onClick={() => {
        setSelectedNews(id);
        setShow(true);
      }}
    >
      <BlockForImage src={image} />
      <BlockForTitle>{title}</BlockForTitle>
    </NewsPiece>
  );
}

export default NewsPieceBlock;
