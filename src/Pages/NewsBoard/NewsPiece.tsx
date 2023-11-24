import React from "react";
import { NewsPiece } from "../../components/styles/NewsBoardStyle";

interface NewsPieceBlockProps {
  image: string;
}

function NewsPieceBlock({ image }: NewsPieceBlockProps) {
  return (
    <NewsPiece>
      <img src={image} />
    </NewsPiece>
  );
}

export default NewsPieceBlock;
