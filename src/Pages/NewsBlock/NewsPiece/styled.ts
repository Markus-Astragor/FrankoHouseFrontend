import { styled } from "styled-components";

export const NewsPiece = styled.div`
  display: block;
  width: 97%;
  height: 100%;
  height: calc(194px + 174px);
  border: 2px solid black;
  border-radius: 25px;
  cursor: pointer;
  box-sizing: border-box;
  // margin: 0 15px;
`;

export const BlockForImage = styled.img`
  width: 100%;
  height: 70%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export const BlockForTitle = styled.div`
  height: 30%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  padding: 0px 20px;
`;
