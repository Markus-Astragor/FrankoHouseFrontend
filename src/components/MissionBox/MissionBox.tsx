import React, { ReactNode } from "react";
import { MissionBoxStyled, MissionBoxText, ArrowDown } from "./MissionBoxStyles";
import ArrowDownSrc from "../../assets/our-mission/arrow-down.png";

type MissionBoxProps = {
  align?: string;
  arrowId: number;
  children: ReactNode;
  borderReverse?: boolean;
  inView: boolean;
};

export default function MissionBox({
  align,
  borderReverse = false,
  children,
  arrowId,
  inView,
}: MissionBoxProps) {
  return (
    <MissionBoxStyled inView={inView} borderReverse={borderReverse} align={align}>
      <MissionBoxText>{children}</MissionBoxText>
      <ArrowDown arrowId={arrowId} src={ArrowDownSrc} />
    </MissionBoxStyled>
  );
}
