import styled, { keyframes } from "styled-components";

const liftModalBlock = keyframes`
  from {
    top: 250%;
  }
  to {
    top: 20%;
  }
`;

export const ProjectModalBlock = styled.div`
  position: absolute;
  width: 70%;
  height: 80%;
  background-color: white;
  margin: 0 auto;
  padding: 20px 0px 40px 0px;
  z-index: 8;
  border-radius: 20px;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  animation-name: ${liftModalBlock};
  animation-duration: 1s;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const CloseBtn = styled.span`
  width: 98%;
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
  color: black;
  cursor: pointer;
`;

export const CloseIcon = styled.div`
  display: flex;
  justify-content: center;
  width: 27px;
  border: 3px solid black;
  border-radius: 50%;
`;
