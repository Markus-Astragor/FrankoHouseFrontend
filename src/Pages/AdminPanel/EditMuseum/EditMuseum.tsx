import React, { useState, useRef, useEffect, FormEvent } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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

// import Success from "../../../components/SuccesWindow/Success";
import { Loader } from "../../../components/Loader/LoaderComponentStyles";

import { museumInfoProps } from "../types/museumInfoProps";
import handleClearImages from "../functions/handleClearImages";
import handleClearInputs from "../functions/handleClearInputs";
import handleDeleteImage from "../functions/handleDeleteImage";
import handleChangeInput from "../functions/handleChangeInput";
import handleFileInput from "../functions/handleFileInput";
import tranformImagesForPreview from "../functions/transformImagesForPreview";
import { useGetMuseum } from "../../../hooks/useGetMuseum";

function EditMuseum() {
  const { id } = useParams();
  const [imagesUrl] = useState<string[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const [imagesPreview, setImagesPreview] = useState<string[]>([]);
  const { isLoading, data, getMuseum } = useGetMuseum();
  const [museumInfo, setMuseumInfo] = useState<museumInfoProps>({
    urkMuseumTitle: "",
    UkrWorkingHr: "",
    UkrAddress: "",
    EnMuseumTitle: "",
    EnWorkingHr: "",
    EnAddress: "",
    link: "",
    phone: "",
    email: "",
  });

  const fileRef = useRef<HTMLInputElement | null>(null);

  // # filling inputs when data is loaded
  useEffect(() => {
    console.log("data is loaded");
    console.log(data);

    setMuseumInfo({
      urkMuseumTitle: data.urkMuseumTitle,
      UkrWorkingHr: data.UkrWorkingHr,
      UkrAddress: data.UkrAddress,
      EnMuseumTitle: data.EnMuseumTitle,
      EnWorkingHr: data.EnWorkingHr,
      EnAddress: data.EnAddress,
      link: data.link || "",
      phone: data.phone || "",
      email: data.email || "",
    });
  }, [data]);

  useEffect(() => {
    tranformImagesForPreview(images, setImagesPreview);
  }, [images]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (images.length === 0) return alert("Виберіть хоча б одне зображення");
    // sendRequest(museumInfo, images);
    handleClearInputs(setMuseumInfo);
  }

  // 1. Loading data about museum
  useEffect(() => {
    getMuseum(id);
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

  async function createFileFromUrl(url: string, fileName: string) {
    try {
      // Use Axios to make the request
      const response = await axios.get(url, { responseType: "blob" });

      // Create a File object from the Blob
      const file = new File([response.data], fileName || "image.jpg", {
        type: response.headers["content-type"],
      });

      return file;
    } catch (error) {
      console.error("Error creating File from URL:", error);
      throw error;
    }
  }

  // #3 Transforming images into base 64
  useEffect(() => {
    tranformImageForPreview();
  }, [images]);

  // Function for transforming all images into base64 for displaying
  function tranformImageForPreview() {
    if (images.length === 0) return;
    const promises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (e) => {
          resolve(e.target?.result as string);
        };

        reader.onerror = (error) => {
          reject(error);
        };

        reader.readAsDataURL(image);
      });
    });

    Promise.all(promises)
      .then((newPreviews) => {
        setImagesPreview(newPreviews as string[]);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error processing images:", error);
      });
  }

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
                value={museumInfo.urkMuseumTitle}
                required
                name='urkMuseumTitle'
                fullWidth
                onChange={(e) => handleChangeInput(e, setMuseumInfo)}
              />
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Години роботи (українською) *</InputLbl>
              <InputTitle
                value={museumInfo.UkrWorkingHr}
                required
                name='UkrWorkingHr'
                onChange={(e) => handleChangeInput(e, setMuseumInfo)}
                fullWidth
              />
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Адреса (українською) *</InputLbl>
              <InputTitle
                value={museumInfo.UkrAddress}
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
                value={museumInfo.EnMuseumTitle}
                required
                name='EnMuseumTitle'
                fullWidth
                onChange={(e) => handleChangeInput(e, setMuseumInfo)}
              />
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Години роботи (англійською) *</InputLbl>
              <InputTitle
                value={museumInfo.EnWorkingHr}
                required
                name='EnWorkingHr'
                onChange={(e) => handleChangeInput(e, setMuseumInfo)}
                fullWidth
              />
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Адреса (англійською) *</InputLbl>
              <InputTitle
                value={museumInfo.EnAddress}
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
      {/* {success && <Success setSuccess={setSuccess} message={success} />} */}
    </Wrapper>
  );
}

export default EditMuseum;
