import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";

import TextArea from "../../../components/TextArea/TexArea";
import { FormElementWrapper, FileInput, CreatePostStyled, InputTitle } from "./CreatePostStyles";
import useCreatePost from "../../../hooks/useCreatePost";

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
  const { createPost } = useCreatePost();

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
    createPost(postInfo, images);
  }

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setPostInfo((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <CreatePostStyled>
      <h3 style={{ marginBottom: "20px", textAlign: "center" }}>Створити Пост</h3>
      <form onSubmit={handleSubmit}>
        <FormElementWrapper>
          <InputLabel>Заголовок (українською)</InputLabel>
          <InputTitle
            required
            name='ukrTitle'
            value={postInfo.ukrTitle}
            onChange={handleInput}
            fullWidth
          />
        </FormElementWrapper>
        <FormElementWrapper>
          <InputLabel>Короткий опис (українською)</InputLabel>
          <TextArea
            value={postInfo.ukrShortDescription}
            onChange={handleInput}
            name='ukrShortDescription'
          />
        </FormElementWrapper>

        <FormElementWrapper>
          <InputLabel>Повний опис (українською)</InputLabel>
          <TextArea name='ukrDescription' value={postInfo.ukrDescription} onChange={handleInput} />
        </FormElementWrapper>

        <FormElementWrapper>
          <InputLabel>Заголовок (англійською)</InputLabel>
          <InputTitle
            required
            name='engTitle'
            value={postInfo.engTitle}
            onChange={handleInput}
            fullWidth
          />
        </FormElementWrapper>
        <FormElementWrapper>
          <InputLabel>Короткий опис (англійською)</InputLabel>
          <TextArea
            name='engShortDescription'
            value={postInfo.engShortDescription}
            onChange={handleInput}
          />
        </FormElementWrapper>

        <FormElementWrapper>
          <InputLabel>Повний опис (англійською)</InputLabel>
          <TextArea name='engDescription' value={postInfo.engDescription} onChange={handleInput} />
        </FormElementWrapper>

        <FormElementWrapper>
          <InputLabel>Фотографії</InputLabel>
          <FileInput
            multiple
            ref={fileRef}
            onChange={handleFileInput}
            type='file'
            accept='image/*'
          />
        </FormElementWrapper>

        <Button type='submit' variant='outlined'>
          Створити пост
        </Button>
      </form>
    </CreatePostStyled>
  );
}

export default CreatePost;
