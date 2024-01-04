import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const AccessDeniedStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Roboto Condensed", sans-serif;
`;

export const LockImgContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid black;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  svg {
    width: 100px;
    fill-opacity: 0.5;
  }
`;

export const Title = styled.h2`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const Message = styled.p`
  text-align: center;
  font-size: 22px;
  margin-bottom: 30px;
`;

export const Button = styled(NavLink)`
  padding: 15px 20px;
  background-color: #3de1d6;
  text-decoration: none;
  color: #fff;
  font-size: 22px;
  transition: 0.5s ease-out;
  &:hover {
    transform: scale(0.95);
  }
`;
