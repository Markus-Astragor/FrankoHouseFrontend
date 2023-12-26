import styled from "styled-components";
import whiteBgSrc from "../../../assets/about-us/white-backgorund.png";

export const AboutUsFrankoStyled = styled.div`
  height: 700px;
  width: 100%;
  box-sizing: border-box;
  padding: 100px 0 0;
  position: relative;
  @media (max-width: 950px) {
    padding-top: 70px;
  }
`;

export const AboutUsFrankoContainer = styled.div`
  max-width: 1280px;
  padding: 0 20px;
  position: relative;
  height: 100%;
  margin: 0 auto;
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
  width: 420px;
  z-index: 5;
  @media (max-width: 950px) {
    width: 350px;
  }

  @media (max-width: 768px) {
    width: 280px;
  }
  @media (max-width: 430px) {
    width: 220px;
    /* left: 50%;
    transform: translateX(-50%); */
  }
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
  height: auto;

  @media (max-width: 950px) {
    width: 350px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const FrankoQuote = styled.div`
  color: #0c0c0c;
  font-family: "Comfortaa", sans-serif;
  font-size: 30px;
  max-width: 900px;
  line-height: 50px;

  @media (max-width: 1175px) {
    max-width: 600px;
  }

  @media (max-width: 950px) {
    font-size: 26px;
    line-height: 45px;
  }
  @media (max-width: 768px) {
    margin: 0 auto;
    font-size: 20px;
  }
`;

export const FrankoQuoteAuthor = styled.p`
  display: flex;
  justify-content: end;
  padding-right: 100px;
  padding-top: 10px;
  @media (max-width: 950px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    justify-content: end;
  }
`;
