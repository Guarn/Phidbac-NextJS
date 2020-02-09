import styled from "styled-components";

export const ConteneurGlobal = styled.div`
  color: ${props => props.theme.main};
  display: grid;
  grid-template-rows: 80px calc(100vh - 120px) 40px;
  font-family: century-gothic, sans-serif;
  overflow: hidden;
  z-index: 10000;
  @media (max-width: 1023px) {
    grid-template-rows: 50px calc(100vh - 90px) 40px;
  }
  @media (max-width: 767px) {
    grid-template-rows: none;
    display: flex;
    flex-direction: column;
    overflow: initial;
  }
`;
