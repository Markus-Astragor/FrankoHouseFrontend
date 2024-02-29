import React from "react";
import {
  InfoLineStyled,
  InfoLineContiner,
  InfoLineTitle,
  FlexContainer,
  Contacts,
  ContactTitle,
  ContactItem,
  Map,
} from "./InfoLineStyles";
import { useTranslation } from "react-i18next";

function InfoLine() {
  const { t } = useTranslation();
  const handleOpenGoogleMaps = () => window.open("https://maps.app.goo.gl/bxFv8DTAyBmyp7HN7", "_blank");
  return (
    <InfoLineStyled>
      <InfoLineContiner>
        <InfoLineTitle>{t("ns1.description.about-us.info-line.title")}</InfoLineTitle>
        <FlexContainer>
          <Contacts>
            <ContactTitle>{t("ns1.description.about-us.info-line.contacts")}</ContactTitle>
            <ContactItem>email: dimfranka@gmail.com</ContactItem>
            <ContactItem>
              {t("ns1.description.about-us.info-line.telephone")} +38096 158 46 06{" "}
            </ContactItem>
            <ContactItem>+38098 486 00 42</ContactItem>
          </Contacts>
          <Map onClick={handleOpenGoogleMaps} />
        </FlexContainer>
      </InfoLineContiner>
    </InfoLineStyled>
  );
}

export default InfoLine;
