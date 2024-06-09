import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import URLS from "../../../configURLS.json";
import LoaderComponent from "../../../components/Loader/LoaderComponent";
import { BlockForLoader } from "../NewsBoard/NewsBoardStyle";
import Slider from "react-slick";
import {
  SliderBlock,
  Title,
  MainBlock,
  Description,
  TitleAndSlider,
  ImageInSlider,
  ImageInSliderContainer,
  DescriptionBlock,
} from "./FullNewsPieceStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftImage from "../../../assets/NewsBoardImages/left-arrow.png";
import rightImage from "../../../assets/NewsBoardImages/right-arrow.png";

type props = {
  className: string;
  style: object;
  onClick: () => void;
};

type NewsData = {
  _id: string;
  title: string;
  shortDescription: string;
  photos: string[];
  timestamp: string;
  description: string;
};

function SampleNextArrow({ className, style, onClick }: props) {
  return (
    <img
      src={rightImage}
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        right: "20px",
        zIndex: 2,
        transform: "scale(1.5)",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow({ className, style, onClick }: props) {
  return (
    <img
      src={leftImage}
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        left: "20px",
        zIndex: 2,
        transform: "scale(1.5)",
      }}
      onClick={onClick}
    />
  );
}

type FullNewsPieceProps = {
  id: string;
};

function FullNewsPiece({ id }: FullNewsPieceProps) {
  const { i18n } = useTranslation();

  const [neededPost, setNeddedPost] = useState<NewsData>();
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);
    axios
      .get(`${URLS["BASE-URL"]}/getPosts/${id}?lang=${i18n.language}`)
      .then((res) => {
        console.log(res.data);
        setNeddedPost(res.data);
      })
      .catch((err) => console.log("err", err))
      .finally(() => setLoader(false));
  }, [i18n.language]);

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className='slick-next' style={{}} onClick={() => {}} />,
    prevArrow: <SamplePrevArrow className='slick-prev' style={{}} onClick={() => {}} />,
  };

  useEffect(() => {
    if (neededPost?.photos) {
      setTimeout(() => {
        const images: NodeListOf<HTMLImageElement> = document.querySelectorAll(".image-in-slider");
        images.forEach((image: HTMLImageElement) => {
          const naturalImageHeight = image.naturalHeight;
          const naturalImageWidth = image.naturalWidth;
          if (naturalImageHeight > naturalImageWidth) {
            image.style.height = "100%";
            image.style.width = "auto";
          } else if (naturalImageWidth === naturalImageHeight) {
            image.style.height = "100%";
            image.style.width = "100%";
          } else {
            image.style.width = "100%";
            image.style.height = "auto";
          }
        });
      }, 0);
    }
  }, [neededPost]);

  return (
    <div>
      {loader ? (
        <BlockForLoader>
          <LoaderComponent />
        </BlockForLoader>
      ) : (
        <div>
          <MainBlock>
            <TitleAndSlider>
              <SliderBlock>
                <Slider {...settings}>
                  {neededPost?.photos.map((photo, i) => (
                    <ImageInSliderContainer key={i}>
                      <ImageInSlider src={photo} className='image-in-slider' />
                    </ImageInSliderContainer>
                  ))}
                </Slider>
              </SliderBlock>
              <Title>{neededPost?.title}</Title>
            </TitleAndSlider>

            <DescriptionBlock>
              <Description>
                {neededPost?.shortDescription}
                <br />
                {neededPost?.description}
              </Description>
            </DescriptionBlock>
          </MainBlock>
        </div>
      )}
    </div>
  );
}

export default FullNewsPiece;
