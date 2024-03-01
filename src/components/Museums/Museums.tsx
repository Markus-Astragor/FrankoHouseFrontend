import React, { useState } from "react";
import { MuseumsStyled, MuseumsContainer, MuseumTitle } from "./MuseunsStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slide from "./SlideItem/Slide";
import { useTranslation } from "react-i18next";
const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "80px",
  slidesToShow: 4,
  speed: 500,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "100px",
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "150px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "60px",
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "120px",
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "40px",
      },
    },
    {
      breakpoint: 430,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};

function Museums() {
  const { t } = useTranslation();
  const [data] = useState(() => {
    return Array.from({ length: 5 }, (_, index) => index);
  });
  return (
    <MuseumsStyled>
      <MuseumsContainer>
        <MuseumTitle>{t("ns1.description.museumsFranko.title")}</MuseumTitle>
        <Slider {...settings}>
          {data.map((_, index) => (
            <Slide key={index} />
          ))}
        </Slider>
      </MuseumsContainer>
    </MuseumsStyled>
  );
}

export default Museums;
