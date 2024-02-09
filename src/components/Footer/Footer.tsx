import React from "react";
import {
  FooterStyled,
  FooterContainer,
  FlexContainer,
  FlexItem,
  LogoWrapper,
  Logo,
  TextItem,
  FoxImage,
} from "./FooterStyles";
import logoSrc from "../../assets/footer/white-logo.png";
import foxImageSrc from "../../assets/footer/fox.png";
function Footer() {
  return (
    <FooterStyled>
      <FooterContainer>
        <LogoWrapper>
          <Logo src={logoSrc} alt='AMIF logo' />
        </LogoWrapper>

        <FlexContainer>
          <FlexItem>
            <TextItem>
              <strong>Про нас</strong>
            </TextItem>
            <TextItem>Проекти</TextItem>
            <TextItem>Контакти</TextItem>
            <TextItem>Музеї</TextItem>
            <TextItem>Партнери</TextItem>
            <TextItem>Наша місія</TextItem>
          </FlexItem>
          <FlexItem>
            <TextItem>
              <strong>Контакти</strong>
            </TextItem>
            <TextItem>email: dimfranka@gmail.com</TextItem>
            <TextItem>Тел.: +38096 158 46 06 </TextItem>
            <TextItem>+38098 486 00 42</TextItem>
          </FlexItem>
          <FlexItem>
            <TextItem>
              <strong>Aдреса</strong>
            </TextItem>
            <TextItem>Україна, 79011</TextItem>
            <TextItem>Львівська область, місто Львів, вулиця Івана Франка 152</TextItem>
          </FlexItem>
          <FlexItem>
            <FoxImage src={foxImageSrc} alt='fox image' />
          </FlexItem>
        </FlexContainer>
      </FooterContainer>
    </FooterStyled>
  );
}

export default Footer;
