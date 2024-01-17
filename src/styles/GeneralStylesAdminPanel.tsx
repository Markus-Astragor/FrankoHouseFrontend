import styled from "styled-components";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 30px;
  color: #fff;
  margin-bottom: 40px;
  text-align: center;
`;

export const Form = styled.form`
  max-width: 1760px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const FormElementWrapper = styled.div`
  margin-bottom: 30px;
`;

export const InputTitle = styled(Input)`
  padding: 0 10px;
  box-sizing: border-box;
  color: #fff;
  background-color: transparent;
  border-color: #fff;
`;

export const CenterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputLbl = styled(InputLabel)`
  margin-bottom: 20px;
  color: #fff;
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

export const ButtonStyled = styled(Button)`
  border-color: #fff;
  color: #fff;
  transition: transform 0.2s ease-in-out;
  &:hover {
    border-color: #fff;
    transform: scale(1.03);
  }
`;

export const ImagesContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  margin-bottom: 30px;
  padding: 10px;
  box-sizing: border-box;
  display: grid;
  /* grid-template-columns: repeat(4, 1fr); */
  grid-template-columns: repeat(auto-fill, minmax(223px, 223px));

  row-gap: 20px;
  column-gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 223px;
  height: 137px;
  border-radius: 15px;
  overflow: hidden;
  box-sizing: border-box;

  img {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const DeleteButton = styled.div`
  padding: 4px 15px;
  background-color: #fff;
  position: absolute;
  top: 8px;
  right: 10px;
  font-size: 14px;
  color: #000;
  z-index: 1;
  border-radius: 15px;
  cursor: pointer;
`;

// Input styles

export const InputFileContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  transition: 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const InputFileBox = styled.div`
  position: relative;
  width: 140px;
  padding: 8px 12px;
  box-sizing: border-box;
  border-radius: 15px;
  background: rgba(217, 217, 217, 0.09);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FileInput = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
`;

export const FileInputLable = styled.p`
  color: #fff;
  font-size: 14px;
  text-align: center;
`;

export const FileInputIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 45px;
  margin-bottom: 10px;
`;
// Input styles
