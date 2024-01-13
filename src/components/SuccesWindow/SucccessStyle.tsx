import styled from "styled-components";

export const SuccessStyled = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  /* z-index: 10; */
`;

export const SuccessOverlayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 4;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Window = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 250px;
  padding: 15px 30px;
  background-color: #fff;
  border-radius: 5px;
  z-index: 5;
  display: flex;
  flex-direction: column;
`;

export const Message = styled.div`
  margin-bottom: 30px;
`;
export const WindowButton = styled.button`
  padding: 8px 30px;
  color: black;
  border: 1px solid #000;
  background-color: transparent;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.4s linear;
  align-self: flex-end;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
