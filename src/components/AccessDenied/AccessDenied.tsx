import React from "react";

import { AccessDeniedStyled, LockImgContainer, Title, Message, Button } from "./AccessDeniedStyles";
import LockSVG from "../SVG/LockSVG";

export default function AccessDenied() {
  return (
    <AccessDeniedStyled>
      <LockImgContainer>
        <LockSVG />
      </LockImgContainer>
      <Title>Access Denied</Title>
      <Message>
        You do not have permissions to access this page. <br /> Contact an administrator to get
        permissions go to the home page <br /> and browse other pages
      </Message>
      <Button to='/'>Go to home</Button>
    </AccessDeniedStyled>
  );
}
