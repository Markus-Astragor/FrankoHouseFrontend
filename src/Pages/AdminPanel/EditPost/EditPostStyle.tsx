import styled from "styled-components";

export const EditPostStyled = styled.div`
  width: 100%;
  position: relative;
`;

export const Form = styled.form`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const FlexItems = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const FlexItem = styled.div`
  padding: 30px;
  box-sizing: border-box;
  width: 47%;
  border-radius: 10px;
  background: rgba(217, 217, 217, 0.1);
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const ReturnButton = styled.button`
  background-color: #fff;
  border-radius: 15px;
  position: absolute;
  top: -20px;
  left: 0px;
  font-size: 15px;
  border: 0;
  cursor: pointer;
  color: #000;
  padding: 8px 15px;
`;
