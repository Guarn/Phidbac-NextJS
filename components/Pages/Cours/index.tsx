import { CoursI } from "../../Fonctionnels/EditeurCours";
import * as S from "./Styled";
import AffichageListe from "./AffichageListe";

interface Props {
  listeCours: CoursI[];
}

const index: React.FC<Props> = ({ listeCours }) => {
  return (
    <S.Conteneur>
      <AffichageListe listeCours={listeCours} />
    </S.Conteneur>
  );
};

export default index;
