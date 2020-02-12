import Layout from "../../components/Layout";
import Button from "../../components/UI/Button";
import SelectMultiple from "../../components/UI/SelectMultiple";
import Divider from "../../components/UI/Divider";
import Modal from "../../components/UI/Modal";
import { useState } from "react";
import Tooltip from "../../components/UI/Tooltip/";

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
          width: "200px",
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
        <Tooltip title="Joli !!">Test tooltip</Tooltip>
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
