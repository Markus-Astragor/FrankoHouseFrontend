import styled from "styled-components";

export const BurgerIconStyled = styled.div<{ opened: boolean }>`
  position: ${(props) => (props.opened ? "fixed" : "absolute")};
  top: ${(props) => (props.opened ? "5px" : "20px")};
  right: ${(props) => (props.opened ? "10px" : "20px")};
  display: ${(props) => (props.opened ? "block" : "none")};
  z-index: 15;
  opacity: 0;

  animation: from_left 2s ease-in-out forwards;

  @keyframes from_left {
    from {
      transform: translateX(-200px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    display: block;
  }
`;
