import Layout from "../../components/Layout";
import Button from "../../components/UI/Button";
import SelectMultiple from "../../components/UI/SelectMultiple";
import Divider from "../../components/UI/Divider";
import Modal from "../../components/UI/Modal";
import { useState } from "react";
import Tooltip from "../../components/UI/Tooltip/";
import Icon from "../../components/UI/Icons";

const index = () => {
  const displayEvent = (event: any) => {
    console.log(event);
    console.log(event.target);
  };
  const [showModal, setShowModal] = useState(false);
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          border: "1px solid white",
          width: "400px",
          marginLeft: "500px"
        }}
      >
        <Button
          size="small"
          icon="LeftArrow"
          onClick={() => setShowModal(true)}
        >
          Sujet précédent
        </Button>
        <Button size="normal" onClick={e => displayEvent(e)} icon="RightArrow">
          Sujet suivant
        </Button>
        <SelectMultiple
          listeEntrees={init}
          onChange={val => console.log(val)}
        />
        <Divider align="center" text="HAHA" />
        <Divider align="left" text="HAHA" />
        <Divider align="right" text="HAHA" />
        <Modal
          showModal={showModal}
          closeModal={() => {
            setShowModal(false);
          }}
        >
          Test
        </Modal>
        <Tooltip content={<div>HAHA</div>}>Test tooltip</Tooltip>
        <Tooltip content="Hum">Test tooltip</Tooltip>
        <span>
          ❝ l’enseignement de la philosophie a pour but de former le jugement
          critique des élèves et de les instruire par l’acquisition d’une
          culture philosophique
          <Tooltip content="Petite vérification d'un usage non">
            initiale
          </Tooltip>
          . Ces deux objectifs sont étroitement liés : le jugement s’exerce avec
          discernement quand il s’appuie sur des connaissances maîtrisées ; une
          culture philosophique initiale est nécessaire pour poser, formuler et
          tenter de résoudre des problèmes philosophiques. ❞
        </span>

        <Tooltip content="fsdfds">
          <Icon type="LeftArrow" />
        </Tooltip>
      </div>
    </Layout>
  );
};

export default index;

const init = [
  "horreur",
  "bac",
  "philo",
  "divers",
  "peut-être",
  "horreur1",
  "bac1",
  "philo1",
  "divers1",
  "peut-être1"
];
