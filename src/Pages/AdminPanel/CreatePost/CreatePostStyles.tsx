import styled from "styled-components";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

export const InputLbl = styled(InputLabel)`
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  margin-bottom: 20px;
  text-align: center;
`;

export const CreatePostWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CreatePostStyled = styled.div`
  width: 400px;
  padding: 40px 0;
`;

export const FormElementWrapper = styled.div`
  margin-bottom: 30px;
`;

export const InputTitle = styled(Input)`
  padding: 0 10px;
  box-sizing: border-box;
`;
export const FileInput = styled.input`
  &::file-selector-button {
    border-radius: 4px;
    padding: 0 16px;
    height: 40px;
    cursor: pointer;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.16);
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
    margin-right: 16px;
    transition: background-color 200ms;
  }
  &::file-selector-button:hover {
    background-color: #f3f4f6;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CenterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
