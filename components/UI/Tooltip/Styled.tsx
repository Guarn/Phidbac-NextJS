import styled from "styled-components";

export const Tooltip = styled.div`
  position: relative;
  display: inline;
  z-index: 1;
  cursor: pointer;
  .shouldCloseTooltip {
    animation: closeTooltip 200ms forwards;
  }
  .shouldAppearTooltip {
    animation: appearTooltip 200ms forwards;
  }

  @keyframes appearTooltip {
    0% {
      transform: scale(0.5) translateX(-50%);
      opacity: 0;
    }
    100% {
      transform: scale(1) translateX(-50%);
      opacity: 1;
    }
  }
  @keyframes closeTooltip {
    0% {
      transform: scale(1) translateX(-50%);
      opacity: 1;
    }
    100% {
      transform: scale(0.5) translateX(-50%);
      opacity: 0;
    }
  }
`;

export interface ConteneurI {
  showTooltip: boolean;
}

export const Conteneur = styled.div<ConteneurI>`
  position: absolute;
  bottom: calc(100% + 6px);
  transform-origin: left;
  left: 50%;
  z-index: 1;
  text-align: center;
  padding: 0.5rem;
  border-radius: 3px;
  background-color: ${props => props.theme.main};
  color: white;
  display: ${props => (props.showTooltip ? "inline-block" : "none")};
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
