import Head from "next/head";
import Layout from "../components/Layout";
import PageIndex from "../components/Pages/Indexes";
import fetch from "isomorphic-unfetch";
import { ContenuCoursI } from "../components/Fonctionnels/EditeurCours";

export interface IndexI {
  nom: string;
  id: number;
  type: "auteur" | "notion" | "terme";
  lettre: string;
  description?: ContenuCoursI;
}

export interface Props {
  listeIndex: IndexI[];
  cours: IndexI;
  id: number;
}

const Indexes = ({ listeIndex, cours, id }: Props) => {
  return (
    <>
      <Head>
        <title>{`${cours.type?.toUpperCase()} : ${cours.nom}`}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={`Définition de l'index ${cours.nom}.`}
        />
        <link
          rel="canonical"
          href={`https://www.phidbac.fr/Liste-des-index/${cours.id}-${cours.nom
            ?.trim()
            .replace(" ", "-")
            .replace("/", "-")}`}
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

Indexes.getInitialProps = async () => {
  const res = await fetch("https://www.phidbac.fr:4000/Indexes");
  const data = await res.json();
  const res1 = await fetch("https://www.phidbac.fr:4000/Indexes/50");
  const data1 = await res1.json();

  return {
    listeIndex: data,
    cours: { ...data1, Contenu: [...data1.description] },
    id: 50
  };
};
