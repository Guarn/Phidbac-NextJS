import * as S from "./Styled";
import { FC } from "react";
import Cours from "./Cours";
import TableMatiere from "./TableMatiere";

export interface Props {
  paragraphe?: number;
  tableMatiereShow?: boolean;
  cours?: CoursI;
}

export interface ContenuCoursI {
  value: any[];
  type: string;
  TableMatiere?: {
    actif: boolean;
    value: string;
    titre: boolean;
    position: number;
  };
  options?: {
    marginTop: number;
    marginBottom: number;
    marginLeft: number;
    marginRight: number;
    backgroundColor: string;
    paddingTop: number;
    paddingLeft: number;
    paddingRight: number;
    paddingBottom: number;
    hidden: boolean;
  };
  imageOptions?: {
    align: "left" | "right" | "center";
    height: number;
    width: number;
    legende: string;
    ratioActif: boolean;
    ratio: number;
    lienActif: boolean;
    lienType: string;
    src: string;
  };
  image?: boolean;
}

export interface CoursI {
  Contenu: ContenuCoursI[];
  Titre: string;
  Description: string;
  type: "Cours" | "Exercice" | "PageUnique";
}

const initialValueCours: CoursI = {
  Contenu: [{ value: [], type: "" }],
  Titre: "",
  Description: "",
  type: "Cours"
};

const index: FC<Props> = ({ paragraphe = 0, tableMatiereShow, cours }) => {
  return (
    <S.Conteneur>
      <Cours paragraphe={paragraphe} cours={cours ?? initialValueCours} />
      {tableMatiereShow && <TableMatiere cours={cours ?? initialValueCours} />}
    </S.Conteneur>
  );
};
export default index;
