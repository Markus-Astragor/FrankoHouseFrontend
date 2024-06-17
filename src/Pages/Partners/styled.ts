import styled from "styled-components";
import backgroundFranko from "../../assets/partners/franko_background.png";

export const PartnerBlock = styled.div`
  @import url("https://fonts.cdnfonts.com/css/kelly-slab");
  width: 100%;
  scrollbar-width: none;
  overflow-y: scroll;
  padding: 7.81vh 0;
  background: url(${backgroundFranko}) no-repeat center center fixed;
  background-size: cover;
  background-position-x: center;
  display: flex;
  flex-direction: column;
  row-gap: 9.76vh;
  box-sizing: border-box;
`;

export const BlockForTitle = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h2`
  color: white;
  font-size: 53px;
  font-family: "Kelly Slab", sans-serif;
  font-weight: 100;
  letter-spacing: -1.5px;
`;

export const PartnersContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  max-width: 1500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6.94vw;
`;

export const ImageBlock = styled.div`
  width: 159px;
  height: 159px;
  cursor: pointer;

  @media (min-width: 300px) and (max-width: 450px) {
    width: 120px;
    height: 120px;
  }

  @media (min-width: 901px) and (max-width: 1100px) {
    width: 100px;
    height: 100px;
  }

  @media (min-width: 1101px) and (max-width: 1500px) {
    width: 120px;
    height: 120px;
  }
`;

export const PartnerImage = styled.img`
  width: 100%;
  height: 100%;
`;
