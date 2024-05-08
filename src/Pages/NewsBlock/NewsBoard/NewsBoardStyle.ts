import styled from "styled-components";

// NewsComponent and container for news
export const NewsBlock = styled.div`
  display: block;
  position: relative
  height: auto;
  margin: 50px 0px 50px 0px;
  position: relative;

  @media (min-width: 1101px) and (max-width: 1300px) {
    margin-top: 51px;
  }
`;

export const NewsContainer = styled.div`
  width: 97%;
  height: 100%;
  margin: 0 auto;
  margin-top: 64px;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (min-width: 370px) and (max-width: 450px) {
    width: 85%;
  }

  @media (min-width: 450px) and (max-width: 1600px) {
    width: 92%;
  }
`;

export const TitleProjects = styled.h2`
  font-size: 3.3125rem;
  text-align: center;
  font-weight: 400;
  font-family: "Kelly Slab";
`;

export const BlockForLoader = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
