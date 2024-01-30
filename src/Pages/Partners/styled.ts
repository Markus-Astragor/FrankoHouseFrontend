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
  gap: 133px;
`;

export const ImageBlock = styled.div`
  width: 159px;
  height: 159px;
  cursor: pointer;
`;
