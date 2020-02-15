import Head from "next/head";
import Layout from "../../components/Layout";
import fetch from "isomorphic-unfetch";
import Button from "../../components/UI/Button";

import EditeurCours, {
  CoursI
} from "../../components/Fonctionnels/EditeurCours";
import * as S from "../../components/Pages/Cours/AffichageCours.styled";
import Link from "next/link";
import { useEffect, useState } from "react";

export interface Props {
  cours: CoursI;
}

const AffichageCours = ({ cours }: Props) => {
  const [El, setEl] = useState();
  useEffect(() => {
    if (typeof document !== "undefined") {
      setEl(
        document.getElementById("element-0")?.getBoundingClientRect().left ?? 0
      );
    }
  }, []);
  return (
    <>
      <Head>
        <title>{`${cours.type?.toUpperCase()} : ${cours.Titre}`}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={cours.Description} />
        <link
          rel="canonical"
          href={`https://www.phidbac.fr/Liste-des-cours/${
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
          <S.ConteneurBouton left={El ?? 0}>
            <Link href="/Liste-des-cours">
              <a>
                <Button icon="LeftArrow" position="left" size="normal">
                  <S.NoDisplayTabletMobile>
                    Revenir à la liste de cours
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

export default AffichageCours;

AffichageCours.getInitialProps = async ({ query }: any) => {
  const id = query["id-name"].split("-")[0];
  const res = await fetch(`https://www.phidbac.fr:4000/cours/${id}`);
  const data1 = await res.json();

  return {
    cours: { ...data1, Contenu: JSON.parse(data1.Contenu) }
  };
};
