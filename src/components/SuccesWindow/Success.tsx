import React from "react";

type SuccessType = {
  message: string;
  setSuccess: (success: string) => void;
};

import { SuccessStyled, SuccessOverlayer, Window, WindowButton, Message } from "./SucccessStyle";
export default function Success({ message, setSuccess }: SuccessType) {
  console.log("success");

  return (
    <SuccessStyled>
      <SuccessOverlayer />
      <Window>
        <Message>{message}</Message>
        <WindowButton onClick={() => setSuccess("")}>Ок</WindowButton>
      </Window>
    </SuccessStyled>
  );
}
