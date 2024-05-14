import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";

import {
  BurgerMenuStyled,
  BurgerContainer,
  BurgerLogo,
  BugerLogoContainer,
  BurgerMenuLinks,
} from "./BurgerMenuAdminStyles";

/* Icons & images*/
import LogoSrc from "../../assets/header-imgs/logo.png";

interface BurgerMenuProps {
  isOpen: boolean;
  onLinkClick: () => void;
  children: ReactNode;
}

function BurgerMenu({ isOpen, onLinkClick, children }: BurgerMenuProps) {
  return (
    <BurgerMenuStyled open={isOpen}>
      <BurgerContainer>
        <BugerLogoContainer>
          <NavLink onClick={onLinkClick} to='/'>
            <BurgerLogo src={LogoSrc} />
          </NavLink>
        </BugerLogoContainer>
        <BurgerMenuLinks>{children}</BurgerMenuLinks>
      </BurgerContainer>
    </BurgerMenuStyled>
  );
}

export default BurgerMenu;
