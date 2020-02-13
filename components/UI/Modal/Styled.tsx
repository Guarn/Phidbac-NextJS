import styled from "styled-components";

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
  transition: opacity 200ms;

  display: ${props => (props.showModal ? "flex" : "none")};
  opacity: ${props => (props.shouldClose ? 0 : 1)};
  animation: modalOpacity 200ms;

  @keyframes modalOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes appearModal {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes closeModal {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }
  .shouldCloseModal {
    animation: closeModal 200ms forwards;
  }
  .shouldAppearModal {
    animation: appearModal 200ms;
  }
`;

export const Title = styled.h2`
  border-bottom: 2px solid grey;
  width: 100%;
`;
