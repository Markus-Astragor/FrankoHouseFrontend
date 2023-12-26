import React, { useState } from "react";
import LogoSrc from "../../assets/header-imgs/logo.png";
import {
  NavbarStyled,
  NavbarContainer,
  FlexContainer,
  Logo,
  Overlay,
  Menu,
  MenuItem,
  SwitchLanguage,
} from "./NavbarStyles";
import { NavLink } from "react-router-dom";
import BurgerIcon from "../BurgerIcon/BurgerIcon";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useTranslation } from "react-i18next";
function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleOverlayClick() {
    handleScroll();
    setIsOpen(false);
  }

  function handleScroll() {
    // if (!isOpen) {
    //   document.body.style.overflow = "hidden";
    // } else {
    //   document.body.style.overflow = "visible";
    // }
  }

  function handleOpenBurger() {
    setIsOpen((prev) => !prev);
    handleScroll();
  }

  const { t, i18n } = useTranslation();

  return (
    <NavbarStyled>
      <NavbarContainer>
        <FlexContainer>
          <NavLink to='/'>
            <Logo src={LogoSrc} alt='logo' />
          </NavLink>

          <Menu>
            <MenuItem to='/about-us'>{t("ns1.description.navbar.link1")}</MenuItem>
            <MenuItem to='/posts'>{t("ns1.description.navbar.link2")}</MenuItem>
            <MenuItem to='/partners'>{t("ns1.description.navbar.link3")}</MenuItem>
            <MenuItem to='/contacts'>{t("ns1.description.navbar.link4")}</MenuItem>
            <SwitchLanguage>
              <span onClick={() => i18n.changeLanguage("ua")}>UA</span>|
              <span onClick={() => i18n.changeLanguage("en")}>EN</span>
            </SwitchLanguage>
          </Menu>

          <BurgerIcon isOpen={isOpen} onOpen={handleOpenBurger} />
          <BurgerMenu isOpen={isOpen} onLinkClick={handleOpenBurger} />
        </FlexContainer>
      </NavbarContainer>
      <Overlay onClick={handleOverlayClick} show={isOpen} />
    </NavbarStyled>
  );
}

export default Navbar;
