import React, { useState } from "react";
import {
  MainBlock,
  InputElement,
  Form,
  FieldName,
  SubmitButton,
  ErrorParagraph,
  Loader,
  BlockForLoader,
} from "./AdminAuthStyle";
import axios from "axios";
import URLS from "../../configURLS.json";

function AdminAuth() {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    setErrorText("");

    console.log("login", login);
    console.log("password", password);

    axios
      .post(`${URLS["BASE-URL"]}/login`, {
        Login: login,
        Password: password,
      })
      .then((res) => {
        console.log("res", res);
        localStorage.setItem("jwtToken", res.data.token);
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
    <MainBlock>
      <Form onSubmit={handleSubmit}>
        <FieldName>Логін</FieldName>
        <InputElement
          type='text'
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required
        />
        <FieldName>Пароль</FieldName>
        <InputElement
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <ErrorParagraph>{errorText}</ErrorParagraph>
        {loader ? (
          <BlockForLoader>
            <Loader></Loader>
          </BlockForLoader>
        ) : (
          <SubmitButton>Увійти</SubmitButton>
        )}
      </Form>
    </MainBlock>
  );
}

export default AdminAuth;
