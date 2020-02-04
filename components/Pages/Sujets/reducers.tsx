export interface SujetI {
  id: number;
  Num: number;
  Serie: string;
  Destination: string[];
  Session: string;
  Code: string;
  Sujet1: string;
  Notions1: string[];
  Sujet2: string;
  Notions2: string[];
  Sujet3: string;
  Notions3: string[];
  Auteur: string;
  Problemes: boolean;
  Annee: number;
}

export interface ListeSujetsI {
  id: number;
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

export interface StateI {
  sujetVisible: { id: number; sujet: SujetI };
  listeSujets: {
    sujets: ListeSujetsI[];
    nbSujets: number;
  };
  loading: boolean;
  filtres: {
    menu?: MenuFiltreI;
    filtres: ElementsCochesI;
    actif: boolean;
  };
}
export interface MenuFiltreI {
  annees?: { Annee: number; Menu: boolean }[];
  auteurs?: { Auteur: string; Menu: boolean; NbSujets: number }[];
  destinations?: { Destination: string; Menu: boolean }[];
  notions?: { Notion: string }[];
  series?: { Serie: string; Menu: boolean }[];
  sessions?: { Session: string; Menu: boolean }[];
}

export type Action =
  | { type: "Loading"; value: boolean }
  | {
      type: "Update";
    }
  | { type: "ChangementID"; value: number }
  | { type: "FetchSujet"; value: ListeSujetsI[]; count: number }
  | { type: "FetchMenu"; value: MenuFiltreI }
  | { type: "ReinitMenu"; value: ListeSujetsI[]; count: number }
  | {
      type: "ChangeFiltres";
      value: string[];
      cat: string;
    }
  | { type: "ChangeFiltres"; value: number[]; cat: string }
  | { type: "Recherche"; sujets: ListeSujetsI[]; nbSujets: number };

const initialFiltresState = {
  notions: [],
  series: [],
  annees: [1996, 2019],
  destinations: [],
  auteurs: [],
  sessions: ["NORMALE", "REMPLACEMENT", "SECOURS", "NONDEFINI"],
  recherche: "",
  typeRecherche: "exacte"
};

export const initialState: StateI = {
  loading: true,
  sujetVisible: { id: 1, sujet: {} as SujetI },
  filtres: { filtres: initialFiltresState, actif: false },
  listeSujets: { nbSujets: 0, sujets: [] }
};

export interface EnonceI {
  numSujet: number;
  texte: string;
  notions: string[];
  filtres: ElementsCochesI;
  actif: boolean;
}

export const sujetReducer = (state: StateI, action: Action) => {
  switch (action.type) {
    case "Loading":
      return { ...state, loading: action.value };
    case "ChangementID":
      return {
        ...state,
        sujetVisible: { ...state.sujetVisible, id: action.value },
        loading: true
      };
    case "FetchSujet":
      return {
        ...state,
        listeSujets: { nbSujets: action.count, sujets: action.value },
        filtres: {
          ...state.filtres,
          filtres: initialFiltresState,
          actif: false
        }
      };
    case "FetchMenu":
      return {
        ...state,
        filtres: { ...state.filtres, menu: action.value }
      };

    case "ChangeFiltres":
      return {
        ...state,
        filtres: {
          ...state.filtres,
          filtres: {
            ...state.filtres.filtres,
            [action.cat]: action.value
          }
        }
      };
    case "Recherche":
      return {
        ...state,
        listeSujets: {
          sujets: action.sujets,
          nbSujets: action.nbSujets
        },
        sujetVisible: {
          ...state.sujetVisible,
          id: action.nbSujets === 0 ? 0 : 1
        },
        loading: action.nbSujets === 0 ? false : true,
        filtres: { ...state.filtres, actif: true }
      };

    default:
      return state;
  }
};
