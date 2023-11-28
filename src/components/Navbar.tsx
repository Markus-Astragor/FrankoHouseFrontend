import React, { useState } from "react";
import LogoSrc from "../assets/header-imgs/logo.png";
import {
  NavbarStyled,
  NavbarContainer,
  FlexContainer,
  Logo,
  Overlay,
  Menu,
  MenuItem,
  SwitchLanguage,
} from "./styles/NavbarStyles";
import { NavLink } from "react-router-dom";
import BurgerIcon from "./BurgerIcon";
import BurgerMenu from "./BurgerMenu";
function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleOverlayClick() {
    handleScroll();
    setIsOpen(false);
  }

  function handleScroll() {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }

  function handleOpenBurger() {
    setIsOpen((prev) => !prev);
    handleScroll();
  }

  return (
    <NavbarStyled>
      <NavbarContainer>
        <FlexContainer>
          <NavLink to='/'>
            <Logo src={LogoSrc} alt='logo' />
          </NavLink>

          <Menu>
            <MenuItem to='/'>Про нас</MenuItem>
            <MenuItem to='/posts'>Проекти</MenuItem>
            <MenuItem to='/partners'>Партнери</MenuItem>
            <MenuItem to='/contacts'>Контакти</MenuItem>
            <SwitchLanguage>UA|EN</SwitchLanguage>
          </Menu>

          <BurgerIcon isOpen={isOpen} onOpen={handleOpenBurger} />
          <BurgerMenu isOpen={isOpen} />
        </FlexContainer>
      </NavbarContainer>
      <Overlay onClick={handleOverlayClick} show={isOpen} />
    </NavbarStyled>
  );
}

export default Navbar;
