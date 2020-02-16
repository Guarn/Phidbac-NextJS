import * as S from "./Styled";
import alphabet from "../alphabet";
import Link from "next/link";
import * as Scroll from "react-scroll";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";

const ListeIndex = ({ listeIndex, id }: any) => {
  const [showListe, setShowListe] = useState(false);
  const [url, setUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (router.asPath !== url) {
      setShowListe(false);
    }
  });

  return (
    <S.ConteneurListe id="scrollContainer" show={showListe}>
      <S.FloatButton
        icon="DocList"
        onClick={() => {
          setShowListe(!showListe);
          window.scroll(0, 0);
          setUrl(router.asPath);
        }}
      />
      {alphabet.map(item => {
        return (
          <S.Bloc key={`Bloclettre-${item}`} show={showListe}>
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
          </S.Bloc>
        );
      })}
    </S.ConteneurListe>
  );
};

export default ListeIndex;
