import styled from "@emotion/styled";
import React from "react";

import { EyesPosition } from "../types/types";

const EyesAndIris: React.FC<EyesPosition> = (props) => {
  let x = parseFloat((props.x / 35).toFixed(0)) + 5;
  let y = parseFloat((props.y / 19).toFixed(0));
  y > 100 && (y = 100);

  const Eyes = styled.div`
    content: "";
    display: flex;
    height: 18px;
    width: 30px;
    min-width: 30px;
    background-color: #fff;
    border-radius: 50%;
  `;

  const Iris = styled.div`
    position: relative;
    content: "";
    height: 12px;
    width: 12px;
    background-color: #000;
    border-radius: 50%;
    left: ${x}%;
    top: ${y}%;
  `;

  return (
    <Eyes>
      <Iris />
    </Eyes>
  );
};
export default EyesAndIris;
