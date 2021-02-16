import React, { FC } from "react";
import { CoursI } from ".";
import * as S from "./Styled";
import * as Scroll from "react-scroll";

export interface TableMatiere {
  cours: CoursI;
}

const TableMatiere: FC<TableMatiere> = ({ cours }) => {
  return (
    <S.ConteneurTableMatiere>
      {cours.contenu.map((element: any, index: Number) => {
        if (element.TableMatiere.actif) {
          switch (element.TableMatiere.type) {
            case "titre":
              return (
                <GlobalLink key={`TABMAT-${index}`} index={index}>
                  <S.Titre>{element.TableMatiere.value}</S.Titre>
                </GlobalLink>
              );
            case "1":
              return (
                <GlobalLink key={`TABMAT-${index}`} index={index}>
                  <S.El1>{element.TableMatiere.value}</S.El1>
                </GlobalLink>
              );
            case "2":
              return (
                <GlobalLink key={`TABMAT-${index}`} index={index}>
                  <S.El2 key={`TABMAT-${index}`}>
                    {element.TableMatiere.value}
                  </S.El2>
                </GlobalLink>
              );
            case "3":
              return (
                <GlobalLink key={`TABMAT-${index}`} index={index}>
                  <S.El3 key={`TABMAT-${index}`}>
                    {element.TableMatiere.value}
                  </S.El3>
                </GlobalLink>
              );
            case "4":
              return (
                <GlobalLink key={`TABMAT-${index}`} index={index}>
                  <S.El4 key={`TABMAT-${index}`}>
                    {element.TableMatiere.value}
                  </S.El4>
                </GlobalLink>
              );

            default:
              return (
                <GlobalLink key={`TABMAT-${index}`} index={index}>
                  <S.El0 key={`TABMAT-${index}`}>
                    {element.TableMatiere.value}
                  </S.El0>
                </GlobalLink>
              );
          }
        }
        return null;
      })}
    </S.ConteneurTableMatiere>
  );
};
export default TableMatiere;

type GlobalLinkT = {
  index: Number;
};

const GlobalLink: React.FC<GlobalLinkT> = ({ index, children }) => {
  return (
    <Scroll.Link
      activeClass="active"
      to={`element-${index}`}
      spy={true}
      smooth={true}
      duration={350}
      containerId="scrollContainer2"
    >
      {children}
    </Scroll.Link>
  );
};
