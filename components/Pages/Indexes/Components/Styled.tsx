import styled from "styled-components";

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
    margin-top: 0px;
    margin-left: 0px;
    padding-right: 0px;
    justify-content: center;
    align-items: center;
    overflow: auto;
    flex: 3;
    height: initial;
    width: initial;
    ::-webkit-scrollbar {
      width: 0px;
    }

    #scrollContainer2 {
      ::-webkit-scrollbar {
        width: 0px;
      }
    }
  }
`;

//SECTION ListeIndex

export const ConteneurListe = styled.div`
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
    margin-top: 0px;
    margin-left: 0px;
    padding-right: 0px;
    align-items: center;
    overflow: auto;
    flex: 1;
    height: initial;

    background-color: rgba(0, 0, 0, 0.02);
  }
`;

interface elementProps {
  selected: boolean;
}

export const ElementListe = styled.div<elementProps>`
  cursor: pointer;
  font-weight: ${props => (props.selected ? "bold" : null)};
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
  color: orange;
  @media (max-width: 767px) {
    text-align: center;
  }
`;
Lettre.displayName = `Lettre`;

//!SECTION
