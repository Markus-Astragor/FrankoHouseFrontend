import React from "react";
import Map from "./Map/Map";
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
} from "./AboutUsInfoLineStyles";
import PhoneIconSrc from "../../../assets/about-us/about-us-info-line/phone-icon.png";
import MailIconSrc from "../../../assets/about-us/about-us-info-line/mail-icon.png";
import LocationIconSrc from "../../../assets/about-us/about-us-info-line/location-icon.png";
function AboutUsInfoLine() {
  return (
    <AboutUsInfoLineStyled>
      <WhiteBackgorundTop />
      <WhiteBackgorundBottom />
      <AboutUsInfoLineContainer>
        <InfoLineBlock>
          <InfoLineBlockTitle>Інформаційна лінія</InfoLineBlockTitle>
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
              <TextItem>вулиця Івана Франка, 150, 152, Львів, Львівська область, 79000</TextItem>
            </InfoLineBlockItem>
          </ul>
          <Map />
        </InfoLineBlock>
      </AboutUsInfoLineContainer>
    </AboutUsInfoLineStyled>
  );
}

export default AboutUsInfoLine;
