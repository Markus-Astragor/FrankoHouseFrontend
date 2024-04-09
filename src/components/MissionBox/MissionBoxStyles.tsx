import styled from "styled-components";

function isEvenArrow(id: number) {
  return id % 2 !== 0;
}

export const MissionBoxStyled = styled.div<{
  align: string | undefined;
  borderReverse: boolean;
  inView: boolean;
}>`
  position: relative;
  justify-self: ${(props) => (props.align ? props.align : "start")};

  max-width: 430px;
  padding: 25px;
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
  opacity: 0;

  /* animation: rotation 1s ease-in-out forwards; */
  animation: ${(props) => (props.inView ? "rotation" : "none")} 1s ease-in-out 0.3s forwards;

  @keyframes rotation {
    from {
      opacity: 0;
      transform: rotateZ(-15deg);
    }
    to {
      opacity: 1;
      transform: rotateZ(0);
    }
  }

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

  @media (max-width: 415px) {
    padding: 12px;
    font-size: 13px;
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
    box-sizing: border-box;
    opacity: 0;

    /* transform: rotate(-20deg); */
  }

  &::after {
    top: -55px;
    transform: rotate(-20deg);
    border: ${(props) => (props.borderReverse ? "2px dashed #d9d9d9" : "2px solid #d9d9d9")};
    border: ${(props) => (props.borderReverse ? "1px dashed #d9d9d9" : "1px solid #d9d9d9")};
    border-left: 0;
    border-bottom: 0;

    animation: ${(props) => (props.inView ? "go_up" : "none")} 1s ease-in-out 0.3s forwards;

    @keyframes go_up {
      from {
        opacity: 0;
        top: 0;
        transform: rotate(0);
      }
      to {
        opacity: 1;
        top: -55px;
        transform: rotate(-20deg);
      }
    }
  }

  &::before {
    top: 55px;
    border: ${(props) => (props.borderReverse ? "2px solid #d9d9d9" : "2px dashed #d9d9d9")};
    /* transform: rotate(-20deg); */
    border-top: 0;

    animation: ${(props) => (props.inView ? "go_down" : "none")} 1s ease-in-out 0.3s forwards;

    @keyframes go_down {
      from {
        opacity: 0;
        top: 0;
        transform: rotate(0);
      }
      to {
        opacity: 1;
        top: 55px;
        transform: rotate(-20deg);
      }
    }
  }
`;

export const MissionBoxText = styled.div`
  text-align: center;
`;

export const ArrowDown = styled.img<{ arrowId: number }>`
  position: absolute;
  top: 50%;
  right: -110px;
  width: 26%;
  display: ${(props) => (props.arrowId === 3 || props.arrowId === 4 ? "none" : "block")};

  @media (min-width: 1200px) and (max-width: 1540px) {
    right: -100px;
  }

  @media (min-width: 1000px) and (max-width: 1200px) {
    top: 40%;
    right: -105px;
    width: 30%;
  }

  @media (min-width: 650px) and (max-width: 1000px) {
    display: block;
    display: ${(props) => (props.arrowId === 4 ? "none" : "block")};

    transform: ${(props) => (isEvenArrow(props.arrowId) ? "rotateY(0)" : "rotateY(180deg)")};
    ${(props) => (isEvenArrow(props.arrowId) ? "right: -110px" : "left: -110px")}
  }

  @media (max-width: 650px) {
    display: none;
  }
`;
