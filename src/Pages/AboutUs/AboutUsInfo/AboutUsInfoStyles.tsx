import styled from "styled-components";

export const AboutUsInfoStyled = styled.div`
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  padding: 30px 20px;
  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

export const AboutUsInfoContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const AboutUsInfoTtitle = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

export const AboutUsFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 660px) {
    display: block;
  }
`;

export const AboutUsFlexLeft = styled.div`
  width: 40%;
  @media (max-width: 660px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 430px) {
    flex-direction: column;
  }
`;

export const FlexItemWrapper = styled.div`
  width: 100%;
  @media (max-width: 660px) {
    width: 40%;
  }
  @media (max-width: 430px) {
    width: 100%;
  }
`;

export const AboutUsFlexLeftTitle = styled.h2`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 660px) {
    font-size: 20px;
  }
`;

export const AboutUsFlexLeftDesc = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-family: Montserrat;
  font-size: 18px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const List = styled.ul`
  list-style: square;
  padding-left: 18px;
`;
export const Li = styled.li`
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const AboutUsFlexRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 660px) {
    width: 100%;
  }
`;

export const AboutUsFlexRightBook = styled.img`
  width: 50%;
`;
export const AboutUsFlexRightFranko = styled.img`
  width: 40%;
`;
