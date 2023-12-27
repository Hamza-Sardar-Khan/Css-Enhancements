import React from "react";
import styled from "styled-components";
export default function BlueSquare({ top, left, zindex }) {
  return (
    <BlueSquareStyled top={top} left={left} zindex={zindex}></BlueSquareStyled>
  );
}

const BlueSquareStyled = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: 3.5%;
  height: 7%;
  background: transparent linear-gradient(43deg, #010b15 0%, #042848 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
  border-radius: 10px;
  opacity: 0.7;
  z-index: ${(props) => props.zindex};
`;
