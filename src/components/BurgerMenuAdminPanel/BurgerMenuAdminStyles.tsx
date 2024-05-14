import styled from "styled-components";

export const BurgerMenuStyled = styled.div<{ open: boolean }>`
  border-radius: 0 0 0 30px;
  width: 250px;
  position: fixed;
  /* height: 100vh; */
  background-color: #f6f6f6;
  top: 0;
  right: 0;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  transform-origin: 0% 0%;
  transform: ${(props) => (props.open ? "translate(0, 0)" : "translate(100%,0)")};
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  z-index: 13;
  box-sizing: border-box;
`;

export const BurgerContainer = styled.div`
  padding: 20px 20px;
  box-sizing: border-box;
`;

export const BugerLogoContainer = styled.div`
  margin-bottom: 30px;
`;

export const BurgerLogo = styled.img`
  width: 50px;
  cursor: pointer;
  height: auto;
`;

export const BurgerMenuLinks = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-bottom: 20px;
`;
export const BurgerMenuLink = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: 700;
  transition: 0.3s linear;
  padding: 4px 0;
  cursor: pointer;
  &:hover {
    transform: translateX(10px);
  }
`;
