import styled from "styled-components";

export const Menu = styled.div``;

export const ConteneurPartieDroite = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-content: center;
  font-weight: bold;
  user-select: none;
  a {
    font-weight: bold;
  }
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: transparent;
  padding: 10px;
`;

export const Entete = styled.div`
  display: flex;
`;

export const TitreModal = styled.h2`
  margin-block-start: 12px;
  margin-block-end: 0px;
  margin-left: 12px;
`;

export const TitreLabel = styled.div`
  margin-bottom: 5px;
`;

export const ChampErreur = styled.span`
  font-size: 14px;
  color: salmon;
`;
