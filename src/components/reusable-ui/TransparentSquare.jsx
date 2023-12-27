import React from "react";
import styled from "styled-components";

export default function TransparentSquare({ width, height, top, left }) {
  return (
    <TransparentSquareStyled
      width={width}
      height={height}
      top={top}
      left={left}
    >
      <div></div>
    </TransparentSquareStyled>
  );
}

const TransparentSquareStyled = styled.div`
  position: absolute;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  background: transparent linear-gradient(43deg, #f5f0c3 0%, #ffffff 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: inset 0px 10px 6px #58585829;
  border-radius: 10px;
  opacity: 0.15;
  z-index: -1;
`;
