import Head from "next/head";
import Layout from "../../components/Layout";
import fetch from "isomorphic-unfetch";
import EditeurCours, {
  CoursI
} from "../../components/Fonctionnels/EditeurCours";
import * as S from "../../components/Pages/Cours/AffichageCours.styled";
import Link from "next/link";

export interface Props {
  cours: CoursI;
}

const AffichageExercice = ({ cours }: Props) => {
  return (
    <>
      <Head>
        <title>{`${cours.type?.toUpperCase()} : ${cours.Titre}`}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={cours.Description} />
        <link
          rel="canonical"
          href={`https://www.phidbac.fr/Liste-des-exercices/${
            cours.id
          }-${cours.Titre?.trim()
            .replace(/\u202f/g, "-")
            .replace(/ /gi, "-")
            .replace(/\//g, "-")}`}
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <S.Conteneur>
          <S.ConteneurBouton>
            <Link href="/Liste-des-exercices">
              <a>
                <S.BoutonRetour>Revenir à la liste d'exercices</S.BoutonRetour>
              </a>
            </Link>
          </S.ConteneurBouton>
          <EditeurCours
            cours={cours}
            affichage="Cours"
            tableMatiereShow={true}
          />
        </S.Conteneur>
      </Layout>
    </>
  );
};

export default AffichageExercice;

AffichageExercice.getInitialProps = async ({ query }: any) => {
  const id = query["id-name"].split("-")[0];
  const res = await fetch(`https://www.phidbac.fr:4000/exercices/${id}`);
  const data1 = await res.json();

  return {
    cours: { ...data1, Contenu: JSON.parse(data1.Contenu) }
  };
};
