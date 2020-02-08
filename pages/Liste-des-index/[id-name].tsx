import Head from "next/head";
import Layout from "../../components/Layout";
import PageIndex from "../../components/Pages/Indexes";
import fetch from "isomorphic-unfetch";
import { Props } from "../Liste-des-index";

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
            .replace(/\u202f/g, "-")
            .replace(/ /gi, "-")
            .replace(/\//g, "-")}`}
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

Indexes.getInitialProps = async ({ query }: any) => {
  const id = query["id-name"].split("-")[0];
  const res = await fetch("https://www.phidbac.fr:4000/Indexes");
  const data = await res.json();
  const res1 = await fetch(`https://www.phidbac.fr:4000/Indexes/${id}`);
  const data1 = await res1.json();

  return {
    listeIndex: data,
    cours: { ...data1, Contenu: data1.description ?? indexVide },
    id: id
  };
};

const indexVide = [
  {
    value: [
      {
        type: "h3",
        id: 1,
        align: "center",
        children: [{ text: "Cet index n'a pas encore été complété." }]
      }
    ],
    type: "h1",
    TableMatiere: {
      actif: false,
      value: "TITRE",
      type: "titre",
      position: 0
    },
    options: {
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      backgroundColor: "",
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0
    },
    image: false,
    imageOptions: {
      align: "left",
      height: "40px",
      width: "40px",
      legende: "Description",
      ratioActif: false,
      ratio: 1,
      lienType: "WEB",
      lienActif: false,
      lien: "",
      src:
        "https://www.mydiscprofile.com/fr-fr/_images/homepage-free-personality-test.png"
    }
  }
];
