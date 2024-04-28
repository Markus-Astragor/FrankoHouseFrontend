import React, { FormEvent, useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios, { AxiosError } from "axios";
import config from "../../../configURLS.json";
import TextArea from "../../../components/TextArea/TexArea";
import MessageWindow from "../../../components/Message/Message";
import { Loader } from "../../../components/Loader/LoaderComponentStyles";
import { postInfoProps } from "../types/postInfoProps";
import { useEdit } from "../../../hooks/useEdit";

// functions
import handleFileInput from "../functions/handleFileInput";
import handleDeleteImage from "../functions/handleDeleteImage";
import handleClearInputs from "../functions/Posts/handleClearInputs";
import tranformImagesForPreview from "../functions/transformImagesForPreview";
import createFileFromUrl from "../functions/createFileFromUrl";
import handleChangeInput from "../functions/Posts/handleChangeInput";
import handleClearImages from "../functions/handleClearImages";

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
  LoaderWrapper,
} from "../../../styles/GeneralStylesAdminPanel";

export default function EditPost() {
  const { id } = useParams<{ id: string }>();
  const [imagesUrl, setImagesUrl] = useState<string[]>([]);
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

  const { sendRequest, message, setMessage, isLoading, setIsLoading } = useEdit(
    config.ADMIN["EDIT-POST"],
  );

  const fileRef = useRef<HTMLInputElement | null>(null);

  // Submit function
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (images.length === 0) return alert("Виберіть хочаб одне зображення");
    sendRequest(images, postInfo, { name: "postId", value: id || "" });
    handleClearInputs(setPostInfo);
    handleClearImages(setImages, setImagesPreview);
  }

  useEffect(() => {
    tranformImagesForPreview(images, setImagesPreview);
  }, [images]);

  // # 2 Converting urls into files
  useEffect(() => {
    const imagesPromises = imagesUrl.map((url, index) =>
      createFileFromUrl(url, `image-${index + 1}`),
    );
    Promise.all(imagesPromises).then((res) => {
      console.log(res);
      setImages(res);
    });
  }, [imagesUrl]);

  // #1 Fetching post data
  useEffect(() => {
    async function getPostData() {
      try {
        setIsLoading(true);

        const res = await axios.get(`${config["BASE-URL"]}/admin/getPost/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        });

        console.log(res);

        if (res.status !== 200) throw new Error("Виникла помилка при завантажені даних");
        setPostInfo({
          ukrTitle: res.data.ukrainian.title,
          ukrDescription: res.data.ukrainian.description,
          ukrShortDescription: res.data.ukrainian.shortDescription,
          engTitle: res.data.english.title,
          engDescription: res.data.english.description,
          engShortDescription: res.data.english.shortDescription,
        });

        setImagesUrl(res.data.photos);
      } catch (error) {
        if (error instanceof Error) {
          if (error instanceof AxiosError) {
            alert(error.response?.data.message);
          } else {
            alert(error.message);
          }
        }
      } finally {
        setIsLoading(false);
      }
    }
    getPostData();
  }, []);

  if (isLoading) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }

  return (
    <Wrapper>
      <Title>Редагування</Title>
      <Form onSubmit={handleSubmit}>
        <FlexItems>
          <FlexItem>
            <FormElementWrapper>
              <InputLbl htmlFor='ukr-title'>Заголовок (українською)</InputLbl>
              <InputTitle
                id='ukr-title'
                required
                name='ukrTitle'
                value={postInfo.ukrTitle}
                onChange={(e) => handleChangeInput(e, setPostInfo)}
                fullWidth
              />
            </FormElementWrapper>
            <FormElementWrapper>
              <InputLbl>Короткий опис (українською)</InputLbl>
              <TextArea
                value={postInfo.ukrShortDescription}
                onChange={(e) => handleChangeInput(e, setPostInfo)}
                name='ukrShortDescription'
              />
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Повний опис (українською)</InputLbl>
              <TextArea
                name='ukrDescription'
                value={postInfo.ukrDescription}
                onChange={(e) => handleChangeInput(e, setPostInfo)}
              />
            </FormElementWrapper>
          </FlexItem>

          <FlexItem>
            <FormElementWrapper>
              <InputLbl>Заголовок (англійською)</InputLbl>
              <InputTitle
                required
                name='engTitle'
                value={postInfo.engTitle}
                onChange={(e) => handleChangeInput(e, setPostInfo)}
                fullWidth
              />
            </FormElementWrapper>
            <FormElementWrapper>
              <InputLbl>Короткий опис (англійською)</InputLbl>
              <TextArea
                name='engShortDescription'
                value={postInfo.engShortDescription}
                onChange={(e) => handleChangeInput(e, setPostInfo)}
              />
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Повний опис (англійською)</InputLbl>
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
              Оновити
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
