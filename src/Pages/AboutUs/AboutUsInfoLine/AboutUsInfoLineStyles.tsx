import styled from "styled-components";
import BackgroundImgSrc from "../../../assets/about-us/about-us-info-line/house.png";
import WhiteTopBgSrc from "../../../assets/about-us/about-us-info-line/top.png";
import WhiteBottomBgSrc from "../../../assets/about-us/about-us-info-line/bottom.png";

export const AboutUsInfoLineStyled = styled.div`
  width: 100%;
  /* height: 1000px; */
  position: relative;
  background-image: url(${BackgroundImgSrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  padding: 200px 0;
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
`;

export const AboutUsInfoLineContainer = styled.div`
  max-width: 1260px;
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
`;

export const InfoLineBlockTitle = styled.h2`
  color: #040404;
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
`;

export const InfoLineBlockItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const TextItem = styled.span`
  color: #000;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 400;
`;

export const ItemIcon = styled.img`
  width: 20px;
  height: auto;
`;
