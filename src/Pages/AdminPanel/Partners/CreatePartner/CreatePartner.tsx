import React, { useState, useRef, useEffect } from "react";
import {
  Wrapper,
  Title,
  CenterBox,
  Form,
  FormElementWrapper,
  InputLbl,
  InputTitle,
  FlexItem,
  ButtonsContainer,
  ButtonStyled,
  InputFileContainer,
  InputFileBox,
  FileInput,
  FileInputIcon,
  FileInputLable,
  ImageContainer,
  DeleteButton,
  ErrorParagraph,
  ErrorParagraphContainer,
} from "../../../../styles/GeneralStylesAdminPanel";
import { Loader } from "../../../../components/Loader/LoaderComponentStyles";
import Success from "../../../../components/SuccesWindow/Success";
import config from "../../../../configURLS.json";

import axios from "axios";

export default function CreatePartner() {
  const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
  const [loading, setLoading] = useState<boolean>(false);
  const [namePartnerOrganization, setNamePartnerOrganization] = useState<string>("");
  const [linkPartner, setLinkPartner] = useState<string>("");
  const [imagePartner, setImageForPartner] = useState<File | null>(null);
  const [imageForPreview, setImageForPreview] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const [imageError, setImageError] = useState<string>("");
  const [namePartnerError, setNamePartnerError] = useState<string>("");
  const [linkPartnerError, setLinkPartnerError] = useState<string>("");

  const fileRef = useRef<HTMLInputElement | null>(null);

  const handleNamePartnerOrganization = (e) => setNamePartnerOrganization(e.target.value);
  const handleLinkPartner = (e) => setLinkPartner(e.target.value);
  const handleDeleteImage = () => {
    setImageError("");
    setImageForPreview("");
    setImageForPartner(null);
  };

  const handleDeleteNameOrganization = () => setNamePartnerOrganization("");
  const handleClearLinkInput = () => setLinkPartner("");
  const handleFileInput = () => {
    if (fileRef.current && fileRef.current.files?.length !== 0) {
      const files = fileRef.current?.files;

      if (files && !files[0].type.startsWith("image")) {
        setImageError(`${files[0].name} не є зображенням`);
        return;
      }

      if (files?.length && files.length > 1) {
        setImageError("Дозволена лише 1 картинка на партнера");
        return;
      }

      if (files) {
        setImageForPartner(files[0]);
      }
    }
  };

  const transformFileToPreview = () => {
    if (!imagePartner) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      if (event.target?.result) {
        setImageForPreview(event.target.result as string);
      }
    };

    reader.onerror = (error) => {
      console.error("Error processing image:", error);
    };

    reader.readAsDataURL(imagePartner);
  };

  useEffect(() => {
    transformFileToPreview();
  }, [imagePartner]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setImageError("");
    setLinkPartnerError("");
    setNamePartnerError("");

    if (namePartnerOrganization.length > 100) {
      setNamePartnerError("Занадто довга назва організації");
      return;
    }

    if (!urlRegex.test(linkPartner)) {
      setLinkPartnerError("Введене вами поле не є посиланням");
      return;
    }

    setLoading(true);

    const headers = {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
    };

    axios
      .post(
        `${config.ADMIN["POST-PARTNER"]}`,
        {
          name: namePartnerOrganization,
          link: linkPartner,
          logo: imagePartner,
        },
        {
          headers,
        },
      )
      .then((res) => {
        setSuccess(res.data.message);
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
        setImageError(err?.response?.data?.message);
      })
      .finally(() => setLoading(false));

    handleDeleteImage();
    handleClearLinkInput();
    handleDeleteNameOrganization();
  };

  return (
    <Wrapper>
      <Title>Додавання партнера</Title>
      <Form onSubmit={handleSubmit}>
        <CenterBox>
          <FlexItem>
            <FormElementWrapper>
              <InputLbl>Ім&apos;я партнерської організації</InputLbl>
              <InputTitle
                required
                value={namePartnerOrganization}
                onChange={handleNamePartnerOrganization}
                fullWidth
              />
            </FormElementWrapper>

            <ErrorParagraphContainer>
              <ErrorParagraph>{namePartnerError}</ErrorParagraph>
            </ErrorParagraphContainer>

            <FormElementWrapper>
              <InputLbl>Посилання на сайт партнера</InputLbl>
              <InputTitle required value={linkPartner} onChange={handleLinkPartner} fullWidth />
            </FormElementWrapper>

            <ErrorParagraphContainer>
              <ErrorParagraph>{linkPartnerError}</ErrorParagraph>
            </ErrorParagraphContainer>

            <InputFileContainer style={{ marginBottom: "0px" }}>
              <InputFileBox>
                <FileInput
                  multiple
                  ref={fileRef}
                  onChange={handleFileInput}
                  type='file'
                  accept='image/*'
                  required
                />
                <FileInputIcon>+</FileInputIcon>
                <FileInputLable>додати фото</FileInputLable>
              </InputFileBox>
            </InputFileContainer>

            <ErrorParagraphContainer>
              <ErrorParagraph>{imageError}</ErrorParagraph>
            </ErrorParagraphContainer>

            {imageForPreview ? (
              <CenterBox style={{ width: "100%" }}>
                <ImageContainer style={{ width: "50%", marginTop: "20px" }}>
                  <img src={imageForPreview} />
                  <DeleteButton onClick={handleDeleteImage}>X</DeleteButton>
                </ImageContainer>
              </CenterBox>
            ) : (
              <></>
            )}
          </FlexItem>
        </CenterBox>

        <CenterBox style={{ marginTop: "30px" }}>
          {loading ? (
            <CenterBox>
              <Loader />
            </CenterBox>
          ) : (
            <ButtonsContainer>
              <ButtonStyled type='submit' variant='outlined'>
                Додати партнера
              </ButtonStyled>
              <ButtonStyled onClick={handleDeleteNameOrganization} variant='outlined'>
                Очистити ім&apos;я партнера
              </ButtonStyled>
              <ButtonStyled onClick={handleClearLinkInput} variant='outlined'>
                Очистити посилання
              </ButtonStyled>
            </ButtonsContainer>
          )}
        </CenterBox>
      </Form>
      {success && <Success setSuccess={setSuccess} message={success} />}
    </Wrapper>
  );
}
