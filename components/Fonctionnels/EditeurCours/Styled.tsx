import styled from "styled-components";

export const Conteneur = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  h1,
  h2,
  h3 {
    line-height: initial;

    font-weight: 400;
  }
`;
Conteneur.displayName = `Conteneur`;

export type WidthProps = {
  width?: number;
  affichage: string;
};
export const ConteneurCours = styled.div<WidthProps>`
  width: ${props => props.affichage !== "Index" && "847px"};

  overflow: auto;
  padding-right: 10px;
  position: relative;
  padding-left: ${props => props.affichage !== "Index" && "10%"};
  height: 100%;
  @media (max-width: 1023px) {
    padding-right: 5px;
    padding-left: 5px;
    width: initial;
    height: initial;
    min-height: 100vh;
  }
`;
Conteneur.displayName = `ConteneurCours`;

interface ConteneurSlateI {
  options?: {
    marginTop: number;
    marginBottom: number;
    marginLeft: number;
    marginRight: number;
    backgroundColor: string;
    paddingTop: number;
    paddingLeft: number;
    paddingRight: number;
    paddingBottom: number;
    hidden: boolean;
  };
  imageOptions?: {
    align: "left" | "right" | "center";
    height: number;
    width: number;
    legende: string;
    ratioActif: boolean;
    ratio: number;
    lienActif: boolean;
    lienType: string;
    src: string;
  };
  type?: string;
  image?: boolean;
}

export const ConteneurSlate = styled.div<ConteneurSlateI>`
  font-size: 16px;
  position: relative;
  box-sizing: border-box;
  border: 1px dashed transparent;
  transition: all 0.2s;
  transition: filter 0.5s;

  background-color: ${props => props.options?.backgroundColor ?? ""};
  margin-top: ${props => (props.options?.marginTop ?? 0) + "px"};
  margin-left: ${props => (props.options?.marginLeft ?? 0) + "px"};
  margin-bottom: ${props => (props.options?.marginBottom ?? 0) + "px"};
  margin-right: ${props => (props.options?.marginRight ?? 0) + "px"};
  padding-top: ${props => (props.options?.paddingTop ?? 0) + "px"};
  padding-left: ${props => (props.options?.paddingLeft ?? 0) + "px"};
  padding-bottom: ${props => (props.options?.paddingBottom ?? 0) + "px"};
  padding-right: ${props => (props.options?.paddingRight ?? 0) + "px"};
  min-height: ${props =>
    props.image ? (props.imageOptions?.height ?? 0) + "px" : "0px"};
  filter: ${props => (props.options?.hidden ? "blur(5px)" : "blur(0px)")};

  &:hover {
    filter: none;
  }
`;
Conteneur.displayName = `ConteneurSlate`;

export const ConteneurImage = styled.div<ConteneurSlateI>`
  float: ${props =>
    props.imageOptions?.align === "center"
      ? "none"
      : props.imageOptions?.align};
  display: flex;
  justify-content: center;
  z-index: -1;
`;
Conteneur.displayName = `ConteneurImage`;

export const TailleImage = styled.div<ConteneurSlateI>`
  height: ${props => (props.imageOptions?.height ?? 0) + "px"};
  width: ${props => (props.imageOptions?.width ?? 0) + "px"};
`;
Conteneur.displayName = `TailleImage`;

export const BlocImage = styled.img<ConteneurSlateI>`
  height: inherit;
  width: inherit;
  padding-bottom: 10px;
  padding-right: ${(props: ConteneurSlateI) =>
    props.imageOptions?.align === "left" ? "10px" : "0px"};
  padding-left: ${props =>
    props.imageOptions?.align === "right" ? "10px" : "0px"};
`;
Conteneur.displayName = `BlocImage`;

export const BlocCitation = styled.div`
  width: 100%;
  display: flex;
`;
Conteneur.displayName = `BlocCitation`;

export const BarreCitation = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  min-width: 6px;
  margin-right: 30px;
`;
Conteneur.displayName = `BarreCitation`;

export const ConteneurTableMatiere = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 50px;
  font-size: 14px;
  font-family: "Century Gothic";
  @media (max-width: 1024px) {
    padding: 10px;
    margin-left: 10px;

    margin-top: 10px;
    bottom: 10px;
    right: 10px;
    position: fixed;
    background-color: white;
  }
`;
ConteneurTableMatiere.displayName = `ConteneurTableMatiere`;

export const Titre = styled.h2`
  text-align: center;
  cursor: arrow;
`;
Titre.displayName = `Titre`;

export const ElBase = styled.div`
  &:hover {
    font-weight: bold;
  }
`;

export const El0 = styled(ElBase)`
  margin-left: 0px;
`;
El0.displayName = `El0`;

export const El1 = styled(ElBase)`
  margin-left: 15px;
`;
El1.displayName = `El1`;

export const El2 = styled(ElBase)`
  margin-left: 30px;
`;
El2.displayName = `El2`;

export const El3 = styled(ElBase)`
  margin-left: 45px;
`;
El3.displayName = `El3`;

export const El4 = styled(ElBase)`
  margin-left: 60px;
`;
El4.displayName = `El4`;
