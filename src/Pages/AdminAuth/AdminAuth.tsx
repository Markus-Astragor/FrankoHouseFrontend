import React, { useState } from "react";
import { MainBlock, InputElement, Form, FieldName, SubmitButton } from "./AdminAuthStyle";
import axios from "axios";
import URLS from "../../configURLS.json";

function AdminAuth() {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    console.log("login", login);
    console.log("password", password);

    axios
      .post(`${URLS["BASE-URL"]}`, {})
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => console.log("err", err))
      .finally(() => setLoader(false));
  };

  return (
    <MainBlock>
      <Form onSubmit={handleSubmit}>
        <FieldName>Логін</FieldName>
        <InputElement type='text' onChange={(e) => setLogin(e.target.value)} />
        <FieldName>Пароль</FieldName>
        <InputElement type='password' onChange={(e) => setPassword(e.target.value)} />
        {loader ? <span>Loading...</span> : <SubmitButton>Увійти</SubmitButton>}
      </Form>
    </MainBlock>
  );
}

export default AdminAuth;
