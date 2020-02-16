import styled from "styled-components";

export const Divider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
  margin-top: 10px;
`;

export type BarreHT = {
  align: "left" | "center" | "right";
};
export const BarreH = styled.div<BarreHT>`
  display: flex;
  height: 1px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: ${props => props.theme.border};
`;

export const BarreGauche = styled(BarreH)`
  flex: ${props => {
    switch (props.align) {
      case "center":
        return 1;
      case "left":
        return 1;
      case "right":
        return 5;
    }
  }};
`;
export const BarreDroite = styled(BarreH)`
  flex: ${props => {
    switch (props.align) {
      case "center":
        return 1;
      case "left":
        return 5;
      case "right":
        return 1;
    }
  }};
`;
