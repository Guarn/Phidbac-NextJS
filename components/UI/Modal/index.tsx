import * as S from "./Styled";
import Card from "../Card";
import { useState, useEffect } from "react";

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
      {...rest}
    >
      <Card
        className={shouldClose ? "shouldCloseModal" : "shouldAppearModal"}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {titre && <S.Title>{titre}</S.Title>}
        {children}
      </Card>
    </S.Modal>
  );
};
export default index;
