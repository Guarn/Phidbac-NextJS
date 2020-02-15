import * as S from "./Styled";

export interface indexI extends React.HTMLAttributes<HTMLDivElement> {
  modal?: boolean;
}

const index: React.FC<indexI> = ({ children, modal = false, ...rest }) => {
  return (
    <S.Card modal={modal} {...rest}>
      {children}
    </S.Card>
  );
};
export default index;
