import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MainBlock,
  InputElement,
  Form,
  FieldName,
  SubmitButton,
  ErrorParagraph,
} from "./AdminAuthStyle";
import axios from "axios";
import URLS from "../../configURLS.json";
import LoaderComponent from "../../components/Loader/LoaderComponent";

function AdminAuth() {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");

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
        {loader ? <LoaderComponent /> : <SubmitButton>Увійти</SubmitButton>}
      </Form>
    </MainBlock>
  );
}

export default AdminAuth;
