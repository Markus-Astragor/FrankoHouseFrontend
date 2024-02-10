import React, { useState, useEffect } from "react";
import axios from "axios";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BlockForLoader, NewsBlock, NewsContainer, TitleProjects } from "./NewsBoardStyle";
import NewsPiece from "../NewsPiece/NewsPiece";

import URLS from "../../../configURLS.json";
import LoaderComponent from "../../../components/Loader/LoaderComponent";

function NewsBoard() {
  type NewsData = {
    _id: string;
    title: string;
    photos: string;
  };

  const [dataFromBackend, setDataFromBackend] = useState<NewsData[]>([]);
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);
    axios
      .get(`${URLS["BASE-URL"]}/getPosts`)
      .then((res) => {
        console.log(res);
        setDataFromBackend(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1780,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "150px",
        },
      },
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
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "160px",
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
  console.log("dataFromBackend", dataFromBackend);

  return (
    <>
      <NewsBlock>
        <TitleProjects>Події</TitleProjects>
        {loader ? (
          <BlockForLoader>
            <LoaderComponent />
          </BlockForLoader>
        ) : (
          <>
            <NewsContainer>
              <Slider {...settings}>
                {dataFromBackend?.map((newsPiece, index) => (
                  <NewsPiece
                    image={newsPiece.photos}
                    title={newsPiece.title}
                    id={newsPiece._id}
                    key={index}
                  />
                ))}
              </Slider>
            </NewsContainer>
          </>
        )}
      </NewsBlock>
    </>
  );
}
export default NewsBoard;
