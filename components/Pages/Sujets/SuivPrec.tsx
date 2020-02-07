import * as S from "./Styled";
import { Icon } from "antd";
import Link from "next/link";

const SuivPrec = ({ lienSuiv, lienPrec, numSujet, nombreTotalSujets }) => {
  return (
    <S.ConteneurSuivPrec>
      <Link href={`/Annales-Bac-Sujets-Philosophie/[id-name]`} as={lienPrec}>
        <a>
          <S.BoutonLeft>
            <Icon type="arrow-left" />
            Sujet précédent
          </S.BoutonLeft>
        </a>
      </Link>
      <S.NombreSujets>{`${numSujet} / ${nombreTotalSujets}`}</S.NombreSujets>
      <Link href={`/Annales-Bac-Sujets-Philosophie/[id-name]`} as={lienSuiv}>
        <a>
          <S.BoutonRight>
            Sujet suivant
            <Icon type="arrow-right" />
          </S.BoutonRight>
        </a>
      </Link>
    </S.ConteneurSuivPrec>
  );
};

export default SuivPrec;
