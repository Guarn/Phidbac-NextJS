import React, { FC } from "react";
import styled from "styled-components";
import { CoursI } from ".";

export interface TableMatiere {
  cours: CoursI;
}

const TableMatiere: FC<TableMatiere> = props => {
  return <div>TabMat</div>;
};
export default TableMatiere;
