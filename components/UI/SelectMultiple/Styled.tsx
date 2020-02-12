import styled from "styled-components";
import Icon from "../Icons";

export const SelectMultiple = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  min-height: 2rem;
  border-radius: 5px;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
`;

export interface ConteneurListeI {
  showListe: boolean;
  position: number;
}

export const ConteneurListe = styled.div<ConteneurListeI>`
  position: absolute;
  top: ${props => props.position.toString() + "px"};
  background-color: white;
  border: ${props => (props.showListe ? "1" : "0")}px solid black;
  overflow: auto;
  width: 100%;
  height: ${props => (props.showListe ? "" : "0vh")};
  max-height: ${props => (props.showListe ? "25vh" : "0vh")};

  animation: ${props => (props.showListe ? "ouvertureListe" : "fermetureListe")}
    200ms;

  @keyframes ouvertureListe {
    0% {
      max-height: 15vh;
    }
    100% {
      max-height: 25vh;
    }
  }

  @keyframes fermetureListe {
    0% {
      max-height: 25vh;
      opacity: 1;
    }
    100% {
      max-height: 15vh;
      opacity: 0;
    }
  }
`;

export type ElementListeT = {
  actif: boolean;
};

export const ElementListe = styled.div<ElementListeT>`
  padding: 5px;
  transition: all 100ms;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  background-color: ${props => props.actif && "#DDFFD7"};
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    font-weight: bold;
  }

  animation: affichageElement 300ms ease-in;

  @keyframes affichageElement {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ConteneurBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 2px;
  padding: 2px;
  border-radius: 3px;
  transition: all 200ms;
  animation: appear 200ms;

  @keyframes appear {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const IconBadge = styled(Icon).attrs(() => ({
  color: "white",
  bg: "salmon",
  ml: "5",
  mr: "5",
  type: "Close",
  cursor: "pointer"
}))``;
