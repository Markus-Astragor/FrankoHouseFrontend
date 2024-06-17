import React, { FormEvent, useRef, useState, useEffect } from "react";

import {
  Wrapper,
  FlexItem,
  Form,
  FlexItems,
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
  InputTitle,
  CenterBox,
  InputLbl,
  ButtonStyled,
  // ErrorParagraph,
  // ErrorParagraphContainer,
} from "../GeneralStylesAdminPanel";

import handleClearImages from "../functions/handleClearImages";
import handleDeleteImage from "../functions/handleDeleteImage";
import tranformImagesForPreview from "../functions/transformImagesForPreview";
import handleFileInput from "../functions/handleFileInput";
import handleClearInputs from "../functions/Posts/handleClearInputs";
import handleChangeInput from "../functions/Posts/handleChangeInput";

import TextArea from "../../../components/TextArea/TexArea";
import { Loader } from "../../../components/Loader/LoaderComponentStyles";

import config from "../../../configURLS.json";
import { postInfoProps } from "../types/postInfoProps";
import { useCreate } from "../../../hooks/useCreate";
import MessageWindow from "../../../components/Message/Message";

function CreatePost() {
  const [images, setImages] = useState<File[]>([]);
  const [imagesPreview, setImagesPreview] = useState<string[]>([]);
  const [postInfo, setPostInfo] = useState<postInfoProps>({
    ukrTitle: "",
    ukrDescription: "",
    ukrShortDescription: "",
    engTitle: "",
    engDescription: "",
    engShortDescription: "",
  });

  useEffect(() => {
    tranformImagesForPreview(images, setImagesPreview);
  }, [images]);

  const fileRef = useRef<HTMLInputElement | null>(null);
  const { sendRequest, message, setMessage, isLoading } = useCreate(config.ADMIN["CREATE-POST"]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (images.length === 0) return alert("Виберіть хочаб одне зображення");
    sendRequest(images, "POST", postInfo, "photos");
    handleClearInputs(setPostInfo);
    handleClearImages(setImages, setImagesPreview);
    if (fileRef.current) {
      fileRef.current.value = "";
    }
  }

  useEffect(() => {
    tranformImagesForPreview(images, setImagesPreview);
  }, [images]);

  return (
    <Wrapper>
      <Title>Створення публікації</Title>
      <Form onSubmit={handleSubmit}>
        <FlexItems>
          <FlexItem>
            <FormElementWrapper>
              <InputLbl>Заголовок (українською) *</InputLbl>
              <InputTitle
                required
                name='ukrTitle'
                value={postInfo.ukrTitle}
                onChange={(e) => handleChangeInput(e, setPostInfo)}
                fullWidth
              />
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Короткий опис (українською) *</InputLbl>
              <TextArea
                value={postInfo.ukrShortDescription}
                onChange={(e) => handleChangeInput(e, setPostInfo)}
                name='ukrShortDescription'
              />
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Повний опис (українською) *</InputLbl>
              <TextArea
                name='ukrDescription'
                value={postInfo.ukrDescription}
                onChange={(e) => handleChangeInput(e, setPostInfo)}
              />
            </FormElementWrapper>
          </FlexItem>

          <FlexItem>
            <FormElementWrapper>
              <InputLbl>Заголовок (англійською) *</InputLbl>
              <InputTitle
                required
                name='engTitle'
                onChange={(e) => handleChangeInput(e, setPostInfo)}
                value={postInfo.engTitle}
                fullWidth
              />
            </FormElementWrapper>
            <FormElementWrapper>
              <InputLbl>Короткий опис (англійською) *</InputLbl>
              <TextArea
                name='engShortDescription'
                value={postInfo.engShortDescription}
                onChange={(e) => handleChangeInput(e, setPostInfo)}
              />
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Повний опис (англійською) *</InputLbl>
              <TextArea
                name='engDescription'
                value={postInfo.engDescription}
                onChange={(e) => handleChangeInput(e, setPostInfo)}
              />
            </FormElementWrapper>
          </FlexItem>
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
              multiple
              ref={fileRef}
              onChange={() => handleFileInput(images, setImages, fileRef, setMessage)}
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
            <ButtonStyled onClick={() => handleClearInputs(setPostInfo)} variant='outlined'>
              Очистити всі поля
            </ButtonStyled>
          </ButtonsContainer>
        )}
      </Form>
      {message && <MessageWindow setMessage={setMessage} message={message} />}
    </Wrapper>
  );
}

export default CreatePost;
