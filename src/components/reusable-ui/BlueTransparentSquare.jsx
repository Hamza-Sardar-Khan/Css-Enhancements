import React from "react";
import styled from "styled-components";

export default function BlueTransparentSquare({
  width,
  height,
  top,
  left,
  background,
  transform,
  opacity,
  zindex,
}) {
  return (
    <BlueTransparentSquareStyled
      width={width}
      height={height}
      top={top}
      left={left}
      background={background}
      transform={transform}
      opacity={opacity}
      zindex={zindex}
    >
      <div></div>
    </BlueTransparentSquareStyled>
  );
}

const BlueTransparentSquareStyled = styled.div`
  position: absolute;
  overflow-x: hidden;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  background: ${(props) => props.background};
  box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
  border-radius: 10px;
  transform: ${(props) => props.transform};
  opacity: ${(props) => props.opacity};
  z-index: ${(props) => props.zindex?props.zindex:'-1' };;
`;
