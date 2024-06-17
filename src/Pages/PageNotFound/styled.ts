import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  max-width: 95%;
  padding: 50px 0;
  box-sizing: border-box;
`;

export const ReturnButton = styled(Link)`
  padding: 14px 20px;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  font-size: 26px;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 20px;

  @media (max-width: 450px) {
    padding: 10px 18px;
    font-size: 22px;
  }
`;

export const ErrorMessage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  box-sizing: border-box;
`;

export const ErrorImage = styled.img`
  width: 400px;
  height: auto;
  margin-bottom: 24px;

  @media (max-width: 450px) {
    width: 300px;
  }
`;

export const ErrorText = styled.p`
  color: #000;
  font-weight: 700;
  font-size: 28px;
  text-align: center;

  @media (max-width: 450px) {
    font-size: 24px;
  }
`;
