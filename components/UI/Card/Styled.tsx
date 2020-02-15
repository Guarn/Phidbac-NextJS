import styled from "styled-components";

export type CardT = {
  modal: boolean;
};

export const Card = styled.div<CardT>`
  background-color: white;
  border-radius: 5px;
  padding: ${props => (props.modal ? "15px 0px 15px 25px" : "1rem")};
  position: relative;
  min-width: 100px;
  min-height: 100px;
  max-width: ${props => props.modal && "600px"};
  max-height: ${props => props.modal && "80%"};
  box-shadow: 0px 0px 3px 3px grey;
`;
