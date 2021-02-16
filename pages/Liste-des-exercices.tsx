import Head from "next/head";
import { NextPage } from "next";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import ListeExercice from "../components/Pages/Exercices";
import Axios from "../components/Fonctionnels/Axios";

const index: NextPage = ({ listeDesExercices }: any) => {
  return (
    <>
      <Head>
        <title>{`Liste des exercices de philosophie`}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={`Exercices pour  la préparation au bac de philosophie.`}
        />
        <link
          rel="canonical"
          href={`https://www.phidbac.fr/Liste-des-exercices`}
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <ListeExercice listeCours={listeDesExercices} />
      </Layout>
    </>
  );
};

index.getInitialProps = async () => {
  const res = await Axios("/exercices/Liste");

  return {
    listeDesExercices: res.data,
  };
};

export default index;
