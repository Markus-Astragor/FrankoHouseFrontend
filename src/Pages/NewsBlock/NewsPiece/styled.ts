import { styled } from "styled-components";

export const NewsPiece = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 97%;
  height: auto; // Висота автоматично адаптується
  border: 2px solid black;
  border-radius: 25px;
  cursor: pointer;
  box-sizing: border-box;
`;

export const BlockForImage = styled.img`
  width: 100%;
  min-height: 21.09vh;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export const BlockForTitle = styled.div`
  width: 100%;
  min-height: 10vh;
  max-height: 10.3vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  padding: 1.7vh 1.2vw;
  box-sizing: border-box;
`;
