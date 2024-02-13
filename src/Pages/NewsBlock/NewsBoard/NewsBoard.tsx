import React, { useState, useEffect } from "react";
import axios from "axios";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BlockForLoader, NewsBlock, NewsContainer, TitleProjects } from "./NewsBoardStyle";
import { Overlay } from "../../../components/Navbar/NavbarStyles";

import NewsPiece from "../NewsPiece/NewsPiece";

import URLS from "../../../configURLS.json";
import LoaderComponent from "../../../components/Loader/LoaderComponent";
import ProjectModalWindow from "../../../components/ProjectModalWindow/ProjectModalWindow";
import FullNewsPiece from "../FullNewsPiece/FullNewsPiece";

function NewsBoard() {
  type NewsData = {
    _id: string;
    title: string;
    photos: string;
  };

  const [dataFromBackend, setDataFromBackend] = useState<NewsData[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const [selectedNews, setSelectedNews] = useState<string | null>(null);
  const [show, setShow] = useState<boolean>(false);

  const handleCloseModalWindow = () => {
    setShow(false);
    setSelectedNews(null);
  };

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
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "120px",
    autoplay: true,
    autoplaySpeed: 2000,
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
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 530,
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
          centerPadding: "0",
          centerMode: false,
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
                    setSelectedNews={setSelectedNews}
                    setShow={setShow}
                  />
                ))}
              </Slider>

              {selectedNews && (
                <ProjectModalWindow closeModal={handleCloseModalWindow}>
                  <FullNewsPiece id={selectedNews} />
                </ProjectModalWindow>
              )}
            </NewsContainer>
          </>
        )}
        <Overlay onClick={handleCloseModalWindow} show={show} />
      </NewsBlock>
    </>
  );
}
export default NewsBoard;
