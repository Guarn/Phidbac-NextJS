import * as S from "./Styled";
import { CoursI } from "../../Fonctionnels/EditeurCours";
import { Tooltip, Timeline, Icon } from "antd";
import Link from "next/link";

interface Props {
  listeCours: CoursI[];
}

const AffichageListe: React.FC<Props> = ({ listeCours }) => {
  return (
    <S.ConteneurTimeline>
      <Timeline>
        {listeCours.map((element, index) => {
          return (
            <Timeline.Item
              key={`timeline-item-${index}`}
              dot={<SelIcone idCours={listeCours[index].id} />}
            >
              <Link
                prefetch={false}
                href={`/Liste-des-cours/${element.id}`}
                as={`/Liste-des-cours/${element.id}-${element.Titre.trim()
                  .replace(/\u202f/g, "-")
                  .replace(/ /gi, "-")
                  .replace(/\//g, "-")}`}
              >
                <a>
                  <S.ConteneurCours>
                    <S.Description>
                      <S.TitreEtape>{element.Titre}</S.TitreEtape>
                      <S.DescriptionEtape>
                        {element.Description}
                      </S.DescriptionEtape>
                    </S.Description>

                    <S.Details>
                      <Progression idCours={listeCours[index].id} />
                    </S.Details>
                  </S.ConteneurCours>
                </a>
              </Link>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </S.ConteneurTimeline>
  );
};

export default AffichageListe;

const Progression: React.FC<any> = ({ tab, idCours }) => {
  let newTab = tab ? tab.filter((el: any) => el.idCours === idCours) : [];
  if (tab && idCours) {
    if (newTab.length === 0) {
      return <div>Non commencé</div>;
    } else {
      if (newTab[0].progression < 100 && newTab[0].progression > 0) {
        return <div>{"En cours (" + newTab[0].progression + " %)"}</div>;
      }
      if (newTab[0].progression === 100) {
        let newTab = tab.filter((el: any) => el.idCours === idCours);
        let date = newTab[0].updatedAt
          .split("T")[0]
          .split("-")
          .reverse()
          .join("/");
        return <div>Terminé le {date}</div>;
      }
      return newTab[0].progression;
    }
  } else {
    return <div>Non commencé</div>;
  }
};

const SelIcone: React.FC<any> = ({ tab, idCours }) => {
  let newTab = tab ? tab.filter((el: any) => el.idCours === idCours) : [];
  if (tab && idCours) {
    if (newTab.length === 0) {
      return <S.Dot color="salmon" />;
    } else {
      if (newTab[0].progression < 100 && newTab[0].progression > 0) {
        return <S.Dot color="lightblue" />;
      }
      if (newTab[0].progression === 100) {
        return (
          <Icon
            type="check-circle"
            theme="twoTone"
            twoToneColor="#85E27B"
            style={{ fontSize: "16px" }}
          />
        );
      }
      return newTab[0].progression;
    }
  } else {
    return <S.Dot color="salmon" />;
  }
};
