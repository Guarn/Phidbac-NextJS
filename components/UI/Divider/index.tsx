import * as S from "./Styled";

export interface indexI extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  align: "left" | "center" | "right";
}

const index: React.FC<indexI> = ({ text, align, ...rest }) => {
  return (
    <S.Divider {...rest}>
      <S.BarreGauche align={align} />
      {text && (
        <>
          {text}
          <S.BarreDroite align={align} />
        </>
      )}
    </S.Divider>
  );
};
export default index;
