import React from "react";
import {
  AboutUsMuseumBlock,
  AboutUsMuseumContainer,
  AboutUsLeftPart,
  AboutUsRightPart,
  AboutUsTitle,
  TextContent,
  FrankoUSSRimg,
  ChurchImg,
} from "./styled";
import FrankoUSSR from "../../../assets/about-us/about-us-info/franko-ussr.png";
import Church from "../../../assets/about-us/about-us-info/church.png";
import { useTranslation } from "react-i18next";

export default function AboutUsMuseum() {
  const { t } = useTranslation();
  return (
    <AboutUsMuseumBlock id='about-us'>
      <AboutUsMuseumContainer>
        <AboutUsLeftPart>
          <AboutUsTitle>{t("ns1.description.about-us.about-us-title")}</AboutUsTitle>
          <TextContent>{t("ns1.description.about-us.general-info")}</TextContent>
        </AboutUsLeftPart>
        <AboutUsRightPart>
          <FrankoUSSRimg src={FrankoUSSR} />
          <ChurchImg src={Church} />
        </AboutUsRightPart>
      </AboutUsMuseumContainer>
    </AboutUsMuseumBlock>
  );
}
