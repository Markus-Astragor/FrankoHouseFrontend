import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  BurgerMenuStyled,
  BurgerContainer,
  BurgerLogo,
  BugerLogoContainer,
  BurgerMenuLinks,
  BurgerMenuLink,
  LanguageSwitcher,
  LanguageButton,
} from "./BurgerMenuStyles";

/* Icons & images*/
import LogoSrc from "../../assets/header-imgs/logo.png";

interface BurgerMenuProps {
  isOpen: boolean;
  onLinkClick: () => void;
}

function BurgerMenu({ isOpen, onLinkClick }: BurgerMenuProps) {
  const { t, i18n } = useTranslation();

  function handleMenuItemClick(id: string) {
    const element = document.getElementById(id);

    const elementPosition = element && element?.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition && elementPosition - 100;

    if (offsetPosition) {
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }

  function changeLanguage(language: string) {
    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
    document.documentElement.lang = language;
  }

  return (
    <BurgerMenuStyled open={isOpen}>
      <BurgerContainer>
        <BugerLogoContainer>
          <NavLink onClick={onLinkClick} to='/'>
            <BurgerLogo src={LogoSrc} />
          </NavLink>
        </BugerLogoContainer>

        <BurgerMenuLinks>
          <BurgerMenuLink
            onClick={() => {
              onLinkClick();
              handleMenuItemClick("about-us");
            }}
          >
            {t("ns1.description.navbar.link1")}
          </BurgerMenuLink>
          <BurgerMenuLink
            onClick={() => {
              onLinkClick();
              handleMenuItemClick("posts");
            }}
          >
            {t("ns1.description.navbar.link2")}
          </BurgerMenuLink>
          <BurgerMenuLink
            onClick={() => {
              onLinkClick();
              handleMenuItemClick("partners");
            }}
          >
            {t("ns1.description.navbar.link3")}
          </BurgerMenuLink>
          <BurgerMenuLink
            onClick={() => {
              onLinkClick();
              handleMenuItemClick("contacts");
            }}
          >
            {t("ns1.description.navbar.link4")}
          </BurgerMenuLink>
          <BurgerMenuLink
            onClick={() => {
              onLinkClick();
              handleMenuItemClick("our-mission");
            }}
          >
            {t("ns1.description.navbar.link5")}
          </BurgerMenuLink>
        </BurgerMenuLinks>
        <LanguageSwitcher>
          <LanguageButton onClick={() => changeLanguage("ua")} active={i18n.language === "ua"}>
            Українська
          </LanguageButton>
          <LanguageButton onClick={() => changeLanguage("en")} active={i18n.language === "en"}>
            Англійська
          </LanguageButton>
        </LanguageSwitcher>
      </BurgerContainer>
    </BurgerMenuStyled>
  );
}

export default BurgerMenu;
