import React, { FormEvent, useRef, useState } from "react";
import axios from "axios";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";

import TextArea from "../../../components/TextArea/TexArea";
import { FormElementWrapper, FileInput } from "./CreatePostStyles";

import config from "../../../configURLS.json";

function CreatePost() {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [images, setImages] = useState<File[]>([]);

  // States for info
  const [UkrTitle, setUkrTitle] = useState<string>();
  const [UkrDescription, setUkrDescription] = useState<string>();
  const [UkrShortDescription, setUkrShortDescription] = useState<string>();
  const [EngTitle, setEngTitle] = useState<string>();
  const [EngDescription, setEngDescription] = useState<string>();
  const [EngShortDescription, setEngShortDescription] = useState<string>();

  function formData() {
    if (images.length >= 10) return alert("You have reached the amount of images ");
    if (fileRef.current && fileRef.current.files) {
      const file = fileRef.current?.files[0];
      if (file) {
        setImages((prev) => [...prev, file]);
      } else {
        console.log("No image selected");
      }
    }
  }

  function createPost() {
    const data = new FormData();
    images.forEach((image, index) => {
      data.append(`image-${index + 1}`, image);
    });

    axios
      .post(
        `${config["BASE-URL"]}/admin/createPost`,
        {
          UkrTitle,
          UkrDescription,
          UkrShortDescription,
          EngTitle,
          EngShortDescription,
          EngDescription,
          Photos: data,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        },
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("hello world");
    createPost();
  }

  return (
    <div>
      <h3 style={{ marginBottom: "20px", textAlign: "center" }}>Створити Пост</h3>
      <form onSubmit={handleSubmit}>
        <FormElementWrapper>
          <InputLabel>Заголовок (українською)</InputLabel>
          <Input value={UkrTitle} onChange={(e) => setUkrTitle(e.target.value)} fullWidth />
        </FormElementWrapper>
        <FormElementWrapper>
          <InputLabel>Короткий опис (українською)</InputLabel>
          <TextArea value={UkrDescription} onChange={(e) => setUkrDescription(e.target.value)} />
        </FormElementWrapper>

        <FormElementWrapper>
          <InputLabel>Повний опис (українською)</InputLabel>
          <TextArea
            value={UkrShortDescription}
            onChange={(e) => setUkrShortDescription(e.target.value)}
          />
        </FormElementWrapper>

        <FormElementWrapper>
          <InputLabel>Заголовок (англійською)</InputLabel>
          <Input value={EngTitle} onChange={(e) => setEngTitle(e.target.value)} fullWidth />
        </FormElementWrapper>
        <FormElementWrapper>
          <InputLabel>Короткий опис (англійською)</InputLabel>
          <TextArea
            value={EngShortDescription}
            onChange={(e) => setEngShortDescription(e.target.value)}
          />
        </FormElementWrapper>

        <FormElementWrapper>
          <InputLabel>Повний опис (англійською)</InputLabel>
          <TextArea value={EngDescription} onChange={(e) => setEngDescription(e.target.value)} />
        </FormElementWrapper>

        <FormElementWrapper>
          <InputLabel>Фотографії</InputLabel>
          <FileInput ref={fileRef} onChange={formData} type='file' />
        </FormElementWrapper>

        <Button type='submit' variant='outlined'>
          Створити пост
        </Button>
      </form>
    </div>
  );
}

export default CreatePost;
