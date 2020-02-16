import styled from "styled-components";

export const MenuSlide = styled.div``;

export const Tabs = styled.div``;

export const Titres = styled.div`
  margin-top: 5px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-evenly;
`;

export type TitreT = {
  actif: boolean;
};

export const Titre = styled.div<TitreT>`
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${props => (props.actif ? "#1890ff" : props.theme.main)};
  border-bottom: 1px solid ${props => (props.actif ? "#1890ff" : "transparent")};
  cursor: pointer;

  & svg {
    fill: ${props => (props.actif ? "#1890ff" : props.theme.main)};
  }
`;
