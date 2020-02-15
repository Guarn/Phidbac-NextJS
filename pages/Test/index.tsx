import Layout from "../../components/Layout";
import Button from "../../components/UI/Button";
import SelectMultiple from "../../components/UI/SelectMultiple";
import Divider from "../../components/UI/Divider";
import Modal from "../../components/UI/Modal";
import { useState } from "react";
import Tooltip from "../../components/UI/Tooltip/";
import Icon from "../../components/UI/Icons";
import Drawer from "../../components/UI/Drawer";
import Slider from "../../components/UI/Slider";
import MenuSlide from "../../components/UI/MenuSlide";
import RadioGroup from "../../components/UI/RadioGroup";

const index = () => {
  const displayEvent = (event: any) => {
    console.log(event);
    console.log(event.target);
  };
  const [showModal, setShowModal] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          border: "1px solid white",
          width: "300px",
          marginLeft: "500px"
        }}
      >
        <Divider text="Modal" align="center" />
        <Modal
          showModal={showModal}
          closeModal={() => {
            setShowModal(false);
          }}
        >
          Test
        </Modal>
        <Button
          size="small"
          icon="LeftArrow"
          onClick={() => setShowModal(true)}
        >
          Sujet précédent
        </Button>
        <Divider text="Buttons" align="center" />

        <Button size="normal" onClick={e => displayEvent(e)} icon="RightArrow">
          Sujet suivant
        </Button>
        <Divider text="SelectMultiple" align="center" />

        <SelectMultiple
          listeEntrees={init}
          onChange={val => console.log(val)}
        />

        <Divider text="Drawer" align="center" />
        <Drawer
          position="right"
          show={showDrawer}
          close={() => {
            setShowDrawer(false);
          }}
        >
          Test dsqdsq d sqds qd qdsqd sqdqs
        </Drawer>
        <Button
          size="small"
          icon="Check"
          onClick={() => setShowDrawer(true)}
        ></Button>
        <Divider text="Slider" align="center" />
        <Slider
          range={[1996, 2019]}
          step={1}
          onChange={(val: [number, number]) => console.log(val)}
        />
        <Divider text="Tabs" align="center" />
        <MenuSlide>
          <MenuSlide.Tabs title="tab 1" icon="SimpleArrow" key="0">
            <h2>1</h2>
          </MenuSlide.Tabs>
          <MenuSlide.Tabs title="tab 2" key="1">
            <h2>2</h2>
          </MenuSlide.Tabs>
        </MenuSlide>
        <Divider text="RadioGroup" align="center" />
        <RadioGroup defaultValue="Toutes">
          <RadioGroup.Radio value="Toutes">Toutes</RadioGroup.Radio>
          <RadioGroup.Radio value="Normales">Norm.</RadioGroup.Radio>
          <RadioGroup.Radio value="Remplacement">Rempl.</RadioGroup.Radio>
          <RadioGroup.Radio value="Secours">Secours</RadioGroup.Radio>
        </RadioGroup>
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
