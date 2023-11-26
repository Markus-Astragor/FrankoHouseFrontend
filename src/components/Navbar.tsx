import React, { useState } from "react";
import LogoSrc from "../assets/header-imgs/logo.png";
import {
  NavbarStyled,
  NavbarContainer,
  FlexContainer,
  Logo,
  Menu,
  MenuItem,
  SwitchLanguage,
} from "./styles/NavbarStyles";
import { NavLink } from "react-router-dom";
import BurgerIcon from "./BurgerIcon";
import BurgerMenu from "./BurgerMenu";
function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleOpen() {
    setIsOpen((prev) => !prev);
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
            <MenuItem to='/projects'>Проекти</MenuItem>
            <MenuItem to='/partners'>Партнери</MenuItem>
            <MenuItem to='/contacts'>Контакти</MenuItem>
            <SwitchLanguage>UA|EN</SwitchLanguage>
          </Menu>

          <BurgerIcon isOpen={isOpen} onOpen={handleOpen} />
          <BurgerMenu isOpen={isOpen} />
        </FlexContainer>
      </NavbarContainer>
    </NavbarStyled>
  );
}

export default Navbar;
