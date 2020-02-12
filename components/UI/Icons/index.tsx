import styled from "styled-components";
import { PositionT } from "../Button";

export const IconList = ["LeftArrow", "RightArrow", "Close", "Check"] as const;

export interface IconT extends React.HTMLAttributes<HTMLDivElement> {
  type: typeof IconList[number];
  position?: PositionT;
  anim?: boolean;
  noText?: boolean;
  color?: string;
  bg?: string;
  ml?: string;
  mr?: string;
  pl?: string;
  pr?: string;
  cursor?: string;
}

/**
 * Composant icone
 *
 * @type string[Req]. - Nom de l'icône
 * @position string[Opt] : Default : left. Position de l'icône par rapoort au texte
 * @anim Boolean[Opt] : : Animation de l'icône lorque cliquée
 * @noText Boolean[Opt] : Icone associée à du texte (Button par exemple)
 * @color string[Opt] : Couleur du Fill
 * @bg string[Opt] : Couleur du Background
 * @ml string[Opt] : MarginLeft (en px)
 * @mr string[Opt] : MarginRight (en px)
 * @pl string[Opt] : PaddingLeft (en px)
 * @pr string[Opt] : PaddingRight (en px)
 */
const Icon: React.FC<IconT> = ({
  type,
  position = "left",
  anim,
  noText = false,
  color,
  bg,
  ml,
  mr,
  pl,
  pr,
  ...rest
}) => {
  return (
    <IconCtn
      {...rest}
      position={position}
      noText={noText}
      bg={bg}
      ml={ml}
      mr={mr}
      pl={pl}
      pr={pr}
    >
      <IconSvg className={(anim && `anim${position}`) || ""} color={color}>
        <Icone type={type} />
      </IconSvg>
    </IconCtn>
  );
};
export default Icon;

const Icone: React.FC<IconT> = ({ type }) => {
  switch (type) {
    case "LeftArrow":
      return <LeftArrow />;
    case "RightArrow":
      return <RightArrow />;
    case "Close":
      return <Close />;
    case "Check":
      return <Check />;
  }
};

const LeftArrow = () => (
  <path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
);

const RightArrow = () => (
  <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"></path>
);

const Close = () => (
  <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
);
const Check = () => (
  <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
);

export type IconSvgT = {
  color?: string;
};

const IconSvg = styled.svg.attrs<IconSvgT>(() => ({
  viewBox: "64 64 896 896",
  focusable: false
}))`
  width: 1rem;
  height: 1rem;
  fill: ${props => props.color ?? "currentColor"};
`;

export type IconCtnT = {
  position: PositionT;
  noText: boolean;
  bg?: string;
  ml?: string;
  mr?: string;
  pl?: string;
  pr?: string;
};

const IconCtn = styled.div<IconCtnT>`
  display: inline-flex;
  background-color: ${props => props.bg ?? null};
  margin-right: ${props => props.mr + "px" || "0px"};
  margin-left: ${props => props.ml + "px" || "0px"};
  padding-right: ${props => props.pr + "px" || "0px"};
  padding-left: ${props => props.pl + "px" || "0px"};
  .animleft {
    animation: clickedLeft 500ms;

    @keyframes clickedLeft {
      0% {
        transform: translateX(0px) scale(1);
        opacity: 1;
      }
      45% {
        transform: translateX(-10px) scale(1.5);
        opacity: 0;
      }
      55% {
        transform: translateX(10px) scale(0.8);
        opacity: 0;
      }
      0% {
        transform: translateX(0px) scale(1);
        opacity: 1;
      }
    }
  }
  .animright {
    animation: clickedRight 500ms;

    @keyframes clickedRight {
      0% {
        transform: translateX(0px) scale(1);
        opacity: 1;
      }
      45% {
        transform: translateX(10px) scale(1.5);
        opacity: 0;
      }
      55% {
        transform: translateX(-10px) scale(0.8);
        opacity: 0;
      }
      0% {
        transform: translateX(0px) scale(1);
        opacity: 1;
      }
    }
  }
`;
