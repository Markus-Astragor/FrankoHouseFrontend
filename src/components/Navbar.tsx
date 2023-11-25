import React from "react";
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
function Navbar() {
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
        </FlexContainer>
      </NavbarContainer>
    </NavbarStyled>
  );
}

export default Navbar;
