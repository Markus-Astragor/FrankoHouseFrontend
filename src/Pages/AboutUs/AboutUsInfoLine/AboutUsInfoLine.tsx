import React from "react";
import Map from "./Map/Map";
import { useTranslation } from "react-i18next";

import {
  AboutUsInfoLineStyled,
  WhiteBackgorundTop,
  WhiteBackgorundBottom,
  AboutUsInfoLineContainer,
  InfoLineBlock,
  InfoLineBlockTitle,
  InfoLineBlockItem,
  TextItem,
  ItemIcon,
  InfoLineBlockText,
  FrankoImg,
} from "./AboutUsInfoLineStyles";
import PhoneIconSrc from "../../../assets/about-us/about-us-info-line/phone-icon.png";
import MailIconSrc from "../../../assets/about-us/about-us-info-line/mail-icon.png";
import LocationIconSrc from "../../../assets/about-us/about-us-info-line/location-icon.png";
import FrankoImgSrc from "../../../assets/about-us/about-us-info-line/franko-img.png";
function AboutUsInfoLine() {
  const { t } = useTranslation();

  return (
    <AboutUsInfoLineStyled>
      <WhiteBackgorundTop />
      <WhiteBackgorundBottom />
      <AboutUsInfoLineContainer>
        <FrankoImg src={FrankoImgSrc} />
        <InfoLineBlock>
          <InfoLineBlockText>
            <InfoLineBlockTitle>{t("ns1.description.about-us.info-line")}</InfoLineBlockTitle>
            <ul>
              <InfoLineBlockItem>
                <ItemIcon src={PhoneIconSrc} />
                <TextItem>+38097707070</TextItem>
              </InfoLineBlockItem>
              <InfoLineBlockItem>
                <ItemIcon src={MailIconSrc} />
                <TextItem>dimfranka@gmail.com</TextItem>
              </InfoLineBlockItem>
              <InfoLineBlockItem>
                <ItemIcon src={LocationIconSrc} />
                <TextItem>{t("ns1.description.about-us.adress")}</TextItem>
              </InfoLineBlockItem>
            </ul>
          </InfoLineBlockText>
          <Map />
        </InfoLineBlock>
      </AboutUsInfoLineContainer>
    </AboutUsInfoLineStyled>
  );
}

export default AboutUsInfoLine;
