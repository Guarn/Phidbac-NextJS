import Head from "next/head";
import Programme from "../components/Pages/Programme";
import { NextPage } from "next";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";

const ProgrammeEpreuve: NextPage = (props: any) => {
  return (
    <>
      <Head>
        <title>Présentation du programme et des épreuves</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={`Présentation du programme et des épreuves du bac de philosophie, et fonctionnement de Phidbac.`}
        />
        <link
          rel="canonical"
          href={`https://www.phidbac.fr/Presentation-du-programme-et-des-epreuves`}
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Programme cours={props.cours} />
      </Layout>
    </>
  );
};

ProgrammeEpreuve.getInitialProps = async () => {
  const res = await fetch("https://www.phidbac.fr:4000/Cours/1");
  const data = await res.json();

  return {
    cours: {
      Titre: data.Titre,
      Description: data.Description,
      Contenu: JSON.parse(data.Contenu),
      type: data.type
    }
  };
};

export default ProgrammeEpreuve;
