import styled from "styled-components";
import Button from "../../../UI/Button";

export const ConteneurLettres = styled.div`
  display: flex;
  @media (max-width: 1023px) {
    display: none;
  }
`;

export const LettresG = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LettresD = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Lettre = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border: 1px solid #707070;
  color: #707070;
  font-size: 24px;
  margin-bottom: 2px;
  margin-right: 2px;
  user-select: none;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: grey;
    color: white;
  }
`;

export const ConteneurDescription = styled.div`
  max-width: 600px;
  width: 600px;
  margin-left: 40px;
  overflow: auto;
  height: 100%;
  padding-right: 10px;
  @media (max-width: 1023px) {
    margin-left: 0px;
    padding-right: 0px;
    overflow: initial;
    flex: 2;
    width: initial;
  }
  @media (max-width: 767px) {
    margin-left: 0px;
    padding-right: 0px;
    justify-content: center;
    align-items: center;
    overflow: initial;
    width: initial;
    & #scrollContainer2 {
      width: 95%;
      max-width: 95%;
      word-break: break-all;
    }
  }
`;

//SECTION ListeIndex

export interface ConteneurListeI {
  show?: boolean;
}

export const ConteneurListe = styled.div<ConteneurListeI>`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  height: 90%;
  overflow: auto;
  padding-right: 10px;
  @media (max-width: 1023px) {
    margin-left: 10px;
    padding-right: 10px;
    flex: 1;
  }
  @media (max-width: 767px) {
    height: calc(100% - 50px);
    margin-top: 10px;
  }
`;

export interface BlocI {
  show: boolean;
}

export const Bloc = styled.div<BlocI>`
  display: ${props => (props.show ? "block" : "none")};
`;

interface elementProps {
  selected: boolean;
}

export const ElementListe = styled.div<elementProps>`
  cursor: pointer;
  font-weight: ${props => (props.selected ? "bold" : null)};
  margin-bottom: 5px;
  &:hover {
    font-weight: bold;
  }
  @media (max-width: 767px) {
    text-align: center;
  }
`;
ElementListe.displayName = `ElementListe`;

export const BlocLettre = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  a {
    color: ${props => props.theme.main};
  }
`;
BlocLettre.displayName = `BlocLettre`;

export const LettreTitre = styled.div`
  font-size: 24px;
  color: ${props => props.theme.texteSecondaryColor};
  @media (max-width: 767px) {
    text-align: center;
  }
`;
Lettre.displayName = `Lettre`;

export const FloatButton = styled(Button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
  background-color: ${props => props.theme.main};
  height: 40px;
  width: 40px;
  z-index: 1000;
  padding-left: 0px;
  padding-right: 0px;
  svg {
    transform: scale(1.5);
    fill: ${props => props.theme.background};
  }
  @media (max-width: 767px) {
    display: flex;
  }
`;
