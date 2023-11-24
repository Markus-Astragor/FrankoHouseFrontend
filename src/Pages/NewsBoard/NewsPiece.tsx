import React from "react";
import {
  NewsPiece,
  ImageForNewsPiece,
  MiddleImageForNewsPiece,
  Title,
  ShortText,
} from "../../components/styles/NewsBoardStyle";
import MiddleImage from "../../assets/NewsBoardImages/Середина.png";

interface NewsPieceBlockProps {
  image: string;
  title: string;
  shortText: string;
}

function NewsPieceBlock({ image, title, shortText }: NewsPieceBlockProps) {
  return (
    <NewsPiece>
      <ImageForNewsPiece>
        <img src={image} />
      </ImageForNewsPiece>
      <MiddleImageForNewsPiece>
        <img src={MiddleImage} />
        <Title>{title}</Title>
      </MiddleImageForNewsPiece>
      <ShortText>{shortText}</ShortText>
    </NewsPiece>
  );
}

export default NewsPieceBlock;
