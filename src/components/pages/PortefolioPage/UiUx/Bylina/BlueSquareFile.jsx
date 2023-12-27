import React from "react";
import styled from "styled-components";
import BlueSquare from "./BlueSquare";

export default function BlueSquareFile() {
  return (
    <BlueSquareFileStyled>
      <BlueSquare top={"123%"} left={"37%"} zindex={"-1"} />
      <BlueSquare top={"188%"} left={"59%"} zindex={"0"} />
      <BlueSquare top={"199%"} left={"13%"} zindex={"-1"} />
      <BlueSquare top={"258%"} left={"33%"} zindex={"0"} />
      <BlueSquare top={"203%"} left={"39%"} zindex={"-1"} />
      <BlueSquare top={"218%"} left={"61%"} zindex={"0"} />
      <BlueSquare top={"226%"} left={"39%"} zindex={"-1"} />
    </BlueSquareFileStyled>
  );
}

const BlueSquareFileStyled = styled.div`
  width: 100%;
  height: 100%;
`;
