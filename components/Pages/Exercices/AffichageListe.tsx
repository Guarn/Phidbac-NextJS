import * as S from "./Styled";
import { CoursI } from "../../Fonctionnels/EditeurCours";
import Link from "next/link";

interface Props {
  listeCours: CoursI[];
}

const AffichageListe: React.FC<Props> = ({ listeCours }) => {
  return (
    <S.ConteneurTimeline>
      {listeCours.map((element, index) => {
        return (
          <div key={`Cours-${index}`} style={{ marginBottom: "30px" }}>
            <Link
              prefetch={false}
              href={`/Liste-des-exercices/${element.id}`}
              as={`/Liste-des-exercices/${element.id}-${element.Titre.trim()
                .replace(/\u202f/g, "-")
                .replace(/ /gi, "-")
                .replace(/\//g, "-")}`}
            >
              <a>
                <S.ConteneurCours>
                  <S.Description>
                    <S.TitreEtape>{element.Titre}</S.TitreEtape>
                    <S.DescriptionEtape>
                      {element.Description}
                    </S.DescriptionEtape>
                  </S.Description>
                </S.ConteneurCours>
              </a>
            </Link>
          </div>
        );
      })}
    </S.ConteneurTimeline>
  );
};

export default AffichageListe;
