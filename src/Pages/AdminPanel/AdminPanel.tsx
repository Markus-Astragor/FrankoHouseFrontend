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
} from "./AdminPanelStyle";
import AccessDenied from "../../components/AccessDenied/AccessDenied";
import axios from "axios";
import config from "../../configURLS.json";
import LogoSrc from "../../assets/header-imgs/logo-white.png";

export default function AdminPanel() {
  const [showError, setShowError] = useState<boolean>(false);

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
          <Logo src={LogoSrc} alt='logo' />
          <LinkBox>
            <Link to='create-post'>Створити пост</Link>
            <Link to='view-posts'>Переглянути пости</Link>
            <Link to='add-museum'>Додати музей</Link>
            <Link to='view-museums'>Переглянути музеї</Link>
          </LinkBox>
        </NavbarBox>
      </NavBar>
      <AdminWindow>
        <Outlet />
      </AdminWindow>
    </AdminStyled>
  );
}
