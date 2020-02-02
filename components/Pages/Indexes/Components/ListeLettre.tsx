import alphabet from "../alphabet";
import * as S from "./Styled";

export const ListeLettre = () => {
  return (
    <S.ConteneurLettres>
      <S.LettresG>
        {alphabet.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <LienScroll key={`Lettre-${item}`} item={item} index={index}>
                <S.Lettre>{item}</S.Lettre>
              </LienScroll>
            );
          }
          return null;
        })}
      </S.LettresG>
      <S.LettresD>
        {alphabet.map((item, index) => {
          if (index % 2) {
            return (
              <LienScroll key={`Lettre-${item}`} item={item} index={index}>
                <S.Lettre>{item}</S.Lettre>
              </LienScroll>
            );
          }
          return null;
        })}
      </S.LettresD>
    </S.ConteneurLettres>
  );
};

export default ListeLettre;

export interface LienScrollI {
  item: string;
  index: number;
}

export const LienScroll: React.FC<LienScrollI> = ({
  item,
  index,
  children
}) => {
  return <div>{children}</div>;
};
