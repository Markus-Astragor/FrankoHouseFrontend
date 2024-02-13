import styled from "styled-components";

// NewsComponent and container for news
export const NewsBlock = styled.div`
  display: block;
  height: auto;
  margin: 50px 0px 50px 0px;
  position: relative;

  @media (min-width: 300px) and (max-width: 700px) {
    margin-top: 900px;
  }

  @media (min-width: 701px) and (max-width: 1100px) {
    margin-top: 651px;
  }

  @media (min-width: 1101px) and (max-width: 1300px) {
    margin-top: 51px;
  }
`;

export const NewsContainer = styled.div`
  width: 90%;
  max-width: 1500px;
  height: 100%;
  margin: 0 auto;
  margin-top: 64px;
  box-sizing: border-box;

  @media (min-width: 370px) and (max-width: 450px) {
    width: 85%;
  }
`;

export const TitleProjects = styled.h2`
  font-size: 75px;
  text-align: center;
  font-weight: 700;
`;

export const BlockForLoader = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
