import Head from "next/head";
import { NextPage } from "next";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import ListeCours from "../components/Pages/Cours";

const index: NextPage = ({ listeDesCours }: any) => {
  return (
    <>
      <Head>
        <title>{`Liste des cours de philosophie`}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={`Liste des cours de philosophie, étude d'oeuvres., analyse de texte.`}
        />
        <link rel="canonical" href={`https://www.phidbac.fr/Liste-des-cours`} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <ListeCours listeCours={listeDesCours} />
      </Layout>
    </>
  );
};

index.getInitialProps = async () => {
  const res = await fetch("https://www.phidbac.fr:4000/Cours/Liste");
  const data = await res.json();

  return {
    listeDesCours: data
  };
};

export default index;
