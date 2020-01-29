import Accueil from "../components/Pages/Accueil";
import Head from "next/head";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Phidbac, la philosophie du bac</title>
        <meta
          name="description"
          content="Préparation de A à Z à l'épreuve de philosophie du nouveau bac (Juin 2021). Plus de 1100 sujets du Bac, des cours, des exercices, et un index complet des auteurs/notions/termes."
        />
        <link rel="canonical" href="https://www.phidbac.fr/" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Accueil />
      </Layout>
    </>
  );
};

export default Home;
