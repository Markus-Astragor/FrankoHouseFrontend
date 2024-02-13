import { styled } from "styled-components";

export const NewsPiece = styled.div`
  display: block;
  width: 381px;
  height: 368px;
  border: 2px solid black;
  border-radius: 25px;
  cursor: pointer;
  box-sizing: border-box;

  @media (min-width: 370px) and (max-width: 450px) {
    width: 300px;
  }
`;

export const BlockForImage = styled.img`
  width: 100%;
  height: 194px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export const BlockForTitle = styled.div`
  width: 381px;
  height: 174px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;

  @media (min-width: 370px) and (max-width: 450px) {
    width: 300px;
    height: 174px;
  }
`;
