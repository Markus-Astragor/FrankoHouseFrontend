import React from "react";
import { NavLink } from "react-router-dom";

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
} from "./styles/BurgerMenuStyles";

/* Icons & images*/
import LogoSrc from "../assets/header-imgs/logo.png";
import SearchIcon from "../assets/header-imgs/search_icon.png";

import FacebookSVG from "./SVG/FacebookSVG";
import InstagramSVG from "./SVG/TelegramSVG";
import YoutubeSVG from "./SVG/YoutubeSVG";

interface BurgerMenuProps {
  isOpen: boolean;
  onLinkClick: () => void;
}

function BurgerMenu({ isOpen, onLinkClick }: BurgerMenuProps) {
  return (
    <BurgerMenuStyled open={isOpen}>
      <BurgerContainer>
        <BugerLogoContainer>
          <NavLink onClick={onLinkClick} to='/'>
            <BurgerLogo src={LogoSrc} />
          </NavLink>
        </BugerLogoContainer>

        <BurgerMenuLinks>
          <BurgerMenuLink to='/'>Про нас</BurgerMenuLink>
          <BurgerMenuLink to='/posts'>Проекти</BurgerMenuLink>
          <BurgerMenuLink to='/'>Партнери</BurgerMenuLink>
          <BurgerMenuLink to='/'>Команди</BurgerMenuLink>
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
