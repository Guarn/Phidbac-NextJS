import styled from "styled-components";
import { PositionT } from "../Button";

export const IconList = [
  "LeftArrow",
  "RightArrow",
  "Close",
  "Check",
  "SimpleArrow",
  "Search",
  "Filter",
  "Menu",
  "DocList"
] as const;

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
  mirror?: boolean;
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
  mirror,
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
      mirror={mirror}
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
    case "SimpleArrow":
      return <SimpleArrow />;
    case "Filter":
      return <Filter />;
    case "Search":
      return <Search />;
    case "Menu":
      return <Menu />;
    case "DocList":
      return <DocList />;
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
const SimpleArrow = () => (
  <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
);
const Filter = () => (
  <path d="M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z"></path>
);
const Search = () => (
  <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
);
const Menu = () => (
  <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
);
const DocList = () => (
  <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM492 400h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM340 368a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0 144a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0 144a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"></path>
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
  fill: ${props => props.color ?? props.theme.texteSecondaryColor};
`;

export type IconCtnT = {
  position: PositionT;
  noText: boolean;
  bg?: string;
  ml?: string;
  mr?: string;
  pl?: string;
  pr?: string;
  mirror?: boolean;
};

const IconCtn = styled.div<IconCtnT>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bg ?? "transparent"};
  transform: ${props => (props.mirror ? "rotate(180deg)" : "rotate(0deg)")};
  margin-right: ${props => (props.mr ?? 0) + "px"};
  margin-left: ${props => (props.ml ?? 0) + "px"};
  padding-right: ${props => (props.pr ?? 0) + "px"};
  padding-left: ${props => (props.pl ?? 0) + "px"};
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
