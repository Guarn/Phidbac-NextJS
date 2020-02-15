import * as S from "./Styled";
import GrandPhi from "./GrandPhi";
import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Icon from "../../UI/Icons";

const index = () => {
  return (
    <S.Conteneur>
      <S.Cercle />
      <S.ConteneurPartieTexte>
        <BlocTitre />
        <BlocPresentationDescription />
        <BlocFooter />
      </S.ConteneurPartieTexte>
      <S.ConteneurPartieImage>
        <GrandPhi />
      </S.ConteneurPartieImage>
    </S.Conteneur>
  );
};
export default index;

const BlocTitre = () => {
  return (
    <>
      <S.TexteTitre>
        <S.Phi>φ</S.Phi>d<S.Phi>'</S.Phi>
        bac
        <S.Phi>'</S.Phi>!
      </S.TexteTitre>
      <S.BlocSousTitre>
        <S.BarreVerticale />
        <S.BlocTitreDescription>
          <S.TexteContenu>
            « <S.Phi>φ</S.Phi> », c’est la lettre grecque phi,
            <br />
            <S.Phi>bac</S.Phi>
            , c’est le bac. <br />
            <S.Phi>φ</S.Phi>d<S.Phi>'</S.Phi>
            bac
            <S.Phi>'</S.Phi>! c’est la philosophie du bac.
          </S.TexteContenu>
        </S.BlocTitreDescription>
      </S.BlocSousTitre>
    </>
  );
};

const contenuTexte = [
  {
    Titre: "Présentation du programme et des épreuves",
    Description:
      "Les textes officiels définissent précisément ce qui est attendu des candidats. Ils fournissent des renseignements particulièrement utiles à une préparation efficace."
  },
  {
    Titre: "Des leçons progressives",
    Description:
      "φ’ propose un ensemble de leçons traitant le programme à partir de problèmes, comme le ferait un professeur sur l’ensemble de l’année. Des tests réguliers permettent de vérifier que l’on a bien assimilé le contenu de la leçon."
  },
  {
    Titre: "Des exercices pas à pas",
    Description:
      "Les exercices proposés au bac : la dissertation et l’explication de texte, ne sont pas aussi difficiles qu’on le croit parfois. Mais ils supposent que l’on comprenne bien ce qui est demandé, et pas mal d’entraînement. φ’ devrait vous faciliter la tâche."
  },
  {
    Titre: "L’étude suivie d’œuvres",
    Description:
      "φ’ propose l’étude suivie de trois œuvres philosophiques. En liaison avec les leçons, cela devrait vous permettre d’acquérir une culture philosophique initiale, et par la même occasion de vous préparer à un éventuel oral…"
  },
  {
    Titre: "Des index",
    Description:
      "Notions, repères, concepts, auteurs, œuvres… il y a de quoi se perdre. Les index permettent de retrouver sans perte de temps les moments du cours qui en parlent."
  },
  {
    Titre: "1142 sujets de bac en libre consultation !",
    Description:
      "φ’ propose une base de données comportant la quasi-totalité des sujets de baccalauréat donnés depuis… 1996, soit environ 1200 sujets complets, autant de textes, et près de 2400 sujets de dissertation."
  }
];

const cat = [0, 1, 2, 3, 4, 5];

const BlocPresentationDescription = () => {
  const [showDescription, setShowDescription] = React.useState(false);
  const [numDescription, setnumDescription] = React.useState(0);
  return (
    <S.TexteContenuResp mt="60px">
      <S.TexteContenuResp mb="20px">
        <S.Phi>φ</S.Phi>d<S.Phi>'</S.Phi>
        bac
        <S.Phi>'</S.Phi>! (désormais, ce sera φ’ tout court) propose de A à Z
        une préparation à l’épreuve de philosophie du nouveau bac (juin 2021).
      </S.TexteContenuResp>

      <S.ConteneurCat>
        <TransitionGroup component={null}>
          {!showDescription && (
            <CSSTransition classNames="titres" unmountOnExit timeout={200}>
              <S.SousConteneurCat>
                {cat.map(el => {
                  return (
                    <S.TitreCat
                      key={`Presentation-${el}`}
                      onClick={() => {
                        setnumDescription(el);
                        setShowDescription(true);
                      }}
                    >
                      <Icon type="SimpleArrow" mr="5" />

                      {contenuTexte[el].Titre}
                    </S.TitreCat>
                  );
                })}
              </S.SousConteneurCat>
            </CSSTransition>
          )}
          {showDescription && (
            <CSSTransition timeout={200} unmountOnExit classNames="descriptifs">
              <S.SousConteneurDescription
                onClick={() => {
                  setShowDescription(false);
                }}
              >
                <S.TitreCat style={{ fontWeight: "bold" }}>
                  <Icon type="SimpleArrow" mirror mr="5" />
                  {contenuTexte[numDescription].Titre}
                </S.TitreCat>
                <S.DescriptionCat>
                  {contenuTexte[numDescription].Description}
                </S.DescriptionCat>
              </S.SousConteneurDescription>
            </CSSTransition>
          )}
        </TransitionGroup>
      </S.ConteneurCat>
    </S.TexteContenuResp>
  );
};

const BlocFooter = () => {
  return (
    <S.BlocFooter>
      <S.TexteContenuFooter>
        La présentation du programme et des épreuves, ainsi que la base de
        sujets de bac sont en libre consultation. En revanche, vous devez vous
        identifier pour accéder aux autres ressources : leçons, exercices, étude
        d’œuvres, index.
      </S.TexteContenuFooter>
      <S.TexteContenu mt="20px">
        <S.Phi>φ'</S.Phi> vous souhaite un bon travail, couronné de succès !
      </S.TexteContenu>
    </S.BlocFooter>
  );
};
