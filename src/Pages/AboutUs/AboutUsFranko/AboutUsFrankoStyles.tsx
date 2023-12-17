import styled from "styled-components";
import whiteBgSrc from "../../../assets/about-us/white-backgorund.png";

export const AboutUsFrankoStyled = styled.div`
  height: 700px;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 100px 40px 0;
`;

export const WhiteBackground = styled.div`
  height: 130px;
  width: 100%;
  background-image: url(${whiteBgSrc});
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 6;
`;

export const FrankoImg = styled.img`
  position: absolute;
  bottom: 40px;
  right: 0px;
  height: auto;
  width: 400px;
  /* width: 30%; */
  width: calc(20vw + 130px);
  z-index: 5;
`;

export const YellowCircle = styled.div`
  width: 300px;
  height: 300px;
  background-color: yellow;
  border-radius: 50%;
  position: absolute;
  top: 100px;
  /* top: 100px; */
  right: 70px;
  z-index: 4;
`;

export const FlowersImg = styled.img`
  position: absolute;
  bottom: 130px;
  left: 0;
  width: 500px;
  /* width: 30%; */
  width: calc(20vw + 200px);

  height: auto;
`;

export const FrankoQuote = styled.div`
  color: #0c0c0c;
  font-family: "Comfortaa", sans-serif;
  font-size: 30px;
  max-width: 900px;
  line-height: 50px;
`;

export const FrankoQuoteAuthor = styled.p`
  display: flex;
  justify-content: end;
  padding-right: 100px;
  padding-top: 30px;
`;
