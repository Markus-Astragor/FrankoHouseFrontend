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
  /* position: relative; */
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

  @media (max-width: 866px) {
    font-size: 18px;
    gap: 14px;
  }

  @media (max-width: 710px) {
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
