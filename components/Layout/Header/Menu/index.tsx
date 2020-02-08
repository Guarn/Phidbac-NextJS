import * as S from "./Styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Desktop, TabletMobile } from "../../../Fonctionnels/responsive";
import { Drawer, Icon } from "antd";
import styled from "styled-components";

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
    color: orange;
  }
`;

const Phi = styled.span`
  color: orange;
  font-family: "Century Gothic";
`;

const TexteTitre = styled.div`
  font-size: 30px;
  margin: 10px;
`;

const Menu = () => {
  const router = useRouter();
  const [menu, setMenu] = useState(false);

  return (
    <S.Conteneur>
      <Desktop>
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
              <S.BoutonLien
                selected={router.asPath.includes("Liste-des-cours")}
              >
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
          <Link href="/Liste-des-index/50">
            <a>
              <S.BoutonLien
                selected={router.asPath.includes("Liste-des-index")}
              >
                Index
              </S.BoutonLien>
            </a>
          </Link>
          <S.BoutonLien selected={false}>Se connecter</S.BoutonLien>
        </S.ConteneurPartieDroite>
      </Desktop>
      <TabletMobile>
        <Drawer
          placement="left"
          visible={menu}
          onClose={() => setMenu(false)}
          title="PHIDBAC"
        >
          <Link href="/">
            <a>
              <S.BoutonLien selected={router.route === "/"}>
                Accueil
              </S.BoutonLien>
            </a>
          </Link>
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
              <S.BoutonLien
                selected={router.asPath.includes("Liste-des-cours")}
              >
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
          <Link href="/Liste-des-index/50">
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
          <Icon style={{ marginLeft: "5px" }} type="menu" />
        </BoutonMenu>
        <TexteTitre>
          <Phi>φ</Phi>d<Phi>'</Phi>
          bac
          <Phi>'</Phi>!
        </TexteTitre>
      </TabletMobile>
    </S.Conteneur>
  );
};

export default Menu;
