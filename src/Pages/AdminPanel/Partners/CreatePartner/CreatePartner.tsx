import React, { useState, useRef } from "react";
import {
  Wrapper,
  Title,
  CenterBox,
  Form,
  FormElementWrapper,
  InputLbl,
  InputTitle,
  FlexItem,
  ButtonsContainer,
  ButtonStyled,
  InputFileContainer,
  InputFileBox,
  FileInput,
  FileInputIcon,
  FileInputLable,
} from "../../../../styles/GeneralStylesAdminPanel";

export default function CreatePartner() {
  const [linkPartner, setLinkPartner] = useState<string>("");
  // const [imageForPartner, setImageForPartner] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = () => {
    console.log("linkPartner", linkPartner);
  };

  const handleLinkPartner = (e) => setLinkPartner(e.target.value);
  const handleClearLinkInput = () => setLinkPartner("");
  const handleFileInput = () => {
    if (fileRef.current && fileRef.current.files?.length !== 0) {
      console.log("dsad");
    }
  };

  return (
    <Wrapper>
      <Title>Додавання партнера</Title>
      <Form onSubmit={handleSubmit}>
        <CenterBox>
          <FlexItem>
            <FormElementWrapper>
              <InputLbl>Посилання на сайт партнера</InputLbl>
              <InputTitle
                required
                name='ukrTitle'
                value={linkPartner}
                onChange={handleLinkPartner}
                fullWidth
              />
            </FormElementWrapper>
            <InputFileContainer style={{ marginBottom: "0px" }}>
              <InputFileBox>
                <FileInput
                  multiple
                  ref={fileRef}
                  onChange={handleFileInput}
                  type='file'
                  accept='image/*'
                />
                <FileInputIcon>+</FileInputIcon>
                <FileInputLable>додати фото</FileInputLable>
              </InputFileBox>
            </InputFileContainer>
          </FlexItem>
        </CenterBox>
        <CenterBox style={{ marginTop: "30px" }}>
          <ButtonsContainer>
            <ButtonStyled type='submit' variant='outlined'>
              Додати партнера
            </ButtonStyled>
            {/* <ButtonStyled onClick={} variant='outlined'>
            Скинути зображення
          </ButtonStyled> */}
            <ButtonStyled onClick={handleClearLinkInput} variant='outlined'>
              Очистити поле для посилання
            </ButtonStyled>
          </ButtonsContainer>
        </CenterBox>
      </Form>
    </Wrapper>
  );
}
