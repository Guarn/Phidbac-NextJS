import styled from "styled-components";

export const Conteneur = styled.div`
  position: relative;
  height: 80%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  @media (max-width: 767px) {
    height: initial;
  }
`;

export const ConteneurSlate = styled.div`
  position: relative;
  box-sizing: border-box;
  border: 1px dashed transparent;
  transition: all 0.2s;
`;

export const BlocLettre = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Lettre2 = styled.div`
  font-size: 24px;
  color: orange;
`;

export const ConteneurListeIndex = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  margin-top: 10px;
  position: relative;
  @media (max-width: 767px) {
    text-align: center;
    height: initial;
    width: 100%;
    overflow: initial;
    padding-right: 0px;
    justify-content: center;
    align-items: center;
  }
`;

export const LienAdmin = styled.div`
  position: absolute;
  height: 30px;
  width: 30px;
  right: 0px;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 50%;
  &:hover {
    transform: scale(1.2);
    box-shadow: 0 0 3px;
  }
`;
