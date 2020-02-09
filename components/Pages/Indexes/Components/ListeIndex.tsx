import * as S from "./Styled";
import alphabet from "../alphabet";
import Link from "next/link";
import * as Scroll from "react-scroll";
import { useState } from "react";

const ListeIndex = ({ listeIndex, id }: any) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <S.ConteneurListe id="scrollContainer">
      {alphabet.map(item => {
        return (
          <div key={`Bloclettre-${item}`}>
            <Scroll.Element name={`lettre-${item}`} className="element">
              <S.LettreTitre>{item}</S.LettreTitre>
            </Scroll.Element>

            <S.BlocLettre>
              {listeIndex
                .filter((element: any) => element.lettre.charAt(0) === item)
                .map((element: any) => {
                  return (
                    <Link
                      key={element.id}
                      href={`/Liste-des-index/[id-name]`}
                      as={`/Liste-des-index/${element.id}-${element.nom
                        .trim()
                        .replace(/\u202f/g, "-")
                        .replace(/ /gi, "-")
                        .replace(/\//g, "-")}`}
                    >
                      <a>
                        <S.ElementListe selected={element.id === id}>
                          {element.nom}
                        </S.ElementListe>
                      </a>
                    </Link>
                  );
                })}
            </S.BlocLettre>
          </div>
        );
      })}
    </S.ConteneurListe>
  );
};

export default ListeIndex;
