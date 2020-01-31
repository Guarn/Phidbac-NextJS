import styled, { css } from "styled-components";
import { log } from "util";

export interface BlocSimpleI {
  element: {
    align?: string;
    marginLeft?: string;
  };
}

const Params = css<BlocSimpleI>`
  text-align: ${props => props.element.align || "left"};
  margin-left: ${props => props.element.marginLeft || "0px"};
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const BlocSimple = styled.div`
  ${Params}
`;
BlocSimple.displayName = `BlocSimple`;

export const H1 = styled.h1`
  ${Params}
`;
H1.displayName = `H1`;

export const H2 = styled.h2`
  ${Params}
  font-size: 20px;
`;
H2.displayName = `H2`;

export const H3 = styled.h3`
  ${Params}
  font-size: 16px;
`;
H3.displayName = `H3`;

export const Li = styled.li`
  ${Params}
  font-size: 16px;
`;
Li.displayName = `Li`;

export const Ol = styled.ol`
  ${Params}
  font-size: 16px;
`;
Ol.displayName = `Ol`;

export const ConteneurLienPopover = styled.div`
  display: flex;
`;
ConteneurLienPopover.displayName = `ConteneurLienPopover`;

export const TypeLien = styled.div`
  color: ${props => props.theme.texteSecondaryColor};
  font-weight: bold;
`;
TypeLien.displayName = `TypeLien`;

export const Separateur = styled.div`
  color: white;
  margin-left: 5px;
  margin-right: 5px;
`;
Separateur.displayName = `Separateur`;

export const ContenuLien = styled.div`
  color: white;
`;
ContenuLien.displayName = `ContenuLien`;
