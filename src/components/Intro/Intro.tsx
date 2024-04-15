import React from "react";
import { Title, IntroStyled, IntroWrapper } from "./IntroStyles";
import { useTranslation } from "react-i18next";

function Intro() {
  const { t } = useTranslation();
  return (
    <IntroWrapper>
      <IntroStyled>
        <Title id='intro'>{t("ns1.description.intro.main-title")}</Title>
      </IntroStyled>
    </IntroWrapper>
  );
}

export default Intro;
