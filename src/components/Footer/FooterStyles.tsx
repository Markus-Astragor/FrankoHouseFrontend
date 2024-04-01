import styled from "styled-components";

export const FooterStyled = styled.footer`
  @import url("https://fonts.cdnfonts.com/css/kelly-slab");
  font-family: "Kelly Slab", sans-serif;
  width: 100%;
  /* background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.9304971988795518) 0%,
    rgba(0, 0, 0, 1) 9%
  ); */
  background-color: #000;

  padding: 60px 0;
`;

export const FooterContainer = styled.div`
  width: 80%;
  max-width: 1310px;
  margin: 0 auto;
  color: #fff;
`;

export const LogoWrapper = styled.div`
  margin-bottom: 80px;
`;
export const Logo = styled.img`
  width: 140px;
`;

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 40px;
  box-sizing: border-box;
  flex-wrap: wrap;
`;

export const FlexItem = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  max-width: 240px;
  margin-bottom: 40px;
`;

export const TextItem = styled.p``;

export const Link = styled.a`
  position: relative;
  color: #fff;
  text-decoration: none;

  &::before {
    content: "";
    position: absolute;
    border-radius: 5px;
    width: 100%;
    height: 2px;
    background-color: #fff;
    bottom: -4px;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.4s;
  }

  &:hover {
    &::before {
      transform-origin: left;
      transform: scaleX(1);
    }
  }
`;

export const FoxImage = styled.img`
  width: 130px;
`;
