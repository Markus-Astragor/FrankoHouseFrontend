import styled from "styled-components";

// NewsComponent and container for news
export const NewsBlock = styled.div`
  display: block;
  background: #f3eded;
  height: 80vh;
`;

export const NewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin: 0 auto;
`;

export const TitleProjects = styled.h2`
  font-size: 75px;
  text-align: center;
  font-weight: 700;
`;

// NewsPiece
export const NewsPiece = styled.div`
  display: block;
  width: 400px;
  position: relative;
`;

export const ImageForNewsPiece = styled.div`
  display: block;
`;

export const MiddleImageForNewsPiece = styled.div`
  width: 400px;
  position: absolute;
  bottom: -38px;
`;

export const Title = styled.span`
  display: block;
  position: absolute;
  font-size: 20px;
  font-weight: bold;
  bottom: 19px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
`;
