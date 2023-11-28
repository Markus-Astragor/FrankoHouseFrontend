import styled from "styled-components";

export const BurgerMenuStyled = styled.div<{ open: boolean }>`
  width: 250px;
  position: fixed;
  height: 100vh;
  background-color: #fff;
  top: 0;
  right: 0;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  transform-origin: 0% 0%;
  transform: ${(props) => (props.open ? "translate(0, 0)" : "translate(100%,0)")};
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  z-index: 13;
`;

export const BurgerContainer = styled.div`
  padding: 70px 20px;
  box-sizing: border-box;
`;
