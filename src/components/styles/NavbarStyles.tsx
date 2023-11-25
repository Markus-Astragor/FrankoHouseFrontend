import styled from "styled-components";
import headerBackground from "../../assets/header-imgs/header-back.png";
import { NavLink } from "react-router-dom";

export const NavbarStyled = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 130px;
  padding-top: 30px;
  background-image: url(${headerBackground});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const NavbarContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: auto;
  width: 110px;
  padding-right: 10px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 18px;

  font-size: 22px;
  font-weight: 700;
`;

export const MenuItem = styled(NavLink)`
  position: relative;
  color: #000;
  font-family: "Playfair Display", serif;
  text-decoration: none;
  &::before,
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: black;
    position: absolute;
    top: 50%;
    opacity: 0;
    transition: 0.3s ease-in-out;
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
  }
`;

export const SwitchLanguage = styled.div`
  cursor: pointer;
`;
