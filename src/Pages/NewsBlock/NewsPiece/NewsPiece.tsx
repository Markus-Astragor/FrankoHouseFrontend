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
  const words: string = title.split(" ").slice(0, 6).join(" ");
  const newTitle: string = title.split(" ").length > 6 ? words + "..." : words;

  return (
    <NewsPiece
      onClick={() => {
        setSelectedNews(id);
        setShow(true);
      }}
    >
      <BlockForImage src={image} />

      <BlockForTitle>{newTitle}</BlockForTitle>
    </NewsPiece>
  );
}

export default NewsPieceBlock;
