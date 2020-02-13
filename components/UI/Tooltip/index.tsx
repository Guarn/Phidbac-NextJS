import * as S from "./Styled";
import { ReactNode, useState, useEffect } from "react";

export interface index {
  content: ReactNode | string;
}

const index: React.FC<index> = ({ children, content, ...rest }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [shouldClose, setShouldClose] = useState(false);
  useEffect(() => {}, []);

  return (
    <S.Tooltip
      onMouseLeave={() => {
        setShouldClose(false);
        setTimeout(() => {
          setShowTooltip(false);
        }, 200);
      }}
      onMouseEnter={() => {
        setShouldClose(true);
        setShowTooltip(true);
      }}
    >
      <S.Conteneur
        {...rest}
        className={shouldClose ? "shouldAppearTooltip" : "shouldCloseTooltip"}
        showTooltip={showTooltip}
      >
        {content}
      </S.Conteneur>
      {children}
    </S.Tooltip>
  );
};
export default index;
