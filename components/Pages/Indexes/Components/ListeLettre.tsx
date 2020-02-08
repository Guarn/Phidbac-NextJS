import alphabet from "../alphabet";
import * as S from "./Styled";
import * as Scroll from "react-scroll";

export const ListeLettre = () => {
  return (
    <S.ConteneurLettres>
      <S.LettresG>
        {alphabet.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <Scroll.Link
                activeClass="active"
                to={`lettre-${item}`}
                containerId="scrollContainer"
                spy={true}
                smooth={true}
                duration={500}
                key={`Lettre-${item}`}
              >
                <LienScroll item={item} index={index}>
                  <S.Lettre>{item}</S.Lettre>
                </LienScroll>
              </Scroll.Link>
            );
          }
          return null;
        })}
      </S.LettresG>
      <S.LettresD>
        {alphabet.map((item, index) => {
          if (index % 2) {
            return (
              <Scroll.Link
                activeClass="active"
                to={`lettre-${item}`}
                containerId="scrollContainer"
                spy={true}
                smooth={true}
                duration={500}
                key={`Lettre-${item}`}
              >
                <LienScroll item={item} index={index}>
                  <S.Lettre>{item}</S.Lettre>
                </LienScroll>
              </Scroll.Link>
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
