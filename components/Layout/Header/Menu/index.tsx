import * as S from "./Styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Drawer from "../../../UI/Drawer";
import Icon from "../../../UI/Icons";
import Modal from "../../../UI/Modal";
import FormBasic from "./FormBasic";
import cookie from "js-cookie";
import Axios from "../../../Fonctionnels/Axios";
import { userInfo } from "os";

const BoutonMenu = styled.div`
  font-size: 20px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
  margin-bottom: 15px;
  margin-top: 16px;
  font-family: "century-gothic";
  &:hover {
    color: ${props => props.theme.texteSecondaryColor};
  }
`;

const Phi = styled.span`
  color: ${props => props.theme.texteSecondaryColor};
  font-family: "Century Gothic";
`;

const TexteTitre = styled.div`
  font-size: 24px;
  margin: 10px;
`;
interface UserI {
  connecte: boolean;
  prenom?: string;
  nom?: string;
  email?: string;
  grade?: "Administrateur" | "Visiteur" | "Eleve";
}

const Menu = () => {
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState<UserI>({ connecte: false });

  useEffect(() => {
    if (cookie.get("token")) {
      if (!user.connecte) {
        Axios.get("/p")
          .then(rep => {
            setUser({ ...rep.data, connecte: true });
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  });

  return (
    <S.Menu>
      <S.AffichageDesktop>
        <S.BoutonHome>
          <Link prefetch={false} href="/">
            <a>
              <S.BtnHomeLogo src="/favicon.jpg" />
            </a>
          </Link>
        </S.BoutonHome>
        <S.ConteneurPartieDroite>
          <Link
            prefetch={false}
            href="/Presentation-du-programme-et-des-epreuves"
          >
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
          <Link
            prefetch={false}
            href="/Annales-Bac-Sujets-Philosophie/[id-name]"
            as="/Annales-Bac-Sujets-Philosophie/1"
          >
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
          <Link prefetch={false} href="/Liste-des-cours">
            <a>
              <S.BoutonLien
                selected={router.asPath.includes("Liste-des-cours")}
              >
                Cours
              </S.BoutonLien>
            </a>
          </Link>
          <Link prefetch={false} href="/Liste-des-exercices">
            <a>
              <S.BoutonLien
                selected={router.asPath.includes("Liste-des-exercices")}
              >
                Exercices
              </S.BoutonLien>
            </a>
          </Link>
          <Link
            prefetch={false}
            href="/Liste-des-index/[id-name]"
            as="/Liste-des-index/50"
          >
            <a>
              <S.BoutonLien
                selected={router.asPath.includes("Liste-des-index")}
              >
                Index
              </S.BoutonLien>
            </a>
          </Link>

          {!user.connecte && (
            <S.BoutonLien selected={false} onClick={() => setShowModal(true)}>
              Se connecter
              <Modal
                style={{
                  padding: "20px",
                  minWidth: "300px"
                }}
                showModal={showModal}
                closeModal={() => setShowModal(false)}
              >
                <FormBasic onCompleted={() => setShowModal(false)} />
              </Modal>
            </S.BoutonLien>
          )}
          {user.connecte && (
            <S.BoutonLien selected={true} onClick={() => setShowModal(true)}>
              {user.prenom + " " + user.nom}
            </S.BoutonLien>
          )}
        </S.ConteneurPartieDroite>
      </S.AffichageDesktop>

      <S.AffichageTabletMobile>
        <Drawer show={menu} close={() => setMenu(false)}>
          <Link prefetch={false} href="/">
            <a>
              <S.BoutonLien selected={router.route === "/"}>
                Accueil
              </S.BoutonLien>
            </a>
          </Link>
          <Link
            prefetch={false}
            href="/Presentation-du-programme-et-des-epreuves"
          >
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
          <Link prefetch={false} href="/Liste-des-cours">
            <a>
              <S.BoutonLien
                selected={router.asPath.includes("Liste-des-cours")}
              >
                Cours
              </S.BoutonLien>
            </a>
          </Link>
          <Link prefetch={false} href="/Liste-des-exercices">
            <a>
              <S.BoutonLien
                selected={router.asPath.includes("Liste-des-exercices")}
              >
                Exercices
              </S.BoutonLien>
            </a>
          </Link>
          <Link prefetch={false} href="/Liste-des-index/50">
            <a>
              <S.BoutonLien
                selected={router.asPath.includes("Liste-des-index")}
              >
                Index
              </S.BoutonLien>
            </a>
          </Link>
        </Drawer>
        <BoutonMenu onClick={() => setMenu(true)}>
          MENU
          <Icon type="Menu" style={{ marginLeft: "5px" }} />
        </BoutonMenu>
        <TexteTitre>
          <Phi>φ</Phi>d<Phi>'</Phi>
          bac
          <Phi>'</Phi>!
        </TexteTitre>
      </S.AffichageTabletMobile>
    </S.Menu>
  );
};

export default Menu;
