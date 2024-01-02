import styled from "styled-components";
import headerBackground from "../../assets/header-imgs/header-back.png";
import { NavLink } from "react-router-dom";

export const NavbarStyled = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 130px;
  padding-top: 25px;
  background-image: url(${headerBackground});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  /* position: fixed; */

  @media (max-width: 767px) {
    height: 110px;
    padding-top: 20px;
  }
`;

export const NavbarContainer = styled.div`
  max-width: 1200px;
  padding: 0 30px;
  box-sizing: border-box;
  margin: 0 auto;
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

  @media (max-width: 767px) {
    width: 90px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 18px;
  font-size: 22px;
  font-weight: 700;

  @media (max-width: 767px) {
    font-size: 18px;
    gap: 14px;
  }

  @media (max-width: 609px) {
    display: none;
  }
`;

export const MenuItem = styled(NavLink)`
  position: relative;
  color: #000;
  font-family: "Playfair Display", serif;
  text-decoration: none;
  padding: 4px;

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
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    &::before {
      transform-origin: left;
      transform: scaleX(1);
    }
  }
  /* &::before,
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: black;
    position: absolute;
    top: 50%;
    opacity: 0;
    transition:
      transform 0.4s ease-in-out,
      opacity 0.2s linear;
  }
  &:hover {
    &::after {
      opacity: 1;
      transform: translateY(20px);
    }
    &::before {
      opacity: 1;
      transform: translateY(-20px);
    }
  } */
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
