import styled from "styled-components";

// NewsComponent and container for news
export const NewsBlock = styled.div`
  display: block;
  background: #f3eded;
  min-height: 120vh;
`;

export const NewsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 85%;
  margin: 0 auto 200px auto;
  row-gap: 217px;
`;

export const TitleProjects = styled.h2`
  font-size: 75px;
  text-align: center;
  font-weight: 700;
`;

export const Pages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;
