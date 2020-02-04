import * as S from "./Styled";
import EditeurCours, { CoursI } from "../../Fonctionnels/EditeurCours";

interface Props {
  cours: CoursI;
}

const Programme: React.FC<Props> = ({ cours }) => {
  return (
    <S.Conteneur>
      <EditeurCours
        affichage="PageUnique"
        tableMatiereShow={true}
        cours={cours}
      />
    </S.Conteneur>
  );
};
export default Programme;
