import * as S from "./Styled";
import { ReactNode, useState, useEffect, useRef } from "react";
import ClientOnlyPortal from "../../Fonctionnels/ClientOnlyPortal";

export interface index {
  content: ReactNode | string;
  visible: boolean;
  setVisible: (val: boolean) => void;
}

const index: React.FC<index> = ({
  children,
  visible,
  setVisible,
  content,
  ...rest
}) => {
  const [shouldClose, setShouldClose] = useState(false);
  const refTooltip = useRef<HTMLDivElement>(null);

  return (
    <S.Tooltip
      ref={refTooltip}
      onMouseLeave={() => {
        setShouldClose(false);
        setTimeout(() => {
          setVisible(false);
        }, 200);
      }}
      onMouseEnter={() => {
        setShouldClose(true);
        setVisible(true);
      }}
    >
      {visible && (
        <ClientOnlyPortal selector="#tooltip">
          <S.Conteneur
            refTooltip={refTooltip}
            {...rest}
            className={
              shouldClose ? "shouldAppearTooltip" : "shouldCloseTooltip"
            }
          >
            {content}
          </S.Conteneur>
        </ClientOnlyPortal>
      )}
      {children}
    </S.Tooltip>
  );
};
export default index;
