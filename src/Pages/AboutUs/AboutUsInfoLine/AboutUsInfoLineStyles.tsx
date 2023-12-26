import styled from "styled-components";
import BackgroundImgSrc from "../../../assets/about-us/about-us-info-line/house.png";
import WhiteTopBgSrc from "../../../assets/about-us/about-us-info-line/top.png";
import WhiteBottomBgSrc from "../../../assets/about-us/about-us-info-line/bottom.png";

export const AboutUsInfoLineStyled = styled.div`
  width: 100%;
  position: relative;
  background-image: url(${BackgroundImgSrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  padding: 200px 0;
  @media (max-width: 580px) {
    padding: 100px 0;
  }
`;

export const WhiteBackgorundTop = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  background-image: url(${WhiteTopBgSrc});
  height: 120px;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 580px) {
    height: 60px;
  }
`;

export const WhiteBackgorundBottom = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  background-image: url(${WhiteBottomBgSrc});
  height: 120px;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 5;
  @media (max-width: 580px) {
    height: 60px;
  }
`;

export const AboutUsInfoLineContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: end;
`;

export const InfoLineBlock = styled.div`
  background-color: #fff;
  border-radius: 70px;
  width: 500px;
  padding: 20px 30px 40px;
  box-sizing: border-box;
  @media (max-width: 1080px) {
    width: 400px;
  }
  @media (max-width: 870px) {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 20px;
  }
  @media (max-width: 560px) {
    flex-direction: column;
    padding-top: 40px;
  }
`;

export const InfoLineBlockText = styled.div``;

export const InfoLineBlockTitle = styled.h2`
  color: #040404;
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
  @media (max-width: 660px) {
    font-size: 24px;
  }
`;

export const InfoLineBlockItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  @media (max-width: 580px) {
    margin-bottom: 10px;
  }
`;

export const TextItem = styled.span`
  color: #000;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 400;
  @media (max-width: 660px) {
    font-size: 18px;
  }
`;

export const ItemIcon = styled.img`
  width: 20px;
  height: auto;
`;

export const FrankoImg = styled.img`
  position: absolute;
  left: 0;
  bottom: 50px;
  width: 600px;
  height: auto;
  z-index: 3;
  @media (max-width: 1080px) {
    width: 500px;
  }
  @media (max-width: 870px) {
    display: none;
  }
`;
