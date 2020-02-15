import styled from "styled-components";

export const Conteneur = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1023px) {
    position: relative;
    padding-top: 10px;
  }

  @media (max-width: 767px) {
    height: initial;
    width: initial;
    padding-top: 65px;
  }
`;
Conteneur.displayName = `Conteneur`;

export type ConteneurBoutonT = {
  left: number;
};

export const ConteneurBouton = styled.div<ConteneurBoutonT>`
  display: flex;
  position: relative;
  left: ${props => props.left + "px"};
  padding-bottom: 10px;
  @media (max-width: 1023px) {
    position: absolute;
    padding-top: 10px;
    margin-left: 0px;
    width: initial;
  }
  @media (max-width: 767px) {
    margin-left: 5px;
    position: initial;
  }
`;
ConteneurBouton.displayName = `ConteneurBouton`;

export const NoDisplayTabletMobile = styled.div`
  display: inline;
  @media (max-width: 1023px) {
    display: none;
  }
  @media (max-width: 767px) {
    display: inline;
  }
`;
NoDisplayTabletMobile.displayName = `NoDisplayTabletMobile`;
