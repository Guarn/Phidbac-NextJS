import * as S from "./Styled";
import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "../../UI/Button";

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
              <Button
                mobile
                icon="LeftArrow"
                size="normal"
                position="left"
                onClick={() => setSujetVisible(getPreviousId())}
              >
                <S.NoMobileDisplay> Sujet précédent</S.NoMobileDisplay>
              </Button>
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
              <Button
                mobile
                icon="RightArrow"
                position="right"
                onClick={() => setSujetVisible(getNextId())}
              >
                <S.NoMobileDisplay>Sujet suivant </S.NoMobileDisplay>
              </Button>
            </a>
          </Link>
        </>
      )}
      {listeSujet.count === 0 && (
        <>
          <Button
            icon="LeftArrow"
            size="normal"
            style={{ width: "200px" }}
            position="left"
          >
            <S.NoMobileDisplay> Sujet précédent</S.NoMobileDisplay>
          </Button>
          <S.NombreSujets>{"0 / 0"}</S.NombreSujets>
          <Button
            disabled
            style={{ width: "200px", paddingLeft: "70px" }}
            icon="RightArrow"
            position="right"
          >
            <S.NoMobileDisplay>Sujet suivant </S.NoMobileDisplay>
          </Button>
        </>
      )}
    </S.ConteneurSuivPrec>
  );
};

export default SuivPrec;
