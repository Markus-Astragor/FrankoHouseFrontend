import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import {
  AdminStyled,
  NavBar,
  AdminWindow,
  NavbarBox,
  Logo,
  LinkBox,
  Link,
  BurgerLink,
  LogoLink,
} from "./AdminPanelStyle";
import AccessDenied from "../../components/AccessDenied/AccessDenied";
import BurgerIcon from "../../components/BurgerIcon/BurgerIcon";
import BurgerMenu from "../../components/BurgerMenuAdminPanel/BurgerMenuAdmin";
import { Overlay } from "../../components/Navbar/NavbarStyles";
import axios from "axios";
import config from "../../configURLS.json";
import LogoSrc from "../../assets/header-imgs/logo-white.png";

export default function AdminPanel() {
  const [showError, setShowError] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleOverlayClick() {
    setIsOpen(false);
  }

  function handleOpenBurger() {
    setIsOpen((prev) => !prev);
  }

  function handleClickOnLink() {
    setIsOpen(false);
  }

  function handleLogOut() {
    localStorage.setItem("jwtToken", "");
  }

  useEffect(() => {
    if (!localStorage.getItem("jwtToken")) setShowError(true);
    const token = localStorage.getItem("jwtToken");
    if (token) {
      axios
        .get(`${config["BASE-URL"]}/admin/auth`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => console.log(res))
        .catch(() => setShowError(true));
    }
  }, []);

  if (showError) return <AccessDenied />;
  return (
    <AdminStyled>
      <NavBar>
        <NavbarBox>
          <LogoLink to='/'>
            <Logo src={LogoSrc} alt='logo' />
          </LogoLink>

          <LinkBox>
            <Link to='create-post'>Створити пост</Link>
            <Link to='view-posts'>Переглянути пости</Link>
            <Link to='create-partner'>Додати партнера</Link>
            <Link to='view-partners'>Переглянути партнерів</Link>
            <Link to='add-museum'>Додати музей</Link>
            <Link to='view-museums'>Переглянути музеї</Link>
            <Link onClick={handleLogOut} to='/'>
              Вийти
            </Link>
          </LinkBox>

          <BurgerIcon
            isOpen={isOpen}
            onOpen={handleOpenBurger}
            iconColor={`${isOpen ? "black" : "white"}`}
          />
          <BurgerMenu isOpen={isOpen} onLinkClick={handleOpenBurger}>
            <BurgerLink onClick={handleClickOnLink} to='create-post'>
              Створити пост
            </BurgerLink>
            <BurgerLink onClick={handleClickOnLink} to='view-posts'>
              Переглянути пости
            </BurgerLink>
            <BurgerLink onClick={handleClickOnLink} to='create-partner'>
              Додати партнера
            </BurgerLink>
            <BurgerLink onClick={handleClickOnLink} to='view-partners'>
              Переглянути партнерів
            </BurgerLink>
            <BurgerLink onClick={handleClickOnLink} to='add-museum'>
              Додати музей
            </BurgerLink>
            <BurgerLink onClick={handleClickOnLink} to='view-museums'>
              Переглянути музеї
            </BurgerLink>
            <BurgerLink onClick={handleClickOnLink} to='/'>
              Вийти
            </BurgerLink>
          </BurgerMenu>
        </NavbarBox>
        <Overlay onClick={handleOverlayClick} show={isOpen} />
      </NavBar>
      <AdminWindow>
        <Outlet />
      </AdminWindow>
    </AdminStyled>
  );
}
