import * as S from "./Styled";
import cookie from "js-cookie";
import { UserI } from "./index";
import Icon from "../../../UI/Icons";

interface MenuConnecteI {
  user: UserI;
  userDispatch: (val: UserI) => void;
}

const MenuConnecte: React.FC<MenuConnecteI> = ({ user, userDispatch }) => {
  return (
    <S.ConteneurMenu>
      <S.BlocAvatar>
        {user.prenom!.charAt(0).toUpperCase() +
          user.nom!.charAt(0).toUpperCase()}
      </S.BlocAvatar>
      <S.BlocNomPrenom>{user.prenom + " " + user.nom}</S.BlocNomPrenom>
      <S.BlocGrade>{user.grade}</S.BlocGrade>
      <S.BlocIcones>
        <S.IconeSimple>
          <Icon type="Filter" />
        </S.IconeSimple>
        <S.IconeSimple>
          <Icon type="DocList" />
        </S.IconeSimple>
        <S.IconeSimple
          onMouseDown={() => {
            window.open("/admin", "_blank");
          }}
        >
          <Icon type="Close" />
        </S.IconeSimple>
      </S.BlocIcones>
      <S.BlocMessages>
        <S.Chiffre>15</S.Chiffre>
        <S.Texte>Messages</S.Texte>
      </S.BlocMessages>
      <S.BlocMessages>
        <S.Chiffre>0</S.Chiffre>
        <S.Texte>Notifications</S.Texte>
      </S.BlocMessages>
      <S.BlocDeco
        data-testid="a"
        onMouseDown={() => {
          cookie.remove("token", { domain: ".phidbac.fr", path: "/" });
          userDispatch({ connecte: false });
        }}
      >
        Déconnexion
      </S.BlocDeco>
    </S.ConteneurMenu>
  );
};

export default MenuConnecte;
