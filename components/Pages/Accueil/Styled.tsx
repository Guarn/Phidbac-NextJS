import styled from "styled-components";

export const Conteneur = styled.main`
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.background};
  @media (max-width: 1023px) {
    position: relative;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 767px) {
    margin-top: 65px;
    min-height: calc(100vh - 90px);
    justify-content: flex-end;
    flex-direction: column-reverse;
  }
`;
Conteneur.displayName = `Conteneur`;

export const ConteneurPartieTexte = styled.div`
  flex: 1;
  z-index: 2;
  display: flex;
  font-size: 16px;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  margin-left: 5vw;
  width: 40vw;

  @media (max-width: 767px) {
    height: initial;
    width: calc(100% - 20px);
    margin-left: 10px;
    margin-right: 10px;
    flex: initial;
  }
`;
ConteneurPartieTexte.displayName = `ConteneurPartieTexte`;

export const ConteneurPartieImage = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  z-index: 2;
  @media (max-width: 767px) {
    width: 90%;
    flex: initial;
  }
`;
ConteneurPartieImage.displayName = `ConteneurPartieImage`;

export const TexteTitre = styled.div`
  width: 100%;
  font-size: 5vw;
  z-index: 100;
  position: relative;
  line-height: initial;
  @media (max-width: 767px) {
    display: none;
  }
`;
TexteTitre.displayName = `TexteTitre`;

type TexteContenuT = {
  mt?: string;
  mb?: string;
};

export const TexteContenu = styled.div<TexteContenuT>`
  text-align: justify;
  z-index: 100;
  position: relative;
  margin-top: ${props => props.mt ?? 0};
  margin-bottom: ${props => props.mb ?? 0};
`;
TexteContenu.displayName = `TexteContenu`;

export const TexteContenuResp = styled.div<TexteContenuT>`
  text-align: justify;
  z-index: 100;
  position: relative;
  margin-top: ${props => props.mt ?? 0};
  margin-bottom: ${props => props.mb ?? 0};
  @media (max-width: 1023px) {
    display: none;
  }
`;
TexteContenuResp.displayName = `TexteContenuResp`;

export const Phi = styled.span`
  color: ${props => props.theme.texteSecondaryColor};
  font-family: "Century Gothic";
  z-index: 1000;
  position: relative;
`;
Phi.displayName = "Phi";

export const BlocFooter = styled.div``;
BlocFooter.displayName = `BlocFooter`;

export const TexteContenuFooter = styled.div`
  text-align: justify;
  position: relative;
  z-index: 100;
`;
TexteContenuFooter.displayName = `TexteContenuFooter`;

export const Cercle = styled.div`
  position: absolute;
  top: -10%;
  left: -40%;
  width: 100%;
  height: 200%;
  background-color: #e9e7e1;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 50% /50%;
  z-index: 0;
  opacity: 0.5;
  @media (max-width: 1023px) {
    display: none;
  }
`;
Cercle.displayName = `Cercle`;

export const BlocSousTitre = styled.div`
  display: flex;
  @media (max-width: 1023px) {
    margin-bottom: 20px;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;
BlocSousTitre.displayName = `BlocSousTitre`;

export const BarreVerticale = styled.div`
  width: 2px;
  background-color: rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  z-index: 100;
  position: relative;
  @media (max-width: 767px) {
    display: none;
  }
`;
BarreVerticale.displayName = `BarreVerticale`;

export const BlocTitreDescription = styled.div`
  display: flex;
  flex-direction: column;
`;
BlocTitreDescription.displayName = `BlocTitreDescription`;

export const ConteneurCat = styled.div`
  height: 160px;
  z-index: 100;
  position: relative;
  @media (max-width: 1023px) {
    display: none;
  }

  .titres-enter {
    transform: translateX(-400px);
  }
  .titres-enter-active {
    transform: translateX(0px);
    transition: all 200ms;
  }

  .titres-exit {
    transform: translateX(0px);
  }
  .titres-exit-active {
    transform: translateX(-400px);
    transition: all 200ms;
  }

  .descriptifs-enter {
    position: absolute;
    opacity: 0;
    transform: translateX(400px);
  }
  .descriptifs-enter-active {
    opacity: 1;
    transform: translateX(0px);
    transition: all 200ms;
  }

  .descriptifs-exit {
    opacity: 1;
    transform: translateX(0px);
  }
  .descriptifs-exit-active {
    transform: translateX(400px);
    opacity: 0;
    transition: all 200ms;
  }
`;
ConteneurCat.displayName = `ConteneurCat`;

export const TitreCat = styled.div`
  display: flex;
  &:hover {
    color: ${props => props.theme.texteSecondaryColor};
    cursor: pointer;
  }
  z-index: 100;
  position: relative;
`;
TitreCat.displayName = `TitreCat`;

export const SousConteneurCat = styled.div`
  position: absolute;
  z-index: 100;
`;
SousConteneurCat.displayName = `SousConteneurCat`;

export const SousConteneurDescription = styled.div`
  position: absolute;
  text-align: justify;
  z-index: 100;
`;
SousConteneurDescription.displayName = `SousConteneurDescription`;

export const DescriptionCat = styled.div`
  position: absolute;
  width: 400px;
  text-align: justify;
  z-index: 100;
`;
DescriptionCat.displayName = `DescriptionCat`;

export const GrandPhi = styled.div`
  width: 85%;

  justify-content: center;
  align-content: center;

  .DEVOIR {
    fill: #bfbfbf;
    animation: opacite 12s linear 0s infinite;
  }
  .ART {
    fill: #bfbfbf;
    animation: opacite 12s linear 1s infinite;
  }
  .BONHEUR {
    fill: #bfbfbf;
    animation: opacite 12s linear 2s infinite;
  }
  .CONSCIENCE {
    fill: #bfbfbf;
    animation: opacite 12s linear 3s infinite;
  }
  .INCONSCIENT {
    fill: #bfbfbf;
    animation: opacite 12s linear 4s infinite;
  }
  .JUSTICE {
    fill: #bfbfbf;
    animation: opacite 12s linear 5s infinite;
  }
  .TEMPS {
    fill: #bfbfbf;
    animation: opacite 12s linear 6s infinite;
  }
  .VERITE {
    fill: #bfbfbf;
    animation: opacite 12s linear 7s infinite;
  }
  .NATURE {
    fill: #bfbfbf;
    animation: opacite 12s linear 8s infinite;
  }
  .LIBERTE {
    fill: #bfbfbf;
    animation: opacite 12s linear 9s infinite;
  }
  .LANGAGE {
    fill: #bfbfbf;
    animation: opacite 12s linear 10s infinite;
  }
  .ETAT {
    fill: #bfbfbf;
    animation: opacite 12s linear 11s infinite;
  }
  .RELIGION {
    fill: #bfbfbf;
    animation: opacite 12s linear 12s infinite;
  }
  .SCIENCE {
    fill: #bfbfbf;
    animation: opacite 12s linear 13s infinite;
  }
  .RAISON {
    fill: #bfbfbf;
    animation: opacite 12s linear 14s infinite;
  }
  .TECHNIQUE {
    fill: #bfbfbf;
    animation: opacite 12s linear 15s infinite;
  }

  @keyframes opacite {
    0% {
      fill: #bfbfbf;
    }
    10% {
      fill: #878787;
    }
    20% {
      fill: #bfbfbf;
    }
    30% {
      fill: #4e4e4e;
    }
    40% {
      fill: #bfbfbf;
    }
    50% {
      fill: #000000;
    }
    60% {
      fill: #bfbfbf;
    }
  }
`;
GrandPhi.displayName = `GrandPhi`;

type ArrowSvgT = {
  rotate: string;
};

export const Icone = styled.div<ArrowSvgT>`
  margin-right: 10px;
  transform: ${props =>
    props.rotate === "true" ? "rotate(180deg)" : "rotate(0deg)"};
`;
Icone.displayName = `Icone`;

export const ArrowSvg = styled.svg`
  fill: ${props => props.theme.texteSecondaryColor};
  width: 1em;
  height: 1em;
`;
ArrowSvg.displayName = `ArrowSvg`;
/*
interface IconeT extends IconProps {
  rotationicone?: string;
  type: string;
}
export const Icone2 = styled(Icon)<IconeT>`
  color: orange;
  line-height: 24px;
  margin-right: 10px;
  transform: ${props =>
    Boolean(props.rotationicone) ? "rotate(180deg)" : "rotate(0deg)"};
`;
Icone.displayName = `Icone`;
*/
