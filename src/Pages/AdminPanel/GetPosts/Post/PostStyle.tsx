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

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 1200px) {
    padding: 10px 18px;
  }

  @media (min-width: 2400px) {
    padding: 20px 30px;
  }
`;

export const PostInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #000;
  font-family: Inter;

  @media (max-width: 600px) {
    margin-bottom: 20px;
    width: 100%;
    justify-content: flex-start;
  }
`;

export const Title = styled.div`
  font-size: 18px;
  padding-right: 10px;

  @media (max-width: 600px) {
    padding-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 13px;
    padding-right: 8px;
  }

  @media (min-width: 2400px) {
    font-size: 24px;
  }
`;

export const Date = styled.div`
  font-size: 16px;
  border-right: 1px solid #000;
  padding: 5px 0;
  padding-right: 10px;
  line-height: 20px;

  @media (max-width: 600px) {
    border: 0;
  }
  @media (max-width: 768px) {
    font-size: 10px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    padding-right: 8px;
    font-size: 11px;
  }

  @media (min-width: 2400px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  font-family: Arial, Helvetica, sans-serif;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: space-between;
  }

  @media (max-width: 1200px) {
    gap: 10px;
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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

  @media (max-width: 480px) {
    border-width: 1px;

    font-size: 10px;
    padding: 4px 15px;
  }

  /* @media (min-width: 480px) and (max-width: 768px) {
    padding: 5px 18px;
    font-size: 11px;
  } */
  @media (min-width: 480px) and (max-width: 1200px) {
    padding: 5px 18px;
    font-size: 11px;
  }

  @media (min-width: 2400px) {
    font-size: 24px;
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

  @media (max-width: 480px) {
    border-width: 1px;

    font-size: 10px;
    padding: 4px 15px;
  }

  @media (min-width: 480px) and (max-width: 1200px) {
    padding: 5px 18px;
    font-size: 11px;
  }

  @media (min-width: 2400px) {
    font-size: 24px;
  }
`;
