import * as S from "./Styled";
import Icon, { IconList } from "../Icons";
import { useEffect, useRef, createRef, SyntheticEvent, useState } from "react";

export type PositionT = "left" | "right";
export type SizeT = "small" | "normal" | "large";

export type ButtonT = {
  icon?: typeof IconList[number];
  position?: PositionT;
  onClick?: (e: SyntheticEvent) => void;
  size?: SizeT;
};

const Button: React.FC<ButtonT> = ({
  children,
  icon,
  onClick,
  size,
  position = "left"
}) => {
  const [anim, setAnim] = useState(false);

  return (
    <S.Button
      size={size}
      position={position}
      onClick={(event: SyntheticEvent) => {
        setAnim(true);
        setTimeout(() => {
          setAnim(false);
        }, 500);

        onClick && onClick(event);
      }}
    >
      {children}
      {icon && (
        <Icon type={icon} position={position} noText={!children} anim={anim} />
      )}
    </S.Button>
  );
};

export default Button;
