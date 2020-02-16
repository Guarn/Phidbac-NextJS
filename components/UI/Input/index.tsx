import * as S from "./Styled";
import { ChangeEvent } from "react";

export interface indexI extends React.HTMLAttributes<HTMLInputElement> {
  initialValue?: string;
  placeholder: string;
  onChange: (val: ChangeEvent<HTMLInputElement>) => void;
}

const index: React.FC<indexI> = ({
  initialValue = "",
  placeholder,
  onChange
}) => {
  return (
    <S.InputCtn
      value={initialValue}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
export default index;
