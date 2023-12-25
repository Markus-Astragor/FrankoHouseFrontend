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
import moment from "moment";
import "moment/locale/uk";

type NewsPieceBlockProps = {
  id: string;
  image: string;
  title: string;
  description: string;
  date: string;
};

function NewsPieceBlock({ image, title, description, date, id }: NewsPieceBlockProps) {
  moment.locale("uk");
  const formattedDate = moment(date).format("HH:mm | DD MMMM YYYY");

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
        <TimeStamp>{formattedDate}</TimeStamp>
      </ShortText>
    </NewsPiece>
  );
}

export default NewsPieceBlock;
