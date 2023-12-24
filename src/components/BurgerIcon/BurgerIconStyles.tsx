import styled from "styled-components";

export const BurgerIconStyled = styled.div<{ opened: boolean }>`
  position: absolute;
  top: ${(props) => (props.opened ? "5px" : "10px")};
  right: ${(props) => (props.opened ? "10px" : "20px")};
  display: ${(props) => (props.opened ? "block" : "none")};
  z-index: 15;

  @media (max-width: 609px) {
    display: block;
  }
`;