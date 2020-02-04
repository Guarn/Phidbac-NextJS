import styled from "styled-components";

export const Conteneur = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    height: initial;
    width: initial;
    padding-top: 60px;
  }
`;

export const ConteneurProgression = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ConteneurIcoProgress = styled.div`
  display: flex;
`;

export const IcoProgress = styled.div`
  background-color: ${props => props.color};
  height: 24px;
  width: 24px;
  border: 1px solid #707070;
  margin-right: 5px;
  border-radius: 2px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ConteneurTimeline = styled.div`
  overflow: auto;
  padding-right: 50px;
  padding-left: 200px;
  display: flex;
  height: calc(100% - 48px);
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  @media (max-width: 767px) {
    overflow: initial;
    padding-right: 0px;
    padding-left: 0px;
    height: initial;
    margin-top: 20px;
  }

  .ant-timeline-item-head,
  .ant-timeline-item-head-blue {
    background-color: transparent;
  }

  a {
    color: ${props => props.theme.main};
  }
`;

export const ConteneurCours = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: orange;
  }
`;

export const ContenuCours = styled.div`
  height: calc(100% - 32px);
  @media (max-width: 1023px) {
    height: calc(100% - 100px);
  }
  @media (max-width: 768px) {
    height: calc(100% - 32px);
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  margin-left: 30px;
  @media (max-width: 767px) {
    width: initial;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const Details = styled.div`
  position: absolute;
  font-size: 16px;
  text-align: right;
  width: 200px;
  left: -240px;
`;

export const TitreEtape = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

export const DescriptionEtape = styled.div`
  font-size: 16px;
  text-align: justify;
`;

export interface DotProps {
  color?: string;
}

export const Dot = styled.div<DotProps>`
  height: 16px;
  width: 16px;
  border: 2px solid #707070;
  border-radius: 50%;
  background-color: ${props => (props.color ? props.color : "salmon")};
  box-sizing: border-box;
  margin-top: 8px;

  @media (max-width: 767px) {
    margin-left: 10px;
  }
`;
