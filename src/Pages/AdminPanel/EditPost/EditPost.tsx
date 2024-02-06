import React, { ChangeEvent, FormEvent, useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios, { AxiosError } from "axios";
import config from "../../../configURLS.json";
import TextArea from "../../../components/TextArea/TexArea";
import useApi from "../../../hooks/useApi";
import Success from "../../../components/SuccesWindow/Success";
import { Loader } from "../../../components/Loader/LoaderComponentStyles";

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
} from "../../../styles/GeneralStylesAdminPanel";

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

  const { sendRequest, success, setSuccess, loading } = useApi(config.ADMIN["EDIT-POST"]);

  const fileRef = useRef<HTMLInputElement | null>(null);

  // handling selecting files from input file
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

  // Submit function
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (images.length === 0) return alert("Виберіть хочаб одне зображення");
    sendRequest(postInfo, images, "PATCH", id);
    handleClearInputs();
  }

  // handling change on each input
  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setPostInfo((prev) => ({ ...prev, [name]: value }));
  }

  // Clearing all images
  function handleClearImages() {
    setImages([]);
    setImagesPreview([]);
    setImagesUrl([]);
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

  // Deleting image
  function handleDeleteImage(index: number) {
    setImagesPreview(imagesPreview.slice(0, index).concat(imagesPreview.slice(index + 1)));
    setImages(images.slice(0, index).concat(images.slice(index + 1)));
  }

  // Function for converting url into file
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

  useEffect(() => {
    tranformImageForPreview();
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
      }
    }
    getPostData();
  }, []);

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

        <ImagesContainer>
          {imagesPreview.map((img, index) => (
            <ImageContainer key={index}>
              <img src={img} />
              <DeleteButton onClick={() => handleDeleteImage(index)}>X</DeleteButton>
            </ImageContainer>
          ))}
        </ImagesContainer>

        <InputFileContainer>
          <InputFileBox>
            <FileInput
              multiple
              ref={fileRef}
              onChange={handleFileInput}
              type='file'
              accept='image/*'
            />
            <FileInputIcon>+</FileInputIcon>
            <FileInputLable>додати фото</FileInputLable>
          </InputFileBox>
        </InputFileContainer>

        {loading ? (
          <CenterBox>
            <Loader />
          </CenterBox>
        ) : (
          <ButtonsContainer>
            <ButtonStyled type='submit' variant='outlined'>
              Оновити
            </ButtonStyled>
            <ButtonStyled onClick={handleClearImages} variant='outlined'>
              Скинути зображення
            </ButtonStyled>
            <ButtonStyled onClick={handleClearInputs} variant='outlined'>
              Очистити всі поля
            </ButtonStyled>
          </ButtonsContainer>
        )}
      </Form>
      {success && <Success setSuccess={setSuccess} message={success} />}
    </Wrapper>
  );
}
