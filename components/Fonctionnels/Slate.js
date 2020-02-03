import React, { useCallback, useMemo, useState, FC, useEffect } from "react";
import { Editable, withReact, Slate } from "slate-react";
import { createEditor } from "slate";
import { Popover, Modal } from "antd";
import EditeurCours, { initialValueCours } from "./EditeurCours";
import * as S from "./Styled";
import fetch from "isomorphic-unfetch";

const SlateJs = ({ index, value, readOnly }) => {
  const renderElement = useCallback(props => <Element {...props} />, []);
  const renderLeaf = useCallback(props => <Leaf {...props} />, []);
  const editor = useMemo(() => withReact(createEditor()), []);

  return (
    <Slate editor={editor} value={value} selection={null} onChange={() => {}}>
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
          return (
            <Popover
              overlayClassName="Pop-LienWeb"
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
            </Popover>
          );

        case "index":
          switch (element.ouverture) {
            case "same":
              return (
                <Popover
                  overlayClassName="Pop-LienWeb"
                  content={<BlocLien type="INDEX" value={element.nom} />}
                >
                  <a
                    target="_self"
                    rel="noopener noreferrer"
                    href={`https://www.phidbac.fr/Liste-des-index/${element.value}`}
                    {...attributes}
                  >
                    {children}
                  </a>
                </Popover>
              );
            case "new":
              return (
                <Popover
                  overlayClassName="Pop-LienWeb"
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
                </Popover>
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
                <Popover
                  overlayClassName="Pop-LienWeb"
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
                </Popover>
              );
            case "new":
              return (
                <Popover
                  overlayClassName="Pop-LienWeb"
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
                </Popover>
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
                <Popover
                  overlayClassName="Pop-LienWeb"
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
                </Popover>
              );
            case "new":
              return (
                <Popover
                  overlayClassName="Pop-LienWeb"
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
                </Popover>
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
    const res = await fetch(
      `https://www.phidbac.fr:4000/${type === "cours" ? type : "indexes"}/${
        element.value
      }`
    );
    const data = await res.json();
    await setCours({
      Contenu: type === "cours" ? JSON.parse(data.Contenu) : data.description
    });
    await setModalShow(true);
  };

  return (
    <Popover
      visible={showTooltip}
      overlayClassName="Pop-LienWeb"
      content={<BlocLien type={type.toUpperCase()} value={element.nom} />}
    >
      <a
        {...attributes}
        onMouseOver={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => fetchData(element)}
      >
        {children}
      </a>
      <Modal
        visible={modalShow}
        onCancel={() => setModalShow(false)}
        onOk={() => setModalShow(false)}
        footer={null}
        closable={false}
        width={type === "cours" ? "1000px" : "600px"}
      >
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
    </Popover>
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
