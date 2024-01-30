import React, { ReactNode } from "react";
import { MissionBoxStyled, MissionBoxText, ArrowDown } from "./MissionBoxStyles";
import ArrowDownSrc from "../../assets/our-mission/arrow-down.png";

type MissionBoxProps = {
  align?: string;
  showArrow?: boolean;
  children: ReactNode;
  borderReverse?: boolean;
};

export default function MissionBox({
  align,
  showArrow = false,
  borderReverse = false,
  children,
}: MissionBoxProps) {
  return (
    <MissionBoxStyled borderReverse={borderReverse} align={align}>
      <MissionBoxText>{children}</MissionBoxText>
      {showArrow && <ArrowDown src={ArrowDownSrc} />}
    </MissionBoxStyled>
  );
}
