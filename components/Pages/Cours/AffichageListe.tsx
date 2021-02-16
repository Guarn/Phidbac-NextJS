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
              href={`/Liste-des-cours/${element.id}`}
              as={`/Liste-des-cours/${element.id}-${element.titre
                .trim()
                .replace(/\u202f/g, "-")
                .replace(/ /gi, "-")
                .replace(/\//g, "-")}`}
            >
              <a>
                <S.ConteneurCours>
                  <S.Description>
                    <S.TitreEtape>{element.titre}</S.TitreEtape>
                    <S.DescriptionEtape>
                      {element.description}
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
