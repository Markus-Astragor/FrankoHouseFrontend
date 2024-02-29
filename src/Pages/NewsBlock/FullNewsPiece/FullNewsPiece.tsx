import React, { useEffect, useState } from "react";
import axios from "axios";
import URLS from "../../../configURLS.json";
import LoaderComponent from "../../../components/Loader/LoaderComponent";
import { BlockForLoader } from "../NewsBoard/NewsBoardStyle";
import Slider from "react-slick";
import {
  SliderBlock,
  Title,
  MainBlock,
  Description,
  ShortDescription,
  LongDescription,
  TitleAndSlider,
  ImageInSlider,
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
        // background: "rgb(184, 184, 184)",
        // padding: "10px 5px 10px 5px",
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
        // background: "rgb(184, 184, 184)",
        // padding: "10px 5px 10px 5px",
      }}
      onClick={onClick}
    />
  );
}

type FullNewsPieceProps = {
  id: string;
};

function FullNewsPiece({ id }: FullNewsPieceProps) {
  type NewsData = {
    _id: string;
    title: string;
    shortDescription: string;
    photos: string[];
    timestamp: string;
    description: string;
  };

  const [neededPost, setNeddedPost] = useState<NewsData>();
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);
    axios
      .get(`${URLS["BASE-URL"]}/getPosts/${id}`)
      .then((res) => {
        console.log(res.data);
        setNeddedPost(res.data);
      })
      .catch((err) => console.log("err", err))
      .finally(() => setLoader(false));
  }, []);

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className='slick-next' style={{}} onClick={() => {}} />,
    prevArrow: <SamplePrevArrow className='slick-prev' style={{}} onClick={() => {}} />,
  };

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
                    <img src={photo} width='400px' height='200px' key={i} />
                  ))}
                </Slider>
              </SliderBlock>
              <Title>{neededPost?.title}</Title>
            </TitleAndSlider>

            <Description>
              <ShortDescription>{neededPost?.shortDescription}</ShortDescription>
              <LongDescription>{neededPost?.description}</LongDescription>
            </Description>
          </MainBlock>
        </div>
      )}
    </div>
  );
}

export default FullNewsPiece;
