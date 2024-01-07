import styled from "styled-components";

export const MainBlock = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 20%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  * {
    margin: 5px;
  }
`;

export const InputElement = styled.input`
  display: block;
`;

export const FieldName = styled.span`
  width: 100%;
  display: block;
`;

export const SubmitButton = styled.button`
  display: block;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const ErrorParagraph = styled.p`
  color: red;
  font-size: 16px;
  text-align: center;
  margin: 5px 0px;
`;
