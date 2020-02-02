import * as S from "./Styled";
import alphabet from "../alphabet";
import routes from "../../../../routes";
const { Link } = routes;

const ListeIndex = ({ listeIndex, id }: any) => {
  return (
    <S.ConteneurListe>
      {alphabet.map(item => {
        return (
          <div key={`Bloclettre-${item}`}>
            <S.LettreTitre>{item}</S.LettreTitre>

            <S.BlocLettre>
              {listeIndex
                .filter((element: any) => element.lettre.charAt(0) === item)
                .map((element: any) => {
                  return (
                    <Link
                      key={element.id}
                      prefetch={false}
                      route={`/Liste-des-index/${
                        element.id
                      }-${element.nom
                        .replace(/\u202f/g, "-")
                        .replace(/\//g, "-")}`}
                      as={`/Liste-des-index/${element.id}-${element.nom
                        .replace(/\u202f/g, "-")
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
