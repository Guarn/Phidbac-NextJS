import * as S from "./Styled";
import ListeLettre from "./Components/ListeLettre";
import ListeIndex from "./Components/ListeIndex";
import DescriptionIndex from "./Components/DescriptionIndex";
import { useEffect } from "react";
import * as Scroll from "react-scroll";

const Indexes = ({ listeIndex, cours, id }: any) => {
  useEffect(() => {
    Scroll.Events.scrollEvent.register("begin", function(to, element) {});

    Scroll.Events.scrollEvent.register("end", function(to, element) {});

    Scroll.scrollSpy.update();
    return () => {
      Scroll.Events.scrollEvent.remove("begin");

      Scroll.Events.scrollEvent.remove("end");
    };
  });
  return (
    <S.Conteneur>
      <ListeLettre />
      <ListeIndex listeIndex={listeIndex} id={id} />
      <DescriptionIndex cours={cours} />
    </S.Conteneur>
  );
};
export default Indexes;
