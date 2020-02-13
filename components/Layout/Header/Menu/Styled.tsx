import styled from "styled-components";

export const Menu = styled.div``;

export const ConteneurPartieDroite = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-content: center;
  user-select: none;
  font-weight: bold;
  cursor: pointer;
  z-index: 1000;
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
  height: 80px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: ${props =>
    props.selected ? props.theme.texteSecondaryColor : props.theme.main};
  &:hover {
    color: ${props => props.theme.texteSecondaryColor};
  }
  @media (max-width: 1023px) {
    height: 30px;
    margin-right: 0px;
    text-align: left;
    justify-content: start;
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

export const AffichageTabletMobile = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1000;
  position: fixed;
  height: 50px;
  top: 0px;
  width: 100%;
  background-color: ${props => props.theme.background};
  box-shadow: 0 3px 3px lightgrey;
  @media (min-width: 1024px) {
    display: none;
  }
`;
AffichageTabletMobile.displayName = `AffichageTabletMobile`;

export const AffichageDesktop = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1000;
  @media (max-width: 1023px) {
    display: none;
  }
`;
AffichageDesktop.displayName = `AffichageDesktop`;
