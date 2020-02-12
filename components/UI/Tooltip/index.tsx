import * as S from "./Styled";
import { useRef } from "react";

export interface index extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

const index: React.FC<index> = ({ children, ...rest }) => {
  const refTooltip = useRef<HTMLSpanElement>(null);

  return <S.Tooltip ref={refTooltip}>{children}</S.Tooltip>;
};
export default index;
