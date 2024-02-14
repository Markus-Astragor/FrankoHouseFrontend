import React from "react";
import { ProjectModalBlock, CloseBtn } from "./styled";

type ProjectModalWindowProps = {
  children: React.ReactNode;
  closeModal: () => void;
};

export default function ProjectModalWindow({ children, closeModal }: ProjectModalWindowProps) {
  return (
    <ProjectModalBlock>
      <CloseBtn onClick={closeModal}>&#x2716;</CloseBtn>
      {children}
    </ProjectModalBlock>
  );
}
