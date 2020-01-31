import * as S from "./Styled";
import routes from "../../../../routes";
const { Link } = routes;

const Menu = () => {
  return (
    <S.Conteneur>
      <S.BoutonHome>
        <Link route="/">
          <S.BtnHomeLogo src="/Logo.jpg" />
        </Link>
      </S.BoutonHome>
      <S.ConteneurPartieDroite>
        <Link route="/Presentation-du-programme-et-des-epreuves">
          <S.BoutonLien>Programme / Epreuves</S.BoutonLien>
        </Link>
        <S.BoutonLien>Sujets</S.BoutonLien>
        <S.BoutonLien>Cours</S.BoutonLien>
        <S.BoutonLien>Exercices</S.BoutonLien>
        <S.BoutonLien>Index</S.BoutonLien>
        <S.BoutonLien>Se connecter</S.BoutonLien>
      </S.ConteneurPartieDroite>
    </S.Conteneur>
  );
};

export default Menu;
