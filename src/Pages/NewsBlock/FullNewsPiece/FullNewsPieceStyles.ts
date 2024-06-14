import styled from "styled-components";

export const LoaderBlock = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainBlock = styled.div`
  width: 100%;
  height: auto;
  @media (max-height: 800px) {
    height: 70vh;
    overflow-y: scroll;
  }
`;

export const TitleAndSlider = styled.div`
  display: flex;
  height: auto;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const SliderBlock = styled.div`
  width: 30%;
  margin: 0 auto;
  order: 1;

  @media (max-width: 1200px) {
    width: 90%;
    order: 2;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    width: 80%;
    margin: 0 auto;
  }

  @media (min-width: 1025px) and (max-width: 1400px) {
    width: 43%;
    margin: 0 auto;
    padding-left: 40px;
  }

  @media (min-width: 1401px) and (max-width: 1800px) {
    width: 40%;
    margin: 0 auto;
    padding-left: 40px;
  }
`;

export const Title = styled.h3`
  width: 60%;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: -1.5%;
  margin: 20px 0px;
  order: 2;

  @media (max-width: 1200px) {
    width: 100%;
    order: 1;
  }
`;

export const DescriptionBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.p`
  width: 90%;
  padding: 3.9vh 0;
  font-size: 23px;
`;

export const ImageInSliderContainer = styled.div`
  width: 20.83vw;
`;

export const ImageInSlider = styled.img`
  width: 400px;
  height: 200px;

  @media (max-width: 1024px) {
    height: 200px;
  }
`;

export const TimeStamp = styled.div`
  font-size: 1.25rem;
  line-height: 1.4;
  color: black;
`;
