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
import { useState } from "react";
import Head from "next/head";

export interface SujetCountI {
  sujet: any;
  count: any;
  menu: any;
}

const A: NextPage<SujetCountI> = ({ sujet, count, menu }) => {
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
          href={`https://www.phidbac.fr/Annales-Bac-Sujets-Philosophie/${sujet.id}`}
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <S.ConteneurGeneral>
          <S.Conteneur>
            <S.Carre />
            <S.Cercle />
            <S.PartieD>
              <Filtres menu={menu} setListeSujet={val => setListeSujet(val)} />
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
  const res2 = await fetch(`https://www.phidbac.fr:4000/sujets/t/${id}`);
  const data = await res2.json();
  const res1 = await fetch(`https://www.phidbac.fr:4000/menu`);
  const data1 = await res1.json();
  const res3 = await fetch(`https://www.phidbac.fr:4000/sujets/sujetscount`);
  const data3 = await res3.json();

  return {
    sujet: data.rows,
    count: data3,
    menu: data1
  };
};

export default A;
