import { NextPage } from "next";
import Layout from "../../components/Layout";
import fetch from "isomorphic-unfetch";
import * as S from "../../components/Pages/Sujets/Styled";
import AffichageSujet from "../../components/Pages/Sujets/AffichageSujet";
import SuivPrec from "../../components/Pages/Sujets/SuivPrec";
import Filtres from "../../components/Pages/Sujets/Filtres";
import { useState } from "react";
import Head from "next/head";
import Axios from "../../components/Fonctionnels/Axios";

export interface SujetCountI {
  sujet: any;
  count: any;
  menu: any;
}

const A: NextPage<any> = ({ sujet, count, menu }) => {
  const [listeSujet, setListeSujet] = useState(count);

  return (
    <>
      <Head>
        <title>{`Sujet ${sujet.id} de philosophie : ${sujet.Code} / ${sujet.Annee}`}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={`Sujet présenté en ${sujet.Annee}, en série ${sujet.Serie} et session ${sujet.Session}, en ${sujet.Destination}`}
        />
        <link
          rel="canonical"
          href={`/Annales-Bac-Sujets-Philosophie/${sujet.id}`}
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <S.ConteneurGeneral>
          <S.Conteneur>
            <S.Carre />
            <S.Cercle />
            <S.PartieD>
              <Filtres
                menu={menu}
                setListeSujet={(val) => setListeSujet(val)}
              />
              <SuivPrec listeSujet={listeSujet} />
              <AffichageSujet sujet={sujet} noResult={listeSujet.count === 0} />
            </S.PartieD>
          </S.Conteneur>
        </S.ConteneurGeneral>
      </Layout>
    </>
  );
};

A.getInitialProps = async ({ query }: any) => {
  const id = query["id-name"].split("-")[0];
  const res2: any = await Axios(`/sujets/t/${id}`);
  const res1 = await Axios(`/menu`);
  const res3 = await Axios(`/sujets/sujetscount`);

  return {
    sujet: res2.data.rows,
    count: res3.data,
    menu: res1.data,
  };
};

export default A;
