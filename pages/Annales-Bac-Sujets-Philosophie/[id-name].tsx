import { NextPage } from "next";
import Layout from "../../components/Layout";
import fetch from "isomorphic-unfetch";
import * as S from "../../components/Pages/Sujets/Styled";
import AffichageSujet, {
  SujetI
} from "../../components/Pages/Sujets/AffichageSujet";
import SuivPrec from "../../components/Pages/Sujets/SuivPrec";
import "react-quill/dist/quill.snow.css";
import Filtres, { MenuI } from "../../components/Pages/Sujets/Filtres";

export interface SujetCountI {
  sujet: any;
  count: number;
  id: string;
  menu: any;
}

const A: NextPage<SujetCountI> = ({ sujet, count, id, menu }) => {
  return (
    <>
      <Layout>
        <S.ConteneurGeneral>
          <S.Conteneur>
            <S.Carre />
            <S.Cercle />
            <S.PartieD>
              <Filtres menu={menu} />
              <SuivPrec
                numSujet={id}
                nombreTotalSujets={count}
                lienPrec={`/Annales-Bac-Sujets-Philosophie/${parseInt(id) - 1}`}
                lienSuiv={`/Annales-Bac-Sujets-Philosophie/${parseInt(id) + 1}`}
              />
              <AffichageSujet sujet={sujet} />
            </S.PartieD>
          </S.Conteneur>
        </S.ConteneurGeneral>
      </Layout>
    </>
  );
};

A.getInitialProps = async ({ query }: any) => {
  const id = query["id-name"].split("-")[0];
  const res = await fetch(`https://www.phidbac.fr:4000/sujets/${id}`);
  const data = await res.json();
  const res1 = await fetch(`https://www.phidbac.fr:4000/menu`);
  const data1 = await res1.json();

  return {
    sujet: data.Sujet,
    count: data.Count,
    menu: data1,
    id: id
  };
};

export default A;
