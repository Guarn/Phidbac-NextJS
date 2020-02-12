import * as S from "./Styled";
import { NextPage } from "next";

export interface SujetI {
  id: number;
  Serie: string;
  Destination: string[];
  Session: string;
  Code: string;
  Sujet1: string;
  Notions1: string[];
  Sujet2: string;
  Notions2: string[];
  Sujet3: string;
  Notions3: string[];
  Problemes: boolean;
  Auteur: string;
  Annee: number;
  Sujet1Naked: string;
  Sujet2Naked: string;
  Sujet3Naked: string;
}
export interface RespSujetI {
  noResult: boolean;
  sujet: SujetI;
}

const AffichageSujet: NextPage<RespSujetI> = ({ sujet, noResult }) => {
  const { id, Annee, Serie, Destination, Session, Code } = sujet;

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
              <S.Etiquette>{Annee}</S.Etiquette>
              <S.Etiquette>{Serie}</S.Etiquette>
              <S.Etiquette>{Destination}</S.Etiquette>
              <S.Etiquette>{Session}</S.Etiquette>
              <S.Etiquette>{Code}</S.Etiquette>
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
      notions = sujet.Notions1;
      texte = sujet.Sujet1;
      break;
    case 2:
      notions = sujet.Notions2;
      texte = sujet.Sujet2;
      break;
    case 3:
      notions = sujet.Notions3;
      texte = sujet.Sujet3;
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
