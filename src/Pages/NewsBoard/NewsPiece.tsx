import React from "react";
import {
  NewsPiece,
  ImageForNewsPiece,
  MiddleImageForNewsPiece,
  Title,
} from "../../components/styles/NewsBoardStyle";
import MiddleImage from "../../assets/NewsBoardImages/Середина.png";

interface NewsPieceBlockProps {
  image: string;
  title: string;
}

function NewsPieceBlock({ image, title }: NewsPieceBlockProps) {
  return (
    <NewsPiece>
      <ImageForNewsPiece>
        <img src={image} />
      </ImageForNewsPiece>
      <MiddleImageForNewsPiece>
        <img src={MiddleImage} />
        <Title>{title}</Title>
      </MiddleImageForNewsPiece>
    </NewsPiece>
  );
}

export default NewsPieceBlock;
