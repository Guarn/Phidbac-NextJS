import * as S from "./Styled";
import routes from "../../../../routes";
import { useRouter } from "next/router";
const { Link } = routes;

const Menu = () => {
  const router = useRouter();

  return (
    <S.Conteneur>
      <S.BoutonHome>
        <Link route="/">
          <S.BtnHomeLogo src="/Logo.jpg" />
        </Link>
      </S.BoutonHome>
      <S.ConteneurPartieDroite>
        <Link
          route="/Presentation-du-programme-et-des-epreuves"
          as="/Presentation-du-programme-et-des-epreuves"
        >
          <S.BoutonLien selected={router.route === "/Programme"}>
            Programme / Epreuves
          </S.BoutonLien>
        </Link>
        <S.BoutonLien selected={false}>Sujets</S.BoutonLien>
        <S.BoutonLien selected={false}>Cours</S.BoutonLien>
        <S.BoutonLien selected={false}>Exercices</S.BoutonLien>
        <Link route="/Liste-des-index">
          <S.BoutonLien selected={router.asPath.includes("Liste-des-index")}>
            Index
          </S.BoutonLien>
        </Link>
        <S.BoutonLien selected={false}>Se connecter</S.BoutonLien>
      </S.ConteneurPartieDroite>
    </S.Conteneur>
  );
};

export default Menu;
