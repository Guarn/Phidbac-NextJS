import styled from "styled-components";

export const Conteneur = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 100;
`;
Conteneur.displayName = `Conteneur`;

export const ConteneurPartieDroite = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-content: center;
  user-select: none;
  font-weight: bold;
  cursor: pointer;
`;
ConteneurPartieDroite.displayName = `ConteneurPartieDroite`;

export const BoutonHome = styled.div`
  height: 80px;
  width: 80px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 100;
  position: relative;
`;
BoutonHome.displayName = `BoutonHome`;

export type BoutonLienT = {
  selected: boolean;
};

export const BoutonLien = styled.div<BoutonLienT>`
  margin-right: 60px;
  font-size: 16px;
  height: 80px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: ${props => (props.selected ? "orange" : props.theme.main)};
  &:hover {
    color: ${props => props.theme.texteSecondaryColor};
  }
`;
BoutonLien.displayName = `BoutonLien`;

export const Bouton = styled.div``;
Bouton.displayName = `Bouton`;

export const BtnHomeLogo = styled.img.attrs({
  alt: "Page d'accueil"
})`
  height: 50px;
  width: 50px;
`;
BtnHomeLogo.displayName = `BtnHomeLogo`;
