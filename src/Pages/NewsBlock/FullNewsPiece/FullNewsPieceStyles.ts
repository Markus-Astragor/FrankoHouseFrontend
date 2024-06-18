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
  max-height: 70vh;
  overflow-y: scroll;
  scrollbar-width: none;
`;

export const TitleAndSlider = styled.div`
  display: flex;
  height: auto;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SliderBlock = styled.div`
  width: 45%;
  order: 1;

  @media (max-width: 1200px) {
    width: 75%;
    order: 2;
  }
`;

export const Title = styled.h3`
  width: 50%;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: -1.5%;
  margin: 20px;
  order: 2;

  @media (max-width: 1200px) {
    width: 100%;
    order: 1;
  }
`;

export const DescriptionBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.p`
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
