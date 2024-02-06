import React from "react";
import { Title, IntroStyled } from "./IntroStyles";
import { useTranslation } from "react-i18next";

function Intro() {
  const { t } = useTranslation();
  return (
    <IntroStyled>
      <Title>{t("ns1.description.intro.main-title")}</Title>
    </IntroStyled>
  );
}

export default Intro;
