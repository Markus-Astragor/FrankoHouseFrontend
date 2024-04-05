import styled from "styled-components";

export const CenterBLock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoginBtn = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 0.83vh 4.44vw;
  background-color: #09282c;
  font-size: 1.1rem;
  border-radius: 0.34vw;
  color: white;
  border: 2px solid #09282c;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #0f363b;
    border: 2px solid #0f363b;
  }
`;
