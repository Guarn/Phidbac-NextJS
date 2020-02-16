import styled from "styled-components";

export const Conteneur = styled.div`
  display: flex;
  flex-direction: column;
`;
Conteneur.displayName = `Conteneur`;

export const ConteneurBouton = styled.div`
  display: flex;
  width: 100%;
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
