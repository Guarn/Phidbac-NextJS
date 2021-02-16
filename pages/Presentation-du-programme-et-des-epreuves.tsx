import Head from "next/head";
import Programme from "../components/Pages/Programme";
import { NextPage } from "next";
import Layout from "../components/Layout";
import Axios from "../components/Fonctionnels/Axios";

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
  const res = await Axios("/cours/1");

  return {
    cours: {
      titre: res.data[0].titre,
      description: res.data[0].description,
      contenu: JSON.parse(res.data[0].contenu),
      type: res.data[0].type,
    },
  };
};

export default ProgrammeEpreuve;
