import React from "react";
import styled from "styled-components";
// import illustration from "../../../../../public/illustration site internet/portefolio/UxUI/"
export default function UiUxDescription() {
  return (
    <UiUxDescriptionStyled>
      <div className="picture">{/* <img src= alt="" /> */}</div>
      <div className="description">
        <p>
          Mon approche du design UX/UI est ancrée dans la compréhension profonde
          des besoins de l'utilisateur, alliée à une esthétique visuelle
          soignée. Chaque projet que j'entreprends est une opportunité
          d'innover, de repousser les limites et de créer des expériences qui
          transcendent les attentes.
        </p>
        <br />
        <p>
          Maitrisant plusieurs logiciels de la suite Adobe il était naturel pour
          moi d'exploiter le logiciel Adobe XD. Mais parce que Figma est tout
          aussi voir plus utilisé et apprécié il ne m'est pas rare de réaliser
          des projets dessus.
        </p>
      </div>
    </UiUxDescriptionStyled>
  );
}

const UiUxDescriptionStyled = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .picture {
    width: 50%;
    height: 100%;
  }
  .description {
    width: 30%;
    height: 45%;
    background: transparent
      linear-gradient(
        49deg,
        rgba(1, 18, 21, 0.29) 0%,
        rgba(4, 58, 72, 0.29) 100%
      )
      0% 0% no-repeat padding-box;
    box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p {
      width: 80%;
      text-align: justify;
      font: normal normal normal 14px/17px Century Gothic;
      letter-spacing: 0px;
      color: #ffffff;
    }
  }
`;
