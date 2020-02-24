import * as S from "./Styled";
import { Children, isValidElement, HTMLAttributes, ChangeEvent } from "react";

export type indexI<P> = React.FC<P> & {
  Radio: typeof Radio;
};

export interface Props extends HTMLAttributes<HTMLDivElement> {
  selected: string;
  onChange: (val: ChangeEvent<HTMLInputElement>) => void;
}

const index: indexI<Props> = ({ children, onChange, selected, ...rest }) => {
  return (
    <S.CheckGroupCtn {...rest}>
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return (
            <S.Label active={child.props.value === selected}>
              <S.Input
                onChange={val => {
                  onChange(val);
                }}
                value={child.props.value}
                checked={child.props.value === selected}
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
