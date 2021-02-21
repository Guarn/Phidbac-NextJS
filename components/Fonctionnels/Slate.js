import React, { useCallback, useMemo, useState } from "react";
import { Editable, withReact, Slate } from "slate-react";
import { createEditor } from "slate";
import EditeurCours from "./EditeurCours";
import * as S from "./Styled";
import Tooltip from "../UI/Tooltip";
import Modal from "../UI/Modal";
import Axios from "./Axios";

const SlateJs = ({ index, value, readOnly }) => {
  const renderElement = useCallback(props => <Element {...props} />, []);
  const renderLeaf = useCallback(props => <Leaf {...props} />, []);
  const editor = useMemo(() => withReact(createEditor()), []);

  return (
    <Slate editor={editor} value={value} selection={null} onChange={() => { }}>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        readOnly={true}
        style={{ userSelect: "text", width: "100%" }}
      />
    </Slate>
  );
};

const Element = ({ attributes, children, element }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const onChangeVisible = val => {
    setTimeout(() => {
      setShowTooltip(val);
    }, 100);
  };

  switch (element.type) {
    case "citation":
      return (
        <S.BlocSimple element={element} {...attributes}>
          {children}
        </S.BlocSimple>
      );
    case "bulleted-list":
      return <ul {...attributes}>{children}</ul>;
    case "h1":
      return (
        <S.H1 element={element} {...attributes}>
          {children}
        </S.H1>
      );
    case "h2":
      return (
        <S.H2 element={element} {...attributes}>
          {children}
        </S.H2>
      );
    case "h3":
      return (
        <S.H3 element={element} {...attributes}>
          {children}
        </S.H3>
      );
    case "list-item":
      return (
        <S.Li element={element} {...attributes}>
          {children}
        </S.Li>
      );
    case "numbered-list":
      return (
        <S.Ol element={element} {...attributes}>
          {children}
        </S.Ol>
      );
    case "link":
      switch (element.select) {
        case "web":
          switch (element.ouverture) {
            case "same":
              return (
                <Tooltip
                  visible={showTooltip}
                  setVisible={onChangeVisible}
                  content={<BlocLien type="WEB" value={element.value} />}
                >
                  <a
                    target="_self"
                    rel="noopener noreferrer"
                    href={element.value}
                    {...attributes}
                  >
                    {children}
                  </a>
                </Tooltip>
              );
            default:
              return (
                <Tooltip
                  visible={showTooltip}
                  setVisible={onChangeVisible}
                  content={<BlocLien type="WEB" value={element.value} />}
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={element.value}
                    {...attributes}
                  >
                    {children}
                  </a>
                </Tooltip>
              );
          }

        case "index":
          switch (element.ouverture) {
            case "same":
              return (
                <Tooltip
                  visible={showTooltip}
                  setVisible={onChangeVisible}
                  content={<BlocLien type="INDEX" value={element.nom} />}
                >
                  <a
                    target="_self"
                    rel="noopener noreferrer"
                    href={`/Liste-des-index/${element.value}`}
                    {...attributes}
                  >
                    {children}
                  </a>
                </Tooltip>
              );
            case "new":
              return (
                <Tooltip
                  visible={showTooltip}
                  setVisible={onChangeVisible}
                  content={<BlocLien type="INDEX" value={element.nom} />}
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.phidbac.fr/Liste-des-index/${element.value}`}
                    {...attributes}
                  >
                    {children}
                  </a>
                </Tooltip>
              );
            default:
              return (
                <span>
                  <OpenModal
                    type="index"
                    element={element}
                    attributes={attributes}
                    children={children}
                  />
                </span>
              );
          }

        case "cours":
          switch (element.ouverture) {
            case "same":
              return (
                <Tooltip
                  visible={showTooltip}
                  setVisible={onChangeVisible}
                  content={<BlocLien type="COURS" value={element.nom} />}
                >
                  <a
                    target="_self"
                    rel="noopener noreferrer"
                    href={`https://www.phidbac.fr/Liste-des-cours/${element.value}`}
                    {...attributes}
                  >
                    {children}
                  </a>
                </Tooltip>
              );
            case "new":
              return (
                <Tooltip
                  visible={showTooltip}
                  setVisible={onChangeVisible}
                  content={<BlocLien type="COURS" value={element.nom} />}
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.phidbac.fr/Liste-des-cours/${element.value}`}
                    {...attributes}
                  >
                    {children}
                  </a>
                </Tooltip>
              );
            default:
              return (
                <span>
                  <OpenModal
                    type="cours"
                    element={element}
                    attributes={attributes}
                    children={children}
                  />
                </span>
              );
          }
        case "exercices":
          switch (element.ouverture) {
            case "same":
              return (
                <Tooltip
                  visible={showTooltip}
                  setVisible={onChangeVisible}
                  content={<BlocLien type="EXERCICES" value={element.nom} />}
                >
                  <a
                    target="_self"
                    rel="noopener noreferrer"
                    href={`https://www.phidbac.fr/Liste-des-exercices/${element.value}`}
                    {...attributes}
                  >
                    {children}
                  </a>
                </Tooltip>
              );
            case "new":
              return (
                <Tooltip
                  visible={showTooltip}
                  setVisible={onChangeVisible}
                  content={<BlocLien type="EXERCICES" value={element.nom} />}
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.phidbac.fr/Liste-des-exercices/${element.value}`}
                    {...attributes}
                  >
                    {children}
                  </a>
                </Tooltip>
              );
            default:
              return (
                <OpenModal
                  type="exercices"
                  element={element}
                  attributes={attributes}
                  children={children}
                />
              );
          }
        default:
          return <a {...attributes}>{children}</a>;
      }

    default:
      return (
        <S.BlocSimple element={element} {...attributes}>
          {children}
        </S.BlocSimple>
      );
  }
};

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.sup) {
    children = <sup>{children}</sup>;
  }

  if (leaf.times) {
    children = (
      <span style={{ fontFamily: "Times New Roman", fontSize: "115%" }}>
        {children}
      </span>
    );
  }

  return (
    <span
      style={{
        color: leaf.couleurTexteActive ? leaf.couleurTexte : null,
        backgroundColor: leaf.couleurBackgroundActive
          ? leaf.couleurBackground
          : null,
        textAlign: leaf.alignement ? leaf.align : null
      }}
      {...attributes}
    >
      {children}
    </span>
  );
};

export default SlateJs;

const OpenModal = ({ type, attributes, children, element }) => {
  const [modalShow, setModalShow] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [cours, setCours] = useState();
  const fetchData = async element => {
    const res = await Axios(
      `/${type === "cours" ? type : "indexes"}/${element.value
      }`
    );
    await setCours({
      contenu: type === "cours" ? JSON.parse(res.data['0'].contenu) : res.data['0'].description
    });

    await setModalShow(true);
  };

  return (
    <Tooltip
      visible={showTooltip}
      setVisible={val => setShowTooltip(val)}
      content={<BlocLien type={type.toUpperCase()} value={element.nom} />}
    >
      <a
        {...attributes}
        onMouseOver={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => {
          setShowTooltip(false);

          fetchData(element);
        }}
      >
        {children}
      </a>
      <Modal showModal={modalShow} closeModal={() => setModalShow(false)}>
        <div
          style={{
            overflow: "auto",
            maxHeight: "60vh",
            paddingRight: "20px"
          }}
        >
          {type === "index" && (
            <EditeurCours id={element.value} affichage="Index" cours={cours} />
          )}
          {type === "cours" && (
            <EditeurCours
              paragraphe={element.paragraphe}
              tableMatiereShow={false}
              cours={cours}
              affichage="Cours"
            />
          )}
          {type === "exercices" && (
            <EditeurCours
              tableMatiereShow={false}
              affichage="Cours"
              cours={cours}
            />
          )}
        </div>
      </Modal>
    </Tooltip>
  );
};

const BlocLien = ({ type, value }) => {
  return (
    <S.ConteneurLienPopover>
      <S.TypeLien>{type}</S.TypeLien>
      <S.Separateur>|</S.Separateur>
      <S.ContenuLien>{value}</S.ContenuLien>
    </S.ConteneurLienPopover>
  );
};
