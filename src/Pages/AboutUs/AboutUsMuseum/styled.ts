import styled from "styled-components";

export const AboutUsMuseumBlock = styled.div`
  @import url("https://fonts.cdnfonts.com/css/kelly-slab");
  width: 80%;
  margin: 0 auto;
  padding: 11.38vh 0;
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
  margin-left: 1.04vw;
  font-size: 3.2rem;
  font-family: "Kelly Slab", sans-serif;
  font-weight: 100;
`;

export const TextContent = styled.p`
  margin-top: 3.79vh;
  font-family: "Montserrat";
  font-size: 1.25rem;
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
  margin: 19.16vh 0px 0px 10.41vw;
  width: 70%;
  height: 70%;
`;

export const ChurchImg = styled.img`
  position: absolute;
  bottom: 13vh;
  left: 7.5vw;
  width: 70%;
  height: 70%;
`;
