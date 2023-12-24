import React from "react";
import {
  NewsPiece,
  ImageForNewsPiece,
  MiddleImageForNewsPiece,
  Title,
  ShortText,
  TimeStamp,
  MiddleBlock,
} from "../NewsPiece/styled";
import MiddleImage from "../../../assets/NewsBoardImages/Середина.png";
import { useNavigate } from "react-router-dom";

type NewsPieceBlockProps = {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
};

function NewsPieceBlock({ image, title, description, date, id }: NewsPieceBlockProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/posts/${id}`);
  };

  return (
    <NewsPiece>
      <MiddleBlock>
        <ImageForNewsPiece>
          <img src={image} />
        </ImageForNewsPiece>
        <MiddleImageForNewsPiece>
          <img src={MiddleImage} />
          <Title onClick={handleClick}>{title}</Title>
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
