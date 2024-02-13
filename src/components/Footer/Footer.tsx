import React from "react";
import {
  FooterStyled,
  FooterContainer,
  FlexContainer,
  FlexItem,
  LogoWrapper,
  Logo,
  TextItem,
  FoxImage,
  Link,
} from "./FooterStyles";
import logoSrc from "../../assets/footer/white-logo.png";
import foxImageSrc from "../../assets/footer/fox.png";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();
  return (
    <FooterStyled>
      <FooterContainer>
        <LogoWrapper>
          <Logo src={logoSrc} alt='AMIF logo' />
        </LogoWrapper>

        <FlexContainer>
          <FlexItem>
            <TextItem>
              <strong>
                <Link href='#about-us'>{t("ns1.description.footer.links.about-us")}</Link>
              </strong>
            </TextItem>
            <TextItem>
              <Link href='#posts'>{t("ns1.description.footer.links.projects")}</Link>
            </TextItem>
            <TextItem>
              <Link href='#contacts'>{t("ns1.description.footer.links.contacts")}</Link>
            </TextItem>
            <TextItem>
              <Link href='#museums'>{t("ns1.description.footer.links.museums")}</Link>
            </TextItem>
            <TextItem>
              <Link href='#partners'>{t("ns1.description.footer.links.partners")}</Link>
            </TextItem>
            <TextItem>
              <Link href='#our-mission'>{t("ns1.description.footer.links.our-mission")}</Link>
            </TextItem>
          </FlexItem>
          <FlexItem>
            <TextItem>
              <strong>{t("ns1.description.footer.contacts.contacts")}</strong>
            </TextItem>
            <TextItem>email: dimfranka@gmail.com</TextItem>
            <TextItem>{t("ns1.description.footer.contacts.phone")}</TextItem>
            <TextItem>+38098 486 00 42</TextItem>
          </FlexItem>
          <FlexItem>
            <TextItem>
              <strong>{t("ns1.description.footer.address.address")}</strong>
            </TextItem>
            <TextItem>{t("ns1.description.footer.address.country")}</TextItem>
            <TextItem>{t("ns1.description.footer.address.position")}</TextItem>
          </FlexItem>
          <FlexItem>
            <FoxImage src={foxImageSrc} alt='fox image' />
          </FlexItem>
        </FlexContainer>
      </FooterContainer>
    </FooterStyled>
  );
}

export default Footer;
