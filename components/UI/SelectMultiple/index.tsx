import { useState, useRef, useEffect } from "react";
import * as S from "./Styled";
import Icon from "../Icons";

export interface indexI {
  listeEntrees: string[];
  onChange: (val: string[]) => void;
  selected: string[];
}

const index: React.FC<indexI> = ({ listeEntrees, onChange, selected }) => {
  const [valChamp, setValChamp] = useState<string>("");
  const [showListe, setShowListe] = useState(false);
  const refInput = useRef<HTMLInputElement>(null);
  const refGlobalConteneur = useRef<HTMLDivElement>(null);

  const handleSelect = (val: string) => {
    if (!selected.includes(val)) {
      onChange([...selected, val]);
    } else {
      onChange(selected.filter((el) => el !== val));
    }
  };

  return (
    <S.SelectMultiple
      ref={refGlobalConteneur}
      onClick={() => {
        refInput?.current?.focus();
      }}
      onBlur={(e) => {
        e.stopPropagation();
        e.preventDefault();
        setValChamp("");
        setShowListe(false);
      }}
    >
      {selected.map((el, index) => {
        return <Badge key={`Badge-${el}`} nom={el} remove={handleSelect} />;
      })}
      <span
        style={{
          width: (valChamp.length + 1) * 10 + "px",
          position: "relative",
          display: "inline",
        }}
      >
        <S.Input
          ref={refInput}
          value={valChamp}
          onFocus={() => setShowListe(true)}
          onChange={(e) => setValChamp(e.target.value)}
        />
      </span>
      <Liste
        listeEntrees={listeEntrees}
        showListe={showListe}
        recherche={valChamp}
        selected={selected}
        setSelected={handleSelect}
      />
    </S.SelectMultiple>
  );
};
export default index;

export interface ListeI {
  listeEntrees: string[];
  showListe: boolean;
  recherche: string;
  setSelected: (val: string) => void;
  selected: string[];
}

const Liste: React.FC<ListeI> = ({
  showListe,
  listeEntrees,
  recherche,
  setSelected,
  selected,
}) => {
  return (
    <S.ConteneurListe showListe={showListe}>
      {listeEntrees
        .filter((element) => {
          if (!recherche) return true;
          let value = new RegExp(recherche, "gi");
          return element.search(value) !== -1;
        })
        .map((val, index) => {
          let isActif = selected.includes(val);
          return (
            <S.ElementListe
              actif={isActif}
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();

                setSelected(val);
              }}
              key={index}
            >
              {val.toUpperCase()}
              {isActif && <Icon type="Check" color="green" />}
            </S.ElementListe>
          );
        })}
    </S.ConteneurListe>
  );
};

export interface BadgeI {
  nom: string;
  remove: (val: string) => any;
}

const Badge: React.FC<BadgeI> = ({ nom, remove }) => {
  return (
    <S.ConteneurBadge>
      {nom.toUpperCase()}
      <S.IconBadge onMouseDown={() => remove(nom)} />
    </S.ConteneurBadge>
  );
};
