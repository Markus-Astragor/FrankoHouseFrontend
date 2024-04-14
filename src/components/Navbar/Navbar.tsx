import React, { useEffect, useRef, useState } from "react";
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
import { useLanguageContext } from "../../Context/LanguageContext";
function Navbar() {
  const switcher = useRef<HTMLDivElement>(null);
  const { setLanguage } = useLanguageContext();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [changeNavbar, setChangeNavbar] = useState<boolean>(false);

  function handleOverlayClick() {
    setIsOpen(false);
  }

  function handleOpenBurger() {
    setIsOpen((prev) => !prev);
  }

  const { t, i18n } = useTranslation();

  function changeLanguage(lan: string) {
    localStorage.setItem("language", lan);
    setLanguage(lan);
    i18n.changeLanguage(lan);
  }

  function switchLanguage(e) {
    if (e.target !== switcher.current) return;
    const currentLanguage = localStorage.getItem("language");

    if (currentLanguage === "ua") changeLanguage("en");
    else changeLanguage("ua");
  }

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

  useEffect(() => {
    document.addEventListener("scroll", () => {
      console.log(window.scrollY);
      if (window.scrollY > 45) setChangeNavbar(true);
      else setChangeNavbar(false);
    });
  }, []);

  return (
    <NavbarStyled>
      <NavbarContainer changeNavbar={changeNavbar}>
        <FlexContainer>
          <NavLink to='/'>
            <Logo src={LogoSrc} alt='logo' />
          </NavLink>

          <Menu>
            <MenuItem onClick={() => handleMenuItemClick("about-us")}>
              {t("ns1.description.navbar.link1")}
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("posts")}>
              {t("ns1.description.navbar.link2")}
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("partners")}>
              {t("ns1.description.navbar.link3")}
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("contacts")}>
              {t("ns1.description.navbar.link4")}
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("our-mission")}>
              {t("ns1.description.navbar.link5")}
            </MenuItem>
            <SwitchLanguage onClick={switchLanguage} ref={switcher}>
              <span onClick={() => changeLanguage("ua")}>UA</span>|
              <span onClick={() => changeLanguage("en")}>EN</span>
            </SwitchLanguage>
          </Menu>
        </FlexContainer>
        <BurgerIcon isOpen={isOpen} onOpen={handleOpenBurger} />
        <BurgerMenu isOpen={isOpen} onLinkClick={handleOpenBurger} />
      </NavbarContainer>
      <Overlay onClick={handleOverlayClick} show={isOpen} />
    </NavbarStyled>
  );
}

export default Navbar;
