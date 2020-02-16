import styled from "styled-components";

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
  @media (max-width: 1023px) {
    display: none;
  }
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
    margin-top: 10px;
    justify-content: space-evenly;
  }
  @media (max-width: 767px) {
    margin-top: 60px;
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
  z-index: 10;
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

export const CorpsSujet = styled.div`
  padding: 10px;

  p {
    margin: 0;
    padding: 0;
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8
      list-9;
  }

  .ql-align-justify {
    text-align: justify;
  }

  .ql-align-right {
    text-align: right;
  }
  .ql-align-left {
    text-align: left;
  }
  .ql-align-center {
    text-align: center;
  }
  .ql-indent-1 {
    padding-left: 3em;
  }
  .ql-indent-2 {
    padding-left: 6em;
  }
  .ql-indent-3 {
    padding-left: 9em;
  }
`;
export const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 20px;
  align-items: flex-start;
  @media (max-width: 767px) {
    margin-left: 10px;
  }
`;
export const PartieGauche = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  @media (max-width: 767px) {
    margin-right: 0px;
  }
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

export const NoMobileDisplay = styled.div`
  display: inline;
  white-space: nowrap;
  @media (max-width: 767px) {
    display: none;
  }
`;
NoMobileDisplay.displayName = `NoMobileDisplay`;
