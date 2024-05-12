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
} from "./BurgerMenuStyles";

/* Icons & images*/
import LogoSrc from "../../assets/header-imgs/logo.png";

interface BurgerMenuProps {
  isOpen: boolean;
  onLinkClick: () => void;
}

function BurgerMenu({ isOpen, onLinkClick }: BurgerMenuProps) {
  const { t } = useTranslation();

  function handleMenuItemClick(id: string) {
    // const element = document.getElementById(id);

    // if (element) {
    //   element.scrollIntoView({
    //     behavior: "smooth",
    //     block: "end",
    //     inline: "nearest",
    //   });
    // }

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
      </BurgerContainer>
    </BurgerMenuStyled>
  );
}

export default BurgerMenu;
