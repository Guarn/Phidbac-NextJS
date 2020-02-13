import styled, { css } from "styled-components";

export interface DrawerI {
  show: boolean;
  shouldClose: boolean;
  position: "left" | "right";
}

export const Drawer = styled.div<DrawerI>`
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
  opacity: ${props => (props.shouldClose ? 0 : 1)};
  transition: opacity 200ms;
  display: ${props => (props.show ? "flex" : "none")};
  animation: drawerOpacity 200ms;

  @keyframes drawerOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .shouldAppearDrawer {
    animation: appearDrawer 200ms;
  }

  .shouldCloseDrawer {
    animation: closeDrawer 200ms forwards;
  }

  @keyframes appearDrawer {
    0% {
      transform: ${props => {
        switch (props.position) {
          case "left":
            return "translateX(-100%)";
          case "right":
            return "translateX(100%)";
        }
      }};
    }
    100% {
      transform: translateX(0px);
    }
  }
  @keyframes closeDrawer {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: ${props => {
        switch (props.position) {
          case "left":
            return "translateX(-100%)";
          case "right":
            return "translateX(100%)";
        }
      }};
    }
  }
`;

export type PanneauT = {
  position: "left" | "right";
};

export const Panneau = styled.div<PanneauT>`
  position: fixed;
  padding: 1rem;
  ${props => {
    switch (props.position) {
      case "left":
        return positionLeft;
      case "right":
        return positionRight;
    }
  }}

  background-color: white;
  z-index: 9000;
`;

const positionLeft = css`
  top: 0;
  left: 0;
  height: 100vh;
  min-width: 100px;
`;

const positionRight = css`
  top: 0;
  right: 0;
  height: 100vh;
  min-width: 100px;
`;
