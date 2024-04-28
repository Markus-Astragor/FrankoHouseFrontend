import React from "react";

type MessageType = {
  message: string;
  setMessage: (success: string) => void;
};

import { SuccessStyled, SuccessOverlayer, Window, WindowButton, Message } from "./MessageStyles";
export default function MessageWindow({ message, setMessage }: MessageType) {
  console.log("success");

  return (
    <SuccessStyled>
      <SuccessOverlayer />
      <Window>
        <Message>{message}</Message>
        <WindowButton onClick={() => setMessage("")}>Ок</WindowButton>
      </Window>
    </SuccessStyled>
  );
}
