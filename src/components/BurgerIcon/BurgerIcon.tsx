import React from "react";
import Hamburger from "hamburger-react";
import { BurgerIconStyled } from "./BurgerIconStyles";

interface BurgerIconProps {
  isOpen: boolean;
  onOpen: () => void;
  iconColor?: string;
}

function BurgerIcon({ isOpen, onOpen, iconColor = "black" }: BurgerIconProps) {
  return (
    <BurgerIconStyled opened={isOpen}>
      <Hamburger size={isOpen ? 24 : 28} toggled={isOpen} toggle={onOpen} color={iconColor} />
    </BurgerIconStyled>
  );
}

export default BurgerIcon;
