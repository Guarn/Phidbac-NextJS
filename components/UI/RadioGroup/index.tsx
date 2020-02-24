import * as S from "./Styled";
import { Children, isValidElement, useState, useEffect } from "react";

export type indexI<P> = React.FC<P> & {
  Radio: typeof Radio;
};

export interface Props {
  selected: string;
  onChange: (val: string) => void;
}

const index: indexI<Props> = ({ children, onChange, selected }) => {
  return (
    <S.RadioGroup>
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return (
            <S.RadioLabel active={child.props.value === selected}>
              <S.RadioInput
                onChange={val => {
                  onChange(val.target.value);
                }}
                value={child.props.value}
                checked={child.props.value === selected}
              />
              <S.RadioTitre>{child.props.children}</S.RadioTitre>
            </S.RadioLabel>
          );
        }
      })}
    </S.RadioGroup>
  );
};
export default index;

export interface RadioT {
  value: string;
}
const Radio: React.FC<RadioT> = props => {
  return <></>;
};

index.Radio = Radio;
