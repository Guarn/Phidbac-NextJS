import styled from "styled-components";
import Icon from "../Icons";

export type ConteneurT = {
  showModal: boolean;
  shouldClose: boolean;
};

export const Modal = styled.div<ConteneurT>`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.4);
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  z-index: 9000;
  display: ${props => (props.showModal ? "flex" : "none")};

  @keyframes appear {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes close {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }
  .shouldClose {
    animation: close 200ms forwards;
  }
  .shouldAppear {
    animation: appear 200ms;
  }
`;

export const ConteneurClose = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  transform: scale(1.2);
`;

export const BoutonClose = styled(Icon).attrs(props => ({
  type: "Close",
  bg: "lightgrey"
}))``;

export const Title = styled.h2`
  border-bottom: 2px solid grey;
  width: 100%;
`;
