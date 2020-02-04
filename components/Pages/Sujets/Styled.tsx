import styled from "styled-components";
import { Button } from "antd";

export const ConteneurGeneral = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
ConteneurGeneral.displayName = `ConteneurGeneral`;

export const Conteneur = styled.div`
  display: flex;
  height: 100%;
  max-width: 1450px;
  width: 100%;
  @media (max-width: 767px) {
    flex-direction: column;
    height: initial;
  }

  .ant-select-selection {
    background-color: #e2e0d8;
    border-color: #919191;
  }

  .ant-select-selection__placeholder {
    color: #a2a2a2;
  }

  .ant-divider-horizontal.ant-divider-with-text-center::before,
  .ant-divider-horizontal.ant-divider-with-text-center::after {
    border-top: 1px solid #c4c4c4;
  }

  .ant-radio-button-wrapper {
    background-color: #e2e0d8;
    border-color: #919191;
  }
  .ant-radio-button-wrapper-checked {
    background-color: #e2e0d8;
    border-color: #919191;
  }

  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    background-color: #f1f0eb;
  }

  .ql-editor {
    font-family: century-gothic;
    font-size: 16px;
  }
  .ant-btn:focus {
    color: rgba(0, 0, 0, 0.65);
  }

  .ant-slider-mark-text {
    color: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
  .ant-slider-rail {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .ant-slider:hover .ant-slider-rail {
    background-color: rgba(0, 0, 0, 0.2);
  }

  .ant-slider-track {
    background-color: rgba(0, 0, 0, 0.3);
  }

  .ant-slider:hover .ant-slider-track {
    background-color: rgba(0, 0, 0, 0.4);
  }

  .ant-slider-handle {
    border: solid 2px rgba(0, 0, 0, 0.3);
  }

  .ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open) {
    border: solid 2px rgba(0, 0, 0, 0.4);
  }
`;
export const PartieG = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 20;
  max-height: 100%;
  width: 100%;
`;
export const PartieD = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 20;
  max-height: 100%;
  width: 100%;
  @media (max-width: 1023px) {
    flex-direction: column;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    max-height: initial;
  }
`;
export const ConteneurFiltres = styled.div`
  position: relative;
  width: 320px;
  border: 1px solid rgba(0, 0, 0, 0.16);
  padding: 20px;
  margin-left: 10px;
  padding-top: 5px;
  background-color: #e2e0d8;
  overflow: auto;
  z-index: 200;
  max-height: 80vh;
`;

export const ConteneurSuivPrec = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
  margin: 30px;
  @media (max-width: 1023px) {
    flex-direction: row;
    width: 100%;
    margin: 0px;
    margin-top: 0px;
    justify-content: space-evenly;
  }
  @media (max-width: 767px) {
    margin-top: 50px;
  }
`;
export const ConteneurSujet = styled.div`
  max-height: 100%;
  overflow: auto;
  padding-right: 10px;
  user-select: text;
  max-width: 800px;
  width: 100%;
  @media (max-width: 1023px) {
    height: 95%;
  }
  @media (max-width: 767px) {
    height: initial;
    min-height: 100%;
    overflow: initial;
    margin-bottom: 30px;
    padding-right: 5px;
    background-color: ${props => props.theme.background};
  }
`;

export const NombreSujets = styled.div`
  width: 150px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  @media (max-width: 1023px) {
    margin-bottom: 10px;
    width: auto;
  }
`;

export const Carre = styled.div`
  position: absolute;
  top: -20%;
  left: -83%;
  height: 200%;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.16);
  @media (max-width: 767px) {
    display: none;
  }
`;

export const Cercle = styled.div`
  position: fixed;
  top: -70%;
  left: 40%;
  width: 100%;
  height: 200%;
  background-color: #e9e7e1;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 50% /50%;
  z-index: 1;
  overflow: hidden;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const Sujet = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.16);
  background-color: #eeeeee;
  margin-top: 15px;
  margin-left: 6px;
  @media (max-width: 1023px) {
    margin-top: 5px;
  }
`;
export const TitreNotions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Titre = styled.div`
  background-color: rgba(0, 0, 0, 0.15);
  padding: 5px 10px;
  font-style: italic;

  z-index: 1;
`;

export const Notions = styled.div`
  color: black;
  font-family: "Century Gothic";
  font-style: italic;
  margin-top: 5px;
  margin-right: 5px;
  text-align: right;
`;

export const CorpsSujet = styled.div``;
export const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 20px;
  align-items: flex-start;
`;
export const PartieGauche = styled.div`
  display: flex;
`;
export const Etiquette = styled.div`
  text-align: center;
  margin: auto;
  margin-right: 10px;
  margin-bottom: 6px;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-top: none;
  border-radius: 0 0 5px 5px;
  background-color: #eeeeee;
`;

export const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px"
};

export const TransitionAffichage = styled.div`
  height: 100%;
  display: flex;
  flex: 2;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const AucunSujet = styled.div`
  height: 75%;
  text-align: center;
  z-index: 3;
`;

export const BoutonLeft = styled(Button)`
  width: 170px;
  background-color: #e2e0d8;
  border-color: #919191;
  transform: translateX(-20px);
  @media (max-width: 1023px) {
    transform: translateX(0px);
    width: auto;
  }
`;

export const BoutonRight = styled(Button)`
  width: 170px;
  background-color: #e2e0d8;
  border-color: #919191;
  transform: translateX(20px);
  @media (max-width: 1023px) {
    transform: translateX(0px);
    width: auto;
  }
`;
