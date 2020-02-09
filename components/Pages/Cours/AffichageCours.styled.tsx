import styled from "styled-components";
import { Button } from "antd";

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

export const ConteneurBouton = styled.div`
  display: flex;
  width: 100%;
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

export const BoutonRetour = styled(Button).attrs(props => ({
  type: "ghost",
  icon: "arrow-left"
}))`
  margin-left: calc(50vw - (690px / 2) - 10vw);
  margin-bottom: 10px;
  box-shadow: 0px 0px 3px 3px lightgrey;
  @media (max-width: 1023px) {
    margin-left: 5px;
  }
  @media (max-width: 767px) {
    margin-left: 5px;
  }
`;
BoutonRetour.displayName = `BoutonRetour`;

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
