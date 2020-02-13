import * as S from "./Styled";
import { useState } from "react";

export interface indexI {
  show: boolean;
  close: () => void;
  position?: "left" | "right";
}

const index: React.FC<indexI> = ({
  show,
  close,
  children,
  position = "left"
}) => {
  const [shouldClose, setShouldClose] = useState(false);

  return (
    <S.Drawer
      shouldClose={shouldClose}
      position={position}
      show={show}
      onClick={() => {
        setShouldClose(true);
        setTimeout(() => {
          close();
          setShouldClose(false);
        }, 200);
      }}
    >
      <S.Panneau
        position={position}
        className={!shouldClose ? "shouldAppearDrawer" : "shouldCloseDrawer"}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {children}
      </S.Panneau>
    </S.Drawer>
  );
};
export default index;
