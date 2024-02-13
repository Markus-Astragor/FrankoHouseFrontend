import styled, { keyframes } from "styled-components";

const liftModalBlock = keyframes`
  from {
    top: 250%;
  }
  to {
    top: -8%;
  }
`;

export const ProjectModalBlock = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  background-color: white;
  margin: 0 auto;
  padding: 20px 0px 40px 0px;
  z-index: 8;
  border-radius: 20px;
  top: -8%;
  left: 50%;
  transform: translateX(-50%);
  animation-name: ${liftModalBlock};
  animation-duration: 1s;
`;

export const CloseBtn = styled.span`
  width: 10%;
  display: flex;
  justify-content: center;
  font-size: 30px;
  color: black;
  cursor: pointer;
`;
