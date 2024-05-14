import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const AdminStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  background: rgba(5, 62, 75, 0.9);
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavBar = styled.div`
  height: 100vh;
  max-width: 400px;
  min-width: 300px;
  width: 20%;
  background-color: #09282c;
  border-radius: 0px 30px 30px 0px;

  @media (max-width: 600px) {
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: none;
    min-width: none;
    border-radius: 0px 0px 30px 30px;
    height: 100px; // 200px
    padding: 20px;
    margin-bottom: 20px;

    box-sizing: border-box;
  }
`;

export const NavbarBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 120px;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 0px;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    gap: 100px;
  }
`;

export const Logo = styled.img`
  width: 140px;
  height: auto;
  padding-top: 6px;

  @media (min-width: 769px) and (max-width: 1200px) {
    width: 120px;
  }
  @media (max-width: 768px) {
    width: 84px;
    height: auto;
    padding-right: 30px;
  }
  /* @media (max-width: 600px) {
    width: 70px;
  } */
`;

export const LinkBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 0 auto;

  @media (max-width: 768px) {
    /* flex-direction: row;
    justify-content: flex-end;
    gap: 15px; */
    display: none;
  }
`;

export const LogoLink = styled(NavLink)`
  text-decoration: none;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  color: white;
  border-radius: 12px;
  border: 1px solid #fff;
  display: block;
  width: 75%;
  padding: 8px 0;
  transition: 0.3s ease-in;
  text-align: center;
  box-sizing: border-box;
  &:hover {
    background: rgba(135, 135, 135, 0.52);
  }
  &.active {
    background: rgba(135, 135, 135, 0.52);
  }

  @media (max-width: 480px) {
    width: 40%;
    font-size: 9px;
    padding: 5px 0;
  }

  @media (min-width: 480px) and (max-width: 768px) {
    width: 40%;
    font-size: 12px;
    padding: 6px 0;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 13px;
  }
`;

export const BurgerLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  border-radius: 12px;
  border: 1px solid #8a8a8a;
  display: block;
  width: 100%;
  padding: 8px 0;
  transition: 0.3s ease-in;
  text-align: center;
  box-sizing: border-box;
  &:hover {
    background: rgba(135, 135, 135, 0.52);
  }
  &.active {
    background: rgba(135, 135, 135, 0.52);
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 9px;
    padding: 5px 0;
  }

  @media (min-width: 480px) and (max-width: 768px) {
    width: 100%;
    font-size: 12px;
    padding: 6px 0;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 13px;
  }
`;

export const AdminWindow = styled.div`
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #8e9494; /* Color of the thumb */
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #ffffff; /* Color of the track */
    border-radius: 5px;
  }

  /* For Firefox */
  scrollbar-width: thin;
  scrollbar-color: #4caf50 #ffffff;

  flex: 1 1 auto;
  padding: 40px 20px 40px;
  box-sizing: border-box;
  overflow-y: scroll;

  @media (max-width: 768px) {
    padding: 20px 20px;
    height: 100%;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
