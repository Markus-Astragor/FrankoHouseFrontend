import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const AdminStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  background: rgba(5, 62, 75, 0.9);
  overflow: hidden;
`;

export const NavBar = styled.div`
  height: 100vh;
  max-width: 300px;
  width: 300px;
  background-color: #09282c;
  border-radius: 0px 30px 30px 0px;
`;

export const NavbarBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 120px;
`;

export const Logo = styled.img`
  width: 140px;
  height: auto;
`;

export const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  color: white;
  border-radius: 12px;
  border: 1px solid #fff;
  display: block;
  padding: 8px 50px;
  transition: 0.3s ease-in;
  text-align: center;
  &:hover {
    background: rgba(135, 135, 135, 0.52);
  }
  &.active {
    background: rgba(135, 135, 135, 0.52);
  }
`;

export const AdminWindow = styled.div`
  flex: 1 1 auto;
  padding: 40px 20px 40px;
  box-sizing: border-box;
  overflow-y: scroll;
`;
