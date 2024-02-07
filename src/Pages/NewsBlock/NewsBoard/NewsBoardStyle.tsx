import styled from "styled-components";

// NewsComponent and container for news
export const NewsBlock = styled.div`
  display: block;
  height: 1000px;
  position: relative;
  margin-top: 20px;

  @media (min-width: 300px) and (max-width: 700px) {
    margin-top: 700px;
  }

  @media (min-width: 701px) and (max-width: 1100px) {
    margin-top: 551px;
  }
`;

export const NewsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 85%;
  margin: 0 auto 200px auto;
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
