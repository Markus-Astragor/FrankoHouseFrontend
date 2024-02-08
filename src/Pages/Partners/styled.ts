import styled from "styled-components";
import backgroundFranko from "../../assets/partners/franko_background.png";

export const PartnerBlock = styled.div`
  @import url("https://fonts.cdnfonts.com/css/kelly-slab");
  width: 100%;
  height: 700px;
  background: url(${backgroundFranko}) no-repeat center center fixed;
  background-size: cover;
  margin-top: 200px;
  background-position-x: center;

  @media (min-width: 300px) and (max-width: 450px) {
    background: url(${backgroundFranko}) no-repeat center center;
    height: 1048px;
  }

  @media (min-width: 451px) and (max-width: 600px) {
    height: 1213px;
  }

  @media (min-width: 601px) and (max-width: 700px) {
    height: 1400px;
  }

  @media (min-width: 701px) and (max-width: 900px) {
    height: 1492px;
  }

  @media (min-width: 901px) and (max-width: 1300px) {
    height: 505px;
  }

  @media (min-width: 1301px) and (max-width: 1500px) {
    height: 562px;
  }
`;

export const BlockForTitle = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 100px;

  @media (min-width: 300px) and (max-width: 600px) {
    width: 85%;
    gap: 62px;
  }

  @media (min-width: 601px) and (max-width: 700px) {
    width: 70%;
    gap: 100px;
  }

  @media (min-width: 701px) and (max-width: 900px) {
    column-gap: 172px;
    row-gap: 100px;
  }

  @media (min-width: 901px) and (max-width: 1100px) {
    width: 100%;
  }

  @media (min-width: 1101px) and (max-width: 1300px) {
    width: 80%;
    gap: 65px;
  }

  @media (min-width: 1301px) and (max-width: 1500px) {
    width: 80%;
    gap: 108px;
  }
  @media (min-width: 1501px) and (max-width: 1700px) {
    width: 90%;
    gap: 130px;
  }

  @media (min-width: 1701px) and (max-width: 1900px) {
    width: 85%;
    gap: 140px;
  }
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
