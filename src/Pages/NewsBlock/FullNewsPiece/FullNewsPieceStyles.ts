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

export const SliderBlock = styled.div`
  width: 40%;
  height: 400px;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 100%;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    width: 80%;
  }

  @media (min-width: 1025px) and (max-width: 1400px) {
    width: 60%;
  }

  @media (min-width: 1401px) and (max-width: 1800px) {
    width: 45%;
  }
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: -1.5%;
  margin: 20px 0px;
`;

export const Description = styled.p`
  width: 70%;
  margin: 0 auto;
`;

export const ShortDescription = styled.p``;

export const LongDescription = styled.p``;
