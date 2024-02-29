import styled from "styled-components";

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

  @media (max-width: 431px) {
    padding: 0 40px;
  }
`;

export const MuseumTitle = styled.h2`
  text-align: center;
  font-size: 36px;
  margin-bottom: 40px;

  @media (max-width: 820px) {
    font-size: 30px;
  }

  @media (max-width: 430px) {
    font-size: 26px;
  }
`;
