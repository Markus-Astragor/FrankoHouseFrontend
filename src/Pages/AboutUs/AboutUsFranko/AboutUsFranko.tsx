import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  AboutUsFrankoStyled,
  WhiteBackground,
  FrankoImg,
  FrankoQuote,
  FlowersImg,
  FrankoQuoteAuthor,
  AboutUsFrankoContainer,
} from "./AboutUsFrankoStyles";

import frankoImgSrc from "../../../assets/about-us/franko-face.png";
import flowersImgSrc from "../../../assets/about-us/flowers.png";

function AboutUsFranko() {
  const { t } = useTranslation();
  useEffect(() => {
    console.log("rendering page");
  }, []);

  return (
    <AboutUsFrankoStyled>
      <AboutUsFrankoContainer>
        <FrankoQuote>
          &quot;{t("ns1.description.about-us.franko-quote")}&quot;
          <FrankoQuoteAuthor>- {t("ns1.description.about-us.franko-name")}</FrankoQuoteAuthor>
        </FrankoQuote>

        <FrankoImg src={frankoImgSrc} />
        <FlowersImg src={flowersImgSrc} />
      </AboutUsFrankoContainer>
      <WhiteBackground />
    </AboutUsFrankoStyled>
  );
}

export default AboutUsFranko;
