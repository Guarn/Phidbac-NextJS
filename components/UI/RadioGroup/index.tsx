import * as S from "./Styled";
import { Children, isValidElement, useState, useEffect } from "react";

export type indexI<P> = React.FC<P> & {
  Radio: typeof Radio;
};

export interface Props {
  defaultValue?: string;
}

const index: indexI<Props> = ({ children, defaultValue }) => {
  const [activeCheck, setActiveCheck] = useState<string>(
    defaultValue || "NoDefault"
  );

  return (
    <S.RadioGroup>
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          if (activeCheck === "NoDefault" && index === 0) {
            setActiveCheck(child.props.value as string);
          }

          return (
            <S.RadioLabel active={child.props.value === activeCheck}>
              <S.RadioInput
                onChange={val => setActiveCheck(val.target.value)}
                value={child.props.value}
                checked={child.props.value === activeCheck}
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
