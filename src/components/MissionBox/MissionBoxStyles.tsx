import styled from "styled-components";

export const MissionBoxStyled = styled.div<{
  align: string | undefined;
  borderReverse: boolean;
}>`
  position: relative;
  justify-self: ${(props) => (props.align ? props.align : "start")};

  max-width: 430px;
  padding: 25px 25px;
  height: 130px;
  box-sizing: border-box;
  background-color: #d9d9d9;
  border-radius: 75.5px;
  font-family: Montserrat;
  font-size: 15px;
  font-style: italic;
  font-weight: 600;
  letter-spacing: -0.3px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1200px) and (max-width: 1540px) {
    max-width: 380px;
    padding: 15px;
    font-size: 14px;
  }

  @media (max-width: 1200px) {
    max-width: 330px;
    font-size: 13px;
  }

  @media (max-width: 1000px) {
    max-width: 430px;
    font-size: 15px;
    &:nth-child(odd) {
      justify-self: start;
    }
    &:nth-child(even) {
      justify-self: end;
    }
  }

  &::after,
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    border-radius: 75.5px;
  }

  &::after {
    top: -55px;
    transform: rotate(-20deg);
    border-left: 0;
    border-bottom: 0;
    border: ${(props) => (props.borderReverse ? "1px dashed #d9d9d9" : "1px solid #d9d9d9")};
  }

  &::before {
    top: 55px;
    border: ${(props) => (props.borderReverse ? "1px solid #d9d9d9" : "1px dashed #d9d9d9")};
    transform: rotate(-20deg);
    border-top: 0;
  }
`;

export const MissionBoxText = styled.div`
  text-align: center;
`;

export const ArrowDown = styled.img`
  position: absolute;
  top: 50%;
  right: -110px;
  width: 26%;

  @media (min-width: 1200px) and (max-width: 1540px) {
    right: -100px;
  }

  @media (min-width: 1000px) and (max-width: 1200px) {
    top: 40%;
    right: -105px;
    width: 30%;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;
