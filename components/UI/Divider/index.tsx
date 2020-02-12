import * as S from "./Styled";

export interface indexI {
  text: string;
  align: "left" | "center" | "right";
}

const index: React.FC<indexI> = ({ text, align }) => {
  return (
    <S.Divider>
      <S.BarreGauche align={align} />
      {text}
      <S.BarreDroite align={align} />
    </S.Divider>
  );
};
export default index;
