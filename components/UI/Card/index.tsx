import * as S from "./Styled";

export interface indexI extends React.HTMLAttributes<HTMLDivElement> {}

const index: React.FC<indexI> = ({ children, ...rest }) => {
  return <S.Card {...rest}>{children}</S.Card>;
};
export default index;
