import styled from "styled-components";

import slideImageSrc from "../../assets/museums/placeholder.png";

export const MuseumsStyled = styled.div`
  @import url("https://fonts.cdnfonts.com/css/kelly-slab");

  width: 100%;
  overflow: hidden;
  font-family: "Kelly Slab", sans-serif;
  padding: 80px 0;
`;

export const MuseumsContainer = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const MuseumTitle = styled.h2`
  text-align: center;
  font-size: 36px;
  margin-bottom: 40px;
`;

export const Slide = styled.div`
  padding: 10px;
  box-sizing: border-box;
`;

export const SlideContent = styled.div`
  position: relative;
  border-radius: 20px;
  height: 80vh;
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
`;

export const SlideContentTitle = styled.div`
  text-align: center;
  color: #fff;
  font-size: 18px;
`;

export const VisitButton = styled.a`
  padding: 8px 0;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%);
  display: block;
  text-align: center;
  width: 80%;
  margin: 0 auto;
  border: 2px solid #fff;
  color: #fff;
  font-weight: 700;

  cursor: pointer;
  transition: 0.3s linear;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
