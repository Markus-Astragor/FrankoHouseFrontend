import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Title,
  CenterBox,
  Form,
  FormElementWrapper,
  InputLbl,
  InputTitle,
  FlexItem,
  ButtonsContainer,
  ErrorParagraph,
  ErrorParagraphContainer,
} from "../../styles/GeneralStylesAdminPanel";
import { AdminStyled, NavBar, AdminWindow, NavbarBox, Logo } from "../AdminPanel/AdminPanelStyle";
import { CenterBLock, LoginBtn } from "./AdminAuthStyle";

import LoaderComponent from "../../components/Loader/LoaderComponent";
import LogoSrc from "../../assets/header-imgs/logo-white.png";
import Success from "../../components/SuccesWindow/Success";
import URLS from "../../configURLS.json";

function AdminAuth() {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    setErrorText("");

    axios
      .post(`${URLS["BASE-URL"]}/login`, {
        login: login,
        password: password,
      })
      .then((res) => {
        console.log("res", res);
        localStorage.setItem("jwtToken", res.data.token);
        navigate("/admin");
      })
      .catch((err) => {
        console.log("err", err);
        setErrorText(err.response.data.message);
      })
      .finally(() => {
        setLoader(false);
        setLogin("");
        setPassword("");
      });
  };

  return (
    <AdminStyled>
      <NavBar>
        <NavbarBox>
          <Logo src={LogoSrc} alt='logo' />
        </NavbarBox>
      </NavBar>
      <AdminWindow>
        <CenterBLock>
          <Title>Вхід в адмін панель</Title>
          <Form onSubmit={handleSubmit}>
            <CenterBox>
              <FlexItem>
                <FormElementWrapper>
                  <InputLbl>Логін</InputLbl>
                  <InputTitle
                    required
                    type='text'
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    fullWidth
                  />
                </FormElementWrapper>

                <FormElementWrapper>
                  <InputLbl>Пароль</InputLbl>
                  <InputTitle
                    required
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                  />
                </FormElementWrapper>

                <ErrorParagraphContainer>
                  <CenterBox>
                    <ErrorParagraph>{errorText}</ErrorParagraph>
                  </CenterBox>
                </ErrorParagraphContainer>
              </FlexItem>
            </CenterBox>

            <CenterBox style={{ marginTop: "30px" }}>
              {loader ? (
                <CenterBox>
                  <LoaderComponent />
                </CenterBox>
              ) : (
                <ButtonsContainer>
                  <LoginBtn type='submit'>Увійти</LoginBtn>
                </ButtonsContainer>
              )}
            </CenterBox>
          </Form>
          {success && <Success setSuccess={setSuccess} message={success} />}
        </CenterBLock>
      </AdminWindow>
    </AdminStyled>
  );
}

export default AdminAuth;
