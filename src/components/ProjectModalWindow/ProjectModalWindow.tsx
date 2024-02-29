import React from "react";
import { ProjectModalBlock, CloseBtn, CloseIcon } from "./styled";

type ProjectModalWindowProps = {
  children: React.ReactNode;
  closeModal: () => void;
};

export default function ProjectModalWindow({ children, closeModal }: ProjectModalWindowProps) {
  return (
    <ProjectModalBlock>
      <CloseBtn onClick={closeModal}>
        <CloseIcon>&#x2716;</CloseIcon>
      </CloseBtn>
      {children}
    </ProjectModalBlock>
  );
}
