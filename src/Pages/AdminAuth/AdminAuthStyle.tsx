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

  @media (max-width: 550px) {
    width: 70%;
  }

  @media (min-width: 551px) and (max-width: 800px) {
    width: 60%;
  }

  @media (min-width: 801px) and (max-width: 1200px) {
    width: 40%;
  }
  @media (min-width: 1201px) and (max-width: 1600px) {
    width: 30%;
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
