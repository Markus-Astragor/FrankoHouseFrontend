import React from "react";
import { useTranslation } from "react-i18next";
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
  FlexItemWrapper,
} from "./AboutUsInfoStyles";

import frankoWithBookImgSrc from "../../../assets/about-us/about-us-info/franko.png";
import bookImgSrc from "../../../assets/about-us/about-us-info/book.png";

function AboutUsInfo() {
  const { t } = useTranslation();

  return (
    <AboutUsInfoStyled id='about-us'>
      <AboutUsInfoContainer>
        <AboutUsInfoTtitle>{t("ns1.description.about-us.about-us-title")}</AboutUsInfoTtitle>
        <AboutUsFlex>
          <AboutUsFlexLeft>
            <FlexItemWrapper>
              <AboutUsFlexLeftTitle>{t("ns1.description.about-us.who-we")}</AboutUsFlexLeftTitle>
              <AboutUsFlexLeftDesc>{t("ns1.description.about-us.our-mission")}</AboutUsFlexLeftDesc>
            </FlexItemWrapper>
            <FlexItemWrapper>
              <AboutUsFlexLeftTitle>
                {t("ns1.description.about-us.our-occupation")}
              </AboutUsFlexLeftTitle>
              <List>
                <Li>{t("ns1.description.about-us.list-of-occupation.item1")}</Li>
                <Li>{t("ns1.description.about-us.list-of-occupation.item2")}</Li>
                <Li>{t("ns1.description.about-us.list-of-occupation.item3")}</Li>
                <Li>{t("ns1.description.about-us.list-of-occupation.item4")}</Li>
              </List>
            </FlexItemWrapper>
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
