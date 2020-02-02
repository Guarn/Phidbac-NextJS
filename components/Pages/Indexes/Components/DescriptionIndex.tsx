import * as S from "./Styled";
import EditeurCours from "../../../Fonctionnels/EditeurCours";

const DescriptionIndex = ({ cours }: any) => {
  return (
    <S.ConteneurDescription>
      <EditeurCours cours={cours} affichage="Index" />
    </S.ConteneurDescription>
  );
};

export default DescriptionIndex;
