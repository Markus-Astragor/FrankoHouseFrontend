import React from "react";
import {
  MuseumsStyled,
  MuseumsContainer,
  MuseumTitle,
  Slide,
  SlideContent,
  SlideContentTitle,
  VisitButton,
} from "./MuseunsStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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
  return (
    <MuseumsStyled>
      <MuseumsContainer>
        <MuseumTitle>Музеї Івана Франка</MuseumTitle>
        <Slider {...settings}>
          <Slide>
            <SlideContent>
              <SlideContentTitle>
                Львівський національний літературно-меморіальний музей Івана Франка (Дім Франка)
              </SlideContentTitle>
              <VisitButton>Ознайомитися</VisitButton>
            </SlideContent>
          </Slide>
          <Slide>
            <SlideContent>
              <SlideContentTitle>
                Львівський національний літературно-меморіальний музей Івана Франка (Дім Франка)
              </SlideContentTitle>
              <VisitButton>Ознайомитися</VisitButton>
            </SlideContent>
          </Slide>
          <Slide>
            <SlideContent>
              <SlideContentTitle>
                Львівський національний літературно-меморіальний музей Івана Франка (Дім Франка)
              </SlideContentTitle>
              <VisitButton>Ознайомитися</VisitButton>
            </SlideContent>
          </Slide>
          <Slide>
            <SlideContent>
              <SlideContentTitle>
                Львівський національний літературно-меморіальний музей Івана Франка (Дім Франка)
              </SlideContentTitle>
              <VisitButton>Ознайомитися</VisitButton>
            </SlideContent>
          </Slide>
          <Slide>
            <SlideContent>
              <SlideContentTitle>
                Львівський національний літературно-меморіальний музей Івана Франка (Дім Франка)
              </SlideContentTitle>
              <VisitButton>Ознайомитися</VisitButton>
            </SlideContent>
          </Slide>
        </Slider>
      </MuseumsContainer>
    </MuseumsStyled>
  );
}

export default Museums;
