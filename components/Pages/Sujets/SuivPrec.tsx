import * as S from "./Styled";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useState, useEffect } from "react";

export type sujetIdT = {
  id: number;
};

export interface listeSujetI {
  listeSujet: {
    count: number;
    rows: sujetIdT[];
  };
}

const SuivPrec: React.FC<listeSujetI> = ({ listeSujet }) => {
  const [sujetVisible, setSujetVisible] = useState(0);
  useEffect(() => {
    setSujetVisible(0);
  }, [listeSujet.count]);

  const getNextId = () => {
    if (sujetVisible === listeSujet.count - 1) {
      return 0;
    } else {
      return sujetVisible + 1;
    }
  };
  const getPreviousId = () => {
    if (sujetVisible === 0) {
      return listeSujet.count - 1;
    } else {
      return sujetVisible - 1;
    }
  };

  return (
    <S.ConteneurSuivPrec>
      {listeSujet.count > 0 && (
        <>
          <Link
            href={`/Annales-Bac-Sujets-Philosophie/[id-name]`}
            as={`/Annales-Bac-Sujets-Philosophie/${
              listeSujet.rows[getPreviousId()].id
            }`}
          >
            <a>
              <S.BoutonLeft onClick={() => setSujetVisible(getPreviousId())}>
                <ArrowLeftOutlined />
                <S.NoMobileDisplay> Sujet précédent</S.NoMobileDisplay>
              </S.BoutonLeft>
            </a>
          </Link>
          <S.NombreSujets>{`${sujetVisible + 1} / ${
            listeSujet.count
          }`}</S.NombreSujets>
          <Link
            href={`/Annales-Bac-Sujets-Philosophie/[id-name]`}
            as={`/Annales-Bac-Sujets-Philosophie/${
              listeSujet.rows[getNextId()].id
            }`}
          >
            <a>
              <S.BoutonRight onClick={() => setSujetVisible(getNextId())}>
                <S.NoMobileDisplay>Sujet suivant </S.NoMobileDisplay>
                <ArrowRightOutlined />
              </S.BoutonRight>
            </a>
          </Link>
        </>
      )}
      {listeSujet.count === 0 && (
        <>
          <S.BoutonLeft disabled>
            <ArrowLeftOutlined />
            Sujet précédent
          </S.BoutonLeft>
          <S.NombreSujets>{"0 / 0"}</S.NombreSujets>
          <S.BoutonRight disabled>
            Sujet suivant
            <ArrowRightOutlined />
          </S.BoutonRight>
        </>
      )}
    </S.ConteneurSuivPrec>
  );
};

export default SuivPrec;
