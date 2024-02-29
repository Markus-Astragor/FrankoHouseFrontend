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
  height: 100%;
`;

export const TitleAndSlider = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const SliderBlock = styled.div`
  width: 400px;
  height: 194px;
  margin-left: 20px;
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
    width: 60%;
  }

  @media (min-width: 1401px) and (max-width: 1800px) {
    width: 45%;
  }
`;

export const Title = styled.h3`
  width: 70%;
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

export const Description = styled.p`
  width: 90%;
  margin: 40px auto;
  font-size: 23px;
`;

export const ImageInSlider = styled.img`
  height: 200px;

  @media (max-width: 1024px) {
    height: 300px;
  }
`;

export const ShortDescription = styled.p``;

export const LongDescription = styled.p``;
