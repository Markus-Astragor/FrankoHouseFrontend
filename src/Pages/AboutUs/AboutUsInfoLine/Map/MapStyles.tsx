import styled from "styled-components";

export const MapWrapper = styled.div`
  overflow: hidden;
  border-radius: 30px;
  width: 100%;
  height: 400px;
  @media (max-width: 870px) {
    height: 300px;
    width: 400px;
  }
  @media (max-width: 660px) {
    height: 250px;
    width: 100%;
  }

  @media (max-width: 580px) {
    height: 250px;
    width: 100%;
  }
`;
