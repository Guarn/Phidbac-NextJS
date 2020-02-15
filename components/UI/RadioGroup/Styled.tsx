import styled from "styled-components";

export const RadioGroup = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid ${props => props.theme.main};
`;

export type RadioLabelT = {
  active: boolean;
};

export const RadioLabel = styled.label<RadioLabelT>`
  border: 1px solid ${props => (props.active ? "#096dd9" : "transparent")};
  color: ${props => (props.active ? "#096dd9" : "currentColor")};
  padding: 5px;
  text-align: center;
  flex: 1;
  cursor: pointer;
  box-shadow: ${props => (props.active ? "0 0 1px 1px" : "none")};
  transition: all 500ms;
  &:hover {
    color: #096dd9;
  }
`;

export const RadioInput = styled.input.attrs(() => ({
  type: "radio"
}))`
  height: 0;
  width: 0;
`;

export const RadioTitre = styled.span``;
