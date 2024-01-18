import styled from "styled-components";

export const GetPostsStyled = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1760px;
`;

export const Title = styled.h3`
  font-size: 34px;
  text-align: center;
  color: #ffff;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 26px;
  }
`;

export const PostsBox = styled.ul``;

export const CenterBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
