import * as S from "./Styled";
import { useState, useEffect, useRef } from "react";

export type SliderValue = number | [number, number];

export interface indexI extends React.HTMLAttributes<HTMLDivElement> {
  range: number[];
  marks?: SliderValue;
  step?: number;
  initialValue?: [number, number];
  tooltip?: boolean;
  momo: (event: [number, number]) => void;
}

/**
 * **Slider contrôlé / UI - 1 ou 2 curseurs**
 * ********************************************************
 * @param range number[] : Tableau contenant soit deux valeurs (range entre les deux), soit plus de deux (toutes les valeurs forment la range)
 * @param initialValue? SliderValue : Valeurs à utiliser (composant contrôlé).
 * @param marks? SliderValue : Marques indicatrices qui restent visibles.
 * @param step? number : taille du pas entre deux valeurs.
 * @param tooltip? boolean : Affichage Tooltip sur hover curseur.
 *
 */
const index: React.FC<indexI> = ({
  range,
  marks,
  tooltip,
  initialValue = range,
  momo,
  step = 1,
  ...rest
}) => {
  const refRail = useRef<HTMLDivElement>(null);
  const finalRange = range[1] - range[0];
  const stepValue = 100 / finalRange;
  const finalStep = step * stepValue;

  const [curseurGauche, setCurseurGauche] = useState<number>(
    (initialValue[0] - range[0]) * stepValue
  );
  const [curseurDroite, setCurseurDroite] = useState<number>(
    (initialValue[1] - range[0]) * stepValue
  );
  const [draggingGauche, setDraggingGauche] = useState(false);
  const [draggingDroite, setDraggingDroite] = useState(false);
  const [minMax, setMinMax] = useState<[number, number]>([0, 100]);

  function addMouseMove(e: MouseEvent) {
    handlerMove(e);
  }

  function stopDrag() {
    setDraggingGauche(false);
    setDraggingDroite(false);
  }

  useEffect(() => {
    window.addEventListener("mousemove", addMouseMove);
    window.addEventListener("mouseup", stopDrag);

    return () => {
      window.removeEventListener("mousemove", addMouseMove);
      window.removeEventListener("mouseup", stopDrag);
    };
  });

  /** Vérifie que la valeur du curseur reste bien entre 0 et 100. */
  const checkCurseurVal = (val: number) => {
    if (val <= 0) {
      return 0;
    } else if (val >= 100) {
      return 100;
    } else {
      return val;
    }
  };

  const handlerMove = (e: React.MouseEvent | MouseEvent) => {
    if (minMax[0] === 0 && minMax[1] === 100) {
      setMinMax([
        refRail.current?.getBoundingClientRect().left || 0,
        refRail.current?.getBoundingClientRect().right || 100
      ]);
    }
    if (draggingGauche) {
      let r = minMax[1] - minMax[0];

      let val = ((e.pageX - minMax[0]) * 100) / r;

      val = Math.round(val / finalStep) * finalStep;

      val = checkCurseurVal(val);

      if (val > curseurDroite) {
        setDraggingGauche(false);
        setDraggingDroite(true);
        setCurseurDroite(c => {
          if (c !== val)
            momo([
              Math.round(curseurGauche / stepValue) + range[0],
              Math.round(val / stepValue) + range[0]
            ]);
          return val;
        });
      } else {
        setCurseurGauche(c => {
          if (c !== val)
            momo([
              Math.round(val / stepValue) + range[0],
              Math.round(curseurDroite / stepValue) + range[0]
            ]);
          return val;
        });
      }
    }
    if (draggingDroite) {
      let r = minMax[1] - minMax[0];

      let val = ((e.pageX - minMax[0]) * 100) / r;
      val = Math.round(val / finalStep) * finalStep;

      val = checkCurseurVal(val);

      if (val < curseurGauche) {
        setDraggingDroite(false);
        setDraggingGauche(true);
        setCurseurGauche(c => {
          if (c !== val)
            momo([
              Math.round(val / stepValue) + range[0],
              Math.round(curseurDroite / stepValue) + range[0]
            ]);
          return val;
        });
      } else {
        setCurseurDroite(c => {
          if (c !== val)
            momo([
              Math.round(curseurGauche / stepValue) + range[0],
              Math.round(val / stepValue) + range[0]
            ]);
          return val;
        });
      }
    }
  };
  return (
    <S.Slider {...rest}>
      <S.Rail ref={refRail} />
      <S.Track left={curseurGauche} width={curseurDroite - curseurGauche} />
      <S.Handler
        onMouseDown={() => {
          setDraggingDroite(false);
          setDraggingGauche(true);
        }}
        left={curseurGauche}
        actif={draggingGauche}
      >
        <S.Mark>
          <S.Texte>{Math.floor(curseurGauche / stepValue) + range[0]}</S.Texte>
        </S.Mark>
      </S.Handler>
      <S.Handler
        left={curseurDroite}
        actif={draggingDroite}
        onMouseDown={() => {
          setDraggingGauche(false);
          setDraggingDroite(true);
        }}
      >
        <S.Mark>
          <S.Texte>{Math.round(curseurDroite / stepValue) + range[0]}</S.Texte>
        </S.Mark>
      </S.Handler>
    </S.Slider>
  );
};
export default index;
