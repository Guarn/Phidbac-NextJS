import styled from "styled-components";
import Icon from "../../../UI/Icons";

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

export const ConteneurMenu = styled.div`
  position: absolute;
  right: 20px;
  top: 70px;
  width: 250px;
  background-color: #e9e7e1;
  border-radius: 5px;
  border: 1px solid rgba(112, 112, 112, 0.2);
  user-select: none;
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
  opacity: 0;
  align-items: center;
  cursor: default;
  animation: ApparitionMenu 200ms forwards;

  @keyframes ApparitionMenu {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  ::after {
    content: "";
    position: absolute;
    right: 10%;
    top: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${props => props.theme.main};
    clear: both;
  }
`;
ConteneurMenu.displayName = `ConteneurMenu`;

export const BlocAvatar = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #e2e0d8;
  border: 1px solid #707070;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #5e5e5e;
  font-size: 30px;
  font-weight: bold;
  margin-top: 10px;
`;
BlocAvatar.displayName = `BlocAvatar`;

export const BlocNomPrenom = styled.div`
  margin-top: 10px;
  font-size: 20px;
  color: #5e5e5e;
  font-weight: normal;
  line-height: 22px;
`;
BlocNomPrenom.displayName = `BlocNomPrenom`;

export const BlocGrade = styled.div`
  font-size: 16px;
  color: #5e5e5e;
  font-weight: normal;
  font-style: italic;
`;
BlocGrade.displayName = `BlocGrade`;

export const BlocIcones = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
BlocIcones.displayName = `BlocIcones`;

export const IconeSimple = styled.div.attrs(() => ({
  "data-testid": "IconeSimple"
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #707070;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  color: #5e5e5e;
  font-weight: bold;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  transition: 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;
IconeSimple.displayName = `IconeSimple`;

export const BlocMessages = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
BlocMessages.displayName = `BlocMessages`;

export const Chiffre = styled.div`
  font-size: 16px;
  margin-left: 15px;
  width: 50px;
  text-align: left;
  color: #5e5e5e;
  font-weight: bold;
`;
Chiffre.displayName = `Chiffre`;

export const Texte = styled.div`
  font-weight: normal;
  font-size: 16px;
  color: #5e5e5e;
`;
Texte.displayName = `Texte`;

export const BlocDeco = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  background-color: #dbd9d5;
  color: #5e5e5e;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
BlocDeco.displayName = `BlocDeco`;

export const CtnMenuConnecte = styled.div`
  color: ${props => props.theme.texteSecondaryColor};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
