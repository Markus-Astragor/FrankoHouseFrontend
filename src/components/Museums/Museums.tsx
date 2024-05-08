import React, { useEffect, useState } from "react";
import { MuseumsStyled, MuseumsContainer, MuseumTitle } from "./MuseunsStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slide from "./SlideItem/Slide";

import { useTranslation } from "react-i18next";
import { useGet } from "../../hooks/useGet";
import config from "../../configURLS.json";

export type MuseumInfo = {
  _id: string;
  title: string;
  workingDays: string;
  address: string;
  link: string;
  phone: string;
  photo: string[];
};

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "80px",
  slidesToShow: 5,
  speed: 500,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: "100px",
      },
    },
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
  // const { getMuseums, data, isLoading } = useMuseums();
  const { sendRequest, isLoading } = useGet(config.GET_MUSEUMS);
  const [museums, setMuseums] = useState<MuseumInfo[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    sendRequest(setMuseums);
  }, []);

  return (
    <MuseumsStyled id='museums'>
      <MuseumsContainer>
        <MuseumTitle>{t("ns1.description.museumsFranko.title")}</MuseumTitle>
        {isLoading ? (
          <p>Дані завантажуються</p>
        ) : (
          <Slider {...settings}>
            {museums.map((info: MuseumInfo, index) => (
              <Slide data={info} key={index} />
            ))}
          </Slider>
        )}
      </MuseumsContainer>
    </MuseumsStyled>
  );
}

export default Museums;
