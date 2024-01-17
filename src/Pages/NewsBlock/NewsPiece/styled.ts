import { styled } from "styled-components";

export const NewsPiece = styled.div`
  display: block;
  width: 400px;
  min-height: 20vh;
  position: relative;
  margin: 10px 10px 200px 10px;
`;

export const ImageForNewsPiece = styled.div`
  display: block;
  img {
    width: 100%;
  }
  @media (min-width: 450px) and (max-width: 500px) {
    width: 360px;
  }
`;

export const MiddleImageForNewsPiece = styled.div`
  width: 400px;
  position: absolute;
  bottom: -38px;
  z-index: 2;
`;

export const Title = styled.span`
  max-width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  position: absolute;
  font-size: 20px;
  font-weight: bold;
  bottom: 19px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  cursor: pointer;
`;

export const ShortText = styled.div`
  width: 380px;
  height: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  background-color: #d9d9d9;
  padding: 10px;
  text-align: center;
  top: 111%;
  color: white;
  font-size: 14px;
  white-space: nowrap;

  @media (min-width: 400px) and (max-width: 500px) {
    width: 340px;
  }
`;

export const WrapperForShortDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  height: 57px;
`;

export const TimeStamp = styled.div`
  color: black;
  font-weight: 700;
  font-size: 15px;
  margin-top: 36px;
`;

export const MiddleBlock = styled.div`
  display: block;
  position: relative;
`;
