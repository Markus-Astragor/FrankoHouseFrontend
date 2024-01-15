import React, { ChangeEvent, FormEvent, useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import config from "../../../configURLS.json";

import Button from "@mui/material/Button";

import TextArea from "../../../components/TextArea/TexArea";
import {
  FormElementWrapper,
  FileInput,
  InputTitle,
  CenterBox,
  InputLbl,
} from "../CreatePost/CreatePostStyles";

import {
  EditPostStyled,
  FlexItem,
  Form,
  FlexItems,
  ButtonsContainer,
  Title,
} from "./EditPostStyle";
import useCreatePost from "../../../hooks/useCreatePost";
import Success from "../../../components/SuccesWindow/Success";
import { Loader } from "../../../components/Loader/LoaderComponentStyles";

type SinglePostData = {
  _id: string;
  title: string;
  shortDescription: string;
  timestamp: string;
  photos: string[];
};

export type postInfoProps = {
  ukrTitle: string;
  ukrDescription: string;
  ukrShortDescription: string;
  engTitle: string;
  engDescription: string;
  engShortDescription: string;
};

export default function EditPost() {
  const { id } = useParams();
  const [postData, setPostData] = useState<SinglePostData>({
    _id: "",
    title: "",
    shortDescription: "",
    timestamp: "",
    photos: [],
  });

  const [images, setImages] = useState<File[]>([]);
  const [postInfo, setPostInfo] = useState<postInfoProps>({
    ukrTitle: "",
    ukrDescription: "",
    ukrShortDescription: "",
    engTitle: "",
    engDescription: "",
    engShortDescription: "",
  });

  const { createPost, success, setSuccess, loading } = useCreatePost();

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
    createPost(postInfo, images);
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

  useEffect(() => {
    async function getPostData() {
      try {
        const res = await axios.get(`${config["BASE-URL"]}/getPosts/${id}`);

        if (res.status !== 200) throw new Error("Виникла помилка при завантажені даних");
        console.log(res);
        setPostData(res.data);
      } catch (error) {
        // let message = "Виникла помилка";
        // if (error instanceof Error) {
        //   message = error.message;
        // }
      }
    }
    getPostData();
  }, []);

  console.log(postData);

  return (
    <EditPostStyled>
      <Title>Редагування</Title>
      <Form onSubmit={handleSubmit}>
        <FlexItems>
          <FlexItem>
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
          </FlexItem>

          <FlexItem>
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
          </FlexItem>
        </FlexItems>

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
          <ButtonsContainer>
            <Button type='submit' variant='outlined'>
              Створити пост
            </Button>
            <Button onClick={handleClearImages} variant='outlined'>
              Скинути зображення
            </Button>
          </ButtonsContainer>
        )}
      </Form>
      {success && <Success setSuccess={setSuccess} message={success} />}
    </EditPostStyled>
  );
}
