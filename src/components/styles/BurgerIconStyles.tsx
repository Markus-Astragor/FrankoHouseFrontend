import styled from "styled-components";

export const BurgerIconStyled = styled.div<{ opened: boolean }>`
  position: absolute;
  top: -8px;
  right: 0;
  display: ${(props) => (props.opened ? "block" : "none")};
  z-index: 5;

  @media (max-width: 609px) {
    display: block;
  }
`;
