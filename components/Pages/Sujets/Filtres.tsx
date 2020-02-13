import { Tabs, Select, Divider, Radio, Slider, Button, Input } from "antd";
import * as S from "./Styled";
import {
  FilterOutlined,
  ReloadOutlined,
  SearchOutlined,
  QuestionCircleOutlined
} from "@ant-design/icons";
import Axios from "../../Fonctionnels/Axios";
import { useState } from "react";
import { useRouter } from "next/router";

const { Option } = Select;

export type AnneeT = {
  Annee: number;
  Menu: boolean;
};

export type AuteurT = {
  Auteur: number;
  Menu: boolean;
  NbSujets: number;
};

export type DestinationT = {
  Destination: string;
  Menu: boolean;
};

export type NotionT = {
  Notion: string;
  Menu: boolean;
};

export type SerieT = {
  Serie: string;
  Menu: boolean;
};

export type SessionT = {
  Session: string;
  Menu: boolean;
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
  annees: [1996, 2018],
  destinations: [],
  auteurs: [],
  sessions: ["NORMALE", "REMPLACEMENT", "SECOURS", "NONDEFINI"],
  recherche: "",
  typeRecherche: "exacte"
};

const PartieFiltres: React.FC<MenuI> = ({ menu, setListeSujet }) => {
  const router = useRouter();
  const [state, setState] = useState(initialFiltresState);
  const rechercheInstantanee = async (e: any[], cat: string) => {
    setState({
      ...state,
      [cat]: e
    });
    Axios.post("/resultatsAdmin", {
      elementsCoches: {
        ...state,
        [cat]: e
      }
    }).then(rep => {
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
      elementsCoches: state
    }).then(rep => {
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
        position: "relative"
      }}
    >
      <S.ConteneurFiltres>
        <Tabs size="small" defaultActiveKey="1">
          <Tabs.TabPane
            tab={
              <span>
                <FilterOutlined />
                FILTRES
              </span>
            }
            key="1"
          >
            <Divider
              style={{
                marginBottom: "5px",
                marginTop: "0"
              }}
            >
              Notions
            </Divider>
            <Select
              mode="multiple"
              value={state.notions}
              style={{ width: "100%" }}
              placeholder="Toutes les notions"
              onChange={e => {
                rechercheInstantanee(e, "notions");
              }}
            >
              {menu.notions.map((el, index) => {
                return (
                  <Option key={el["Notion"]} value={el["Notion"]}>
                    {el["Notion"]}
                  </Option>
                );
              })}
            </Select>
            <Divider style={{ marginBottom: "5px" }}>Séries</Divider>

            <Select
              mode="multiple"
              value={state.series}
              style={{ width: "100%" }}
              placeholder="Toutes les séries"
              onChange={e => rechercheInstantanee(e, "series")}
            >
              {menu.series.map((el, index) => {
                return (
                  <Option key={el["Serie"]} value={el["Serie"]}>
                    {el["Serie"]}
                  </Option>
                );
              })}
            </Select>

            <Divider style={{ marginBottom: "5px" }}>Destinations</Divider>
            <Select
              mode="multiple"
              value={state.destinations}
              style={{ width: "100%" }}
              placeholder="Toutes les destinations"
              onChange={e => rechercheInstantanee(e, "destinations")}
            >
              {menu.destinations.map((el, index) => {
                return (
                  <Option key={el["Destination"]} value={el["Destination"]}>
                    {el["Destination"]}
                  </Option>
                );
              })}
            </Select>
            <Divider style={{ marginBottom: "5px" }}>Auteurs</Divider>
            <Select
              mode="multiple"
              value={state.auteurs}
              style={{ width: "100%" }}
              placeholder="Tous les auteurs"
              onChange={e => rechercheInstantanee(e, "auteurs")}
            >
              {menu.auteurs.map(el => {
                return (
                  <Option key={el["Auteur"]} value={el["Auteur"]}>
                    {el["Auteur"] + " (" + el["NbSujets"] + ")"}
                  </Option>
                );
              })}
            </Select>

            <Divider style={{ marginBottom: "5px" }}>Sessions</Divider>
            <Radio.Group
              size="small"
              value={state.sessions.length === 4 ? "TOUTES" : state.sessions}
              onChange={e => {
                if (e.target.value === "TOUTES") {
                  rechercheInstantanee(
                    ["NORMALE", "REMPLACEMENT", "SECOURS", "NONDEFINI"],
                    "sessions"
                  );
                } else {
                  rechercheInstantanee(e.target.value, "sessions");
                }
              }}
            >
              <Radio.Button value="TOUTES">Toutes</Radio.Button>
              <Radio.Button value="NORMALE">Norm.</Radio.Button>
              <Radio.Button value="REMPLACEMENT">Rempl.</Radio.Button>
              <Radio.Button value="SECOURS">Secours</Radio.Button>
            </Radio.Group>

            <Divider style={{ marginBottom: "5px" }}>Années</Divider>
            <Slider
              range
              style={{
                marginLeft: "6%",
                marginRight: "6%"
              }}
              max={2018}
              min={1996}
              value={[state.annees[0], state.annees[1]]}
              marks={{
                [state.annees[0].toString()]: state.annees[0].toString(),
                [state.annees[1].toString()]: state.annees[1].toString()
              }}
              step={1}
              tooltipVisible={false}
              onChange={(e: any) => {
                let valeurBasse = e[0];
                let valeurHaute = e[1];

                rechercheInstantanee([valeurBasse, valeurHaute], "annees");
              }}
            />

            <Divider style={{ marginTop: "40px" }} />
            <Button
              onClick={() => {
                Axios.get("/sujets/sujetscount").then(rep => {
                  setListeSujet(rep.data);
                  setState(initialFiltresState);
                  router.push(
                    "/Annales-Bac-Sujets-Philosophie/[id-name]",
                    `/Annales-Bac-Sujets-Philosophie/${rep.data.rows[0].id}`
                  );
                });
              }}
              size="small"
              style={{
                backgroundColor: "#e2e0d8",
                borderColor: "#919191",
                height: "30px"
              }}
              block
            >
              Réinitialiser les filtres
              <ReloadOutlined />
            </Button>
          </Tabs.TabPane>
          {
            // NOTE FILTRES EXPRESSION

            <Tabs.TabPane
              tab={
                <span>
                  <SearchOutlined />
                  EXPRESSION
                </span>
              }
              key="2"
            >
              <div style={{ fontWeight: "bold" }}>Recherche :</div>
              <Input
                value={state.recherche}
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderColor: "rgba(0,0,0,0.3)",
                  marginTop: "10px",
                  marginBottom: "10px"
                }}
                onChange={val => {
                  setState({ ...state, recherche: val.target.value });
                }}
                placeholder="un ou plusieurs mots, expression"
              ></Input>
              <Radio.Group
                onChange={val => {
                  setState({ ...state, typeRecherche: val.target.value });
                }}
                value={state.typeRecherche}
              >
                <Radio value="exacte">
                  Expression exacte
                  <QuestionCircleOutlined
                    style={{
                      color: "grey",
                      marginLeft: "5px"
                    }}
                  />
                </Radio>
                <Radio value="tousLesMots">
                  Tous les mots
                  <QuestionCircleOutlined
                    style={{
                      color: "grey",
                      marginLeft: "5px"
                    }}
                  />
                </Radio>
                <Radio value="unDesMots">
                  Un des mots
                  <QuestionCircleOutlined
                    style={{
                      color: "grey",
                      marginLeft: "5px"
                    }}
                  />
                </Radio>
              </Radio.Group>
              <Divider style={{ marginTop: "40px" }} />
              <Button
                onClick={() => {
                  Axios.get("/sujets/sujetscount").then(rep => {
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
                style={{
                  marginBottom: "10px",
                  backgroundColor: "#e2e0d8",
                  borderColor: "#919191"
                }}
                block
              >
                Réinitialiser les filtres
                <ReloadOutlined />
              </Button>
              <Button
                onClick={() => {
                  rechercheExpression();
                }}
                size="large"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderColor: "rgba(0,0,0,0.3)"
                }}
                block
              >
                <SearchOutlined />
                Recherche
              </Button>
            </Tabs.TabPane>
          }
        </Tabs>
      </S.ConteneurFiltres>
    </div>
  );
};

export default PartieFiltres;
