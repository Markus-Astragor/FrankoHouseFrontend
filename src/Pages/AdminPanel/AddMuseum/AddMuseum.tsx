import React, { useState, ChangeEvent } from "react";

import {
  Wrapper,
  FlexItem,
  Form,
  FlexItems,
  GeneralFlexItem,
  ButtonsContainer,
  Title,
  ImagesContainer,
  ImageContainer,
  DeleteButton,
  InputFileBox,
  FileInput,
  FileInputLable,
  FileInputIcon,
  InputFileContainer,
  FormElementWrapper,
  //   CenterBox,
  InputTitle,
  InputLbl,
  ButtonStyled,
} from "../../../styles/GeneralStylesAdminPanel";

import { museumInfoProps } from "../types/museumInfoProps";
import handleClearImages from "../functions/handleClearImages";
import handleClearInputs from "../functions/handleClearInputs";

function AddMuseum() {
  const [images, setImages] = useState<File[]>([]);
  const [imagesPreview, setImagesPreview] = useState<string[]>([]);
  const [museumInfo, setMuseumInfo] = useState<museumInfoProps>({
    urkMuseumTitle: "",
    UkrWorkingHr: "",
    UkrAddress: "",
    EnMuseumTitle: "",
    EnrWorkingHr: "",
    EnAddress: "",
    link: "",
    phone: "",
    email: "",
  });

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setMuseumInfo((prev) => ({ ...prev, [name]: value }));
  }

  // Deleting image
  function handleDeleteImage(index: number) {
    setImagesPreview(imagesPreview.slice(0, index).concat(imagesPreview.slice(index + 1)));
    setImages(images.slice(0, index).concat(images.slice(index + 1)));
  }

  return (
    <Wrapper>
      <Title>Додавання музею</Title>
      <Form>
        <FlexItems>
          <FlexItem>
            <FormElementWrapper>
              <InputLbl>Назва музею (українською) *</InputLbl>
              <InputTitle
                value={museumInfo.urkMuseumTitle}
                required
                name='urkMuseumTitle'
                fullWidth
                onChange={handleInput}
              />
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Години роботи (українською) *</InputLbl>
              <InputTitle
                value={museumInfo.UkrWorkingHr}
                required
                name='UkrWorkingHr'
                onChange={handleInput}
                fullWidth
              />
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Адреса (українською) *</InputLbl>
              <InputTitle
                value={museumInfo.UkrAddress}
                required
                name='UkrAddress'
                onChange={handleInput}
                fullWidth
              />
            </FormElementWrapper>
          </FlexItem>

          <FlexItem>
            <FormElementWrapper>
              <InputLbl>Назва музею (англійською) *</InputLbl>
              <InputTitle
                value={museumInfo.EnMuseumTitle}
                required
                name='EnMuseumTitle'
                fullWidth
                onChange={handleInput}
              />
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Години роботи (англійською) *</InputLbl>
              <InputTitle
                value={museumInfo.EnrWorkingHr}
                required
                name='EnWorkingHr'
                onChange={handleInput}
                fullWidth
              />
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Адреса (англійською) *</InputLbl>
              <InputTitle
                value={museumInfo.EnAddress}
                required
                onChange={handleInput}
                name='EnAddress'
                fullWidth
              />
            </FormElementWrapper>
          </FlexItem>

          <GeneralFlexItem>
            <FormElementWrapper>
              <InputLbl>Посилання на музей </InputLbl>
              <InputTitle value={museumInfo.link} name='link' onChange={handleInput} fullWidth />
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Телефон</InputLbl>
              <InputTitle value={museumInfo.phone} name='phone' onChange={handleInput} fullWidth />
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Електоронна Адреса</InputLbl>
              <InputTitle value={museumInfo.email} name='email' onChange={handleInput} fullWidth />
            </FormElementWrapper>
          </GeneralFlexItem>
        </FlexItems>

        <ImagesContainer>
          {imagesPreview.map((img, index) => (
            <ImageContainer key={index}>
              <img src={img} />
              <DeleteButton onClick={() => handleDeleteImage(index)}>X</DeleteButton>
            </ImageContainer>
          ))}
        </ImagesContainer>

        <InputFileContainer>
          <InputFileBox>
            <FileInput
              multiple
              //   ref={fileRef}
              //   onChange={handleFileInput}
              type='file'
              accept='image/*'
            />
            <FileInputIcon>+</FileInputIcon>
            <FileInputLable>додати фото</FileInputLable>
          </InputFileBox>
        </InputFileContainer>

        <ButtonsContainer>
          <ButtonStyled type='submit' variant='outlined'>
            Створити
          </ButtonStyled>
          <ButtonStyled onClick={() => handleClearImages(setImages)} variant='outlined'>
            Скинути зображення
          </ButtonStyled>
          <ButtonStyled onClick={() => handleClearInputs(setMuseumInfo)} variant='outlined'>
            Очистити всі поля
          </ButtonStyled>
        </ButtonsContainer>
      </Form>
    </Wrapper>
  );
}

export default AddMuseum;
