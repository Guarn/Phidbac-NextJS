import * as S from "./Styled";
import EditeurCours from "../../Fonctionnels/EditeurCours";

const Programme = (props: any) => {
  return (
    <S.Conteneur>
      <EditeurCours
        affichage="PageUnique"
        tableMatiereShow={true}
        cours={props.cours}
      />
    </S.Conteneur>
  );
};
export default Programme;
