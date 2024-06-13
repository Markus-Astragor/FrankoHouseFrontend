import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MuseumsStyled, MuseumsContainer, MuseumTitle } from "./MuseunsStyles";

import { useTranslation } from "react-i18next";
import { useGet } from "../../hooks/useGet";
import { settings } from "./slider-settings";
import config from "../../configURLS.json";

import Slider from "react-slick";
import Slide from "./SlideItem/Slide";

export type MuseumInfo = {
  _id: string;
  title: string;
  workingHours: string;
  address: string;
  link: string;
  phone: string;
  photo: string[];
  email: string;
};

function Museums() {
  const { sendRequest, isLoading } = useGet(
    `${config.GET_MUSEUMS}?lang=${localStorage.getItem("language")}`,
  );
  const [museums, setMuseums] = useState<MuseumInfo[]>([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    sendRequest(setMuseums);
  }, [i18n.language]);

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
