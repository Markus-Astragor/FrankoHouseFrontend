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

  @media (max-width: 600px) {
    font-size: 19px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 24px;
  }
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

export const InputLbl = styled(InputLabel)`
  margin-bottom: 20px;
  color: #fff;

  @media (max-width: 600px) {
    font-size: 12px;
  }

  @media (min-width: 600px) and (max-width: 1200px) {
    font-size: 15px;
  }

  @media (min-width: 1200px) and (max-width: 2400px) {
    font-size: 19px;
  }

  @media (min-width: 2400px) {
    font-size: 25px;
  }
`;
export const InputTitle = styled(Input)`
  padding: 0 10px;
  box-sizing: border-box;
  color: #fff;
  background-color: transparent;
  border-color: #fff;
  @media (max-width: 600px) {
    font-size: 12px;
  }

  @media (min-width: 600px) and (max-width: 1200px) {
    font-size: 14px;
  }

  @media (min-width: 1200px) and (max-width: 2400px) {
    font-size: 18px;
  }

  @media (min-width: 2400px) {
    font-size: 24px;
  }
`;

export const CenterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexItems = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const FlexItem = styled.div`
  padding: 30px;
  box-sizing: border-box;
  width: 47%;
  border-radius: 10px;
  background: rgba(217, 217, 217, 0.1);

  @media (max-width: 1100px) {
    width: 100%;
    margin-bottom: 30px;
  }
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

  @media (max-width: 600px) {
    font-size: 8px;
    padding: 10px 22px;
  }

  @media (min-width: 600px) and (max-width: 1100px) {
    font-size: 10px;
    padding: 12px 26px;
  }

  @media (min-width: 2400px) {
    font-size: 22px;
    padding: 15px 30px;
  }
`;

export const ImagesContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  margin-bottom: 30px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(223px, 223px));

  row-gap: 20px;
  column-gap: 20px;
  /*justify-content: center;*/

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }

  @media (min-width: 600px) and (max-width: 1100px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  @media (min-width: 2400px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  height: 130px;
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

  @media (max-width: 600px) {
    padding: 5px 14px;
    font-size: 9px;
  }

  @media (min-width: 600px) and (max-width: 1100px) {
    padding: 6px 16px;
    font-size: 10px;
  }

  @media (min-width: 2400px) {
    padding: 6px 20px;
    font-size: 22px;
  }
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

  @media (max-width: 600px) {
    width: 100px;
    padding: 7px 9px;
  }

  @media (min-width: 600px) and (max-width: 1100px) {
    width: 110px;
    padding: 7px 10px;
  }

  @media (min-width: 2400px) {
    width: 250px;
    padding: 12px 18px;
  }
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

  @media (max-width: 600px) {
    font-size: 10px;
  }

  @media (min-width: 600px) and (max-width: 1100px) {
    font-size: 12px;
  }

  @media (min-width: 2400px) {
    font-size: 25px;
  }
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

  @media (max-width: 600px) {
    width: 25px;
    height: 25px;
    font-size: 28px;
  }

  @media (min-width: 600px) and (max-width: 1100px) {
    width: 30px;
    height: 30px;
    font-size: 30px;
  }

  @media (min-width: 2400px) {
    width: 80px;
    height: 80px;
    font-size: 60px;
  }
`;
// Input styles
