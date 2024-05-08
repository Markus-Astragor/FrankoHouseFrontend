import styled from "styled-components";
import backgroundSrc from "../../assets/info-line/background.png";
// import backgroundMapSrc from "../../assets/info-line/map.png";

export const InfoLineStyled = styled.div`
  font-family: "Kelly Slab";

  width: 100%;
  background: url(${backgroundSrc});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const InfoLineContiner = styled.div`
  width: 100%;
  max-width: 1310px;
  margin: 0 auto;
  padding: 80px 50px;
  box-sizing: border-box;

  @media (max-width: 830px) {
    padding: 60px 35px;
  }
`;

export const InfoLineTitle = styled.h2`
  text-align: center;
  font-size: 40px;
  color: #fff;
  margin-bottom: 80px;

  @media (max-width: 830px) {
    font-size: 32px;
    margin-bottom: 60px;
  }

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  color: #fff;

  @media (max-width: 830px) {
    gap: 30px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media (max-width: 830px) {
    gap: 20px;
  }
`;
export const ContactTitle = styled.h3`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 15px;

  @media (max-width: 830px) {
    margin-bottom: 0px;
    font-size: 24px;
  }
`;
export const ContactItem = styled.p`
  font-size: 18px;
  @media (max-width: 830px) {
    font-size: 14px;
  }
`;

export const Map = styled.div`
  border-radius: 15px;
  background-color: #fff;
  width: 60%;
  height: 350px;
  cursor: pointer;

  @media (max-width: 1200px) {
    height: 300px;
  }

  @media (max-width: 600px) {
    align-self: center;
    width: 100%;
    height: 230px;
  }
`;
