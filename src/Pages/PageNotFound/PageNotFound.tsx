import React from "react";
import { Wrapper, ReturnButton, ErrorMessage, ErrorImage, ErrorText } from "./styled";

import notFound from "../../assets/page-not-found/not-found.png";

function PageNotFound() {
  return (
    <Wrapper>
      <ReturnButton to='/'>Головна сторінка</ReturnButton>
      <ErrorMessage>
        <ErrorImage src={notFound} alt='404' />
        <ErrorText>
          Щось пішло не так ... <br />
          Помилка
        </ErrorText>
      </ErrorMessage>
    </Wrapper>
  );
}

export default PageNotFound;
