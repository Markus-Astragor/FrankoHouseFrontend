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
  // const handleOpenGoogleMaps = () =>
  //   window.open("https://maps.app.goo.gl/bxFv8DTAyBmyp7HN7", "_blank");

  return (
    <InfoLineStyled id='contacts'>
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
          <Map>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.076312287309!2d24.0315793!3d49.8222309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae7f574262733%3A0x747c1f490c13827e!2z0JvRjNCy0ZbQstGB0YzQutC40Lkg0L3QsNGG0ZbQvtC90LDQu9GM0L3QuNC5INC70ZbRgtC10YDQsNGC0YPRgNC90L4t0LzQtdC80L7RgNGW0LDQu9GM0L3QuNC5INC80YPQt9C10Lkg0IbQstCw0L3QsCDQpNGA0LDQvdC60LAgKNCU0ZbQvCDQpNGA0LDQvdC60LAp!5e0!3m2!1suk!2sua!4v1715199777165!5m2!1suk!2sua'
              width='100%'
              height='100%'
              loading='lazy'
            ></iframe>
          </Map>
        </FlexContainer>
      </InfoLineContiner>
    </InfoLineStyled>
  );
}

export default InfoLine;
