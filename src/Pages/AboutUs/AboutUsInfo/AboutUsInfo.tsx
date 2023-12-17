import React from "react";
import {
  AboutUsInfoContainer,
  AboutUsInfoStyled,
  AboutUsInfoTtitle,
  AboutUsFlex,
  AboutUsFlexLeft,
  AboutUsFlexLeftTitle,
  AboutUsFlexLeftDesc,
  List,
  Li,
  AboutUsFlexRight,
  AboutUsFlexRightBook,
  AboutUsFlexRightFranko,
} from "./AboutUsInfoStyles";

import frankoWithBookImgSrc from "../../../assets/about-us/about-us-info/franko.png";
import bookImgSrc from "../../../assets/about-us/about-us-info/book.png";

function AboutUsInfo() {
  return (
    <AboutUsInfoStyled>
      <AboutUsInfoContainer>
        <AboutUsInfoTtitle>Про нас</AboutUsInfoTtitle>
        <AboutUsFlex>
          <AboutUsFlexLeft>
            <AboutUsFlexLeftTitle>Хто ми?</AboutUsFlexLeftTitle>
            <AboutUsFlexLeftDesc>
              Наша місія - об&apos;єднати музеї, які присвячені Івану Франку, для спільної роботи
              над збереженням та популяризацією його спадщини в Україні та за її межами.
            </AboutUsFlexLeftDesc>
            <AboutUsFlexLeftTitle>Чим ми займаємось?</AboutUsFlexLeftTitle>
            <List>
              <Li>Дослідження</Li>
              <Li>Популяризація</Li>
              <Li>Комунікація</Li>
              <Li>Взаємодія</Li>
            </List>
          </AboutUsFlexLeft>
          <AboutUsFlexRight>
            <AboutUsFlexRightBook src={bookImgSrc} />
            <AboutUsFlexRightFranko src={frankoWithBookImgSrc} />
          </AboutUsFlexRight>
        </AboutUsFlex>
      </AboutUsInfoContainer>
    </AboutUsInfoStyled>
  );
}

export default AboutUsInfo;
