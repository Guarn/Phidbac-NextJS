import styled from "styled-components";

export const Conteneur = styled.div`
  z-index: 1000;
  text-align: right;
  margin-right: 40px;
  @media (max-width: 767px) {
    padding-bottom: 10px;
    text-align: center;
    margin-right: 0px;
  }
`;
Conteneur.displayName = `Conteneur`;
