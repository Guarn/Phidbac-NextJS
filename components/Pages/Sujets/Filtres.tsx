import * as S from "./Styled";

import Axios from "../../Fonctionnels/Axios";
import { memo, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Divider from "../../UI/Divider";
import Button from "../../UI/Button";
import SelectMultiple from "../../UI/SelectMultiple";
import RadioGroup from "../../UI/RadioGroup";
import Slider from "../../UI/Slider";
import MenuSlide from "../../UI/MenuSlide";
import CheckGroup from "../../UI/CheckGroup";
import Input from "../../UI/Input";

export type AnneeT = {
  annee: number;
  menu: boolean;
};

export type AuteurT = {
  auteur: string;
  menu: boolean;

  nb_sujets: number;
};

export type DestinationT = {
  destination: string;
  menu: boolean;
};

export type NotionT = {
  notion: string;
  menu: boolean;
};

export type SerieT = {
  serie: string;
  menu: boolean;
};

export type SessionT = {
  session: string;
  menu: boolean;
};

export interface MenuI {
  setListeSujet: (val: any) => void;
  menu: {
    annees: AnneeT[];
    auteurs: AuteurT[];
    destinations: DestinationT[];
    notions: NotionT[];
    series: SerieT[];
    sessions: SessionT[];
  };
}

export interface ElementsCochesI {
  notions: string[];
  series: string[];
  annees: number[];
  destinations: string[];
  auteurs: string[];
  sessions: string[];
  recherche: string;
  typeRecherche: string;
}

const initialFiltresState = {
  notions: [],
  series: [],
  annees: [1996, 2019],
  destinations: [],
  auteurs: [],
  sessions: ["NORMALE", "REMPLACEMENT", "SECOURS", "NONDEFINI"],
  recherche: "",
  typeRecherche: "exacte",
};

const PartieFiltres: React.FC<MenuI> = ({ menu, setListeSujet }) => {
  const router = useRouter();
  const [state, setState] = useState<ElementsCochesI>(initialFiltresState);
  useEffect(() => {}, [state]);
  const rechercheInstantanee = async (e: any[], cat: string) => {
    setState({
      ...state,
      [cat]: e,
    });
    Axios.post("/resultatsAdmin", {
      elementsCoches: {
        ...state,
        [cat]: e,
      },
    }).then((rep) => {
      setListeSujet(rep.data);

      if (rep.data.count > 0) {
        router.push(
          "/Annales-Bac-Sujets-Philosophie/[id-name]",
          `/Annales-Bac-Sujets-Philosophie/${rep.data.rows[0].id}`
        );
      }
    });
  };

  const rechercheExpression = () => {
    Axios.post("/resultatsAdmin", {
      elementsCoches: state,
    }).then((rep) => {
      setListeSujet(rep.data);
      if (rep.data.count > 0) {
        router.push(
          "/Annales-Bac-Sujets-Philosophie/[id-name]",
          `/Annales-Bac-Sujets-Philosophie/${rep.data.rows[0].id}`
        );
      }
    });
  };
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <S.ConteneurFiltres>
        <MenuSlide defaultTab="0">
          <MenuSlide.Tabs icon="Filter" title="FILTRES" key="0">
            <Divider
              text="Notions"
              align="center"
              style={{ marginTop: "15px" }}
            />
            <SelectMultiple
              listeEntrees={menu.notions.map((val) => val.notion)}
              selected={state.notions}
              onChange={(e) => {
                rechercheInstantanee(e, "notions");
              }}
            />
            <Divider text="Séries" align="center" />
            <SelectMultiple
              selected={state.series}
              listeEntrees={menu.series.map((val) => val.serie)}
              onChange={(e) => rechercheInstantanee(e, "series")}
            />

            <Divider text="Destinations" align="center" />
            <SelectMultiple
              selected={state.destinations}
              listeEntrees={menu.destinations.map((val) => val.destination)}
              onChange={(e) => rechercheInstantanee(e, "destinations")}
            />
            <Divider text="Auteurs" align="center" />
            <SelectMultiple
              selected={state.auteurs}
              listeEntrees={menu.auteurs.map((val) => val.auteur)}
              onChange={(e) => rechercheInstantanee(e, "auteurs")}
            />
            <Divider text="Sessions" align="center" />
            <RadioGroup
              selected={
                state.sessions.length === 4 ? "TOUTES" : state.sessions[0]
              }
              onChange={(e) => {
                if (e === "TOUTES") {
                  rechercheInstantanee(
                    ["NORMALE", "REMPLACEMENT", "SECOURS", "NONDEFINI"],
                    "sessions"
                  );
                } else {
                  rechercheInstantanee(new Array(e), "sessions");
                }
              }}
            >
              <RadioGroup.Radio value="TOUTES">Toutes</RadioGroup.Radio>
              <RadioGroup.Radio value="NORMALE">Norm.</RadioGroup.Radio>
              <RadioGroup.Radio value="REMPLACEMENT">Rempl.</RadioGroup.Radio>
              <RadioGroup.Radio value="SECOURS">Secours</RadioGroup.Radio>
            </RadioGroup>
            <Divider text="Années" align="center" />
            <Slider
              range={[1996, 2019]}
              initialValue={state.annees}
              onChange={(e) => {
                rechercheInstantanee(e, "annees");
              }}
            />
            <Divider
              align="center"
              style={{
                marginBottom: "20px",
              }}
            />
            <Button
              onClick={() => {
                Axios.get("/sujets/sujetscount").then((rep) => {
                  setListeSujet(rep.data);
                  setState(initialFiltresState);
                  router.push(
                    "/Annales-Bac-Sujets-Philosophie/[id-name]",
                    `/Annales-Bac-Sujets-Philosophie/${rep.data.rows[0].id}`
                  );
                });
              }}
              size="normal"
              block
            >
              Réinitialiser les filtres
            </Button>
          </MenuSlide.Tabs>
          {
            // NOTE FILTRES EXPRESSION

            <MenuSlide.Tabs icon="Search" title="EXPRESSIONS" key="1">
              <div style={{ fontWeight: "bold", marginTop: "15px" }}>
                Recherche :
              </div>
              <Input
                initialValue={state.recherche}
                onChange={(val) => {
                  setState({ ...state, recherche: val.currentTarget.value });
                }}
                placeholder="un ou plusieurs mots, expression"
              />
              <CheckGroup
                style={{ marginTop: "10px" }}
                onChange={(val) => {
                  setState({
                    ...state,
                    typeRecherche: val.target.value,
                  });
                }}
                selected={state.typeRecherche}
              >
                <CheckGroup.Radio value="exacte">
                  Expression exacte
                </CheckGroup.Radio>
                <CheckGroup.Radio value="tousLesMots">
                  Tous les mots
                </CheckGroup.Radio>
                <CheckGroup.Radio value="unDesMots">
                  Un des mots
                </CheckGroup.Radio>
              </CheckGroup>
              <Divider align="center" />
              <Button
                style={{ marginTop: "15px" }}
                block
                onClick={() => {
                  Axios.get("/sujets/sujetscount").then((rep) => {
                    setListeSujet(rep.data);
                    setState(initialFiltresState);
                    if (rep.data.count > 0) {
                      router.push(
                        "/Annales-Bac-Sujets-Philosophie/[id-name]",
                        `/Annales-Bac-Sujets-Philosophie/${rep.data.rows[0].id}`
                      );
                    }
                  });
                }}
                size="small"
              >
                Réinitialiser les filtres
              </Button>
              <Button
                style={{ marginTop: "5px" }}
                block
                onClick={() => {
                  rechercheExpression();
                }}
              >
                Recherche
              </Button>
            </MenuSlide.Tabs>
          }
        </MenuSlide>
      </S.ConteneurFiltres>
    </div>
  );
};

export default memo(PartieFiltres);
