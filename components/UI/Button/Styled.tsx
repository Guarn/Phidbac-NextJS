import styled from "styled-components";
import { PositionT, SizeT } from ".";

export interface BoutonContainerT
  extends React.HTMLAttributes<HTMLButtonElement> {
  position?: PositionT;
  size?: SizeT;
  block?: boolean;
  mobile: boolean;
}

export const Button = styled.button<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${props => {
    switch (props.size) {
      case "small":
        return "1.5rem";
      case "normal":
        return "2rem";
      case "large":
        return "2.5rem";
      default:
        return "2rem";
    }
  }};
  line-height: ${props => {
    switch (props.size) {
      case "small":
        return "1rem";
      case "normal":
        return "1.5rem";
      case "large":
        return "2rem";
      default:
        return "1.5rem";
    }
  }};
  flex-direction: ${props =>
    props.position === "right" ? "row" : "row-reverse"};

  padding: ${props => {
    switch (props.size) {
      case "small":
        return "0.1rem 0.7rem";
      case "normal":
        return "0.2rem 2rem";
      case "large":
        return "0.2rem 2.5rem";
      default:
        return "0.2rem 2rem";
    }
  }};
  border-radius: 2px;
  background-color: ${props => props.theme.background};
  border: solid 1px ${props => props.theme.border};
  animation: Appear 500ms;
  width: ${props => (props.block ? "100%" : "initial")};
  color: ${props => props.theme.main};
  @media (max-width: 767px) {
    width: ${props => (props.mobile ? "40px" : "initial")};
  }

  & svg {
    fill: ${props => props.theme.main};
  }

  cursor: pointer;
  @keyframes Appear {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    50% {
      transform: scale(1.02);
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  &:hover {
    background-color: ${props => props.theme.main};
    color: ${props => props.theme.background};
  }

  &:hover svg {
    fill: ${props => props.theme.background};
  }
`;
