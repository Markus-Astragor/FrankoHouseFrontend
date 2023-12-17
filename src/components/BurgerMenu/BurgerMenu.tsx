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
  InputContainer,
  Input,
  InputButton,
  SocialMediaContainer,
} from "./BurgerMenuStyles";

/* Icons & images*/
import LogoSrc from "../../assets/header-imgs/logo.png";
import SearchIcon from "../../assets/header-imgs/search_icon.png";

import FacebookSVG from "../SVG/FacebookSVG";
import InstagramSVG from "../SVG/TelegramSVG";
import YoutubeSVG from "../SVG/YoutubeSVG";

interface BurgerMenuProps {
  isOpen: boolean;
  onLinkClick: () => void;
}

function BurgerMenu({ isOpen, onLinkClick }: BurgerMenuProps) {
  const { t } = useTranslation();

  return (
    <BurgerMenuStyled open={isOpen}>
      <BurgerContainer>
        <BugerLogoContainer>
          <NavLink onClick={onLinkClick} to='/'>
            <BurgerLogo src={LogoSrc} />
          </NavLink>
        </BugerLogoContainer>

        <BurgerMenuLinks>
          <BurgerMenuLink to='/about-us'>{t("ns1.description.navbar.link1")}</BurgerMenuLink>
          <BurgerMenuLink to='/posts'>{t("ns1.description.navbar.link2")}</BurgerMenuLink>
          <BurgerMenuLink to='/partners'>{t("ns1.description.navbar.link3")}</BurgerMenuLink>
          <BurgerMenuLink to='/contacts'>{t("ns1.description.navbar.link4")}</BurgerMenuLink>
        </BurgerMenuLinks>

        <InputContainer>
          <Input placeholder='Пошук...' />
          <InputButton>
            <img src={SearchIcon} />
          </InputButton>
        </InputContainer>

        <SocialMediaContainer>
          <FacebookSVG />
          <InstagramSVG />
          <YoutubeSVG />
        </SocialMediaContainer>
      </BurgerContainer>
    </BurgerMenuStyled>
  );
}

export default BurgerMenu;
