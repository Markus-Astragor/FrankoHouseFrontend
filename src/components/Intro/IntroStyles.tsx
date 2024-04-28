import styled from "styled-components";
import backgroundImage from "../../assets/intro/background.png";

export const IntroWrapper = styled.div`
  overflow: hidden;
`;
export const IntroStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  background-repeat: no-repeat;
  padding-top: 230px;
  padding-left: 150px;

  animation: image_scale 2s ease-in-out forwards;

  @keyframes image_scale {
    from {
      transform: scale(1.3);
    }
    to {
      transform: scale(1);
    }
  }

  @media (min-width: 768px) and (max-width: 1050px) {
    padding-top: 130px;
    padding-left: 110px;
  }

  @media (min-width: 480px) and (max-width: 768px) {
    padding-top: 150px;
    padding-left: 80px;
  }

  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    text-align: center;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-family: Montserrat;
  font-size: 4.5vw;
  font-weight: 600;
  max-width: 60%;

  animation: from_left 2s ease-in-out;

  @keyframes from_left {
    from {
      transform: translateX(-200px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @media (min-width: 768px) and (max-width: 1050px) {
    font-size: 6vw;
  }

  @media (max-width: 768px) {
    font-size: 8vw;
  }
`;
