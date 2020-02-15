import styled from "styled-components";
import { RefObject } from "react";

export const Tooltip = styled.div`
  position: relative;
  display: inline;
  z-index: 1;
  cursor: pointer;
`;

export interface ConteneurI {
  refTooltip: RefObject<HTMLDivElement>;
}

export const Conteneur = styled.div<ConteneurI>`
  position: absolute;
  top: ${props => {
    return (
      (props.refTooltip.current?.getBoundingClientRect().top ?? 0) - 50 + "px"
    );
  }};
  transform-origin: left;
  left: ${props => {
    let left = props.refTooltip.current?.getBoundingClientRect().left ?? 0;
    let width = props.refTooltip.current?.getBoundingClientRect().width ?? 0;

    return left + width / 2 + "px";
  }};
  z-index: 110;
  text-align: center;
  padding: 0.5rem;
  border-radius: 3px;
  background-color: ${props => props.theme.main};
  color: white;
  display: inline;
  white-space: nowrap;
  ::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-width: 8px;
    border-style: solid;
    border-color: ${props => props.theme.main} transparent transparent
      transparent;
    top: 100%;
    left: calc(50% - 5px);
  }
`;
