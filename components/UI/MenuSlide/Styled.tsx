import styled from "styled-components";

export const MenuSlide = styled.div``;

export const Tabs = styled.div``;

export const Titres = styled.div`
  display: flex;
`;

export type TitreT = {
  actif: boolean;
};

export const Titre = styled.div<TitreT>`
  margin-right: 20px;
  font-weight: ${props => (props.actif ? "bold" : "normal")};
  &:hover {
    color: red;
  }
`;
