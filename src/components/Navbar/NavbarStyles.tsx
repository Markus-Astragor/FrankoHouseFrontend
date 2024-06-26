import styled from "styled-components";

export const NavbarStyled = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  position: fixed;
  z-index: 100;
`;

export const NavbarContainer = styled.div`
  padding: 30px 30px;
  box-sizing: border-box;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: from_left 2s ease-in-out;

  @keyframes from_left {
    0% {
      transform: translateX(-200px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const Logo = styled.img`
  height: auto;
  width: 110px;
  padding-right: 10px;
  box-sizing: border-box;
  cursor: pointer;

  @media (max-width: 866px) {
    width: 90px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 22px;
  font-size: 22px;
  font-weight: 700;

  @media (max-width: 898px) {
    font-size: 18px;
    gap: 14px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.a`
  position: relative;
  color: #000;
  font-family: "Playfair Display", serif;
  text-decoration: none;
  padding: 4px;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    border-radius: 5px;
    width: 100%;
    height: 2px;
    background-color: #000;
    bottom: -4px;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.4s ease-in-out;
  }

  &:hover {
    &::before {
      transform-origin: left;
      transform: scaleX(1);
    }
  }
`;

export const SwitchLanguage = styled.div`
  cursor: pointer;
  display: flex;
  gap: 5px;
`;

export const SwitchLanguageItem = styled.p<{ active: boolean }>`
  border-bottom: ${(props) => (props.active ? "1px solid #000" : "0px")};
  border-width: 2px;
`;

export const Overlay = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.show ? "block" : "none")};
  z-index: 7;
`;
