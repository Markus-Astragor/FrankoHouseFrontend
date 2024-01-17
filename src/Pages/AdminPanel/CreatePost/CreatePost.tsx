import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import Button from "@mui/material/Button";

import {
  FormElementWrapper,
  FileInput,
  CreatePostStyled,
  InputTitle,
  Title,
  FlexContainer,
  CreatePostWrapper,
  CenterBox,
  InputLbl,
} from "./CreatePostStyles";
import TextArea from "../../../components/TextArea/TexArea";
import Success from "../../../components/SuccesWindow/Success";
import { Loader } from "../../../components/Loader/LoaderComponentStyles";
import useApi from "../../../hooks/useApi";
import config from "../../../configURLS.json";

export type postInfoProps = {
  ukrTitle: string;
  ukrDescription: string;
  ukrShortDescription: string;
  engTitle: string;
  engDescription: string;
  engShortDescription: string;
};

function CreatePost() {
  const [images, setImages] = useState<File[]>([]);
  const [postInfo, setPostInfo] = useState<postInfoProps>({
    ukrTitle: "",
    ukrDescription: "",
    ukrShortDescription: "",
    engTitle: "",
    engDescription: "",
    engShortDescription: "",
  });
  const { sendRequest, success, setSuccess, loading } = useApi(config.ADMIN["CREATE-POST"]);

  const fileRef = useRef<HTMLInputElement | null>(null);

  function handleFileInput() {
    if (images.length >= 10) return alert("Ви досягли ліміту по зображеннях");
    if (fileRef.current && fileRef.current.files?.length !== 0) {
      const files = fileRef.current?.files;
      console.log(files);

      if (files) {
        const newFiles: File[] = [];

        // Validation for files of type image
        for (const file of files) {
          if (file.type.startsWith("image/")) {
            newFiles.push(file);
          } else {
            alert(`${file.name} не є зображенням`);
          }
        }

        // Validation for max images count
        if (newFiles.length + images.length > 10) {
          alert(
            `Кількість вибраних зображень перевищує допустиму кількість (10), попередньо вибрані зображення не були збережені, будь ласка спробуйте ще раз.\nКількість зображень які можна ще вибрати - ${
              10 - images.length
            } `,
          );
          return;
        }

        setImages((prev) => [...prev, ...newFiles]);
      } else {
        console.log("No image selected");
      }
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (images.length === 0) return alert("Виберіть хочаб одне зображення");
    sendRequest(postInfo, images, "POST");
    clearInputs();
  }

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setPostInfo((prev) => ({ ...prev, [name]: value }));
  }

  function handleClearImages() {
    setImages([]);
  }

  function clearInputs() {
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
    <>
      <CreatePostWrapper>
        <CreatePostStyled>
          <Title>Створити Пост</Title>
          <form onSubmit={handleSubmit}>
            <FormElementWrapper>
              <InputLbl>Заголовок (українською)</InputLbl>
              <InputTitle
                required
                name='ukrTitle'
                value={postInfo.ukrTitle}
                onChange={handleInput}
                fullWidth
              />
            </FormElementWrapper>
            <FormElementWrapper>
              <InputLbl>Короткий опис (українською)</InputLbl>
              <TextArea
                value={postInfo.ukrShortDescription}
                onChange={handleInput}
                name='ukrShortDescription'
              />
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Повний опис (українською)</InputLbl>
              <TextArea
                name='ukrDescription'
                value={postInfo.ukrDescription}
                onChange={handleInput}
              />
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Заголовок (англійською)</InputLbl>
              <InputTitle
                required
                name='engTitle'
                value={postInfo.engTitle}
                onChange={handleInput}
                fullWidth
              />
            </FormElementWrapper>
            <FormElementWrapper>
              <InputLbl>Короткий опис (англійською)</InputLbl>
              <TextArea
                name='engShortDescription'
                value={postInfo.engShortDescription}
                onChange={handleInput}
              />
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Повний опис (англійською)</InputLbl>
              <TextArea
                name='engDescription'
                value={postInfo.engDescription}
                onChange={handleInput}
              />
            </FormElementWrapper>

            <FormElementWrapper>
              <InputLbl>Фотографії</InputLbl>
              <FileInput
                multiple
                ref={fileRef}
                onChange={handleFileInput}
                type='file'
                accept='image/*'
              />
            </FormElementWrapper>

            {loading ? (
              <CenterBox>
                <Loader />
              </CenterBox>
            ) : (
              <FlexContainer>
                <Button type='submit' variant='outlined'>
                  Створити пост
                </Button>
                <Button onClick={handleClearImages} variant='outlined'>
                  Скинути зображення
                </Button>
              </FlexContainer>
            )}
          </form>
        </CreatePostStyled>
      </CreatePostWrapper>
      {success && <Success setSuccess={setSuccess} message={success} />}
    </>
  );
}

export default CreatePost;
