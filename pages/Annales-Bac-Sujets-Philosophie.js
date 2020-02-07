import React, {
  useEffect,
  useRef,
  useReducer,
  createContext,
  useContext,
  Dispatch,
  useState
} from "react";
import * as S from "../components/Pages/Sujets/Styled";
import {
  Icon,
  Tabs,
  Input,
  Radio,
  Divider,
  Button,
  Select,
  Slider
} from "antd";
import { Transition } from "react-transition-group";
import {
  sujetReducer,
  initialState
} from "../components/Pages/Sujets/reducers";
import Axios from "../components/Fonctionnels/Axios";
import Layout from "../components/Layout";

import ReactQuill from "../components/Fonctionnels/Quill";

const { Option } = Select;

const duration = 200;

const styleFiltres = {
  transition: `all ${400}ms `,
  opacity: 0,
  transform: "translateY(-20px)"
};

const transitionFiltres = {
  entering: { opacity: 0, transform: "translateY(-20px)" },
  entered: { opacity: 1, transform: "translateY(0px)" }
};

const styleSujet = {
  opacity: 0,
  transition: `all 100ms `
};

const transitionSujet = {
  entering: {
    opacity: 0
  },
  entered: {
    opacity: 1
  },

  exited: {
    opacity: 0
  }
};

const transitionSuivPrec = {
  entering: { opacity: 0 },
  entered: { opacity: 1 }
};
const styleSuivPrec = {
  transition: `all ${duration}ms`,
  opacity: 0
};

const stateContext = createContext(null);

const Sujets = () => {
  const [state, setState] = useReducer(sujetReducer, initialState);
  const { nbSujets } = state.listeSujets;
  const { loading } = state;

  useEffect(() => {
    Axios.get("/menu").then(rep => {
      setState({ type: "FetchMenu", value: rep.data });
    });
    Axios.get("/sujets/sujetscount").then(rep => {
      setState({
        type: "FetchSujet",
        value: rep.data.rows,
        count: rep.data.count
      });
    });
  }, []);

  return (
    <Layout>
      <S.ConteneurGeneral>
        <stateContext.Provider value={[state, setState]}>
          <S.Conteneur>
            <S.Carre />
            <S.Cercle />
            <S.PartieD>
              <PartieFiltres />
              <SuivPrec />
              {nbSujets !== 0 && <AffichageSujet />}
              {nbSujets === 0 && !loading && (
                <S.ConteneurSujet style={{ textAlign: "center" }}>
                  Aucun résultat ne correspond à ces critères.
                </S.ConteneurSujet>
              )}
            </S.PartieD>
          </S.Conteneur>
        </stateContext.Provider>
      </S.ConteneurGeneral>
    </Layout>
  );
};

export default Sujets;

/**
 *  Gère l'affichage des 3 énoncés.
 *
 */

const AffichageSujet = () => {
  const [state, setState] = useContext(stateContext);
  const { id } = state.sujetVisible;
  const { loading } = state;
  const { sujets, nbSujets } = state.listeSujets;
  const { filtres, actif } = state.filtres;
  const [sujetAffiche, setSujetAffiche] = useState();

  useEffect(() => {
    if (id !== 0) {
      Axios.get(`/sujets/t/${sujets[id - 1].id}`).then(rep => {
        setSujetAffiche(rep.data.rows);
        setState({ type: "Loading", value: false });
      });
    }
  }, [id, sujets, nbSujets, actif, setState]);

  return (
    <>
      <Transition
        in={!loading}
        timeout={{
          appear: 0,
          enter: 0,
          exit: 0
        }}
        appear
        enter
        mountOnEnter
      >
        {params => (
          <S.TransitionAffichage
            style={{
              ...styleSujet,
              ...transitionSujet[params]
            }}
          >
            <S.ConteneurSujet>
              <Enonce
                numSujet={1}
                texte={sujetAffiche.Sujet1}
                notions={sujetAffiche.Notions1}
                filtres={filtres}
                actif={state.filtres.actif}
              />
              <Enonce
                numSujet={2}
                texte={sujetAffiche.Sujet2}
                notions={sujetAffiche.Notions2}
                filtres={filtres}
                actif={state.filtres.actif}
              />
              <Enonce
                numSujet={3}
                texte={sujetAffiche.Sujet3}
                notions={sujetAffiche.Notions3}
                filtres={filtres}
                actif={state.filtres.actif}
              />
              <S.Details>
                <S.PartieGauche>
                  <S.Etiquette>{sujetAffiche?.id ?? ""}</S.Etiquette>
                  <S.Etiquette>{sujetAffiche?.Annee ?? ""}</S.Etiquette>
                  <S.Etiquette>{sujetAffiche?.Serie ?? ""}</S.Etiquette>
                  <S.Etiquette>{sujetAffiche?.Destination ?? ""}</S.Etiquette>
                  <S.Etiquette>{sujetAffiche?.Session ?? ""}</S.Etiquette>
                  <S.Etiquette>{sujetAffiche?.Code ?? ""}</S.Etiquette>
                </S.PartieGauche>
              </S.Details>
            </S.ConteneurSujet>
          </S.TransitionAffichage>
        )}
      </Transition>
    </>
  );
};

const Enonce = ({ numSujet, texte, notions, filtres, actif }) => {
  const refQuill = useRef();

  //TODO Reprogrammer surlignage des mots lors de la recherche
  /*
  useEffect(() => {
    if (typeof window !== "undefined" && filtres.recherche !== "" && actif) {
      console.log(refQuill);

      let editor = refQuill.current.getEditor();
      let unst = refQuill.current.makeUnprivilegedEditor(editor);
      let tabRecherche = filtres.recherche.trim().split(" ");
      tabRecherche.map(item => {
        let reg = new RegExp(item.trim(), "gi");
        let regex = reg,
          result;
        while ((result = regex.exec(unst.getText()))) {
          editor.formatText(
            result.index,
            item.trim().length,
            "background-color",
            "yellow"
          );
        }
        return null;
      });
    }
  });*/
  return (
    <S.Sujet>
      <S.TitreNotions>
        <S.Titre>{numSujet}</S.Titre>
        <S.Notions>{notions.join(" ") ?? ""}</S.Notions>
      </S.TitreNotions>
      <S.CorpsSujet>
        <ReactQuill
          ref={refQuill}
          value={texte}
          modules={{ toolbar: false }}
          readOnly
          theme="bubble"
        />
      </S.CorpsSujet>
    </S.Sujet>
  );
};

/**
 * Gestion des filtres asssociés à la recherche de sujet.
 */

const PartieFiltres = () => {
  const [state, setState] = useContext(stateContext);
  const { filtres, menu } = state.filtres;

  const rechercheInstantanee = async (e, cat) => {
    setState({
      type: "ChangeFiltres",
      value: e,
      cat
    });
    Axios.post("/resultatsAdmin", {
      elementsCoches: {
        ...state.filtres.filtres,
        [cat]: e
      }
    }).then(rep => {
      setState({
        type: "Recherche",
        sujets: rep.data.rows,
        nbSujets: rep.data.count
      });
    });
  };
  const rechercheExpression = (e, cat) => {
    setState({
      type: "ChangeFiltres",
      value: e,
      cat
    });
  };
  useEffect(() => {}, [filtres]);
  return (
    <Transition
      appear
      enter
      mountOnEnter
      in={true}
      timeout={{
        appear: 0,
        enter: 0
      }}
    >
      {params => (
        <div
          style={{
            position: "relative",
            ...styleFiltres,
            ...transitionFiltres[params]
          }}
        >
          <S.ConteneurFiltres>
            <Tabs
              size="small"
              defaultActiveKey="1"
              onChange={() => {
                Axios.get("/sujets/sujetscount").then(rep => {
                  setState({
                    type: "FetchSujet",
                    value: rep.data.rows,
                    count: rep.data.count
                  });
                  setState({
                    type: "ChangementID",
                    value: 1
                  });
                });
              }}
            >
              <Tabs.TabPane
                tab={
                  <span>
                    <Icon type="filter" />
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
                  style={{ width: "100%" }}
                  value={filtres?.notions}
                  placeholder="Toutes les notions"
                  onChange={e => {
                    rechercheInstantanee(e, "notions");
                  }}
                >
                  {menu &&
                    menu.notions &&
                    menu.notions.map((el, index) => {
                      return <Option key={el["Notion"]}>{el["Notion"]}</Option>;
                    })}
                </Select>
                <Divider style={{ marginBottom: "5px" }}>Séries</Divider>
                <Select
                  mode="multiple"
                  value={filtres?.series}
                  style={{ width: "100%" }}
                  placeholder="Toutes les séries"
                  onChange={e => rechercheInstantanee(e, "series")}
                >
                  {menu &&
                    menu.series &&
                    menu.series.map((el, index) => {
                      return <Option key={el["Serie"]}>{el["Serie"]}</Option>;
                    })}
                </Select>
                <Divider style={{ marginBottom: "5px" }}>Destinations</Divider>
                <Select
                  mode="multiple"
                  value={filtres?.destinations}
                  style={{ width: "100%" }}
                  placeholder="Toutes les destinations"
                  onChange={e => rechercheInstantanee(e, "destinations")}
                >
                  {menu &&
                    menu.destinations &&
                    menu.destinations.map((el, index) => {
                      return (
                        <Option key={el["Destination"]}>
                          {el["Destination"]}
                        </Option>
                      );
                    })}
                </Select>
                <Divider style={{ marginBottom: "5px" }}>Auteurs</Divider>
                <Select
                  mode="multiple"
                  value={filtres?.auteurs}
                  style={{ width: "100%" }}
                  placeholder="Tous les auteurs"
                  onChange={e => rechercheInstantanee(e, "auteurs")}
                >
                  {menu &&
                    menu.auteurs &&
                    menu.auteurs.map(el => {
                      return (
                        <Option key={el["Auteur"]}>
                          {el["Auteur"] + " (" + el["NbSujets"] + ")"}
                        </Option>
                      );
                    })}
                </Select>
                <Divider style={{ marginBottom: "5px" }}>Sessions</Divider>
                <Radio.Group
                  size="small"
                  value={
                    typeof filtres?.sessions !== "string"
                      ? "TOUTES"
                      : filtres?.sessions
                  }
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
                  max={2019}
                  min={1996}
                  marks={{
                    [filtres.annees[0]]: filtres.annees[0],
                    [filtres.annees[filtres.annees.length - 1]]:
                      filtres.annees[filtres.annees.length - 1]
                  }}
                  step={1}
                  tooltipVisible={false}
                  value={[filtres.annees[0], filtres.annees[1]]}
                  onChange={e => {
                    let valeurBasse = e[0];
                    let valeurHaute = e[1];

                    rechercheInstantanee([valeurBasse, valeurHaute], "annees");
                  }}
                />
                <Divider style={{ marginTop: "40px" }} />
                <Button
                  onMouseDown={() => {
                    Axios.get("/sujets/sujetscount").then(rep => {
                      setState({
                        type: "FetchSujet",
                        value: rep.data.rows,
                        count: rep.data.count
                      });
                      setState({
                        type: "ChangementID",
                        value: 1
                      });
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
                  <Icon type="reload" />
                </Button>
              </Tabs.TabPane>
              {
                // NOTE FILTRES EXPRESSION
              }
              <Tabs.TabPane
                tab={
                  <span>
                    <Icon type="search" />
                    EXPRESSION
                  </span>
                }
                key="2"
              >
                <div style={{ fontWeight: "bold" }}>Recherche :</div>
                <Input
                  value={filtres.recherche}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderColor: "rgba(0,0,0,0.3)",
                    marginTop: "10px",
                    marginBottom: "10px"
                  }}
                  onChange={val => {
                    rechercheExpression(val.target.value, "recherche");
                  }}
                  placeholder="un ou plusieurs mots, expression"
                ></Input>
                <Radio.Group
                  onChange={val => {
                    rechercheExpression(val.target.value, "typeRecherche");
                  }}
                  value={filtres?.typeRecherche}
                >
                  <Radio value="exacte">
                    Expression exacte
                    <Icon
                      type="question-circle"
                      style={{
                        color: "grey",
                        marginLeft: "5px"
                      }}
                    />
                  </Radio>
                  <Radio value="tousLesMots">
                    Tous les mots
                    <Icon
                      type="question-circle"
                      style={{
                        color: "grey",
                        marginLeft: "5px"
                      }}
                    />
                  </Radio>
                  <Radio value="unDesMots">
                    Un des mots
                    <Icon
                      type="question-circle"
                      style={{
                        color: "grey",
                        marginLeft: "5px"
                      }}
                    />
                  </Radio>
                </Radio.Group>
                <Divider style={{ marginTop: "40px" }} />
                <Button
                  onMouseDown={() => {
                    Axios.get("/sujets/sujetscount").then(rep => {
                      setState({
                        type: "FetchSujet",
                        value: rep.data.rows,
                        count: rep.data.count
                      });
                      setState({
                        type: "ChangementID",
                        value: 1
                      });
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
                  <Icon type="reload" />
                </Button>
                <Button
                  onMouseDown={() => {
                    setState({
                      type: "Loading",
                      value: true
                    });

                    Axios.post("/resultatsadmin", {
                      elementsCoches: filtres
                    }).then(rep => {
                      setState({
                        type: "Recherche",
                        sujets: rep.data.rows,
                        nbSujets: rep.data.count
                      });
                    });
                  }}
                  size="large"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderColor: "rgba(0,0,0,0.3)"
                  }}
                  block
                >
                  <Icon type="search" />
                  Recherche
                </Button>
              </Tabs.TabPane>
            </Tabs>
          </S.ConteneurFiltres>
        </div>
      )}
    </Transition>
  );
};

const SuivPrec = () => {
  const [state, setState] = useContext(stateContext);
  const { id } = state.sujetVisible;
  const { nbSujets } = state.listeSujets;

  useEffect(() => {}, [id, nbSujets]);

  const SwitchSujet = val => {
    if (val === "+" && id !== 0) {
      setState({
        type: "ChangementID",
        value: id === nbSujets ? 1 : id + 1 // Si dernier sujet de la liste, retour au début.
      });
    }
    if (val === "-" && id !== 0) {
      setState({
        type: "ChangementID",
        value: id === 1 ? nbSujets : id - 1 // Si premier sujet de la liste, dernier sujet.
      });
    }
  };

  return (
    <Transition
      in={true}
      timeout={{ appear: 0, enter: 0, exit: 0 }}
      appear
      enter
      mountOnEnter
    >
      {params => (
        <S.ConteneurSuivPrec
          style={{
            ...styleSuivPrec,
            ...transitionSuivPrec[params]
          }}
        >
          <S.BoutonLeft
            onClick={() => {
              SwitchSujet("-");
            }}
          >
            <Icon type="arrow-left" />
            Sujet précédent
          </S.BoutonLeft>
          <S.NombreSujets>{`${id} / ${nbSujets}`}</S.NombreSujets>
          <S.BoutonRight
            onClick={() => {
              SwitchSujet("+");
            }}
          >
            Sujet suivant
            <Icon type="arrow-right" />
          </S.BoutonRight>
        </S.ConteneurSuivPrec>
      )}
    </Transition>
  );
};
