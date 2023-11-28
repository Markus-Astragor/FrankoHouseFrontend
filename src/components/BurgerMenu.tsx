import React from "react";
import { BurgerMenuStyled } from "./styles/BurgerMenuStyles";

function BurgerMenu({ isOpen }: { isOpen: boolean }) {
  return <BurgerMenuStyled open={isOpen}>Info</BurgerMenuStyled>;
}

export default BurgerMenu;
