import styled from "styled-components";

export const ConfirmationStyled = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  /* z-index: 10; */
`;

export const Overlayer = styled.div`
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
  padding: 30px 50px;
  background-color: #fff;
  border-radius: 5px;
  z-index: 5;
  display: flex;
  flex-direction: column;
`;

export const Message = styled.div`
  margin-bottom: 30px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const WindowButton = styled.button<{ bgcolor?: string }>`
  padding: 8px 30px;
  color: black;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.4s linear;
  align-self: flex-end;
  border: 0;
  color: #fff;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "transparent")};
`;
