import styled from "styled-components";

export const RadioGroup = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid ${props => props.theme.border};
`;

export type RadioLabelT = {
  active: boolean;
};

export const RadioLabel = styled.label<RadioLabelT>`
  color: ${props => (props.active ? props.theme.background : props.theme.main)};
  background-color: ${props =>
    props.active ? props.theme.border : "transparent"};
  padding: 5px;
  text-align: center;
  flex: 1;
  cursor: pointer;
  box-shadow: ${props => (props.active ? "0 0 1px 1px" : "none")};
  transition: all 200ms;
`;

export const RadioInput = styled.input.attrs(() => ({
  type: "radio"
}))`
  height: 0;
  width: 0;
`;

export const RadioTitre = styled.span``;
