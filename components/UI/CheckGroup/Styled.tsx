import styled from "styled-components";

export const CheckGroupCtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
`;

export interface LabelI {
  active: boolean;
}

export const Label = styled.label<LabelI>`
  display: flex;
  cursor: pointer;
`;

export const Input = styled.input.attrs(() => ({
  type: "radio"
}))`
  height: 24px;
  margin-right: 10px;
`;

export const Titre = styled.div``;
