import styled from "styled-components";

import slideImageSrc from "../../../assets/museums/placeholder.png";
import slideBackSrc from "../../../assets/museums/slide_back.png";
export const SlideContent = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  @media (max-width: 431px) {
    height: 400px;
  }
`;

export const SlideBox = styled.div`
  padding: 30px 10px;
  box-sizing: border-box;
  background-color: transparent;
  perspective: 1000px;

  &:hover {
    ${SlideContent} {
      transform: rotateY(180deg);
    }
  }
`;

export const SlideContentFront = styled.div`
  border-radius: 20px;
  background-image: url(${slideImageSrc});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  position: absolute;

  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;

  @media (max-width: 820px) {
    padding: 0 8px;
  }

  @media (max-width: 431px) {
    padding: 0 25px;
  }
`;

export const SlideContentTitle = styled.div`
  text-align: center;
  color: #fff;
  font-size: 19px;

  @media (max-width: 1280px) {
    font-size: 17px;
  }
`;

export const SlideContentBack = styled.div`
  border-radius: 20px;

  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  background-image: url(${slideBackSrc});
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  transform: rotateY(180deg);
  padding: 50px 25px 10px;
  box-sizing: border-box;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BackMuseumTitle = styled.div`
  text-align: center;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 30px;
  color: #fff;

  @media (max-width: 1280px) {
    font-size: 16px;
  }
`;

export const BackBoldText = styled.div`
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  margin-bottom: 10px;
  color: #fff;

  @media (max-width: 1280px) {
    font-size: 12px;
  }
`;

export const BackSiteLink = styled.a`
  color: #46a6ff;
  text-decoration: underline;
  cursor: pointer;
`;
