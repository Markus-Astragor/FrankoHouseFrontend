import React from "react";
import { BurgerMenuStyled, BurgerContainer } from "./styles/BurgerMenuStyles";

function BurgerMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <BurgerMenuStyled open={isOpen}>
      <BurgerContainer></BurgerContainer>
    </BurgerMenuStyled>
  );
}

export default BurgerMenu;
