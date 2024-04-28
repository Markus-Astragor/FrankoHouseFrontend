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
} from "../../../styles/GeneralStylesAdminPanel";

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

// type postInfoErrors = {
//   ukrTitleError: string;
//   ukrDescriptionError: string;
//   ukrShortDescriptionError: string;
//   engTitleError: string;
//   engDescriptionError: string;
//   engShortDescriptionError: string;
// };

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


  // const [postInfoError, setPostInfoError] = useState<postInfoErrors>({
  //   ukrTitleError: "",
  //   ukrDescriptionError: "",
  //   ukrShortDescriptionError: "",
  //   engTitleError: "",
  //   engDescriptionError: "",
  //   engShortDescriptionError: "",
  // });

  useEffect(() => {
    tranformImagesForPreview(images, setImagesPreview);
  }, [images]);

  const { sendRequest, success, setSuccess, loading } = useApi(config.ADMIN["CREATE-POST"]);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const { sendRequest, success, setSuccess, isLoading } = useCreate(config.ADMIN["CREATE-POST"]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // if (Object.values(postInfoError).find((errMsg) => errMsg.length > 0)) return;
    if (images.length === 0) return alert("Виберіть хочаб одне зображення");
    sendRequest(images, "POST", postInfo);
    handleClearInputs(setPostInfo);
    handleClearImages(setImages, setImagesPreview);
  }

  useEffect(() => {
    tranformImagesForPreview(images, setImagesPreview);
  }, [images]);


  // function validateInputForLanguage(value: string, nameInput: string): boolean {
  //   const regex: RegExp = /^[^A-Za-z]*$/;
  //   if (nameInput.includes("ukr") && value.length > 1) {
  //     if (!regex.test(value)) {
  //       setPostInfoError((prev) => ({
  //         ...prev,
  //         [nameInput + "Error"]: "Поле не повинно містити англійських символів",
  //       }));
  //     }
  //     return false;
  //   } else {
  //     setPostInfoError((prev) => ({
  //       ...prev,
  //       [nameInput + "Error"]: "",
  //     }));
  //   }

  //   if (nameInput.includes("eng") && value.length > 1) {
  //     if (regex.test(value)) {
  //       setPostInfoError((prev) => ({
  //         ...prev,
  //         [nameInput + "Error"]: "Поле не повинне містити українських символів",
  //       }));
  //       return false;
  //     }
  //   } else {
  //     setPostInfoError((prev) => ({
  //       ...prev,
  //       [nameInput + "Error"]: "",
  //     }));
  //   }

  //   return true;
  // }

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    // validateInputForLanguage(value, name);
    setPostInfo((prev) => ({ ...prev, [name]: value }));
  }

  // Clearing all inputs
  function handleClearInputs() {
    setPostInfo({
      ukrTitle: "",
      ukrDescription: "",
      ukrShortDescription: "",
      engTitle: "",
      engDescription: "",
      engShortDescription: "",
    });
  }

  return (
    <Wrapper>
      <Title>Створення публікації</Title>
      <Form onSubmit={handleSubmit}>
        <FlexItems>
          <FlexItem>
            <FormElementWrapper>
              <InputLbl>Заголовок (українською)</InputLbl>
              <InputTitle
                required
                name='ukrTitle'
                value={postInfo.ukrTitle}
                onChange={(e) => handleChangeInput(e, setPostInfo)}
                fullWidth
              />
              {/* <ErrorParagraphContainer>
                <ErrorParagraph>{postInfoError.ukrTitleError}</ErrorParagraph>
              </ErrorParagraphContainer> */}
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Короткий опис (українською)</InputLbl>
              <TextArea
                value={postInfo.ukrShortDescription}
                onChange={(e) => handleChangeInput(e, setPostInfo)}
                name='ukrShortDescription'
              />
              {/* <ErrorParagraphContainer>
                <ErrorParagraph>{postInfoError.ukrShortDescriptionError}</ErrorParagraph>
              </ErrorParagraphContainer> */}
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Повний опис (українською)</InputLbl>
              <TextArea
                name='ukrDescription'
                value={postInfo.ukrDescription}
                onChange={(e) => handleChangeInput(e, setPostInfo)}
              />
              {/* <ErrorParagraphContainer>
                <ErrorParagraph>{postInfoError.ukrDescriptionError}</ErrorParagraph>
              </ErrorParagraphContainer> */}
            </FormElementWrapper>
          </FlexItem>

          <FlexItem>
            <FormElementWrapper>
              <InputLbl>Заголовок (англійською)</InputLbl>
              <InputTitle
                required
                name='engTitle'
                onChange={(e) => handleChangeInput(e, setPostInfo)}
                value={postInfo.engTitle}
                fullWidth
              />
              {/* <ErrorParagraphContainer>
                <ErrorParagraph>{postInfoError.engTitleError}</ErrorParagraph>
              </ErrorParagraphContainer> */}
            </FormElementWrapper>
            <FormElementWrapper>
              <InputLbl>Короткий опис (англійською)</InputLbl>
              <TextArea
                name='engShortDescription'
                value={postInfo.engShortDescription}
                onChange={(e) => handleChangeInput(e, setPostInfo)}
              />
              {/* <ErrorParagraphContainer>
                <ErrorParagraph>{postInfoError.engShortDescriptionError}</ErrorParagraph>
              </ErrorParagraphContainer> */}
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Повний опис (англійською)</InputLbl>
              <TextArea
                name='engDescription'
                value={postInfo.engDescription}
                onChange={(e) => handleChangeInput(e, setPostInfo)}
              />
              {/* <ErrorParagraphContainer>
                <ErrorParagraph>{postInfoError.engDescriptionError}</ErrorParagraph>
              </ErrorParagraphContainer> */}
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
              onChange={() => handleFileInput(images, setImages, fileRef, setSuccess)}
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
      {success && <MessageWindow setMessage={setSuccess} message={success} />}
    </Wrapper>
  );
}

export default CreatePost;
