import styled from "styled-components";

import slideImageSrc from "../../../assets/museums/placeholder.png";

export const SlideContent = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  @media (max-width: 431px) {
    height: 350px;
  }
`;

export const SlideBox = styled.div`
  padding: 10px;
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
  font-size: 18px;

  @media (max-width: 1280px) {
    font-size: 16px;
  }
`;

export const SlideContentBack = styled.div`
  border-radius: 20px;

  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentBackSlide = styled.div``;

// export const VisitButton = styled.a`
//   padding: 8px 0;
//   position: absolute;
//   bottom: 20px;
//   left: 50%;
//   transform: translate(-50%);
//   display: block;
//   text-align: center;
//   width: 80%;
//   margin: 0 auto;
//   border: 2px solid #fff;
//   color: #fff;
//   font-weight: 700;

//   cursor: pointer;
//   transition: 0.3s linear;

//   &:hover {
//     background-color: #fff;
//     color: #000;
//   }
// `;
