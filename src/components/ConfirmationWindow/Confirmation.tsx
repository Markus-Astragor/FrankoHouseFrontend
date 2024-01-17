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
};

export default function Confirmation({ onDelete, onCancel }: ConfirmationProps) {
  return (
    <ConfirmationStyled>
      <Overlayer />
      <Window>
        <Message>Ви впевнені що хочете видалити публікацію?</Message>
        <ButtonsContainer>
          <WindowButton onClick={onCancel} bgcolor='#19aae8'>
            Відмінити
          </WindowButton>
          <WindowButton onClick={onDelete} bgcolor='#828484'>
            Видалити
          </WindowButton>
        </ButtonsContainer>
      </Window>
    </ConfirmationStyled>
  );
}
