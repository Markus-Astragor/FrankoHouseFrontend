import React, { useEffect, useState } from "react";
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
import { useLanguageContext } from "../../../Context/LanguageContext";

function AboutUsFranko() {
  const { language } = useLanguageContext();
  const { t } = useTranslation();
  const [currentText, setCurrentText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const text = t("ns1.description.about-us.franko-quote");
  const showFrankoName = currentIndex === text.length;

  // changig text when language chnages accordingly
  useEffect(() => {
    setCurrentIndex(0);
    setCurrentText("");
  }, [language]);

  // animating text
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 40);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, language]);

  return (
    <AboutUsFrankoStyled>
      <AboutUsFrankoContainer>
        <FrankoQuote>
          {currentText}
          <FrankoQuoteAuthor showFrankoName={showFrankoName}>
            - {t("ns1.description.about-us.franko-name")}
          </FrankoQuoteAuthor>
        </FrankoQuote>

        <FrankoImg src={frankoImgSrc} />
        <FlowersImg src={flowersImgSrc} />
      </AboutUsFrankoContainer>
      <WhiteBackground />
    </AboutUsFrankoStyled>
  );
}

export default AboutUsFranko;
