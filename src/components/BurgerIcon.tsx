import React from "react";
import Hamburger from "hamburger-react";
import { BurgerIconStyled } from "./styles/BurgerIconStyles";

interface BurgerIconProps {
  isOpen: boolean;
  onOpen: () => void;
}

function BurgerIcon({ isOpen, onOpen }: BurgerIconProps) {
  return (
    <BurgerIconStyled opened={isOpen}>
      <Hamburger size={28} toggled={isOpen} toggle={onOpen} />
    </BurgerIconStyled>
  );
}

export default BurgerIcon;
