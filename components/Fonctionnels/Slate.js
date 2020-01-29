import React, { useCallback, useMemo, useState, FC } from "react";
import { Editable, withReact, Slate } from "slate-react";
import { createEditor } from "slate";
import { Popover, Modal } from "antd";

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
        <div
          style={{
            textAlign: element.align,
            marginLeft: element.marginLeft,
            marginTop: "0px",
            marginBottom: "0px"
          }}
          {...attributes}
        >
          {children}
        </div>
      );
    case "bulleted-list":
      return <ul {...attributes}>{children}</ul>;
    case "h1":
      return (
        <h1
          style={{
            textAlign: element.align,
            marginLeft: element.marginLeft,
            marginTop: "0px",
            marginBottom: "0px"
          }}
          {...attributes}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          style={{
            textAlign: element.align,
            marginLeft: element.marginLeft,
            marginTop: "0px",
            marginBottom: "0px",
            fontSize: "20px"
          }}
          {...attributes}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          style={{
            textAlign: element.align,
            marginLeft: element.marginLeft,
            marginTop: "0px",
            marginBottom: "0px",
            fontSize: "16px"
          }}
          {...attributes}
        >
          {children}
        </h3>
      );
    case "list-item":
      return (
        <li
          style={{
            textAlign: element.align,
            marginLeft: element.marginLeft,
            marginTop: "0px",
            marginBottom: "0px",
            fontSize: "16px"
          }}
          {...attributes}
        >
          {children}
        </li>
      );
    case "numbered-list":
      return (
        <ol
          style={{
            textAlign: element.align,
            marginLeft: element.marginLeft,
            marginTop: "0px",
            marginBottom: "0px",
            fontSize: "16px"
          }}
          {...attributes}
        >
          {children}
        </ol>
      );
    case "link":
      switch (element.select) {
        case "web":
          switch (element.ouverture) {
            case "same":
              return (
                <Popover
                  overlayClassName="Pop-LienWeb"
                  content={
                    <div style={{ display: "flex" }}>
                      <div
                        style={{
                          color: "orange",
                          fontWeight: "bold"
                        }}
                      >
                        WEB
                      </div>
                      <div
                        style={{
                          color: "white",
                          marginLeft: "5px",
                          marginRight: "5px"
                        }}
                      >
                        |
                      </div>
                      <div
                        style={{
                          color: "white"
                        }}
                      >
                        {element.value}
                      </div>
                    </div>
                  }
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
            default:
              return (
                <Popover
                  overlayClassName="Pop-LienWeb"
                  content={
                    <div style={{ display: "flex" }}>
                      <div
                        style={{
                          color: "orange",
                          fontWeight: "bold"
                        }}
                      >
                        WEB
                      </div>
                      <div
                        style={{
                          color: "white",
                          marginLeft: "5px",
                          marginRight: "5px"
                        }}
                      >
                        |
                      </div>
                      <div
                        style={{
                          color: "white"
                        }}
                      >
                        {element.value}
                      </div>
                    </div>
                  }
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={element.value}
                    {...attributes}
                  >
                    {children}
                  </a>
                </Popover>
              );
          }

        case "index":
          switch (element.ouverture) {
            case "same":
              return (
                <Popover
                  overlayClassName="Pop-LienWeb"
                  content={
                    <div style={{ display: "flex" }}>
                      <div
                        style={{
                          color: "orange",
                          fontWeight: "bold"
                        }}
                      >
                        INDEX
                      </div>
                      <div
                        style={{
                          color: "white",
                          marginLeft: "5px",
                          marginRight: "5px"
                        }}
                      >
                        |
                      </div>
                      <div
                        style={{
                          color: "white"
                        }}
                      >
                        {element.nom}
                      </div>
                    </div>
                  }
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
                  content={
                    <div style={{ display: "flex" }}>
                      <div
                        style={{
                          color: "orange",
                          fontWeight: "bold"
                        }}
                      >
                        INDEX
                      </div>
                      <div
                        style={{
                          color: "white",
                          marginLeft: "5px",
                          marginRight: "5px"
                        }}
                      >
                        |
                      </div>
                      <div
                        style={{
                          color: "white"
                        }}
                      >
                        {element.nom}
                      </div>
                    </div>
                  }
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
                  {/*<OpenModal
                  type="index"
                  element={element}
                  attributes={attributes}
                  children={children}
                />*/}
                </span>
              );
          }

        case "cours":
          switch (element.ouverture) {
            case "same":
              return (
                <Popover
                  overlayClassName="Pop-LienWeb"
                  content={
                    <div style={{ display: "flex" }}>
                      <div
                        style={{
                          color: "orange",
                          fontWeight: "bold"
                        }}
                      >
                        COURS
                      </div>
                      <div
                        style={{
                          color: "white",
                          marginLeft: "5px",
                          marginRight: "5px"
                        }}
                      >
                        |
                      </div>
                      <div
                        style={{
                          color: "white"
                        }}
                      >
                        {element.nom}
                      </div>
                    </div>
                  }
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
                  content={
                    <div style={{ display: "flex" }}>
                      <div
                        style={{
                          color: "orange",
                          fontWeight: "bold"
                        }}
                      >
                        COURS
                      </div>
                      <div
                        style={{
                          color: "white",
                          marginLeft: "5px",
                          marginRight: "5px"
                        }}
                      >
                        |
                      </div>
                      <div
                        style={{
                          color: "white"
                        }}
                      >
                        {element.nom}
                      </div>
                    </div>
                  }
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
                  {/*<OpenModal
                type="cours"
                element={element}
                attributes={attributes}
                children={children}
              />*/}
                </span>
              );
          }
        case "exercices":
          switch (element.ouverture) {
            case "same":
              return (
                <Popover
                  overlayClassName="Pop-LienWeb"
                  content={
                    <div style={{ display: "flex" }}>
                      <div
                        style={{
                          color: "orange",
                          fontWeight: "bold"
                        }}
                      >
                        EXERCICES
                      </div>
                      <div
                        style={{
                          color: "white",
                          marginLeft: "5px",
                          marginRight: "5px"
                        }}
                      >
                        |
                      </div>
                      <div
                        style={{
                          color: "white"
                        }}
                      >
                        {element.nom}
                      </div>
                    </div>
                  }
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
                  content={
                    <div style={{ display: "flex" }}>
                      <div
                        style={{
                          color: "orange",
                          fontWeight: "bold"
                        }}
                      >
                        EXERCICES
                      </div>
                      <div
                        style={{
                          color: "white",
                          marginLeft: "5px",
                          marginRight: "5px"
                        }}
                      >
                        |
                      </div>
                      <div
                        style={{
                          color: "white"
                        }}
                      >
                        {element.nom}
                      </div>
                    </div>
                  }
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
        <p
          style={{
            textAlign: element.align,
            marginLeft: element.marginLeft,
            marginTop: "0px",
            marginBottom: "0px"
          }}
          {...attributes}
        >
          {children}
        </p>
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
/*
const OpenModal = ({ type, attributes, children, element }) => {
  const [modalShow, setModalShow] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <Popover
      visible={showTooltip}
      overlayClassName="Pop-LienWeb"
      content={
        <div style={{ display: "flex" }}>
          <div
            style={{
              color: "orange",
              fontWeight: "bold"
            }}
          >
            {type.toUpperCase()}
          </div>
          <div
            style={{
              color: "white",
              marginLeft: "5px",
              marginRight: "5px"
            }}
          >
            |
          </div>
          <div
            style={{
              color: "white"
            }}
          >
            {element.nom}
          </div>
        </div>
      }
    >
      <a
        {...attributes}
        onMouseOver={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onMouseDown={() => setModalShow(true)}
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
          {type === "index" && <DescriptionIndex id={element.value} />}
          {type === "cours" && (
            <Programme
              id={element.value}
              paragraphe={element.paragraphe}
              tableMatiereShow={false}
            />
          )}
          {type === "exercices" && (
            <Programme id={element.value} tableMatiereShow={false} />
          )}
        </div>
      </Modal>
    </Popover>
  );
};
*/
