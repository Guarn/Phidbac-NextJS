import React, { FC } from "react";
import * as S from "./Styled";
import Slate from "../../Fonctionnels/Slate";
import * as Scroll from "react-scroll";

export interface Props {
  paragraphe: number;
  cours: any;
  affichage: "PageUnique" | "Index" | "Cours";
}

const Cours: FC<Props> = ({ paragraphe = 0, cours, affichage }) => {
  return (
    <S.ConteneurCours id="scrollContainer2" affichage={affichage}>
      {cours.contenu.map((element: any, index: number) => {
        return (
          <Scroll.Element
            id={paragraphe ? `element1-${index}` : `element-${index}`}
            name={paragraphe ? `element1-${index}` : `element-${index}`}
            key={paragraphe ? `element1-${index}` : `element-${index}`}
            className="element"
          >
            <S.ConteneurSlate
              options={element.options}
              imageOptions={element.imageOptions}
              type={element.type}
              image={element.image}
              key={`Conteneur-${index}`}
            >
              {
                // Gestion de l'affichage d'une image dans un  bloc Slate
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
                )
              }
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
          </Scroll.Element>
        );
      })}
    </S.ConteneurCours>
  );
};

export default Cours;
