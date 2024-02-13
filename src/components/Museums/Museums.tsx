import React, { useState } from "react";
import { MuseumsStyled, MuseumsContainer, MuseumTitle } from "./MuseunsStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slide from "./SlideItem/Slide";
const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "120px",
  slidesToShow: 3,
  speed: 500,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "150px",
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "60px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "140px",
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "40px",
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "20px",
      },
    },
  ],
};

function Museums() {
  const [data] = useState(() => {
    return Array.from({ length: 5 }, (_, index) => index);
  });
  return (
    <MuseumsStyled>
      <MuseumsContainer>
        <MuseumTitle>Музеї Івана Франка</MuseumTitle>
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
