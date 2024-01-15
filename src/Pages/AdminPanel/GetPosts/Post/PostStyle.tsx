import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostItem = styled.li`
  background-color: #fff;
  margin-bottom: 30px;
  padding: 15px 25px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PostInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #000;
  font-family: Inter;
`;

export const Title = styled.div`
  font-size: 18px;
`;

export const Date = styled.div`
  font-size: 18px;
  border-right: 1px solid #000;
  padding: 5px 0;
  padding-right: 15px;
`;

export const ButtonsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const Button = styled.button`
  padding: 8px 25px;
  box-sizing: border-box;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.4s linear;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export const LinkButton = styled(Link)`
  padding: 8px 25px;
  box-sizing: border-box;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.4s linear;
  text-decoration: none;
  color: #000;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
