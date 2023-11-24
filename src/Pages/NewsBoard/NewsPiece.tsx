import React from "react";
import {
  NewsPiece,
  ImageForNewsPiece,
  MiddleImageForNewsPiece,
  Title,
  ShortText,
  TimeStamp,
  MiddleBlock,
} from "../../components/styles/NewsBoardStyle";
import MiddleImage from "../../assets/NewsBoardImages/Середина.png";

interface NewsPieceBlockProps {
  image: string;
  title: string;
  shortText: string;
  timeStamp: string;
}

function NewsPieceBlock({ image, title, shortText, timeStamp }: NewsPieceBlockProps) {
  return (
    <NewsPiece>
      <ImageForNewsPiece>
        <img src={image} />
      </ImageForNewsPiece>
      <MiddleBlock>
        <MiddleImageForNewsPiece>
          <img src={MiddleImage} />
          <Title>{title}</Title>
        </MiddleImageForNewsPiece>
        <ShortText>
          {shortText}
          <TimeStamp>{timeStamp}</TimeStamp>
        </ShortText>
      </MiddleBlock>
    </NewsPiece>
  );
}

export default NewsPieceBlock;
