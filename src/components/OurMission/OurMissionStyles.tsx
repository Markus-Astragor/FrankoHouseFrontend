import styled from "styled-components";
import backgroundSrc from "../../assets/our-mission/background.png";

export const MissionStyled = styled.div`
  width: 100%;
  background-image: url(${backgroundSrc});
  background-size: cover;
  background-position: center;
  padding-top: 80px;
  padding-bottom: 190px;
  box-sizing: border-box;
`;

export const MissionContainer = styled.div`
  width: 90%;
  max-width: 1310px;
  margin: 0 auto;
`;
export const MissionTitle = styled.h2`
  color: #fff;
  text-align: center;
  font-family: "Kelly Slab";
  font-size: 53px;
  margin-bottom: 150px;

  @media (max-width: 1000px) {
    font-size: 40px;
  }
`;

export const MissionsBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  row-gap: 170px;
  column-gap: 80px;

  @media (min-width: 1200px) and (max-width: 1540px) {
    row-gap: 150px;
  }

  @media (min-width: 1000px) and (max-width: 1200px) {
    row-gap: 120px;
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 200px;
  }
`;
