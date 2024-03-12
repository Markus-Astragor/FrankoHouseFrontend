import React from "react";

import {
  ConfirmationStyled,
  Overlayer,
  Window,
  WindowButton,
  Message,
  ButtonsContainer,
} from "./ConfrimationStyle";

type ConfirmationProps = {
  onDelete: () => void;
  onCancel: () => void;
  text?: string;
};

export default function Confirmation({ onDelete, onCancel, text }: ConfirmationProps) {
  return (
    <ConfirmationStyled>
      <Overlayer />
      <Window>
        <Message>{text ? text : "Ви впевнені що хочете видалити публікацію?"}</Message>
        <ButtonsContainer>
          <WindowButton onClick={onCancel} bgcolor='#19aae8'>
            Скасувати
          </WindowButton>
          <WindowButton onClick={onDelete} bgcolor='#828484'>
            Видалити
          </WindowButton>
        </ButtonsContainer>
      </Window>
    </ConfirmationStyled>
  );
}
