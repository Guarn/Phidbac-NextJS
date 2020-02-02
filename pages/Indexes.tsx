import Head from "next/head";
import Layout from "../components/Layout";
import PageIndex from "../components/Pages/Indexes";
import fetch from "isomorphic-unfetch";
import { useState } from "react";

const Indexes = ({ listeIndex, cours, id }: any) => {
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
        <PageIndex listeIndex={listeIndex} id={id} cours={cours} />
      </Layout>
    </>
  );
};

export default Indexes;

Indexes.getInitialProps = async ({ req }: any) => {
  console.log(req);

  const res = await fetch("https://www.phidbac.fr:4000/Indexes");
  const data = await res.json();
  const res1 = await fetch("https://www.phidbac.fr:4000/Indexes/50");
  const data1 = await res1.json();

  return {
    listeIndex: data,
    cours: data1,
    id: 50
  };
};
