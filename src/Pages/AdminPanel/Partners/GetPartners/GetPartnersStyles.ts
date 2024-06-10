import styled from "styled-components";

export const TitleForPartner = styled.p`
  color: white;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ImagePartner = styled.img`
  border-radius: 15px;
  min-height: 24.41vh;

  @media screen and (max-width: 412px) {
    min-height: 19.64vh;
  }
`;
