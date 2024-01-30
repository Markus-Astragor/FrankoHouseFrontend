import styled from "styled-components";
import backgroundImage from "../../assets/intro/background.png";

export const IntroStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  padding-top: 180px;
  padding-left: 150px;

  @media (min-width: 768px) and (max-width: 1050px) {
    padding-top: 130px;
    padding-left: 110px;
  }

  @media (min-width: 420px) and (max-width: 768px) {
    padding-top: 90px;
    padding-left: 80px;
  }

  @media (max-width: 420px) {
    padding-top: 80px;
    padding-left: 50px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-family: Montserrat;
  font-size: 5vw;
  font-weight: 600;

  @media (min-width: 768px) and (max-width: 1050px) {
    font-size: 6vw;
  }

  @media (max-width: 768px) {
    font-size: 8vw;
  }
`;
