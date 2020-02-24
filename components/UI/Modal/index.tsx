import * as S from "./Styled";
import Card from "../Card";
import { useState, useEffect } from "react";
import ClientOnlyPortal from "../../Fonctionnels/ClientOnlyPortal";

export interface indexI extends React.HTMLAttributes<HTMLDivElement> {
  showModal: boolean;
  closeModal: () => void;
  titre?: string;
}

const index: React.FC<indexI> = ({
  children,
  showModal,
  closeModal,
  titre,
  ...rest
}) => {
  const [shouldClose, setShouldClose] = useState(false);
  useEffect(() => {}, []);
  return (
    <>
      {showModal && (
        <ClientOnlyPortal selector="#modal">
          <S.Modal
            showModal={showModal}
            shouldClose={shouldClose}
            onClick={() => {
              setShouldClose(true);
              setTimeout(() => {
                closeModal();
                setShouldClose(false);
              }, 200);
            }}
          >
            <Card
              modal
              className={shouldClose ? "shouldCloseModal" : "shouldAppearModal"}
              onClick={e => {
                e.stopPropagation();
              }}
              {...rest}
            >
              {titre && <S.Title>{titre}</S.Title>}
              {children}
            </Card>
          </S.Modal>
        </ClientOnlyPortal>
      )}
    </>
  );
};
export default index;
