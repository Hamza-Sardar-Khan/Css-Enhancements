import React from "react";
import styled from "styled-components";
export default function TitleUiUx() {
  return (
    <TitleUiUxStyled>
      <h1>Site de prêt à porter féminin</h1>
    </TitleUiUxStyled>
  );
}

const TitleUiUxStyled = styled.div`
  width: 100%;
  height: 5.25%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-sizing: border-box;
  border: 1px solid #707070;
  display: flex;
  align-items: center;
  padding-left: 5%;
  h1 {
    text-align: left;
    font: normal normal normal 93px/100px Bebas Neue;
    letter-spacing: 0px;
    color: #282828;
  }

  @media (max-width: 1024px) {
     h1 {
      font: normal normal normal 58px/100px Bebas Neue;
  }

  @media (max-width: 660px) {
    h1 {
     font: normal normal normal 35px/100px Bebas Neue;
 }
`;
