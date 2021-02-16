import * as S from "./Styled";
import { NextPage } from "next";

export interface SujetI {
  id: number;
  serie: string;
  destination: string[];
  session: string;
  code: string;
  sujet1: string;
  notions1: string[];
  sujet2: string;
  notions2: string[];
  sujet3: string;
  notions3: string[];
  problemes: boolean;
  auteur: string;
  annee: number;
  sujet1_naked: string;
  sujet2_naked: string;
  sujet3_naked: string;
}
export interface RespSujetI {
  noResult: boolean;
  sujet: SujetI;
}

const AffichageSujet: NextPage<RespSujetI> = ({ sujet, noResult }) => {
  const { id, annee, serie, destination, session, code } = sujet;

  switch (noResult) {
    case false:
      return (
        <S.ConteneurSujet>
          <Enonce numSujet={1} sujet={sujet} />
          <Enonce numSujet={2} sujet={sujet} />
          <Enonce numSujet={3} sujet={sujet} />
          <S.Details>
            <S.PartieGauche>
              <S.Etiquette>{id}</S.Etiquette>
              <S.Etiquette>{annee}</S.Etiquette>
              <S.Etiquette>{serie}</S.Etiquette>
              <S.Etiquette>{destination}</S.Etiquette>
              <S.Etiquette>{session}</S.Etiquette>
              <S.Etiquette>{code}</S.Etiquette>
            </S.PartieGauche>
          </S.Details>
        </S.ConteneurSujet>
      );
    case true:
      return (
        <S.ConteneurSujet style={{ textAlign: "center" }}>
          Aucun sujet ne correspond à ces critères.
        </S.ConteneurSujet>
      );
  }
};
export default AffichageSujet;

export type EnonceT = {
  numSujet: number;
  sujet: SujetI;
};

const Enonce: React.FC<EnonceT> = ({ numSujet, sujet }) => {
  let notions, texte;
  switch (numSujet) {
    case 1:
      notions = sujet.notions1;
      texte = sujet.sujet1;
      break;
    case 2:
      notions = sujet.notions2;
      texte = sujet.sujet2;
      break;
    case 3:
      notions = sujet.notions3;
      texte = sujet.sujet3;
      break;
  }

  //TODO Reprogrammer surlignage des mots lors de la recherche

  return (
    <S.Sujet>
      <S.TitreNotions>
        <S.Titre>{numSujet}</S.Titre>
        <S.Notions>{notions?.join(" ")}</S.Notions>
      </S.TitreNotions>
      <S.CorpsSujet dangerouslySetInnerHTML={{ __html: texte ?? "" }} />
    </S.Sujet>
  );
};
