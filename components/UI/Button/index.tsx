import * as S from "./Styled";
import Icon, { IconList } from "../Icons";
import { useEffect, useRef, createRef, SyntheticEvent, useState } from "react";

export type PositionT = "left" | "right";
export type SizeT = "small" | "normal" | "large";

export interface ButtonT extends React.HTMLAttributes<HTMLDivElement> {
  icon?: typeof IconList[number];
  position?: PositionT;
  onClick?: (e: SyntheticEvent) => void;
  size?: SizeT;
  disabled?: boolean;
  block?: boolean;
  mobile?: boolean;
  type?: string;
}

const Button: React.FC<ButtonT> = ({
  children,
  icon,
  onClick,
  block,
  size = "normal",
  disabled = false,
  position = "left",
  mobile = false,
  type,
  ...rest
}) => {
  const [anim, setAnim] = useState(false);
  let timer1: any;
  useEffect(() => {
    return () => {
      if (timer1) clearTimeout(timer1);
    };
  }, []);
  return (
    <S.Button
      {...rest}
      mobile={mobile}
      block={block}
      size={size}
      type={type}
      position={position}
      onClick={(event: SyntheticEvent) => {
        setAnim(true);
        timer1 = setTimeout(() => {
          setAnim(false);
        }, 200);

        onClick && onClick(event);
      }}
    >
      {children}
      {icon && (
        <Icon
          mr="10"
          ml="10"
          type={icon}
          position={position}
          noText={!children}
          anim={anim}
        />
      )}
    </S.Button>
  );
};

export default Button;
