import React from "react";
import {
  NewsPiece,
  ImageForNewsPiece,
  MiddleImageForNewsPiece,
  Title,
  ShortText,
  TimeStamp,
  MiddleBlock,
} from "../../../components/styles/NewsBoardStyle";
import MiddleImage from "../../../assets/NewsBoardImages/Середина.png";

interface NewsPieceBlockProps {
  image: string;
  title: string;
  description: string;
  date: string;
}

function NewsPieceBlock({ image, title, description, date }: NewsPieceBlockProps) {
  return (
    <NewsPiece>
      <MiddleBlock>
        <ImageForNewsPiece>
          <img src={image} />
        </ImageForNewsPiece>
        <MiddleImageForNewsPiece>
          <img src={MiddleImage} />
          <Title>{title}</Title>
        </MiddleImageForNewsPiece>
      </MiddleBlock>
      <ShortText>
        {description}
        <TimeStamp>{date}</TimeStamp>
      </ShortText>
    </NewsPiece>
  );
}

export default NewsPieceBlock;
