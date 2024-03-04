import styled from "styled-components";

export const AboutUsMuseumBlock = styled.div`
  @import url("https://fonts.cdnfonts.com/css/kelly-slab");
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  padding: 20px 0 60px;
  @media (min-width: 300px) and (max-width: 1100px) {
    margin-bottom: 740px;
  }
`;

export const AboutUsMuseumContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media (min-width: 300px) and (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const AboutUsLeftPart = styled.div`
  width: 55%;

  @media (min-width: 300px) and (max-width: 1100px) {
    width: 100%;
  }
`;

export const AboutUsTitle = styled.h2`
  margin-left: 20px;
  margin-top: 123px;
  font-size: 53px;
  font-family: "Kelly Slab", sans-serif;
  font-weight: 100;
`;

export const TextContent = styled.p`
  margin-top: 41px;
  font-family: "Montserrat";
  font-size: 20px;
  color: black;
  font-weight: 600;
`;

export const AboutUsRightPart = styled.div`
  width: 45%;
  position: relative;

  @media (min-width: 300px) and (max-width: 1100px) {
    width: 100%;
  }
`;

export const FrankoUSSRimg = styled.img`
  display: block;
  margin: 207px 0px 0px 200px;
  width: 461px;
  height: 396px;

  @media (min-width: 300px) and (max-width: 500px) {
    margin-left: 120px;
    width: 191px;
    height: 191px;
  }

  @media (min-width: 501px) and (max-width: 700px) {
    margin-left: 141px;
    width: 315px;
    height: 304px;
  }

  @media (min-width: 701px) and (max-width: 900px) {
    margin-left: 141px;
    width: 381px;
  }

  @media (min-width: 901px) and (max-width: 1100px) {
    margin-top: 143px;
    width: 374px;
  }

  @media (min-width: 1101px) and (max-width: 1300px) {
    margin-left: 146px;
    margin-top: 313px;
    width: 357px;
    height: 298px;
  }

  @media (min-width: 1301px) and (max-width: 1500px) {
    margin-left: 60px;
  }
`;

export const ChurchImg = styled.img`
  position: absolute;
  bottom: 149px;
  left: 144px;
  width: 334px;
  height: 326px;

  @media (min-width: 300px) and (max-width: 500px) {
    bottom: 117px;
    left: 1px;
    width: 262px;
    height: 234px;
  }

  @media (min-width: 501px) and (max-width: 700px) {
    bottom: 168px;
    left: 30px;
    width: 325px;
    height: 313px;
  }

  @media (min-width: 701px) and (max-width: 900px) {
    bottom: 250px;
    left: 30px;
    width: 334px;
    height: 257px;
  }

  @media (min-width: 1101px) and (max-width: 1300px) {
    bottom: 180px;
    left: 32px;
  }

  @media (min-width: 1301px) and (max-width: 1500px) {
    bottom: 231px;
    left: 8px;
  }
`;
