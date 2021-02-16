import Head from "next/head";
import Layout from "../../components/Layout";
import fetch from "isomorphic-unfetch";
import EditeurCours, {
  CoursI,
} from "../../components/Fonctionnels/EditeurCours";
import * as S from "../../components/Pages/Cours/AffichageCours.styled";
import Link from "next/link";
import Button from "../../components/UI/Button";
import { useEffect, useState } from "react";
import Axios from "../../components/Fonctionnels/Axios";

export interface Props {
  cours: CoursI;
}

const AffichageExercice = ({ cours }: Props) => {
  const [El, setEl] = useState<number>();
  useEffect(() => {
    if (typeof document !== "undefined") {
      setEl(
        document.getElementById("element-0")?.getBoundingClientRect().left ?? 0
      );
    }
  });
  return (
    <>
      <Head>
        <title>{`${cours.type?.toUpperCase()} : ${cours.titre}`}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={cours.description} />
        <link
          rel="canonical"
          href={`https://www.phidbac.fr/Liste-des-exercices/${
            cours.id
          }-${cours.titre
            ?.trim()
            .replace(/\u202f/g, "-")
            .replace(/ /gi, "-")
            .replace(/\//g, "-")}`}
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <S.Conteneur>
          <S.ConteneurBouton left={El}>
            <Link href="/Liste-des-exercices">
              <a>
                <Button icon="LeftArrow" position="left" size="normal">
                  <S.NoDisplayTabletMobile>
                    {" "}
                    Revenir à la liste d'exercices
                  </S.NoDisplayTabletMobile>
                </Button>
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
  const res: any = await Axios(`/exercices/${id}`);

  return {
    cours: { ...res.data[0], contenu: JSON.parse(res.data["0"].contenu) },
  };
};
