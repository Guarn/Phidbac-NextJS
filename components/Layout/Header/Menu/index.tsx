import * as S from "./Styled";
import Link from "next/link";
import { useRouter } from "next/router";

const Menu = () => {
  const router = useRouter();

  return (
    <S.Conteneur>
      <S.BoutonHome>
        <Link href="/">
          <a>
            <S.BtnHomeLogo src="/Logo.jpg" />
          </a>
        </Link>
      </S.BoutonHome>
      <S.ConteneurPartieDroite>
        <Link href="/Presentation-du-programme-et-des-epreuves">
          <a>
            <S.BoutonLien
              selected={
                router.route === "/Presentation-du-programme-et-des-epreuves"
              }
            >
              Programme / Epreuves
            </S.BoutonLien>
          </a>
        </Link>
        <Link prefetch={false} href="/Annales-Bac-Sujets-Philosophie/1">
          <a>
            <S.BoutonLien
              selected={router.asPath.includes(
                "Annales-Bac-Sujets-Philosophie"
              )}
            >
              Annales
            </S.BoutonLien>
          </a>
        </Link>
        <Link href="/Liste-des-cours">
          <a>
            <S.BoutonLien selected={router.asPath.includes("Liste-des-cours")}>
              Cours
            </S.BoutonLien>
          </a>
        </Link>
        <Link href="/Liste-des-exercices">
          <a>
            <S.BoutonLien
              selected={router.asPath.includes("Liste-des-exercices")}
            >
              Exercices
            </S.BoutonLien>
          </a>
        </Link>
        <Link href="/Liste-des-index">
          <a>
            <S.BoutonLien selected={router.asPath.includes("Liste-des-index")}>
              Index
            </S.BoutonLien>
          </a>
        </Link>
        <S.BoutonLien selected={false}>Se connecter</S.BoutonLien>
      </S.ConteneurPartieDroite>
    </S.Conteneur>
  );
};

export default Menu;
