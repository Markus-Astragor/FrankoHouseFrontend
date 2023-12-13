import styled from "styled-components";

export const SvgWrapper = styled.div`
  svg {
    transition: 0.3s linear;
    width: 30px;
  }
  &:hover {
    svg {
      fill: rebeccapurple;
    }
  }
`;
