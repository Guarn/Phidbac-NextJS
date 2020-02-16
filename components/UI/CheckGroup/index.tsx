import * as S from "./Styled";
import {
  Children,
  isValidElement,
  useState,
  useEffect,
  FormEvent,
  HTMLAttributes,
  ChangeEvent
} from "react";

export type indexI<P> = React.FC<P> & {
  Radio: typeof Radio;
};

export interface Props extends HTMLAttributes<HTMLDivElement> {
  defaultValue: string;
  onChange: (val: ChangeEvent<HTMLInputElement>) => void;
}

const index: indexI<Props> = ({
  children,
  onChange,
  defaultValue,
  ...rest
}) => {
  const [activeCheck, setActiveCheck] = useState<string>(
    defaultValue || "NoDefault"
  );

  return (
    <S.CheckGroupCtn {...rest}>
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          if (activeCheck === "NoDefault" && index === 0) {
            setActiveCheck(child.props.value as string);
          }

          return (
            <S.Label active={child.props.value === activeCheck}>
              <S.Input
                onChange={val => {
                  onChange(val);
                  setActiveCheck(val.target.value);
                }}
                value={child.props.value}
                checked={child.props.value === activeCheck}
              />
              <S.Titre>{child.props.children}</S.Titre>
            </S.Label>
          );
        }
      })}
    </S.CheckGroupCtn>
  );
};
export default index;

export interface RadioT {
  value: string;
}
const Radio: React.FC<RadioT> = () => {
  return <></>;
};

index.Radio = Radio;
