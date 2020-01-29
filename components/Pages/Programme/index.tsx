import * as S from "./Styled";
import EditeurCours from "../../Fonctionnels/EditeurCours";

const Programme = (props: any) => {
  return (
    <S.Conteneur>
      {props.cours && (
        <EditeurCours tableMatiereShow={false} cours={props.cours} />
      )}
    </S.Conteneur>
  );
};
export default Programme;
