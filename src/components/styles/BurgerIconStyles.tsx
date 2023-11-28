import styled from "styled-components";

export const BurgerIconStyled = styled.div<{ opened: boolean }>`
  position: absolute;
  top: -15px;
  right: ${(props) => (props.opened ? "-10px" : "0")};
  display: ${(props) => (props.opened ? "block" : "none")};
  z-index: 15;

  @media (max-width: 609px) {
    display: block;
  }
`;
