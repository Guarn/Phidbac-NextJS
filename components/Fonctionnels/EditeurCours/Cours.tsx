import React, { FC } from "react";
import * as S from "./Styled";
import { CoursI } from ".";
import Slate from "../../Fonctionnels/Slate";

export interface Props {
  paragraphe: number;
  cours: any;
  affichage: "PageUnique" | "Index" | "Cours";
}

const Cours: FC<Props> = ({ paragraphe = 0, cours, affichage }) => {
  return (
    <S.ConteneurCours affichage={affichage}>
      {cours.Contenu.map((element: any, index: number) => {
        return (
          <S.ConteneurSlate
            options={element.options}
            imageOptions={element.imageOptions}
            type={element.type}
            image={element.image}
            key={`Conteneur-${index}`}
          >
            {// Gestion de l'affichage d'une image dans un  bloc Slate
            element.image && (
              <S.ConteneurImage imageOptions={element.imageOptions}>
                <S.TailleImage imageOptions={element.imageOptions}>
                  <S.BlocImage
                    imageOptions={element.imageOptions}
                    src={element.imageOptions.src}
                    alt={element.imageOptions.legende}
                  />
                </S.TailleImage>
              </S.ConteneurImage>
            )}
            {element.type === "citation" && (
              <S.BlocCitation>
                <S.BarreCitation />
                <Slate index={index} value={element.value} readOnly={false} />
              </S.BlocCitation>
            )}
            {element.type !== "citation" && (
              <Slate index={index} value={element.value} readOnly={false} />
            )}
          </S.ConteneurSlate>
        );
      })}
    </S.ConteneurCours>
  );
};

export default Cours;
