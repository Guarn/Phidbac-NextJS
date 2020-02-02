import * as S from "./Styled";
import ListeLettre from "./Components/ListeLettre";
import ListeIndex from "./Components/ListeIndex";
import DescriptionIndex from "./Components/DescriptionIndex";

const Indexes = ({ listeIndex, cours, id }: any) => {
  return (
    <S.Conteneur>
      <ListeLettre />
      <ListeIndex listeIndex={listeIndex} id={id} />
      <DescriptionIndex cours={cours} />
    </S.Conteneur>
  );
};
export default Indexes;
