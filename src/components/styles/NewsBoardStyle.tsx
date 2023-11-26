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

// NewsPiece
export const NewsPiece = styled.div`
  display: block;
  width: 400px;
  position: relative;
  margin: 10px;
`;

export const ImageForNewsPiece = styled.div`
  display: block;
`;

export const MiddleImageForNewsPiece = styled.div`
  width: 400px;
  position: absolute;
  bottom: -38px;
  z-index: 2;
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

export const ShortText = styled.div`
  position: absolute;
  width: 380px;
  background-color: #d9d9d9;
  padding: 10px;
  text-align: center;
  top: 111%; /* Set the top property to 100% */
  color: white;
  font-size: 11px;
  min-height: 100px; /* Adjust the minimum height as needed */
  overflow: hidden;
`;

export const TimeStamp = styled.div`
  color: black;
  font-weight: 700;
  font-size: 10px;
  margin-top: 52px;
`;

export const MiddleBlock = styled.div`
  display: block;
  position: relative;
`;
