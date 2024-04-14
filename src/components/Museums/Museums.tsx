import React, { useEffect } from "react";
import { MuseumsStyled, MuseumsContainer, MuseumTitle } from "./MuseunsStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slide from "./SlideItem/Slide";
import useMuseums, { MuseumsData } from "../../hooks/useMuseums";
import { settings } from "./sliderSettings";

import { useTranslation } from "react-i18next";

function Museums() {
  const { getMuseums, data, isLoading } = useMuseums();
  const { t } = useTranslation();

  useEffect(() => {
    getMuseums();
  }, []);

  return (
    <MuseumsStyled>
      <MuseumsContainer>
        <MuseumTitle>{t("ns1.description.museumsFranko.title")}</MuseumTitle>
        {isLoading ? (
          <p>Дані завантажуються</p>
        ) : (
          <Slider {...settings}>
            {data.map((info: MuseumsData, index) => (
              <Slide data={info} key={index} />
            ))}
          </Slider>
        )}
      </MuseumsContainer>
    </MuseumsStyled>
  );
}

export default Museums;
