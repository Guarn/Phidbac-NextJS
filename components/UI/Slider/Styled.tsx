import styled from "styled-components";

export const Slider = styled.div`
  position: relative;
  height: 40px;
  width: calc(100% - 30px);
  margin-left: 15px;
  margin-right: 15px;
`;

export const Rail = styled.div`
  width: 100%;
  position: absolute;
  background-color: lightgrey;
  height: 5px;
  z-index: 100;
`;

export type TrackT = {
  left: number;
  width: number;
};

export const Track = styled.div.attrs((props: TrackT) => ({
  style: { left: props.left + "%", width: props.width + "%" }
}))<TrackT>`
  position: absolute;
  height: 5px;
  right: auto;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 102;
`;

export type HandlerT = {
  left: number;
  actif: boolean;
};

export const Handler = styled.div.attrs((props: HandlerT) => ({
  style: { left: `calc(${props.left}% - 7px)`, zIndex: props.actif ? 104 : 102 }
}))<HandlerT>`
  position: absolute;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  top: -5px;
  box-sizing: border-box;
  background-color: white;
  border: 2px solid rgba(0, 0, 0, 0.3);
  transition: border 200ms;
  cursor: pointer;
  &:hover {
    border: 2px solid rgba(0, 0, 0, 0.5);
  }
`;

export const Mark = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 13px;
`;

export const Texte = styled.div`
  color: grey;
`;
