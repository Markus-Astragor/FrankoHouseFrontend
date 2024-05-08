import React, { useState, useRef, useEffect, FormEvent } from "react";
import { useParams } from "react-router-dom";
import axios, { AxiosError } from "axios";

import {
  LoaderWrapper,
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

import { Loader } from "../../../components/Loader/LoaderComponentStyles";

import { museumInfoProps } from "../types/museumInfoProps";
import handleClearImages from "../functions/handleClearImages";
import handleClearInputs from "../functions/Museums/handleClearInputs";
import handleDeleteImage from "../functions/handleDeleteImage";
import handleChangeInput from "../functions/Museums/handleChangeInput";
import handleFileInput from "../functions/handleFileInput";

import createFileFromUrl from "../functions/createFileFromUrl";
import tranformImagesForPreview from "../functions/transformImagesForPreview";

import { useEdit } from "../../../hooks/useEdit";

import config from "../../../configURLS.json";
import MessageWindow from "../../../components/Message/Message";

function EditMuseum() {
  const { id } = useParams<{ id: string }>();
  const [imagesUrl, setImagesUrl] = useState<string[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const [imagesPreview, setImagesPreview] = useState<string[]>([]);
  const { isLoading, setIsLoading, sendRequest, message, setMessage } = useEdit(
    config.ADMIN["EDIT-MUSEUM"],
  );

  console.log("id " + id);

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

  const fileRef = useRef<HTMLInputElement | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (images.length === 0) return alert("Виберіть хоча б одне зображення");
    sendRequest(images, museumInfo, { name: "museumId", value: id || "" });
    handleClearInputs(setMuseumInfo);
    handleClearImages(setImages, setImagesPreview);
  }

  // 1. Loading data about museum
  useEffect(() => {
    async function getMuseumData() {
      try {
        setIsLoading(true);

        const res = await axios.get(`${config["BASE-URL"]}/admin/getMuseum/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        });

        console.log(res);

        if (res.status !== 200) throw new Error("Виникла помилка при завантажені даних");
        setMuseumInfo({
          urkTitle: res.data.ukrainian?.title,
          ukrWorkingHours: res.data.ukrainian.workingHours,
          ukrAddress: res.data.ukrainian.address,
          engTitle: res.data.english.title,
          engWorkingHours: res.data.english.workingHours,
          engAddress: res.data.english.address,
          link: res.data.link,
          phone: res.data.phone,
          email: res.data.email,
        });

        setImagesUrl(res.data.photo);
      } catch (error) {
        console.log(error);

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

    getMuseumData();
  }, []);

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

  // #3 Transforming images into base 64
  useEffect(() => {
    tranformImagesForPreview(images, setImagesPreview);
  }, [images]);

  // Function for transforming all images into base64 for displaying
  if (isLoading) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }

  return (
    <Wrapper>
      <Title>Редагування музею</Title>
      <Form onSubmit={handleSubmit}>
        <FlexItems>
          <FlexItem>
            <FormElementWrapper>
              <InputLbl>Назва музею (українською) *</InputLbl>
              <InputTitle
                value={museumInfo.urkTitle}
                required
                name='urkMuseumTitle'
                fullWidth
                onChange={(e) => handleChangeInput(e, setMuseumInfo)}
              />
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Години роботи (українською) *</InputLbl>
              <InputTitle
                value={museumInfo.ukrWorkingHours}
                required
                name='UkrWorkingHr'
                onChange={(e) => handleChangeInput(e, setMuseumInfo)}
                fullWidth
              />
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Адреса (українською) *</InputLbl>
              <InputTitle
                value={museumInfo.ukrAddress}
                required
                name='UkrAddress'
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
                name='EnMuseumTitle'
                fullWidth
                onChange={(e) => handleChangeInput(e, setMuseumInfo)}
              />
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Години роботи (англійською) *</InputLbl>
              <InputTitle
                value={museumInfo.engWorkingHours}
                required
                name='EnWorkingHr'
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
                name='EnAddress'
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
            <ButtonStyled onClick={() => handleClearInputs(setMuseumInfo)} variant='outlined'>
              Очистити всі поля
            </ButtonStyled>
          </ButtonsContainer>
        )}
      </Form>
      {message && <MessageWindow setMessage={setMessage} message={message} />}
    </Wrapper>
  );
}

export default EditMuseum;
