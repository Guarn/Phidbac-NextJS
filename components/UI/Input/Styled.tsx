import styled from "styled-components";

export interface InputI {}

export const InputCtn = styled.input<InputI>`
  background-color: transparent;
  border: 1px solid ${props => props.theme.border};
  width: 100%;
  padding: 5px;

  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;
