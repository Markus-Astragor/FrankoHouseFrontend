import React, { useState, useRef, useEffect, FormEvent } from "react";

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
  CenterBox,
  InputTitle,
  InputLbl,
  ButtonStyled,
} from "../../../styles/GeneralStylesAdminPanel";

import MessageWindow from "../../../components/Message/Message";
import { Loader } from "../../../components/Loader/LoaderComponentStyles";

import { museumInfoProps } from "../types/museumInfoProps";
import handleClearImages from "../functions/handleClearImages";
import handleClearInputs from "../functions/Museums/handleClearInputs";
import handleDeleteImage from "../functions/handleDeleteImage";
import handleChangeInput from "../functions/Museums/handleChangeInput";
import handleFileInput from "../functions/handleFileInput";
import tranformImagesForPreview from "../functions/transformImagesForPreview";
import { useCreate } from "../../../hooks/useCreate";

import config from "../../../configURLS.json";

function AddMuseum() {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [images, setImages] = useState<File[]>([]);
  const [imagesPreview, setImagesPreview] = useState<string[]>([]);
  const [museumInfo, setMuseumInfo] = useState<museumInfoProps>({
    urkTitle: "",
    ukrWorkingHours: "",
    ukrAddress: "",
    engTitle: "",
    engWorkingHours: "",
    engAddress: "",
    link: "",
    phone: "",
    email: "",
  });

  const { sendRequest, isLoading, success, setSuccess } = useCreate(config.ADMIN["ADD-MUSEUM"]);

  useEffect(() => {
    tranformImagesForPreview(images, setImagesPreview);
  }, [images]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (images.length === 0) return alert("Виберіть хоча б одне зображення");
    sendRequest(images, "POST", museumInfo);
    handleClearInputs(setMuseumInfo);
    handleClearImages(setImages, setImagesPreview);
  }

  return (
    <Wrapper>
      <Title>Додавання музею</Title>
      <Form onSubmit={handleSubmit}>
        <FlexItems>
          <FlexItem>
            <FormElementWrapper>
              <InputLbl>Назва музею (українською) *</InputLbl>
              <InputTitle
                value={museumInfo.urkTitle}
                required
                name='urkTitle'
                fullWidth
                onChange={(e) => handleChangeInput(e, setMuseumInfo)}
              />
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Години роботи (українською) *</InputLbl>
              <InputTitle
                value={museumInfo.ukrWorkingHours}
                required
                name='ukrWorkingHours'
                onChange={(e) => handleChangeInput(e, setMuseumInfo)}
                fullWidth
              />
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Адреса (українською) *</InputLbl>
              <InputTitle
                value={museumInfo.ukrAddress}
                required
                name='ukrAddress'
                onChange={(e) => handleChangeInput(e, setMuseumInfo)}
                fullWidth
              />
            </FormElementWrapper>
          </FlexItem>

          <FlexItem>
            <FormElementWrapper>
              <InputLbl>Назва музею (англійською) *</InputLbl>
              <InputTitle
                value={museumInfo.engTitle}
                required
                name='engTitle'
                fullWidth
                onChange={(e) => handleChangeInput(e, setMuseumInfo)}
              />
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Години роботи (англійською) *</InputLbl>
              <InputTitle
                value={museumInfo.engWorkingHours}
                required
                name='engWorkingHours'
                onChange={(e) => handleChangeInput(e, setMuseumInfo)}
                fullWidth
              />
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Адреса (англійською) *</InputLbl>
              <InputTitle
                value={museumInfo.engAddress}
                required
                onChange={(e) => handleChangeInput(e, setMuseumInfo)}
                name='engAddress'
                fullWidth
              />
            </FormElementWrapper>
          </FlexItem>

          <GeneralFlexItem>
            <FormElementWrapper>
              <InputLbl>Посилання на музей </InputLbl>
              <InputTitle
                value={museumInfo.link}
                name='link'
                onChange={(e) => handleChangeInput(e, setMuseumInfo)}
                fullWidth
              />
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Телефон</InputLbl>
              <InputTitle
                value={museumInfo.phone}
                name='phone'
                onChange={(e) => handleChangeInput(e, setMuseumInfo)}
                fullWidth
              />
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Електоронна Адреса</InputLbl>
              <InputTitle
                value={museumInfo.email}
                name='email'
                onChange={(e) => handleChangeInput(e, setMuseumInfo)}
                fullWidth
              />
            </FormElementWrapper>
          </GeneralFlexItem>
        </FlexItems>

        <ImagesContainer>
          {imagesPreview.map((img, index) => (
            <ImageContainer key={index}>
              <img src={img} />
              <DeleteButton onClick={() => handleDeleteImage(setImagesPreview, setImages, index)}>
                X
              </DeleteButton>
            </ImageContainer>
          ))}
        </ImagesContainer>

        <InputFileContainer>
          <InputFileBox>
            <FileInput
              ref={fileRef}
              onChange={() => handleFileInput(images, setImages, fileRef)}
              type='file'
              accept='image/*'
            />
            <FileInputIcon>+</FileInputIcon>
            <FileInputLable>додати фото</FileInputLable>
          </InputFileBox>
        </InputFileContainer>

        {isLoading ? (
          <CenterBox>
            <Loader />
          </CenterBox>
        ) : (
          <ButtonsContainer>
            <ButtonStyled type='submit' variant='outlined'>
              Створити
            </ButtonStyled>
            <ButtonStyled
              onClick={() => handleClearImages(setImages, setImagesPreview)}
              variant='outlined'
            >
              Скинути зображення
            </ButtonStyled>
            <ButtonStyled onClick={() => handleClearInputs(setMuseumInfo)} variant='outlined'>
              Очистити всі поля
            </ButtonStyled>
          </ButtonsContainer>
        )}
      </Form>
      {success && <MessageWindow setMessage={setSuccess} message={success} />}
    </Wrapper>
  );
}

export default AddMuseum;
